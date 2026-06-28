import { useLayoutEffect, useRef, useCallback, ReactNode } from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';

interface ScrollStackItemProps {
  children: ReactNode;
  itemClassName?: string;
  direction?: 'bottom' | 'top' | 'left' | 'right';
}

export const ScrollStackItem = ({ children, itemClassName = '', direction = 'bottom' }: ScrollStackItemProps) => (
  <div 
    className={`scroll-stack-card ${itemClassName}`.trim()}
    data-direction={direction}
  >
    {children}
  </div>
);

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  directionMode?: 'staggered' | 'left' | 'right' | 'bottom' | 'top' | 'custom';
  fadeEffect?: boolean;
  entryOffset?: number;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

export const ScrollStack = ({
  children,
  className = '',
  directionMode = 'staggered',
  fadeEffect = true,
  entryOffset = 400,
  itemDistance = 120,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.90,
  rotationAmount = 3,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete
}: ScrollStackProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef(new Map());
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value as string);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement
      };
    } else {
      const scroller = scrollerRef.current!;
      return {
        scrollTop: scroller.scrollTop,
        containerHeight: scroller.clientHeight,
        scrollContainer: scroller
      };
    }
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    (element: HTMLElement) => {
      if (useWindowScroll) {
        const rect = element.getBoundingClientRect();
        return rect.top + window.scrollY;
      } else {
        return element.offsetTop;
      }
    },
    [useWindowScroll]
  );

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    const endElement = useWindowScroll
      ? document.querySelector('.scroll-stack-end') as HTMLElement
      : scrollerRef.current?.querySelector('.scroll-stack-end') as HTMLElement;

    const endElementTop = endElement ? getElementOffset(endElement) : 0;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = getElementOffset(card);
      
      const entryStart = cardTop - containerHeight;
      const entryEnd = cardTop - stackPositionPx - itemStackDistance * i;

      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      const entryProgress = calculateProgress(scrollTop, entryStart, entryEnd);
      
      let assignedDir = directionMode;
      if (directionMode === 'custom') {
        assignedDir = card.getAttribute('data-direction') || 'bottom';
      } else if (directionMode === 'staggered') {
        assignedDir = i % 2 === 0 ? 'left' : 'right';
      }

      let moveX = 0;
      let moveY = 0;
      let entryRotationX = 0;
      let entryRotationY = 0;
      const inverseProgress = 1 - entryProgress;

      if (assignedDir === 'left') {
        moveX = -entryOffset * inverseProgress;
        entryRotationY = -25 * inverseProgress;
      } else if (assignedDir === 'right') {
        moveX = entryOffset * inverseProgress;
        entryRotationY = 25 * inverseProgress;
      } else if (assignedDir === 'top') {
        moveY = -entryOffset * inverseProgress;
        entryRotationX = 20 * inverseProgress;
      } else { 
        moveY = entryOffset * inverseProgress;
        entryRotationX = -20 * inverseProgress;
      }

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const stackRotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      const opacity = fadeEffect ? entryProgress : 1;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jCardTop = getElementOffset(cardsRef.current[j]);
          const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) {
            topCardIndex = j;
          }
        }
        if (i < topCardIndex) {
          blur = Math.max(0, (topCardIndex - i) * blurAmount);
        }
      }

      let pinTranslateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        pinTranslateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        pinTranslateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const finalTranslateY = pinTranslateY + moveY;
      const finalTranslateX = moveX;
      const finalRotationX = entryRotationX;
      const finalRotationY = entryRotationY;
      const finalRotationZ = stackRotation;

      const newTransform = {
        translateX: finalTranslateX,
        translateY: finalTranslateY,
        scale: scale,
        rotX: finalRotationX,
        rotY: finalRotationY,
        rotZ: finalRotationZ,
        blur: blur,
        opacity: opacity
      };

      const transform = `translate3d(${newTransform.translateX}px, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotateX(${newTransform.rotX}deg) rotateY(${newTransform.rotY}deg) rotateZ(${newTransform.rotZ}deg)`;
      const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';

      card.style.transform = transform;
      card.style.filter = filter;
      card.style.opacity = newTransform.opacity.toString();

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    directionMode,
    fadeEffect,
    entryOffset,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollData,
    getElementOffset
  ]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    const commonConfig = {
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
      wheelMultiplier: 1,
      lerp: 0.1,
      syncTouch: true,
      syncTouchLerp: 0.075
    };

    let lenis: Lenis;
    if (useWindowScroll) {
      lenis = new Lenis(commonConfig);
    } else {
      const scroller = scrollerRef.current;
      if (!scroller) return null;
      lenis = new Lenis({
        ...commonConfig,
        wrapper: scroller,
        content: scroller.querySelector('.scroll-stack-inner') as HTMLElement,
      });
    }

    lenis.on('scroll', handleScroll);

    const raf = (time: number) => {
      lenis.raf(time);
      updateCardTransforms(); // Ensure transforms update synchronously with Lenis raf
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);
    lenisRef.current = lenis;
    return lenis;
  }, [handleScroll, useWindowScroll]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : scroller.querySelectorAll('.scroll-stack-card')
    ) as HTMLElement[];

    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = 'transform, filter, opacity';
      card.style.transformOrigin = 'center center';
    });

    setupLenis();
    updateCardTransforms();

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (lenisRef.current) lenisRef.current.destroy();
      stackCompletedRef.current = false;
      cardsRef.current = [];
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [itemDistance, setupLenis, updateCardTransforms, useWindowScroll]);

  return (
    <div className={`scroll-stack-scroller ${useWindowScroll ? 'use-window-scroll' : ''} ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};
