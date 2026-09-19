+++
title = 'Day 2'
date = 2026-09-19T12:00:00
draft = false
type = 'aoc'
layout = 'day'
year = 2025
day = 2
[params]
aocTitle = "Gift Shop"
solutionFileName = "Solution.kt"
+++

### Part 1

To identify the invalid product IDs, we need to find all numbers within the given ranges that consist of a sequence of
digits repeated **exactly twice** (e.g., \\(11 = 1 \times 2\\), \\(1010 = 10 \times 2\\), \\(123123 = 123 \times 2\\)).
A naive approach would iterate through every single number in each range, convert it to a string, and check for a 
repeated pattern. Given the magnitude of the upper bounds in the input (up to \\(10^{10}\\)), this would result in 
billions of unnecessary iterations and excessive allocations.
Instead, we can **mathematically generate** only the invalid numbers and check if they fall within our target ranges.
Let \\( X \\) be a base sequence of length \\(k\\) (with no leading zeros, so \\(10^{k-1} \le X \le 10^k - 1\\)). 
Repeating \\(X\\) twice gives a candidate number:

$$\text{Candidate} = X \times (10^k + 1)$$

For example:
- \\(k = 1\\) (\\(X = 7\\)): Multiplier is \\(10^1 + 1 = 11 \implies 7 \times 11 = 77\\)
- \\(k = 2\\) (\\(X = 12\\)): Multiplier is \\(10^2 + 1 = 101 \implies 12 \times 101 = 1212\\)
- \\(k = 3\\) (\\(X = 456\\)): Multiplier is \\(10^3 + 1 = 1001 \implies 456 \times 1001 = 456456\\)

For a given range \\([L, R]\\) and a pattern length \\(k\\), we can directly solve for the range of valid base values \\(X\\):

$$L \le X \times \text{Multiplier} \le R$$
$$\text{startX} = \max\left(10^{k-1}, \left\lceil \frac{L}{\text{Multiplier}} \right\rceil\right)$$
$$\text{endX} = \min\left(10^k - 1, \left\lfloor \frac{R}{\text{Multiplier}} \right\rfloor\right)$$

We iterate \\(X\\) only from \\(\text{startX}\\) to \\(\text{endX}\\), adding \\(X \times \text{Multiplier}\\) to a 
unique set (to avoid duplicate additions across overlapping definitions).

### Part 2

In Part 2, an ID is invalid if it consists of a sequence of digits repeated **at least twice** (\\(R \ge 2\\)). 
For instance, \\(123123123\\) (\\(R = 3\\)) and \\(1111111\\) (\\(R = 7\\)) are now considered invalid.
A sequence \\(X\\) of length \\(k\\) repeated \\(R\\) times can be represented mathematically using a geometric series 
multiplier:

$$\text{Candidate} = X \times \sum_{i=0}^{R-1} (10^k)^i = X \times \left(1 + 10^k + 10^{2k} + \dots + 10^{(R-1)k}\right)$$

We compute the multiplier iteratively:
- For \\(R = 2\\): \\(\text{Multiplier}_2 = 10^k + 1\\)
- For \\(R + 1\\): \\(\text{Multiplier}_{R+1} = \text{Multiplier}_R \times 10^k + 1\\)

For each pattern length \\(k \ge 1\\) and repetition count \\(R \ge 2\\), we apply the same **Algebraic Range Slicing** 
technique to calculate bounds \\([\text{startX}, \text{endX}]\\) and generate candidate numbers directly without string 
manipulation. Using a `HashSet<Long>` ensures any number that matches multiple repetition patterns 
(e.g., \\(111111 = 1 \times 6\\) or \\(11 \times 3\\) or \\(111 \times 2\\)) is summed only once.

{{< aocSolver year="2025" day="2" >}}