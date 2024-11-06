import { Questions } from './types'

export const configurationQuestions: Questions = [
    {
        id: 1,
        difficulty: 'easy',
        question:
            'What is the primary configuration file for a Next.js project?',
        options: ['next.config.js', 'package.json', 'next.json', 'config.js'],
        correctAnswer: 'next.config.js',
        section: 'Configuration',
    },
    {
        id: 2,
        difficulty: 'medium',
        question:
            'Which of the following is NOT a valid configuration option in next.config.js?',
        options: ['reactStrictMode', 'images', 'webpack', 'serverComponents'],
        correctAnswer: 'serverComponents',
        section: 'Configuration',
    },
    {
        id: 3,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'rewrites' option in next.config.js?",
        options: [
            'To rename files during build',
            'To internally rewrite URLs',
            'To rewrite JavaScript code',
            'To implement URL redirects',
        ],
        correctAnswer: 'To internally rewrite URLs',
        section: 'Configuration',
    },
    {
        id: 4,
        difficulty: 'easy',
        question:
            'Which configuration option enables React Strict Mode in Next.js?',
        options: [
            'useStrictMode: true',
            'reactStrictMode: true',
            'strict: true',
            'enableStrictMode: true',
        ],
        correctAnswer: 'reactStrictMode: true',
        section: 'Configuration',
    },
    {
        id: 5,
        difficulty: 'medium',
        question: 'How can you customize the Babel configuration in Next.js?',
        options: [
            'By creating a .babelrc file',
            'By adding a babel key in package.json',
            'By using the babel option in next.config.js',
            'All of the above',
        ],
        correctAnswer: 'All of the above',
        section: 'Configuration',
    },
    {
        id: 6,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'exportPathMap' configuration in Next.js?",
        options: [
            'To define custom routes for static exports',
            'To exclude certain paths from the build',
            'To map API routes to static files',
            'To generate a sitemap for the application',
        ],
        correctAnswer: 'To define custom routes for static exports',
        section: 'Configuration',
    },
    {
        id: 7,
        difficulty: 'easy',
        question:
            'Which configuration option allows you to change the default build directory in Next.js?',
        options: ['buildDir', 'outDir', 'distDir', 'outputDir'],
        correctAnswer: 'distDir',
        section: 'Configuration',
    },
    {
        id: 8,
        difficulty: 'medium',
        question: 'How can you configure environment variables in Next.js?',
        options: [
            'By using .env files',
            'Through the env option in next.config.js',
            'Using process.env in JavaScript code',
            'All of the above',
        ],
        correctAnswer: 'All of the above',
        section: 'Configuration',
    },
    {
        id: 9,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'serverRuntimeConfig' and 'publicRuntimeConfig' in Next.js?",
        options: [
            'To set server-only and shared runtime configurations',
            'To configure server-side rendering options',
            'To define public and private API routes',
            'To set up server-side and client-side environment variables',
        ],
        correctAnswer: 'To set server-only and shared runtime configurations',
        section: 'Configuration',
    },
    {
        id: 10,
        difficulty: 'easy',
        question:
            'Which file is used to customize the default error page in Next.js?',
        options: [
            'pages/_error.js',
            'pages/404.js',
            'pages/error.js',
            'pages/_app.js',
        ],
        correctAnswer: 'pages/_error.js',
        section: 'Configuration',
    },
    {
        id: 11,
        difficulty: 'medium',
        question: 'How can you configure webpack in a Next.js project?',
        options: [
            'By creating a webpack.config.js file',
            'Using the webpack option in next.config.js',
            'Through the webpackConfig key in package.json',
            "Next.js doesn't allow webpack configuration",
        ],
        correctAnswer: 'Using the webpack option in next.config.js',
        section: 'Configuration',
    },
    {
        id: 12,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'generateBuildId' function in Next.js configuration?",
        options: [
            'To generate a unique ID for each build',
            'To create custom build names',
            'To implement versioning for static assets',
            'To generate unique IDs for dynamic routes',
        ],
        correctAnswer: 'To generate a unique ID for each build',
        section: 'Configuration',
    },
    {
        id: 13,
        difficulty: 'easy',
        question:
            'Which configuration option is used to enable TypeScript in a Next.js project?',
        options: [
            'useTypeScript: true',
            'typescript: { enabled: true }',
            'No configuration needed, Next.js auto-detects TypeScript',
            'enableTypeScript: true',
        ],
        correctAnswer:
            'No configuration needed, Next.js auto-detects TypeScript',
        section: 'Configuration',
    },
    {
        id: 14,
        difficulty: 'medium',
        question: 'How can you configure custom HTTP headers in Next.js?',
        options: [
            'Using the headers option in next.config.js',
            'By creating a headers.js file',
            'Through the _headers.js API route',
            "Next.js doesn't support custom HTTP headers",
        ],
        correctAnswer: 'Using the headers option in next.config.js',
        section: 'Configuration',
    },
    {
        id: 15,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'onDemandEntries' configuration in Next.js?",
        options: [
            'To enable on-demand page generation',
            'To configure how Next.js handles page entries in development',
            'To implement lazy loading for dynamic imports',
            'To manage entry points for webpack bundling',
        ],
        correctAnswer:
            'To configure how Next.js handles page entries in development',
        section: 'Configuration',
    },
    {
        id: 16,
        difficulty: 'easy',
        question:
            'Which configuration option is used to change the default port for the Next.js development server?',
        options: [
            '-p or --port command line option',
            'port: 3000 in next.config.js',
            'PORT environment variable',
            'All of the above',
        ],
        correctAnswer: 'All of the above',
        section: 'Configuration',
    },
    {
        id: 17,
        difficulty: 'medium',
        question:
            'How can you configure Next.js to use a custom App component?',
        options: [
            'By creating a pages/_app.js file',
            'Using the customApp option in next.config.js',
            'Through the app key in package.json',
            "Next.js doesn't support custom App components",
        ],
        correctAnswer: 'By creating a pages/_app.js file',
        section: 'Configuration',
    },
    {
        id: 18,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'experimental' configuration option in Next.js?",
        options: [
            'To enable beta features',
            'To use experimental JavaScript features',
            'To opt-in to experimental Next.js features',
            'To run the application in experimental mode',
        ],
        correctAnswer: 'To opt-in to experimental Next.js features',
        section: 'Configuration',
    },
    {
        id: 19,
        difficulty: 'easy',
        question:
            'Which file is used to configure PostCSS in a Next.js project?',
        options: [
            'postcss.config.js',
            'next.config.js',
            '.postcssrc',
            'css.config.js',
        ],
        correctAnswer: 'postcss.config.js',
        section: 'Configuration',
    },
    {
        id: 20,
        difficulty: 'medium',
        question:
            'How can you configure the behavior of the Next.js production build?',
        options: [
            'Using the build option in next.config.js',
            'Through environment variables',
            'By creating a build.config.js file',
            "Next.js doesn't allow build configuration",
        ],
        correctAnswer: 'Using the build option in next.config.js',
        section: 'Configuration',
    },
    {
        id: 21,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'redirects' configuration in Next.js?",
        options: [
            'To implement client-side redirects',
            'To set up server-side redirects',
            'To manage redirect loops',
            'To create vanity URLs',
        ],
        correctAnswer: 'To set up server-side redirects',
        section: 'Configuration',
    },
    {
        id: 22,
        difficulty: 'easy',
        question:
            'Which configuration option is used to disable automatic static optimization in Next.js?',
        options: [
            'disableStaticOptimization: true',
            'staticOptimization: false',
            'optimizeStatic: false',
            "Next.js doesn't allow disabling static optimization",
        ],
        correctAnswer: "Next.js doesn't allow disabling static optimization",
        section: 'Configuration',
    },
    {
        id: 23,
        difficulty: 'medium',
        question:
            'How can you configure Next.js to use a custom Document component?',
        options: [
            'By creating a pages/_document.js file',
            'Using the customDocument option in next.config.js',
            'Through the document key in package.json',
            "Next.js doesn't support custom Document components",
        ],
        correctAnswer: 'By creating a pages/_document.js file',
        section: 'Configuration',
    },
    {
        id: 24,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'future' configuration option in Next.js?",
        options: [
            'To enable upcoming JavaScript features',
            'To opt-in to future Next.js breaking changes',
            'To configure future-proof builds',
            'To set up time-based feature flags',
        ],
        correctAnswer: 'To opt-in to future Next.js breaking changes',
        section: 'Configuration',
    },
    {
        id: 25,
        difficulty: 'easy',
        question:
            'Which configuration file is used to customize ESLint in a Next.js project?',
        options: [
            '.eslintrc.json',
            'eslint.config.js',
            'next.config.js',
            'package.json',
        ],
        correctAnswer: '.eslintrc.json',
        section: 'Configuration',
    },
]
