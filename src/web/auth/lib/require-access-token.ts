import {cookies} from "next/headers"

export class RequireAccessTokenException extends Error {
  constructor() {
    super("Require access token")
  }
}

export const requireAccessToken = () => {
  const accessToken = cookies().get("accessToken")?.value

  if (!accessToken) {
    throw new RequireAccessTokenException()
  }

  return accessToken
}
