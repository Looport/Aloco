import {cookies} from "next/headers"
import {redirect} from "next/navigation"

import {SignUpForm} from "@/web/auth/components/sign-up-form/sign-up-form"

export default function SignUpPage({
  searchParams: {redirectTo},
}: {
  /*
   * TODO: searchParams can't be used in the layout
   * that's why we duplicate it in auth pages
   */
  searchParams: {redirectTo?: string}
}) {
  if (cookies().get("accessToken")) {
    /*
     * TODO: in case when we call redirect from server action to "redirectTo"
     * it doesn't work
     *
     * debug this case
     */
    return redirect(redirectTo ?? "/")
  }

  return <SignUpForm />
}
