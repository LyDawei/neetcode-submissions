class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # s = Counter(s)
        # t = Counter(t)
        # return s == t

        counter_s = defaultdict(int)
        counter_t = defaultdict(int)
        
        for i in s:
            counter_s[i] += 1
        
        for i in t:
            counter_t[i] += 1

        return counter_t == counter_s