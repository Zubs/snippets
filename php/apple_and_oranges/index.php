<?php

function apple_and_oranges (int $s, int $t, int $a, int $b, array $apples, array $oranges) {

    $numApples = 0;
    $numOranges = 0;

    foreach ($apples as $apple) if (($apple + $a) >= $s && ($apple + $a) <= $t) $numApples++;

    foreach ($oranges as $orange) if (($orange + $b) >= $s && ($orange + $a) <= $t) $numOranges++;

    echo $numApples . "\n";
    echo $numOranges . "\n";
}
