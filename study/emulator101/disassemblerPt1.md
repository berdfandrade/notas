# Disassembler pt 1 

A disassembler is a program that simply translate a stream of hex numbers back into assembly language source. This is exactly the same operation we did by hand in the last section - a perfect opportunity to be automated. By writing this piece of code we get familiar with the processor, and we get a handy piece of debuggin code we'll need when we write the CPU emulator. 

Here is an algorithm for disassemblim 8080 code: 

- 1 *Read the code into a buffer*
- 2 *Get a pointer to the beginning of the buffer*
- 3 *Use the byte at the pointer to determine the opcode*
- 4 *Print out the name of the opcode using the bytes after the opcode as data, if applicable*
- 5 *Advance the pointer the he number of bytes used by that instruction (1,2 or 3 bytes).*
- 6 *If not at the end of the buffer, go to step 3*

I'll include a couple of instructions below to get the flavor or the routine. I will make the full routine available for download, but i encourage you to write it yourself. It won't take that long and you'll learn the 8080 instruction set along the way. 

_o código tá aqui..._

```c 
   /*    
    *codebuffer is a valid pointer to 8080 assembly code    
    pc is the current offset into the code    

    returns the number of bytes of the op    
   */    

   int Disassemble8080Op(unsigned char *codebuffer, int pc)    
   {    
    unsigned char *code = &codebuffer[pc];    
    int opbytes = 1;    
    printf ("%04x ", pc);    
    switch (*code)    
    {    
        case 0x00: printf("NOP"); break;    
        case 0x01: printf("LXI    B,#$%02x%02x", code[2], code[1]); opbytes=3; break;    
        case 0x02: printf("STAX   B"); break;    
        case 0x03: printf("INX    B"); break;    
        case 0x04: printf("INR    B"); break;    
        case 0x05: printf("DCR    B"); break;    
        case 0x06: printf("MVI    B,#$%02x", code[1]); opbytes=2; break;    
        case 0x07: printf("RLC"); break;    
        case 0x08: printf("NOP"); break;    
        /* ........ */    
        case 0x3e: printf("MVI    A,#0x%02x", code[1]); opbytes = 2; break;    
        /* ........ */    
        case 0xc3: printf("JMP    $%02x%02x",code[2],code[1]); opbytes = 3; break;    
        /* ........ */    
    }    

    printf("\n");    

    return opbytes;    
   }    
```

I learned a lot of things about the 8080 while writing this and examining every opcode.

1 - I learned that most instructions are onde byte, but some are 2 and some are 3. The code above assumes the instruction was one byte, but the 2 and 3 byte instructions change the value of the "opbytes" variable so an accurate instruction size is returned. 

2 - The 8080 has registers named A,B,C,D,E,H and L. There is also a program counter (PC) and a dedicated stack pointer (SP). 

3 - SOme instructions work on registers in pairs: B and C is a pair, as is DE, and HL. 

4 - A is special - a lot of instructions operate on it. 


