# H3frontend 

- Entender "Application error: A client-side exception has occurred (see the browser console for more information):

    - Olhando o console, tive esses errors:
        - Error: Failed to lookup route:/ h 
        NextJS
        main
    - Uncaught (in promise) Error: Invariant: attempted to hard navigate the same URL / localhost:3000/ 

Esse primeiro erro pela chatGPT: 

Esse erro ocorre quando há uma tentativa de navegar para a mesma URL que a aplicação já está naquele momento. Isso geralmente indica um problema de *roteamento*
(_Já temos uma palavra aí_) ou navegação em uma aplicação web, como uma aplicação construída em _Next.js_, React Router, ou outro sistema de roteamento. 

A mensagem de erro é produzida pelo pacote `ìnvariant`, que é frequentemente usado em bibliotecas JavaScript para sinalizar condições de erro críticas que não devem ocorrer em um aplicativo saudável. 

Aqui estão algumas causas comuns e soluções para esse erro:

*Navegação redundante:* Verifique seu código de navegação para garantir que vocênão esteja tentando navegar para a mesma rota que a aplicação já está. Isso podeacontecer, por exemplo, se você tiver um botão ou link que navega para a página atual. 

````jsx
<Link to ="/">Página Inicial</Link>
```

Certifique-se de que a navegação ocorra apenas quando necessário.

*Verifique Redirecionamentos:* Se você estiver usando middleware ou componentesde roteamento personalizados, revise-os para garantir que eles não estejam causando navegação redundante. 

*Middleware ou Componentes de Roteamento:* Se você estiver usando middleware ou componentes de roteamento personalizados, reviso-os para garantir que a lógica do seu aplicativo que lida com a navegação. Pode haver uma lógica condicional que resulte um navegação para a mesma rota várias vezes...

_Posso imaginar que esse problema venha do trecho de código que o pessoal da equipe fez aqui: _

```jsx
  return (
    <div>
      <ThemeProvider>
        <ModalProvider>
          {router.pathname === '/' ? null : <Navbar />}
          <Component {...props} />
        </ModalProvider>
      </ThemeProvider>
    </div>
  );
}

``` 
*Verifique a lógica de navegação:* Revise a lógica do seu aplicativo que lida com a navegação. Pode haver uma lógica condicional que resulte em navegação para a mesma rota várias vezes.

*Depuração:* Use ferramentas de depuração do navegador, como as guidas "console" e "Network", para obter mais informações sobre o erro e o fluxo de navegação. Isso pode ajudar a identificar onde o problema está ocorrendo. 

*Verifique dependências:* Se você esiver usando *bibliotecas de terceiros*para roteamento ou navegação, verifique se elas estão atualizadas para as versões mais recentes e se há problemas conhecidos relacionados a esse erro. 

#### chatGPT sobre o trecho de código acima: 

o trecho de código que você compartilhou não parece ser a fonte direta do erro "Uncaught (in promisse) Error: invariant" attempted to hard navigate (...). No entanto, ele pode estar relacionado indiretamente ao problema, dependendo de como o roteamento é gerenciado na sua aplicação. 

O código que você compartilhou parece ser uma parte de um componente layout que envolve o componente da página principal (`Component`) e um component de Navbar. Neste trecho de código, o componete `Navbar` só é renderizado quando a rota não é a raiz ("/"). _O que implicitamente poderia indicar que existe uma página HOME que não possui a Navbar. 

Para resolver o erro, você pode revisar o restante do código em sua aplicação especialmente a lógica de roteamento e a maneira como as navegações são tratadas em outras partes do códgio. Certifique-se de que não haja tentativas redundantes de navegar para a mesma rota. 

Vou partir do presuposto que é um problema de roteamento... Pode não ser, mas preciso partir de algum lugar.

#### É errado colocar um arquivo _app.tsx dentro da pasta pages do next?

Não é errado colocar um arquivo `_app.tsx` dentro da pasta "pages" em uma aplicação Next.js. Na verdade é uma prática comum em Next.js e faz parte da configuração padrão do framework.

- Já podemos ver que o problema não parece ser esse.

O arquivo `_app.tsx_` é um dos arquivos especiais que o Next.js reconhece automaticamente. Ele é usado para envolver todos os componentes de página (aqueles dentro da pasta "pages") com um layout comum ou para adicionar lógica dealto nivel à sua aplicação, como configuração de temas, autenticação, entre outras coisas. 

Dentro do arquivo `_app.tsx`, você normalmente define um componente personalizado que serve com o "envoltório" para todas as páginas em seu aplicativo. Esse compoenente é renderizado em torno de todas as páginas, proporcionando um local central para configurar o layout, fornecer contextos, estilos globais e executar outras ações globais que você desejar. 

Aqui está um exemplo simples de um arquivo `_app.tsx`

````ts
// pages/_app.tsx
import { AppProps } from 'next/app';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  // Aqui você pode adicionar lógica de alto nível, como autenticação, temas, etc.
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

``` 

Lembrando que o nome `_app.tsx` é uma convenção do Next.js e é usado automaticamente pelo framework para configurar o aplicativo. Você pode personalizar esse arquivo de acordo com as necessidade do seu projeto e usá-lo para adicionar funcionalidades globais à sua aplicação. 

Erros que aconteceram com o `yarn build`

Os erros e avisos apresentados no resultado da execução do comando ``yarn run next build` podem ser divididos em duas partes:

1 *Erro de importação em ``chakra-react-select`:*

