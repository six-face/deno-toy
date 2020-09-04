import { getUser } from '../services/users.ts'

export default async ({ params, response }: { [propName: string]: any }) => {
  const userId: any = params.id

  if (!userId) {
    response.status = 400
    response.body = { msg: 'invalid user id' }
    return
  }

  const foundUser = await getUser(userId)

  if (!foundUser) {
    response.status = 404
    response.body = { msg: `User with ID ${userId} not found` }
    return
  }

  response.body = foundUser
}
