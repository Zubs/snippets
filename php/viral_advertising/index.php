<?php

/**
 * Determine how many people have liked the ad by the end of a given day, beginning with launch day as day 1.
 * @param int $n The day number to report.
 * @return int The cumulative likes at that day.
 */
function viralAdvertising (int $n): int {

    $shared = 5;
    $liked = 0;
    $likes = 0;

    for ($i = 1; $i < $n + 1; $i++) {
        $liked = (int) ($shared / 2);
        $shared = $liked * 3;
        $likes += $liked;
    }

    return $likes;
}

echo viralAdvertising(3);
