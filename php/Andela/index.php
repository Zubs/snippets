<?php

use JetBrains\PhpStorm\Pure;

function getArea($x1, $y1, $x2, $y2, $x3, $y3): float|int
{
    return abs((($x1 * ($y2 - $y3)) + ($x2 * ($y3 - $y1)) + ($x3 * ($y1 - $y2))) / 2);
}

#[Pure] function pointsBelong($x1, $y1, $x2, $y2, $x3, $y3, $xp, $yp, $xq, $yq) {
    $area = getArea($x1, $y1, $x2, $y2, $x3, $y3);

    $areaABP = getArea($x1, $y1, $x2, $y2, $xp, $yp);
    $areaAPC = getArea($x1, $y1, $xp, $yp, $x3, $y3);
    $areaPBC = getArea($xp, $yp, $x2, $y2, $x3, $y3);

    $areaABQ = getArea($x1, $y1, $x2, $y2, $xq, $yq);
    $areaAQC = getArea($x1, $y1, $xq, $yq, $x3, $y3);
    $areaQBC = getArea($xq, $yq, $x2, $y2, $x3, $y3);

    $areaP = $areaABP + $areaAPC + $areaPBC;
    $areaQ = $areaABQ + $areaAQC + $areaQBC;

    if ($area == 0) return 0;

    if ($areaP !== $area and $areaQ !== $area) return 4;
    else if ($areaP == $area and $areaQ !== $area) return 1;
    else if ($areaP !== $area and $areaQ == $area) return 2;
    else if ($areaP == $area and $areaQ == $area) return 3;
}
