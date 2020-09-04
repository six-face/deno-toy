import { DB_PATH } from '../config.ts'
import { User } from '../models/user.ts'

export const fetchData = async (): Promise<User[]> => {
  const data: any = await Deno.readFile(DB_PATH)

  const decoder = new TextDecoder()
  const decoderData = decoder.decode(data)

  return JSON.parse(decoderData)
}

export const persistData = async (data: any): Promise<void> => {
  const encoder = new TextEncoder()
  await Deno.writeFile(DB_PATH, encoder.encode(JSON.stringify(data)))
}
