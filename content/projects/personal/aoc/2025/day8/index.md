+++
title = 'Day 8'
date = 2026-09-21T15:00:00
draft = false
type = 'aoc'
layout = 'day'
year = 2025
day = 8
[params]
aocTitle = "Playground"
solutionFileName = "Solution.kt"
+++

### Part 1
The problem provides 3D coordinates \\((X, Y, Z)\\) for a collection of electrical junction boxes. We are tasked with 
making 1000 connections between the pairs that are closest to each other by straight-line Euclidean distance, and then 
finding the product of the sizes of the three largest resulting circuits (connected components). To solve Part 1:
1. Parse the 3D coordinates for all junction boxes into a collection of points.
2. Generate all unique pairings of junction boxes, compute their Euclidean distances, and sort the pairs in ascending order of distance.
3. Initialize a Disjoint-Set (Union-Find) structure where each box starts in its own component.
4. Process the first 1000 shortest connection pairs, merging (unioning) the sets containing the two boxes for each connection.
5. Collect the sizes of all resulting disjoint sets, sort them descending, and return the product of the top three set sizes.

### Part 2
In Part 2, instead of stopping after 1000 connections, we continue making connections in order of increasing distance 
until all junction boxes are merged into a single unified circuit. We then need to multiply together the X-coordinates 
of the final pair of junction boxes that connects the entire network. To solve Part 2:
1. Maintain the same sorted sequence of junction box pairs and Disjoint-Set structure as in Part 1.
2. Iterate through the sorted pairs sequentially, applying union operations for each edge.
3. After each union operation, check if the total number of connected components has reduced to 1 (or if the set containing the current box matches the total count of input boxes).
4. Identify the last pair \\((A, B)\\) that triggers this full connectivity condition.
5. Multiply \\(A.x \times B.x$\\) (using `Long` arithmetic to avoid 32-bit integer overflow) and return the product.

{{< aocSolver year="2025" day="8" >}}