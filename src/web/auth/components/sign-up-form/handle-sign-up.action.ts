"use server"

import {cookies} from "next/headers"

import {validateSignUpCredentials} from "@/auth/lib/validation/sign-up-credentials.validation"
import {querySignup} from "@/user/queries/signup.query"

export const handleSignUpAction = async (formData: FormData) => {
  const {data, errors} = await validateSignUpCredentials(formData)

  if (data) {
    const accessToken = await querySignup(data)
    cookies().set("accessToken", accessToken)
  }

  return {data, errors}
}
