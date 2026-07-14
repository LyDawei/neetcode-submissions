class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        
        if len(s) != len(t):
            return False

        fMap = {}

        for char in s:
            fMap[char] = fMap.get(char, 0) + 1
        
        for char in t:
            if char in fMap:
                if fMap[char] > 0:
                   fMap[char] -= 1
                else:
                    return False
            else:
                return False
        
        return True