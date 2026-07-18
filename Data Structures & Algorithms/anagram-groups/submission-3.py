class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:

        anagram_group = defaultdict(list)

        for word in strs:
            key= ''.join(sorted(word))
            anagram_group[key].append(word)

        result = []

        for i in anagram_group.values():
            result.append(i)

        return result