+++
title = 'Day 4'
date = 2024-12-04T19:30:00
draft = false
type = 'aoc'
layout = 'day'
year = 2024
day = 4
[params]
    aocTitle = "Ceres Search"
    solutionFileName = "solution.py"
+++

### Part 1
In the first part of the challenge, the task is to find all occurrences of the word “XMAS” in a word search puzzle.
The word can appear in various directions: horizontally, vertically, or diagonally, both forward and backward. 
To solve this, a depth-first search (DFS) approach is used, where each cell in the puzzle that matches the first 
letter of the target word is explored. For each starting point, the search proceeds in multiple possible directions 
to see if the word “XMAS” can be formed. A counter is kept to track how many times the word is found.

### Part 2
In the second part, the challenge requires finding instances of the word “MAS” that cross through the middle of the 
word and appear both diagonally in opposite directions. To solve this, a helper function checks for diagonal matches, 
considering both forward and reversed matches. Specifically, the middle character of “MAS” is used as a starting point,
and two diagonal directions are checked: one from the upper-left to lower-right and the other from the upper-right to 
lower-left. If both diagonals contain the word “MAS”, the crossed word count is incremented. The final answer is the 
total number of such occurrences.

{{< aocSolver year="2024" day="4" >}}
