module.exports = {
  "preset": "react-native",
  "collectCoverageFrom": [
    "app/**/*"
  ],
  "coveragePathIgnorePatterns": [
    "/node_modules/",
    "/__snapshots__/",
    "/__helpers__/",
    "/__mocks__/",
    "/__tests__/"
  ],
  "setupFiles": [
    "./app/__helpers__/shim.js",
    "./app/__helpers__/setup.js"
  ],
  "testPathIgnorePatterns": [
    "./node_modules/",
    "./app/__helpers__/"
  ]
};
