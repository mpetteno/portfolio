+++
title = 'Day 22'
date = 2024-12-22T19:30:00
draft = false
type = 'aoc'
layout = 'day'
year = 2024
day = 22
[params]
    aocTitle = "Monkey Market"
    solutionFileName = "solution.py"
+++

### Part 1
In the first part of the challenge, the task is to simulate the generation of 2000 secret numbers for each buyer and 
compute the sum of their 2000th secret number. Each buyer starts with an initial secret number, which undergoes a 
series of transformations through the process of mixing and pruning. The secret number evolves by performing a bitwise 
XOR operation and a modulo operation to ensure it remains within a specified range. The sequence of secret numbers is 
calculated iteratively for 2000 steps, and the result is the last number generated in the sequence for each buyer. 
The final answer is the sum of these 2000th secret numbers across all buyers.

### Part 2
In the second part of the challenge, the goal is to identify the most profitable sequence of price steps by analyzing 
the change in the last digit of each secret number across multiple iterations. As each secret number generates a new 
price step, the challenge is to track these price steps and detect repeating sequences of a fixed length. The algorithm
uses a sliding window to observe sequences of price steps and computes how many bananas can be earned from each unique 
sequence. The result is the sequence with the maximum number of bananas, which corresponds to the most frequent price 
step pattern.

{{< aocSolver year="2024" day="22" >}}
