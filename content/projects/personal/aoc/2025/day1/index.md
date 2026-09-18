+++
title = 'Day 1'
date = 2026-09-18T19:30:00
draft = false
type = 'aoc'
layout = 'day'
year = 2025
day = 1
[params]
aocTitle = "Secret Entrance"
solutionFileName = "Solution.kt"
+++

### Part 1
In the first part, the goal is to count how many times the circular safe dial stops directly on position 0 after 
completing a rotation instruction. Starting at position 50 on a 100-number dial (0–99), each step specifies a
direction—left towards lower numbers or right towards higher numbers—and a distance to rotate. By tracking the 
position modulo 100 after applying each rotation in sequence, the total number of times the dial lands on 0 is 
determined.

### Part 2
For the second part, the challenge shifts to counting every single instance where a click causes the dial to pass over 
or land on position 0, including full revolutions during a single instruction. Rather than only checking the final 
position after a rotation, the total distance traveled is used to calculate how many times position 0 is hit or crossed 
along the path before the dial reaches its final destination for that instruction.

{{< aocSolver year="2025" day="1" >}}