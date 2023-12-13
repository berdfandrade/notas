# Registers 

The Game Boy has eight 8 bit registers: A,B,C,D,E,F,H and L, as well two 16 bit registers: SP, and PC. Initially i implemented the registers like so:

```c 
struct registers{
    unsigned char a;
    unsigned char b;
    unsigned char c;
    unsigned char d;
    unsigned char e;
	unsigned char h;
	unsigned char l;
	unsigned char flags;
	unsigned short sp;
	unsigned short pc;
} extern registers; 
```

While this model is fine for dealing with instructions that access the 8 bit registers individually, what I didn't realise is that often the 8 bit registers are grouped together to form the 16 bit registers: AF, BC, DE, and HL.

 I revised my register structure to make accessing grouped registers easier: 

```c 
struct registes {
    struct {
        union {
            struct {
                unsigned char f;
                unsigned char a; 
            };
            unsigned short af;
        };
    };
};
```

