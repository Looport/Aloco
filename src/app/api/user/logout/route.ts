import {cookies} from "next/headers"
import {redirect} from "next/navigation"

export const GET = async () => {
  cookies().delete("accessToken")
  return redirect("/signin")
}
