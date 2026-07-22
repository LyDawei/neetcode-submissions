class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const f_map = new Map();

        for(var i = 0; i<nums.length; i++){
            let n = nums[i];
            
            f_map.set(n, (f_map.get(n) ?? 0) + 1);            
        }

        const buckets = Array.from({length: nums.length + 1}, () => []);
        for(const[num, freq] of f_map){
            buckets[freq].push(num);
        }

        const result = [];

        for(let freq = buckets.length - 1; freq >= 0 && result.length < k; freq--){
            for(const num of buckets[freq]){
                result.push(num);
                if(result.length === k){
                    break;
                }
            }
        }

        
        
        return result;

    }
}
