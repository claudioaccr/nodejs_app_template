# Template de uma aplicação Nodejs baseado em Docker

# Instalar

```javascript
    // Clone o projeto e instale os pacotes NPM
    npm install

```

# Executar a aplicação

```javascript
    node server.js

```

# Construir uma imagem personalizada

```bash
    docker build -t <nome_imagem:versao> .

```

# Executar o container baseado na imagem construída

```bash
    docker run -it -d -p <porta_local:3000 <nome_imagem:versao>

```
