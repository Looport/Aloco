import {connectDb} from "@/database/lib/connect-db"
import {SignupPayload} from "@/user/interfaces/signup-payload.interface"

export const querySignup = async ({email, password}: SignupPayload) => {
  const db = await connectDb()

  try {
    return await db.signup({
      email,
      password,
      scope: "user",
    })
  } finally {
    await db.close()
  }
}
