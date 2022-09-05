import { ChatRoomMessage } from '@room-messages/features-chat-room-message';
import { User } from '@room-messages/shared/interfaces';

export interface ChatRoom {
  id: string;
  user: User;
  lastestMessage: ChatRoomMessage;
  unreadCount: number;
}
