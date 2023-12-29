import {redirect} from "next/navigation"

import {DbAuthException} from "@/database/lib/authenticate-connection"
import {RequireAccessTokenException} from "@/web/auth/lib/require-access-token"

export const catchAuthException = async (callback: () => Promise<any>) => {
  try {
    return await callback()
  } catch (error) {
    if (error instanceof DbAuthException) {
      return redirect("/api/user/logout")
    }

    if (error instanceof RequireAccessTokenException) {
      return redirect("/signin")
    }

    throw error
  }
}
