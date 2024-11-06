import { Questions } from './types'

export const authenticationQuestions: Questions = [
    {
        id: 1,
        difficulty: 'easy',
        question:
            'What is the purpose of authentication in a Next.js application?',
        options: [
            'To improve performance',
            'To verify the identity of users',
            'To optimize SEO',
            'To handle API requests',
        ],
        correctAnswer: 'To verify the identity of users',
        section: 'Authentication',
    },
    {
        id: 2,
        difficulty: 'medium',
        question:
            'Which popular library is often used for authentication in Next.js applications?',
        options: ['Passport.js', 'NextAuth.js', 'Auth0', 'All of the above'],
        correctAnswer: 'All of the above',
        section: 'Authentication',
    },
    {
        id: 3,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'getSession' function in NextAuth.js?",
        options: [
            'To create a new user session',
            "To retrieve the current user's session data",
            "To end the user's session",
            'To validate session tokens',
        ],
        correctAnswer: "To retrieve the current user's session data",
        section: 'Authentication',
    },
    {
        id: 4,
        difficulty: 'easy',
        question:
            'Which API route is typically used for handling authentication in Next.js?',
        options: ['/api/auth', '/api/login', '/api/user', '/api/session'],
        correctAnswer: '/api/auth',
        section: 'Authentication',
    },
    {
        id: 5,
        difficulty: 'medium',
        question:
            'How can you protect API routes in Next.js from unauthorized access?',
        options: [
            'By using middleware',
            'By checking the session in each API route',
            'By implementing JWT verification',
            'All of the above',
        ],
        correctAnswer: 'All of the above',
        section: 'Authentication',
    },
    {
        id: 6,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'signIn' function in NextAuth.js?",
        options: [
            'To redirect users to the sign-in page',
            'To programmatically sign in a user',
            'To create a new user account',
            'To validate user credentials',
        ],
        correctAnswer: 'To programmatically sign in a user',
        section: 'Authentication',
    },
    {
        id: 7,
        difficulty: 'easy',
        question:
            'Which of the following is NOT a common authentication strategy?',
        options: [
            'JWT (JSON Web Tokens)',
            'Session-based authentication',
            'OAuth',
            'CSS-based authentication',
        ],
        correctAnswer: 'CSS-based authentication',
        section: 'Authentication',
    },
    {
        id: 8,
        difficulty: 'medium',
        question:
            "How can you access the authenticated user's information in a Next.js page component?",
        options: [
            'Using the useUser hook',
            'From the page props',
            'By making an API call to /api/user',
            "It's automatically available in all components",
        ],
        correctAnswer: 'Using the useUser hook',
        section: 'Authentication',
    },
    {
        id: 9,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'callbacks' option in NextAuth.js configuration?",
        options: [
            'To define custom error handling',
            'To customize the authentication flow',
            'To set up webhook endpoints',
            'To configure social login providers',
        ],
        correctAnswer: 'To customize the authentication flow',
        section: 'Authentication',
    },
    {
        id: 10,
        difficulty: 'easy',
        question:
            'Which HTTP status code is typically returned for unauthorized access attempts?',
        options: ['401', '403', '404', '500'],
        correctAnswer: '401',
        section: 'Authentication',
    },
    {
        id: 11,
        difficulty: 'medium',
        question:
            'How can you implement role-based access control (RBAC) in a Next.js application?',
        options: [
            'By using the built-in RBAC module',
            'By storing user roles in the session and checking them in components/pages',
            'By implementing a custom middleware for role checks',
            'RBAC is not possible in Next.js',
        ],
        correctAnswer:
            'By storing user roles in the session and checking them in components/pages',
        section: 'Authentication',
    },
    {
        id: 12,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'csrf' option in NextAuth.js configuration?",
        options: [
            'To enable Cross-Site Request Forgery protection',
            'To configure Cross-Origin Resource Sharing',
            'To set up Cross-Site Scripting prevention',
            'To manage Cross-Domain Authentication',
        ],
        correctAnswer: 'To enable Cross-Site Request Forgery protection',
        section: 'Authentication',
    },
    {
        id: 13,
        difficulty: 'easy',
        question:
            'Which of the following is a secure way to store user passwords?',
        options: [
            'In plain text',
            'Using MD5 hashing',
            'Using bcrypt or Argon2',
            'In local storage',
        ],
        correctAnswer: 'Using bcrypt or Argon2',
        section: 'Authentication',
    },
    {
        id: 14,
        difficulty: 'medium',
        question:
            'How can you implement password reset functionality in a Next.js application?',
        options: [
            'By using the built-in password reset feature',
            'By creating a custom API route and email service',
            'By storing reset tokens in the database and validating them',
            'Password reset is not possible in Next.js',
        ],
        correctAnswer: 'By creating a custom API route and email service',
        section: 'Authentication',
    },
    {
        id: 15,
        difficulty: 'hard',
        question: "What is the purpose of the 'jwt' callback in NextAuth.js?",
        options: [
            'To generate JWT tokens',
            'To validate JWT tokens',
            'To customize the content and/or lifetime of the JWT token',
            'To revoke JWT tokens',
        ],
        correctAnswer:
            'To customize the content and/or lifetime of the JWT token',
        section: 'Authentication',
    },
]
