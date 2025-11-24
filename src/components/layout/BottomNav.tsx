import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, Video, Tag, Mail } from 'lucide-react';

export const BottomNav: React.FC = () => {
    const location = useLocation();

    const navItems = [
        { path: '/', icon: Home, label: 'Home' },
        { path: '/experience', icon: Briefcase, label: 'Experience' },
        { path: '/projects', icon: Video, label: 'Projects' },
        { path: '/languages', icon: Tag, label: 'Languages' },
        { path: '/contact', icon: Mail, label: 'Contact' },
    ];

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-ig-border">
            <div className="flex items-center justify-around h-12">
                {navItems.map(({ path, icon: Icon, label }) => {
                    const isActive = location.pathname === path;
                    return (
                        <Link
                            key={path}
                            to={path}
                            className="flex flex-col items-center justify-center flex-1 h-full transition-colors"
                            aria-label={label}
                        >
                            <Icon
                                size={24}
                                className={`transition-colors ${isActive ? 'text-ig-text' : 'text-ig-gray'}`}
                                strokeWidth={isActive ? 2.5 : 2}
                            />
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};
