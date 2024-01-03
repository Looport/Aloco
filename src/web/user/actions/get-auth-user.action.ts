"use server"

import {User} from "@/user/interfaces/user.interface"
import {queryAuthUser} from "@/user/queries/auth-user.query"
import {catchAuthException} from "@/web/auth/lib/catch-auth-exeption"
import {requireAccessToken} from "@/web/auth/lib/require-access-token"

export const getAuthUserAction = async (): Promise<User> =>
  await catchAuthException(() => queryAuthUser(requireAccessToken()))
