import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';
import { ChatRoomMessage } from '../../interfaces';

interface ChatRoomMessageStoreProps {
  chatRoomMessages: ChatRoomMessage[];
  reset: () => void;
  hydrate: (messages: ChatRoomMessage[]) => void;
  addChatRoomMessage: (message: ChatRoomMessage) => ChatRoomMessage;
  removeChatRoomMessageByMessageId: (messageId: string) => void;
}

export const useChatRoomMessageStore = create<ChatRoomMessageStoreProps>(
  persist(
    (set, get) => ({
      chatRoomMessages: [],
      reset: () => {
        set(
          produce<ChatRoomMessageStoreProps>((state) => {
            state.chatRoomMessages = [];
          })
        );
      },
      hydrate: (messages: ChatRoomMessage[]) => {
        set(
          produce<ChatRoomMessageStoreProps>((state) => {
            state.chatRoomMessages = messages;
          })
        );
      },
      addChatRoomMessage: (message: ChatRoomMessage) => {
        set(
          produce<ChatRoomMessageStoreProps>((state) => {
            state.chatRoomMessages.push(message);
          })
        );
        return message;
      },
      removeChatRoomMessageByMessageId: (messageId: string) => {
        set(
          produce<ChatRoomMessageStoreProps>((state) => {
            state.chatRoomMessages = state.chatRoomMessages.filter(
              (message) => message.id !== messageId
            );
          })
        );
      },
    }),
    {
      name: 'chatRoomMessages',
      getStorage: () => localStorage,
    }
  )
);

export const messagesByCreatedAtDESCSelector = (
  state: ChatRoomMessageStoreProps
) => state.chatRoomMessages;
