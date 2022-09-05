import styles from './button.module.css';
import cn from 'classnames';
import { MouseEventHandler } from "react";

export interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function Button(props: ButtonProps) {
  const { className, children, onClick } = props;
  return (
    <button className={cn(styles['button'], className)} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
