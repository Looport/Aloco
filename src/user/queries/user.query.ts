import {connectDb} from "@/database/lib/connect-db"
import {User} from "@/user/interfaces/user.interface"

export const queryUser = async (accessToken: string): Promise<User> => {
  const db = await connectDb()

  await db.authenticate(accessToken)

  const [[user]] = await db.query<Array<Array<User & Record<any, any>>>>(`
    SELECT * FROM user WHERE id = $auth;
  `)

  return user
}
