class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        f_map_s = defaultdict(int)
        f_map_t = defaultdict(int)

        for char in s:
            f_map_s[char] += 1
        
        for char in t:
            f_map_t[char] += 1
        
        return f_map_s == f_map_t