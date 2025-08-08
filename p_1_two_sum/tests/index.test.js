// badprog.com

//
const twoSum = require("../src/index");

// ============================================================================
//
describe("Badprog - Leetcode 2 - Two sum", () => {
  test("Exemple 1: [2, 7, 11, 15], target = 9 → [0, 1]", () => {
    const result = twoSum([2, 7, 11, 15], 9);
    expect(result.sort()).toEqual([0, 1]);
  });

  test("Exemple 2: [3, 2, 4], target = 6 → [1, 2]", () => {
    const result = twoSum([3, 2, 4], 6);
    expect(result.sort()).toEqual([1, 2]);
  });

  test("Exemple 3: [3, 3], target = 6 → [0, 1]", () => {
    const result = twoSum([3, 3], 6);
    expect(result.sort()).toEqual([0, 1]);
  });

  test("With negative numbers: [-1, -2, 3], target = 1 → [1, 2]", () => {
    const result = twoSum([-1, -2, 3], 1);
    expect(result.sort()).toEqual([1, 2]);
  });

  test("With zeros: [0, 0], target = 0 → [0, 1]", () => {
    const result = twoSum([0, 0], 0);
    expect(result.sort()).toEqual([0, 1]);
  });

  test("With big numbers: [1000000000, -1000000000], target = 0 → [0, 1]", () => {
    const result = twoSum([1000000000, -1000000000], 0);
    expect(result.sort()).toEqual([0, 1]);
  });

  test("Bigger array: [1, 2, 3, 4, 5], target = 9 → [3, 4]", () => {
    const result = twoSum([1, 2, 3, 4, 5], 9);
    expect(result.sort()).toEqual([3, 4]);
  });
});
