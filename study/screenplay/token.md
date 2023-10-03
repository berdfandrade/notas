# Tokens 

_Isso pode ser interessante de saber._

Em Typescript e Javascript, o termo "toke" refere-se a unidades individuais de código-fonte que o interpretador ou compilador do idioma processa durante a análise léxica. A análise léxica é a primeira etapa do processo de compilação ou interpretação, na qual o código-fonte é dividido em tokens para que o computador possa entender a estrutura do programa. 

_Isso pode ser útil para poder separa o que é o que no JSON. Por exemplo, o que é Cena, o que é personagem, o que é transição... etc..._

Aqui estão alguns exemplos de tokens comuns em Typescript e Javascript: 

 1 - *identificadores:*
    - Tokens que representam nome de variáveis, funlçies, classes, etc. Exemplos: 
```javascript 
let nome = "John" // Nome é um identificador 
function calcularSoma (a, b) {} // calcularSoma é um identificador
```

2 - *Palavras-chave(Keywords)*:
    - Palavras reservadas do idioma que têm significados especiais. Exemplos: 

```javascript
if (condição) {} // "if é uma palavra-chave"
class MinhaClasse {} // "Class" é uma palavra-chave
```

3 - *Operadores*
 - Tokens que representam oeprações matemáticas, lógicas de atribuição. Exemplos: 

```javascript
let soma = a + b; // "+" é um operador
if (x === 5) {} // "===" é um operador
```

4 - *Literais*
    - Tokens que representam valores literais, como números, strings, objetos e arrays. Exemplos: 

```javascript
let numero = 42; // "42" é um literal numérico
let texto = "Olá, mundo!"; // "\"Olá, mundo!\"" é um literal de string
let objeto = { chave: "valor" }; // "{}" é um literal de objeto 
```

5 - *Delimitadores*
    - Tokens que representam delimitadores, como parênteses, chaves e colchetes. Exemplos: 

```javascript
if (condição) {} // "(" e ")" são delimitadores
let meuArray = [1, 2, 3]; // "[" e "]" são delimitadores
```

6 - *Comentários*:

    - Tokens que representam comentários no código, que são ignorados pelo interpretador ou compilador. Exemplos:

```javascript
// Este é um comentário de linha única
/*
Este é um comentário de várias linhas
*/
```

7 - *Outros*
    - Existem outros tokens, como operadores de atribuição, operadores de incremento/decremento, operadores ternários, etc., que desempenham papéis específicos na linguagem.

Os tokens são a base da análise léxica e são usados pelo interpretador ou compilador para criar uma representação estruturada do código-fonte, que é então usado para realizar a análise sintática e a execução do programa (no caso de linguagens interpretadas) ou gerar código de máquina (no caso de linguagens compiladas).
