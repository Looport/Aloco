import {z} from "zod"

import {validateFormData} from "@/common/lib/validate"
import {queryUser} from "@/user/queries/user.query"

export const signUpCredentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
})

export const validateSignUpCredentials = async (formData: FormData) => {
  const {data, errors} = await validateFormData(
    signUpCredentialsSchema,
    formData
  )

  const serverValidationErrors: {email?: string[]} = {}
  const email = formData.get("email") as string

  if (!errors?.email && email) {
    const user = await queryUser({email})

    if (user) {
      serverValidationErrors.email = ["Email is already in use"]
    }
  }

  if (!data || errors || Object.keys(serverValidationErrors).length) {
    return {errors: {...errors, ...serverValidationErrors}}
  }

  return {data}
}
