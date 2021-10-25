<?php

$saveThePrisoner = fn (int $n, int $m, int $s): int => (($m + $s - 1) % $n) > 0 ? range(1, $n)[(($m + $s - 1) % $n) - 1] : range(1, $n)[0];

echo $saveThePrisoner(7, 19, 2); // 6
echo $saveThePrisoner(4, 6, 2); // 3
echo $saveThePrisoner(5, 2, 1); // 2
echo $saveThePrisoner(5, 2, 2); // 3
echo $saveThePrisoner(3, 7, 3); // 3
