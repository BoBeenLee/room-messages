import { AppBar, Icon, PageTitle } from '@room-messages/shared-ui-components';
import cn from 'classnames';
import styles from './chat-room-app-bar.module.css';

export interface ChatRoomAppBarProps {
  className?: string;
}

export function ChatRoomAppBar(props: ChatRoomAppBarProps) {
  const { className } = props;
  return (
    <AppBar className={cn(styles['chat-room-app-bar'], className)}>
      <AppBar.Left>
        <Icon className={styles['menu-icon']} name="menu" />
      </AppBar.Left>
      <AppBar.Content>
        <PageTitle>채팅</PageTitle>
      </AppBar.Content>
      <AppBar.Right>
        <Icon className={styles['person-icon']} name="person" />
      </AppBar.Right>
    </AppBar>
  );
}

export default ChatRoomAppBar;
