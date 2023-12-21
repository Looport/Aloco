import {logoutAction} from "@/app/_actions/logout.action"
import {Button} from "@/app/_components/button"

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
