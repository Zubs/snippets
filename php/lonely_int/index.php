<?php

/**
 * Returns the element that exists just once.
 * @param array $input Array of numbers to be checked.
 * @return int Number that appears just once.
 */
function lonely_int (array $input): int {

    $answer = 0;

    foreach (array_count_values($input) as $item => $count) if ($count === 1) $answer = $item;

    return $answer;
}

echo lonely_int([0, 0, 1, 2, 1]);
