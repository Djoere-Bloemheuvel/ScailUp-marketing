
import { lazy, memo, Suspense } from 'react';

// Lazy load animation components based on priority
const OptimizedCinematicAnimations = lazy(() => import('./hero/OptimizedCinematicAnimations'));
const OptimizedHoverAnimations = lazy(() => import('./hero/OptimizedHoverAnimations'));

interface LazyOptimizedAnimationsProps {
  includeHeroAnimations?: boolean;
  includeHoverAnimations?: boolean;
}

const LazyOptimizedAnimations = memo(({
  includeHeroAnimations = false,
  includeHoverAnimations = false
}: LazyOptimizedAnimationsProps) => {
  return (
    <Suspense fallback={null}>
      {includeHeroAnimations && <OptimizedCinematicAnimations />}
      {includeHoverAnimations && <OptimizedHoverAnimations />}
    </Suspense>
  );
});

LazyOptimizedAnimations.displayName = 'LazyOptimizedAnimations';

export default LazyOptimizedAnimations;
