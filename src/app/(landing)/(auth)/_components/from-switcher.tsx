import {Button} from "@/app/_components/button"
import {cn} from "@/app/_lib/cn"

export const FromSwitcher = ({label, link}: {label: string; link: string}) => (
  <div className={cn(["text-center mb-10"])}>
    {label}{" "}
    <Button
      className={cn(["!text-white/80 !text-sm !font-normal !p-0 !underline"])}
      type="link"
      href={link}
    >
      Click here
    </Button>
  </div>
)