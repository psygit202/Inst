import React from 'react';
import { Modal } from '../common/Modal';
import { Award, BookOpen } from 'lucide-react';

interface Language {
    id: number;
    name: string;
    type: 'spoken' | 'programming';
    level: string;
    proficiency: number;
    certification: string;
    flag: string;
    examples: string[];
    projects: string[];
}

interface TagModalProps {
    language: Language;
    onClose: () => void;
}

export const TagModal: React.FC<TagModalProps> = ({ language, onClose }) => {
    return (
        <Modal isOpen={true} onClose={onClose}>
            <div className="p-8 max-h-[80vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="text-6xl">{language.flag}</div>
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-2">{language.name}</h2>
                        <p className="text-lg text-ig-gray">{language.level}</p>
                    </div>
                </div>

                {/* Proficiency */}
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold">Proficiency</span>
                        <span className="text-sm text-ig-gray">{language.proficiency}%</span>
                    </div>
                    <div className="w-full bg-ig-light-gray rounded-full h-3 overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-ig-blue to-purple-500 transition-all"
                            style={{ width: `${language.proficiency}%` }}
                        />
                    </div>
                </div>

                {/* Certification */}
                <div className="mb-6 p-4 bg-ig-light-gray rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                        <Award size={18} className="text-ig-blue" />
                        <span className="font-semibold">Certification / Experience</span>
                    </div>
                    <p className="text-sm text-ig-gray">{language.certification}</p>
                </div>

                {/* Examples */}
                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                        <BookOpen size={18} className="text-ig-blue" />
                        <span className="font-semibold">Usage Examples</span>
                    </div>
                    <ul className="space-y-2">
                        {language.examples.map((example, index) => (
                            <li key={index} className="text-sm text-ig-gray flex items-start gap-2">
                                <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                                <span>{example}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Related Projects */}
                <div>
                    <span className="font-semibold mb-3 block">Related Projects</span>
                    <div className="flex flex-wrap gap-2">
                        {language.projects.map((project, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-gradient-to-r from-ig-blue/10 to-purple-500/10 text-ig-text rounded-full text-sm border border-ig-border"
                            >
                                {project}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Modal>
    );
};
