import {cookies} from "next/headers";
import Link from "next/link";
import {CreateRoomButton} from "@/app/(landing)/(home)/_components/create-room-button";

export default function HomePage() {
  const accessToken = cookies().get('accessToken')?.value

  return (
    <main>
      <h1>Home Page</h1>
      <section>
        {accessToken ? <p>Welcome, user!</p> : <Link href="/signup">Please log in.</Link>}
      </section>
      {
        accessToken && (
          <section>
            <header>
              <h1>Rooms List</h1>
              <nav>
                <ul>
                  <li>
                    <CreateRoomButton />
                  </li>
                </ul>
              </nav>
            </header>

          </section>
        )
      }
    </main>
  )
}
