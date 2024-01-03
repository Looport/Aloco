import {signUpCredentialsSchema} from "@/auth/lib/validation/sign-up-credentials.validation"
import {validateFormData} from "@/common/lib/validate"
import {queryPassword} from "@/user/queries/password.query"
import {queryUser} from "@/user/queries/user.query"

const signInCredentialsSchema = signUpCredentialsSchema.extend({})

export const validateSignInCredentials = async (formData: FormData) => {
  const {data, errors} = await validateFormData(
    signInCredentialsSchema,
    formData
  )

  const serverValidationErrors: {email?: string[]} = {}
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  if (!errors?.email && email) {
    const user = await queryUser({email})

    if (!user) {
      serverValidationErrors.email = ["Email is not registered"]
    }
  }

  if (!errors?.password && !serverValidationErrors.email?.length && password) {
    const user = await queryPassword({email, password})

    if (!user) {
      serverValidationErrors.email = ["Invalid credentials"]
    }
  }

  if (!data || errors || Object.keys(serverValidationErrors).length) {
    return {errors: {...errors, ...serverValidationErrors}}
  }

  return {data}
}
