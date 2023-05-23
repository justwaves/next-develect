import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth, { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import { prisma } from '@/lib/prisma/prismaClient'

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      const userInfo = {
        ...session.user,
        id: user.id,
        nickname: user.nickname,
      }

      return {
        ...session,
        user: userInfo,
      }
    },
    jwt: async ({ token }) => token,
  },
  pages: {
    newUser: '/auth/new-user',
  },
}

export default NextAuth(authOptions)
