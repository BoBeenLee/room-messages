import cn from 'classnames';
import styles from './profile.module.css';
import { Image } from '@room-messages/shared-ui-components';
export interface ProfileProps {
  className?: string;
  source: string;
}

export function Profile(props: ProfileProps) {
  const { className, source } = props;
  return (
    <div className={cn(styles['profile'], className)}>
      <Image alt={'profile'} src={source} layout="fill" objectFit="contain" />
    </div>
  );
}

export default Profile;
