import {Button} from "@/app/_components/button"
import {IconProvider, VscSend} from "@/app/_components/icons"
import {Input} from "@/app/_components/input"
import {cn} from "@/app/_lib/cn"

export const MessageForm = ({
  onSubmit,
}: {
  onSubmit: (formData: FormData) => void
}) => (
  <article>
    <form
      action={onSubmit}
      autoComplete="off"
    >
      <Input
        name="message"
        placeholder="Type message..."
        iconPosition="end"
        className={cn(["py-5 !px-8"])}
        icon={
          <Button
            type="text"
            icon={
              <IconProvider value={{size: "1.2rem"}}>
                <VscSend />
              </IconProvider>
            }
            htmlType="submit"
          />
        }
      />
    </form>
  </article>
)
