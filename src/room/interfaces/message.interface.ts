import {Room} from '@/room/interfaces/room.interface'
import {User} from '@/user/interfaces/user.interface'

export interface Message {
  id: string
  message: string
  createdAt: string
  user: User
  room: Room
}
