import {
  AppBar,
  Button,
  Icon,
  PageTitle,
} from '@room-messages/shared-ui-components';
import cn from 'classnames';
import styles from './chat-room-message-app-bar.module.css';

export interface ChatRoomMessageAppBarProps {
  className?: string;
  name: string;
  onBack: () => void;
}

export function ChatRoomMessageAppBar(props: ChatRoomMessageAppBarProps) {
  const { className, name, onBack } = props;

  return (
    <AppBar className={cn(styles['chat-room-app-bar'], className)}>
      <AppBar.Left>
        <Button className={styles['icon-button']} onClick={onBack}>
          <Icon className={styles['back-icon']} name="back" />
        </Button>
      </AppBar.Left>
      <AppBar.Content>
        <PageTitle>{name}</PageTitle>
      </AppBar.Content>
    </AppBar>
  );
}

export default ChatRoomMessageAppBar;
