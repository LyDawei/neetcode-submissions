class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        s_sorted = ''.join(sorted(s))
        t_sorted = ''.join(sorted(t))

        i = 0
        j = 0
        while i<len(s_sorted):
            
            if s_sorted[i] != t_sorted[j]:
                return False
            
            i+=1
            j+=1

        return True