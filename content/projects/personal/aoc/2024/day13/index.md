+++
title = 'Day 13'
date = 2024-12-13T19:30:00
draft = false
type = 'aoc'
layout = 'day'
year = 2024
day = 13
[params]
    aocTitle = "Claw Contraption"
    solutionFileName = "solution.py"
+++

### Part 1
In this part of the challenge, the goal is to find the minimum cost in tokens to win prizes from multiple claw machines. 
Each machine has two buttons, A and B, which move the claw in specific increments along the X and Y axes. The 
function `get_min_win_cost` solves a system of linear equations that represents the claw’s movement for each machine. 
For each machine, the function calculates the number of times button A and button B must be pressed to align the claw 
with the prize’s coordinates in both X and Y axes. If a valid solution exists within the allowed range 
(0-100 presses per button), the cost is computed as the sum of the presses multiplied by the respective token costs
(3 tokens for A and 1 token for B). The program iterates through all machines and sums up the minimum costs to determine 
the total cost required to win all prizes.

### Part 2
In the second part, the goal is to calculate the minimum cost for all prizes with an error weight. This modification 
handles situations where no exact combination of button presses can win the prize due to constraints or machine 
configuration. By adding a large error weight to the calculations, the function is forced to find a solution even if 
the exact alignment is not possible. This allows for a fallback mechanism, ensuring that all machines can still be 
included in the solution, albeit with a potential error. The process follows the same steps as the first part but with 
an additional error handling feature that ensures the claw can still attempt to win the prize, and the total cost is 
computed as before. This ensures robustness in handling edge cases where the ideal solution might not be achievable.

{{< aocSolver year="2024" day="13" >}}
