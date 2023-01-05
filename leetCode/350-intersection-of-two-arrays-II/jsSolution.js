// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

// Constraints:
// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let c = new Map()
    let output = []

    for (let i of nums1) {
        if (c.has(i)) {
            c.set(i, c.get(i) + 1)
        } else {
            c.set(i, 1)
        }
    }

    for (n of nums2) {
        if (c.has(n)) {
            output.push(n)
            if (c.get(n) === 1) {
                c.delete(n)
            } else {
                c.set(n, c.get(n) - 1)
            }
        }
    }

    return output
};