import styles from './app-bar.module.css';
import cn from 'classnames';

export interface AppBarProps {
  className?: string;
  children: React.ReactNode;
}

export function AppBar(props: AppBarProps) {
  const { className, children } = props;
  return <nav className={cn(styles['app-bar'], className)}>{children}</nav>;
}

function AppbarContent({ children }: { children: React.ReactNode }) {
  return <div className={styles['app-bar-content']}>{children}</div>;
}

function AppBarLeft({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn(styles['app-bar-left'], className)}>{children}</div>
  );
}

function AppBarRight({ children }: { children: React.ReactNode }) {
  return <div className={styles['app-bar-right']}>{children}</div>;
}

AppBar.Left = AppBarLeft;
AppBar.Right = AppBarRight;
AppBar.Content = AppbarContent;

export default AppBar;
