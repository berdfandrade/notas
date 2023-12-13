# Starting off

I used my own library LDFS, to create a window with a valid OpenGL context. A better choice would have been something more standard, and cross-platform,sucj as SDL, however, i went with LDFS just because i was familiar with it.

I then read through some Game Boy documents to get a better overview of the project. In hindsight, I should have spent much longer doing this so that I wouldn't have to keep looking things up later, but I was excited! 

Most of the Game Boy specific code that I wrote in the beginning, such as loading a ROM, was based heavily on other emulators. I looked at how two or three different emulators did it, and then wrote it into Cinoop in my own style. It wasn't worth trying to write code on my own just yet, I needed to have a base to work with first, before I could experiment with doing things my own way.

## Memory

Different sources can refer to memory regions differently. High RAM is sometimes called Zero Page Memory, Catridge Data is sometimes just called ROM, and if a document just says RAM, it is usually refering to the Working RAM.Being aware of this is essential when reading through documents written by different people.


