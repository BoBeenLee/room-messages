import cn from 'classnames';
import ChatRoomItem from '../chat-room-item/chat-room-item';
import styles from './chat-rooms.module.css';
import { Button } from '@room-messages/shared-ui-components';
import { useCallback } from 'react';
import { ChatRoom } from '../../interfaces';
export interface ChatRoomsProps {
  className?: string;
  selectedRoomId?: string;
  rooms: ChatRoom[];
  onNavigateTo: (room: ChatRoom) => void;
}

export function ChatRooms(props: ChatRoomsProps) {
  const { className, selectedRoomId, rooms = [], onNavigateTo } = props;

  const onRoomNavigateTo = useCallback(
    (room: ChatRoom) => {
      return () => {
        onNavigateTo(room);
      };
    },
    [onNavigateTo]
  );

  return (
    <div className={cn(styles['chat-rooms'], className)}>
      {rooms?.map((room) => {
        const { id, user, lastestMessage, unreadCount } = room;
        return (
          <Button key={room.id} onClick={onRoomNavigateTo(room)}>
            <ChatRoomItem
              className={cn([
                styles['chat-room'],
                {
                  [styles['selected-chat-room']]: selectedRoomId === id,
                },
              ])}
            >
              <ChatRoomItem.Profile source={user.profile} />
              <ChatRoomItem.Content>
                <ChatRoomItem.Room
                  name={user.name}
                  updatedAt={lastestMessage.createdAt}
                />
                <ChatRoomItem.Message
                  message={lastestMessage.message ?? ''}
                  badgeCount={unreadCount}
                />
              </ChatRoomItem.Content>
            </ChatRoomItem>
          </Button>
        );
      })}
    </div>
  );
}

export default ChatRooms;
