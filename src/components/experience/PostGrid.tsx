import React, { useState } from 'react';
import { PostCard } from './PostCard';
import { PostModal } from './PostModal';
import { portfolioData } from '../../data/portfolio';

interface PostGridProps {
    limit?: number;
}

export const PostGrid: React.FC<PostGridProps> = ({ limit }) => {
    const { experiences } = portfolioData;
    const [selectedExperienceId, setSelectedExperienceId] = useState<number | null>(null);

    const displayExperiences = limit ? experiences.slice(0, limit) : experiences;

    const handlePostClick = (id: number) => {
        setSelectedExperienceId(id);
    };

    const handleCloseModal = () => {
        setSelectedExperienceId(null);
    };

    const handleNavigate = (direction: 'prev' | 'next') => {
        if (selectedExperienceId === null) return;

        const currentIndex = experiences.findIndex((exp) => exp.id === selectedExperienceId);
        let newIndex: number;

        if (direction === 'prev') {
            newIndex = currentIndex > 0 ? currentIndex - 1 : experiences.length - 1;
        } else {
            newIndex = currentIndex < experiences.length - 1 ? currentIndex + 1 : 0;
        }

        setSelectedExperienceId(experiences[newIndex].id);
    };

    const selectedExperience = experiences.find((exp) => exp.id === selectedExperienceId);

    return (
        <>
            <div className="grid grid-cols-3 gap-1 md:gap-2">
                {displayExperiences.map((experience) => (
                    <PostCard
                        key={experience.id}
                        image={experience.image}
                        role={experience.role}
                        company={experience.company}
                        onClick={() => handlePostClick(experience.id)}
                    />
                ))}
            </div>

            {selectedExperience && (
                <PostModal
                    experience={selectedExperience}
                    onClose={handleCloseModal}
                    onNavigate={handleNavigate}
                />
            )}
        </>
    );
};
