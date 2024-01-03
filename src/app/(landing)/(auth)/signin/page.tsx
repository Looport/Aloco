import {cookies} from "next/headers"
import {redirect} from "next/navigation"

import {SignInForm} from "@/web/auth/components/sign-in-form/sign-in-form"

export default function SignUpPage() {
  if (cookies().get("accessToken")) {
    return redirect("/")
  }

  return <SignInForm />
}
