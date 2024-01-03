import {cookies} from "next/headers"
import {redirect} from "next/navigation"

import {SignUpForm} from "@/web/auth/components/sign-up-form/sign-up-form"

export default function SignUpPage() {
  if (cookies().get("accessToken")) {
    return redirect("/")
  }

  return <SignUpForm />
}
