# GPTCLONE — Website institucional

Website oficial do **GPTCLONE**, o projecto independente de investigação que constrói uma
LLM completa de raiz (tokenizador, modelo Transformer, treino e inferência) sem depender
de APIs comerciais. Este site é um projecto separado do código da LLM: apresenta o
projecto, o seu estado real e os documentos técnicos publicados.

O site é **estático** e compatível com **GitHub Pages**: sem backend, sem bases de dados,
sem serviços externos pagos e sem recolha de dados.

## Principais características

- **React 19 + TypeScript + Vite + Tailwind CSS 4** e ícones Lucide.
- **Nove páginas**: Início, Sobre, Tecnologia, Investigação, Roadmap, Collaborar,
  Donativos, Transparência e Contacto (mais uma página 404).
- **Três idiomas com URLs próprios**: português de Portugal (`/pt`, predefinido),
  inglês (`/en`) e espanhol (`/es`). A raiz `/` redirecciona para `/pt`.
  As traduções são mantidas manualmente — sem tradução automática em tempo de execução.
- **Tema claro/escuro** com detecção da preferência do sistema e persistência
  (`localStorage`, chave `gptclone.site:theme`). O tema escuro usa acentos azuis/ciano.
- **Identidade visual** futura, minimalista e científica, com pano de fundo de rede
  neuronal em `<canvas>` (respeita `prefers-reduced-motion` e reage às cores do tema).
- **Honestidade como requisito**: todas as páginas distinguem o que está *implementado*,
  o que está *especificado*, o que reflecte *medidas* reais e o que está apenas
  *planeado*, em coerência com os documentos do repositório principal (roadmap,
  marcos M0–M13, barreiras de dados da Fase 1).

## Estrutura

```
website/
├── index.html              # ponto de entrada + antecedência do tema e meta tags
├── public/robots.txt
├── package.json
├── tsconfig*.json
├── vite.config.ts          # base por idioma/ambiente + fallback SPA para o Pages
├── docs/PUBLISHING.md      # guia de publicação no GitHub Pages
├── .github/workflows/      # desdobramento automatizado (opcional)
└── src/
    ├── main.tsx            # bootstrap
    ├── router.tsx          # rotas por idioma, redirect da raiz e basename
    ├── index.css           # tokens de tema (claro/escuro) + mapeamento Tailwind
    ├── pages/              # uma página por documento de conteúdo
    ├── components/         # Apply, rodapé, logótipo, selector de idioma, primitivas
    ├── i18n/               # tipos, idiomas suportados, contexto e cópias pt/en/es
    ├── lib/                # pano de fundo neural, hooks de SEO
    └── theme/              # ThemeProvider (sistema + persistência)
```

## Comandos

```bash
npm install        # instalar dependências
npm run dev        # servidor de desenvolvimento (http://127.0.0.1:5174)
npm run typecheck  # verificação de tipos (tsc -b)
npm run build      # produção: tsc -b + vite build (dist/)
npm run preview    # serve a produção (http://127.0.0.1:4174)
```

## Internacionalização

- Predefinido em `src/i18n/languages.ts`; cada idioma define o prefixo de URL, o
  `hreflang` e o nome nativo.
- Os conteúdos vivem em `src/i18n/{pt,en,es}.ts` e são verificados pelo compilador
  contra a interface `SiteContent` (`src/i18n/types.ts`): as três cópias têm de ser
  estruturalmente idênticas ou o projecto não compila.
- Os identificadores partilhados entre idiomas (marcos, áreas de colaboração, tipos de
  hardware, etc.) fazem duplo uso como âncoras de página e chaves de ícones.
- Ligações internas usam sempre `pageHref(...)`, para que nenhum endereço saia nunca
  sem prefixo de idioma.

## Temas

- `ThemeProvider` (`src/theme/`) segue a preferência do sistema enquanto não houver
  escolha explícita; a escolha do utilizador é gravada e restaurada.
- Um script em linha no `index.html` aplica o tema antes da primeira pintura, evitando
  o efeito de flash do tema errado.
- Os tokens de cor são variáveis CSS mapeadas para o Tailwind 4 via `@theme inline`.

## Desdobramento no GitHub Pages

O `vite.config.ts` define a base de produção como `/GPTCLONE-Website/` (a URL prevista
para o repositório do site). Para publicar:

1. Siga o guia em `docs/PUBLISHING.md` (inclui o desdobramento com GitHub Actions).
2. Se o repositório ou o domínio final mudarem, defina `WEBSITE_BASE_PATH` antes de
   `npm run build` para sobrepor a base (exemplo: `WEBSITE_BASE_PATH=/` para um
   desdobramento na raiz de um domínio próprio).

O fallback de SPA para o GitHub Pages é gerado automaticamente: `dist/404.html` é uma
cópia de `index.html`, para que o React Router assuma ao servidor endereços desconhecidos.

## Estado do projecto reflectido no site

- O **Milestone 0 (M0)** está concluído e a sua documentação é pública no repositório
  principal; o resultado de um treino exploratório (`INTERESTING`) é reportado com as
  métricas reais de treino/validação.
- O **Milestone 1 (M1)** está bloqueado por barreiras de dados aúnca atravessadas
  (Wiliki PT, OSCAR PT, MiniLM EN/PT); o site indica isso explicitamente.
- Nenhuma página identifica progresso que não esteja registado nos documentos oficiais.

## Notas técnicas

- Sem bibliotecas de análise, cookies, formulários falsos, pagamentos ou endereços de
  contacto pessoais; a página Contacto só lista os canais oficiais do projecto.
- Os ícones provêm unicamente de `lucide-react` (v1 não exporta ícone do GitHub; os
  endereços públicos são mostrados como texto no rodapé).
- Ortografia em português anterior ao acordo ortográfico em todo o
  conteúdo (`projecto`, `actualizado`), seguindo os documentos do repositório.
