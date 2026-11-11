# Guia de publicação no GitHub Pages

Este guia descreve como publicar o website do GPTCLONE no GitHub Pages a partir de um
repositório dedicado (contendo apenas os ficheiros desta pasta, no ramo `main`), mantendo
o repositório do código principal intacto.

## Pré-requisitos

- Repositório criado com o conteúdo desta pasta (por omissão: `pedrom3160/GPT`).
  Tenha em atenção que o GitHub Pages só fica disponível em repositórios privados em planos
  pagos da conta; se a conta não tiver plano pago, a publicação exige um repositório
  público — a visibilidade só deve ser alterada de forma explícita e autorizada.
- `node` ≥ 22.12 (recomendado: 24 LTS) e `npm` ≥ 10.

## 1. Preparação local

```bash
npm install
npm run typecheck   # verificação de tipos (tsc -b)
npm run build       # gera dist/ com index.html, 404.html, robots.txt e assets
npm run preview     # valida a produção em http://127.0.0.1:4174
```

Na vista de pré-visualização, os endereços directos (ex.: `http://127.0.0.1:4174/en/technology`)
devem carregar corretamente: o fallback SPA (`dist/404.html`) serve o `index.html` para
qualquer caminho desconhecido e o React Router resolve a rota.

## 2. Base do site (importante)

Por omissão, `vite build` usa a base `/GPT/`, correspondente à URL prevista
`https://<utilizador>.github.io/GPT/`. Se o repositório tiver outro nome e
continuar a ser um *project site*, sobrescreva a base durante o build:

```bash
WEBSITE_BASE_PATH='/<nome-do-repositorio>/' npm run build
```

Para um *user site* (`<utilizador>.github.io`) ou um domínio próprio servido na raiz:

```bash
WEBSITE_BASE_PATH='/' npm run build
```

O workflow do GitHub Actions incluído também aceita `WEBSITE_BASE_PATH` como entrada
(opção `workflow_dispatch`).

## 3. Desdobramento com GitHub Actions (recomendado)

O ficheiro `.github/workflows/deploy-pages.yml` compila o site e publica a pasta `dist/`
no GitHub Pages. Antes da primeira execução:

1. Configure **Settings → Pages → Build and deployment → Source** como **GitHub Actions**;
   o workflow assume essa configuração.
2. Despoletar o workflow (push para `main`, ou `Actions → Deploy to GitHub Pages → Run
   workflow`) e aguardar a conclusão do job de desdobramento.
3. Verificar os endereços principais no ambiente de produção: `/<base>/pt`,
   `/<base>/en`, `/<base>/es` e um caminho profundo (ex.: `/<base>/pt/roadmap`).
   O carregamento por endereço profundo prova que o `404.html` está publicado.

O workflow usa as acções oficiais `actions/upload-pages-artifact@v3` e
`actions/deploy-pages@v4`, com `permissions` mínimos; não é necessária nenhuma
token pessoal.

## 4. Desdobramento manual (alternativa)

1. `npm run build`.
2. Publicar o conteúdo de `dist/` (não a pasta completa) no ramo `gh-pages`.
3. Em **Settings → Pages**, escolher **Deploy from a branch → gh-pages → (root)**.

## 5. Verificações após publicar

- [ ] A raiz `https://<utilizador>.github.io/<base>/` redirecciona para `/pt` e mostra
      a página inicial em português.
- [ ] O selector de idioma muda o URL para `/en/...` e `/es/...` e o conteúdo muda.
- [ ] O alternador de tema persiste após recarregar a página (localStorage).
- [ ] Endereços desconhecidos (ex.: `/pt/pagina-inexistente`) mostram a página 404
      com o estilo do site.
- [ ] Nenhuma mensagem de erro no console do browser.

## 6. Domínio próprio (opcional)

1. Criar um registo DNS `CNAME` do domínio para `<utilizador>.github.io`.
2. Em **Settings → Pages**, preencher o domínio em **Custom domain**.
3. Incluir um ficheiro `CNAME` (com o domínio) em `public/`, para que o build o copie
   para `dist/`.
4. Rebuild e re-publicar com `WEBSITE_BASE_PATH='/'`.
