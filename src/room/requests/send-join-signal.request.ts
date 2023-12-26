import {JoinSignal, SignalVariant} from "@/room/interfaces/signal.interface"

export const sendJoinSignalRequest = async (
  {roomId}: {roomId: string},
  {abortSignal}: {abortSignal?: AbortSignal} = {}
): Promise<JoinSignal> =>
  fetch(`/api/room/${roomId}/signals`, {
    body: JSON.stringify({
      roomId,
      type: SignalVariant.join,
    }),
    headers: {"Content-Type": "application/json"},
    method: "POST",
    signal: abortSignal,
  }).then((res) => res.json())
