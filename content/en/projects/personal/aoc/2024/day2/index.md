+++
title = 'Day 2'
date = 2024-12-02T19:30:00
draft = false
type = 'aoc'
layout = 'day'
year = 2024
day = 2
[params]
    aocTitle = "Red-Nosed Reports"
    solutionFileName = "solution.py"
+++

### Part 1
In the first part of the challenge, the goal is to determine how many reports are “safe” based on two conditions.
First, the sequence of levels in each report must be either strictly increasing or strictly decreasing. Second, the 
difference between any two adjacent levels must be between 1 and 3. To check this, the longest increasing subsequence
(LIS) and longest decreasing subsequence (LDS) are calculated for each report. If the report can be transformed into a 
valid LIS or LDS with only a small number of changes (at most 0), it is considered safe.

### Part 2
For the second part, the process is similar, but the tolerance for changes is increased. Now, a report is considered 
safe if the number of changes needed to transform it into either a valid LIS or LDS is 1 or fewer. This means that, 
in addition to the rules in part 1, a report with one small adjustment (either increasing or decreasing one level) can 
still be considered safe. The solution counts how many reports meet this modified condition and returns the result.

{{< aocSolver year="2024" day="2" >}}
