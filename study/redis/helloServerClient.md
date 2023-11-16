# Hello Server/Client 

This chapter continues the introduction of socket programming. We’ll write 2 simple
(incomplete and broken) programs to demonstrate the syscalls from the last chapter. The first programm is a server, it accepts connections from clients, reads a single message, and writes a single reply. The second program is a client, it connects to the server, writes a single message, and reads a single reply. Let's start with the server first.

First, we need to obtain a socket fd: `int fd = socket(AF_INET, SOCK_STREAM, 0);`

The `AF_INET` is for IPv4, use `AF_INET6` for IPv6 or dual-stack socket. For simplicity, we'll just use `AF_INET`. 

The `SOCK_STREAM` is for TCP. We won't use anything other than TCP. All the 3 parameters of the `socket()` call are fixed. 

Next, we'll introduce a new syscall: 

```c
int val = 1;
setsockopt(fd, SOL_SOCKET, SO_REUSEADDR, &val, sizeof(val));
```