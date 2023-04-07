import { PrismaClient } from '../node_modules/.prisma/client'

const client = new PrismaClient()

const users = [
  { name: 'user-1', email: 'user-1@gmail.com' },
  { name: 'user-2', email: 'user-2@gmail.com' },
  { name: 'user-3', email: 'user-3@gmail.com' },
  { name: 'user-4', email: 'user-4@gmail.com' },
  { name: 'user-5', email: 'user-5@gmail.com' },
]

const main = async () => {
  users.forEach(async ({ name, email }) => {
    await client.user.create({
      data: {
        email,
      },
    })
  })
}

main()
  .catch((err) => console.log(err))
  .finally(() => client.$disconnect())
