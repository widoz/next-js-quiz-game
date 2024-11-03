import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'selector',
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            white: 'rgb(255, 255, 255)',
            gray: {
                DEFAULT: 'rgb(31, 31, 31)',
                dark: 'rgb(18, 18, 18)',
                darker: 'rgb(10, 10, 10)',
            },
            black: {
                DEFAULT: 'rgb(0, 0, 0)',
                'alpha-80': 'rgba(0, 0, 0, .8)',
            },
        },
        borderColor: {
            DEFAULT: 'rgb(31, 31, 31)',
        },
        transitionDuration: {
            DEFAULT: '700ms',
            fast: '95ms',
        },
    },
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    plugins: [require('tailwindcss/plugin')],
}
export default config
