'use server'

import { signIn } from "../auth"

export async function loginAction(loginDetails){
      console.log('Login Details from LOGIN FORM ',loginDetails)
      try {
            const response = await signIn('credentials', {
                  email: loginDetails.email,
                  password : loginDetails.password,
                  redirect : false,
            })
            if(!response || response.error){
                  console.log('login failed', response?.error)
                  throw new Error('login failed')
            }
            return {success : true}
      } catch (error) {
            throw new Error('Invalid credentials')
      }
}