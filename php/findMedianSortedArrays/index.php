<?php

class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @return Float
     */
    function findMedianSortedArrays(array $nums1, array $nums2): float
    {
        $array = array_merge($nums1, $nums2);
        sort($array);

        $length = count($array);
        $midpoint = intval($length / 2);

        if ($length % 2 !== 0) return $array[$midpoint];
        else return ($array[$midpoint] + $array[$midpoint - 1]) / 2;
    }
}

echo (new Solution())->findMedianSortedArrays([1, 3], [2]) . PHP_EOL; // 2.0
echo (new Solution())->findMedianSortedArrays([1, 2], [3, 4]) . PHP_EOL; // 2.5
