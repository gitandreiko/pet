import type { Config } from 'jest';

const config: Config = {

    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    moduleDirectories: [
        'node_modules',
    ],
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    rootDir: '../../',
};

export default config;
