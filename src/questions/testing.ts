import { Questions } from './types'

export const testingQuestions: Questions = [
    {
        id: 1,
        difficulty: 'easy',
        question:
            'What is the recommended testing framework for Next.js applications?',
        options: ['Jest', 'Mocha', 'Jasmine', 'AVA'],
        correctAnswer: 'Jest',
        section: 'Testing',
    },
    {
        id: 2,
        difficulty: 'medium',
        question:
            'Which library is commonly used for rendering and testing React components in Next.js?',
        options: ['Enzyme', 'React Testing Library', 'Cheerio', 'Cypress'],
        correctAnswer: 'React Testing Library',
        section: 'Testing',
    },
    {
        id: 3,
        difficulty: 'hard',
        question: "What is the purpose of the 'next/jest' package?",
        options: [
            'To provide Jest plugins for Next.js',
            'To create a Jest configuration preset for Next.js',
            'To add Next.js-specific matchers to Jest',
            'To run Jest tests in a Next.js environment',
        ],
        correctAnswer: 'To create a Jest configuration preset for Next.js',
        section: 'Testing',
    },
    {
        id: 4,
        difficulty: 'easy',
        question:
            'Which command is typically used to run tests in a Next.js project?',
        options: ['npm test', 'next test', 'jest', 'yarn test'],
        correctAnswer: 'npm test',
        section: 'Testing',
    },
    {
        id: 5,
        difficulty: 'medium',
        question: 'How can you mock the useRouter hook in Next.js tests?',
        options: [
            "By using jest.mock('next/router')",
            'By creating a custom useRouter hook',
            'By importing a mock router from Next.js',
            'useRouter cannot be mocked in tests',
        ],
        correctAnswer: "By using jest.mock('next/router')",
        section: 'Testing',
    },
    {
        id: 6,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'setupFilesAfterEnv' configuration in Jest for Next.js projects?",
        options: [
            'To set up the test environment',
            'To run cleanup after each test',
            'To configure global test utilities and matchers',
            'To define test file patterns',
        ],
        correctAnswer: 'To configure global test utilities and matchers',
        section: 'Testing',
    },
    {
        id: 7,
        difficulty: 'easy',
        question:
            'Which file extension is commonly used for test files in Next.js projects?',
        options: [
            '.test.js',
            '.spec.js',
            'Both .test.js and .spec.js',
            '.nexttest.js',
        ],
        correctAnswer: 'Both .test.js and .spec.js',
        section: 'Testing',
    },
    {
        id: 8,
        difficulty: 'medium',
        question: 'How can you test API routes in Next.js?',
        options: [
            'By using supertest',
            'By mocking the http module',
            'By creating a test server with next',
            'API routes cannot be tested directly',
        ],
        correctAnswer: 'By creating a test server with next',
        section: 'Testing',
    },
    {
        id: 9,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'testEnvironment' configuration in Jest for Next.js?",
        options: [
            'To specify the Node.js version for tests',
            'To set up a browser-like environment for tests',
            'To define the test folder structure',
            'To configure test parallelization',
        ],
        correctAnswer: 'To set up a browser-like environment for tests',
        section: 'Testing',
    },
    {
        id: 10,
        difficulty: 'easy',
        question:
            'Which library is commonly used for snapshot testing in Next.js applications?',
        options: [
            'react-test-renderer',
            'enzyme-to-json',
            'jest-snapshot',
            'next-snapshot',
        ],
        correctAnswer: 'react-test-renderer',
        section: 'Testing',
    },
    {
        id: 11,
        difficulty: 'medium',
        question:
            'How can you test pages that use getServerSideProps in Next.js?',
        options: [
            'By mocking getServerSideProps',
            'By using server-side rendering in tests',
            'By passing props directly to the page component',
            'getServerSideProps cannot be tested',
        ],
        correctAnswer: 'By passing props directly to the page component',
        section: 'Testing',
    },
    {
        id: 12,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'moduleNameMapper' configuration in Jest for Next.js projects?",
        options: [
            'To rename test files',
            'To map module names to mock implementations',
            'To alias import paths',
            'To define custom test runners',
        ],
        correctAnswer: 'To alias import paths',
        section: 'Testing',
    },
    {
        id: 13,
        difficulty: 'easy',
        question:
            'Which command is used to run Jest in watch mode for Next.js projects?',
        options: [
            'npm test -- --watch',
            'jest --watch',
            'next test --watch',
            'yarn test:watch',
        ],
        correctAnswer: 'npm test -- --watch',
        section: 'Testing',
    },
    {
        id: 14,
        difficulty: 'medium',
        question:
            'How can you test components that use the next/image component?',
        options: [
            'By mocking the next/image module',
            'By using a custom Image component in tests',
            'By disabling image optimization in tests',
            'next/image components cannot be tested',
        ],
        correctAnswer: 'By mocking the next/image module',
        section: 'Testing',
    },
    {
        id: 15,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'transformIgnorePatterns' configuration in Jest for Next.js?",
        options: [
            'To exclude files from transformation',
            'To specify files that should be transformed',
            'To ignore certain test patterns',
            'To define custom transformers',
        ],
        correctAnswer: 'To exclude files from transformation',
        section: 'Testing',
    },
    {
        id: 16,
        difficulty: 'easy',
        question:
            'Which library is commonly used for end-to-end testing in Next.js applications?',
        options: ['Selenium', 'Puppeteer', 'Cypress', 'Nightwatch'],
        correctAnswer: 'Cypress',
        section: 'Testing',
    },
    {
        id: 17,
        difficulty: 'medium',
        question:
            'How can you test custom App components (_app.js) in Next.js?',
        options: [
            'By rendering the App component directly',
            'By mocking the App component',
            'By using a custom test renderer',
            'Custom App components cannot be tested',
        ],
        correctAnswer: 'By rendering the App component directly',
        section: 'Testing',
    },
    {
        id: 18,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'collectCoverageFrom' configuration in Jest for Next.js projects?",
        options: [
            'To specify which files to include in coverage reports',
            'To set the minimum coverage threshold',
            'To collect coverage from external modules',
            'To define custom coverage reporters',
        ],
        correctAnswer: 'To specify which files to include in coverage reports',
        section: 'Testing',
    },
    {
        id: 19,
        difficulty: 'easy',
        question:
            'Which tool is commonly used for mocking HTTP requests in Next.js tests?',
        options: [
            'Axios Mock Adapter',
            'Nock',
            'Mock Service Worker (MSW)',
            'Sinon',
        ],
        correctAnswer: 'Mock Service Worker (MSW)',
        section: 'Testing',
    },
    {
        id: 20,
        difficulty: 'medium',
        question: 'How can you test internationalized routes in Next.js?',
        options: [
            'By mocking the useRouter hook',
            'By setting the locale in test configuration',
            'By using a custom i18n provider in tests',
            'Internationalized routes cannot be tested directly',
        ],
        correctAnswer: 'By mocking the useRouter hook',
        section: 'Testing',
    },
]
