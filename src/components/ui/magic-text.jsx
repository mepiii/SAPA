import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function MagicText({ text, className = '' }) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.25'],
  });

  const words = text.split(' ');

  return (
    <p ref={container} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative mr-1.5 mb-1">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }} className="text-sapa-primary">
        {children}
      </motion.span>
    </span>
  );
}

export default MagicText;