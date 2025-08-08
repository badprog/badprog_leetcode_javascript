// badprog.com
export default {
  roots: ["<rootDir>"],
  testMatch: ["<rootDir>/p_*/tests/*.test.js"],
  testEnvironment: "node",
  collectCoverageFrom: ["**/src/*.js"],
  verbose: true,
};

// module.exports = {
//   testEnvironment: "node",
//   testMatch: ["**/tests/*.test.js"],
//   collectCoverageFrom: ["**/src/*.js"],
//   verbose: true,
// };
