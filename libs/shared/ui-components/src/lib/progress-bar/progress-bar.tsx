import styles from './progress-bar.module.css';
import cn from 'classnames';
import { motion } from 'framer-motion';

export interface ProgressBarProps {
  className?: string;
  barWidth: number;
  percents: number;
}

const duration = 3;
const delay = 0.5;
const easing = 'easeInOut';

export function ProgressBar(props: ProgressBarProps) {
  const { className, barWidth, percents } = props;
  const percentsOffset = (percents - 100) * (barWidth / 100);

  const transition = {
    duration: duration,
    delay: delay,
    ease: easing,
  };

  const variants = {
    enter: {
      x: -barWidth,
    },
    animate: {
      x: [-barWidth, percentsOffset],
      transition,
    },
  };

  return (
    <div className={cn(styles['progress-bar'], className)}>
      <motion.div
        className={cn(styles['bar-filling'])}
        variants={variants}
        initial="enter"
        animate={'animate'}
        exit="enter"
      />
    </div>
  );
}

export default ProgressBar;
