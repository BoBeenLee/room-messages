import React, { useEffect, useRef } from 'react';
import { User } from '@room-messages/shared/interfaces';
import ChatRoomMessageItem from '../chat-room-message-item/chat-room-message-item';
import cn from 'classnames';
import styles from './chat-room-messages.module.css';
import {
  durationDaysByTime,
  durationMinutesByTime,
} from '@room-messages/shared-utils';
import { ChatRoomMessage } from '../../interfaces';

export interface ChatRoomMessagesProps {
  className?: string;
  me: User;
  messages: ChatRoomMessage[];
}

export function ChatRoomMessages(props: ChatRoomMessagesProps) {
  const { className, me, messages } = props;
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  }, [divRef, messages.length]);

  return (
    <div ref={divRef} className={cn(styles['chat-room-messages'], className)}>
      {messages?.map((chatRoomMessage, index) => {
        const { id, user, message, createdAt } =
          chatRoomMessage;

        const isMe = user.id === me.id;
        const diffPrevDays =
          index !== 0
            ? durationDaysByTime(
                messages[index - 1].createdAt,
                messages[index].createdAt
              )
            : 0;
        const diffNextMinutes =
          index + 1 < messages.length
            ? durationMinutesByTime(
                messages[index].createdAt,
                messages[index + 1].createdAt
              )
            : -1;
        const createdAtIfNotSameMinutes =
          diffNextMinutes !== 0 ? createdAt : undefined;
        const SeperatorComponent =
          diffPrevDays > 0 ? (
            <ChatRoomMessageItem key={`separator-${id}`}>
              <ChatRoomMessageItem.Seperator date={createdAt} />
            </ChatRoomMessageItem>
          ) : null;
        return (
          <React.Fragment key={`${id}${index}`}>
            {SeperatorComponent}
            {isMe ? (
              <ChatRoomMessageItem key={id}>
                {message ? (
                  <ChatRoomMessageItem.MyMessage
                    message={message ?? ''}
                    createdAt={createdAtIfNotSameMinutes}
                  />
                ) : null}
              </ChatRoomMessageItem>
            ) : null}
            {!isMe ? (
              <ChatRoomMessageItem key={id}>
                <ChatRoomMessageItem.UserMessage
                  message={message ?? ''}
                  createdAt={createdAtIfNotSameMinutes}
                />
              </ChatRoomMessageItem>
            ) : null}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default ChatRoomMessages;
