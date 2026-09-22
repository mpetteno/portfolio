+++
title = 'Day 10'
date = 2026-09-22T10:00:00
draft = false
type = 'aoc'
layout = 'day'
year = 2025
day = 10
[params]
aocTitle = "Factory"
solutionFileName = "Solution.kt"
+++

### Part 1

In Part 1, we are given a desired configuration of indicator lights where each light is initially off (`.` = \\(0\\), `#` = \\(1\\)). Each button toggles a specific subset of lights on or off. Because pressing any button twice toggles its target lights back to their original state, pressing a button an **even** number of times is equivalent to \\(0\\) presses, and an **odd** number of times is equivalent to \\(1\\) press.

This allows us to model the configuration of each machine as a system of linear equations over the **Galois Field \\(\text{GF}(2)\\)** (modulo 2 arithmetic):

$$A x \equiv b \pmod 2$$

- \\(A\\) is an \\(N \times M\\) matrix where entry \\(A_{i, j} = 1\\) if button \\(j\\) toggles light \\(i\\), and \\(0\\) otherwise.
- \\(b \in \{0, 1\}^N\\) is the target light vector derived from the indicator light diagram.
- \\(x \in \{0, 1\}^M\\) is the decision vector representing whether button \\(j\\) is pressed (\\(1\\)) or not (\\(0\\)).

We perform **Gaussian Elimination over \\(\text{GF}(2)\\)** using bitwise XOR operations to reduce the augmented matrix \\([A \mid b]\\):
1. **Consistency Check:** If any row reduces to \\([0 \; 0 \dots 0 \mid 1]\\), the target configuration is impossible.
2. **Free Variables:** We identify free variable columns \\(c \in \text{Free}\\) (columns without a pivot). For a small number of free variables \\(k\\), we iterate over all \\(2^k\\) binary assignments for the free variables, calculate the corresponding pivot variables, and pick the solution vector \\(x\\) that minimizes the Hamming weight:

$$\min \sum_{j=1}^{M} x_j$$

### Part 2

In Part 2, the machines switch to joltage mode where each button press increments specified numeric counters by \\(1\\) (starting from \\(0\\)). Buttons can now be pressed any non-negative integer number of times (\\(x_j \in \mathbb{Z}_{\ge 0}\\)).

This changes the system from linear equations over \\(\text{GF}(2)\\) to a standard **Integer Linear Programming (ILP)** problem over non-negative integers:

$$A x = b, \quad \text{where } x_j \ge 0$$

- \\(A\\) is an \\(N \times M\\) binary matrix indicating which counter \\(i\\) is incremented by button \\(j\\).
- \\(b \in \mathbb{Z}_{\ge 0}^N\\) is the vector of required target joltages.

We solve this system using **Gaussian Elimination over \\(\mathbb{R}\\)**:
1. Reduce the augmented matrix \\([A \mid b]\\) to row echelon form using floating-point operations.
2. Express the dependent (pivot) variables in terms of the independent (free) variables.
3. Since each button press adds \\(\ge 1\\) to at least one counter, no single free variable can exceed \\(\max(b)\\). We perform a depth-first search over all non-negative integer values \\(v \in [0, \max(b)]\\) for the free variables.
4. For each branch, we calculate the remaining pivot variables. If all pivot values evaluate to non-negative integers (within an \\(\epsilon = 10^{-9}\\) tolerance), the solution vector \\(x\\) is valid. We record the minimum total button presses \\(\sum x_j\\) across all valid assignments.

{{< aocSolver year="2025" day="10" >}}