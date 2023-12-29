import {logoutAction} from "@/web/auth/actions/logout.action"
import {Button} from "@/web/common/components/button"

export const LogoutButton = () => (
  <form action={logoutAction}>
    <Button
      type="text"
      htmlType="submit"
    >
      Logout
    </Button>
  </form>
)
