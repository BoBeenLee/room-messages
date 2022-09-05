import {
  ChatRoomMessageAppBar,
  ChatRoomMessageInputForm,
  ChatRoomMessagesContainer,
  getRoomMessages,
  useSendRoomMessageMutation,
} from '@room-messages/features-chat-room-message';
import Layout from '../../components/layout/layout';
import { Suspense, useCallback } from 'react';
import { useRouter } from 'next/router';
import { MOCK_ME } from '@room-messages/shared/interfaces';
import styles from '../../styles/room-[id].module.css';
import { MOCK_CHAT_ROOMS } from '@room-messages/features-chat-room';
import { Loading } from '@room-messages/shared-ui-components';
import { queryClient } from '@room-messages/shared-apis';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const roomId = context.query.id as string;
  const queryClient = new QueryClient();

  await queryClient.fetchQuery(['chat-room-messages', roomId], () =>
    getRoomMessages(roomId)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export function RoomId() {
  const router = useRouter();
  const roomId = router.query.id as string;
  const room = MOCK_CHAT_ROOMS.find((room) => room.id === roomId);
  const mutation = useSendRoomMessageMutation();

  const onBack = useCallback(() => {
    router.replace('/list');
  }, [router]);

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

  return (
    <Layout>
      <header>
        <ChatRoomMessageAppBar
          name={room?.user?.name ?? ''}
          onBack={onBack}
        />
      </header>
      <main className={styles['content']}>
        <Suspense fallback={<Loading className={styles['loading']} />}>
          <ChatRoomMessagesContainer me={MOCK_ME} roomId={roomId} />
          <ChatRoomMessageInputForm
            className={styles['chat-room-message-input']}
            onSubmit={onInputSubmit}
          />
        </Suspense>
      </main>
    </Layout>
  );
}

export default RoomId;
