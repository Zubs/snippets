<?php

function kangaroo (int $x1, int $v1, int $x2, int $v2): string {

    if (($x1 > $x2 && $v1 > $v2) || ($x1 < $x2 && $v1 < $v2)) return 'NO';

    if ($x1 === $x2) if ($v1 > $v2 || $v1 < $v2) return 'NO';

    if ($v1 === $v2) if ($x1 > $x2 || $x1 < $x2) return 'NO';

    return 'YES';
}

echo kangaroo(2, 1, 1, 2);
echo kangaroo(0, 3, 4, 2);
echo kangaroo(0, 2, 5, 3);