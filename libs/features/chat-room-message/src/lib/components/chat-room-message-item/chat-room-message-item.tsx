import { DateText, Image } from '@room-messages/shared-ui-components';
import styles from './chat-room-message-item.module.css';
import cn from 'classnames';
import {
  TIME_FORMAT,
  DATE_TIME_FORMAT2,
  toDateTimeText,
} from '@room-messages/shared-utils';
import { User } from '@room-messages/shared/interfaces';
export interface ChatRoomMessageItemProps {
  className?: string;
  children: React.ReactNode;
}

interface MessageProps {
  user: User;
  message: string;
  createdAt?: number;
}

interface SeperatorProps {
  date: number;
}

export function ChatRoomMessageItem(props: ChatRoomMessageItemProps) {
  const { className, children } = props;
  return (
    <div className={cn(styles['chat-room-message-item'], className)}>
      {children}
    </div>
  );
}

function UserMessage(props: MessageProps) {
  const { user, message, createdAt } = props;
  return (
    <div className={styles['user-message-group']}>
      <div className={styles['user-message-header']}>
        <Image
          className={styles['user-profile']}
          width={40}
          height={40}
          src={user.profile}
        />
        <div className={styles['user-name']}>{user.name}</div>
      </div>
      <div className={styles['user-message']}>
        <div className={styles['user-message-text']}>{message}</div>
        {createdAt ? (
          <DateText className={styles['date-text']}>
            {toDateTimeText(createdAt, TIME_FORMAT)}
          </DateText>
        ) : null}
      </div>
    </div>
  );
}

function MyMessage(props: MessageProps) {
  const { message, createdAt } = props;
  return (
    <div className={styles['my-message']}>
      {createdAt ? (
        <DateText className={styles['date-text']}>
          {toDateTimeText(createdAt, TIME_FORMAT)}
        </DateText>
      ) : null}
      <div className={styles['my-message-text']}>{message}</div>
    </div>
  );
}

function Seperator(props: SeperatorProps) {
  const { date } = props;
  return (
    <div className={styles['seperator']}>
      <div className={styles['seperator-line']} />
      <DateText className={styles['seperator-date']}>
        {toDateTimeText(date, DATE_TIME_FORMAT2)}
      </DateText>
      <div className={styles['seperator-line']} />
    </div>
  );
}

ChatRoomMessageItem.UserMessage = UserMessage;
ChatRoomMessageItem.MyMessage = MyMessage;
ChatRoomMessageItem.Seperator = Seperator;

export default ChatRoomMessageItem;
