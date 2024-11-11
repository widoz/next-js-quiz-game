import { Questions } from './types'

export const routingQuestions: Questions = [
    {
        id: 1,
        difficulty: 'easy',
        question:
            'Which file is used to define the root layout in Next.js 13 and later?',
        options: ['app/layout.js', 'pages/_app.js', 'app/page.js', 'root.js'],
        correctAnswer: 'app/layout.js',
        section: 'Routing',
    },
    {
        id: 2,
        difficulty: 'easy',
        question:
            "In Next.js, what does the file name 'page.js' represent in the app directory?",
        options: [
            'A UI component',
            'A route segment',
            'A layout file',
            'A middleware function',
        ],
        correctAnswer: 'A UI component',
        section: 'Routing',
    },
    {
        id: 3,
        difficulty: 'easy',
        question:
            'Which component is used for client-side navigation in Next.js?',
        options: ['<a>', '<Link>', '<NavLink>', '<Router>'],
        correctAnswer: '<Link>',
        section: 'Routing',
    },
    {
        id: 4,
        difficulty: 'easy',
        question:
            "What is the purpose of the 'not-found.js' file in Next.js routing?",
        options: [
            'To handle 404 errors',
            'To create dynamic routes',
            'To define API routes',
            'To set up redirects',
        ],
        correctAnswer: 'To handle 404 errors',
        section: 'Routing',
    },
    {
        id: 5,
        difficulty: 'easy',
        question: 'In Next.js, how do you create a nested route?',
        options: [
            'By using nested folders',
            'By using a routes.js file',
            'By using the Link component',
            'By using the Router.push method',
        ],
        correctAnswer: 'By using nested folders',
        section: 'Routing',
    },
    {
        id: 6,
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
        id: 7,
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
        id: 8,
        difficulty: 'medium',
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
    {
        id: 9,
        difficulty: 'medium',
        question:
            "What is the purpose of the 'loading.js' file in Next.js routing?",
        options: [
            'To define global loading states',
            'To create a loading UI for route segments',
            'To handle server-side loading',
            'To optimize image loading',
        ],
        correctAnswer: 'To create a loading UI for route segments',
        section: 'Routing',
    },
    {
        id: 10,
        difficulty: 'medium',
        question: 'How do you create an optional catch-all route in Next.js?',
        options: ['[[...slug]].js', '[...slug].js', '(slug).js', 'slug?.js'],
        correctAnswer: '[[...slug]].js',
        section: 'Routing',
    },
    {
        id: 11,
        difficulty: 'hard',
        question:
            'What is the correct order of execution for route handlers in Next.js?',
        options: [
            'middleware > layouts > page',
            'layouts > middleware > page',
            'page > layouts > middleware',
            'middleware > page > layouts',
        ],
        correctAnswer: 'middleware > layouts > page',
        section: 'Routing',
    },
    {
        id: 12,
        difficulty: 'hard',
        question: 'How can you implement route groups in Next.js?',
        options: [
            'By using parentheses () around folder names',
            'By using square brackets [] around folder names',
            'By using a routes.config.js file',
            'By using the Router.group() method',
        ],
        correctAnswer: 'By using parentheses () around folder names',
        section: 'Routing',
    },
    {
        id: 13,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'generateStaticParams' function in dynamic route segments?",
        options: [
            'To generate static routes at build time',
            'To handle server-side rendering',
            'To manage client-side state',
            'To configure API endpoints',
        ],
        correctAnswer: 'To generate static routes at build time',
        section: 'Routing',
    },
    {
        id: 14,
        difficulty: 'hard',
        question: 'How can you implement parallel routes in Next.js?',
        options: [
            'By using the @folder convention',
            'By using the parallel() function',
            'By using multiple page.js files in the same folder',
            'By using the Router.parallel() method',
        ],
        correctAnswer: 'By using the @folder convention',
        section: 'Routing',
    },
    {
        id: 15,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'default.js' file in parallel routing?",
        options: [
            'To define the default layout',
            'To provide a fallback UI for unmatched routes',
            'To set default route parameters',
            'To configure default API responses',
        ],
        correctAnswer: 'To provide a fallback UI for unmatched routes',
        section: 'Routing',
    },
    {
        id: 16,
        difficulty: 'medium',
        question: 'How do you create a route interceptor in Next.js?',
        options: [
            'By using the (.) folder convention',
            'By using the intercept() function',
            'By creating an intercept.js file',
            'By using the Router.intercept() method',
        ],
        correctAnswer: 'By using the (.) folder convention',
        section: 'Routing',
    },
    {
        id: 17,
        difficulty: 'medium',
        question: "What is the purpose of the 'usePathname' hook in Next.js?",
        options: [
            'To get the current URL pathname',
            'To modify the URL pathname',
            'To handle pathname redirects',
            'To generate dynamic pathnames',
        ],
        correctAnswer: 'To get the current URL pathname',
        section: 'Routing',
    },
    {
        id: 18,
        difficulty: 'easy',
        question:
            'Which file is used to handle app-wide custom error pages in Next.js?',
        options: [
            'app/error.js',
            'pages/_error.js',
            'app/404.js',
            'error.config.js',
        ],
        correctAnswer: 'app/error.js',
        section: 'Routing',
    },
    {
        id: 19,
        difficulty: 'hard',
        question:
            'How can you implement a custom 404 page for a specific route segment in Next.js?',
        options: [
            'By creating a not-found.js file in the specific route folder',
            'By using the Router.notFound() method',
            'By creating a 404.js file in the pages directory',
            'By using the notFoundHandler middleware',
        ],
        correctAnswer:
            'By creating a not-found.js file in the specific route folder',
        section: 'Routing',
    },
    {
        id: 20,
        difficulty: 'medium',
        question:
            "What is the purpose of the 'useSearchParams' hook in Next.js?",
        options: [
            "To read the current URL's query string",
            "To modify the URL's query string",
            'To handle search functionality',
            'To optimize search engine queries',
        ],
        correctAnswer: "To read the current URL's query string",
        section: 'Routing',
    },
    {
        id: 21,
        difficulty: 'medium',
        question:
            "What is the purpose of the 'layout.js' file in Next.js routing?",
        options: [
            'To define the structure shared by all pages',
            'To create API routes',
            'To handle 404 errors',
            'To configure build settings',
        ],
        correctAnswer: 'To define the structure shared by all pages',
        section: 'Routing',
    },
    {
        id: 22,
        difficulty: 'hard',
        question:
            'How can you create a route handler for dynamic segments in Next.js?',
        options: [
            'By using square brackets in the file name, e.g., [id].js',
            'By using the createDynamicHandler() function',
            "By adding a 'dynamic' property to the page component",
            "It's not possible to create route handlers for dynamic segments",
        ],
        correctAnswer:
            'By using square brackets in the file name, e.g., [id].js',
        section: 'Routing',
    },
    {
        id: 23,
        difficulty: 'medium',
        question:
            "What is the purpose of the 'useSelectedLayoutSegment' hook in Next.js?",
        options: [
            'To access the active route segment within a layout',
            'To modify the layout structure',
            'To handle layout transitions',
            'To optimize layout rendering',
        ],
        correctAnswer: 'To access the active route segment within a layout',
        section: 'Routing',
    },
    {
        id: 24,
        difficulty: 'easy',
        question: "In Next.js, what is the purpose of the 'pages' directory?",
        options: [
            'To store static assets',
            'To define API routes',
            'To create page routes (in the Pages Router)',
            'To configure build settings',
        ],
        correctAnswer: 'To create page routes (in the Pages Router)',
        section: 'Routing',
    },
    {
        id: 25,
        difficulty: 'hard',
        question: 'How can you implement middleware in Next.js routing?',
        options: [
            'By creating a middleware.js file in the root directory',
            'By using the useMiddleware hook',
            'By adding a middleware property to the page component',
            'By configuring middleware in next.config.js',
        ],
        correctAnswer: 'By creating a middleware.js file in the root directory',
        section: 'Routing',
    },
    {
        id: 26,
        difficulty: 'medium',
        question:
            "What is the purpose of the 'rewrites' option in next.config.js?",
        options: [
            'To rename files during build',
            'To internally rewrite URLs',
            'To optimize route loading',
            'To handle 404 errors',
        ],
        correctAnswer: 'To internally rewrite URLs',
        section: 'Routing',
    },
    {
        id: 27,
        difficulty: 'easy',
        question:
            'Which file is used to create a custom 500 error page in Next.js?',
        options: ['pages/500.js', 'error.js', '500.js', 'server-error.js'],
        correctAnswer: 'pages/500.js',
        section: 'Routing',
    },
    {
        id: 28,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'generateStaticParams' function in dynamic route segments?",
        options: [
            'To generate static routes at build time',
            'To handle server-side rendering',
            'To manage client-side state',
            'To configure API endpoints',
        ],
        correctAnswer: 'To generate static routes at build time',
        section: 'Routing',
    },
    {
        id: 29,
        difficulty: 'medium',
        question: 'How can you implement route protection in Next.js?',
        options: [
            "By using the 'protect' property in page components",
            'Through middleware',
            'By using the useProtectedRoute hook',
            "It's not possible to implement route protection in Next.js",
        ],
        correctAnswer: 'Through middleware',
        section: 'Routing',
    },
    {
        id: 30,
        difficulty: 'easy',
        question: "What is the purpose of the 'Link' component in Next.js?",
        options: [
            'To create external links',
            'To handle client-side navigation',
            'To style anchor tags',
            'To generate sitemaps',
        ],
        correctAnswer: 'To handle client-side navigation',
        section: 'Routing',
    },
    {
        id: 31,
        difficulty: 'hard',
        question: 'How can you implement internationalized routing in Next.js?',
        options: [
            'By using the i18n object in next.config.js',
            'By creating separate routes for each language',
            'By using the useTranslation hook',
            "It's not possible to implement internationalized routing in Next.js",
        ],
        correctAnswer: 'By using the i18n object in next.config.js',
        section: 'Routing',
    },
    {
        id: 32,
        difficulty: 'medium',
        question:
            "What is the purpose of the 'shallow' option in the router.push() method?",
        options: [
            'To perform a shallow copy of the route',
            'To update the URL without running data fetching methods',
            'To optimize route loading',
            'To clear the router cache',
        ],
        correctAnswer:
            'To update the URL without running data fetching methods',
        section: 'Routing',
    },
    {
        id: 33,
        difficulty: 'easy',
        question:
            'In Next.js, how do you create a route that matches multiple paths?',
        options: [
            'By using square brackets, e.g., [id].js',
            'By using parentheses, e.g., (id).js',
            'By using the catch-all syntax, e.g., [...id].js',
            'By using the matchMultiple property',
        ],
        correctAnswer: 'By using the catch-all syntax, e.g., [...id].js',
        section: 'Routing',
    },
    {
        id: 34,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'useSelectedLayoutSegments' hook in Next.js?",
        options: [
            'To access all active segments in the current layout',
            'To modify layout segments',
            'To optimize layout rendering',
            'To handle layout transitions',
        ],
        correctAnswer: 'To access all active segments in the current layout',
        section: 'Routing',
    },
    {
        id: 35,
        difficulty: 'medium',
        question: 'How can you implement route transitions in Next.js?',
        options: [
            'By using the transition property in the Link component',
            'Through CSS animations',
            'By using the useRouteTransition hook',
            "It's not possible to implement route transitions in Next.js",
        ],
        correctAnswer: 'Through CSS animations',
        section: 'Routing',
    },
    {
        id: 36,
        difficulty: 'easy',
        question:
            "What is the purpose of the 'as' prop in the Next.js Link component?",
        options: [
            'To specify the target route',
            'To provide an accessible name for the link',
            "To mask the URL in the browser's address bar",
            'To apply custom styles to the link',
        ],
        correctAnswer: "To mask the URL in the browser's address bar",
        section: 'Routing',
    },
    {
        id: 37,
        difficulty: 'hard',
        question:
            'How can you implement a custom error handling for specific routes in Next.js?',
        options: [
            'By creating an error.js file in the specific route folder',
            'By using the handleRouteError function',
            'By adding a try-catch block in the page component',
            "It's not possible to implement custom error handling for specific routes",
        ],
        correctAnswer:
            'By creating an error.js file in the specific route folder',
        section: 'Routing',
    },
    {
        id: 38,
        difficulty: 'medium',
        question:
            "What is the purpose of the 'notFound' function in Next.js routing?",
        options: [
            'To redirect to a 404 page',
            'To throw a 404 error and render the not-found UI',
            'To handle missing route parameters',
            'To create custom 404 pages',
        ],
        correctAnswer: 'To throw a 404 error and render the not-found UI',
        section: 'Routing',
    },
    {
        id: 39,
        difficulty: 'easy',
        question:
            'In Next.js, how do you create a route that only matches a specific path?',
        options: [
            'By using the exact property in the route definition',
            'By using parentheses in the folder name',
            'By creating an index.js file in the folder',
            'Next.js routes always match specific paths by default',
        ],
        correctAnswer: 'By creating an index.js file in the folder',
        section: 'Routing',
    },
    {
        id: 40,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'useParams' hook in Next.js routing?",
        options: [
            'To access route parameters in client components',
            'To modify route parameters',
            'To validate route parameters',
            'To generate dynamic route parameters',
        ],
        correctAnswer: 'To access route parameters in client components',
        section: 'Routing',
    },
]
