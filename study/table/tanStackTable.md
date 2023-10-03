# Overview 

TanStack Table's core is *framework agnostic*, which means its API is the same regardless of the framework you're using. Adapters are provided to make working with the table core easier depending on your framework. 

## Typescript 

While TanStack Table is written in TypeScript, using TypeScript in your application is option (but recommended as it comes with outstanding benefits) to both you and your codebase.

## Headless

As it was mentioned extensively in the *intro* section, TanStack IS *headless*. This means that it doesn't render any DOM elements, and instead relies on you, the UI/UX developer to provide the table's markup and styles. This is a great way to build a table that can be used in any UI framework, including React, Vue, Solid, and even JS-to-native platforms like React Native.

### Core objects and Typescript

The table core uses the following abstractions, commonly exposed by adapters:

- Column Defs:
    - Objects used to configure a column its data model, display templates, and more

- Table 
    - The core table object containing both state and application and API 

- Columns 
    - Each column mirrors its respective column def and also provides column-specific APIs

- Rows 
    - Each row mirros its respective row data and provides row-specific APIs 

- Header Groups 
    - Header groups are computed slices of nested header levels, each containing a group of headers

- Headers 
    - Each header is either directly associated with or derived from its column def and provides header-specific APIs

- Cells 
    - Each cell mirros its respective row-column intersection and provides cell specific APIs

### Em pt-br 

#### Objetos e Tipos principais: 

    Objetos e Tipos Principais: O TanStack Table possui uma série de objetos e tipos principais que você usará ao trabalhar com ele:

        Column Defs: São objetos usados para configurar uma coluna da tabela, incluindo seu modelo de dados, templates de exibição e mais.

        Table: É o objeto principal da tabela que contém tanto o estado da tabela quanto a API para interagir com ela.

        Table Data: É o array de dados que você fornece à tabela para ser exibido.

        Columns: Cada coluna espelha a respectiva definição de coluna e também fornece APIs específicas da coluna.

        Rows: Cada linha espelha os dados da linha correspondente e fornece APIs específicas da linha.

        Header Groups: São grupos de cabeçalho calculados em níveis aninhados, cada um contendo um grupo de cabeçalhos.

        Headers: Cada cabeçalho está diretamente associado ou derivado da definição da coluna correspondente e fornece APIs específicas de cabeçalho.

        Cells: Cada célula espelha a interseção de linha-coluna correspondente e fornece APIs específicas da célula.

O TanStack Table também oferece estruturas adicionais para recursos específicos, como filtragem, ordenação, agrupamento, etc.

Em resumo, o TanStack Table é uma ferramenta versátil para criar e gerenciar tabelas de dados em seu aplicativo web ou móvel. Ele é framework agnóstico, flexível e fornece uma API consistente para trabalhar com tabelas, independentemente do contexto de desenvolvimento em que você está. Para usá-lo, você precisa configurar a estrutura da tabela e seus dados de acordo com suas necessidades específicas.
