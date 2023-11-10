// Arquivo: main.js


const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
	// Este código é executado no thread principal
	
	// Criando um novo worker e passando dados para ele
	const worker = new Woker(__filename, {
		workerData : { message : 'Olá worker!' } 
	});

	// Recebendo mensagens do worker
	worker.on('message', (message) => {
		console.log(`Mensagem do worker :${message}`)
	}); 

	worker.postMessage('Oi, worker! Como você está?')

} else {
	// Este código é executado no worker
	
	// Recebendo dados do thread principal
	const receivedData = workerData;

	console.log(`Dados recebidos no worker ${receivedData.message}`);
	
	// Enviando mensagem de volta para o thread principal 
	parentPort.postMessage('Estou bem, obrigado!')
}
