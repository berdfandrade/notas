# Cliente React 

No lado do cliente React, você pode usar o código fornecido na resposta anterior: 

```jsx
import React, {useState} from 'react' 
import axios from 'axios' 

function ImageUpload() {
    const [image, setImage] = useState(null)
    
    const handleImageUpload = async () => {
        const formData = new FormData();
        formData.append('image', image) 

        try {
            const reponse = await axios.post('/upload', formData);
            console.log(response.data);
        } catch (error) {
            console.log(error); 
        }
    }

    return (
        <div> 
            <input type="file" onChange{(e) => setImage(e.target.files[0]}/>
            <button onClick={handleImageUpload}> Enviar Imagem </button> 
        </div> 
    );

}

export default ImageUpload
```

Certifique-se de ajustar a URL de envio (usando `axios.post`) de acordo com a URL do seu servidor. 

Lembre-se de adicionar validações de segurança e gerenciar o armazenamento e recuperação de iamgens do MongoDB ou sistema de arquivos, dependendo de onde você deseja salvar as imagens. Além disso, considere adicionar autenticação e autorização para proteger as rotas de upload, dependendo dos requisitos do seu aplicativo. '
