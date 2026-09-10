+++
title = 'Day 10'
date = 2024-12-10T19:30:00
draft = false
type = 'aoc'
layout = 'day'
year = 2024
day = 10
[params]
    aocTitle = "Hoof It"
    solutionFileName = "solution.py"
+++

### Part 1
In the first part, the goal is to calculate the total score of all trailheads in the topographic map. A trailhead is 
defined as any position with a height of 0, which acts as the starting point for a hiking trail. To solve this, the 
algorithm uses a depth-first search (DFS) approach, starting from each trailhead and traversing the map to find all 
reachable summit positions with a height of 9. Each time a trailhead is processed, the algorithm checks how many
distinct summit positions (height 9) are reachable, calculates the score for that trailhead, and sums these scores for 
all trailheads. The final result is the total score of all trailheads.

### Part 2
The second part calculates the total rating of all trailheads, where the rating is the number of summits reachable by 
each trailhead. Instead of counting only distinct summits, the algorithm counts all summits reachable from each 
trailhead. The depth-first search (DFS) is used again, but this time the algorithm counts all reachable summit 
positions, including duplicates, for each trailhead. The final rating is the sum of these counts for all trailheads.

{{< aocSolver year="2024" day="10" >}}
