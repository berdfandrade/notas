# JSON Web Token 

O JWT, ou JSON Web Token, é um formato compacto e autocontido para representar informaçõ~es entre duas partes de uma forma que pode ser verificada e confiável. Ele é frequentemente usado para autenticação e autorização em aplicativos web e APIs. O JWT é composto por três partes: Um cabeçalho (header), um payload e uma assinatura (signature).

### Cabeçalho (Header) 

O cabeçalho contém informações sobre como o JWT é assinado e qual algoritmo é usado para aassinatura. Ele é um objeto JSON que inclui dois campos principais
    
    - `alg` (Algoritmo) : Especifica o algoritmo de criptografia usado para assinar o token, como "HS256" (HMAC com SHA-256) ou "RS256" (RSA com SHA-256).

    - `typ` (Tipo) : Geralmente é "JWT".

O cabeçalho é codificado em Base64 e, em seguida, é aplicado uma codificação URL.

### Payload

O payload contém as informações que você deseja transmitir no token como dados do usuário ou reivindicações (claims). O payload também é um objeto JSON e pode incluir campos pré-definidos (reivindicações) ou campos personalizados. As reividicalçies podem ser divididas em três categorias: 

    - *Reivindicações registradas*: São reividicações padrão definidas pelo JWT, como "iss" (emissor), "exp" (data de expiração), "sub" (assunto), e "iat" (data de emissão) e outras.

    - *Reivindicações públicas*: São reivindicaçõe definidas pelo desenvolvedor e que não entram em conflito com as reivindicações registradas.

    - *Reivindicações privadas*: São reivindicações personalizadas definidas pelo desenvolvedor e destinam-se a serem usadas em um contexto específico.

O Payload também é codificado em Base63 e, em seguida, é aplicado uma codificação URL.

### Assinatura (Signature): 

A assinatura é usada para verificar a integridade dos dados no token e garantir que o token não tenha sido alterado por terceiros. A assinatura é garantir que o token não tenha sido aletrado por terceiros. A assinatura é calculada usando o canbeçalho codificado, o payload codificado, uma chave secreta (para algoritmos de assinatura simétrica) ou uma chave pública/privada (para algoritmos de assinatura assimétrica) e o algoritmo especificado no cabeçalho. 

O processeo de criação da assinatura pode ser representado assim: 

```javascript
signature = HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  sua-chave-secreta
)

```

ou 

```javascript
signature = RSASHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  sua-chave-privada
)

```

A assinatura é anexada ao JWT para formar o token completo.

O token JWT resultante é composto por três partes separadas por pontos (".")`<cabeçalho>.<payload>.<assinatura>.` O token pode ser transmitido de forma segura entre as partes, como um cliente e um servidor. Quando o destinatário recebe o token, ele pode verificar a assinatura usando a chave secreta ou a chave pública aprorpiada para garantir que o toke não tenha sido adulterado. Se a assinatura for válida, o destinatário pode confiar nas informações contidas no JWT.

O JWT é uma maneira eficaz de transmitir informações entre partes confiáveis e é amplamente usado em autenticação e autorização, especialmente em aplicativos web e APIs. No entanto é fundamental proteger a chave secreta ou a chave privada usada para assinar os tokens, pois qualquer pessoa que tenha acesso a essas chaves pode gerar tokens válidos. Além disso, a validade dos tokens deve ser gerenciada para garantir que eles não sejam usados após expirarem. 
