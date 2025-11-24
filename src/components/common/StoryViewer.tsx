import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipe } from '../../hooks/useSwipe';

interface Story {
    title: string;
    content: React.ReactNode;
    duration?: number;
}

interface StoryViewerProps {
    isOpen: boolean;
    onClose: () => void;
    stories: Story[];
    initialIndex?: number;
}

export const StoryViewer: React.FC<StoryViewerProps> = ({
    isOpen,
    onClose,
    stories,
    initialIndex = 0,
}) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [progress, setProgress] = useState(0);
    const duration = stories[currentIndex]?.duration || 5000;
    const containerRef = useRef<HTMLDivElement>(null);
    const progressInterval = useRef<number | undefined>(undefined);

    useEffect(() => {
        if (!isOpen) return;

        setProgress(0);
        const startTime = Date.now();

        progressInterval.current = window.setInterval(() => {
            const elapsed = Date.now() - startTime;
            const newProgress = (elapsed / duration) * 100;

            if (newProgress >= 100) {
                handleNext();
            } else {
                setProgress(newProgress);
            }
        }, 50);

        return () => {
            if (progressInterval.current) {
                clearInterval(progressInterval.current);
            }
        };
    }, [currentIndex, isOpen, duration]);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);

    const handleNext = () => {
        if (currentIndex < stories.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setProgress(0);
        } else {
            onClose();
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setProgress(0);
        }
    };

    const handleAreaClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const isLeftSide = x < rect.width / 2;

        if (isLeftSide) {
            handlePrev();
        } else {
            handleNext();
        }
    };

    useSwipe(containerRef, {
        onSwipeLeft: handleNext,
        onSwipeRight: handlePrev,
        onSwipeDown: onClose,
    });

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black z-50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div ref={containerRef} className="relative w-full max-w-lg h-full md:h-[90vh] bg-black">
                        {/* Progress bars */}
                        <div className="absolute top-0 left-0 right-0 z-10 flex gap-1 p-2">
                            {stories.map((_, index) => (
                                <div key={index} className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-white transition-all"
                                        style={{
                                            width: index < currentIndex ? '100%' : index === currentIndex ? `${progress}%` : '0%',
                                        }}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                            aria-label="Close"
                        >
                            <X size={24} />
                        </button>

                        {/* Story content */}
                        <div
                            className="w-full h-full flex items-center justify-center cursor-pointer"
                            onClick={handleAreaClick}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-full overflow-y-auto p-6 text-white"
                                >
                                    <h2 className="text-2xl font-bold mb-4">{stories[currentIndex].title}</h2>
                                    {stories[currentIndex].content}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation arrows (desktop) */}
                        <div className="hidden md:flex absolute inset-y-0 left-0 right-0 items-center justify-between pointer-events-none px-4">
                            {currentIndex > 0 && (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handlePrev();
                                    }}
                                    className="pointer-events-auto p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                                    aria-label="Previous"
                                >
                                    <ChevronLeft size={24} className="text-white" />
                                </button>
                            )}
                            <div className="flex-1" />
                            {currentIndex < stories.length - 1 && (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleNext();
                                    }}
                                    className="pointer-events-auto p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                                    aria-label="Next"
                                >
                                    <ChevronRight size={24} className="text-white" />
                                </button>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
