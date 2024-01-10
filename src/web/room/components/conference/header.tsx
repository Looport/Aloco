import {cn} from "@/web/common/utils/cn"

export const Header = async ({roomUrl}: {roomUrl: string}) => (
  <header>
    <h1 className={cn(["text-xl font-bold"])}>
      Room: <i>{roomUrl}</i>
    </h1>
  </header>
)
