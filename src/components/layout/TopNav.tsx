import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, Settings } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export const TopNav: React.FC = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <nav className="sticky top-0 z-40 bg-white border-b border-ig-border">
            <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
                {/* Logo / Username */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                        Instagram
                    </div>
                    <span className="hidden md:inline text-ig-gray">|</span>
                    <span className="hidden md:inline text-ig-text font-semibold">
                        {portfolioData.profile.username}
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    <Link
                        to="/"
                        className={`text-sm font-medium transition-colors ${isHome ? 'text-ig-text' : 'text-ig-gray hover:text-ig-text'}`}
                    >
                        Profile
                    </Link>
                    <Link
                        to="/contact"
                        className={`text-sm font-medium transition-colors ${location.pathname === '/contact' ? 'text-ig-text' : 'text-ig-gray hover:text-ig-text'}`}
                    >
                        Contact
                    </Link>
                </div>

                {/* Action Icons */}
                <div className="flex items-center gap-4">
                    <button
                        className="p-2 hover:bg-ig-light-gray rounded-full transition-colors"
                        aria-label="Notifications"
                    >
                        <Heart size={24} />
                    </button>
                    <button
                        className="md:hidden p-2 hover:bg-ig-light-gray rounded-full transition-colors"
                        aria-label="Menu"
                    >
                        <Menu size={24} />
                    </button>
                    <button
                        className="hidden md:block p-2 hover:bg-ig-light-gray rounded-full transition-colors"
                        aria-label="Settings"
                    >
                        <Settings size={24} />
                    </button>
                </div>
            </div>
        </nav>
    );
};
