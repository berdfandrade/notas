# Stacks 

Let's spend a little more time talking about assembly language. Any moderately complicated assembly computer program will have subroutines. MOst CPUs by convention have a construct called a stack. 

Picture a stack literally. If you want to need to store a number, you put it on the top of a pile. When you want the number back, you pull it off the top of the pile. Assembly programmers call putting a number on the stack a "push", and taking a sumber off to be a "pop" _parecido com um array em js_. 

Let's say my program wants to call a subroutine. I might write some code like this: 

```assembly
  0x1000  move.l (sp), d0       ; put d0 on the stack    
   0x1004  add.l  sp, #4         ; increment the stack pointer    
   0x1008  move.l (sp), d1       ; put d1 on the stack    
   0x1010  add.l  sp, #4         ; etc.    
   0x1014  move.l (sp), a0    
   0x1018  add.l  sp, #4    
   0x101C  move.l (sp), a1    
   0x1020  add.l  sp, #4    
   0x1024  move.l (sp), #0x1030  ; return address    
   0x1028  add.l  sp, #4    
   0x102C  jmp #0x2040           ; the subroutine's address is 0x2040    
   0x1030  move.l a1, (sp)       ; restore the values of the registers    
   0x1034  sub.l  sp, #4         ; in reverse order    
   0x1038  move.l a0, (sp)       ; restore the values of the registers    
   0x103c  sub.l  sp, #4    
   etc.    
```
The code above pushes the values of d0, d1, a0, and a1 on the stack. Most processors use a stack pointer. This might be a normal register used by convention as a stack pointer, or might be a special register with features for specific instructions.

On the 68K series processots, the stack pointer os only by convention, otherwise it is just a plain register. On out 8080 processor, the SP register is special. It has PUSH and POP instructions which accomplish push or pop with only one instruction.

In this emulator project, we won't be writting any code from scratch. Buy any time you need to analyze assemlby language programs, it is good to recognize constructions like this.

### High level languages 

When you write a program in a high level language, all the register saving and restoring gets done every time you call a function. You just don't think about it because it's done by the compiler. Function calls in a high level language can use a lot of memory and processor time. 

Have you ever had a program crash when you call a subroutine in an infinite loop? It might be because every call to a function put register values on the stack, and eventually the stack ran out of memory (The stack growing too large is known as a stack overflow).

You may have heard of inline functions. THey avoid saving and restoring registers by including a subroutine's cide into the caller. This makes the code bigger, but saves some instructions and reads and writes to memory. 

#### Calling Conventions 

When you are writing assembly language that only calls your own code, you can decide how the subroutines are goinf to talk to each other. For example, how do i return to the caller when the subrouteine is finished? One way would be to put the return address into a specific register. Another way might to be make the return address be on the top of the stack. A lot of times this decision is dictated by the oricessor's support. The 8080 has a CALL instruction that puts the function return address on the stack. You'd probably want to use that instruction on the 8080 to implement subroutine calls. 

Here's another decision. Is saving the registers the responsibility of the caller or the subroutine? In the example above, the caller saves the registers. BUt what of there are 32 registers? Saving and restoring 32 registers when only a few may be used by the subroutine would be a waste. 

A comprimise might be a mixed approach. Let's say you make a policy where a subroutine can use registers r10-r32 without saving their contents, but can't destroy r1-r9. In a situation like this the caller knows: 

- When the function returns, the contents of r1-r9 are exactly what they were 

- I can't depend on the contents of r10-r32 

- If i need the value in r10-r32 after the subroutine call, i need to save it somewhere before calling it.

Similarly, each subroutine knows: 

- I can destroy r10-r32 
- If i want to use r1-r9, i need to save the contents and restore them prior to returning to the caller 

#### ABI 
On most modern platforms, these policies are made by engineers and published in a document called *ABI* (Application Binary Interface). Using this document, compiler writers know how to compile a code that can call code compiled by other compilers. If you want to write assembly language that can function in an environment like that, you have to know the ABI and write your code to conform to it.

Knowing the ABI can also aid you in debugging code when you don'y have the source. The ABI will define the location of the parameters to functions, so when you stop at some arbitrary subroutine you can look in those locations to see what is being passed around. 

#### Bring it back to our emulator 

Most hand-written assembly code, especially for older processors and arcade games, doesn't follow and ABI. Programs are coded in assembly and may not have very subroutines. Each subroutine will only save and restore registers only when  absolutely necessary

If you want to figure out what a program is doing, a good way to start is by labeling the addresses that are the targests of CALL instructions. 


