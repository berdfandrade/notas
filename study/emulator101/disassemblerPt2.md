# Disassembler pt 2 

Run your disassembler on the invaders.h ROM file and let's look at the output. 

```c 
  0000 NOP    
   0001 NOP    
   0002 NOP    
   0003 JMP    $18d4    
   0006 NOP    
   0007 NOP    
   0008 PUSH   PSW    
   0009 PUSH   B    
   000a PUSH   D    
   000b PUSH   H    
   000c JMP    $008c    
   000f NOP    
   0010 PUSH   PSW    
   0011 PUSH   B    
   0012 PUSH   D    
   0013 PUSH   H    
   0014 MVI    A,#$80    
   0016 STA    $2072    
   0019 LXI    H,#$20c0    
   001c DCR    M    
   001d CALL   $17cd    
   0020 IN     #$01    
   0022 RRC    
   0023 JC     $0067    
   0026 LDA    $20ea    
   0029 ANA    A    
   002a JZ     $0042    
   002d LDA    $20eb    
   0030 CPI    #$99    
   0032 JZ     $003e    
   0035 ADI    #$01    
   0037 DAA    
   0038 STA    $20eb    
   003b CALL   $1947    
   003e SRA    A    
   003f STA    $20ea    

   /*    
   0000000 00 00 00 c3 d4 18 00 00 f5 c5 d5 e5 c3 8c 00 00    
   0000010 f5 c5 d5 e5 3e 80 32 72 20 21 c0 20 35 cd cd 17    
   0000020 db 01 0f da 67 00 3a ea 20 a7 ca 42 00 3a eb 20    
   0000030 fe 99 ca 3e 00 c6 01 27 32 eb 20 cd 47 19 af 32    
   */    

```

The first instructions match what we hand assembled before. After that, you can see some new instructions. I pasted the hex data in below for reference. Notice that if you compare the memory with the instructions, it looks like the addresses are stored backward in memory. They are. This is called little endian - little endian machines like the 8080 store the smaller bytes of numbers in memory first. 
