class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length != t.length){
            return false;
        }

        var s_map = new Map();
        var t_map = new Map();

        for(let i = 0; i<s.length; i++){

            let s_letter = s[i];
            let t_letter = t[i];
            s_map.set(s_letter, (s_map.get(s_letter) ?? 0) + 1);
            t_map.set(t_letter, (t_map.get(t_letter) ?? 0) + 1);
        }

        return Array.from(s_map.entries()).every(([k,v], i) => t_map.get(k) == s_map.get(k));

    }
}
