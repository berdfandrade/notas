# WebSockets 

WebSockets é um tecnologia avançada que torna possível abrir uma sessão de comunicação interativa entre o navegador do usuário e um servidor. Com esta API, você pode enviar mensagens para um servidor e receber respostas orientadas a eventos sem ter que consultar o servidor para obter uma resposta. 

### Documentação 

#### Criando um objeto WebSocket 

Para se comunicar utilizando o protocolo WebSocket, você precisar criar um objeto `WebSocket`, que automaticamente tentará abrir a conexão com servidor. 

O construtor WebSocket aceita dois compos, um obritatório e um opcional: 

```javascript
WebSocket WebSocket (
    in DOMString url,
    in optional DOMString protocols
);

```

`url`

A URL para se conectar. Esta deve ser a URL para o qual o WebSocket irá responder. 

`protocols`

Uma única string indicando o protocolo ou uma _array_ de strings de protocolos. EStas strings são usadas para indicar sub-protocolos, de uma forma que um único servidor pode implementar múltiplos sub-protocolos WebSocket (por exemplo, você pode querer que um servidor seja capaz de lidar com diferentes tipos de interações a depender do `protocol` especificado). Se não especificar uma string de protocolo, uma string vazia é assumida.



