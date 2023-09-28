# Diving in 

You're going to need information about the opcodes and their corresponding instructions. When you search around the net of information, you'll notice that there is a lot of intermixed 8080 instructions with the same hex codes, but also has additional instructions. Ithink you should avoid Z80 information for now so it you don't get confused. I constructed and opcode chart: 

| Opcode | Instruction   | Size | Flags           | Function                                 |
|--------|---------------|------|-----------------|------------------------------------------|
| 0x00   | NOP           | 1    |                 |                                          |
| 0x01   | LXI B,D16     | 3    |                 | B <- byte 3, C <- byte 2                |
| 0x02   | STAX B        | 1    |                 | (BC) <- A                                |
| 0x03   | INX B         | 1    |                 | BC <- BC+1                               |
| 0x04   | INR B         | 1    | Z, S, P, AC     | B <- B+1                                |
| 0x05   | DCR B         | 1    | Z, S, P, AC     | B <- B-1                                |
| 0x06   | MVI B, D8     | 2    |                 | B <- byte 2                             |
| 0x07   | RLC           | 1    | CY              | A = A << 1; bit 0 = prev bit 7; CY = prev bit 7 |
| 0x08   | -             |      |                 |                                          |
| 0x09   | DAD B         | 1    | CY              | HL = HL + BC                            |
| 0x0a   | LDAX B        | 1    |                 | A <- (BC)                               |
| 0x0b   | DCX B         | 1    |                 | BC = BC-1                               |
| 0x0c   | INR C         | 1    | Z, S, P, AC     | C <- C+1                                |
| 0x0d   | DCR C         | 1    | Z, S, P, AC     | C <-C-1                                 |
| 0x0e   | MVI C,D8     | 2    |                 | C <- byte 2                             |
| 0x0f   | RRC           | 1    | CY              | A = A >> 1; bit 7 = prev bit 0; CY = prev bit 0 |
| 0x10   | -             |      |                 |                                          |
| 0x11   | LXI D,D16     | 3    |                 | D <- byte 3, E <- byte 2                |
| 0x12   | STAX D        | 1    |                 | (DE) <- A                                |
| 0x13   | INX D         | 1    |                 | DE <- DE + 1                            |
| 0x14   | INR D         | 1    | Z, S, P, AC     | D <- D+1                                |
| 0x15   | DCR D         | 1    | Z, S, P, AC     | D <- D-1                                |
| 0x16   | MVI D, D8     | 2    |                 | D <- byte 2                             |
| 0x17   | RAL           | 1    | CY              | A = A << 1; bit 0 = prev CY; CY = prev bit 7 |
| 0x18   | -             |      |                 |                                          |
| 0x19   | DAD D         | 1    | CY              | HL = HL + DE                            |
| 0x1a   | LDAX D        | 1    |                 | A <- (DE)                               |
| 0x1b   | DCX D         | 1    |                 | DE = DE-1                               |
| 0x1c   | INR E         | 1    | Z, S, P, AC     | E <-E+1                                |
| 0x1d   | DCR E         | 1    | Z, S, P, AC     | E <- E-1                                |
| 0x1e   | MVI E,D8     | 2    |                 | E <- byte 2                             |
| 0x1f   | RAR           | 1    | CY              | A = A >> 1; bit 7 = prev bit 7; CY = prev bit 0 |
| ...    | ...           | ...  | ...             | ...                                      |
| 0xfe   | CPI D8        | 2    | Z, S, P, CY, AC | A - data                               |
| 0xff   | RST 7         | 1    |                 | CALL $38                                |


Every processor has a reference manual made by the manufacturer which will be called something like "Programmer's Eviroment Manual". The one the 8080 is called "Intel 8080 Microcomputer Systems User's Manual". I've always heard them referred to as "the data book" so that's what i'm going to call it from now on. 

Let's get our hands dirty and look at the ROM file of Space Invaders (Find the ROM file on the internet.) I'm on MAC OS X,so i'm just going to use "hexdump" command to view the contents. Find a hex editor for your platform to follow along. Here are the first 128 bytes of the invaders.h file:

```
  $ hexdump -v invaders.h    

   0000000 00 00 00 c3 d4 18 00 00 f5 c5 d5 e5 c3 8c 00 00    
   0000010 f5 c5 d5 e5 3e 80 32 72 20 21 c0 20 35 cd cd 17    
   0000020 db 01 0f da 67 00 3a ea 20 a7 ca 42 00 3a eb 20    
   0000030 fe 99 ca 3e 00 c6 01 27 32 eb 20 cd 47 19 af 32    
   0000040 ea 20 3a e9 20 a7 ca 82 00 3a ef 20 a7 c2 6f 00    
   0000050 3a eb 20 a7 c2 5d 00 cd bf 0a c3 82 00 3a 93 20    
   0000060 a7 c2 82 00 c3 65 07 3e 01 32 ea 20 c3 3f 00 cd    
   0000070 40 17 3a 32 20 32 80 20 cd 00 01 cd 48 02 cd 13    
   ...
```
This is the beginning of the Space Invaders program. Each hex number is an instruction or data for the program. We can use the data book or other reference information to see what the hex code mean. Let's look through the ROM's code a little bit. 

The first byte of this program is `$00`. Looking in that table, we find that is an `NOP`, as are the next 2 instructions. (Don't be discouraged, Space Invaders probably used this as a delay to let the system settle down a little on power up.)

The 4th instruction is `$C3`, which the table says is `JMP`. The definition of the `JMP` instruction says it takes a two byte address, so the next two bytes are the `JMP`destination. Then there are 2 more `NOP`s... you know what? I'll just do the first few instructions by hand...

```assembly
   0000 00       NOP    
   0001 00       NOP    
   0002 00       NOP    
   0003 c3 d4 18 JMP    $18d4    
   0006 00       NOP    
   0007 00       NOP    
   0008 f5       PUSH   PSW    
   0009 c5       PUSH   B    
   000a d5       PUSH   D    
   000b e5       PUSH   H    
   000c c3 8c 00 JMP    $008c    
   000f 00       NOP    
   0010 f5       PUSH   PSW    
   0011 c5       PUSH   B    
   0012 d5       PUSH   D    
   0013 e5       PUSH   H    
   0014 3e 80    MVI    A,#0x80    
   0016 32 72 20 STA    $2072    
```

It seems like there should be some way to automate this... 
