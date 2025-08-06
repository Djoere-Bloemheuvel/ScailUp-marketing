import { lazy, memo, Suspense } from 'react';

// Lazy load heavy animation components only when needed
const OptimizedAnimations = lazy(() => import('./OptimizedAnimations'));
const CinematicAnimations = lazy(() => import('./hero/CinematicAnimations'));
const AmbientLighting = lazy(() => import('./hero/AmbientLighting'));

interface LazyAnimationProviderProps {
  includeHeroAnimations?: boolean;
  includeAmbientLighting?: boolean;
  includeOptimizedAnimations?: boolean;
}

const LazyAnimationProvider = memo(({
  includeHeroAnimations = false,
  includeAmbientLighting = false,
  includeOptimizedAnimations = false
}: LazyAnimationProviderProps) => {
  return (
    <Suspense fallback={null}>
      {includeOptimizedAnimations && <OptimizedAnimations />}
      {includeHeroAnimations && <CinematicAnimations />}
      {includeAmbientLighting && <AmbientLighting />}
    </Suspense>
  );
});

LazyAnimationProvider.displayName = 'LazyAnimationProvider';

export default LazyAnimationProvider;
