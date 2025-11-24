import React, { useRef } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    demo: string | null;
    github: string | null;
    metrics: string;
}

interface ReelCardProps {
    project: Project;
}

export const ReelCard: React.FC<ReelCardProps> = ({ project }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={cardRef}
            className="snap-start relative h-screen w-full flex-shrink-0 overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
            </div>

            {/* Content Overlay */}
            <div className="relative h-full flex flex-col justify-between p-6 text-white">
                {/* Top Tags */}
                <div className="flex flex-wrap gap-2 justify-end">
                    {project.tags.slice(0, 3).map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Bottom Info */}
                <div className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                        <p className="text-sm text-white/90 mb-3 line-clamp-3">{project.description}</p>
                        <div className="flex items-center gap-2 text-sm">
                            <Star size={16} className="text-yellow-400" />
                            <span>{project.metrics}</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-semibold text-sm hover:bg-white/90 transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ExternalLink size={16} />
                                View Demo
                            </a>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-lg font-semibold text-sm hover:bg-white/30 transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Github size={16} />
                                Code
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
