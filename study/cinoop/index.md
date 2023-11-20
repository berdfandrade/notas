# Writing a Game Boy Emulaot, Cinoop 

link : https://cturt.github.io/cinoop.html

 I've always wanted to write an emulator from scratch, but I've held off for a long time because it's probably the most advanced programming project I've ever wanted to do.

Picking a system to emulate isn't an easy choice; the standard first emulator project seems to be a CHIP-8 emulator. Reading about CHIP-8 definitely helped me to understand a lot of emulation concepts, but it seemed a bit too basic. I felt that I got enough out of just reading through other people's emulators, and that writing my own would be a pointless exercise.

On the other hand, there's the NES and Game Boy; both of which seemed far too advanced for me!

Eventually, I decided to write a minimalist Game Boy interpreting emulator, without support for custom mappers or sound, (and probably many inaccuracies). I called the project Cinoop.

Cinoop is written in C and is open source. It can be run on Windows, DS, GameCube, 3DS, Linux based OSes, PSP, and PS4.

While I wouldn't recommend trying to learn about emulation from someone as inexperienced as me, I wanted to outline the process of starting an emulator for the first time, talk about which documents were most helpful to me, and also talk about some of the design choices I went through.

