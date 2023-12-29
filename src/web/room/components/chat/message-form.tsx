import {Button} from "@/web/common/components/button"
import {IconProvider, VscSend} from "@/web/common/components/icons"
import {Input} from "@/web/common/components/input"
import {cn} from "@/web/common/utils/cn"

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
