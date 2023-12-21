import {cookies} from "next/headers"
import {redirect} from "next/navigation"

import {AuthForm} from "@/app/(landing)/(auth)/_components/auth-form"
import {AuthProviderButtons} from "@/app/(landing)/(auth)/_components/auth-provider-buttons"
import {FromSwitcher} from "@/app/(landing)/(auth)/_components/from-switcher"
import {CardTitle} from "@/app/(landing)/(home)/_components/card"
import {cn} from "@/app/_lib/cn"
import {querySignup} from "@/user/queries/signup.query"

export default function SignUpPage() {
  if (cookies().get("accessToken")) {
    return redirect("/")
  }

  const handleSubmit = async (formData: FormData) => {
    "use server"

    const accessToken = await querySignup({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    })

    cookies().set("accessToken", accessToken)
  }

  return (
    <main>
      <AuthForm
        header={<Header />}
        onSubmit={handleSubmit}
        buttonLabel="Register"
      />
    </main>
  )
}

const Header = () => (
  <div className={cn(["text-sm text-white/60 mb-5"])}>
    <CardTitle
      color={"bg-gradient-to-r from-[#FFE853] to-[#FF343F]"}
      className={"!text-center"}
    >
      Create an Account
    </CardTitle>
    <FromSwitcher
      label={"Already registered?"}
      link={"/signin"}
    />
    <AuthProviderButtons />
    <div>or use your email for registration:</div>
  </div>
)
