class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let left = 0;
        let right = heights.length - 1;

        let maxArea = 0;
        while (left < right){
            let area = (right-left) * Math.min(heights[left], heights[right]);

            console.log({
                area,
                maxArea
            });

            maxArea = Math.max(area, maxArea);

            if (heights[left] < heights[right]){
                left += 1;
            } else {
                right -= 1;
            }
            
        }

        return maxArea;

    }
}
