import { MouseEventHandler } from 'react';
import Button from '../button/button';
import Icon, { IconProps } from '../icon/icon';
import styles from './icon-button.module.css';
import cn from 'classnames';

export interface IconButtonProps extends IconProps {
  className?: string;
  iconClassName?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function IconButton(props: IconButtonProps) {
  const { className, iconClassName, onClick, ...rest } = props;
  return (
    <Button className={cn(styles['icon-button'], className)} onClick={onClick}>
      <Icon className={iconClassName} {...rest} />
    </Button>
  );
}

export default IconButton;
