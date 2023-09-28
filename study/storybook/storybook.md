# O que é o Storybook 

O Storybook é uma ferramenta de desenvolvimento para criar, testar e documentar componentes de interface do usuário (UI) de forma isolada e interativa. Ele é especialmente útil para projetos de desenvolvimento fron-end, onde os componentes de UI desempenham um papel fundamental. 

#### Principais vantagens do Storybook 

1 - *Isolamento de Componentes:* O storybook permite que você desenvolva, teste e visualize componentes de UI de forma isolada. Isso significa que você pode trabalhar em um componente específico sem a necessidade de implementar o contexto completo de sua aplicação

2 - *Documentação viva:* O storybook é uma ótima ferramenta para criar documentação viva dos seus componentes. Você pode adicionar histórias (stories) que descrevem diferentes estados e casos de uso dos componentes, tornando mais fácil para os desenvolvedores entenderem como usá-los.

3 - *Teste interativo:* Você pode interagir com os componentes no Storybook e ver como eles se comportam em diferentes cenários. Isso facilita a detecção de problemas de usabilidade e de design antes mesmo de integrar os componentes em sua aplicação.

4 - *Reutilização e consistência:* O storybook promove a reutilização de componentes e a consistência visual em toda a aplicação. À medida que você desenvolve eaprimora componentes no Storybook, pode ter certeza de que eles serão usados de maneira consistente em toda a aplicação.

5 - *Integração com Frameworks e Bibliotecas:* O Storybook é compatível com uma variedade de frameworks e bibliotecas populares, como React, Vue, Angular, etc. Isso o torna versátil e adequado para uma ampla gama de projetos front-end.

6 - *Comunidade Ativa e Ecossistema:* O storybook possui uma comunidade ativa e um ecossistema de plugins que ampliam suas funcionalidades. Isso significa que você pode estender o Storybook de acordo com as necessisades do seu projeto.

### Aplicabilidade para compoentes front-end

O Storybook é especialmente útil para o desenvolviemento de componentes de front-end, onde a interface do usuário é composta por diversos elementos visuais e interativos. Aqui estão algumas maneiras pelas quais o Storybook é aplicável.

*Desenvolvimento de Componentes Reutilizáveis:* Use o Storybook para criar e testar componentes UI que podem ser reutilizados em várias partes da sua aplicação.

*Teste de componentes isolados:* O Storybook permite testas componentes individualmente, ajudando a garantir que funcionem conforme o esperado antes de integrá-los ao projeto principal

*Criação de Documentação de Componentes:* Documente seus componentes por meio de histórias no Storybook, tornando mais fácil para outros membros da equipe entenderem como usá-los corretamente.

*Iteração e Design Centrado no Componente:* Use o Storybook como uma ferramenta para iteração de design, experimentando diferentes variações e estados de um componente antes de implementá-lo completamente na aplicação.

*Colaboração na Equipe:* O Storybook é uma ferramenta colaborativa que permite que desenvolvedores, designers e outros membros da equipe colaborem no desenvolvimento e teste de componentes de UI.

Em resumo, o Storybook é uma ferramenta poderosa para o desenvolvimento de componentes de front-end, oferecendo vantagens como isolamento, documentação viva e teste interativo. Ele ajuda a melhorar a qualidade e a consistência do código de interface do usuário.

#### Exemplo de componenete React e configuração do Storybook

Suponhamos que você tenha um componente React simples como este:

```jsx
// ComponenteReact.js

const MeuComponente = ({texto} => {
    return <div>{texto}</div>
})

export default MeuComponente
```

Agora, vamos configurar o Storybook para este componente

#### Instação do Storybook

primeiro, você instala o storybook no seu projeto. Você pode fazer isso executando os seguintes comandos no terminal: 

```bash
npx sb init
```

Isso irá iniciar o assistente de configuração do Storybook e configurar a estrutura básica do seu projeto.

#### Criar histórias (stories) para o seu componente

