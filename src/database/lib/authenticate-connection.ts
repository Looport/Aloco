import type {SurrealWebSocket} from "surrealdb.js"

export class DbAuthException extends Error {
  constructor(message: string) {
    super(message ?? "Invalid access token")
  }
}

export const authenticateConnection = async (
  db: SurrealWebSocket,
  accessToken: string
) => {
  if (accessToken) {
    try {
      await db.authenticate(accessToken)
    } catch (error: any) {
      throw new DbAuthException(error.message)
    }
  }

  return db
}
