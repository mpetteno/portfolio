+++
title = 'Day 11'
date = 2024-12-11T19:30:00
draft = false
type = 'aoc'
layout = 'day'
year = 2024
day = 11
[params]
    aocTitle = "Plutonian Pebbles"
    solutionFileName = "solution.py"
+++

### Part 1
In the first part, the problem asks to compute the number of stones after 25 blinks, following specific transformation 
rules for each stone. Each blink involves applying the transformation rules to all the stones in the line, and the 
order is preserved. The `run_n_blinking` function simulates the process of blinking stones: the function starts with an 
initial list of stones and counts how many times each stone appears using a dictionary, `stone_count_map`. For each 
blink (repeated n times), it creates a new dictionary, `new_stone_count_map`, to store the updated counts of stones 
after applying the transformation rules.\
After all blinks are completed, the function returns the total number of stones by summing the counts in 
`stone_count_map`.

### Part 2
The second part is similar to the first part but asks for the number of stones after 75 blinks, making a bruteforce 
approach unusable.

{{< aocSolver year="2024" day="11" >}}
