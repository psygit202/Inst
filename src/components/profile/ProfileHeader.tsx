import React from 'react';
import { Avatar } from '../common/Avatar';
import { portfolioData } from '../../data/portfolio';
import { Link2 } from 'lucide-react';

export const ProfileHeader: React.FC = () => {
    const { profile } = portfolioData;

    return (
        <div className="px-4 py-6">
            <div className="flex gap-6 mb-6">
                {/* Profile Picture */}
                <div className="flex-shrink-0">
                    <Avatar
                        src={profile.avatar}
                        alt={profile.name}
                        size="xlarge"
                        className="md:w-40 md:h-40"
                    />
                </div>

                {/* Profile Info */}
                <div className="flex-1 min-w-0">
                    {/* Username and Stats (Desktop) */}
                    <div className="hidden md:block mb-4">
                        <div className="flex items-center gap-8 mb-4">
                            <h1 className="text-2xl font-light">{profile.username}</h1>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-10 mb-4">
                            <div className="text-center">
                                <span className="font-semibold">{profile.stats.posts}</span>
                                <span className="text-ig-gray ml-1">posts</span>
                            </div>
                            <div className="text-center">
                                <span className="font-semibold">{profile.stats.followers}</span>
                                <span className="text-ig-gray ml-1">skills</span>
                            </div>
                            <div className="text-center">
                                <span className="font-semibold">{profile.stats.following}</span>
                                <span className="text-ig-gray ml-1">languages</span>
                            </div>
                        </div>

                        {/* Name and Bio */}
                        <div>
                            <p className="font-semibold mb-1">{profile.name}</p>
                            <p className="text-sm mb-1">{profile.headline}</p>
                            <p className="text-sm whitespace-pre-line">{profile.bio}</p>
                            {profile.website && (
                                <a
                                    href={`https://${profile.website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-ig-blue hover:underline font-semibold flex items-center gap-1 mt-2"
                                >
                                    <Link2 size={14} />
                                    {profile.website}
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Mobile Username */}
                    <div className="md:hidden">
                        <h1 className="text-xl font-light mb-1">{profile.username}</h1>
                    </div>
                </div>
            </div>

            {/* Mobile Name, Bio, Stats */}
            <div className="md:hidden">
                <p className="font-semibold mb-1">{profile.name}</p>
                <p className="text-sm mb-1">{profile.headline}</p>
                <p className="text-sm whitespace-pre-line mb-2">{profile.bio}</p>
                {profile.website && (
                    <a
                        href={`https://${profile.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-ig-blue hover:underline font-semibold flex items-center gap-1 mb-4"
                    >
                        <Link2 size={14} />
                        {profile.website}
                    </a>
                )}

                {/* Mobile Stats */}
                <div className="flex justify-around border-t border-ig-border pt-3">
                    <div className="text-center">
                        <div className="font-semibold">{profile.stats.posts}</div>
                        <div className="text-xs text-ig-gray">posts</div>
                    </div>
                    <div className="text-center">
                        <div className="font-semibold">{profile.stats.followers}</div>
                        <div className="text-xs text-ig-gray">skills</div>
                    </div>
                    <div className="text-center">
                        <div className="font-semibold">{profile.stats.following}</div>
                        <div className="text-xs text-ig-gray">languages</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
