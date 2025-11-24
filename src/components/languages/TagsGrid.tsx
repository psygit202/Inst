import React, { useState } from 'react';
import { TagBubble } from './TagBubble';
import { TagModal } from './TagModal';
import { portfolioData } from '../../data/portfolio';

type FilterType = 'all' | 'spoken' | 'programming';

export const TagsGrid: React.FC = () => {
    const { languages } = portfolioData;
    const [selectedLanguageId, setSelectedLanguageId] = useState<number | null>(null);
    const [filter, setFilter] = useState<FilterType>('all');

    const filteredLanguages = languages.filter((lang) => {
        if (filter === 'all') return true;
        return lang.type === filter;
    });

    const selectedLanguage = languages.find((lang) => lang.id === selectedLanguageId);

    return (
        <div className="px-4 py-6">
            {/* Filter Tabs */}
            <div className="flex gap-2 mb-6 border-b border-ig-border">
                <button
                    onClick={() => setFilter('all')}
                    className={`px-4 py-2 font-semibold text-sm transition-colors border-b-2 ${filter === 'all'
                            ? 'text-ig-text border-ig-text'
                            : 'text-ig-gray border-transparent hover:text-ig-text'
                        }`}
                >
                    All Languages ({languages.length})
                </button>
                <button
                    onClick={() => setFilter('spoken')}
                    className={`px-4 py-2 font-semibold text-sm transition-colors border-b-2 ${filter === 'spoken'
                            ? 'text-ig-text border-ig-text'
                            : 'text-ig-gray border-transparent hover:text-ig-text'
                        }`}
                >
                    Spoken ({languages.filter((l) => l.type === 'spoken').length})
                </button>
                <button
                    onClick={() => setFilter('programming')}
                    className={`px-4 py-2 font-semibold text-sm transition-colors border-b-2 ${filter === 'programming'
                            ? 'text-ig-text border-ig-text'
                            : 'text-ig-gray border-transparent hover:text-ig-text'
                        }`}
                >
                    Programming ({languages.filter((l) => l.type === 'programming').length})
                </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredLanguages.map((language) => (
                    <TagBubble
                        key={language.id}
                        language={language}
                        onClick={() => setSelectedLanguageId(language.id)}
                    />
                ))}
            </div>

            {/* Modal */}
            {selectedLanguage && (
                <TagModal
                    language={selectedLanguage}
                    onClose={() => setSelectedLanguageId(null)}
                />
            )}
        </div>
    );
};
