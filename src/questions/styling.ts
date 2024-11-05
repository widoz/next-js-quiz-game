export const stylingQuestions = [
    {
        id: 1,
        difficulty: 'easy',
        question:
            'Which of the following is a built-in CSS support feature in Next.js?',
        options: ['CSS Modules', 'Styled Components', 'Emotion', 'LESS'],
        correctAnswer: 'CSS Modules',
        section: 'Styling',
    },
    {
        id: 2,
        difficulty: 'easy',
        question: 'What is the file extension for CSS Modules in Next.js?',
        options: ['.css', '.module.css', '.nextcss', '.styles.css'],
        correctAnswer: '.module.css',
        section: 'Styling',
    },
    {
        id: 3,
        difficulty: 'medium',
        question: 'How do you import a CSS Module in a Next.js component?',
        options: [
            "import styles from './styles.css'",
            "import './styles.css'",
            "import styles from './styles.module.css'",
            "require('./styles.css')",
        ],
        correctAnswer: "import styles from './styles.module.css'",
        section: 'Styling',
    },
    {
        id: 4,
        difficulty: 'medium',
        question:
            "What is the purpose of the 'className' prop in Next.js components when using CSS Modules?",
        options: [
            'To apply global styles',
            'To apply styles from a CSS Module',
            'To create inline styles',
            'To override default Next.js styles',
        ],
        correctAnswer: 'To apply styles from a CSS Module',
        section: 'Styling',
    },
    {
        id: 5,
        difficulty: 'hard',
        question: 'How can you use Sass with Next.js?',
        options: [
            "It's not possible to use Sass with Next.js",
            'By installing the @next/sass package',
            'By configuring webpack in next.config.js',
            'Sass is supported out of the box in Next.js',
        ],
        correctAnswer: 'Sass is supported out of the box in Next.js',
        section: 'Styling',
    },
    {
        id: 6,
        difficulty: 'easy',
        question: 'Which file is used for adding global styles in Next.js?',
        options: [
            'styles/global.css',
            'pages/_app.js',
            'styles/main.css',
            'app/layout.js',
        ],
        correctAnswer: 'app/layout.js',
        section: 'Styling',
    },
    {
        id: 7,
        difficulty: 'medium',
        question:
            'How can you add third-party CSS libraries to a Next.js project?',
        options: [
            'By importing them in _app.js',
            'By adding them to the public folder',
            'By installing and importing them in individual components',
            'Third-party CSS libraries are not supported in Next.js',
        ],
        correctAnswer:
            'By installing and importing them in individual components',
        section: 'Styling',
    },
    {
        id: 8,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'css' prop in Next.js when using styled-jsx?",
        options: [
            'To add inline styles',
            'To import external CSS files',
            'To define component-scoped CSS',
            'To apply global styles',
        ],
        correctAnswer: 'To define component-scoped CSS',
        section: 'Styling',
    },
    {
        id: 9,
        difficulty: 'medium',
        question:
            'How does Next.js handle CSS-in-JS libraries like styled-components?',
        options: [
            "It doesn't support CSS-in-JS libraries",
            'It requires additional configuration in next.config.js',
            'It supports them out of the box with some limitations',
            'It only supports styled-components natively',
        ],
        correctAnswer: 'It supports them out of the box with some limitations',
        section: 'Styling',
    },
    {
        id: 10,
        difficulty: 'easy',
        question:
            "What is the purpose of the 'styles' directory in a Next.js project?",
        options: [
            'To store component-specific styles',
            'To define global styles',
            'To store CSS Modules',
            "It's a convention, but not required for any specific purpose",
        ],
        correctAnswer:
            "It's a convention, but not required for any specific purpose",
        section: 'Styling',
    },
    {
        id: 11,
        difficulty: 'hard',
        question: 'How can you optimize CSS delivery in Next.js?',
        options: [
            'By using the built-in CSS optimization features',
            'By manually minifying all CSS files',
            'By using the @next/css package',
            'CSS optimization is not possible in Next.js',
        ],
        correctAnswer: 'By using the built-in CSS optimization features',
        section: 'Styling',
    },
    {
        id: 12,
        difficulty: 'medium',
        question:
            "What is the purpose of the ':global()' selector in CSS Modules?",
        options: [
            'To apply styles globally across the application',
            'To target global elements within a module',
            'To import global styles into a module',
            'To override Next.js default styles',
        ],
        correctAnswer: 'To target global elements within a module',
        section: 'Styling',
    },
    {
        id: 13,
        difficulty: 'easy',
        question:
            'Which of the following is true about using Tailwind CSS with Next.js?',
        options: [
            'Tailwind CSS is not compatible with Next.js',
            'Next.js has built-in support for Tailwind CSS',
            'Tailwind CSS requires complex configuration in Next.js',
            'Tailwind CSS can be easily integrated with Next.js through PostCSS',
        ],
        correctAnswer:
            'Tailwind CSS can be easily integrated with Next.js through PostCSS',
        section: 'Styling',
    },
    {
        id: 14,
        difficulty: 'hard',
        question:
            'How does Next.js handle CSS extraction and loading for optimal performance?',
        options: [
            "It doesn't handle CSS extraction",
            'It extracts CSS into separate files and loads them asynchronously',
            'It always inlines CSS in the HTML for faster loading',
            'It requires manual configuration for CSS extraction',
        ],
        correctAnswer:
            'It extracts CSS into separate files and loads them asynchronously',
        section: 'Styling',
    },
    {
        id: 15,
        difficulty: 'medium',
        question: "What is the purpose of the 'next/font' module in Next.js?",
        options: [
            'To add custom fonts to the project',
            'To optimize font loading and reduce layout shift',
            'To create font-related animations',
            'To generate font files from text input',
        ],
        correctAnswer: 'To optimize font loading and reduce layout shift',
        section: 'Styling',
    },
    {
        id: 16,
        difficulty: 'easy',
        question: 'How can you add responsive styles in Next.js?',
        options: [
            'By using the @responsive directive',
            'By using media queries in CSS',
            'By using the Responsive component from Next.js',
            'Responsive styles are not supported in Next.js',
        ],
        correctAnswer: 'By using media queries in CSS',
        section: 'Styling',
    },
    {
        id: 17,
        difficulty: 'hard',
        question:
            "What is the purpose of the 'next/image' component in relation to styling?",
        options: [
            'To add image filters and effects',
            'To create responsive images',
            'To optimize images and prevent layout shift',
            'To apply CSS animations to images',
        ],
        correctAnswer: 'To optimize images and prevent layout shift',
        section: 'Styling',
    },
    {
        id: 18,
        difficulty: 'medium',
        question: 'How can you implement dark mode in a Next.js application?',
        options: [
            'By using the built-in DarkMode component',
            'By toggling a class on the <html> element and using CSS variables',
            'Dark mode is automatically handled by Next.js',
            'By using the useDarkMode hook from Next.js',
        ],
        correctAnswer:
            'By toggling a class on the <html> element and using CSS variables',
        section: 'Styling',
    },
    {
        id: 19,
        difficulty: 'easy',
        question:
            'Which of the following is a valid way to apply conditional styles in Next.js?',
        options: [
            'Using the if-else statement in JSX',
            'Using the style attribute with a ternary operator',
            'Using the className prop with a template literal',
            'All of the above',
        ],
        correctAnswer: 'All of the above',
        section: 'Styling',
    },
    {
        id: 20,
        difficulty: 'hard',
        question: 'How does Next.js handle CSS purging for production builds?',
        options: [
            "It doesn't support CSS purging",
            'It automatically purges unused CSS when using CSS Modules',
            'It requires manual configuration of PurgeCSS',
            'CSS purging is only available with Tailwind CSS integration',
        ],
        correctAnswer:
            'It automatically purges unused CSS when using CSS Modules',
        section: 'Styling',
    },
]
