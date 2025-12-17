import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function createUser(username, password) {
  const existingUser = await prisma.user.findUnique({
    where: { username }
  })

  if (existingUser) {
    throw new Error('Username already exists')
  }

  return await prisma.user.create({
    data: { username, password }
  })
}

export async function findUserByUsername(username) {
  return await prisma.user.findUnique({
    where: { username }
  })
}

export async function getAllUsers() {
  return await prisma.user.findMany({
    orderBy: { createdAt: 'desc' }
  })
}

export async function getUserCount() {
  return await prisma.user.count()
}

export async function testConnection() {
  try {
    await prisma.$queryRaw`SELECT 1`
    return { status: 'healthy', driver: 'prisma', database: 'postgresql' }
  } catch (error) {
    return { status: 'unhealthy', driver: 'prisma', database: 'postgresql', error: error.message }
  }
}

export default prisma

