<?php

class ListNode {
    public $val = 0;
    public $next = null;

    function __construct(int $val = 0, ListNode $next = null)
    {
        $this->val = $val;
        $this->next = $next;
    }
}

/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) {
 *         $this->val = $val;
 *         $this->next = $next;
 *     }
 * }
 */
class Solution {

    /**
     * @param ListNode $l1
     * @param ListNode $l2
     * @return ListNode
     */
    function addTwoNumbers(ListNode $l1, ListNode $l2): ListNode
    {
        $l1Value = $this->getNodeValuesAsArray($l1);
        $l2Value = $this->getNodeValuesAsArray($l2);

        $l1Value = array_reverse($l1Value);
        $l2Value = array_reverse($l2Value);

        $l1Value = implode('', $l1Value);
        $l2Value = implode('', $l2Value);

        $sum = $this->terminal_add($l1Value, $l2Value);
        $sum = str_split($sum);
        $sum = array_reverse($sum);

        $finalNode = new ListNode($sum[0]);
        $currentNode = $finalNode;
        foreach ($sum as $index => $value) {
            if ($index == 0) continue;
            $newNode = new ListNode($value);
            $currentNode->next = $newNode;
            $currentNode = $newNode;
        }

        return $finalNode;
    }

    /**
     * @param string $a
     * @param string $b
     * @return string
     */
    function terminal_add(string $a, string $b): string
    {
        exec('echo "'.$a.'+'.$b.'"|bc',$result);
        $ret = "";
        foreach($result as $line) $ret .= str_replace("\\","",$line);
        return $ret;
    }

    public static function getNodeValuesAsArray($listNode): array
    {
        $response = [];
        $current = $listNode;

        while (!is_null($current->next)) {
            $response[] = $current->val;
            $current = $current->next;
        }
        $response[] = $current->val;

        return $response;
    }
}

$test1 = new ListNode(2, new ListNode(4, new ListNode(3)));
$sample1 = new ListNode(5, new ListNode(6, new ListNode(4)));

$test2Data = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
$test2 = new ListNode($test2Data[0]);
$currentNode = $test2;
foreach ($test2Data as $index => $value) {
    if ($index == 0) continue;
    $newNode = new ListNode($value);
    $currentNode->next = $newNode;
    $currentNode = $newNode;
}
$sample2 = new ListNode(5, new ListNode(6, new ListNode(4)));

var_dump((new Solution())->addTwoNumbers($test1, $sample1)); // [7, 0, 8]
var_dump((new Solution())->addTwoNumbers($test2, $sample2)); // [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
