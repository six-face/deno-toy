import { getUsers } from '../services/users.ts'

export default async ({ response }: { [propName: string]: any }) => {
  response.body = await getUsers()
}
