// badprog.com

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //
  const map = new Map();

  //
  for (let i = 0; i < nums.length; i++) {
    let to_find = target - nums[i];

    let result = map.get(to_find);
    if (result != undefined) {
      return [i, result];
    }

    map.set(nums[i], i);
  }

  //
  return [];
};

//
module.exports = twoSum;

// ============================================================================
//
function main() {
  //
  console.log("Hello from Badprog and JS console.log :D");
}

//
main();
