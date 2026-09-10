+++
title = 'Day 20'
date = 2024-12-20T19:30:00
draft = false
type = 'aoc'
layout = 'day'
year = 2024
day = 20
[params]
    aocTitle = "Race Condition"
    solutionFileName = "solution.py"
+++

### Part 1
In the first part of the challenge, the task is to calculate how many possible “cheats” can save at least 100 
picoseconds in a race through a grid-like racetrack. The path is constructed by traversing the grid from the start 
(‘S’) to the end (‘E’) while avoiding walls (’#’). After determining the path, the program checks for possible cheats, 
which allow a program to temporarily pass through walls for a short time, saving picoseconds. The algorithm uses a 
`dynamic programming` approach to explore potential cheats and calculates how much time can be saved by cheating for 
specific segments of the path. The result is the number of cheats that save at least 100 picoseconds, considering a 
maximum cheat time of 2 picoseconds.

### Part 2
In the second part of the challenge, the task is to calculate the number of cheats that save at least 100 picoseconds 
when considering a larger maximum cheat time of 20 picoseconds. The approach is similar to the first part, but the 
allowed cheat duration is increased. By adjusting the maximum cheat time, the algorithm computes how many cheats save 
a significant amount of time (at least 100 picoseconds) by navigating through walls with the extended cheat period. 
The result is the number of cheats that meet the 100 picoseconds threshold when considering the longer cheat duration.

{{< aocSolver year="2024" day="20" >}}
