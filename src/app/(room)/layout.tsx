import {Inter} from 'next/font/google'
import {ReactNode} from "react";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";

export default function RoomLayout({
                                     children,
                                   }: {
  children: ReactNode
}) {
  const accessToken = cookies().get('accessToken')?.value

  if (!accessToken) {
    return redirect('/')
  }

  return (
    <>
      {children}
    </>
  )
}
