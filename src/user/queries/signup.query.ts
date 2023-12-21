import {connectDb} from "@/database/lib/connect-db"
import {SignupPayload} from "@/user/interfaces/signup-payload.interface"

export const querySignup = async ({email, password}: SignupPayload) => {
  const db = await connectDb()

  const accessToken = await db.signup({
    email,
    password,
    scope: "user",
  })

  await db.close()

  return accessToken
}
