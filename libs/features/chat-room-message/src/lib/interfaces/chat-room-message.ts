import { User } from "@room-messages/shared/interfaces";



export interface ChatRoomMessage {
  id: string;
  user: User;
  message?: string;
  createdAt: number;
}
