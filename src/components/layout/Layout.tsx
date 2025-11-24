import React from 'react';
import { TopNav } from './TopNav';
import { BottomNav } from './BottomNav';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-white">
            <TopNav />
            <main className="max-w-5xl mx-auto pb-16 md:pb-8">
                {children}
            </main>
            <BottomNav />
        </div>
    );
};
