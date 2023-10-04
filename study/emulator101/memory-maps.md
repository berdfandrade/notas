# Memory Maps

There is one more detail to cover before we begin to write theCPU emulator. All the CPUs have the ability to talk to a certain number of addresses. For old processors, this is either 19, 24 or 32 bit address. The 8080 has 16 address pins, so its addresses will be 0-$FFFF. 

We are going to use some research to find the game's memory map. Combining information... I learn that the game's ROM is located at address 0, and the game has 8K of RAM starting at address $2000.

The author of one of the pages volunteers that the video buffer starts in the RAM at $2400, and also tells us how the 8080's I/O ports are used to talk to the controls and the sound hardware.

The invaders.zip ROM file that is around the net has 4 files in it, invaders.e, .f .g and .h. Googling led me to an informative write up that told me how put those files into memory:

``` 
   Space Invaders, (C) Taito 1978, Midway 1979    

   CPU: Intel 8080 @ 2MHz (CPU similar to the (newer) Zilog Z80)    

   Interrupts: $cf (RST 8) at the start of vblank, $d7 (RST $10) at the end of vblank.    

   Video: 256(x)*224(y) @ 60Hz, vertical monitor. Colours are simulated with a    
   plastic transparent overlay and a background picture.    
   Video hardware is very simple: 7168 bytes 1bpp bitmap (32 bytes per scanline).    

   Sound: SN76477 and samples.    

   Memory map:    
    ROM    
    $0000-$07ff:    invaders.h    
    $0800-$0fff:    invaders.g    
    $1000-$17ff:    invaders.f    
    $1800-$1fff:    invaders.e    

    RAM    
    $2000-$23ff:    work RAM    
    $2400-$3fff:    video RAM    

    $4000-:     RAM mirror    

```

There is some other good info there too, but i don't think we're ready for it quite yet.

#### Gory Details

If you want to know how much address space a processor has, you could figure it out by look at its specs. The 8080 spec shows that are 16 address pins on it, so it uses a 16-bit address (Or just read the data book, or Wikipedia, or google)

Space Invaders has plenty of hadware information available on the internet. If you weren't able to have that information you could figure it out in a couple of ways: 

- Watch the code run in your emulator and figure out what is doing. Make notes and observe. It would be fairly easy to figute ou, for instance, where the game's code thinks RAM should be. It would also be easy to figute out where the hame thinks the video memory lives (We'll spend some time going through that). 

- Get the game's schmatic and trace the signals from the CPU's address pins. See where they go. For instance A15 (the highest address) might go only to the ROM. From that you could deduce that ROM address would start at $8000. 

It might be fun and educational to try to figure that out by yourself by watching the code execute. Someone had to do that to figure it out the first time. 



