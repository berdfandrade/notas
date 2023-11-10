# Woker 

A interface *Worker* da _API do Web Worker_ representa uma tarefa em background (segundo plano) que pode ser facilmente criada e emitir mensagens de volta ao seu criador. Criar um worker é possível chamando o construtor `Worker("path/to/worker/script")` e especificando um script para ser executado em sua própria thread.

Um worker pode, por sua vez, gerar outros workers, contanto que estes estejam hospedados na mesma origem da página principal (Nota: workers aninhados _não estão atualmente implmentados no Blink). Além disso, workers podem utilizar XMLHttpRequest para E/S de rede, desde que seja estipulado que os atributos `responseXML`e `channel` em `XMLHttpRequest` retorne sempre `null`.

Não são todas as interfaces e funções que estão disponíveis para o script associado a um `Worker`.

## Construtores

Criar um worker dedicado da wrb que executa o script especificado na URL. Workers também podem ser construídos usando *Blobs*

## Propriedades 

_Herda_ as propriedades do pai, EventTarget, e implementa as propriedades que compõem o AbstractWorker

#### Manipuladores de Eventos

`AbstractWorker.onerror` 
    Um EventListener é chamado sempre quando um `ErrorEvent`do tipo `error`é passado através do worker. Este é herdado pelo `AbstractWorker`.
    
