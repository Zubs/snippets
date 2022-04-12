<?php

function rotate($array, $val)
{
    $result = [];

    foreach ($array as $index => $num) {
        if ($index + $val < count($array) - 1) {
            $result[$index + $val] = $num;
        } else {
            $new_index = ($index + $val) % count($array);
            $result[$new_index] = $num;
        }
    }

    ksort($result);

    return $result;
}

print_r(rotate([1, 2, 3, 4, 5, 6, 7], 3));

function solution($strin1, $strin2)
{
    $sum = 0;
    $letters = str_split($strin1);
    $letters2 = str_split($strin2);

    $current = 0;

    foreach ($letters2 as $index => $letter) {
        if ($index == 0) {
            $sum += array_search($letter, $letters);
            $current = $sum;
        } else {
            $sum += abs(array_search($letter, $letters) - $current);
            $current = array_search($letter, $letters);
        }
    }

    return $sum;
}

echo solution("0123456789", "210");
echo solution("8459761203", "5439");
