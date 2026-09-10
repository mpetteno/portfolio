+++
title = 'Day 18'
date = 2024-12-18T19:30:00
draft = false
type = 'aoc'
layout = 'day'
year = 2024
day = 18
[params]
    aocTitle = "RAM Run"
    solutionFileName = "solution.py"
+++

### Part 1
In the first part of the challenge, we simulate the first kilobyte (1024 bytes) falling into the memory space. 
Each byte is represented by its coordinates, and as the bytes fall, the corresponding tiles in the grid become 
corrupted, marked with a “#” symbol. The algorithm uses `Dijkstra’s algorithm` to calculate the shortest path from the 
top-left corner (0, 0) to the bottom-right corner (70, 70), avoiding the corrupted tiles. The algorithm processes each 
neighboring tile, updating the distances based on the number of steps taken to reach that tile. The result is the 
minimum number of steps required to reach the exit.

### Part 2
In the second part of the challenge, the task is to determine if the Reindeer can still reach the exit after the entire 
kilobyte of bytes has fallen into the grid. The algorithm continues to simulate the falling bytes, but after each byte 
falls, it checks if a path to the exit is still available. If no path is found at any point, the algorithm reports 
that the exit is blocked, and it identifies the byte that caused the blockage. The solution ensures that the 
Reindeer’s route is not obstructed and can safely reach the exit, even as more bytes fall into the grid.

{{< aocSolver year="2024" day="18" >}}
