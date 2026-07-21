class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        var dict = {}

        for(var i = 0; i < nums.length; i++){
            var complement = target - nums[i];

            if (complement in dict){
                return [dict[complement], i]; 
            }

            dict[nums[i]] = i
        }

    }
}
