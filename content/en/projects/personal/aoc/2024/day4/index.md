+++
title = 'Day 4'
date = 2024-12-04T19:30:00
draft = false
type = 'aoc'
layout = 'day'
year = 2024
day = 4
[params]
    aocTitle = "Ceres Search"
    solutionFileName = "solution.py"
+++

### Part 1
The problem involves finding all occurrences of the word “XMAS” in a 2D grid of letters, resembling a word search 
puzzle. The word can appear in any of 8 possible directions—horizontally, vertically, or diagonally—and may overlap or
share letters with other occurrences. To solve this, the grid is treated as a matrix, and each cell is examined as a 
potential starting point for the word. From each starting point, searches are conducted in all 8 directions to verify 
whether the letters in sequence match “XMAS.” The process continues until all positions in the grid have been checked,
counting every valid occurrence. The algorithm leverages loops and boundary checks to ensure searches do not exceed the 
grid’s limits. This approach effectively handles the complexity of overlapping patterns and varying orientations, 
providing the total count of occurrences of the word in the puzzle.

### Part 2
In this updated version of the puzzle, the task is no longer to find occurrences of the word “XMAS” but instead to 
identify patterns that form an X-MAS shape in the grid. An X-MAS consists of two “MAS” sequences arranged in the shape
of an X—one “MAS” forming the top-left to bottom-right diagonal, and the other forming the top-right to bottom-left 
diagonal. Each “MAS” can be written either forwards or backwards.

The solution involves scanning the grid for the center of a potential X-MAS pattern, then checking all diagonal 
directions to validate whether two “MAS” sequences align symmetrically. The algorithm iterates through each 
cell in the grid, treating it as a possible center point, and verifies if the required diagonal patterns exist. This 
approach accounts for overlaps, reversals, and varying orientations to accurately count all occurrences of the X-MAS 
pattern in the puzzle.

{{< aocSolver year="2024" day="4" >}}
