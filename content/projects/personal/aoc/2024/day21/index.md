+++
title = 'Day 21'
date = 2024-12-21T19:30:00
draft = false
type = 'aoc'
layout = 'day'
year = 2024
day = 21
[params]
    aocTitle = "Keypad Conundrum"
    solutionFileName = "solution.py"
+++

### Part 1
In the first part of the challenge, the task is to calculate the total complexity of the given codes using a 
specific number of iterations. The algorithm uses dynamic programming (DP) with memoization to calculate the 
shortest sequence of button presses required to input each code. The solution iterates through each character of 
the code and recursively determines the shortest path between buttons on the keypad, using a pre-generated graph of 
possible movements for both the numeric and directional keypads. The final result is the sum of the complexities of 
all the provided codes, where the complexity is calculated by multiplying the length of the shortest sequence with the 
numeric value of the code.

### Part 2
In the second part of the challenge, the goal is to calculate the total complexity of the codes for a different number
of iterations (26). This is achieved by modifying the DP approach to adjust the number of iterations used to find the 
shortest sequence of button presses. Similar to the first part, the code recursively computes the shortest sequences, 
but with 26 iterations instead of 3. The result is the total complexity of the codes after considering the longer 
iteration length, and this is also summed for all the provided codes.

{{< aocSolver year="2024" day="21" >}}
