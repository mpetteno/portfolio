+++
title = 'Day 5'
date = 2026-09-20T11:00:00
draft = false
type = 'aoc'
layout = 'day'
year = 2025
day = 5
[params]
aocTitle = "Cafeteria"
solutionFileName = "Solution.kt"
+++

### Part 1
The problem asks us to determine how many available ingredient IDs are fresh based on a given set of inclusive fresh ID ranges.
An ingredient ID is considered fresh if it falls within at least one of the provided ranges.

To solve Part 1:
1. We parse the input into two groups: a list of inclusive ID ranges (`start-end`) and a list of target ingredient IDs.
2. For each ingredient ID in the available list, we iterate through the fresh ID ranges.
3. If an ID falls within `start..end` for any range, we count it as fresh and immediately move on to the next ID.
4. Finally, we return the total count of fresh ingredient IDs found.

### Part 2
In Part 2, the second section of the database (available ingredient IDs) is ignored. Instead, we must count the total
number of unique ingredient IDs that are covered across all fresh ID ranges combined.

Because the ranges can overlap or sit adjacent to each other, simply summing their individual lengths would overcount shared IDs:
1. We sort all fresh ID ranges primarily by their `start` bounds in ascending order.
2. We iterate through the sorted ranges and merge overlapping or contiguous ranges (where a range begins on or before `current.end + 1`).
3. For each non-overlapping, merged range, we calculate its count of encompassed IDs using `end - start + 1`.
4. Finally, we sum the counts of all merged ranges to get the total number of fresh ingredient IDs.

{{< aocSolver year="2025" day="5" >}}