+++
title = 'Day 16'
date = 2024-12-16T19:30:00
draft = false
type = 'aoc'
layout = 'day'
year = 2024
day = 16
[params]
    aocTitle = "Reindeer Maze"
    solutionFileName = "solution.py"
+++

### Part 1
In the first part of the challenge, the objective is to determine the lowest possible score for the Reindeer to move 
from the Start Tile (S) to the End Tile (E) in a maze. The Reindeer can move forward one tile at a time, increasing 
their score by 1 point, or they can rotate 90 degrees clockwise or counterclockwise, each rotation incurring an
additional 1000 points. The movement is constrained by walls (#), and the Reindeer must avoid them. The algorithm 
uses a breadth-first search (BFS) approach, where it explores all possible movements (forward, clockwise, 
counterclockwise) and keeps track of the minimum score accumulated to reach the End Tile. The solution efficiently 
calculates the shortest path score by evaluating different movement options and considering rotation penalties.

### Part 2
The second part of the challenge introduces a more complex task: finding the best possible path tiles count. Starting 
from the End Tile (E), the goal is to explore the maze in reverse, counting the number of tiles that can be reached 
with the best possible path. The Reindeer can rotate and move as before, but this time, the algorithm searches for 
the minimum number of tiles that contribute to the best possible path score. By performing a reverse BFS, the algorithm 
identifies the tiles that can be part of an optimal path and ensures that the Reindeer can move between them with 
minimal score penalties. The result is the count of reachable tiles along the best path, which reflects the efficiency 
of the movement strategy for the Reindeer in this maze.

{{< aocSolver year="2024" day="16" >}}
