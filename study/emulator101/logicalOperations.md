# Logical Operations

Before we leave the topic of binary and hex numbers. It's probably a good time to talk about logical operations. You are probalby use to using logic in your code, maybe in a statement like `if ((conditionA) and (conditionB))`. With programs that deal with hardware, you often have to manipulate individual bits in numbers

### AND operation

Here are all possible results of and AND operation between two obe-bit numbers.

| x   | y   | result |
| --- | --- | ------ |
| 0   | 0   | 0      |
| 0   | 1   | 0      |
| 1   | 0   | 0      |
| 1   | 1   | 1      |

The result of AND is only if both vaues are one. When you combine two numbers with the AND operation, each bit of one number is "ANDed" with the corresponding bit of the other number. The result is stored in the that bit of the destination. It may be easier just to look at the math:

| Binary   | 0   | 1   | 1   | 0   | 1   | 0   | 1   | 1   | Hex |
| -------- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| source x | 0   | 1   | 1   | 0   | 1   | 0   | 1   | 1   | $6B |
| source y | 1   | 1   | 0   | 1   | 0   | 0   | 1   | 0   | $D2 |
| x AND y  | 0   | 1   | 0   | 0   | 0   | 0   | 1   | 0   | $42 |

In C, the logical or operation is the vertical bar '|'.

### Why do we care? 

With a lot of older processor but particurlarly with arcade games, the gamewill often want to work with only one bit of a number. You'çç see a lot of code like this:

```c 
/* Example 1: read the control panel */ 
char *buttons_ptr= (char *)0x2043;
char buttons = *buttons_ptr;
if(buttons & 0x4)
    HandleLeftButton();

/* Example 2: turn on one LED on the control panel */ 
char * LED_pointer = (char *) 0x2089;
char led = *LED_pointer;
led = led & 0xBF; // mask out bit 6 
*LED_pointer = led; 
```

In example 1, memory mapped location $2043 is the location of the buttons on the control panel. This code reads and resposnds to the pushed button. (Of course , in Space Invaders this code will be in assembly language!)

In example 2, the game wants to loght a LED which is located at bit 6 of memory mapped location $2089. The code must read the value is already there, modify only the one bit, and write it back out. 

In example 3, the LED from example 2 needs to be turned off, so the code needs to clear bit 6 of $2089. The way to do that is to AND the LED control byte with a value with only bit 6 clear. This will effect only bit 6, and leave the rest of the bits alone.

This is usually called a mask. A mask is usually written using C's not operator, the tilde `~`. So instead if writing `0xBF`, I'd write `~0x40`, which yields the same number but i'd not have to think about it as hard. 


