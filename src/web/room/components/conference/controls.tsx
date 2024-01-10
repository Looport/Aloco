import {ButtonHTMLAttributes, ReactNode, useReducer} from "react"

import {Button} from "@/web/common/components/button"
import {
  FaRegHandPaper,
  FaRegSmile,
  FiVideo,
  FiVideoOff,
  HiDotsVertical,
  IconProvider,
  TbMicrophone,
  TbMicrophoneOff,
} from "@/web/common/components/icons"
import {cn} from "@/web/common/utils/cn"

type ControlState = {
  microphone: boolean
  video: boolean
}

export const Controls = () => {
  const [{video, microphone}, dispatchControls] = useReducer(
    (state: ControlState, action: Partial<ControlState>) => ({
      ...state,
      ...action,
    }),
    {
      microphone: true,
      video: true,
    }
  )

  return (
    <div className={cn(["flex gap-5 justify-center"])}>
      <IconButton onClick={() => dispatchControls({video: !video})}>
        {video ? <FiVideo /> : <FiVideoOff />}
      </IconButton>

      <IconButton onClick={() => dispatchControls({microphone: !microphone})}>
        {microphone ? <TbMicrophone /> : <TbMicrophoneOff />}
      </IconButton>
      <IconButton>
        <FaRegHandPaper />
      </IconButton>
      <IconButton>
        <FaRegSmile />
      </IconButton>
      <IconButton>
        <HiDotsVertical />
      </IconButton>
    </div>
  )
}

const IconButton = ({
  children,
  onClick,
}: {children: ReactNode} & Pick<ButtonHTMLAttributes<unknown>, "onClick">) => (
  <Button
    onClick={onClick}
    className={cn(["!p-3 bg-gray-400/10"])}
    icon={<IconProvider value={{size: "1.2rem"}}>{children}</IconProvider>}
  />
)
