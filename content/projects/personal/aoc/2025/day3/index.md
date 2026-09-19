+++
title = 'Day 3'
date = 2026-09-19T23:00:00
draft = false
type = 'aoc'
layout = 'day'
year = 2025
day = 3
[params]
aocTitle = "Lobby"
solutionFileName = "Solution.kt"
+++

### Part 1

The problem asks us to find the maximum possible number that can be formed by choosing exactly **2 digits** from each 
given string (battery bank) without changing their relative order, and then sum these maximum numbers across all banks.
To form the largest 2-digit number from a sequence of digits:
1. We select a single digit from the bank that leaves at least one digit remaining to its right, choosing the maximum possible value for the first position.
2. We then select the maximum available digit among those remaining after our first choice.
Given the small target size of \\(k = 2\\), this can be done by scanning for the optimal pair, or more generally using 
a monotonic stack approach to build the largest sequence.

### Part 2
In Part 2, the requirement increases from picking 2 digits to picking **12 digits** from each bank string to form the 
largest possible 12-digit number.

This is a classic **"Create Largest Number"** problem, which can be solved greedily using a **monotonic stack**:
* We iterate through the digits of each bank from left to right.
* We maintain a stack (or `StringBuilder`) of selected digits.
* Before adding a new digit, as long as the last digit in our stack is strictly smaller than the current digit and we still have enough remaining digits in the bank to reach our target length \\(k = 12\\) (i.e., we haven't dropped `bank.length - k` digits yet), we pop the smaller digit off the stack.
* After iterating through all digits, we truncate the stack result to exactly length \\(k\\) and parse it as a `Long`.
* Finally, we sum these 12-digit values across all battery banks to get the total output joltage.

{{< aocSolver year="2025" day="3" >}}