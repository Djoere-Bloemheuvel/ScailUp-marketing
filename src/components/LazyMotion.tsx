import React from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';

/**
 * Optimized Framer Motion wrapper
 * Reduces bundle size by loading only essential motion features
 */
interface LazyMotionWrapperProps {
  children: React.ReactNode;
}

export const LazyMotionWrapper: React.FC<LazyMotionWrapperProps> = ({ children }) => {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
};

export default LazyMotionWrapper;