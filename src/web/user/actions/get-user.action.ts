"use server"

import {User} from "@/user/interfaces/user.interface"
import {queryUser} from "@/user/queries/user.query"
import {catchAuthException} from "@/web/auth/lib/catch-auth-exeption"
import {requireAccessToken} from "@/web/auth/lib/require-access-token"

export const getUserAction = async (): Promise<User> =>
  await catchAuthException(() => queryUser(requireAccessToken()))
