import type { Config } from 'jest'

const config: Config = {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'ts', 'tsx'],
    setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.js'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
}

export default config
