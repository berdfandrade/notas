# Workers 

Os workers permitem que você execute códigos em threads separadas, proporcionando melhor desempenho para tarefas intesivas em CPU. Aqui está um exemplo básico: 

```javascript
// Arquivo: main.js

const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
  // Este código é executado no thread principal

  // Criando um novo worker e passando dados para ele
  const worker = new Worker(__filename, {
    workerData: { message: 'Olá, worker!' }
  });

  // Recebendo mensagens do worker
  worker.on('message', (message) => {
    console.log(`Mensagem do worker: ${message}`);
  });

  // Enviando dados para o worker
  worker.postMessage('Oi, worker! Como você está?');
} else {
  // Este código é executado no worker

  // Recebendo dados do thread principal
  const receivedData = workerData;

  console.log(`Dados recebidos no worker: ${receivedData.message}`);

  // Enviando mensagem de volta para o thread principal
  parentPort.postMessage('Estou bem, obrigado!');
}

```

Neste exemplo, `main.js` é o arquivo principal que cria um novo worker. O worker é definido no mesmo arquivo (`__filename') e é configurado para receber dados por meio da propriedade `workerData`. O código no worker processa esses dados e envia um mensagem de volta para o thread principal por meio de `parentPort`.

Lembre-se de que os workers em Node.js têm suas próprias instâncias do objeto `require`, então se você precisar compartilhar módulos entre o thread principal e os workers, é necessário passar esse módulos como dados para os workers. Este exemplo é bastante simples, e em casos mais complexos, você pode precisar lidar com a comunicação assíncrona de maneira mais sofisticada. 
