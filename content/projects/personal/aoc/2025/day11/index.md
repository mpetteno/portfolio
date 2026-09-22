+++
title = 'Day 11'
date = 2026-09-22T11:00:00
draft = false
type = 'aoc'
layout = 'day'
year = 2025
day = 11
[params]
aocTitle = "Reactor"
solutionFileName = "Solution.kt"
+++

### Part 1
The problem models a network of connected electrical devices as a directed graph, where each device points to its 
downstream output devices. We need to find the total number of distinct paths leading from the starting device `"you"` 
to the target output device `"out"`. To solve Part 1:
1. Parse the input lines into an adjacency list mapping each device ID to its list of connected output devices.
2. Implement depth-first search (DFS) with memoization to count paths from any given device to the destination `"out"`.
3. Evaluate the DFS from `"you"`: if the target `"out"` is reached, return `1`; otherwise, sum the path counts of all neighbor outputs and memoize the result.
4. Return the total path count from `"you"` to `"out"`.

### Part 2
In Part 2, we need to find the total number of paths from the server rack (`"svr"`) to `"out"` that visit both key 
intermediate devices (`"dac"` and `"fft"`) in any order. Because the graph is directed and acyclic, visiting both 
devices implies one of two mutually exclusive orderings: `svr -> dac -> fft -> out` or `svr -> fft -> dac -> out`. 
To solve Part 2:
1. Use the memoized path-counting helper from Part 1 to compute path counts between any two specific nodes (`countPathsBetween(start, target)`).
2. Calculate the total paths for the first sequence (`dac` then `fft`) by multiplying independent path segments: `countPathsBetween("svr", "dac") * countPathsBetween("dac", "fft") * countPathsBetween("fft", "out")`.
3. Calculate the total paths for the second sequence (`fft` then `dac`) similarly: `countPathsBetween("svr", "fft") * countPathsBetween("fft", "dac") * countPathsBetween("dac", "out")`.
4. Sum the results of both sequence orderings to get the total number of valid paths visiting both devices.

{{< aocSolver year="2025" day="11" >}}