No diretório do seu projeto, você verá um diretório chamado `.storybook`.
Dentro deste diretório, crie um arquivo chamado `main.js` (ou ajuste um arquivo existente, dependendo da configuração).

Detrno do `main.js`, você pode configurar o Storybook de acordo com as necessidades do seu projeto. 

Agora, crie um diretório chama `.stroies` na raíz do seu projeto. Dentro desse diretório, crie um arquivo chama `SeuComponente.stories.js`. Neste arquivo, você irá criar histórias para o seu componente. Por exemplo:

```javascript
import React from 'react'
import Seucompontente from '../SeuComponente'

export default { 

title : 'SeuComponente' 
component: SeuComponente, 

}

// Exemplo de história com diferentes estados do componente

export const Default = () => <SeuComponente text="Heello, Storybook!"/>
export const OutroEstado = () => <SeuComponente texto="Outro estado"/>

```

#### Iniciar o storybook

```bash
npm run storybook
```

Isso iniciará o servidor local do SB e abrirá uma página no seu navegador onde você poderá ver e interagir com o seu componente em diferentes estados de acordo com as histórias que você criou

Claro, vou lhe mostrar alguns exemplos de histórias mais complexas no Storybook para demonstrar como você pode lidar com casos mais avançados.

**1. Componente com múltiplas propriedades:**

Suponha que você tenha um componente que aceita várias propriedades. Você pode criar histórias para diferentes combinações de propriedades para testar o comportamento do componente:

```jsx
import React from 'react';
import SeuComponente from '../SeuComponente';

export default {
  title: 'SeuComponente',
  component: SeuComponente,
};

export const Default = () => (
  <SeuComponente texto="Hello, Storybook!" corFundo="white" corTexto="black" />
);

export const ComFundoAzul = () => (
  <SeuComponente texto="Blue Background" corFundo="blue" corTexto="white" />
);

export const TamanhoGrande = () => (
  <SeuComponente texto="Large Size" tamanho="large" />
);
```

**2. Componente com interatividade:**

Se o seu componente tem comportamentos interativos, como um botão que muda de estado quando clicado, você pode criar histórias para demonstrar esses comportamentos:

```jsx
import React, { useState } from 'react';
import BotaoInterativo from '../BotaoInterativo';

export default {
  title: 'BotaoInterativo',
  component: BotaoInterativo,
};

export const Padrao = () => {
  const [ativo, setAtivo] = useState(false);

  return (
    <BotaoInterativo ativo={ativo} onClick={() => setAtivo(!ativo)}>
      Toggle Ativo
    </BotaoInterativo>
  );
};
```

**3. Componente com múltiplas variações:**

Para um componente que possui várias variações, como diferentes estilos ou estados, você pode criar histórias para cada uma delas:

```jsx
import React from 'react';
import Card from '../Card';

export default {
  title: 'Card',
  component: Card,
};

export const Normal = () => <Card>Conteúdo normal</Card>;

export const Destacado = () => <Card destacado>Conteúdo destacado</Card>;

export const ComBotao = () => (
  <Card>
    Conteúdo com botão
    <button>Botão</button>
  </Card>
);
```

**4. Componente com propriedades dinâmicas:**

Se o seu componente aceita propriedades que podem ser geradas dinamicamente, você pode criar histórias que demonstrem essas variações com dados diferentes:

```jsx
import React from 'react';
import ListaItens from '../ListaItens';

export default {
  title: 'ListaItens',
  component: ListaItens,
};

const itens = [
  { id: 1, texto: 'Item 1' },
  { id: 2, texto: 'Item 2' },
  { id: 3, texto: 'Item 3' },
];

export const ListaPadrao = () => <ListaItens itens={itens} />;

export const ListaVazia = () => <ListaItens itens={[]} />;
```

Esses são apenas exemplos básicos de histórias mais complexas no Storybook. A estrutura de histórias no Storybook permite que você crie cenários de teste abrangentes para seus componentes front-end, o que é particularmente útil para garantir que eles funcionem corretamente em várias situações e estados. Você pode adaptar as histórias de acordo com as necessidades específicas do seu projeto.

