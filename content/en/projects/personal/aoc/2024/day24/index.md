+++
title = 'Day 24'
date = 2024-12-24T19:30:00
draft = false
type = 'aoc'
layout = 'day'
year = 2024
day = 24
[params]
    aocTitle = "Crossed Wires"
    solutionFileName = "solution.py"
+++

### Part 1
In the first part of the challenge, the task is to simulate a circuit of logic gates (AND, OR, XOR) and determine the 
decimal value produced by the wires starting with “z.” Each gate has two inputs and produces an output, with wires 
carrying binary values (0 or 1). The solution begins by parsing the input, which consists of the initial values of 
wires and the list of gate operations. The algorithm processes each gate in the order of operations, updating the 
state of each wire based on the logic gate operation. Once all operations are completed, the binary values of wires 
starting with “z” are concatenated and converted into a decimal number. The result is the decimal output of the circuit.

### Part 2

In the second part of the challenge, the validation involves checking if the gates follow the constraints of a [full
adder](https://en.wikipedia.org/wiki/Adder_(electronics)#Full_adder). A full adder is used to sum two binary numbers 
and produce a sum and carry output. The full adder logic and corresponding constraints for the gates are as follows:

**XOR Gate (⊕)**
- XOR gates can only be used to produce the **sum bit** of the full adder.
- The output of an XOR gate should be used as an input for either another XOR gate or an AND gate in the next step.
- XOR gates **cannot directly produce carry bits**, so their outputs must not be connected to a carry input.

**AND Gate (*)**
- AND gates are used to compute the **carry bit** for the full adder.
- AND gates should only be connected to XOR gates or other AND gates. They **cannot be used in isolation**.

**OR Gate (+)**
- OR gates are used to combine the carry bits from different parts of the full adder.
- An OR gate should only take inputs from **AND gates** and **XOR gates**.

**Carry Calculation**
- The first carry C<sub>0</sub> is calculated directly from the **AND gate** between the least significant bits.
- Subsequent carry bits are calculated using the **XOR** of the previous sum and the **AND** of the corresponding bits and the carry from the previous step.

**Gate Connections**
- A gate with output z<sub>xx</sub> should **never** use the original inputs X<sub>n</sub> or Y<sub>n</sub> directly as inputs again.
- The **least significant bit** z<sub>00</sub> must be the XOR of the first input bits (x<sub>00</sub> and y<sub>00</sub>), following the full adder logic.

By checking these constraints, the solution ensures that the gates are correctly arranged to form a valid full adder 
circuit. Any violations of these rules will be flagged as errors.

{{< aocSolver year="2024" day="24" >}}
