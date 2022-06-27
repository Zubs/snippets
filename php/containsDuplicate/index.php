<?php

class Solution {
    /**
    * @param Integer[] $nums
    * @return Boolean
    */
    public static function containsDuplicate(array $nums): bool
    {
        return count(array_unique($nums)) !== count($nums);
    }
}

echo Solution::containsDuplicate([1, 2, 3, 1]) ? 'Yes' : 'No'; // true
echo Solution::containsDuplicate([1,2,3,4]) ? 'Yes' : 'No'; // false
echo Solution::containsDuplicate([1,1,1,3,3,4,3,2,4,2]) ? 'Yes' : 'No'; // true
