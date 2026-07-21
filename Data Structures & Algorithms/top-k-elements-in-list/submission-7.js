class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const f_map = new Map();

        for(var i = 0; i < nums.length; i++){
            f_map.set(nums[i], (f_map.get(nums[i]) ?? 0) + 1);
        }

        const entries = Array.from(f_map.entries());

        entries.sort((a,b) => b[1] - a[1]);

        const result = [];

        for(let i =0; i<k; i++){
            result.push(entries[i][0]);
        }

        return result;


        

    }
}
