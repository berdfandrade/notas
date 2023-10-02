# WebSocket IO

WebSocket é uma tecnologia que permite a comunicação bidirecional em tempo real entre um cliente (geralmente um navegador da web) e um servidor. O Socket.IO é uma biblioteca popular para lidar com WebSocket em aplicativos web.

Como configurar uma conexão WebSocket usando o Socket.IO: 

#### Configurar o servidor WebSocket:

Primeiro, você precisa configurar um servidor WebSocket. Isso pode ser feito em várias linguagens de programação. No exemplo a seguir, usaremos o Node.js para criar um servidor WebSocket simples.

```javascript
// Importe a biblioteca socket.Importe

const io = require('socket.io')(httpServer); // httpServer é uma instância do servidor httpServer

// Configurar um evento de conexão 

io.on('connection', (socket) => {
    console.log('Um cliente se conectou. ');

    // Configurar enventos para troca de mensagens 
    socket.on('mesagem', (mensagem) => {
        console.log(`Mensagem recebida: ${mensagem}`);

        // Envie uma resposta para o cliente
        socket.emit('resposta', 'Mensagem recebida com sucesso!');
    });

    // Configurar o evento de desconexão 
    socket.on('disconnect', () => {
        console.log('Um cliente se desconectou. ');
    });
});
```

#### Configurar o cliente WebSocket

No lado do cliente (geralmente em um navegador da web), você também precisará a bibliteca Socket.IO para estabelecer a conexão WebSocket. Certfique-se de incluir o script da biblioteca em sua página HTML.

```javascript
<!-- Inclua a biblioteca Socket.IO -->
<script src="/socket.io/socket.io.js"></script>

<script>
  // Conectar-se ao servidor WebSocket
  const socket = io();

  // Configurar evento para enviar uma mensagem ao servidor
  document.querySelector('#enviar').addEventListener('click', () => {
    const mensagem = document.querySelector('#mensagem').value;
    socket.emit('mensagem', mensagem);
  });

  // Configurar evento para receber uma resposta do servidor
  socket.on('resposta', (resposta) => {
    console.log(`Resposta do servidor: ${resposta}`);
  });
</script>
```

#### Trocar mensagens:

Agora, você pode trocar mensagens entre o cliente e o servidor usando os enventos personalizados que configurou ('mensagem' e 'resposta' no exemplo acima).
Quando o cliente envia uma mensagem, o servidor a recebe, processa e envia uma resposta de volta. 

#### LIdar com eventos de conexão e desconexão:

É importante configurar o código de acordo com suas necessidade específicas. Este é apenas um exemplo básico para ajudá-lo a começar a trabalhar com o WebSocket usando o Socket.IO esteja configurada corretamente em ambos os lados. 
