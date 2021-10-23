<?php

/**
 * Move every letter in the given string by 13 positions in the alphabets.
 * @param string $input String to be transformed
 * @return string
 */
$rot13 = fn (string $input) => str_rot13($input);

echo $rot13("SERR PBQR PNZC");
