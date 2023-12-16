import {ReactNode} from "react";
import {Header} from "@/app/(landing)/_components/header";

export default function LandingLayout({
                                        children,
                                      }: {
  children: ReactNode
}) {
  return (
    <>
      <Header/>
      {children}
    </>
  )
}
