class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        seen = defaultdict(int)
        result = []
        for num in nums:
            seen[num] += 1

        ranked = sorted(seen.items(), key = lambda kv:kv[1], reverse=True)

        return [j for j, v in ranked[:k]]