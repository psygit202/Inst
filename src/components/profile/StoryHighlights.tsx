import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { StoryViewer } from '../common/StoryViewer';

export const StoryHighlights: React.FC = () => {
    const { skills } = portfolioData;
    const [selectedSkillIndex, setSelectedSkillIndex] = useState<number | null>(null);

    const handleHighlightClick = (index: number) => {
        setSelectedSkillIndex(index);
    };

    const handleCloseViewer = () => {
        setSelectedSkillIndex(null);
    };

    // Convert skills into stories
    const stories = selectedSkillIndex !== null ? skills[selectedSkillIndex].skills.map((skill) => ({
        title: `${skill.name} - ${skill.level}`,
        content: (
            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Tools & Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                        {skill.tools.map((tool, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 bg-white/20 rounded-full text-sm"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

                {selectedSkillIndex !== null && skills[selectedSkillIndex].examples && (
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Examples</h3>
                        <ul className="space-y-2">
                            {skills[selectedSkillIndex].examples.map((example, idx) => (
                                <li key={idx} className="text-sm flex items-start gap-2">
                                    <span className="text-green-400 mt-0.5">✓</span>
                                    <span>{example}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        ),
        duration: 7000,
    })) : [];

    return (
        <>
            <div className="px-4 mb-4 border-b border-ig-border pb-4">
                <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-2">
                    {skills.map((skill, index) => (
                        <button
                            key={skill.id}
                            onClick={() => handleHighlightClick(index)}
                            className="flex flex-col items-center gap-2 flex-shrink-0 transition-transform hover:scale-105"
                        >
                            <div className={`story-ring bg-gradient-to-tr ${skill.color}`}>
                                <div className="bg-white p-1 rounded-full">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-ig-light-gray to-white flex items-center justify-center text-2xl">
                                        {skill.icon}
                                    </div>
                                </div>
                            </div>
                            <span className="text-xs text-ig-text max-w-[80px] text-center line-clamp-2">
                                {skill.category}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            <StoryViewer
                isOpen={selectedSkillIndex !== null}
                onClose={handleCloseViewer}
                stories={stories}
                initialIndex={0}
            />
        </>
    );
};
