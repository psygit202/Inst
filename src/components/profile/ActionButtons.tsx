import React from 'react';
import { Download, Mail, MessageCircle } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export const ActionButtons: React.FC = () => {
    const { profile } = portfolioData;

    const handleDownloadCV = () => {
        // In a real app, this would download the actual CV
        window.open(profile.links.cv, '_blank');
    };

    const handleEmail = () => {
        window.location.href = 'mailto:contact@example.com';
    };

    const handleContact = () => {
        // Navigate to contact page or open contact modal
        window.location.href = '/contact';
    };

    return (
        <div className="px-4 mb-4">
            <div className="flex gap-2">
                <button
                    onClick={handleContact}
                    className="btn-primary flex-1 flex items-center justify-center gap-2"
                >
                    <MessageCircle size={16} />
                    Contact
                </button>
                <button
                    onClick={handleDownloadCV}
                    className="btn-secondary flex-1 flex items-center justify-center gap-2"
                >
                    <Download size={16} />
                    Download CV
                </button>
                <button
                    onClick={handleEmail}
                    className="btn-secondary flex items-center justify-center px-3"
                    aria-label="Email"
                >
                    <Mail size={16} />
                </button>
            </div>
        </div>
    );
};
