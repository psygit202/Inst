import React from 'react';
import { Modal } from '../common/Modal';
import { ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';

interface Experience {
    id: number;
    company: string;
    role: string;
    period: string;
    location: string;
    image: string;
    description: string;
    achievements: string[];
    tags: string[];
}

interface PostModalProps {
    experience: Experience;
    onClose: () => void;
    onNavigate: (direction: 'prev' | 'next') => void;
}

export const PostModal: React.FC<PostModalProps> = ({ experience, onClose, onNavigate }) => {
    return (
        <Modal isOpen={true} onClose={onClose} className="!max-w-6xl">
            <div className="flex flex-col md:flex-row md:h-[600px]">
                {/* Image Section */}
                <div className="relative md:w-1/2 bg-black flex items-center justify-center">
                    <img
                        src={experience.image}
                        alt={`${experience.role} at ${experience.company}`}
                        className="w-full h-full object-contain"
                    />

                    {/* Navigation Arrows */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onNavigate('prev');
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors shadow-lg"
                        aria-label="Previous"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onNavigate('next');
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors shadow-lg"
                        aria-label="Next"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Details Section */}
                <div className="md:w-1/2 flex flex-col">
                    {/* Header */}
                    <div className="p-6 border-b border-ig-border">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-ig-blue to-purple-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                                {experience.company.substring(0, 2).toUpperCase()}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h2 className="text-xl font-bold mb-1">{experience.role}</h2>
                                <p className="text-ig-gray font-semibold">{experience.company}</p>
                                <div className="flex flex-wrap gap-3 mt-2 text-sm text-ig-gray">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        {experience.period}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MapPin size={14} />
                                        {experience.location}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-6">
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold mb-2">About the Role</h3>
                                <p className="text-sm text-ig-gray">{experience.description}</p>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-2">Key Achievements</h3>
                                <ul className="space-y-2">
                                    {experience.achievements.map((achievement, index) => (
                                        <li key={index} className="text-sm text-ig-gray flex items-start gap-2">
                                            <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-2">Skills & Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {experience.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-ig-light-gray text-ig-text rounded-full text-xs font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};
