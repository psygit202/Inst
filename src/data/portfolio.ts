// TypeScript interfaces for portfolio data
export interface Experience {
    id: number;
    company: string;
    role: string;
    period: string;
    location: string;
    image: string;
    description: string;
    achievements: string[];
    tags: string[];
}

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    demo: string | null;
    github: string | null;
    metrics: string;
}

export interface Skill {
    name: string;
    level: string;
    tools: string[];
}

export interface SkillCategory {
    id: number;
    category: string;
    icon: string;
    color: string;
    skills: Skill[];
    examples: string[];
}

export interface Language {
    id: number;
    name: string;
    type: 'spoken' | 'programming';
    level: string;
    proficiency: number;
    certification: string;
    flag: string;
    examples: string[];
    projects: string[];
}

export interface PortfolioData {
    profile: {
        name: string;
        username: string;
        avatar: string;
        headline: string;
        bio: string;
        website: string;
        stats: {
            posts: number;
            followers: number;
            following: number;
        };
        links: {
            cv: string;
            linkedin: string;
            github: string;
            portfolio: string;
        };
        contact: {
            phone: string;
            email: string;
        };
    };
    experiences: Experience[];
    projects: Project[];
    skills: SkillCategory[];
    languages: Language[];
}

// Portfolio data - customize this with your own information
export const portfolioData: PortfolioData = {

    profile: {
        name: "Parth Suryawanshi",
        username: "parthsuryawanshi",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        headline: "Creative Strategist | Filmmaker | Marketing Specialist",
        bio: "Seeking a Marketing Internship — May 2026\n\nCreative Strategist and Filmmaker specializing in cinematic creative direction and emotional storytelling. Currently pursuing MSc in Marketing & Business Development, combining a strong foundation in visual media production with analytical marketing insights to build compelling brand identities and drive business growth.",
        website: "linkedin.com/in/parthsuryawanshi",
        stats: {
            posts: 4,
            followers: 42,
            following: 24
        },
        links: {
            cv: "/assets/cv.pdf",
            linkedin: "https://linkedin.com/in/parthsuryawanshi",
            github: "https://github.com/parthsuryawanshi",
            portfolio: "https://parthsuryawanshi.com"
        },
        contact: {
            phone: "+33 0749988378",
            email: "parth.pratosh.suryawanshi@skema.edu"
        }
    },

    experiences: [
        {
            id: 1,
            company: "Rajpurohit Associates",
            role: "Marketing & Management Intern",
            period: "2022",
            location: "India",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=600&fit=crop",
            description: "Marketing and management internship focusing on advertisement film production and strategic marketing initiatives",
            achievements: [
                "Directed an advertisement film and regional outdoor design initiatives, driving a 5% annual revenue increase for a $1.2M business",
                "Analyzed consumer behavior to create targeted strategies, engaging highest market by 15%",
                "Optimized workforce coordination and executed data-driven approaches to streamline operations"
            ],
            tags: ["Marketing", "Film Production", "Strategy", "Consumer Analysis"]
        },
        {
            id: 2,
            company: "Friends Advertising",
            role: "Marketing & Branding Intern",
            period: "2024",
            location: "India",
            image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=600&fit=crop",
            description: "Developed strategic advertising initiatives and managed multi-channel media placements",
            achievements: [
                "Developed strategic advertising initiatives targeting specific demographics, contributing to a 6% increase in sales",
                "Managed multi-channel media placements (billboards, TV, social media) to maximize brand recall and audience engagement"
            ],
            tags: ["Advertising", "Branding", "Media Planning", "Multi-channel Marketing"]
        },
        {
            id: 3,
            company: "PCDA",
            role: "Social Media Manager",
            period: "2025",
            location: "India",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=600&fit=crop",
            description: "Managed social media presence and developed content strategies for major events",
            achievements: [
                "Managed social media presence and executed targeted post and campaigning, successfully increasing follower count and student engagement",
                "Developed content and strategies for major events (celebrity workshops, competitions), significantly expanding the studio's reach and visibility"
            ],
            tags: ["Social Media", "Content Strategy", "Event Marketing", "Engagement"]
        },
        {
            id: 4,
            company: "Outlender (GoGo)",
            role: "Assistant Director",
            period: "2023",
            location: "Goa, India",
            image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=600&fit=crop",
            description: "Assistant Director for film distributed by Blackbox Studios",
            achievements: [
                "Distributed by the Blackbox Studios",
                "Garnered praise from political figures for shifting public perception",
                "Contributed to creative direction and production management"
            ],
            tags: ["Film Direction", "Creative Direction", "Production"]
        }
    ],

    projects: [
        {
            id: 1,
            title: "Gropeer (Executive Film)",
            description: "Led the production of a film selected out of 9,000+ entries from 100+ countries at the prestigious Guwahati International Film Festival. Executive Producer role managing creative and production aspects.",
            image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=1200&fit=crop",
            tags: ["Film Production", "Executive Producer", "Festival Selection"],
            demo: null,
            github: null,
            metrics: "Selected from 9,000+ entries"
        },
        {
            id: 2,
            title: "Advertisement Film for Rajpurohit Associates",
            description: "Directed an advertisement film and regional outdoor design campaign that drove a 5% annual revenue increase for a $1.2M business.",
            image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=1200&fit=crop",
            tags: ["Commercial Direction", "Advertising", "Brand Film"],
            demo: null,
            github: null,
            metrics: "5% revenue increase"
        },
        {
            id: 3,
            title: "Multi-Channel Campaign - Friends Advertising",
            description: "Developed and executed strategic advertising initiatives across billboards, TV, and social media, achieving a 6% increase in sales.",
            image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=1200&fit=crop",
            tags: ["Integrated Marketing", "Media Planning", "Campaign Strategy"],
            demo: null,
            github: null,
            metrics: "6% sales increase"
        },
        {
            id: 4,
            title: "PCDA Event Marketing Campaign",
            description: "Developed content and strategies for major events including celebrity workshops and competitions, significantly expanding studio reach and visibility.",
            image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=1200&fit=crop",
            tags: ["Event Marketing", "Content Creation", "Social Media"],
            demo: null,
            github: null,
            metrics: "Expanded studio reach"
        }
    ],

    skills: [
        {
            id: 1,
            category: "Brand Marketing",
            icon: "🎯",
            color: "from-blue-500 to-cyan-500",
            skills: [
                { name: "Brand Strategy", level: "Advanced", tools: ["Brand Positioning", "Market Research", "Competitor Analysis"] },
                { name: "Creative Direction", level: "Expert", tools: ["Visual Identity", "Brand Guidelines", "Campaign Concepts"] },
                { name: "Digital Marketing", level: "Advanced", tools: ["SEO", "SEM", "Social Media Ads"] },
                { name: "Consumer Psychology", level: "Advanced", tools: ["Behavioral Analysis", "Target Segmentation", "Persona Development"] }
            ],
            examples: [
                "Directed advertisement campaigns driving 5% revenue increase",
                "Developed strategic initiatives contributing to 6% sales growth",
                "Analyzed consumer behavior for targeted marketing strategies"
            ]
        },
        {
            id: 2,
            category: "Filmmaking & Production",
            icon: "🎬",
            color: "from-purple-500 to-pink-500",
            skills: [
                { name: "Film Direction", level: "Advanced", tools: ["Shot Composition", "Storytelling", "Creative Vision"] },
                { name: "Production Management", level: "Advanced", tools: ["Budgeting", "Scheduling", "Team Coordination"] },
                { name: "Scriptwriting", level: "Expert", tools: ["Story Structure", "Character Development", "Dialogue"] },
                { name: "Visual Communication", level: "Expert", tools: ["Cinematography", "Editing", "Color Grading"] }
            ],
            examples: [
                "Executive Producer for film selected from 9,000+ entries",
                "Assistant Director for Blackbox Studios distribution",
                "Directed advertisement films for major campaigns"
            ]
        },
        {
            id: 3,
            category: "Social Media Strategy",
            icon: "📱",
            color: "from-pink-500 to-rose-500",
            skills: [
                { name: "Content Strategy", level: "Expert", tools: ["Content Calendar", "Platform Optimization", "Trend Analysis"] },
                { name: "Social Media Management", level: "Advanced", tools: ["Facebook", "Instagram", "LinkedIn", "Twitter"] },
                { name: "Community Engagement", level: "Advanced", tools: ["Audience Building", "Interaction Management", "Influencer Relations"] },
                { name: "Analytics & Reporting", level: "Advanced", tools: ["Meta Business Suite", "Google Analytics", "Social Listening"] }
            ],
            examples: [
                "Increased follower count and student engagement at PCDA",
                "Managed multi-channel media placements for maximum reach",
                "Developed content for celebrity workshops and competitions"
            ]
        },
        {
            id: 4,
            category: "Creative & Strategy",
            icon: "💡",
            color: "from-orange-500 to-red-500",
            skills: [
                { name: "Creative Direction", level: "Expert", tools: ["Concept Development", "Visual Storytelling", "Art Direction"] },
                { name: "Strategic Planning", level: "Advanced", tools: ["Market Analysis", "Campaign Planning", "Goal Setting"] },
                { name: "Brand Identity", level: "Advanced", tools: ["Logo Design", "Brand Guidelines", "Visual Systems"] },
                { name: "Emotional Storytelling", level: "Expert", tools: ["Narrative Design", "Audience Connection", "Impact Measurement"] }
            ],
            examples: [
                "Specialized in cinematic creative direction",
                "Built compelling brand identities for clients",
                "Combined visual media with analytical marketing insights"
            ]
        }
    ],

    languages: [
        {
            id: 1,
            name: "English",
            type: "spoken",
            level: "Fluent",
            proficiency: 100,
            certification: "Fluent Speaker",
            flag: "🇬🇧",
            examples: [
                "Professional communication in international settings",
                "Academic studies in English (MSc program)",
                "Film production and scriptwriting in English"
            ],
            projects: ["All projects"]
        },
        {
            id: 2,
            name: "French",
            type: "spoken",
            level: "Beginner",
            proficiency: 40,
            certification: "Currently Learning",
            flag: "🇫🇷",
            examples: [
                "Learning French while studying in Paris",
                "Basic conversational French",
                "Expanding language skills for European market"
            ],
            projects: ["SKEMA Business School environment"]
        },
        {
            id: 3,
            name: "Hindi",
            type: "spoken",
            level: "Native",
            proficiency: 100,
            certification: "Native Speaker",
            flag: "🇮🇳",
            examples: [
                "Native fluency in all contexts",
                "Film production and direction in Hindi",
                "Marketing campaigns for Indian market"
            ],
            projects: ["Gropeer", "Rajpurohit Associates", "Friends Advertising", "PCDA"]
        }
    ]
};
