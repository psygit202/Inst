import React from 'react';
import { PostGrid } from '../components/experience/PostGrid';

export const Experience: React.FC = () => {
    return (
        <div className="py-6">
            <div className="px-4 mb-6">
                <h1 className="text-2xl font-bold">Professional Experience</h1>
                <p className="text-ig-gray mt-1">Click any position to see details</p>
            </div>
            <PostGrid />
        </div>
    );
};
