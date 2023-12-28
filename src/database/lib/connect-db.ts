import {Surreal} from "surrealdb.js"

const {DB_URL} = process.env

export const connectDb = async ({url = DB_URL}: {url?: string} = {}) => {
  const db = new Surreal()

  await db.connect(`${url}/rpc`, {
    database: "test",
    namespace: "test",
  })

  return db
}
