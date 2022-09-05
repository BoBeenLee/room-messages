import {
  AppBar,
  PageTitle,
} from '@room-messages/shared-ui-components';
import cn from 'classnames';
import styles from './chat-room-message-app-bar.module.css';

export interface ChatRoomMessageAppBarProps {
  className?: string;
  name: string;
}

export function ChatRoomMessageAppBar(props: ChatRoomMessageAppBarProps) {
  const { className, name } = props;

  return (
    <AppBar className={cn(styles['chat-room-app-bar'], className)}>
      <AppBar.Left>
        <PageTitle>{name}</PageTitle>
      </AppBar.Left>
      <AppBar.Content>
        <div />
      </AppBar.Content>
    </AppBar>
  );
}

export default ChatRoomMessageAppBar;
