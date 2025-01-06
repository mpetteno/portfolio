+++
title = 'Day 5'
date = 2024-12-05T19:30:00
draft = false
type = 'aoc'
layout = 'day'
year = 2024
day = 5
[params]
    aocTitle = "Print Queue"
    solutionFileName = "solution.py"
+++

### Part 1
In the first part of the challenge, the goal is to determine which page updates are in the correct order based on a set 
of rules. Each rule specifies that one page must be printed before another (e.g., X|Y means page X must be printed 
before page Y). For each update, we need to check if the pages are ordered according to these rules.\
To solve this, the solution uses depth-first search (DFS) to check for valid page orders. The `check_update_error` 
function is used to detect any violations of the rules. If there is no error in the order, the middle page of that 
update is added to a sum. At the end, the sum of the middle pages from the correct updates is returned.

### Part 2
The second part of the challenge requires sorting pages according to the rules using topological sorting. If an update 
violates any of the rules, the pages in that update are sorted in a valid order, and again, the middle page is summed
up. The `topological_dfs_sort` function performs this sorting by traversing the dependencies of each page and arranging 
them in the correct order. The middle page of the sorted update is then added to the sum.

In both parts, the focus is on validating the order of pages and calculating the sum of the middle pages for the 
correctly ordered or sorted updates.

{{< aocSolver year="2024" day="5" >}}
