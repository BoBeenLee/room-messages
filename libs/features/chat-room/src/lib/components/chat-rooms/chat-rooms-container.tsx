import { useQuery } from '@tanstack/react-query';
import { getRooms } from '../../apis/room';
import ChatRooms from './chat-rooms';
export interface ChatRoomsProps {
  className?: string;
  onNavigateTo: (roomId: string) => void;
}

export function ChatRoomsContainer(props: ChatRoomsProps) {
  const query = useQuery(['chat-rooms'], getRooms, { suspense: true });
  return <ChatRooms {...props} rooms={query.data?.rooms ?? []} />;
}

export default ChatRoomsContainer;
