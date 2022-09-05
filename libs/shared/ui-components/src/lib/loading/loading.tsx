import styles from './loading.module.css';
import cn from 'classnames';
import Icon from '../icon/icon';

export interface LoadingProps {
  className?: string;
}

export function Loading(props: LoadingProps) {
  const { className } = props;
  return (
    <div className={cn(styles['loading'], className)}>
      <Icon className={styles['loading-icon']} name={'loading'} />
    </div>
  );
}

export default Loading;
