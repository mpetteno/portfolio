+++
title = 'Day 7'
date = 2026-09-21T12:00:00
draft = false
type = 'aoc'
layout = 'day'
year = 2025
day = 7
[params]
aocTitle = "Laboratories"
solutionFileName = "Solution.kt"
+++

### Part 1
The problem asks us to count how many times tachyon beams are split as they travel downward through a grid containing
splitters (`^`). To solve Part 1:
1. We locate the starting beam column marked by `S` on the top row and initialize a set of active beam column indices.
2. We simulate beam propagation row-by-row down the grid.
3. For each active column, if a beam encounters a splitter (`^`), we increment our split counter and spawn new beams at column indices `c - 1` and `c + 1`. Otherwise, the beam continues directly down column `c`.
4. Using a `Set` for active column indices naturally deduplicates beams that land in the same column at the same time.
5. Finally, we return the total count of split events once all beams exit the grid.

### Part 2
In Part 2, quantum tachyon splitting dictates that every beam reaching a splitter splits timeline history itself,
requiring us to count all distinct timeline paths through the manifold.
To compute the total active quantum timelines:
1. Instead of tracking unique beam positions, we maintain a frequency map (`Map<Int, Long>`) of active timeline counts per column index, starting with `1` timeline at the starting column `S`.
2. As we propagate row-by-row, any timeline hitting a splitter (`^`) adds its current count to both adjacent columns (`c - 1` and `c + 1`) for the next row.
3. Columns without splitters simply carry their full timeline count straight down to the next row.
4. Using `Long` values prevents integer overflow caused by the exponential growth of quantum paths.
5. Finally, we sum the timeline counts across all active columns after processing the last row.

{{< aocSolver year="2025" day="7" >}}