<?php

function isSubset(array $A, array $B): string
{
    if (count($A) > count($B)) {
        if (!array_diff($B, $A)) return "B is a subset of A";
    } else if (count($B) > count($A)) {
        if (!array_diff($A, $B)) return "A is a subset of B";
    } else {
        if ($A === $B) return "A and B are equal";
        else return "A and B are not equal nor subsets of each other";
    };
}

echo isSubset([1, 3, 2, 4, 9, 5, 7], [3, 2, 5]) . PHP_EOL;
