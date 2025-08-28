# API DOG QWIK

Projeto feito com  o framework**Qwik** para pesquisar raças de cachorro 

---

## 🛠 Tecnologias

- [Qwik] 
- CSS  

---

## 🚀 Pré-requisitos

- [Node.js] 

### Pricipais Dependencias 

- `@builder.io/qwik` → núcleo do Qwik  
- `@builder.io/qwik-city` → para rotas e SSR  
- `vite` → bundler e servidor de desenvolvimento  
- `vite-plugin-qwik` → integração do Qwik com o Vite


---

## 📥 Passo a passo para rodar o projeto

1 - Instale o qwik 
   ```bash
npm create qwik@latest
 ```

   2- Acesse seu projeto
 ```bash
cd nome-do-seu-projeto
```      


   3 - Para rodar o projeto em modo desenvolvedor utilize 
 ```bash
npm run dev
```
### Subir para o Git
 Para pode subir seu projeto para o github devera realizar os seguintes passos
 1 - Rodar o Gh Pages no seu Projeto
 ```bash
npm install --save-dev gh-pages
```
2 - Apos isso deve se fazer uma alteração no deploy do package.json no trecho dos script
```bash
 "deploy": "gh-pages -d dist"
```

3- Apos isso para subir para seu repositorio deve se rodar esses comandos
```bash
npm run build
npm run deploy
```

## Static Site Generator (Node.js)

Be sure to configure your server to serve very long cache headers for the `build/**/*.js` files.

Typically you'd set the `Cache-Control` header for those files to `public, max-age=31536000, immutable`.

```shell
npm run build.server
```
