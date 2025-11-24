import React from 'react';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Contact: React.FC = () => {
    const { profile } = portfolioData;

    return (
        <div className="max-w-2xl mx-auto px-4 py-12">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Let's Connect</h1>
                <p className="text-ig-gray">Feel free to reach out through any of these channels</p>
            </div>

            {/* Contact Options */}
            <div className="space-y-4 mb-8">
                <a
                    href="mailto:contact@example.com"
                    className="card-ig p-6 flex items-center gap-4 hover:shadow-lg transition-all group"
                >
                    <div className="w-12 h-12 rounded-full bg-ig-blue flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        <Mail size={24} />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-sm text-ig-gray">contact@example.com</p>
                    </div>
                    <ExternalLink size={20} className="text-ig-gray" />
                </a>

                <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-ig p-6 flex items-center gap-4 hover:shadow-lg transition-all group"
                >
                    <div className="w-12 h-12 rounded-full bg-[#0077b5] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        <Linkedin size={24} />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold mb-1">LinkedIn</h3>
                        <p className="text-sm text-ig-gray">Connect professionally</p>
                    </div>
                    <ExternalLink size={20} className="text-ig-gray" />
                </a>

                <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-ig p-6 flex items-center gap-4 hover:shadow-lg transition-all group"
                >
                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        <Github size={24} />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold mb-1">GitHub</h3>
                        <p className="text-sm text-ig-gray">Check out my code</p>
                    </div>
                    <ExternalLink size={20} className="text-ig-gray" />
                </a>

                <a
                    href={profile.links.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-ig p-6 flex items-center gap-4 hover:shadow-lg transition-all group"
                >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        <ExternalLink size={24} />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold mb-1">Portfolio</h3>
                        <p className="text-sm text-ig-gray">{profile.website}</p>
                    </div>
                    <ExternalLink size={20} className="text-ig-gray" />
                </a>
            </div>

            {/* Download CV */}
            <div className="text-center">
                <a
                    href={profile.links.cv}
                    download
                    className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-base"
                >
                    <Mail size={20} />
                    Download CV
                </a>
            </div>
        </div>
    );
};
