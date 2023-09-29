# WebSocket.IO

- É diferente do WebSocket normal, e eles não funcionam em conjunto
```
WebSocket !== webSocket.IO
```
## Iniciando um server com o webSocket

O server no caso vai ser o "point" onde vamos receber os clients que ficam conectados, e assim vamos lidar com as solicitações que vem de cada client.


```javascript

const {Server} = require("socket.io")
const io = new Server({/**/});

io.on('connection', (socket) => {
    // ... 
})

io.listen(3000)
```

Você também pode colocar a port como primeiro argumento;

```javascript

const {Server} = require("socket.io")
// ou também colocar a port em uma const, etc... 
const io = new Server(3000, {/**/});

io.on('connection', (socket) => {
    // ... 
})

```

Essa forma de iniciar o servidor, implicidamente começa um servidor Node.js HTTP, que pode ser acessado pelo io.httpServer

## Lidando com o client 

No caso do client, importamos usando o ES modules da forma tradicional

```javascript

import { io } from "socket.io-client"

```

Mas caso seu front esteja servido no mesmo domínio que seu server, você pode fazer simplesmente:

```javascript

const socket = io()

```

### Domínio diferente

```javascript

const socket = io("https://server-domain.com")

```

Nesse caso é importante ter certeza que o CORS esteja habililitado

## Lidando com o CORS

Desde o Socket.IO v3 você precisa explicitamente habilitar o CORS (Cross Origin Resource Sharing)

```javascript

import { createServer } from "http"
import { Server } from "socket.io"

const httpServer = createServer()
const io = new Server(httpServer, {
    cors : {
        origin: "https://example.com"
    }
})

```

Parece que você deve habilitar o cors, porém o CORS do Socket.IO que é diferente daquele cors que eu estava acostumado... cors da biblioteca CORS do npm

### Exemplo com cookies

```javascript

// Server side
const io = new Server(httpServer, {
    cors : {
        origin : "https://example.com",
        allowedHeaders : ["my-custom-header"],
        credentials: true
    }
})

import { io } "socket.io-client"
const socket = io("https://api.example.com", {
    withCredentials : true,
    extraHeaders : {
        "my-custom-header" : "abcd"
    }
});

```

Nota: Isso também se aplica se a sua aplicação e o seu server não são servidos na mesma porta

```javascript

const io = new Server(httpServer, {
    cors : {
        origin : "http://localhost:8080"
    }
})

httpServer.listen(3000)

```
