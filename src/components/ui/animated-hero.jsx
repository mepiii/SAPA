import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

export const AnimatedHero = React.memo(function AnimatedHero({
  badge,
  title,
  titleAccent,
  subtitle,
  primaryCTA,
  secondaryCTA,
  onPrimaryClick,
  onSecondaryClick,
  className = '',
}) {
  const titleWords = useMemo(() => title.split(' '), [title]);
  const accentWords = useMemo(() => titleAccent ? titleAccent.split(' ') : [], [titleAccent]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 100, damping: 20, mass: 1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20, mass: 1 },
    },
  };

  return (
    <section className={cn('relative min-h-screen flex items-center justify-center px-4 pt-24 pb-16', className)}>
      {/* Glowing Orb Background */}
      <div className="glow-orb w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <motion.div
        className="relative z-10 text-center max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Pill Badge */}
        {badge && (
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_20px_50px_rgba(0,0,0,0.05)] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-sapa-accent" />
            <span className="text-sm font-body font-medium text-sapa-primary tracking-tight">
              {badge}
            </span>
          </motion.div>
        )}

        {/* Headline with staggered words */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-[#300B55] drop-shadow-heading tracking-tight leading-[1.1] mb-6"
          variants={containerVariants}
        >
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className="inline-block mr-2 md:mr-3"
              whileHover={{ scale: 1.15, y: -5, rotate: -3, color: '#7A47A6' }}
            >
              {word}
            </motion.span>
          ))}
          <br className="hidden sm:block" />
          {accentWords.length > 0 && (
            <motion.span
              variants={containerVariants}
              className="text-sapa-accent inline-flex flex-wrap justify-center mt-2"
            >
              {accentWords.map((word, i) => (
                <motion.span
                  key={`accent-${i}`}
                  variants={wordVariants}
                  className="inline-block mr-2 md:mr-3"
              whileHover={{ scale: 1.15, y: -5, rotate: -3, color: '#7A47A6' }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>
          )}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl font-body text-sapa-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {/* CTA Buttons */}
        {(primaryCTA || secondaryCTA) && (
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {primaryCTA && (
              <motion.button
                onClick={onPrimaryClick}
                className="px-8 py-4 bg-sapa-accent text-white font-display font-semibold rounded-full hover:bg-sapa-primary transition-all duration-300 shadow-[0_10px_30px_rgba(122,71,166,0.3)] hover:-translate-y-2 hover:shadow-cinematic hover:scale-[1.03] active:scale-95 transition-all duration-300 ease-out"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {primaryCTA}
              </motion.button>
            )}
            {secondaryCTA && (
              <motion.button
                onClick={onSecondaryClick}
                className="px-8 py-4 border border-white/50 bg-white/70 backdrop-blur-xl text-sapa-primary font-display font-medium rounded-full hover:bg-sapa-highlight transition-all duration-300 ease-out shadow-cinematic hover:scale-[1.03] active:scale-95"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {secondaryCTA}
              </motion.button>
            )}
          </motion.div>
        )}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-sapa-secondary/30 flex items-start justify-center p-1 animate-bounce">
          <div className="w-1.5 h-3 bg-sapa-secondary/60 rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
});

export default AnimatedHero;