+++
title = 'Day 15'
date = 2024-12-15T19:30:00
draft = false
type = 'aoc'
layout = 'day'
year = 2024
day = 15
[params]
    aocTitle = "Warehouse Woes"
    solutionFileName = "solution.py"
+++

### Part 1
In the first part of the challenge, the task is to simulate the robot’s movement through the warehouse while 
attempting to push boxes. The robot starts at a specific position in the grid, and each movement (up, down, left, right) 
is processed sequentially. If a box is encountered in the robot’s path, it will try to push it, but only if the space 
beyond the box is free. If a box or the robot would collide with a wall (#), no movement happens. After the robot 
finishes all the moves, the sum of the GPS coordinates of all the boxes is calculated.

### Part 2
The second part of the challenge adds complexity by considering a wider grid where each box (O) is represented by two 
adjacent characters ([]). This allows for more intricate movements of the robot and boxes, especially when the robot 
moves left or right. The robot attempts to push boxes as before, but the movement and collision detection are 
adjusted to account for the new grid representation. The approach involves checking for potential box movements in 
both horizontal and vertical directions, ensuring the robot does not push boxes into walls. After processing all moves, 
the sum of the GPS coordinates for the boxes, now marked with \[ and \], is calculated in the same way as in the first 
part.

{{< aocSolver year="2024" day="15" >}}
