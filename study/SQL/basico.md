# SQL

O SQL é uma linguagem usada para gerenciar bancos de dados relacionais. O SQL é dividido em várias categorias, incluindo DDL (Data Definition Language), DML (Data Manipulation Language) e consultas. Vamos cobrir o básico! 

1 - *DDL - Data Definition Language (Linguagem de Definição de Dados)*: 
    - *CREATE TABLE:* Usado para criar uma nova tabela em um banco de dados.
    Você define o os nomes das colunas e os tipos de dados que cada coluna deve conter. 

```sql
CREATE TABLE Exemplo (
    ID INT,
    Nome VARCHAR(50),
    Idade INT
);
```

    - *ALTER TABLE:* Permite fazer alterações em uma tabela existente, como adicionar, modificar ou excluir colunas.

```sql
ALTER TABLE Exemplo
ADD Sobrenome VARCHAR(50); 
```
    - *DROP TABLE:* Remove uma tabela e todos os dados nela.

```sql
DROP TABLE Exemplo
```

2 - *DML - Data Manipulation Language (Linguagem de Manipulação de Dados):*

    - *INSERT INTO: Usado para inserir novos registros em uma tabela

```sql
INSERT INTO Exemplo (ID, Nome, Idade)
VALUES (1, 'João', 25);
```

    - *UPDATE:* Atualiza dados em uma tabela existente. 

```sql
UPDATE Exemplo
SET Idade = 26
WHERE Nome = 'João'; 
```
    - *DELETE FROM:* Remove registros de uma tabela

```sql
DELETE FROM Exemplo
WHERE Nome = 'João'; 
```

3 - *Consultas:*
    - *SELECT:* Usado para recuperar dados de uma ou mais tabelas. Você pode especificar as colunas a serem recuperadas e filtrar os resultados.

```sql
SELECT Nome, Idade 
FROM Exemplo
WHERE Idade > 30; 
```
- *JOIN:* Usado para combinar dados de várias tabelas com base em uma condição comum. 

```sql
SELECT Clients.nome, Pedidos.Produto
FROM Clientes
INNER JOIN Pedidos ON Clientes.ID = Pedidos.ClientID; 
```

- *GROUP BY:* Usado para agrupar resultados com base em valores em uma ou mais colunas. 

```sql
SELECT Departamento, AVG(Salário) as MédiaSalário
FROM Funcionários
GROUP BY Departamento; 
```

- *ORDER BY:* Usado para classificar resultados em ordem crescente ou decrescente. 

```sql
SELECT Nome, Idade
FROM Exemplo
ORDER BY Idade DESC; 
```

Esses são os conceitos mais básicos do SQL. À medida que você avança pode explorar conceitos mais avançacos como funções, subconsultas, transações e procedimentos armazenados. A prática é fundamental para se tornar proficiente em SQL, então à medida que você aprende é uma boa experimentar consultas em um ban ode dados real ou em um abiente de treinamento. 


    
