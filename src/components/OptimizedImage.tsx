import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  quality?: number;
  blur?: boolean;
  sizes?: string;
  onLoad?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  style = {},
  priority = false,
  quality = 85,
  blur = true,
  sizes = '100vw',
  onLoad
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate thumbnail URL (low quality, small size)
  const getThumbnailSrc = (originalSrc: string) => {
    // For development, return a placeholder or compressed version
    // In production, this would use your image optimization service
    return originalSrc.replace('.webp', '-thumb.webp').replace('.jpg', '-thumb.jpg').replace('.png', '-thumb.png');
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px', // Start loading 100px before entering viewport
        threshold: 0.1
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setError(true);
    setIsLoaded(true); // Stop the loading state
  };

  // Generate responsive srcSet
  const generateSrcSet = (baseSrc: string) => {
    const sizes = [400, 800, 1200, 1600, 1920];
    return sizes.map(size => {
      const optimizedSrc = baseSrc.replace(/\.(webp|jpg|png)$/, `_${size}w.$1`);
      return `${optimizedSrc} ${size}w`;
    }).join(', ');
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio: width && height ? `${width}/${height}` : undefined,
        ...style
      }}
    >
      {/* Blur thumbnail background - loads immediately */}
      {blur && !error && (
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
          style={{
            backgroundImage: `url(${getThumbnailSrc(src)})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(20px)',
            transform: 'scale(1.1)', // Slightly scale to hide blur edges
          }}
        />
      )}

      {/* Loading skeleton */}
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 animate-pulse opacity-30" />
      )}

      {/* High-quality image */}
      {(isInView || priority) && !error && (
        <img
          ref={imgRef}
          src={src}
          srcSet={generateSrcSet(src)}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            imageRendering: 'high-quality',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)', // Force GPU acceleration
          }}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}

      {/* Error fallback */}
      {error && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="text-gray-400 text-sm">Failed to load image</div>
        </div>
      )}

      {/* Loading indicator for priority images */}
      {priority && !isLoaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin opacity-50" />
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;