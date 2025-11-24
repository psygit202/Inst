import React, { useRef } from 'react';
import { ReelCard } from './ReelCard';
import { portfolioData } from '../../data/portfolio';

export const ReelsViewer: React.FC = () => {
    const { projects } = portfolioData;
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={containerRef}
            className="snap-y snap-mandatory overflow-y-scroll h-[calc(100vh-3.5rem)] md:h-[calc(100vh-3.5rem)] scrollbar-hide"
        >
            {projects.map((project) => (
                <ReelCard key={project.id} project={project} />
            ))}
        </div>
    );
};
