+++
title = 'Advent of Code 2025'
date = 2025-10-01T08:00:00
draft = false
type = 'aoc'
layout = 'edition'
[params]
    language = 'Kotlin'
    languageURL = 'https://kotlinlang.org/'
    year = '2025'
+++

{{< projectTitle title="Solver implementation" title1="Source"
link1="https://github.com/mpetteno/aoc/blob/main/solvers/kt_solver.kt" icon1="fa-solid fa-code" target1="_blank" >}}

The implementation of the Kotlin solver consists of two main components, compiled ahead of time into a single executable jar rather than interpreted at runtime.

#### **Solver Class**
Abstract base class that defines the structure for solving the challenges, mirroring the Python edition's `Solver` interface. Abstract methods:
- `parseInput()`: Parses the raw input data into a structured form.
- `solveFirstPart(parsed)`: Solves the first part of the challenge.
- `solveSecondPart(parsed)`: Solves the second part of the challenge.

Each day's solution module defines a `Solution` class extending `Solver`, implementing the parsing and solving logic for that day's challenge. The base class also handles timing and formatted output for each part via its `run()` method.

#### **Compilation and Reflective Module Loading**
Unlike the Python edition, Kotlin has no runtime equivalent of `importlib` — solution classes must be compiled ahead of time. The build is managed with **Gradle**, using the Shadow plugin to package the base solver and every day's solution into a single fat jar (`aoc-solver.jar`).

- Each day's `Solution` class lives in a package following the convention `editions.y{year}.day{day}`, e.g. `editions.y2025.day1`.
- At startup, the `SolverMain` entrypoint reads `--year` and `--day` arguments and uses Java's reflection API (`Class.forName`) to locate and instantiate the corresponding `editions.y{year}.day{day}.Solution` class at runtime — functionally equivalent to the Python solver's dynamic `importlib` loading, but resolved against classes already present in the compiled jar rather than loaded from a file path.
- Puzzle input is streamed to the process via stdin and read in full with `readText()` before being passed to the `Solution` constructor.
- Once instantiated, `run()` executes the challenge, handling Part 1, Part 2, or both depending on the provided arguments — identical behavior to the Python `Solver.run()` method.

#### **Build and Deployment**
The web server runs in a Docker container built in two stages: the first compiles the Kotlin sources with Gradle into the fat jar, and the second is a slim Python + JRE runtime image that invokes the jar as a subprocess alongside the existing language runners, using the same `--year`/`--day`/`--part` interface as every other supported language.