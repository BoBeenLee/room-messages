import cn from 'classnames';
import styles from './badge.module.css';

export interface BadgeProps {
  className?: string;
  children: React.ReactNode;
}

export function Badge(props: BadgeProps) {
  const { className, children } = props;
  return <div className={cn(styles['badge'], className)}>{children}</div>;
}

export default Badge;
