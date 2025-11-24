import React from 'react';

interface Language {
    id: number;
    name: string;
    type: 'spoken' | 'programming';
    level: string;
    proficiency: number;
    flag: string;
}

interface TagBubbleProps {
    language: Language;
    onClick: () => void;
}

export const TagBubble: React.FC<TagBubbleProps> = ({ language, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="card-ig p-4 hover:shadow-lg transition-all hover:scale-105 text-left"
        >
            <div className="flex items-start gap-3">
                <div className="text-4xl">{language.flag}</div>
                <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-1">{language.name}</h3>
                    <p className="text-sm text-ig-gray mb-2">{language.level}</p>

                    {/* Proficiency Bar */}
                    <div className="w-full bg-ig-light-gray rounded-full h-2 overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-ig-blue to-purple-500 transition-all"
                            style={{ width: `${language.proficiency}%` }}
                        />
                    </div>

                    {/* Type Badge */}
                    <span className="inline-block mt-2 px-2 py-0.5 bg-ig-light-gray text-ig-gray text-xs rounded-full">
                        {language.type === 'spoken' ? '🗣️ Spoken' : '💻 Programming'}
                    </span>
                </div>
            </div>
        </button>
    );
};
