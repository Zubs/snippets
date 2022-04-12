<?php

class Solution
{
    private $ops = [];
    private $scores = [];

    function calPoints($ops)
    {
        $this->ops = $ops;

        foreach ($ops as $op) {
            if (is_int(json_decode($op))) {
                $this->scores[] = $op;
            } else if ($op == "+") {
                $this->scores[] = $this->scores[count($this->scores) - 1] + $this->scores[count($this->scores) - 2];
            } else if ($op == "D") {
                $this->scores[] = $this->scores[count($this->scores) - 1] * 2;
            } else if ($op == "C") {
                array_splice($this->scores, count($this->scores) - 1, 1);
            }

            echo json_encode($this->scores);
        }

        echo array_sum($this->scores);
    }
}

(new Solution())->calPoints(["5", "2", "C", "D", "+"]);

