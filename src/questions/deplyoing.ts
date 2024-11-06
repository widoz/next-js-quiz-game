import { Questions } from './types'

export const deployingQuestions: Questions = [
    {
        id: 1,
        difficulty: 'easy',
        question:
            'What is the recommended platform for deploying Next.js applications?',
        options: ['Vercel', 'Heroku', 'AWS', 'DigitalOcean'],
        correctAnswer: 'Vercel',
        section: 'Deploying',
    },
    {
        id: 2,
        difficulty: 'medium',
        question:
            'Which command is used to build a Next.js application for production?',
        options: [
            'next build',
            'npm run build',
            'next production',
            'npm start',
        ],
        correctAnswer: 'next build',
        section: 'Deploying',
    },
    {
        id: 3,
        difficulty: 'hard',
        question:
            "What is the purpose of the '.next' folder generated after building a Next.js application?",
        options: [
            'It contains the source code',
            'It stores the build output and production assets',
            "It's used for caching during development",
            'It contains configuration files',
        ],
        correctAnswer: 'It stores the build output and production assets',
        section: 'Deploying',
    },
    {
        id: 4,
        difficulty: 'easy',
        question:
            'Which environment variable is commonly used to set the port for a Next.js application?',
        options: ['PORT', 'NODE_PORT', 'APP_PORT', 'NEXT_PORT'],
        correctAnswer: 'PORT',
        section: 'Deploying',
    },
    {
        id: 5,
        difficulty: 'medium',
        question:
            'How can you specify Node.js version for deployment on platforms like Vercel?',
        options: [
            'In the package.json file',
            'Using a .nvmrc file',
            'In the next.config.js file',
            'Both A and B',
        ],
        correctAnswer: 'Both A and B',
        section: 'Deploying',
    },
    {
        id: 6,
        difficulty: 'hard',
        question: "What is the purpose of the 'next export' command?",
        options: [
            'To export the application as a Docker image',
            'To generate a static HTML export of the application',
            'To create an API documentation',
            'To prepare the app for serverless deployment',
        ],
        correctAnswer: 'To generate a static HTML export of the application',
        section: 'Deploying',
    },
    {
        id: 7,
        difficulty: 'easy',
        question:
            'Which file is used to configure deployment settings on Vercel?',
        options: [
            'vercel.json',
            'now.json',
            'deploy.config.js',
            "Vercel doesn't require a configuration file",
        ],
        correctAnswer: 'vercel.json',
        section: 'Deploying',
    },
    {
        id: 8,
        difficulty: 'medium',
        question:
            'How can you handle environment variables in a Next.js deployment?',
        options: [
            'By using .env files',
            "Through the deployment platform's interface",
            'In the next.config.js file',
            'All of the above',
        ],
        correctAnswer: 'All of the above',
        section: 'Deploying',
    },
    {
        id: 9,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'generateBuildId' function in next.config.js for deployment?",
        options: [
            'To create a unique identifier for each build',
            'To generate a build timestamp',
            'To specify the build output directory',
            'To configure the build process',
        ],
        correctAnswer: 'To create a unique identifier for each build',
        section: 'Deploying',
    },
    {
        id: 10,
        difficulty: 'easy',
        question:
            'Which command is used to start a Next.js application in production mode?',
        options: ['next start', 'npm run start', 'node server.js', 'next prod'],
        correctAnswer: 'next start',
        section: 'Deploying',
    },
    {
        id: 11,
        difficulty: 'medium',
        question:
            'How can you implement Continuous Deployment for a Next.js application?',
        options: [
            'Using GitHub Actions',
            'Using GitLab CI/CD',
            "Using Vercel's Git integration",
            'All of the above',
        ],
        correctAnswer: 'All of the above',
        section: 'Deploying',
    },
    {
        id: 12,
        difficulty: 'hard',
        question:
            "What is the purpose of the '_app.js' file in relation to deployment?",
        options: [
            'To configure deployment settings',
            'To initialize global styles and layouts',
            'To set up server-side rendering',
            'To define API routes',
        ],
        correctAnswer: 'To initialize global styles and layouts',
        section: 'Deploying',
    },
    {
        id: 13,
        difficulty: 'easy',
        question:
            'Which of the following is NOT a valid deployment option for Next.js?',
        options: [
            'Serverless Functions',
            'Docker Containers',
            'Static Site Export',
            'Peer-to-Peer Hosting',
        ],
        correctAnswer: 'Peer-to-Peer Hosting',
        section: 'Deploying',
    },
    {
        id: 14,
        difficulty: 'medium',
        question:
            'How can you optimize images for production in a Next.js deployment?',
        options: [
            'By using the next/image component',
            'By manually compressing images',
            'By using an image CDN',
            'All of the above',
        ],
        correctAnswer: 'All of the above',
        section: 'Deploying',
    },
    {
        id: 15,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'target' option in next.config.js for deployment?",
        options: [
            'To specify the deployment platform',
            'To set the build target (e.g., serverless)',
            'To define the target audience',
            'To set performance targets',
        ],
        correctAnswer: 'To set the build target (e.g., serverless)',
        section: 'Deploying',
    },
]
