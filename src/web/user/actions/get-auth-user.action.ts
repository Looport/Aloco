"use server"

import {cache} from "react"

import {User} from "@/user/interfaces/user.interface"
import {queryAuthUser} from "@/user/queries/auth-user.query"
import {catchAuthException} from "@/web/auth/lib/catch-auth-exeption"
import {requireAccessToken} from "@/web/auth/lib/require-access-token"

export const getAuthUserAction = cache(
  async (): Promise<User> =>
    await catchAuthException(() => queryAuthUser(requireAccessToken()))
)
