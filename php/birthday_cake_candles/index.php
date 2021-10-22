<?php

/**
 * Returns number of occurrences of the highest number in the array.
 * @param array $candles Array of numbers
 * @return int
 */
function birthday_cake_candles (array $candles): int
{
    $count = 0;
    $max = max($candles);

    foreach ($candles as $candle) if ($candle === $max) $count++;

    return $count;
}

echo birthday_cake_candles([3, 2, 1, 3]);
