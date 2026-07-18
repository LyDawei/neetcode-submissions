class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        f_map = defaultdict(int)

        for i in nums:
            f_map[i] += 1

        sorted_results = sorted(f_map.keys(), key = lambda k: f_map[k], reverse=True)
        
        print(f'{sorted_results=}')


        return sorted_results[:k]