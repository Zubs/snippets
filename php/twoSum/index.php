<?php

class Solution
{
    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    public function twoSum(array $nums, int $target): array
    {
        $solution = [];

        foreach ($nums as $index => $value) {
            foreach ($nums as $index2 => $value2) {
                if ($index == $index2) continue;
                else {
                    if ($value + $value2 == $target) $solution = [$index, $index2];
                }
            }
        }

        return $solution;
    }
}

print_r((new Solution())->twoSum([2, 7, 11, 15], 9)); // 0, 1
print_r((new Solution())->twoSum([3, 2, 4], 6)); // 1, 2
print_r((new Solution())->twoSum([3, 3], 6)); // 0, 1
print_r((new Solution())->twoSum([0,4,3,0], 0)); // 0, 3
print_r((new Solution())->twoSum([-3,4,3,90], 0)); // 0, 2
