import nextJest from 'next/jest'

const createJestConfig = nextJest({ dir: './' })
module.exports = createJestConfig({
    setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    testEnvironment: 'jsdom',
})
