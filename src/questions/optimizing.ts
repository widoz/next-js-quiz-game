import { Questions } from './types'

export const optimizingQuestions: Questions = [
    {
        id: 1,
        difficulty: 'easy',
        question: 'What is the primary purpose of the Next.js Image component?',
        options: [
            'To add decorative images to a page',
            'To optimize images for performance',
            'To create image galleries',
            'To apply filters to images',
        ],
        correctAnswer: 'To optimize images for performance',
        section: 'Optimizing',
    },
    {
        id: 2,
        difficulty: 'medium',
        question:
            'Which of the following is NOT a feature of the Next.js Image component?',
        options: [
            'Automatic image optimization',
            'Lazy loading',
            'Placeholder generation',
            'Built-in image editing tools',
        ],
        correctAnswer: 'Built-in image editing tools',
        section: 'Optimizing',
    },
    {
        id: 3,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'priority' prop in the Next.js Image component?",
        options: [
            'To set the loading order of multiple images',
            'To mark an image as a Largest Contentful Paint (LCP) element',
            'To increase the quality of the image',
            'To prioritize the image in the build process',
        ],
        correctAnswer:
            'To mark an image as a Largest Contentful Paint (LCP) element',
        section: 'Optimizing',
    },
    {
        id: 4,
        difficulty: 'easy',
        question: 'What is the purpose of the next/font module in Next.js?',
        options: [
            'To create custom fonts',
            'To optimize font loading and reduce layout shift',
            'To apply font styles dynamically',
            'To convert fonts to different formats',
        ],
        correctAnswer: 'To optimize font loading and reduce layout shift',
        section: 'Optimizing',
    },
    {
        id: 5,
        difficulty: 'medium',
        question: 'How does Next.js optimize static assets?',
        options: [
            'By compressing them automatically',
            'By serving them from a CDN',
            'By inlining small assets in the HTML',
            'All of the above',
        ],
        correctAnswer: 'All of the above',
        section: 'Optimizing',
    },
    {
        id: 6,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'next/dynamic' function in Next.js?",
        options: [
            'To create dynamic routes',
            'To implement server-side rendering',
            'To enable code splitting and lazy loading of components',
            'To generate dynamic CSS',
        ],
        correctAnswer:
            'To enable code splitting and lazy loading of components',
        section: 'Optimizing',
    },
    {
        id: 7,
        difficulty: 'easy',
        question:
            'Which Next.js feature automatically optimizes JavaScript for all pages?',
        options: [
            'Automatic code splitting',
            'JavaScript minification',
            'Tree shaking',
            'All of the above',
        ],
        correctAnswer: 'All of the above',
        section: 'Optimizing',
    },
    {
        id: 8,
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
        section: 'Optimizing',
    },
    {
        id: 9,
        difficulty: 'hard',
        question:
            'How can you implement lazy loading of components in Next.js?',
        options: [
            'By using the lazy() function from React',
            'By using the next/dynamic function',
            "By adding the 'lazy' prop to components",
            'Lazy loading is automatic in Next.js',
        ],
        correctAnswer: 'By using the next/dynamic function',
        section: 'Optimizing',
    },
    {
        id: 10,
        difficulty: 'easy',
        question:
            "What is the purpose of the 'next/head' component in Next.js?",
        options: [
            'To add elements to the <head> of the page',
            'To create headers for tables',
            'To implement header-based routing',
            'To optimize header images',
        ],
        correctAnswer: 'To add elements to the <head> of the page',
        section: 'Optimizing',
    },
    {
        id: 11,
        difficulty: 'medium',
        question:
            'Which of the following is a Core Web Vital that Next.js helps optimize?',
        options: [
            'First Contentful Paint (FCP)',
            'Time to Interactive (TTI)',
            'Largest Contentful Paint (LCP)',
            'All of the above',
        ],
        correctAnswer: 'All of the above',
        section: 'Optimizing',
    },
    {
        id: 12,
        difficulty: 'hard',
        question: "What is the purpose of the 'next/amp' component in Next.js?",
        options: [
            'To create AMP-compatible pages',
            'To optimize audio playback',
            'To implement amplification effects',
            'To boost server performance',
        ],
        correctAnswer: 'To create AMP-compatible pages',
        section: 'Optimizing',
    },
    {
        id: 13,
        difficulty: 'easy',
        question:
            'Which Next.js feature allows you to prefetch pages for faster navigation?',
        options: [
            'The Link component',
            'The Router object',
            'The prefetch() function',
            'Prefetching is automatic in Next.js',
        ],
        correctAnswer: 'The Link component',
        section: 'Optimizing',
    },
    {
        id: 14,
        difficulty: 'medium',
        question: 'How does Next.js optimize CSS delivery?',
        options: [
            'By inlining critical CSS',
            'By removing unused CSS',
            'By splitting CSS into smaller chunks',
            'All of the above',
        ],
        correctAnswer: 'All of the above',
        section: 'Optimizing',
    },
    {
        id: 15,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'next export' command in Next.js?",
        options: [
            'To export data from the application',
            'To generate a static HTML export of the application',
            'To create an exportable component library',
            'To optimize the export of large files',
        ],
        correctAnswer: 'To generate a static HTML export of the application',
        section: 'Optimizing',
    },
    {
        id: 16,
        difficulty: 'easy',
        question: 'Which Next.js feature automatically handles code splitting?',
        options: [
            'Automatic static optimization',
            'Server-side rendering',
            'Dynamic imports',
            'All of the above',
        ],
        correctAnswer: 'All of the above',
        section: 'Optimizing',
    },
    {
        id: 17,
        difficulty: 'medium',
        question:
            "What is the purpose of the 'next.config.js' file in relation to optimization?",
        options: [
            'To configure build-time optimizations',
            'To set up runtime performance tweaks',
            'To define custom server-side optimizations',
            'All of the above',
        ],
        correctAnswer: 'All of the above',
        section: 'Optimizing',
    },
    {
        id: 18,
        difficulty: 'hard',
        question:
            'How can you implement Incremental Static Regeneration (ISR) in Next.js?',
        options: [
            'By using the getStaticProps function with a revalidate property',
            'By setting up a cron job to rebuild pages',
            'By using the useIncremental hook',
            'ISR is automatically implemented in Next.js',
        ],
        correctAnswer:
            'By using the getStaticProps function with a revalidate property',
        section: 'Optimizing',
    },
    {
        id: 19,
        difficulty: 'easy',
        question:
            "What is the purpose of the 'next/link' component in Next.js?",
        options: [
            'To create external links',
            'To optimize internal navigation',
            'To style link elements',
            'To implement link-based routing',
        ],
        correctAnswer: 'To optimize internal navigation',
        section: 'Optimizing',
    },
    {
        id: 20,
        difficulty: 'medium',
        question: 'How does Next.js optimize images in the production build?',
        options: [
            'By compressing all images',
            'By generating multiple sizes of each image',
            'By converting images to WebP format when supported',
            'All of the above',
        ],
        correctAnswer: 'All of the above',
        section: 'Optimizing',
    },
    {
        id: 21,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'next/future/image' component in Next.js?",
        options: [
            'To use experimental image optimization features',
            'To optimize images for future browser versions',
            'To implement AI-powered image enhancements',
            'To generate futuristic image effects',
        ],
        correctAnswer: 'To use experimental image optimization features',
        section: 'Optimizing',
    },
    {
        id: 22,
        difficulty: 'easy',
        question:
            'Which of the following is NOT a benefit of using Server-Side Rendering (SSR) in Next.js?',
        options: [
            'Improved SEO',
            'Faster Time to First Byte (TTFB)',
            'Reduced server load',
            'Better performance on low-end devices',
        ],
        correctAnswer: 'Reduced server load',
        section: 'Optimizing',
    },
    {
        id: 23,
        difficulty: 'medium',
        question: 'How can you optimize Third-Party Scripts in Next.js?',
        options: [
            'By using the Script component from next/script',
            'By placing all scripts in the _document.js file',
            'By using the async attribute on all script tags',
            'Third-party scripts are automatically optimized in Next.js',
        ],
        correctAnswer: 'By using the Script component from next/script',
        section: 'Optimizing',
    },
    {
        id: 24,
        difficulty: 'hard',
        question: "What is the purpose of the 'next/babel' preset in Next.js?",
        options: [
            'To enable all ECMAScript features',
            'To optimize Babel transformations for Next.js',
            'To implement custom Babel plugins',
            'To transpile server-side code',
        ],
        correctAnswer: 'To optimize Babel transformations for Next.js',
        section: 'Optimizing',
    },
    {
        id: 25,
        difficulty: 'easy',
        question:
            'Which Next.js feature allows you to add meta tags to your pages for better SEO?',
        options: [
            'The Meta component',
            'The next/head component',
            'The SEO component',
            'The next/meta component',
        ],
        correctAnswer: 'The next/head component',
        section: 'Optimizing',
    },
    {
        id: 26,
        difficulty: 'medium',
        question: 'How does Next.js handle code splitting for CSS?',
        options: [
            "It doesn't split CSS",
            'It generates a separate CSS file for each page',
            'It inlines all CSS in the HTML',
            'It uses a global CSS file for all pages',
        ],
        correctAnswer: 'It generates a separate CSS file for each page',
        section: 'Optimizing',
    },
    {
        id: 27,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'next/bundle-analyzer' in Next.js?",
        options: [
            'To analyze and optimize bundle sizes',
            'To split bundles automatically',
            'To minimize bundle loading time',
            'To generate bundle reports',
        ],
        correctAnswer: 'To analyze and optimize bundle sizes',
        section: 'Optimizing',
    },
    {
        id: 28,
        difficulty: 'easy',
        question:
            'Which of the following is a benefit of using Static Site Generation (SSG) in Next.js?',
        options: [
            'Real-time data updates',
            'Reduced server load',
            'Dynamic content rendering',
            'Improved server-side processing',
        ],
        correctAnswer: 'Reduced server load',
        section: 'Optimizing',
    },
    {
        id: 29,
        difficulty: 'medium',
        question: 'How can you implement route prefetching in Next.js?',
        options: [
            'By using the prefetch prop on the Link component',
            'By calling the Router.prefetch method',
            'By using the usePrefetch hook',
            'Route prefetching is automatic in Next.js',
        ],
        correctAnswer: 'By using the prefetch prop on the Link component',
        section: 'Optimizing',
    },
    {
        id: 30,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'next/dynamic' import function's 'ssr' option?",
        options: [
            'To enable server-side rendering for the component',
            'To disable server-side rendering for the component',
            'To optimize server-side rendering performance',
            'To implement selective hydration',
        ],
        correctAnswer: 'To disable server-side rendering for the component',
        section: 'Optimizing',
    },
    {
        id: 31,
        difficulty: 'easy',
        question:
            'Which Next.js feature automatically optimizes fonts to improve performance?',
        options: [
            'Font Optimization',
            'next/font',
            'Automatic Font Inlining',
            'Font Subsetting',
        ],
        correctAnswer: 'next/font',
        section: 'Optimizing',
    },
    {
        id: 32,
        difficulty: 'medium',
        question:
            'How does Next.js handle caching for statically generated pages?',
        options: [
            "It doesn't cache static pages",
            'It caches them on the client-side only',
            'It caches them on the server and CDN',
            'Caching is manual for static pages',
        ],
        correctAnswer: 'It caches them on the server and CDN',
        section: 'Optimizing',
    },
    {
        id: 33,
        difficulty: 'hard',
        question: "What is the purpose of the 'next/jest' preset in Next.js?",
        options: [
            'To implement Jest testing in Next.js projects',
            'To optimize Jest for Next.js applications',
            'To create Jest mocks for Next.js components',
            'To enable Jest code coverage for Next.js',
        ],
        correctAnswer: 'To optimize Jest for Next.js applications',
        section: 'Optimizing',
    },
    {
        id: 34,
        difficulty: 'easy',
        question:
            'Which of the following is NOT a valid strategy for optimizing images in Next.js?',
        options: [
            'Using the next/image component',
            'Implementing lazy loading',
            'Converting all images to SVG format',
            'Serving images in WebP format when  supported',
        ],
        correctAnswer: 'Converting all images to SVG format',
        section: 'Optimizing',
    },
    {
        id: 35,
        difficulty: 'medium',
        question: 'How can you implement API route caching in Next.js?',
        options: [
            'By using the cache() function in API routes',
            'By setting Cache-Control headers in API responses',
            'By using the next/cache module',
            'API routes are automatically cached in Next.js',
        ],
        correctAnswer: 'By setting Cache-Control headers in API responses',
        section: 'Optimizing',
    },
]
