+++
title = 'Day 14'
date = 2024-12-14T19:30:00
draft = false
type = 'aoc'
layout = 'day'
year = 2024
day = 14
[params]
    aocTitle = "Restroom Redoubt"
    solutionFileName = "solution.py"
+++

### Part 1
In the first part of the challenge, the goal is to determine the safety factor after 100 seconds have passed. Each 
robot moves in a predictable manner based on its initial position and velocity, and their positions wrap around the 
edges of the area, creating a looping effect. The program calculates the position of each robot after 100 seconds by 
simulating their movement with the `move_robot` function. It then checks the quadrant in which the robot ends up, 
excluding the middle row and column, which are not counted in any quadrant. The number of robots in each quadrant is 
tracked, and the safety factor is calculated by multiplying the number of robots in each of the four quadrants. This 
gives a score representing the safety of the area after 100 seconds.

### Part 2
In the second part of the challenge, the goal is to determine how many timesteps it will take for a specific alignment 
of robots to occur, which will create a Christmas tree-like pattern on the area grid. The program simulates the robots’ 
movement step-by-step and updates the area map to track each robot’s position. After each step, the program checks if 
there is an alignment of robots in either the horizontal or vertical direction using the `check_aligned_robots` function.
If robots align in any direction with a minimum of 10 robots, the simulation stops, and the number of timesteps taken 
is reported. This part focuses on predicting when the robots will align to form the desired pattern and counts the 
exact number of steps required.

{{< aocSolver year="2024" day="14" >}}
