import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

export function AnimatedUnderline({
  text,
  textClassName = '',
  underlineClassName = '',
  as: Component = 'h2',
  ...props
}) {
  return (
    <Component className={cn('relative inline-block', textClassName)} {...props}>
      <motion.span
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {text}
      </motion.span>
      <motion.svg
        width="100%"
        height="8"
        viewBox="0 0 300 8"
        className={cn('absolute -bottom-2 left-0 overflow-visible', underlineClassName)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.path
          d="M0,4 Q75,0 150,4 Q225,8 300,4"
          stroke="#7A47A6"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.3 }}
        />
      </motion.svg>
    </Component>
  );
}

export default AnimatedUnderline;