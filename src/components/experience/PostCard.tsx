import React from 'react';

interface PostCardProps {
    image: string;
    role: string;
    company: string;
    onClick: () => void;
}

export const PostCard: React.FC<PostCardProps> = ({ image, role, company, onClick }) => {
    return (
        <div className="grid-item group" onClick={onClick}>
            <img
                src={image}
                alt={`${role} at ${company}`}
                className="grid-item-content group-hover:opacity-90 transition-opacity"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-white text-center px-4">
                    <p className="font-semibold text-sm line-clamp-2">{role}</p>
                    <p className="text-xs mt-1">{company}</p>
                </div>
            </div>
        </div>
    );
};
