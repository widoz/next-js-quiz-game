import { Questions } from './types'

export const apiRoutesQuestions: Questions = [
    {
        id: 1,
        difficulty: 'easy',
        question: 'What is the purpose of API Routes in Next.js?',
        options: [
            'To define page layouts',
            'To create server-side API endpoints',
            'To configure client-side routing',
            'To optimize images',
        ],
        correctAnswer: 'To create server-side API endpoints',
        section: 'API Routes',
    },
    {
        id: 2,
        difficulty: 'medium',
        question:
            'Where should API Route files be placed in a Next.js project?',
        options: [
            'In the /api directory',
            'In the /pages/api directory',
            'In the /server/api directory',
            'In the /routes directory',
        ],
        correctAnswer: 'In the /pages/api directory',
        section: 'API Routes',
    },
    {
        id: 3,
        difficulty: 'hard',
        question:
            'How can you handle different HTTP methods in a single API Route?',
        options: [
            'By creating separate files for each method',
            'By using if statements to check the method',
            'By using the built-in method handler',
            'API Routes only support GET requests',
        ],
        correctAnswer: 'By using if statements to check the method',
        section: 'API Routes',
    },
    {
        id: 4,
        difficulty: 'easy',
        question: 'What is the file naming convention for dynamic API Routes?',
        options: [
            '[param].js',
            '{param}.js',
            'dynamic-[param].js',
            '$param.js',
        ],
        correctAnswer: '[param].js',
        section: 'API Routes',
    },
    {
        id: 5,
        difficulty: 'medium',
        question: 'How can you access query parameters in an API Route?',
        options: [
            'From the req.query object',
            'Using the getQueryParams() function',
            'From the req.params object',
            'Query parameters are not accessible in API Routes',
        ],
        correctAnswer: 'From the req.query object',
        section: 'API Routes',
    },
    {
        id: 6,
        difficulty: 'hard',
        question: "What is the purpose of the 'config' object in API Routes?",
        options: [
            'To set up database connections',
            'To configure middleware',
            'To customize the runtime configuration of the API Route',
            'To define route parameters',
        ],
        correctAnswer:
            'To customize the runtime configuration of the API Route',
        section: 'API Routes',
    },
    {
        id: 7,
        difficulty: 'easy',
        question:
            'Which status code should be used for a successful POST request that creates a new resource?',
        options: ['200', '201', '204', '302'],
        correctAnswer: '201',
        section: 'API Routes',
    },
    {
        id: 8,
        difficulty: 'medium',
        question:
            'How can you implement rate limiting for API Routes in Next.js?',
        options: [
            'Using the built-in rateLimit function',
            'By implementing custom middleware',
            'Rate limiting is automatically applied',
            'API Routes cannot be rate limited',
        ],
        correctAnswer: 'By implementing custom middleware',
        section: 'API Routes',
    },
    {
        id: 9,
        difficulty: 'hard',
        question: 'What is the purpose of API middlewares in Next.js?',
        options: [
            'To handle authentication',
            'To modify the request or response',
            'To implement cross-cutting concerns',
            'All of the above',
        ],
        correctAnswer: 'All of the above',
        section: 'API Routes',
    },
    {
        id: 10,
        difficulty: 'easy',
        question: 'How do you export an API Route handler function?',
        options: [
            'export default function handler(req, res) {}',
            'module.exports = function(req, res) {}',
            'export const handler = (req, res) => {}',
            'export function apiHandler(req, res) {}',
        ],
        correctAnswer: 'export default function handler(req, res) {}',
        section: 'API Routes',
    },
    {
        id: 11,
        difficulty: 'medium',
        question:
            'How can you disable the automatic body parsing in API Routes?',
        options: [
            'By setting bodyParser: false in the config object',
            'By using the disableBodyParsing() function',
            "By importing the raw body from 'next/server'",
            'Body parsing cannot be disabled in API Routes',
        ],
        correctAnswer: 'By setting bodyParser: false in the config object',
        section: 'API Routes',
    },
    {
        id: 12,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'preview' mode in relation to API Routes?",
        options: [
            'To test API Routes before deployment',
            'To enable draft content for headless CMS',
            'To optimize API performance',
            'To implement A/B testing for APIs',
        ],
        correctAnswer: 'To enable draft content for headless CMS',
        section: 'API Routes',
    },
    {
        id: 13,
        difficulty: 'easy',
        question: 'Which of the following is true about API Routes in Next.js?',
        options: [
            'They can only handle GET requests',
            'They are always server-side rendered',
            "They don't support dynamic routes",
            'They can handle any HTTP method',
        ],
        correctAnswer: 'They can handle any HTTP method',
        section: 'API Routes',
    },
    {
        id: 14,
        difficulty: 'medium',
        question: 'How can you implement response caching for API Routes?',
        options: [
            'By using the cache() function',
            'By setting appropriate Cache-Control headers',
            'By enabling the apiCache option in next.config.js',
            'API Routes are cached by default',
        ],
        correctAnswer: 'By setting appropriate Cache-Control headers',
        section: 'API Routes',
    },
    {
        id: 15,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'revalidate' option in API Routes when used with Incremental Static Regeneration?",
        options: [
            'To force an immediate rebuild of static pages',
            'To set the cache lifetime for API responses',
            'To validate user input in API requests',
            'To schedule periodic updates for static pages',
        ],
        correctAnswer: 'To schedule periodic updates for static pages',
        section: 'API Routes',
    },
]
