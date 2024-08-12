import DBconnection from "@/utils/config/db";
import UserModel from "@/utils/models/User";
import NextAuth from "next-auth";
import CredentialProvider from 'next-auth/providers/credentials';
import bcrypt from "bcryptjs";

export const {auth, signIn, signOut, handlers : {GET, POST}} = NextAuth({
      providers : [
            CredentialProvider({
                  name : 'credentials',
                  async authorize(credentials){
                        await DBconnection()

                        const user = await UserModel.find({email: credentials?.email})
                        if(!user){
                              return null;
                        }
                        const isValidPassword = bcrypt.compare(credentials?.password, user.password)
                        if(!isValidPassword){
                              return null;
                        }
                        return {name : user.username, email : user.email}
                  }
            })
      ],
      secret : process.env.SECRET_KEY,
      pages : {
            signIn : '/login'
      }
})