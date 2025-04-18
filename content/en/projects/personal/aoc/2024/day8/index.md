+++
title = 'Day 8'
date = 2024-12-08T19:30:00
draft = false
type = 'aoc'
layout = 'day'
year = 2024
day = 8
[params]
    aocTitle = "Resonant Collinearity"
    solutionFileName = "solution.py"
+++

### Part 1
In the first part, the goal is to calculate the unique antinode locations generated by pairs of antennas with the same 
frequency. The process starts by iterating through all pairs of antennas and calculating their relative positions. For 
each pair, the distance vector (difference in rows and columns) is computed. This vector is then used to generate two 
potential antinode positions: one extending the vector from the first antenna and the other from the second. Both 
positions are checked to ensure they lie within the bounds of the map. If valid, they are added to a set to keep 
track of unique antinodes. The final result is the number of unique antinode locations.

### Part 2
For the second part, the task is to find the repeated antinode locations, which requires extending the process from 
part 1. Instead of stopping at the first valid antinode, the distance vector is iterated in both directions to find 
additional repeated antinode positions. These repeated antinodes are added to a list, and their locations are checked 
for validity. The result is a count of how many times an antinode appears in the same location across multiple antennas.
This provides a more detailed look at the impact of the antennas on the map.

{{< aocSolver year="2024" day="8" >}}
