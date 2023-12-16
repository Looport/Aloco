import {Surreal} from "surrealdb.js";
import {SignupPayload} from "@/user/interfaces/signup-payload.interface";

export const signupMutation = async ({
                                       email,
                                       password
                                     }: SignupPayload) => {
  const db = new Surreal()

  await db.connect('http://127.0.0.1:8000/rpc', {
    namespace: 'test',
    database: 'test',
  });

  const accessToken = await db.signup({
    scope: 'user',
    email,
    password
  })

  await db.close()

  return accessToken
}