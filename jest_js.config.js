// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  testEnvironment: "node",
  testRegex: ".test\\.(js|ts)$",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
};
