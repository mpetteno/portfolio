+++
title = 'Advent of Code'
date = 2024-10-09T08:00:00
draft = false
type = 'aoc'
layout = 'list'
+++

{{< link href="https://adventofcode.com/" title="Advent of Code" target="_blank" >}} is an annual event that takes 
place every December, where participants solve a series of programming puzzles. Each puzzle is released daily, starting
on December 1st and continuing through December 25th. The puzzles cover a wide range of topics, from algorithms and 
data structures to mathematical problems and optimization challenges.

Each year, I will choose a programming language either randomly or deliberately if I wish to learn or explore a 
specific language.

I will follow two rules: no external help and no external libraries. Also, the two parts of each challenge are 
considered independent, meaning part 2 will recompute part 1 if necessary.

Every day, I will attempt to solve the proposed challenge and publish a brief description of the solution on this page.

Additionally, I have implemented a web server that can be called from each day’s page: this server
allows you to upload the input file for the current day’s challenge and returns the solution (see the next section).

## Webserver

The webserver implements a Flask-based application designed to solve Advent of Code (AoC) challenges by executing
solution scripts in various programming languages. It exposes a single `/solve` endpoint that accepts a JSON
payload containing the challenge’s year, day, part, and input file. The system locates the appropriate solution file
based on the provided challenge details (note that the solution file name must start with `solution`), and determines
the correct solver to use based on its extension. For example, if the solution file for a given day has a `.py`
extension, the server will invoke the corresponding Python solver script `py_solver.py` in a subprocess.
This script is then responsible for running the actual solution file. If a solver for a specific programming language
is not already implemented, it will be added as part of that year’s AoC solutions and the implementation details will
be provided in the year's edition page.
