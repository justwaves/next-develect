import type { User } from '@/prisma/generated'
import { prisma } from '@/lib/prisma/prismaClient'

import type { NextApiRequest, NextApiResponse } from 'next'

export interface UpdateUserBody {
  id: User['id']
  nickname?: User['nickname']
  name?: User['image']
}

interface UpdateUserRequest extends NextApiRequest {
  body: UpdateUserBody
}

export default async function handler(
  req: UpdateUserRequest,
  res: NextApiResponse<User>
) {
  const { id, nickname, name } = req.body

  try {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        nickname,
        name,
      },
    })
    res.status(200).json(user)
  } catch (error) {
    console.error(error)
    res.status(500)
  }
}
