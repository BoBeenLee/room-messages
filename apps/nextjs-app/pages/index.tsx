import {
  ChatRoom,
  ChatRoomAppBar,
  ChatRoomsContainer,
  MOCK_CHAT_ROOMS,
} from '@room-messages/features-chat-room';
import Layout from '../components/layout/layout';
import styles from '../styles/index.module.css';
import { Suspense, useCallback, useState } from 'react';
import { Loading } from '@room-messages/shared-ui-components';

import { dehydrate, QueryClient } from '@tanstack/react-query';
import { getRooms } from '@room-messages/features-chat-room';
import { GetServerSideProps } from 'next';
import {
  ChatRoomMessageAppBar,
  ChatRoomMessageInputForm,
  ChatRoomMessagesContainer,
  useSendRoomMessageMutation,
} from '@room-messages/features-chat-room-message';
import { MOCK_ME } from '@room-messages/shared/interfaces';
import { queryClient } from '@room-messages/shared-apis';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryClient = new QueryClient();

  await queryClient.fetchQuery(['chat-rooms'], getRooms);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export function List() {
  const mutation = useSendRoomMessageMutation();
  const [room, setRoom] = useState<ChatRoom>(MOCK_CHAT_ROOMS[0]);

  const onInputSubmit = useCallback(
    async (message: string) => {
      await mutation.mutateAsync({
        roomId: room.id,
        message,
        user: MOCK_ME,
      });
      await queryClient.invalidateQueries(
        ['chat-room-messages', room.id],
        {
          exact: true,
          type: 'active',
        },
        { throwOnError: false, cancelRefetch: true }
      );
    },
    [mutation, room]
  );

  const onNavigateTo = useCallback((room: ChatRoom) => {
    setRoom(room);
  }, []);

  return (
    <Layout>
      <main className={styles['content']}>
        <div className={styles['chat-rooms']}>
          <ChatRoomAppBar />
          <Suspense fallback={<Loading className={styles['loading']} />}>
            <ChatRoomsContainer selectedRoomId={room.id} onNavigateTo={onNavigateTo} />
          </Suspense>
        </div>
        <div className={styles['chat-room-messages']}>
          <ChatRoomMessageAppBar name={room.user.name} />
          <Suspense fallback={<Loading className={styles['loading']} />}>
            <ChatRoomMessagesContainer me={MOCK_ME} roomId={room.id} />
            <ChatRoomMessageInputForm
              className={styles['chat-room-message-input']}
              onSubmit={onInputSubmit}
            />
          </Suspense>
        </div>
      </main>
    </Layout>
  );
}

export default List;
