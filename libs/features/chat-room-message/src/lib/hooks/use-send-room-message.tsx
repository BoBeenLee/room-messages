import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { sendRoomMessage } from '../apis';
import { ChatRoomMessage } from '../interfaces';

type SendRoomMessageParams = Omit<ChatRoomMessage, 'id' | 'createdAt'> & {
  roomId: string;
};

export const useSendRoomMessageMutation = (
  options?: Omit<
    UseMutationOptions<void, AxiosError, SendRoomMessageParams>,
    'mutationFn'
  >
) => {
  const mutation = useMutation<void, AxiosError, SendRoomMessageParams>(
    (args) => {
      const response = sendRoomMessage(args);
      return response;
    },
    options
  );

  return { ...mutation };
};
