<?php

class Solution {

    /**
     * @param String $s
     * @param String $t
     * @return Boolean
     */
    function isAnagram(string $s, string $t): bool
    {
        return $this->processInput($s) == $this->processInput($t);
    }

    function processInput(string $string): string
    {
        $string = str_split($string);
        sort($string);

        return implode('', $string);
    }
}

echo json_encode((new Solution())->isAnagram("anagram", "nagaram")) . PHP_EOL; // true
echo json_encode((new Solution())->isAnagram("rat", "car")) . PHP_EOL; // false