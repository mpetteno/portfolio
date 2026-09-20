+++
title = 'Day 4'
date = 2026-09-20T11:00:00
draft = false
type = 'aoc'
layout = 'day'
year = 2025
day = 4
[params]
aocTitle = "Printing Department"
solutionFileName = "Solution.kt"
+++

### Part 1
The problem requires us to determine how many rolls of paper (`@`) on a 2D grid are **accessible** to forklifts.
A roll is considered accessible if it has **fewer than 4 neighboring paper rolls** in its 8 adjacent directions 
(horizontally, vertically, and diagonally).
To solve Part 1:
1. We iterate over every cell in the grid.
2. When we encounter a paper roll (`@`), we count how many of its 8 surrounding neighbors also contain `@`.
3. If the neighbor count is strictly less than 4, we mark this roll as accessible.
4. Finally, we return the total count of all accessible paper rolls.

### Part 2
In Part 2, the process becomes iterative. Once accessible paper rolls are identified, the forklifts can remove them 
(replacing them with empty space `.`). Removing paper rolls changes the surrounding neighborhood counts, potentially
making previously inaccessible rolls accessible in subsequent steps.

We simulate this removal process in a loop:
* In each iteration, we locate all currently accessible paper rolls (`@` cells with fewer than 4 `@` neighbors).
* If no accessible rolls are found, the process terminates.
* Otherwise, we remove all found accessible rolls by mutating their positions in the grid to empty cells (`.`), accumulate the number of removed rolls into a running total, and repeat.
* Once no more rolls can be accessed, we return the total count of removed paper rolls across all iterations.

{{< aocSolver year="2025" day="4" >}}