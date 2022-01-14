<?php

$price = 1000;
$age = 22;

$discount = match (true) {
    $age <= 18 => $price * 0.5,
    $age > 18 && $age <= 60 => $price * 0.1,
    $age > 60 => $price * 0.7,
};

echo $discount;