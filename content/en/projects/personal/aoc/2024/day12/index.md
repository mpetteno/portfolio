+++
title = 'Day 12'
date = 2024-12-12T19:30:00
draft = false
type = 'aoc'
layout = 'day'
year = 2024
day = 12
[params]
    aocTitle = "Garden Groups"
    solutionFileName = "solution.py"
+++

### Part 1
In the first part of the challenge, the goal is to calculate the total cost of fencing around all garden regions. 
The bfs function is used to traverse the garden grid and identify connected regions of the same type of plant. 
For each unvisited plot, BFS is initiated, marking all adjacent plots with the same type as part of the same region. 
As each plot is visited, its neighbors are checked in all four cardinal directions and the two diagonal directions to 
detect if they belong to the same region. For each region, the perimeter is determined by counting the number of 
exposed sides, where a side is considered exposed if it touches the boundary of the grid or a plot of a different
type. The area of the region is simply the number of plots it contains. The total cost is calculated by multiplying
the area by the perimeter for each region and summing the results.

### Part 2
In the second part of the challenge, the calculation involves determining the “discounted” cost of the garden by
considering the total number of sides that touch neighboring regions, instead of only exposed sides. The bfs function 
is used in the same way to identify regions, but for each plot in a region, it also tracks the number of sides that 
touch a plot of a different type. These “touching sides” contribute to the cost of fencing, and the total discounted 
cost for each region is found by multiplying its area by the number of touching sides. This approach leads to a 
modified cost structure, where regions that share borders with other types of plants have a different fencing cost 
than those completely isolated. The final discounted cost is the sum of these individual region costs.

{{< aocSolver year="2024" day="12" >}}
