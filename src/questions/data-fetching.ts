export const dataFetchingQuestions = [
    {
        id: 1,
        difficulty: 'easy',
        question:
            'What is the primary purpose of the fetch() function in Next.js?',
        options: [
            'To fetch data on the client-side only',
            'To fetch data on the server-side only',
            'To fetch data on both client and server-side',
            'To fetch data during build time',
        ],
        correctAnswer: 'To fetch data on both client and server-side',
        section: 'Data Fetching',
    },
    {
        id: 2,
        difficulty: 'easy',
        question:
            'In Next.js, which of the following is true about data fetching in Server Components?',
        options: [
            'It always requires additional libraries',
            'It can be done using the built-in fetch() function',
            "It's not possible to fetch data in Server Components",
            'It requires useEffect() hook',
        ],
        correctAnswer: 'It can be done using the built-in fetch() function',
        section: 'Data Fetching',
    },
    {
        id: 3,
        difficulty: 'medium',
        question:
            'What is the purpose of the cache option in fetch() requests?',
        options: [
            'To disable caching',
            'To set the cache duration',
            'To control the cache behavior of the request',
            'To clear the cache before fetching',
        ],
        correctAnswer: 'To control the cache behavior of the request',
        section: 'Data Fetching',
    },
    {
        id: 4,
        difficulty: 'medium',
        question: 'How can you revalidate cached data in Next.js?',
        options: [
            'By using the revalidate option in fetch()',
            'By calling the revalidate() function',
            "By setting a cookie named 'revalidate'",
            'By using the useRevalidate() hook',
        ],
        correctAnswer: 'By using the revalidate option in fetch()',
        section: 'Data Fetching',
    },
    {
        id: 5,
        difficulty: 'hard',
        question:
            'What is the purpose of the next.revalidate option in fetch()?',
        options: [
            'To set the revalidation interval in seconds',
            'To force immediate revalidation',
            'To disable revalidation',
            'To schedule revalidation for a specific time',
        ],
        correctAnswer: 'To set the revalidation interval in seconds',
        section: 'Data Fetching',
    },
    {
        id: 6,
        difficulty: 'easy',
        question:
            'Which of the following is true about data fetching in Client Components?',
        options: [
            "It's not possible to fetch data in Client Components",
            'It requires the use of getServerSideProps()',
            'It can be done using hooks like useEffect()',
            "It's automatically cached by Next.js",
        ],
        correctAnswer: 'It can be done using hooks like useEffect()',
        section: 'Data Fetching',
    },
    {
        id: 7,
        difficulty: 'medium',
        question: 'What is the purpose of the SWR library in Next.js?',
        options: [
            'To handle server-side rendering',
            'To manage client-side data fetching and caching',
            'To optimize image loading',
            'To create API routes',
        ],
        correctAnswer: 'To manage client-side data fetching and caching',
        section: 'Data Fetching',
    },
    {
        id: 8,
        difficulty: 'hard',
        question: 'How can you implement on-demand revalidation in Next.js?',
        options: [
            'By using the revalidate segment in the route handlers',
            'By calling the revalidateTag() function',
            "By setting cache: 'no-store' in fetch()",
            'By using the useRevalidate() hook',
        ],
        correctAnswer: 'By calling the revalidateTag() function',
        section: 'Data Fetching',
    },
    {
        id: 9,
        difficulty: 'medium',
        question:
            "What is the purpose of the 'use server' directive in Next.js?",
        options: [
            'To mark a component as a Server Component',
            'To indicate that a function should run on the server',
            'To enable server-side rendering',
            'To create a server-side API route',
        ],
        correctAnswer: 'To indicate that a function should run on the server',
        section: 'Data Fetching',
    },
    {
        id: 10,
        difficulty: 'easy',
        question:
            'Which of the following is true about static data fetching in Next.js?',
        options: [
            "It's only possible during build time",
            'It requires a database connection',
            "It's always fetched on every request",
            "It's not supported in Next.js",
        ],
        correctAnswer: "It's only possible during build time",
        section: 'Data Fetching',
    },
    {
        id: 11,
        difficulty: 'hard',
        question:
            'What is the purpose of the generateStaticParams function in Next.js?',
        options: [
            'To generate dynamic API routes',
            'To create static pages for dynamic routes at build time',
            'To handle server-side rendering parameters',
            'To validate user input parameters',
        ],
        correctAnswer:
            'To create static pages for dynamic routes at build time',
        section: 'Data Fetching',
    },
    {
        id: 12,
        difficulty: 'medium',
        question:
            'How can you prevent a fetch request from being cached in Next.js?',
        options: [
            "By setting cache: 'no-store' in the fetch options",
            'By using the noCache() function',
            'By setting revalidate: 0',
            'By using the useNoCache() hook',
        ],
        correctAnswer: "By setting cache: 'no-store' in the fetch options",
        section: 'Data Fetching',
    },
    {
        id: 13,
        difficulty: 'hard',
        question:
            'What is the purpose of the cookies() function in Next.js data fetching?',
        options: [
            'To set cookies on the client-side',
            'To read cookies in Server Components',
            'To encrypt cookie data',
            'To clear all cookies',
        ],
        correctAnswer: 'To read cookies in Server Components',
        section: 'Data Fetching',
    },
    {
        id: 14,
        difficulty: 'medium',
        question:
            'Which of the following is true about the headers() function in Next.js?',
        options: [
            'It can only be used in API routes',
            'It allows reading headers in Server Components',
            "It's used to set response headers",
            "It's a client-side function for managing headers",
        ],
        correctAnswer: 'It allows reading headers in Server Components',
        section: 'Data Fetching',
    },
    {
        id: 15,
        difficulty: 'easy',
        question: 'What is the default caching behavior of fetch() in Next.js?',
        options: [
            'No caching',
            'Cache-first',
            'Network-first',
            'Stale-while-revalidate',
        ],
        correctAnswer: 'Cache-first',
        section: 'Data Fetching',
    },
    {
        id: 16,
        difficulty: 'hard',
        question: 'How can you implement parallel data fetching in Next.js?',
        options: [
            'By using the parallel() function',
            'By using Promise.all() with multiple fetch calls',
            "It's not possible to fetch data in parallel in Next.js",
            'By using the useParallelFetch() hook',
        ],
        correctAnswer: 'By using Promise.all() with multiple fetch calls',
        section: 'Data Fetching',
    },
    {
        id: 17,
        difficulty: 'medium',
        question:
            "What is the purpose of the next/navigation module's useRouter() hook?",
        options: [
            'To handle server-side routing',
            'To manage client-side navigation and data fetching',
            'To create dynamic routes',
            'To optimize route loading',
        ],
        correctAnswer: 'To manage client-side navigation and data fetching',
        section: 'Data Fetching',
    },
    {
        id: 18,
        difficulty: 'easy',
        question:
            'Which of the following is true about data fetching in Next.js API routes?',
        options: [
            "It's not possible to fetch data in API routes",
            'It requires special permissions',
            'It can be done using standard Node.js methods',
            "It's only possible using external libraries",
        ],
        correctAnswer: 'It can be done using standard Node.js methods',
        section: 'Data Fetching',
    },
    {
        id: 19,
        difficulty: 'hard',
        question:
            'What is the purpose of the unstable_noStore option in Next.js data fetching?',
        options: [
            'To disable all caching for a specific fetch request',
            'To enable experimental features',
            'To mark a component as unstable',
            'To prevent server-side rendering',
        ],
        correctAnswer: 'To disable all caching for a specific fetch request',
        section: 'Data Fetching',
    },
    {
        id: 20,
        difficulty: 'medium',
        question:
            'How can you handle loading states for data fetching in Next.js?',
        options: [
            'By using the loading.js file',
            'By using the useLoading() hook',
            'By setting a loading prop on components',
            'Loading states are automatically handled by Next.js',
        ],
        correctAnswer: 'By using the loading.js file',
        section: 'Data Fetching',
    },
]
