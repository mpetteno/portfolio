+++
title = 'Advent of Code 2024'
date = 2024-10-09T08:00:00
draft = false
type = 'aoc'
layout = 'edition'
[params]
    language = 'Python'
    languageURL = 'https://www.python.org/'
    year = '2024'
+++
<small><sup>*</sup>Descriptions of the solutions for this edition are mostly AI generated due to lack of time.</small>

{{< projectTitle title="Solver implementation" title1="Source"
link1="https://github.com/mpetteno/aoc/blob/main/solvers/py_solver.py" icon1="fa-solid fa-code" target1="_blank" >}}

The implementation of the Python solver consists of two main components.

#### **Solver Class**
Base class that defines the structure for solving the challenges. Abstract methods:
- `parse_input()`: A method to parse the input data.
- `solve_first_part(parsed_input)`: A method to solve the first part of the challenge.
- `solve_second_part(parsed_input)`: A method to solve the second part of the challenge.

Actual solution modules define this class by implementing the abstract methods for input parsing and solving 
the challenge.

#### **Dynamic Module Loading**
When the solver is executed by the web server runner, the main method uses the Python library `importlib` to dynamically 
import the solution module for the specified year and day:
- The module is loaded from a specific path (`../editions/{year}/day{day}/solution.py`) corresponding to the selected AoC edition year and day.
- The script expects each solution module to define a class named `Solution`, which implements the logic for solving the challenge.
- The solution module is dynamically imported using `importlib.util`, and once imported, the script creates an instance of the `Solution` class, passing the input data to it.
- After the solution module is loaded, the `run()` method of the `Solver` class (or its subclass `Solution`) is called to execute the challenge solution, handling parts 1 and 2, or both, based on the provided arguments.
