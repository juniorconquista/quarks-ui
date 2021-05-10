
module.exports = {
    roots: ['<rootDir>/packages/quarks'],
    collectCoverageFrom: [
      '<rootDir>/packages/quarks/**/*.{ts,tsx}',
      '!<rootDir>/packages/quarks/**/index.ts',
      '!<rootDir>/packages/quarks/hooks',
      '!<rootDir>/packages/quarks/theme',
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
      'quarks/*(.*)': '<rootDir>/packages/quarks/$1'
    }
  }
  