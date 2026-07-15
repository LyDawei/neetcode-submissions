class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        n = len(temperatures)
        result = [0] * n
        stack = []                           # indices of days still waiting for warmth
        for i, temp in enumerate(temperatures):
            while stack and temperatures[stack[-1]] < temp:
                prev = stack.pop()           # this day just found its warmer day
                result[prev] = i - prev      # distance = today - that day
            stack.append(i)                  # today starts waiting too
        return result