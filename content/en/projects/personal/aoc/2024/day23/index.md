+++
title = 'Day 23'
date = 2024-12-23T19:30:00
draft = false
type = 'aoc'
layout = 'day'
year = 2024
day = 23
[params]
    aocTitle = "LAN Party"
    solutionFileName = "solution.py"
+++

### Part 1
In the first part of the challenge, the task is to identify all sets of three inter-connected computers in the network
map. The algorithm uses a graph representation where each computer is a node, and each connection between two computers 
is an edge. To find the sets of three inter-connected computers, the solution iterates through the adjacency list for 
each computer and its neighbors, then finds common neighbors between pairs of neighbors. These common neighbors form 
a complete triangle, which represents a set of three inter-connected computers. After identifying all such sets, the 
solution filters out those that contain at least one computer whose name starts with “t.” The final result is the count 
of such sets.

### Part 2
In the second part of the challenge, the goal is to find the largest clique in the network graph. A clique is a subset
of nodes where every two nodes are directly connected. The `Bron-Kerbosch` algorithm is used to recursively explore all
possible cliques in the graph. The solution finds the largest clique by checking combinations of nodes and their 
neighbors, ensuring each node in the clique is connected to every other node in the set. The result is the largest 
clique, which is represented as a sorted list of computer names.

{{< aocSolver year="2024" day="23" >}}
