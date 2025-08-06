
import { lazy, memo, Suspense } from 'react';

// Only load animation components that actually exist
const OptimizedCinematicAnimations = lazy(() => import('./hero/OptimizedCinematicAnimations'));
const OptimizedHoverAnimations = lazy(() => import('./hero/OptimizedHoverAnimations'));

interface LazyAnimationProviderProps {
  includeHeroAnimations?: boolean;
  includeHoverAnimations?: boolean;
}

const LazyAnimationProvider = memo(({
  includeHeroAnimations = false,
  includeHoverAnimations = false
}: LazyAnimationProviderProps) => {
  return (
    <Suspense fallback={null}>
      {includeHeroAnimations && <OptimizedCinematicAnimations />}
      {includeHoverAnimations && <OptimizedHoverAnimations />}
    </Suspense>
  );
});

LazyAnimationProvider.displayName = 'LazyAnimationProvider';

export default LazyAnimationProvider;
