# Player de Música
Um servidor node.js usando express varre o diretório "tracks" procurando arquivos de musica e depois retorna na index esta lista com players de audio.

Coloque alguns arquivos de musica no diretório "tracks".

## Para rodar
```
npm install

npm start
```

## O Teste

### Alterar arquivos index.css e index.js na pasta public para chegar aos objetivos
### Alterar o arquivo main.js para fazer alterações de html

obs: Quando alterar o arquivo main.js é necessário reiniciar o servidor, parando e rodando novamente o `npm start`

### Objetivos Frontend

- Quando der play em uma música pare qualquer outra que estiver tocando.
- Deixar o nome da música e o player na mesma linha de maneira responsiva.
- Opcional: qualquer outra melhoria que achar interessante no design ou mesmo nas funcionalidades

### Objetivos Full Stack
Além dos objetivos de frontend acima, deve-se também:

- Transformar o backend nodejs em um backend python (utilizar uma framework como django, flask e afins preferêncialmente)
- Criar uma api REST para listar as musicas e utilizá-la para popular o frontend
