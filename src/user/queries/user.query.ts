import {connectDb} from "@/database/lib/connect-db"
import {User} from "@/user/interfaces/user.interface"

export const queryUser = async ({
  email,
  id,
}: {
  email?: string
  id?: string
}): Promise<User> => {
  const db = await connectDb()

  try {
    // TODO: check how it works when one of params is undefined
    const [[user]] = await db.query<Array<Array<User & Record<any, any>>>>(
      `
    SELECT * FROM user WHERE email = $email OR id = $id;
  `,
      {email, id}
    )

    return user
  } finally {
    await db.close()
  }
}
