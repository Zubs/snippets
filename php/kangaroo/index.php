<?php

/**
 * Determine if both Kangaroos will meet at a same place
 * @param int $x1 Initial x-coordinate of the first Kangaroo
 * @param int $v1 Velocity of the first Kangaroo
 * @param int $x2 Initial x-coordinate of the second Kangaroo
 * @param int $v2 Velocity of the second Kangaroo
 * @return string 'YES' or 'NO'
 */
function kangaroo (int $x1, int $v1, int $x2, int $v2): string {

    if (($x1 > $x2 && $v1 > $v2) || ($x1 < $x2 && $v1 < $v2)) return 'NO';

    if (($x1 === $x2) && ($v1 > $v2 || $v1 < $v2)) return 'NO';

    if (($v1 === $v2) && ($x1 > $x2 || $x1 < $x2)) return 'NO';

    return 'YES';
}

echo kangaroo(2, 1, 1, 2) . PHP_EOL;
echo kangaroo(0, 3, 4, 2) . PHP_EOL;
echo kangaroo(0, 2, 5, 3) . PHP_EOL;
