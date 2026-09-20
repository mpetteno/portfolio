+++
title = 'Day 6'
date = 2026-09-20T16:00:00
draft = false
type = 'aoc'
layout = 'day'
year = 2025
day = 6
[params]
aocTitle = "Trash Compactor"
solutionFileName = "Solution.kt"
+++

### Part 1
The problem asks us to evaluate math problems written in vertical columns, applying a specified operator across operands for each problem and summing the results.
To solve Part 1:
1. We parse the input by separating the operand rows from the bottom operator line.
2. We transpose the matrix so that each individual problem column becomes a row of operand strings mapped to its corresponding operator.
3. For each problem, we parse the numbers left-to-right and evaluate them sequentially using the assigned operator (`+` or `*`).
4. Finally, we return the grand total by summing the results of all individual problems.

### Part 2
In Part 2, the cephalopods clarify that math is read right-to-left, and each column within a problem forms a single number read top-to-bottom.
To evaluate Cephalopod math:
1. We reuse the transposed matrix and operator list, reversing both to process the problems in right-to-left order.
2. For each problem block, we scan vertically across character indices right-to-left, constructing numbers by concatenating non-space digits top-to-bottom.
3. We evaluate the newly constructed numbers sequentially using the problem's assigned operator.
4. Finally, we sum the results of all problems to compute the correct grand total.

{{< aocSolver year="2025" day="6" >}}