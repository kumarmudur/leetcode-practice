package easy.arrays.java;

import java.util.HashSet;

//time: O(n) | space O(n)
class Solution {
    public int missingNumber(int[] nums) {
        HashSet<Integer> set = new HashSet<Integer>();
        for (int i : nums)
            set.add(i);

        for (int i = 0; i <= nums.length; i++) {
            if (!set.contains(i)) {
                return i;
            }
        }
        return -1;
    }
}

// time: O(n) | space O(1)
class Solution1 {
    public int missingNumber(int[] nums) {
        int sum = 0;
        for (int i : nums)
            sum += i;

        int n = nums.length;
        return (n * (n + 1) / 2) - sum;
    }
}