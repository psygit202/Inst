import React, { useState } from 'react';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { ActionButtons } from '../components/profile/ActionButtons';
import { StoryHighlights } from '../components/profile/StoryHighlights';
import { PostGrid } from '../components/experience/PostGrid';
import { Link } from 'react-router-dom';
import { Grid3x3, Film, Bookmark } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

type TabType = 'posts' | 'reels' | 'tagged';

export const Home: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabType>('posts');

    return (
        <div>
            <ProfileHeader />
            <ActionButtons />
            <StoryHighlights />

            {/* Tab Navigation */}
            <div className="border-t border-ig-border">
                <div className="flex justify-center border-b border-ig-border">
                    <button
                        onClick={() => setActiveTab('posts')}
                        className={`flex items-center gap-1 px-6 py-3 text-xs font-semibold tracking-wide transition-colors ${activeTab === 'posts'
                                ? 'border-t border-ig-text text-ig-text -mt-px'
                                : 'text-ig-gray'
                            }`}
                    >
                        <Grid3x3 size={12} />
                        ExpR
                    </button>
                    <button
                        onClick={() => setActiveTab('reels')}
                        className={`flex items-center gap-1 px-6 py-3 text-xs font-semibold tracking-wide transition-colors ${activeTab === 'reels'
                                ? 'border-t border-ig-text text-ig-text -mt-px'
                                : 'text-ig-gray'
                            }`}
                    >
                        <Film size={12} />
                        Projects
                    </button>
                    <button
                        onClick={() => setActiveTab('tagged')}
                        className={`flex items-center gap-1 px-6 py-3 text-xs font-semibold tracking-wide transition-colors ${activeTab === 'tagged'
                                ? 'border-t border-ig-text text-ig-text -mt-px'
                                : 'text-ig-gray'
                            }`}
                    >
                        <Bookmark size={12} />
                        Languages
                    </button>
                </div>

                {/* Tab Content */}
                <div className="min-h-[400px]">
                    {activeTab === 'posts' && (
                        <div>
                            <div className="p-0">
                                <PostGrid limit={9} />
                            </div>
                            <div className="p-4 text-center">
                                <Link
                                    to="/experience"
                                    className="text-ig-blue font-semibold text-sm hover:text-ig-blue-hover transition-colors"
                                >
                                    View All Experience →
                                </Link>
                            </div>
                        </div>
                    )}

                    {activeTab === 'reels' && (
                        <div className="p-4">
                            <div className="grid grid-cols-3 gap-1">
                                {portfolioData.projects.map((project) => (
                                    <Link
                                        key={project.id}
                                        to="/projects"
                                        className="relative aspect-[9/16] bg-gradient-to-br from-purple-500 to-pink-500 rounded-sm overflow-hidden group"
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Reels Icon Overlay */}
                                        <div className="absolute top-2 right-2">
                                            <Film size={20} className="text-white drop-shadow-lg" />
                                        </div>
                                        {/* View Count */}
                                        <div className="absolute bottom-2 left-2 text-white text-sm font-semibold drop-shadow-lg">
                                            {project.metrics || 'View'}
                                        </div>
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <div className="text-white text-center px-2">
                                                <p className="font-semibold text-sm line-clamp-2">{project.title}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className="p-4 text-center">
                                <Link
                                    to="/projects"
                                    className="text-ig-blue font-semibold text-sm hover:text-ig-blue-hover transition-colors"
                                >
                                    View All Projects →
                                </Link>
                            </div>
                        </div>
                    )}

                    {activeTab === 'tagged' && (
                        <div className="p-4">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {portfolioData.languages.map((language) => (
                                    <Link
                                        key={language.id}
                                        to="/languages"
                                        className="border border-ig-border rounded-lg p-4 hover:bg-ig-hover transition-colors"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-3xl">{language.flag}</span>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-sm">{language.name}</h3>
                                                <p className="text-xs text-ig-gray">{language.type === 'spoken' ? '🗣️ Spoken' : '💻 Programming'}</p>
                                            </div>
                                        </div>
                                        {/* Proficiency Bar */}
                                        <div className="w-full bg-ig-hover rounded-full h-2 mb-2">
                                            <div
                                                className="bg-gradient-to-r from-ig-blue to-purple-500 h-2 rounded-full transition-all"
                                                style={{ width: `${language.proficiency}%` }}
                                            />
                                        </div>
                                        <p className="text-xs text-ig-gray text-center">{language.level}</p>
                                    </Link>
                                ))}
                            </div>
                            <div className="p-4 text-center">
                                <Link
                                    to="/languages"
                                    className="text-ig-blue font-semibold text-sm hover:text-ig-blue-hover transition-colors"
                                >
                                    View All Languages →
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
