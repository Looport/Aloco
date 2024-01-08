"use server"

import {cookies} from "next/headers"

import {validateSignInCredentials} from "@/auth/lib/validation/sign-in-credentials.validation"
import {querySignin} from "@/user/queries/signin.query"

export const handleSignInAction = async (formData: FormData) => {
  const {data, errors} = await validateSignInCredentials(formData)

  if (data) {
    const accessToken = await querySignin(data)
    cookies().set("accessToken", accessToken)
  }

  return {data, errors}
}
