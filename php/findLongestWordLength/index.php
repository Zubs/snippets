<?php

function findLongestWordLength (string $str): int
{
    $words = explode(" ", $str);
    $count = 0;

    foreach ($words as $word) if (strlen($word) > $count) $count = strlen($word);

    return $count;
}

echo findLongestWordLength("The quick brown fox jumped over the lazy dog");