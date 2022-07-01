<?php

class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer[]
     */
    function topKFrequent(array $nums, int $k): array
    {
        if (count($nums) == $k) return $nums;
        $final = [];

        foreach ($nums as $num) {
            if (isset($final[$num])) $final[$num] += 1;
            else {
                $final[$num] = 1;
            }
        }

        $counts = $final;
        rsort($counts);

        $response = [];
        foreach ($counts as $count) {
            if (count($response) == $k) continue;
            else {
                $index = array_search($count, $final);
                $response[] = $index;
                unset($final[$index]);
            }
        }

        return $response;
    }
}

echo json_encode((new Solution())->topKFrequent([1,1,1,2,2,3], 2)) . PHP_EOL; // [1, 2]
echo json_encode((new Solution())->topKFrequent([1], 1)) . PHP_EOL; // [1]
echo json_encode((new Solution())->topKFrequent([-1, -1], 1)) . PHP_EOL; // [-1]
echo json_encode((new Solution())->topKFrequent([1, 2], 2)) . PHP_EOL; // [1, 2]

