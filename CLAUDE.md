# Site Keyla Kin — Guia do projeto

Site institucional da Keyla Kin (mentoria, curso e estratégia imobiliária). Idioma do site: **português do Brasil (pt-BR)**. Responda ao Ian em português.

## 1. REGRAS DE OURO (ler primeiro)

### 1.1 Mexa SOMENTE no que foi pedido
- Altere apenas os arquivos, componentes e trechos necessários para o pedido.
- Não "melhore", não refatore, não renomeie, não reorganize e não mude estilos, textos, imagens ou espaçamentos que não foram pedidos.
- Se notar algo errado fora do escopo, **avise no final da resposta** em vez de corrigir por conta própria.

### 1.2 Se for preciso mexer em algo não pedido para fazer o pedido funcionar
1. Faça a menor mudança possível.
2. **O comportamento e a aparência visual do que não foi pedido devem continuar exatamente iguais** ao que eram antes. Se a mudança alterou algo visualmente, ajuste de volta.
3. Reconecte o trecho alterado ao que foi pedido sem mudar o resultado final do trecho original.
4. Diga ao Ian, no final, o que foi tocado fora do pedido e por quê.

### 1.3 Nunca quebrar texto/acentuação (bug já ocorreu: sumiram letras "o" do site)
- Todos os arquivos são **UTF-8**. Edite com a ferramenta **Edit/Write**, que preserva a codificação.
- **Não** reescreva arquivos com `sed`, `Set-Content`, `Out-File`, `Get-Content | ...`, `echo >` ou scripts de replace em massa (PowerShell 5.1 e `fix_enc.*` já corromperam acentos antes).
- Nunca use regex/replace global em texto do site (ex.: trocar `o` por algo, `replace(/.../g)`).
- Depois de editar um arquivo com texto em português, confira que acentos e letras continuam corretos (ç, ã, é, ó, õ, í, ú, à e as letras "o").
- Os arquivos `fix_enc.cjs` e `fix_enc.js` na raiz são restos de correção antiga de encoding. **Não rodar.**

### 1.4 Antes de dar por concluído
- Rodar `npm run build` para garantir que compila.
- Lembrar o Ian de que a pasta `dist/` precisa ser regenerada (`npm run build`) e enviada à hospedagem para o site online mudar. `dist/` está no `.gitignore`.
- Não fazer commit/push sem o Ian pedir.

## 2. Stack
- React 19 + Vite 8, `react-router-dom` (usa **HashRouter**, URLs com `#/`), `framer-motion`, `lucide-react`.
- CSS Modules por componente (`Componente.module.css`) + estilos globais em `src/index.css`.
- `vite.config.js` com `base: './'` (build relativo, hospedagem Apache com `public/.htaccess`/`dist/.htaccess`).
- Comandos: `npm run dev`, `npm run build`, `npm run lint`, `npm run preview`.

## 3. Estrutura de pastas
```
src/
  main.jsx, App.jsx        # rotas (HashRouter) + Navbar global + ScrollToTop
  index.css                # variáveis, reset, utilitários globais (.container, .btn, .eyebrow...)
  App.css                  # #root flex column, main flex:1
  assets/                  # todas as imagens (importadas no JSX)
  pages/                   # uma página por rota (+ .module.css próprio)
  components/              # seções e peças reutilizáveis (+ .module.css próprio)
public/                    # favicon, .htaccess
dist/                      # build gerado (não editar à mão)
```

### Rotas (src/App.jsx) e menu (src/components/Navbar.jsx)
HOME `/` · MENTORIA `/mentoria` · CURSO `/curso` · LIVROS `/livros` · BLOG `/blog` · BLOG POST `/blog/:slug` · MÍDIA `/midia`.
WhatsApp da Keyla: `https://wa.me/5511984591195`.

### Home (src/pages/HomePage.jsx) — ordem das seções
`Hero → About → Stats → Trajetoria → Services → CTA → LatestPosts → Testimonials → Footer + botão WhatsApp`.
Não mudar essa ordem sem pedido.

### Páginas internas
- Usam `PageShell` (banner com eyebrow + título + subtítulo e chevrons) quando aplicável, ou hero próprio (ex.: MentoriaPage, CursoPage).
- Seções com animação de entrada usam o componente `Reveal` (`direction`: up/down/left/right/scale; delay máx. 0.3s).
- Páginas terminam com `Footer` e `WhatsApp` (botão flutuante).

## 4. Design system (fonte da verdade: `:root` em `src/index.css`)
Sempre usar as variáveis `var(--...)`; não inventar cores/fontes novas nem hardcodar hex quando existir variável.

