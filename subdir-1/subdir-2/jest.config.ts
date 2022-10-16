export default {
  clearMocks: true,
  collectCoverageFrom: ['<rootDir>/src/js/**/*.{js,ts,vue}'],
  coverageDirectory: '<rootDir>/coverage',
  errorOnDeprecated: true,
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  },
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  moduleNameMapper: {
    '^Src/(.*)$': '<rootDir>/src/$1',
    '^Scss/(.*)$': '<rootDir>/src/scss/$1'
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  snapshotSerializers: ['jest-serializer-vue'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest'
  }
}
