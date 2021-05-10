
module.exports = {
    roots: ['<rootDir>/packages/quarks'],
    collectCoverageFrom: [
      '<rootDir>/src/**/*.{ts,tsx}',
      '!**/*.d.ts'
    ],
    coverageDirectory: 'coverage',
    // setupFilesAfterEnv: ['<rootDir>/src/main/config/jest-setup.ts'],
    testPathIgnorePatterns: [
      '<rootDir>/node_modules/',
    ],
    testEnvironment: 'jsdom',
    transform: {
      '.+\\.(ts|tsx)$': 'ts-jest'
    },
    moduleNameMapper: {
      '@/(.*)': '<rootDir>/src/$1'
    }
  }
  