### Cores
| Variável | Valor | Uso |
|---|---|---|
| `--bg-primary` | `#000000` | fundo principal (preto) |
| `--bg-secondary` | `#2a2117` | fundo marrom escuro |
| `--bg-card` | `#1a1610` | cards |
| `--bg-card-hover` | `#211d15` | hover de card |
| `--bg-section-alt` | `#100e08` | seções alternadas |
| `--gold-light` | `#ffe572` | hover de botão, destaques |
| `--gold-primary` | `#d4b170` | dourado principal (títulos, links, botões) |
| `--gold-mid` | `#b8963e` | dourado médio |
| `--gold-dark` | `#9a7c30` | dourado escuro (scrollbar) |
| `--gold-muted` | `rgba(212,177,112,.15)` | fundo dourado suave |
| `--gold-border` | `rgba(212,177,112,.3)` | bordas de cards/botões |
| `--text-white` | `#f5f1e8` | texto principal |
| `--text-off` | `#ccc4b0` | texto de parágrafo |
| `--text-muted` | `#8a7f6a` | texto secundário/cargos |

Estilo geral: **preto + dourado, luxuoso/editorial**. A seção Services usa fundo em degradê dourado (`#d4b170 → #b8963e`).

### Fontes (Google Fonts, carregadas em `index.html`)
- `--font-serif`: **Cinzel** (400–900) — títulos `h1–h4`, `.section-title`, destaques. Peso 600, `line-height: 1.15`, `letter-spacing: -0.01em`.
- `--font-sans`: **Jost** (300–700) — corpo, botões, eyebrow, cards. Peso base 400, `line-height: 1.6`.
- Palavra de destaque em títulos: `<em>` em itálico com `color: var(--gold-primary)`.

### Tipografia padrão
- `.section-title`: `clamp(2rem, 4vw, 3.2rem)` (mobile `clamp(1.7rem, 6vw, 2.4rem)`).
- `.section-subtitle`: `1rem`, cor `--text-off`, `line-height 1.7`, `max-width 540px`.
- `.eyebrow`: `0.72rem`, peso 600, `letter-spacing .18em`, maiúsculas, dourado, com linhas de 28px dos dois lados.
- Texto de card: `~0.92rem`, `line-height 1.65`, cor `--text-off`. Nome em card: `0.9rem` peso 700 dourado. Cargo: `0.8rem` `--text-muted`.

### Espaçamento e layout
- `--section-py: 96px` (mobile 64px) → classe `.section-py`.
- `--container-max: 1240px`, `--container-px: 24px` (mobile 20px) → classe `.container`.
- Grids de cards: gap `24px`, 3 colunas no desktop → 1 coluna em `max-width: 900px`.
- Cards: fundo `--bg-card`, borda `1px solid var(--gold-border)`, `border-radius: 12px`, padding `28px`, hover = borda `--gold-primary` + `translateY(-3px)`.
- Botões (`.btn`): padding `14px 32px`, `border-radius: 2px`, `0.8rem`, peso 600, maiúsculas, `letter-spacing .14em`. Variantes: `.btn-gold` (fundo dourado, texto preto) e `.btn-outline`.
- Transições: `var(--dur)` = `0.3s` e `var(--ease)` = `cubic-bezier(0.4,0,0.2,1)`.
- Breakpoints usados: **900px** (tablet, grids viram 1–2 colunas), **768px** (mobile/menu), 600px e 480px (ajustes finos). Todo ajuste deve funcionar em celular.
- Bordas retas/finas (2px) em fotos e botões; cantos de 12px só em cards.
- Scrollbar: 6px, thumb `--gold-dark`.

### Utilitários globais disponíveis (`index.css`)
`.container`, `.section-py`, `.eyebrow`, `.btn`, `.btn-gold`, `.btn-outline`, `.gold-line`, `.section-title`, `.section-subtitle`, `.serif`, `.gold`, `.gold-light`, `.muted`, `.anim-fade-up`, `.anim-fade-in`, `.delay-1…5`, `.chevron-deco`.

## 5. Convenções de código
- Um componente = `.jsx` + `.module.css` com o mesmo nome. Estilos novos vão no `.module.css` do componente; globais só se for realmente global.
- Imagens ficam em `src/assets/` e são importadas (`import img from '../assets/x.jpg'`).
- Dados de conteúdo (depoimentos, planos, pilares etc.) ficam em arrays no topo do `.jsx`; para mudar texto, edite o array.
- Depoimentos (`Testimonials.jsx`): componente `TestimonialCard`; textos com mais de 260 caracteres ficam cortados em 6 linhas com botão "Ler mais / Ler menos"; cards da grade têm mesma altura.
- Manter o estilo do código existente (aspas simples, sem ponto e vírgula, 2 espaços).

## 6. Checklist rápido para cada pedido
1. Ler os arquivos envolvidos antes de editar.
2. Editar só o necessário (seção 1.1/1.2).
3. Editar com Edit/Write, sem scripts de replace (seção 1.3).
4. Usar variáveis do design system (seção 4).
5. `npm run build` ok → avisar sobre regenerar `dist/`.
6. Resumir: o que mudou, o que foi tocado fora do pedido (se algo) e problemas notados fora do escopo.
