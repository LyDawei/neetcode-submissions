class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const dict = new Map();

        for(let i = 0; i<strs.length; i++){
            let word = strs[i];

            let key = word.split('').sort().join('');
            
            if(dict.has(key)){
                let value = dict.get(key);
                value.push(word);
                dict.set(key, value);
            } else {
                dict.set(key, [word]);
            }
        
        }

        return Array.from(dict.values());
    }
}
