+++
title = 'Day 19'
date = 2024-12-19T19:30:00
draft = false
type = 'aoc'
layout = 'day'
year = 2024
day = 19
[params]
    aocTitle = "Linen Layout"
    solutionFileName = "solution.py"
+++

### Part 1
In the first part of the challenge, the task is to count how many of the requested designs can be created using the 
available towel patterns. The algorithm uses `dynamic programming` (DP) to check whether a design can be made by 
combining one or more available towel patterns. It iterates through the design and checks if each segment can be
matched to an available pattern. If a segment of the design can be matched to a pattern, it updates the DP table, 
marking the design as composable. The final result is the number of designs that are composable from the available 
towel patterns.

### Part 2
In the second part of the challenge, the task is to count the number of ways each design can be composed using the 
available towel patterns. This is done by modifying the DP approach to count all possible ways to form the design. 
For each segment of the design, the algorithm checks every possible pattern and adds the number of ways that segment 
can be matched. The result is the total number of different ways to compose each design, considering all possible 
combinations of the towel patterns.

{{< aocSolver year="2024" day="19" >}}
