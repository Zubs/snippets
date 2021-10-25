<?php

/**
 * Returns number of words in a camelCased string.
 * @param string $s String to be examined.
 * @return int Number of words in the string.
 */
function camel_case (string $s): int {

    $count = 1;

    foreach ($letters = str_split($s) as $letter) if ($letter === ucwords($letter)) $count++;

    return $count;
}

echo camel_case('saveChangesInTheEditor');
