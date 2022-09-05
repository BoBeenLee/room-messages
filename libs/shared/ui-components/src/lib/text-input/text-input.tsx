import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './text-input.module.css';

export interface TextInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props: TextInputProps, ref) => {
    const { className, ...rest } = props;
    return (
      <input
        className={cn(styles['text-input'], className)}
        ref={ref}
        {...rest}
      />
    );
  }
);

export default TextInput;
