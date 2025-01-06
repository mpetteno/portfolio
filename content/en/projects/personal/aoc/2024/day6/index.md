+++
title = 'Day 6'
date = 2024-12-06T19:30:00
draft = false
type = 'aoc'
layout = 'day'
year = 2024
day = 6
[params]
    aocTitle = "Guard Gallivant"
    solutionFileName = "solution.py"
+++

### Part 1
The first part of the challenge involves simulating the movement of a guard through a map, based on a set of movement 
rules. The guard starts at a particular position and direction (indicated by ^, >, v, or <), and moves according to 
the following protocol:
1. If there’s an obstacle directly in front of the guard, they turn 90 degrees to the right.
2. Otherwise, they move one step forward in the current direction.

The challenge is to track the distinct positions the guard visits until they leave the area (i.e., step outside the
bounds of the map). The `walk` function implements this movement by iterating until the guard either hits an obstacle 
(which causes a turn) or moves off the map. The function keeps track of all the positions visited and ensures that 
positions are not revisited, counting the distinct ones.

**Solution approach**:
- Parse the input to get the initial position and direction of the guard, along with the map of obstacles.
- Simulate the movement using the given rules, stopping when the guard leaves the map.
- Count the number of distinct positions visited by the guard.

### Part 2
In the second part, the guard’s path is considered with an additional twist: after each step, the guard revisits the 
area, and the path gets blocked with an obstacle at each visited position. After blocking a position, the guard is 
asked whether they will loop or continue.\
The function `walk` is reused here, with modifications to check if the guard encounters a loop after blocking a 
position.

**Solution approach**:
- For each position visited, simulate the guard’s path again with that position temporarily blocked.
- Check whether the guard loops by revisiting the same position after blocking.
- Count the number of loops detected and return this count.

{{< aocSolver year="2024" day="6" >}}
