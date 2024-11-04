export const renderingQuestions = [
    {
        id: 1,
        difficulty: 'easy',
        question: 'What are the two main types of rendering in Next.js?',
        options: [
            'Client-side and Server-side',
            'Static and Dynamic',
            'Incremental and Decremental',
            'Synchronous and Asynchronous',
        ],
        correctAnswer: 'Client-side and Server-side',
        section: 'Rendering',
    },
    {
        id: 2,
        difficulty: 'easy',
        question: 'What is the default rendering method for pages in Next.js?',
        options: [
            'Client-side Rendering',
            'Server-side Rendering',
            'Static Site Generation',
            'Incremental Static Regeneration',
        ],
        correctAnswer: 'Server-side Rendering',
        section: 'Rendering',
    },
    {
        id: 3,
        difficulty: 'medium',
        question:
            'What is the purpose of Static Site Generation (SSG) in Next.js?',
        options: [
            'To render pages on each request',
            'To generate static HTML at build time',
            'To update pages in real-time',
            'To optimize client-side rendering',
        ],
        correctAnswer: 'To generate static HTML at build time',
        section: 'Rendering',
    },
    {
        id: 4,
        difficulty: 'medium',
        question:
            'How can you implement Server-Side Rendering (SSR) for a page in Next.js?',
        options: [
            'By using the getServerSideProps function',
            'By using the useSSR hook',
            'By setting ssr: true in the page component',
            'Next.js uses SSR by default for all pages',
        ],
        correctAnswer: 'By using the getServerSideProps function',
        section: 'Rendering',
    },
    {
        id: 5,
        difficulty: 'hard',
        question: 'What is Incremental Static Regeneration (ISR) in Next.js?',
        options: [
            'A method to incrementally add new static pages',
            'A technique to regenerate static pages at runtime',
            'A way to render pages partially on the server and client',
            'An approach to optimize rendering performance',
        ],
        correctAnswer: 'A technique to regenerate static pages at runtime',
        section: 'Rendering',
    },
    {
        id: 6,
        difficulty: 'easy',
        question: 'What is a Server Component in Next.js?',
        options: [
            'A component that only runs on the server',
            'A component that manages server-side state',
            'A component that handles API requests',
            'A component that optimizes server performance',
        ],
        correctAnswer: 'A component that only runs on the server',
        section: 'Rendering',
    },
    {
        id: 7,
        difficulty: 'medium',
        question: 'How do you create a Client Component in Next.js?',
        options: [
            'By using the createClientComponent function',
            "By adding 'use client' directive at the top of the file",
            'By wrapping the component with <ClientOnly>',
            'All components are client components by default',
        ],
        correctAnswer:
            "By adding 'use client' directive at the top of the file",
        section: 'Rendering',
    },
    {
        id: 8,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'dynamic' function in Next.js rendering?",
        options: [
            'To create dynamic routes',
            'To implement code splitting and lazy loading',
            'To enable dynamic imports',
            'To generate dynamic CSS',
        ],
        correctAnswer: 'To implement code splitting and lazy loading',
        section: 'Rendering',
    },
    {
        id: 9,
        difficulty: 'medium',
        question:
            'In Next.js, what is the difference between a page and a layout?',
        options: [
            'Pages are for routing, layouts are for structuring',
            'Pages are client-side, layouts are server-side',
            'Pages are dynamic, layouts are static',
            'There is no difference, they are interchangeable',
        ],
        correctAnswer: 'Pages are for routing, layouts are for structuring',
        section: 'Rendering',
    },
    {
        id: 10,
        difficulty: 'easy',
        question: 'What is hydration in the context of Next.js rendering?',
        options: [
            'Adding water effects to components',
            'Optimizing image loading',
            'Attaching event listeners to server-rendered HTML',
            'Caching server-side data',
        ],
        correctAnswer: 'Attaching event listeners to server-rendered HTML',
        section: 'Rendering',
    },
    {
        id: 11,
        difficulty: 'hard',
        question: "What is the purpose of the 'suspense' component in Next.js?",
        options: [
            'To handle errors in rendering',
            'To implement lazy loading of components',
            'To create suspenseful animations',
            'To pause rendering of server components',
        ],
        correctAnswer: 'To implement lazy loading of components',
        section: 'Rendering',
    },
    {
        id: 12,
        difficulty: 'medium',
        question: 'How can you optimize images in Next.js?',
        options: [
            'By using the next/image component',
            'By manually resizing all images',
            'By using the optimizeImages() function',
            'Images are automatically optimized in Next.js',
        ],
        correctAnswer: 'By using the next/image component',
        section: 'Rendering',
    },
    {
        id: 13,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'generateStaticParams' function in Next.js?",
        options: [
            'To generate dynamic routes',
            'To create static pages for dynamic routes at build time',
            'To handle URL parameters in SSR',
            'To optimize static site generation',
        ],
        correctAnswer:
            'To create static pages for dynamic routes at build time',
        section: 'Rendering',
    },
    {
        id: 14,
        difficulty: 'medium',
        question:
            "What is the difference between 'use server' and 'use client' directives in Next.js?",
        options: [
            "'use server' is for API routes, 'use client' is for pages",
            "'use server' marks server components, 'use client' marks client components",
            "'use server' is for SSR, 'use client' is for CSR",
            'They are interchangeable and serve the same purpose',
        ],
        correctAnswer:
            "'use server' marks server components, 'use client' marks client components",
        section: 'Rendering',
    },
    {
        id: 15,
        difficulty: 'easy',
        question: "What is the purpose of the 'loading.js' file in Next.js?",
        options: [
            'To handle loading of external scripts',
            'To create a loading UI for route segments',
            'To optimize page load times',
            'To manage loading states in components',
        ],
        correctAnswer: 'To create a loading UI for route segments',
        section: 'Rendering',
    },
    {
        id: 16,
        difficulty: 'hard',
        question:
            'How does Next.js handle streaming of server-rendered content?',
        options: [
            'Through the use of Web Sockets',
            'By implementing Server-Sent Events',
            'Using React Suspense and async components',
            'Streaming is not supported in Next.js',
        ],
        correctAnswer: 'Using React Suspense and async components',
        section: 'Rendering',
    },
    {
        id: 17,
        difficulty: 'medium',
        question:
            "What is the purpose of the 'next/script' component in Next.js?",
        options: [
            'To add inline JavaScript to pages',
            'To optimize loading of external scripts',
            'To create server-side scripts',
            'To implement client-side routing',
        ],
        correctAnswer: 'To optimize loading of external scripts',
        section: 'Rendering',
    },
    {
        id: 18,
        difficulty: 'easy',
        question:
            'In Next.js, what is the primary benefit of using Server Components?',
        options: [
            'They provide better SEO',
            'They reduce the amount of JavaScript sent to the client',
            'They enable real-time updates',
            'They improve client-side rendering performance',
        ],
        correctAnswer:
            'They reduce the amount of JavaScript sent to the client',
        section: 'Rendering',
    },
    {
        id: 19,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'headers' function in Next.js rendering?",
        options: [
            'To set HTTP headers for API routes',
            'To read incoming request headers in Server Components',
            'To optimize header tags for SEO',
            'To manage header components in layouts',
        ],
        correctAnswer: 'To read incoming request headers in Server Components',
        section: 'Rendering',
    },
    {
        id: 20,
        difficulty: 'medium',
        question:
            'How can you implement error handling for specific routes in Next.js?',
        options: [
            'By using try-catch blocks in page components',
            'By creating an error.js file in the route folder',
            'By implementing the onError prop in Link components',
            'Error handling is automatically managed by Next.js',
        ],
        correctAnswer: 'By creating an error.js file in the route folder',
        section: 'Rendering',
    },
]
