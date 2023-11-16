# Syscall 

Em sistemas operacionais Unix e Linux (chamadas de sistema) sã interfaces através das quais os programas solcitam serviços do kernel do OS. Elas são usadas para executar operações privilegiadas que os programas usuais não podem relaizar por si só.

As syscalls fornecem uma maneira segura e controlada de um programa solicitar ao kernel para relizar tarefas, como ler ou gravar arquivos, criar processos, alocar memória, relaizar operações de rede, entre outras. 

o "fd" em uma syscall do Linux se refere a um "file descriptor" (descritor de arquivo). NO Linux (e em sistema Unix-Like), quase tudo é tratado com um arquivo, incluindo dispositivos, sockets, pipes e arquivos em disco. Quando um programa abre ou cria um arquivo (o outro recurso que seja tratado como um arquivo), o kernel atribui a ele um file descriptor. Esse descriptor é um número inteiro que representa o recurso aberto e permite que o programa façã operações de leitura, escrita e outras operações relacionadas a esse recurso.

Por exemplo, quando um programa abre um arquivo, a syscall `open()` retorna um file descriptor que pode ser usado posteriormente para ler ou escrever nesse arquivo. Os file descriptor são então passados para outras syscalls, como `read()`, `write()`, `close()`, entre outras, para realizar operações no recurso associado. 

Por exemplo, quando um programa abre um arquivo, a syscall `open()` retorna um file descriptor que pode ser usado posteriormente para ler ou escrever nesse arquivo. Os file descriptor são então passados para outras syscalls, como `read()`, `write()`, `close()`, entre outras, para realizar operações no recurso associado.

Os file descriptors são um conceito fundamental para a comunicação entre programas e o sistema operacional no Linux e em sistemas Unix-like. Eles ajudam a gerenciar os recursos abertos pelos programas e a manipular esses recursos por meio das syscalls correspondentes. 
