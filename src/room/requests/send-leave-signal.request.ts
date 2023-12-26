import {LeaveSignal, SignalVariant} from "@/room/interfaces/signal.interface"

export const sendLeaveSignalRequest = async (
  {roomId, peerId}: {roomId: string; peerId: string},
  {abortSignal}: {abortSignal?: AbortSignal} = {}
): Promise<LeaveSignal> =>
  fetch(`/api/room/${roomId}/signals`, {
    body: JSON.stringify({
      peerId,
      roomId,
      type: SignalVariant.leave,
    }),
    headers: {"Content-Type": "application/json"},
    method: "POST",
    signal: abortSignal,
  }).then((res) => res.json())
