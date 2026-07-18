class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        #[1,2,4,6]
        #[48, 24, 12, 8]

        n = len(nums)

        result = [0]*n
        product = 1

        for i in range(n):
            j = 0

            while j < n:
                if i == j:
                    j+=1
                
                if j == n:
                    break
                
                product *= nums[j]
                j+=1
                
            result[i] = product
            product = 1

        return result