import {
  ChatRoomAppBar,
  ChatRoomsContainer,
} from '@room-messages/features-chat-room';
import Layout from '../components/layout/layout';
import styles from '../styles/index.module.css';
import { useRouter } from 'next/router';
import { Suspense, useCallback, useState } from 'react';
import { Loading } from '@room-messages/shared-ui-components';

import { dehydrate, QueryClient } from '@tanstack/react-query';
import { getRooms } from '@room-messages/features-chat-room';
import { GetServerSideProps } from 'next';
import {
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
  const router = useRouter();
  const mutation = useSendRoomMessageMutation();
  const [roomId, setRoomId] = useState("1");

  const onInputSubmit = useCallback(
    async (message: string) => {
      await mutation.mutateAsync({
        roomId,
        message,
        user: MOCK_ME,
      });
      await queryClient.invalidateQueries(
        ['chat-room-messages', roomId],
        {
          exact: true,
          type: 'active',
        },
        { throwOnError: false, cancelRefetch: true }
      );
    },
    [mutation, roomId]
  );

  const onNavigateTo = useCallback(
    (roomId: string) => {
      setRoomId(roomId);
    },
    []
  );

  return (
    <Layout>
      <header>
        <ChatRoomAppBar />
      </header>
      <main className={styles['content']}>
        <Suspense fallback={<Loading className={styles['loading']} />}>
          <ChatRoomsContainer onNavigateTo={onNavigateTo} />
        </Suspense>
        <Suspense fallback={<Loading className={styles['loading']} />}>
          <div className={styles["chat-room-messages"]}>
            <ChatRoomMessagesContainer me={MOCK_ME} roomId={roomId} />
            <ChatRoomMessageInputForm
              className={styles['chat-room-message-input']}
              onSubmit={onInputSubmit}
            />
          </div>
        </Suspense>
      </main>
    </Layout>
  );
}

export default List;
