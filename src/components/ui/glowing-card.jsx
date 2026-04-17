import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

export function GlowingCard({
  children,
  className = '',
  onClick,
  ...props
}) {
  return (
    <motion.div
      className={cn(
        'relative group rounded-2xl overflow-hidden',
        'bg-white/90 backdrop-blur-sm',
        'border border-sapa-secondary/15',
        'shadow-sm',
        'transition-all duration-300 ease-out',
        'hover:shadow-lg hover:shadow-sapa-accent/5',
        className
      )}
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {/* Subtle border glow on hover */}
      <div
        className={cn(
          'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100',
          'transition-opacity duration-300 pointer-events-none',
          'border-2 border-sapa-accent/20'
        )}
        style={{ borderRadius: '1rem' }}
      />

      {/* Inner content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default GlowingCard;