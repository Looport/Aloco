import {ZodSchema} from "zod"

export const validateFormData = async <T>(
  scheme: ZodSchema<T>,
  formData: FormData
) => {
  const fields = await scheme.safeParseAsync(Object.fromEntries(formData))

  if (!fields.success) {
    return {errors: fields.error.flatten().fieldErrors}
  }

  return {data: fields.data}
}