````javascript
Attempted import error: '@chakra-ui/icon' does not contain a default export (imported as 'Icon').

```

Este erro ocorre porque o módulo `@chakra-ui/icon` não possui uma exportação padrão (defualt export) com o nome "Icon", e o código em ``chakra-react-select` está tentando importá-lo dessa maneira. Para corrigir isso, você precisa veririfcar a versão do ``@chakra-ui/icon` que está sendo usada e o código em ´`chakra-react-select` para garantir que a importação seja feita corretamente. Pode ser necessário para garantir que a importação seja feira corretamente. Pode sernecessário atualizar as dependências ou o código, depedendo do problema específico. 


2 *Aviso sobre uma página sem um componente React válido*

```javascript
Build optimization failed: found page without a React Component as default export in 
pages/streamerLiveHistory

```

Este aviso indica que a página pages/streamerLiveHistory não tem um componente React válido exportado como padrão. Para que o Next.js possa processar essa página corretamente, ela deve exportar um componente React válido como seu valor padrão. Verifique o conteúdo do arquivo pages/streamerLiveHistory e certifique-se de que ele exporte um componente React.

Para resolver esses problemas: 

- Corrija a importação em ``chakra-react-select`para se adequar à versão específica de `@chakra-ui/icon`

- Verifique o arquivo pages/streamerLiveHistory e certifique-se de que ele exporte um componente React válido como seu valor padrão.

Uma coisa que pode ter aconteceido foi que eles não fizeram uma instalação comum para a mistura de frameworks Chakra-ui + Next.js. 

- Verificar a documentação da chakra-ui para conferir como deve ser feita a instalção junto ao next. 

- Testando a configuração aqui, já percebi que há sim um problema com a chakra-ui e o next js, nesse repositório. 

# Vamos falar sobre esse erro:

O erro que você está enfrentando está relacionado a um conflito entre a depedência "typescript" e a sobreposição (override) definida em seu projeto 

````bash
Override for typescript@4.8.4 conflicts with direct dependency

```

Isso indica que você tem uma dependência direta chamada "typescript" em seu projeto que entra em confliot com uma sobreposição (override) definida em algum lugar, que define a versão do TypeScript como "4.8.4". Esse conflito entre a dependência direta ea sobreposição está causando um erro.

Aqui estão algumas etapas para resolver esse problema 

- *Verifique seu arquivo package.json* Veja se seu `package.json` em busca de sobreposiçãoes (overrides) que definam a cersão do TypeScript. Procure por uma seção chamada "overrides" ou algo semelhante. 

- *Remova a sobreposição conflitante* Se você entrar uma sobreposição que define a versão do TS como "4.8.4" remova-a ou atualize-a para uma versão compatível com sua dependência direta do TypeScript. A versão mais recente do TypeScript no momento (2021) é superior a 4.8.4, então você pode considerar atualizar para a versão mais recente se possível.


- *Verifique outras dependências* Certifique-se de verificar outras depêndencias em seu projeto que podem estar causando conflitos com o TS. Às vezes, conflitos de versão podem ocorrer quando diferentes pacotes dependem de versões específicas do TS. 

- *Limpe o cache do NPM/Yarn*: Às vezes, problemas de resoluçãpo de dependência podem ser resolvidos limpando o cache do NPM ou do Yarn. Você pode fazer isso executando o seguinte comando: 


```bash
npm cache clean --force
```

parao Yarn: 

```yarn
yarn cache clean
```

- *Execute a instalação novamente:* Após fazer as alterações necessárias em seu `package-json` para resolver o conflito, execute `npm install` ou ``yarn install` novamente para garantir que as dependências sejam instaladas corretamente, 

- *Verifique dependências do projeto*: Além disso, verifique se todas as dependências de seu projeto são compatíveis entre si em termos de versões. Pode ser útil verificar se outras dependências podem estar causando problemas de conflito.

Após seguir essas etapas, você deve ser capaz de resolver o confliot entre a dependência direta do TS e a sobreposição no seu projeto. Certifique-se de que todas as dependências estejam atualizadas para versões compatíveis e que o arquivo ``package.json` esteja configurado corretamente. 

### Problemas de dependência. 

Estou tendo problemas com as dependências, e as testando para ver de onde vem o problema de renderização. Estou re-escrevendo as dependências necessárias para instalar a chakra-ui que é adaptada para a next-ui... Vamos ver o que acontece. 

[] Fazer um `yarn install --force` para instalar as depedências originais escritas no `package.json` que veio da equipe h3.

[] Fazer um `yarn install --force` para ver se caso atualizarmos os componentes, e colocar a dependência `chakra-ui/next.js` funciona.  


# o Que era de fato o problema da tela preta

O problema era, de certa forma simples de resolver porque nossa aplicação estava pequena ainda. Aquilo é um erro um pouco complexo para se resolver no Next.JS... Porque, é um erro sem logs, e sem uma causa aparente muito óbvia ( isso é o que foi dito no stackOverflow). Por tanto, caso a aplição fosse grande. Teríamos problemas, pois precisaríamos testar todos os componentes que estão lá. 

Mas como a aplicação é pequena, não tive que testar tantas coisas. E acabei descobrindo que o erro era no componente `Body.tsx`. Algo nele não está correto. E o que eu preciso fazer, é investigar se isso tem a ver de alguma forma com as bibliotecas front-end da h3aven. 
