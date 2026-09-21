+++
title = 'Day 9'
date = 2026-09-21T23:00:00
draft = false
type = 'aoc'
layout = 'day'
year = 2025
day = 9
[params]
aocTitle = "Movie Theater"
solutionFileName = "Solution.kt"
+++

### Part 1
The problem provides a list of 2D grid coordinates representing red floor tiles in a movie theater. We need to find the 
maximum discrete area of an axis-aligned rectangle formed by taking any two red tiles as opposing corners. To solve Part 1:
1. Parse the input lines into a collection of 2D point coordinates \\((X, Y)\\).
2. Generate all unique pairs of red tiles \\((A, B)\\) to serve as opposing vertices for candidate rectangles.
3. Calculate the discrete grid area of each candidate rectangle using the inclusive formula \\((|A.x - B.x| + 1) \times (|A.y - B.y| + 1)\\), which properly accounts for 1D line segments and single-tile regions.
4. Track and return the maximum area found across all possible pairs.

### Part 2
In Part 2, the red tiles are given in sequential order, defining the closed polygon boundary of a decorative floor 
layout. We are asked to find the largest candidate rectangle whose strict interior is entirely contained within the 
polygon (i.e., no boundary edge cuts through the interior of the rectangle). To solve Part 2:
1. Connect adjacent sequential red tiles in cyclic order \\((p_1 \to p_2, p_2 \to p_3, \dots, p_N \to p_1)\\) to form a list of horizontal and vertical boundary line segments.
2. Generate all candidate rectangles from pairs of red tiles and sort them in descending order of area.
3. Iterate through the candidate rectangles from largest to smallest.
4. For each candidate rectangle, verify that no polygon boundary segment intersects its strict interior (where an edge penetrates the interior if its position falls strictly between the rectangle's bounds and its perpendicular span overlaps the interior span).
5. Return the area of the first candidate rectangle that passes this boundary intersection check.

{{< aocSolver year="2025" day="9" >}}