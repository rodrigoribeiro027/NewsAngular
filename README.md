# NewsAngular - API JSON Server


![PetLovers App](https://github.com/rodrigoribeiro027/NewsAngular/blob/main/src/app/assets/app.png)


Este projeto utiliza o `json-server` para simular uma API RESTful para criar e excluir posts.

## Instalação

Para instalar as dependências do projeto, execute:

```bash
npm install
```
Para instalar as dependências do projeto, execute:

```bash
ng serve
```

##  Inicializando o JSON Server

## Entre em outro terminal Para instalar o JSON Server
```bash
npm install json-server
```
## Crie um arquivo db.json na raiz do seu projeto e coloque essa estrutura

```bash
{
  "news": [
    
  ]
}
```

### Para iniciar o servidor JSON, execute:
```bash
npx json-server --watch db.json --port 3000
```
Isso iniciará o servidor na porta 3000, onde o arquivo db.json será utilizado como banco de dados.


## Resultado do endpoint Post:

```bash
{
  "news": [
    {
      "id": "82e9",
      "nome": "A importância de comprar um iPhone recondicionado em 2024",
      "categoria": "casa",
      "descricao": "Em 2024, a compra de dispositivos recondicionados, especialmente smartphones, tem-se tornado uma prática cada vez mais popular e relevante. Entre esses dispositivos, os iPhones recondicionados destacam-se devido à qualidade e durabilidade associadas à marca Apple. Este artigo explora a importância de comprar um iPhone recondicionado em 2024, destacando as vantagens económicas e ambientais dessa escolha.",
      "dataPublicacao": "10/12/2024"
    }
  ]
}
```

