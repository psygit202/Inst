import { useEffect, useRef, RefObject } from 'react';

export const useDoubleTap = (
    elementRef: RefObject<HTMLElement>,
    onDoubleTap: (e: MouseEvent | TouchEvent) => void,
    delay: number = 300
) => {
    const lastTap = useRef<number>(0);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const handleClick = (e: MouseEvent | TouchEvent) => {
            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTap.current;

            if (tapLength < delay && tapLength > 0) {
                onDoubleTap(e);
                lastTap.current = 0;
            } else {
                lastTap.current = currentTime;
            }
        };

        element.addEventListener('click', handleClick as EventListener);
        element.addEventListener('touchend', handleClick as EventListener);

        return () => {
            element.removeEventListener('click', handleClick as EventListener);
            element.removeEventListener('touchend', handleClick as EventListener);
        };
    }, [elementRef, onDoubleTap, delay]);
};
