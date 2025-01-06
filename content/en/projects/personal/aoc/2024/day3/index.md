+++
title = 'Day 3'
date = 2024-12-03T19:30:00
draft = false
type = 'aoc'
layout = 'day'
year = 2024
day = 3
[params]
    aocTitle = "Mull It Over"
    solutionFileName = "solution.py"
+++

### Part 1
In the initial part of the challenge, the task is to search through a corrupted program to find valid multiplication 
instructions and calculate their sum. The valid instructions are written as `mul(X,Y)`, where X and Y are numeric values. 
The program also contains extraneous noise and malformed instructions, which should be ignored. By applying a regular 
expression, the valid `mul(X,Y)` pairs are extracted, and their respective numbers are multiplied together. The results 
of these multiplications are summed up and returned.

### Part 2
For the second part, the program needs to be filtered further based on specific markers. Only the sections of the 
program between `do()` and `don't()` are considered valid for multiplication. By using a regular expression with the 
`re.DOTALL` flag, which allows matching across newlines, the valid sections are isolated. Inside these sections, 
the valid multiplication instructions are identified and multiplied. The final step is to compute the total of these 
multiplications and return the result.

{{< aocSolver year="2024" day="3" >}}
