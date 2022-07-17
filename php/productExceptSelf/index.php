<?php

class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function productExceptSelf(array $nums): array
    {
        $numsCount = count($nums);
        $productFromLeft = $productFromRight = 1;
        $productFromLeftArray = $productFromRightArray = [];
        $solution = [];

        for ($index = 0; $index < $numsCount; $index++) {
            $productFromLeft *= $nums[$index];
            $productFromLeftArray[] = $productFromLeft;
        }

        for ($index = $numsCount - 1; $index >= 0; $index--) {
            $productFromRight *= $nums[$index];
            $productFromRightArray[$index] = $productFromRight;
        }

        for ($index = 0; $index < $numsCount; $index++) {
            if ($index == 0) $solution[] = $productFromRightArray[$index + 1];
            else if ($index == $numsCount - 1) $solution[] = $productFromLeftArray[$index -1];
            else $solution[] = $productFromLeftArray[$index - 1] * $productFromRightArray[$index + 1];
        }

        return $solution;
    }
}

echo json_encode((new Solution())->productExceptSelf([1, 2, 3, 4])) . PHP_EOL; // [24, 12, 8, 6]
echo json_encode((new Solution())->productExceptSelf([-1, 1, 0, -3, 3])) . PHP_EOL; // [0, 0, 9, 0, 0]
