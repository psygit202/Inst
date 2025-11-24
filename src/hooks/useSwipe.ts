import { useEffect, useRef, type RefObject } from 'react';

interface SwipeCallbacks {
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    onSwipeUp?: () => void;
    onSwipeDown?: () => void;
}

export const useSwipe = (
    elementRef: RefObject<HTMLElement | null>,
    callbacks: SwipeCallbacks,
    threshold: number = 50
) => {
    const touchStart = useRef<{ x: number; y: number } | null>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const handleTouchStart = (e: TouchEvent) => {
            touchStart.current = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY,
            };
        };

        const handleTouchEnd = (e: TouchEvent) => {
            if (!touchStart.current) return;

            const touchEnd = {
                x: e.changedTouches[0].clientX,
                y: e.changedTouches[0].clientY,
            };

            const deltaX = touchEnd.x - touchStart.current.x;
            const deltaY = touchEnd.y - touchStart.current.y;

            const absDeltaX = Math.abs(deltaX);
            const absDeltaY = Math.abs(deltaY);

            if (absDeltaX > threshold || absDeltaY > threshold) {
                if (absDeltaX > absDeltaY) {
                    // Horizontal swipe
                    if (deltaX > 0 && callbacks.onSwipeRight) {
                        callbacks.onSwipeRight();
                    } else if (deltaX < 0 && callbacks.onSwipeLeft) {
                        callbacks.onSwipeLeft();
                    }
                } else {
                    // Vertical swipe
                    if (deltaY > 0 && callbacks.onSwipeDown) {
                        callbacks.onSwipeDown();
                    } else if (deltaY < 0 && callbacks.onSwipeUp) {
                        callbacks.onSwipeUp();
                    }
                }
            }

            touchStart.current = null;
        };

        element.addEventListener('touchstart', handleTouchStart);
        element.addEventListener('touchend', handleTouchEnd);

        return () => {
            element.removeEventListener('touchstart', handleTouchStart);
            element.removeEventListener('touchend', handleTouchEnd);
        };
    }, [elementRef, callbacks, threshold]);
};
