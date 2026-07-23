class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length){
            return false;
        }

        const s_map = new Map();
        const t_map = new Map();

        for(let i = 0; i<s.length; i++){
            s_map.set(s[i], (s_map.get(s[i]) ?? 0) + 1);
            t_map.set(t[i], (t_map.get(t[i]) ?? 0) + 1);
        }

        const result = Array.from(s_map.entries()).every(([k,_v]) => t_map.get(k) == s_map.get(k));

        return result;
    }
}
