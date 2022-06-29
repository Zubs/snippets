<?php

class Solution {

    /**
     * @param String[] $strs
     * @return String[][]
     */
    function groupAnagrams(array $strs): array {
        $solution = [];
        $data = [];

        foreach ($strs as $value) {
            $splitVal = str_split($value);
            sort($splitVal);
            $data[$value] = implode('', $splitVal);

            if (!$solution) $solution[] = [$value];
            else {
                $done = false;

                foreach ($solution as $index => $sol) {
                    if ($data[$sol[0]] == $data[$value]) {
                        $solution[$index][] = $value;
                        $done = true;
                    }
                }

                if ($done == false) $solution[] = [$value];
            }
        }

        return $solution;
    }
}

echo json_encode((new Solution())->groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])) . PHP_EOL; // [["bat"],["nat","tan"],["ate","eat","tea"]]
echo json_encode((new Solution())->groupAnagrams([""])) . PHP_EOL; // [[""]]
echo json_encode((new Solution())->groupAnagrams(["a"])) . PHP_EOL; // [["a"]]
echo json_encode((new Solution())->groupAnagrams(["ddddddddddg","dgggggggggg"])) . PHP_EOL;