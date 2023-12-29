"use server"

import {catchAuthException} from "@/app/_lib/catch-auth-exeption"
import {requireAccessToken} from "@/app/_lib/require-access-token"
import {User} from "@/user/interfaces/user.interface"
import {queryUser} from "@/user/queries/user.query"

export const getUserAction = async (): Promise<User> =>
  await catchAuthException(() => queryUser(requireAccessToken()))
