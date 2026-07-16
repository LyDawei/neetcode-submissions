class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        f_map = defaultdict(int)
        result = []

        for num in nums:
            f_map[num] += 1
        
        ranked = sorted(f_map.items(), key = lambda kv:kv[1], reverse=True)
        
        for j, v in ranked[:k]:
            result.append(j)

        return result
