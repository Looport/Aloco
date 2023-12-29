import {MdOutlineAccessTime} from "react-icons/md"

import {Message} from "@/room/interfaces/message.interface"
import {User} from "@/user/interfaces/user.interface"
import {IconProvider} from "@/web/common/components/icons"
import {cn} from "@/web/common/utils/cn"

export const MessageItem = ({
  message,
  currentUser,
}: {
  message: Message
  currentUser: User
}) => (
  <li className={cn(["flex gap-x-2"])}>
    {message.user.id !== currentUser.id && (
      <ProfileImage
        url="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
        email={message.user.email}
      />
    )}
    <div
      className={cn([
        "grow",
        message.user.id === currentUser.id ? "text-end" : "",
      ])}
    >
      <div
        className={cn([
          "inline-flex flex-col",
          message.user.id === currentUser.id ? "text-end justify-end" : "",
        ])}
      >
        <MessageBody
          received={message.user.id !== currentUser.id}
          message={message}
        />
      </div>
    </div>
    {message.user.id === currentUser.id && (
      <ProfileImage
        url="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
        email={message.user.email}
      />
    )}
  </li>
)

const MessageBody = ({
  message,
  received,
}: {
  message: Message
  received?: boolean
}) => (
  <>
    <div
      className={cn([
        "inline-block p-4 shadow-sm rounded-2xl",
        received
          ? [
              ...["bg-white text-gray-800 border border-gray-200"],
              ...["dark:bg-slate-900 dark:border-gray-700 dark:text-white"],
            ].join(" ")
          : "bg-blue-600 text-white",
      ])}
    >
      <h2 className={cn(["font-bold text-xs mb-2"])}>{message.user.email}</h2>
      <p className="text-sm">{message.message}</p>
    </div>
    <CreatedAt date={message.createdAt} />
  </>
)

/**
 * TODO: Fix toLocaleString
 * on server and client locale different
 */
const CreatedAt = ({date}: {date: string}) => (
  <span
    className={cn([
      "mt-2 flex items-center justify-end gap-x-1",
      "text-xs text-gray-500",
    ])}
  >
    <IconProvider value={{size: ".8rem"}}>
      <MdOutlineAccessTime />
    </IconProvider>
    {new Date(date).toLocaleString()}
  </span>
)

const ProfileImage = ({url, email}: {url: string; email: string}) => (
  <img
    className={cn(["inline-block h-9 w-9 rounded-full"])}
    src={url}
    alt={email}
  />
)
