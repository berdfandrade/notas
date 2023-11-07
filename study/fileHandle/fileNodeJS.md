# Lidando com arquivos nas requisições Node.js 

Para pegar um arquivo enviado no corpo de uma requisição usando o Node.js, você pode utilizar a biblioteca `express`, que é um framework web popular para o Node.js. Aqui está um exemplo de como você pode fazer isso:

1 - Certifique-se de ter o Node.js instalado em seu sistema 
2- Crie um projeto Node.js e instale o Express. Você pode fazer isso executando (...) 

#### Lidando com as requisições 

Crie um arquivo JavaScript (por exemplo, `app.js`) para o seu aplicativo Express e adicione o seguinte código: 

```javascript
import express from 'express'
const PORT = 3000 

const app = express() 

app.use(express.json()) 

app.post('/upload', (req, res) => {
    // Verifica se há um arquivo no corpo da requisição com o nome 'arquivo'
    if(!req.files || req.files.arquivo) {
        return res.status(400).json({message: nenhum arquivo enviado})
    }
    
    // Caso contrário, o arquivo vai ser o req.files.arquivo, o corpo da req

    const arquivo = req.files.arquivo

    // Aqui você pode fazer o que quiser com o arquivo, por exemplo, salvar no disco

    arquivo.mv(`./uploads/${}`, (err) => {
        if (err) {
            return res.status(500).json({message : erro ao salvar o arquivo})
        }

        res.status(200).json({ message : 'Arquivo enviado com sucesso'})
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
}) 
``` 
