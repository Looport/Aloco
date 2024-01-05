import {AuthForm} from "@/web/auth/components/auth-form/auth-form"
import {AuthProviderButtons} from "@/web/auth/components/auth-form/auth-provider-buttons"
import {FromSwitcher} from "@/web/auth/components/auth-form/from-switcher"
import {handleSignUpAction} from "@/web/auth/components/sign-up-form/handle-sign-up.action"
import {CardTitle} from "@/web/common/components/home/card"
import {cn} from "@/web/common/utils/cn"

export const SignUpForm = ({signInLink}: {signInLink?: string}) => (
  <AuthForm
    header={<Header signInLink={signInLink} />}
    onSubmit={handleSignUpAction}
    buttonLabel="Register"
  />
)

const Header = ({signInLink = "/signin"}: {signInLink?: string}) => (
  <div className={cn(["text-sm text-white/60 mb-5"])}>
    <CardTitle
      color={"bg-gradient-to-r from-[#FFE853] to-[#FF343F]"}
      className={"!text-center"}
    >
      Create an Account
    </CardTitle>
    <FromSwitcher
      label="Already registered?"
      link={signInLink}
    />
    <AuthProviderButtons />
    <div>or use your email for registration:</div>
  </div>
)
