import { User } from '@room-messages/shared/interfaces';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { getRoomMessages } from '../../apis/room-message';
import {
  messagesByCreatedAtDESCSelector,
  useChatRoomMessageStore,
} from '../../stores';
import ChatRoomMessages from './chat-room-messages';
export interface ChatRoomMessagesProps {
  className?: string;
  me: User;
  roomId: string;
}

export function ChatRoomMessagesContainer(props: ChatRoomMessagesProps) {
  const { roomId } = props;
  const query = useQuery(
    ['chat-room-messages', roomId],
    () => getRoomMessages(roomId),
    {
      suspense: true,
    }
  );
  const { hydrate } = useChatRoomMessageStore();
  const messages = useChatRoomMessageStore(messagesByCreatedAtDESCSelector);

  useEffect(() => {
    hydrate(query.data?.messages ?? []);
  }, [hydrate, query.data?.messages]);

  return (
    <ChatRoomMessages {...props} messages={messages} />
  );
}

export default ChatRoomMessagesContainer;
