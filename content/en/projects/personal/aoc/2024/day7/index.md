+++
title = 'Day 7'
date = 2024-12-07T19:30:00
draft = false
type = 'aoc'
layout = 'day'
year = 2024
day = 7
[params]
    aocTitle = "Bridge Repair"
    solutionFileName = "solution.py"
+++

### Part 1
In the first part, the goal is to determine which equations can be made valid by inserting addition (+) and 
multiplication (*) operators between numbers. Operators are evaluated left-to-right without precedence rules, and the 
numbers cannot be rearranged. The primary data structure used is a tree (`equation_tree`), where each level represents 
possible results after applying all operators to the numbers processed so far. The leaves of the tree store the final 
results, and the output is the sum of test values for valid equations, reflecting the total calibration result.

### Part 2
The second part extends the rules by adding concatenation as a new operator, allowing two numbers to combine into a
single number. This introduces additional possibilities for forming valid equations. The same tree is 
used to evaluate each step, storing all outcomes for combinations of addition, multiplication, and concatenation. 
The output is the updated sum of test values for equations that can be made valid using any of the three operators.

{{< aocSolver year="2024" day="7" >}}
