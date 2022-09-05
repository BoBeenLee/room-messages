import styles from './page-title.module.css';
import cn from 'classnames';
export interface PageTitleProps {
  className?: string;
  children: React.ReactNode;
}

export function PageTitle(props: PageTitleProps) {
  const { className, children } = props;
  return <h1 className={cn(styles['page-title'], className)}>{children}</h1>;
}

export default PageTitle;
