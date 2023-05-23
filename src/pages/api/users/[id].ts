import type { User } from '@/prisma/generated'
import { prisma } from '@/lib/prisma/prismaClient'

import type { NextApiRequest, NextApiResponse } from 'next'

interface GetUserRequest extends NextApiRequest {
  query: {
    id: string
  }
}

export default async function handler(
  req: GetUserRequest,
  res: NextApiResponse<User>
) {
  const { id } = req.query

  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    })

    if (!user) {
      res.status(404)
      return
    }

    res.status(200).json(user)
  } catch (error) {
    console.error(error)
    res.status(500)
  }
}
