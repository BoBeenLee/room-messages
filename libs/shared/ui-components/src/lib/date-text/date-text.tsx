import cn from 'classnames';
import styles from './date-text.module.css';

export interface DateTextProps {
  className?: string;
  children: React.ReactNode;
}

export function DateText(props: DateTextProps) {
  const { className, children } = props;
  return <span className={cn(styles['date-text'], className)}>{children}</span>;
}

export default DateText;
