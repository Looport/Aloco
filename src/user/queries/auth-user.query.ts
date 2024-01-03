import {authenticateConnection} from "@/database/lib/authenticate-connection"
import {connectDb} from "@/database/lib/connect-db"
import {User} from "@/user/interfaces/user.interface"

export const queryAuthUser = async (accessToken: string): Promise<User> => {
  const db = await connectDb()

  try {
    await authenticateConnection(db, accessToken)

    const [[user]] = await db.query<Array<Array<User & Record<any, any>>>>(`
    SELECT * FROM user WHERE id = $auth;
  `)

    return user
  } finally {
    await db.close()
  }
}
