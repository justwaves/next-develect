import { signIn } from 'next-auth/react'

export const useSignInWithGoogle = () => {
  const signInWithGoogle = () => signIn('google')

  return { signInWithGoogle }
}
