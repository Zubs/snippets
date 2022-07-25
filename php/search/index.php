<?php

class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer
     */
    function search(array $nums, int $target): int
    {
        if ($nums[0] == $target) return 0;

        $index = array_search($target, $nums);
        return (bool) $index == 0 ? -1 : $index;
    }
}

echo (new Solution())->search([4, 5, 6, 7, 0, 1, 2], 0) . PHP_EOL; // 4
echo (new Solution())->search([4, 5, 6, 7, 0, 1, 2], 0) . PHP_EOL; // 4
echo (new Solution())->search([4, 5, 6, 7, 0, 1, 2], 3) . PHP_EOL; // -1
echo (new Solution())->search([1], 0) . PHP_EOL; // -1
echo (new Solution())->search([1], 1) . PHP_EOL; // 0
