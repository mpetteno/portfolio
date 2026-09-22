+++
title = 'Day 12'
date = 2026-09-22T12:00:00
draft = false
type = 'aoc'
layout = 'day'
year = 2025
day = 12
[params]
aocTitle = "Christmas Tree Farm"
solutionFileName = "Solution.kt"
+++

### Part 1
The problem asks us to determine how many given tree regions can fit a required set of polyomino-shaped presents without 
overlapping. Presents can be freely rotated and flipped into up to 8 distinct grid orientations. To solve Part 1:
1. Parse the standard present shapes, generating up to 8 unique orientations for each shape normalized to top-left relative coordinates `(0, 0)`.
2. Parse each tree region line to extract its grid dimensions and the required quantity of each present shape.
3. Perform a quick area check for each region query: if the sum of all requested present areas exceeds the total region area, immediately reject the region.
4. For candidate regions, place presents sequentially using recursive depth-first search with backtracking: sort present shapes by area in descending order to prune invalid branches early, trying all valid placements and orientations in the grid until all presents are placed or all options are exhausted.
5. Count and return the total number of tree regions that can successfully fit all listed presents.

### Part 2
`Merry Christmas!`

{{< aocSolver year="2025" day="12" >}}