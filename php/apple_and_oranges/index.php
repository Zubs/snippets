<?php

/**
 * Print the number of apples and oranges that land on Sam's house, each on a separate line.
 * @param int $s Starting point of Sam's house location.
 * @param int $t Ending location of Sam's house location.
 * @param int $a Location of the Apple tree.
 * @param int $b Location of the Orange tree.
 * @param array $apples Distances at which each apple falls from the tree.
 * @param array $oranges Distances at which each orange falls from the tree.
 */
function apple_and_oranges (int $s, int $t, int $a, int $b, array $apples, array $oranges) {

    $numApples = 0;
    $numOranges = 0;

    foreach ($apples as $apple) if (($apple + $a) >= $s && ($apple + $a) <= $t) $numApples++;

    foreach ($oranges as $orange) if (($orange + $b) >= $s && ($orange + $a) <= $t) $numOranges++;

    echo $numApples . "\n";
    echo $numOranges . "\n";
}
