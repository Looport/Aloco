import {authenticateConnection} from "@/database/lib/authenticate-connection"
import {connectDb} from "@/database/lib/connect-db"
import {User} from "@/user/interfaces/user.interface"

export const queryPassword = async ({
  email,
  password,
}: {
  email: string
  password: string
}): Promise<User> => {
  const db = await connectDb()

  try {
    // TODO: check performance for crypto function
    const [[user]] = await db.query<Array<Array<User & Record<any, any>>>>(
      `
    SELECT * FROM user 
    WHERE email = $email AND 
    crypto::argon2::compare(password, $password);
  `,
      {email, password}
    )

    return user
  } finally {
    await db.close()
  }
}
