export type Question = {
    id: number
    difficulty: 'easy' | 'medium' | 'hard'
    question: string
    options: string[]
    correctAnswer: string
    section: string
}

export const questions: Question[] = [
    {
        id: 1,
        difficulty: 'easy',
        question:
            'Which file is used to define routes in Next.js 13 and later?',
        options: ['pages.js', 'routes.js', 'app.js', 'page.js'],
        correctAnswer: 'page.js',
        section: 'Routing',
    },
    {
        id: 2,
        difficulty: 'easy',
        question:
            'Which component is used for client-side navigation in Next.js?',
        options: ['<a>', '<Link>', '<NavLink>', '<Router>'],
        correctAnswer: '<Link>',
        section: 'Routing',
    },
    {
        id: 3,
        difficulty: 'medium',
        question: 'How do you create dynamic routes in Next.js?',
        options: [
            'Using square brackets in the filename',
            'Using a routes.js configuration file',
            'Using the Link component',
            'Using the Router.push method',
        ],
        correctAnswer: 'Using square brackets in the filename',
        section: 'Routing',
    },
    {
        id: 4,
        difficulty: 'medium',
        question:
            'What is the purpose of the [...slug].js file in Next.js routing?',
        options: [
            'To create a single dynamic route',
            'To create catch-all routes',
            'To define API routes',
            'To create static routes',
        ],
        correctAnswer: 'To create catch-all routes',
        section: 'Routing',
    },
    {
        id: 5,
        difficulty: 'hard',
        question:
            'How can you access route parameters in a Next.js page component?',
        options: [
            'Using the useRouter hook',
            'Using the withRouter HOC',
            'Using the query prop',
            'Using the getInitialProps method',
        ],
        correctAnswer: 'Using the useRouter hook',
        section: 'Routing',
    },
]

export const sections = [
    'All',
    'Routing',
    'Rendering',
    'Data Fetching',
    'Styling',
    'Optimizing',
    'Configuring',
    'API Routes',
    'Deploying',
    'Authentication',
    'Testing',
]
