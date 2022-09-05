import {
  Badge,
  DateText,
  Profile,
  ProfileProps,
} from '@room-messages/shared-ui-components';
import styles from './chat-room-item.module.css';
import cn from 'classnames';
import { getChatRoomDateTime } from '../../utils/datetime';

export interface ChatRoomItemProps {
  className?: string;
  children: React.ReactNode;
}

interface RoomProps {
  name: string;
  updatedAt: number;
}
interface MessageProps {
  message: string;
  badgeCount?: number;
}

export function ChatRoomItem(props: ChatRoomItemProps) {
  const { className, children } = props;
  return (
    <div className={cn(styles['chat-room-item'], className)}>{children}</div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return <div className={styles['content']}>{children}</div>;
}

function ChatProfile(props: ProfileProps) {
  const { className, ...rest } = props;
  return <Profile className={cn(styles['profile'], className)} {...rest} />;
}

function Room(props: RoomProps) {
  const { name, updatedAt } = props;
  return (
    <div className={styles['room']}>
      <div className={styles['room-name']}>{name}</div>
      <DateText>{getChatRoomDateTime(updatedAt)}</DateText>
    </div>
  );
}

function Message(props: MessageProps) {
  const { message, badgeCount = 0 } = props;
  return (
    <div className={styles['message']}>
      <div className={styles['message-text']}>{message}</div>
      {badgeCount > 0 ? <Badge>{badgeCount}</Badge> : null}
    </div>
  );
}

ChatRoomItem.Profile = ChatProfile;
ChatRoomItem.Content = Content;
ChatRoomItem.Room = Room;
ChatRoomItem.Message = Message;

export default ChatRoomItem;
