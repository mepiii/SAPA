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
 'bg-white/60 dark:bg-white/10 backdrop-blur-md',
 'border border-white/20 dark:border-white/10',
 'shadow-[0_20px_50px_rgba(0,0,0,0.1)]',
 'transition-all duration-300 ease-in-out',
 'hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] dark:hover:shadow-glow-lg dark:hover:border-white/20',
 className
 )}
 onClick={onClick}
 whileHover={{ y: -4, scale: 1.02 }}
 transition={{ duration: 0.3, ease: 'easeInOut' }}
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