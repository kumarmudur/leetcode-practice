// Topic: Array;
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3 => [1,2,2,3,5,6]
// Input: nums1 = [1], m = 1, nums2 = [], n = 0 => [1]
// Input: nums1 = [0], m = 0, nums2 = [1], n = 1 => [1]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// Solution 1
// time: O(m + n) | space: O(1) 
const merge = function(nums1, m, nums2, n) {
    if (m !== 0) nums1.splice(m, nums1.length - m);
    
    if (n !== 0) nums2.splice(n, nums2.length - n);
    
    m === 0 && nums1.length >= 1 ? nums1.length = 0 : null;
    n === 0 && nums2.length >= 1 ? nums2.length = 0 : null;
    
    nums2.forEach((num) => nums1.push(num));
    nums1.sort((a, b) => a - b);
    return nums1;
};

// Solution 2
const merge1 = function(nums1, m, nums2, n) {
    let result = [];
    let merge1 = [];
    let merge2 = [];

    for (let i = 0; i < m; i++) {
        if (nums1[i] !== 0) {
            merge1.push(nums1[i]);
        }
    }

    for (let i = 0; i < n; i++) {
        if (nums2[i] !== 0) {
            merge2.push(nums2[i]);
        }
    }
    result = [...merge1, ...merge2];
    return sortNumber(result);
}

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));