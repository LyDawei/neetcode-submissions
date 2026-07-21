class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let f_map = new Map();

        for(let i = 0; i<strs.length; i++){
            let key = strs[i].split('').sort().join('');

            if(f_map.has(key)){
                let value = f_map.get(key);
                value.push(strs[i]);
                f_map.set(key, value);
            } else {
                f_map.set(key, [strs[i]]);
            }

        }

        return Array.from(f_map.values());

    }
}
