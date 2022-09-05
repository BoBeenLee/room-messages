import { IconButton, TextInput } from '@room-messages/shared-ui-components';
import styles from './chat-room-message-input-form.module.css';
import cn from 'classnames';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCallback } from 'react';

export interface ChatRoomMessageInputFormProps {
  className?: string;
  onSubmit: (message: string) => void;
}

interface ChatRoomMessageFormInputs {
  message: string;
}

export function ChatRoomMessageInputForm(props: ChatRoomMessageInputFormProps) {
  const { className, onSubmit } = props;
  const {
    register,
    handleSubmit,
    trigger,
    formState: { isValid },
    reset,
  } = useForm<ChatRoomMessageFormInputs>({
    mode: 'all',
  });

  const onFormSubmit: SubmitHandler<ChatRoomMessageFormInputs> = useCallback(
    (data) => {
      const { message } = data;
      onSubmit(message);
      reset();
    },
    [onSubmit, reset]
  );

  const onSendMessage = useCallback(() => {
    if (!isValid) {
      return;
    }
    trigger();
  }, [isValid, trigger]);

  return (
    <form
      className={cn(styles['chat-room-message-input-form'], className)}
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <TextInput
        type={"text"}
        className={styles['chat-room-message-input']}
        placeholder="메시지를 입력하세요.."
        {...register('message', { required: true })}
      />
      <IconButton
        className={styles['send-button']}
        name="send"
        onClick={onSendMessage}
      />
    </form>
  );
}

export default ChatRoomMessageInputForm;
