class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const dict = {};

        for(let i = 0; i<nums.length; i++){
            const value = nums[i];
            const complement = target - value;

            if(dict[complement] !== undefined){
                return [dict[complement], i];
            } 

            dict[value] = i;
        }
    }
}
