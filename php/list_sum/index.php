<?php

function is_prime (int $value): bool
{
    $half = (int) ($value / 2);

    for ($i = 2; $i < $half; $i++) if ($half % $i === 0) return false;

    return true;
}

/**
 * Expresses a number as a sum of prime numbers
 * @param int $value Number to be simplified
 * @return string|null
 */
function list_sum (int $value): string | null
{
    $half = (int) ($value / 2);

    for ($i = 1; $i < $half; $i++) if (is_prime($i)) if (is_prime($value - $i)) return $value - $i . ' + ' . $i;

    return null;
}
