+++
title = 'Day 25'
date = 2024-12-25T19:30:00
draft = false
type = 'aoc'
layout = 'day'
year = 2024
day = 25
[params]
    aocTitle = "Code Chronicle"
    solutionFileName = "solution.py"
+++

### Part 1
In the first part of the challenge, the task is to analyze schematics for locks and keys, which are represented as 
columns of # and . characters. The goal is to determine how many unique lock/key pairs fit together without overlapping
in any column. The solution begins by parsing the input to extract the pin heights for the locks and the key shapes.
The pin heights of each lock are converted to a list of integers, representing the number of # characters in each 
column. Similarly, the key shapes are converted to a list of heights based on the number of # characters in each 
column. The algorithm then tests each key with each lock, checking for overlap in every column. If no column has an 
overlap where the sum of the lock height and key height exceeds the available space, the lock/key pair is considered 
valid. The result is the count of valid lock/key pairs that fit together.

### Part 2
`Merry Christmas!`

{{< aocSolver year="2024" day="25" >}}
