import {Surreal} from 'surrealdb.js'

const {DB_URL} = process.env

export const connectDb = async ({url}: {url?: string} = {}) => {
  const db = new Surreal()

  await db.connect(`${url ?? DB_URL}/rpc`, {
    database: 'test',
    namespace: 'test',
  })

  return db
}
