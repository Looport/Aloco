import {cookies} from "next/headers";
import Link from "next/link";
import {queryUser} from "@/user/queries/user.query";

export const Header = async () => {
  const accessToken = cookies().get('accessToken')?.value

  if (accessToken) {
    const user = await queryUser(accessToken)

    return (
      <header>
        <div>
          {user.email}
        </div>
      </header>
    );
  }


  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}