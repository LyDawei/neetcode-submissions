class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const dict = new Map();

        for(let i = 0; i<nums.length; i++){
            const value = nums[i];
            const complement = target - value;

            if(dict.has(complement)){
            // if(dict[complement] !== undefined){
                return [dict.get(complement), i];
            } 

            // dict[value] = i;

            dict.set(value, i);
        }
    }
}
