import {redirect} from "next/navigation"

import {RequireAccessTokenException} from "@/app/_lib/require-access-token"
import {DbAuthException} from "@/database/lib/authenticate-connection"

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
