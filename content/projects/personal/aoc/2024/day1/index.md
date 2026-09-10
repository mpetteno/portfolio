+++
title = 'Day 1'
date = 2024-12-01T19:30:00
draft = false
type = 'aoc'
layout = 'day'
year = 2024
day = 1
[params]
    aocTitle = "Historian Hysteria"
    solutionFileName = "solution.py"
+++

### Part 1
In the first part, the goal is to find the total distance between two lists of location IDs. Both lists are sorted 
first, which ensures that the smallest elements from each list are paired together. By comparing corresponding elements
from both lists, the distance between them is calculated. The overall distance is then determined by summing up these 
individual differences, providing a measure of how much the two lists differ when aligned in ascending order.

### Part 2
For the second part, the challenge is to compute a similarity score based on the frequency of location IDs. By 
counting how often each ID appears in the second list, the similarity score is determined by matching IDs from the 
first list with those in the count map of the second list. The score is the sum of the products of each matched ID and 
its frequency in the second list, reflecting the “weighted similarity” between the two lists based on their shared IDs.

{{< aocSolver year="2024" day="1" >}}
