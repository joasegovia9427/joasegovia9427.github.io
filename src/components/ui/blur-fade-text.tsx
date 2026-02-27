'use client';

import { motion } from 'motion/react';
import type { ElementType } from 'react';
import { cn } from '@assets/lib/utils';

type BlurFadeTextProps = {
  /** Text content to animate */
  text: string;
  /** Optional CSS classes applied to the wrapper */
  className?: string;
  /** HTML element to render: h1, p, or span */
  as?: 'h1' | 'p' | 'span';
  /** Delay in seconds before animation starts (for stagger) */
  delay?: number;
  /** Duration in seconds for the animation */
  duration?: number;
};

const motionTags = {
  h1: motion.h1,
  p: motion.p,
  span: motion.span,
};

export function BlurFadeText({
  text,
  className,
  as: Tag = 'span',
  delay = 0,
  duration = 0.5,
}: BlurFadeTextProps) {
  const MotionTag = motionTags[Tag] as ElementType;

  return (
    <MotionTag
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={cn(className)}
    >
      {text}
    </MotionTag>
  );
}
