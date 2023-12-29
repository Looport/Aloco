import {cookies} from "next/headers"
import {redirect} from "next/navigation"

import {querySignin} from "@/user/queries/signin.query"
import {AuthForm} from "@/web/auth/components/auth-form"
import {AuthProviderButtons} from "@/web/auth/components/auth-provider-buttons"
import {FromSwitcher} from "@/web/auth/components/from-switcher"
import {CardTitle} from "@/web/common/components/home/card"
import {cn} from "@/web/common/utils/cn"

export default function SignUpPage() {
  if (cookies().get("accessToken")) {
    return redirect("/")
  }

  const handleSubmit = async (formData: FormData) => {
    "use server"

    const accessToken = await querySignin({
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
        buttonLabel="Login"
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
      Login into your account
    </CardTitle>
    <FromSwitcher
      label={"Don't have an account?"}
      link={"/signup"}
    />
    <AuthProviderButtons />
    <div>or use your email for registration:</div>
  </div>
)
