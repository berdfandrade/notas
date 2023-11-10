# Nginx

*Nginx* (lê-se engine x) é um servidor leve de HTTP, proxy reverso, proxy de e-mail IMAP/POP3 feito por Igor Sysoev em 2005, sob licensa BSD-like2-clause.

O Nginx consome menos memória que o Apache pois lida com requisições web do tipo "event-based web server"; e o Apache é baseado no "process based server", podendo trabalhar juntos. É possível diminuir o consumo de memória do Apache, passando as requsições Web primeiro no Ngix, assim, o Apache não precisa servri arquivos estáticos, e pode depender do bom controle de cache feito pelo Nginx.

O Wikipedia utiliza Nginx como um servidor de terminaução SSL, o qual é responsável por requisições TLS, e repassar para outros servidores na rede, diminuindo assim a carga sobre outros servidores.

Desde a versão 5.2, o sistema operacional OpenBSD utiliza o Nginx como parte do sistema base, provendo uma alternativo ao fork do APache 1.3 que o sistema utilizava, o qual o Nginx tinha como finalidade substituir, mas que acabou sendo subistituído por uma implementação própria de httpd.

### Adoção de Nginx

Segundo pesquisa sobre servidres web, o Nginx se mostrou o segundo servidor web mais utiklizado entre os sites ativos na web pesquisados, sen utilizados por 15,33% destes.

### Caracterísricas básicas 

- Manipulação de arquivos estáticos, auto-indexação de arquiv; cache de descritor de arquivo aberto.
- Proxy reverso acelerado com cache, balancemaneto de carga simples e tolerância a falhas; 
- Suporte acelerado com cache : `FastCGI`, uWSGI, SCGI e servidores memcached; balanceamento de carga simples e tolerância a falhas;
- Arquitetura modular. Filtros incluem gzipping, intervalos de bytes, respostas dentro de uma página única podem ser processadas em paralelo se forem manuseadas pelos servidores de proxy ou FastCGI. 
- SSL e TLS apoio SNI.


