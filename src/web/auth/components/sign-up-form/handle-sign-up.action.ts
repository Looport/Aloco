"use server"

import {cookies} from "next/headers"

import {validateSignUpCredentials} from "@/auth/lib/validation/sign-up-credentials.validation"
import {querySignup} from "@/user/queries/signup.query"

export const handleSignUpAction = async (__: any, formData: FormData) => {
  const {data, errors} = await validateSignUpCredentials(formData)

  if (errors) {
    return {errors}
  }

  if (!data) return

  const accessToken = await querySignup(data)

  cookies().set("accessToken", accessToken)
}
