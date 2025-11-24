import React from 'react';

interface AvatarProps {
    src: string;
    alt: string;
    size?: 'small' | 'medium' | 'large' | 'xlarge';
    hasStory?: boolean;
    className?: string;
}

const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-20 h-20',
    xlarge: 'w-32 h-32',
};

export const Avatar: React.FC<AvatarProps> = ({
    src,
    alt,
    size = 'medium',
    hasStory = false,
    className = ''
}) => {
    const [imageError, setImageError] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    const initials = alt
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const handleImageError = () => {
        setImageError(true);
        setIsLoading(false);
    };

    const content = (
        <div className={`${sizeClasses[size]} rounded-full overflow-hidden bg-gradient-to-br from-ig-blue to-purple-500 flex items-center justify-center text-white font-semibold ${className}`}>
            {!imageError && (
                <img
                    src={src}
                    alt={alt}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                />
            )}
            {(imageError || isLoading) && (
                <span className="text-sm">{initials}</span>
            )}
        </div>
    );

    if (hasStory) {
        return (
            <div className="story-ring">
                <div className="bg-white p-0.5 rounded-full">
                    {content}
                </div>
            </div>
        );
    }

    return content;
};
