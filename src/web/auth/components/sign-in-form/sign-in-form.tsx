import {AuthForm} from "@/web/auth/components/auth-form/auth-form"
import {AuthProviderButtons} from "@/web/auth/components/auth-form/auth-provider-buttons"
import {FromSwitcher} from "@/web/auth/components/auth-form/from-switcher"
import {handleSignInAction} from "@/web/auth/components/sign-in-form/handle-sign-in.action"
import {CardTitle} from "@/web/common/components/home/card"
import {cn} from "@/web/common/utils/cn"

export const SignInForm = ({signUpLink}: {signUpLink?: string}) => (
  <AuthForm
    header={<Header signUpLink={signUpLink} />}
    onSubmit={handleSignInAction}
    buttonLabel="Enter"
  />
)

const Header = ({signUpLink = "/signup"}: {signUpLink?: string}) => (
  <div className={cn(["text-sm text-white/60 mb-5"])}>
    <CardTitle
      color={"bg-gradient-to-r from-[#FFE853] to-[#FF343F]"}
      className={"!text-center"}
    >
      Login into your account
    </CardTitle>
    <FromSwitcher
      label="Don't have an account?"
      link={signUpLink}
    />
    <AuthProviderButtons />
    <div>or use your email for registration:</div>
  </div>
)
