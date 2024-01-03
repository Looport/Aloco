import {Button} from "@/web/common/components/button"
import {cn} from "@/web/common/utils/cn"

export const FromSwitcher = ({label, link}: {label: string; link: string}) => (
  <div className={cn(["text-center mb-10"])}>
    {label}{" "}
    <Button
      className={cn(["!text-white/80 !underline"])}
      type="text"
      href={link}
    >
      Click here
    </Button>
  </div>
)
