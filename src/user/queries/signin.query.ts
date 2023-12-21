import {connectDb} from "@/database/lib/connect-db"
import {SignupPayload} from "@/user/interfaces/signup-payload.interface"

export const querySignin = async ({email, password}: SignupPayload) => {
  const db = await connectDb()

  const accessToken = await db.signin({
    email,
    password,
    scope: "user",
  })

  await db.close()

  return accessToken
}
