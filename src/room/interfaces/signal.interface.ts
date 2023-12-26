export enum SignalVariant {
  join = "join",
  leave = "leave",
}

export interface JoinSignal {
  type: SignalVariant.join
  userId: string
  roomId: string
  peerId: string
}

export interface LeaveSignal {
  type: SignalVariant.leave
  userId: string
  roomId: string
  peerId: string
}

export type Signal = JoinSignal | LeaveSignal
