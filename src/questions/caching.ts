export const cachingQuestions = [
    {
        id: 1,
        difficulty: 'easy',
        question: 'What is the primary purpose of caching in Next.js?',
        options: [
            'To reduce server load',
            'To improve application performance',
            'To store user data',
            'To manage state',
        ],
        correctAnswer: 'To improve application performance',
        section: 'Caching',
    },
    {
        id: 2,
        difficulty: 'easy',
        question: 'Which of the following is NOT a type of cache in Next.js?',
        options: [
            'Request Memoization',
            'Data Cache',
            'Full Route Cache',
            'Browser Cache',
        ],
        correctAnswer: 'Browser Cache',
        section: 'Caching',
    },
    {
        id: 3,
        difficulty: 'medium',
        question:
            'What is the default caching behavior for fetch requests in Next.js?',
        options: [
            'No caching',
            'Cache-first',
            'Network-first',
            'Stale-while-revalidate',
        ],
        correctAnswer: 'Cache-first',
        section: 'Caching',
    },
    {
        id: 4,
        difficulty: 'medium',
        question:
            'How can you disable caching for a specific fetch request in Next.js?',
        options: [
            "By setting cache: 'no-store' in the fetch options",
            'By using the noCache() function',
            'By setting revalidate: 0',
            'By using the useNoCache() hook',
        ],
        correctAnswer: "By setting cache: 'no-store' in the fetch options",
        section: 'Caching',
    },
    {
        id: 5,
        difficulty: 'hard',
        question:
            'What is the purpose of the revalidate option in fetch requests?',
        options: [
            'To set the cache duration in seconds',
            'To force immediate cache invalidation',
            'To specify the number of times to retry failed requests',
            'To enable real-time data updates',
        ],
        correctAnswer: 'To set the cache duration in seconds',
        section: 'Caching',
    },
    {
        id: 6,
        difficulty: 'easy',
        question:
            'Which cache is used to store the rendered result of Route Handlers?',
        options: [
            'Data Cache',
            'Full Route Cache',
            'Request Memoization',
            'Router Cache',
        ],
        correctAnswer: 'Full Route Cache',
        section: 'Caching',
    },
    {
        id: 7,
        difficulty: 'medium',
        question:
            'What is the purpose of the unstable_noStore option in Next.js caching?',
        options: [
            'To mark a feature as experimental',
            'To disable all caching for a specific request',
            'To enable unstable caching features',
            'To prevent server-side rendering',
        ],
        correctAnswer: 'To disable all caching for a specific request',
        section: 'Caching',
    },
    {
        id: 8,
        difficulty: 'hard',
        question: 'How can you implement on-demand revalidation in Next.js?',
        options: [
            'By using the revalidate segment in route handlers',
            'By calling the revalidateTag() function',
            "By setting cache: 'no-store' in fetch()",
            'By using the useRevalidate() hook',
        ],
        correctAnswer: 'By calling the revalidateTag() function',
        section: 'Caching',
    },
    {
        id: 9,
        difficulty: 'medium',
        question:
            "What is the purpose of the 'force-cache' option in fetch requests?",
        options: [
            'To force the browser to cache the response',
            'To always fetch from the network',
            'To use the cached version if available, ignoring cache age',
            'To clear the cache before making a request',
        ],
        correctAnswer:
            'To use the cached version if available, ignoring cache age',
        section: 'Caching',
    },
    {
        id: 10,
        difficulty: 'easy',
        question:
            'Which Next.js feature allows you to cache the result of data fetching functions?',
        options: [
            'Data Caching',
            'Route Caching',
            'Component Caching',
            'API Caching',
        ],
        correctAnswer: 'Data Caching',
        section: 'Caching',
    },
    {
        id: 11,
        difficulty: 'hard',
        question:
            "What is the difference between 'cache' and 'next.revalidate' options in fetch?",
        options: [
            "'cache' is for client-side, 'next.revalidate' is for server-side",
            "'cache' controls caching behavior, 'next.revalidate' sets revalidation time",
            'They are interchangeable and serve the same purpose',
            "'cache' is deprecated, 'next.revalidate' is the new standard",
        ],
        correctAnswer:
            "'cache' controls caching behavior, 'next.revalidate' sets revalidation time",
        section: 'Caching',
    },
    {
        id: 12,
        difficulty: 'medium',
        question: 'How does Next.js handle caching for static routes?',
        options: [
            "It doesn't cache static routes",
            'It caches them indefinitely',
            'It caches them for 24 hours by default',
            'It allows manual control through next.config.js',
        ],
        correctAnswer: 'It caches them indefinitely',
        section: 'Caching',
    },
    {
        id: 13,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'generateStaticParams' function in relation to caching?",
        options: [
            'To generate dynamic routes',
            'To create static pages for dynamic routes at build time',
            'To set cache parameters for static assets',
            'To invalidate the cache for specific parameters',
        ],
        correctAnswer:
            'To create static pages for dynamic routes at build time',
        section: 'Caching',
    },
    {
        id: 14,
        difficulty: 'medium',
        question:
            'How can you opt out of caching for an entire route segment in Next.js?',
        options: [
            "By using the 'no-cache' directive in the route file",
            'By setting cache: false in the page component',
            "By creating a route.js file with export const dynamic = 'force-dynamic'",
            'By using the useNoCache() hook in the layout component',
        ],
        correctAnswer:
            "By creating a route.js file with export const dynamic = 'force-dynamic'",
        section: 'Caching',
    },
    {
        id: 15,
        difficulty: 'easy',
        question:
            "What is the purpose of the 'cookies()' function in relation to caching in Next.js?",
        options: [
            'To set cookies for caching',
            'To read cookies, which can affect caching behavior',
            'To clear cached cookies',
            'To encrypt cookies for secure caching',
        ],
        correctAnswer: 'To read cookies, which can affect caching behavior',
        section: 'Caching',
    },
    {
        id: 16,
        difficulty: 'hard',
        question:
            'How does Next.js handle caching for fetch requests with POST method?',
        options: [
            'It caches them by default',
            'It never caches POST requests',
            "It caches them only if cache: 'force-cache' is set",
            'It caches the response but not the request body',
        ],
        correctAnswer: 'It never caches POST requests',
        section: 'Caching',
    },
    {
        id: 17,
        difficulty: 'medium',
        question: "What is the purpose of the 'next/cache' module in Next.js?",
        options: [
            'To manage browser caching',
            'To implement server-side caching strategies',
            'To optimize image caching',
            'To handle caching for external APIs',
        ],
        correctAnswer: 'To implement server-side caching strategies',
        section: 'Caching',
    },
    {
        id: 18,
        difficulty: 'easy',
        question:
            'Which of the following is true about the Router Cache in Next.js?',
        options: [
            "It's a server-side cache",
            'It stores the rendered result of Route Handlers',
            "It's a client-side cache for prefetched pages",
            'It caches API responses',
        ],
        correctAnswer: "It's a client-side cache for prefetched pages",
        section: 'Caching',
    },
    {
        id: 19,
        difficulty: 'hard',
        question:
            'How can you implement time-based revalidation for a specific fetch request in Next.js?',
        options: [
            'By using the revalidate option in getStaticProps',
            'By setting next: { revalidate: seconds } in the fetch options',
            'By using the useRevalidate(seconds) hook',
            'By creating a revalidate.js file in the route folder',
        ],
        correctAnswer:
            'By setting next: { revalidate: seconds } in the fetch options',
        section: 'Caching',
    },
    {
        id: 20,
        difficulty: 'medium',
        question:
            "What is the purpose of the 'headers()' function in relation to caching in Next.js?",
        options: [
            'To set cache-control headers',
            'To read request headers, which can affect caching',
            'To clear cached headers',
            'To compress headers for efficient caching',
        ],
        correctAnswer: 'To read request headers, which can affect caching',
        section: 'Caching',
    },
    {
        id: 21,
        difficulty: 'easy',
        question:
            'Which of the following is NOT a valid cache option for fetch in Next.js?',
        options: ['force-cache', 'no-store', 'only-if-cached', 'default'],
        correctAnswer: 'only-if-cached',
        section: 'Caching',
    },
    {
        id: 22,
        difficulty: 'hard',
        question:
            'How does Next.js handle caching for dynamically rendered routes?',
        options: [
            'It always caches them',
            'It never caches them',
            "It caches them based on the dynamic = 'force-dynamic' export",
            'It caches them for a default period of 1 hour',
        ],
        correctAnswer: 'It never caches them',
        section: 'Caching',
    },
    {
        id: 23,
        difficulty: 'medium',
        question:
            "What is the purpose of the 'fetchCache' option in the route segment config?",
        options: [
            'To enable or disable fetch caching for the entire application',
            'To set default fetch options for all requests in a route segment',
            'To clear the fetch cache for a specific route',
            'To implement custom fetch caching logic',
        ],
        correctAnswer:
            'To set default fetch options for all requests in a route segment',
        section: 'Caching',
    },
    {
        id: 24,
        difficulty: 'easy',
        question:
            'Which Next.js cache is used to store the rendered result of React Server Components?',
        options: [
            'Data Cache',
            'Full Route Cache',
            'Request Memoization',
            'Component Cache',
        ],
        correctAnswer: 'Full Route Cache',
        section: 'Caching',
    },
    {
        id: 25,
        difficulty: 'hard',
        question:
            'How can you implement cache tags for on-demand revalidation in Next.js?',
        options: [
            'By using the cacheTags option in getStaticProps',
            "By setting next: { tags: ['tag1', 'tag2'] } in the fetch options",
            'By using the useCacheTags() hook',
            'By creating a cacheTags.js file in the route folder',
        ],
        correctAnswer:
            "By setting next: { tags: ['tag1', 'tag2'] } in the fetch options",
        section: 'Caching',
    },
]
