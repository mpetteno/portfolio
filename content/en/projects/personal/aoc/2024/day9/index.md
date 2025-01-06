+++
title = 'Day 9'
date = 2024-12-09T19:30:00
draft = false
type = 'aoc'
layout = 'day'
year = 2024
day = 9
[params]
    aocTitle = "Disk Fragmenter"
    solutionFileName = "solution.py"
+++

### Part 1
In the first part, the goal is to compute the disk’s checksum after compacting the files. The compacting process 
involves moving file blocks to the leftmost available free space, starting from the end of the disk. To achieve this,
the algorithm first identifies the blocks that contain files and the ones containing free space. It then shifts the 
file blocks into the free spaces iteratively, updating the positions of the blocks. Once all the files are compacted, 
the checksum is calculated by multiplying the position of each non-free space block by the file ID it contains, and 
summing the results. This provides the final checksum after the files have been compacted.

### Part 2
In the second part, the task is to perform disk defragmentation, which involves moving files to the leftmost available 
space, but in a more advanced manner than in the first part. For each file, the algorithm checks if there is enough 
free space before the file’s starting position. If such space exists, the file is moved into it, and the free space 
is adjusted accordingly. After all files have been defragmented, the checksum is computed similarly to Part 1, with
the final result representing the defragmented disk’s checksum. This step simulates a more complete defragmentation 
process, improving the disk’s space utilization.

{{< aocSolver year="2024" day="9" >}}
