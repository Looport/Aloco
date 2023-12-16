import {Surreal} from "surrealdb.js";

import {User} from "@/user/interfaces/user.interface";

export const queryUser = async (accessToken: string): Promise<User> => {
  const db = new Surreal()

  await db.connect('http://127.0.0.1:8000/rpc', {
    database: 'test',
    namespace: 'test',
  });

  await db.authenticate(accessToken)

  const [[user]] = await db.query<Array<Array<User & Record<any, any>>>>(`
    SELECT * FROM user WHERE id = $auth;
  `)

  return user
}