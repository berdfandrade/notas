#include <stdio.h>
#include <stdlib.h>
#include <fcntl.h>
#include <unistd.h>
#include <string.h>

int main(){
    int fd; // File descriptor 

    // Abrindo um arquivo (ou criando se não exisitir) com a syscall open()
    // O arquivo é criado com permissões de leitura e escrita para o usuário

    fd = open("exemplo.txt", O_CREAT, | O_WRONLY | O_TRUNC, S_IRUSR | S_IWUSR);
    if(fd == -1){
        perror("Error ao abrir o arquivo");
        exit(EXIT_FAILURE); 
    }


}
