# Introduction to Assembly Language

If you're reading this, you must be familiar with computer programming, maybe in a langauge like Java of Python. These languages encourage you to perform a lot work in very few lines of code. The code considered most clever accomplishes the most work with the least code, often with  aid of built-in library functionality. Languages like this are considered "High level languages".

By contrast, assembly language has no built in facilities, and accomplishing simple tasks may be many lines of code. Aassembly language is considered a "low level language". Tou have to adjust your thinking to "what is the exact series of steps i have to do to accomplish this task"? 

The most importart thing to know about assembly language is that each line translates to one processor instruction. 

Consider a C statement such as:

`int a = b + 100`

In assembly language, you might have to do this in the following steps:

1 - *Load the address of the variable B into register #1*

2 - *Load the contents of that memory address into register #2*

3 - *Add the immediate value* `0x64` *to register #2*

4 - *Load the address of variable A into register #1*

5 - *Write the contents of register #2 to the address stored in register #1*

In code it would look something like this:

```assembly
lea     a1, #$1000   ; the address of variable a 
lea     a2, #$1008   ; the address of variable b 
move.l  d0, (a2)
add.l   d0, #$64
mov     (a1), d0
``` 

Some things to note: 

- In a high level language, the compiler decides where in memory to put variables. When writing in assembly, you are responsible for deciding what every location in memory is going to be used for.

- In most assemlby languages, parenthesis indicate "memory at this address".

- In most assembly languages, # is an indicator a literal number, also called an immediate value. For example in Line 1 above, the code will actually put a #0x1000 into register a1. If the code instead read `move.l a1, ($1000)`, i would expect a1 to get the contents of memory at location 0x1000.

- Each processor has a different assembly language, and it is difficult to move code from one processor to another.

- This is not assembly language for a real processor, i made it up for this example.

One thing is similar between clever high level language programmers and assmbly jockeys. Assembly programmers take pride in accomplishing a task as efficiently as possuble and minimize the number of instructions used. The code for arcade games is usually written with every extra byte and cycle squeezeed out of the code. 


