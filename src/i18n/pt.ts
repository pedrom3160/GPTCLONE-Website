import type { SiteContent } from './types'

/**
 * European Portuguese content — the project's primary language,
 * following the spelling conventions used in the GPTCLONE repository
 * documentation ("projecto", "actualizado", "objectivo").
 */
export const content: SiteContent = {
  meta: {
    tagline: 'Uma LLM construída de raiz — investigação independente',
    pages: {
      home: {
        title: 'Uma LLM construída de raiz',
        description:
          'O GPTCLONE é um projecto independente de investigação: desenvolvemos e treinamos uma LLM própria — tokenizer, Transformer, dados, treino e inferência — sem pesos pré-treinados de terceiros.',
      },
      about: {
        title: 'Sobre o projecto',
        description:
          'A história, a missão e a filosofia do GPTCLONE: construir uma LLM de raiz com medição, testes e honestidade técnica.',
      },
      technology: {
        title: 'Tecnologia',
        description:
          'Tokenizer byte-level BPE, Transformer decoder-only, Training Engine e Inference Engine — com estados técnicos declarados: implementado, especificado, medido, planeado.',
      },
      research: {
        title: 'Investigação',
        description:
          'As áreas de investigação do GPTCLONE: precisão em GPU Turing, compressão multilingue de tokenizer, pequena escala e avaliação honesta.',
      },
      roadmap: {
        title: 'Roadmap',
        description:
          'Catorze milestones (M0–M13) em cinco fases, do bootstrap à release 1.0 — com estados reais, sem progresso inventado.',
      },
      contribute: {
        title: 'Colaborar',
        description:
          'Programadores, estudantes, investigadores e entusiastas: como colaborar no GPTCLONE em dez áreas de interesse.',
      },
      donations: {
        title: 'Donativos',
        description:
          'Apoio financeiro e doação de hardware usado para o laboratório local do GPTCLONE — com avaliação e registo públicos, sem pagamentos nesta fase.',
      },
      transparency: {
        title: 'Transparência',
        description:
          'Os compromissos de transparência do GPTCLONE: donativos, hardware recebido, despesas e relatórios com números reais.',
      },
      contact: {
        title: 'Contacto',
        description:
          'Canais do GPTCLONE para contactos gerais, colaboração científica, contribuições técnicas, donativos e hardware — com o estado do canal declarado.',
      },
    },
    notFound: {
      title: 'Página não encontrada',
      description: 'O endereço acessado no website do GPTCLONE não existe ou mudou de sítio.',
    },
  },

  nav: {
    home: 'Início',
    about: 'Sobre',
    technology: 'Tecnologia',
    research: 'Investigação',
    roadmap: 'Roadmap',
    contribute: 'Colaborar',
    donations: 'Donativos',
    transparency: 'Transparência',
    contact: 'Contacto',
    communityMenu: 'Participar',
    openMenu: 'Abrir menu de navegação',
    closeMenu: 'Fechar menu',
    menuAria: 'Menu de navegação do site',
    languageMenu: 'Escolher idioma',
    themeToggle: 'Alternar tema claro/escuro',
    skipToContent: 'Saltar para o conteúdo principal',
  },

  footer: {
    blurb:
      'Projecto independente de investigação: uma LLM desenvolvida e treinada de raiz — tokenizer, arquitectura, pesos, treino e inferência são nossos.',
    projectTitle: 'Projecto',
    communityTitle: 'Participar',
    statusTitle: 'Estado',
    statusLines: ['M0 concluído · M1 bloqueado pelos gates de dados', 'Sem pesos, datasets ou checkpoints', 'Repositórios privados nesta fase'],
    note: 'GPTCLONE não está associado a nenhum fornecedor de IA nem usa serviços externos de LLM.',
    builtNote: 'Este website também foi construído de raiz.',
  },

  statusLabels: {
    completed: 'Concluído',
    inProgress: 'Em curso',
    planned: 'Planeado',
    blocked: 'Bloqueado',
    implemented: 'Implementado',
    specified: 'Especificado',
    measured: 'Medido',
  },

  common: {
    learnMore: 'Saber mais',
    viewRoadmap: 'Ver o roadmap',
    getInTouch: 'Falar connosco',
  },

  home: {
    heroKicker: 'Projecto independente de investigação em IA',
    heroTitlePlain: 'Uma LLM construída',
    heroTitleAccent: 'de raiz, treino e inferência.',
    heroLede:
      'O GPTCLONE desenvolve e treina um grande modelo de linguagem próprio: tokenizer próprio, arquitectura Transformer própria, pesos inicializados aleatoriamente pelo nosso código, datasets seleccionados pelo projecto e um ciclo de treino definitivamente nosso. Nenhum peso pré-treinado de terceiros entra em nenhuma fase.',
    heroPrimary: 'Conhecer o projecto',
    heroSecondary: 'Ver o roadmap',
    stats: [
      { value: 'M0 concluído', label: 'Infraestrutura de base fechada com 73 testes', tone: 'positive' },
      { value: '8,7 M parâmetros', label: 'Primeiro modelo especificado, ainda não treinado', tone: 'neutral' },
      { value: 'T600 · 4 GB', label: 'GPU local auditada e medida', tone: 'neutral' },
      { value: 'M1 bloqueado', label: 'Gates de dados por resolver, sem invenção de progresso', tone: 'blocked' },
    ],
    missionKicker: 'Missão',
    missionTitle: 'Cada componente é primeira-parte',
    missionText:
      'A missão é desenvolver uma LLM genuína, do tokenizer à inferência, e atribuir a cada peça uma origem verificável. O conhecimento técnico pode vir de artigos e investigação pública; os pesos têm de vir unicamente do nosso treino.',
    missionBullets: [
      'Tokenizer byte-level BPE próprio',
      'Arquitectura Transformer própria',
      'Pesos inicializados aleatoriamente pelo nosso código',
      'Datasets seleccionados e preparados pelo projecto',
      'Training Engine próprio',
      'Inference Engine próprio',
      'API de serviço independente',
      'Interface própria',
      'Infraestrutura própria a longo prazo',
    ],
    honestTitle: 'O estado real do desenvolvimento',
    honestDone: [
      {
        title: 'Infraestrutura M0 implementada.',
        text: 'Configuração validada, logging, seeds e determinismo, device, memória, auditoria de ambiente e CLI — tudo com testes.',
      },
      {
        title: 'O primeiro modelo está especificado.',
        text: 'Arquitectura completa (RoPE, RMSNorm, GQA, SwiGLU), tokenizer, treino e inferência documentados como contratos.',
      },
      {
        title: 'O hardware local está medido.',
        text: 'A T600 foi auditada: FP32 e FP16 comparados por A/B, sem ganho medido de tensor cores — a precisão será decidida por evidência.',
      },
    ],
    honestPlanned: [
      {
        title: 'Não existe tokenizer, Transformer, treino nem inferência.',
        text: 'Nenhum peso foi treinado e nenhum ciclo de treino correu.',
      },
      {
        title: 'O M1 está bloqueado.',
        text: 'As fontes de dados e licenças continuam por escolher e as perguntas de aprendizagem por responder.',
      },
      {
        title: 'Nada foi produzido.',
        text: 'Sem datasets, sem checkpoints, sem modelo. Este website documenta o plano, não resultados.',
      },
    ],
    areasKicker: 'Áreas de investigação',
    areasTitle: 'O que se investiga e constrói',
    areasText: 'Oito domínio técnicos, do byte ao serviço, com estados declarados na página de Tecnologia.',
    areas: [
      {
        id: 'foundations',
        title: 'Infraestrutura de investigação',
        text: 'Configuração, logging, reprodutibilidade, device e memória — a base executada e testada que sustenta o resto.',
      },
      {
        id: 'tokenizer',
        title: 'Tokenizer byte-level BPE',
        text: '256 bytes, tokens especiais e normalização Unicode, treinado no nosso corpus, com compressão medida por idioma.',
      },
      {
        id: 'transformer',
        title: 'Transformer decoder-only',
        text: 'RoPE, RMSNorm, GQA e SwiGLU — arquitectura moderna definida e justificada pelo projecto.',
      },
      {
        id: 'training',
        title: 'Training Engine',
        text: 'AdamW próprio, warmup + cosine, checkpoints atómicos, retoma verificada e registo de experiências.',
      },
      {
        id: 'gpu-computing',
        title: 'GPU Computing',
        text: 'A T600 portátil é a primeira plataforma: VRAM, precisão e throughput decididos por medição.',
      },
      {
        id: 'inference',
        title: 'Inference Engine',
        text: 'Sampling, KV cache, contexto e streaming escritos por nós, sobre o nosso modelo.',
      },
      {
        id: 'data-engineering',
        title: 'Engenharia de dados',
        text: 'Proveniência antes do download, deduplicação, quotas PT/EN/ES e splits determinísticos.',
      },
      {
        id: 'api-interface',
        title: 'API e interface',
        text: 'Contrato HTTP próprio — o protocolo OpenAI não é dependência — e a interface própria do projecto.',
      },
    ],
    roadmapKicker: 'Roadmap',
    roadmapTitle: 'Catorze milestones, cinco fases',
    roadmapText:
      'O programa aprovado vai do bootstrap (M0, concluído) à release 1.0 (M13). Cada milestone tem critérios objectivos, estimativa de esforço e gates de progressão — nenhum marco avança sem autorização expressa.',
    roadmapPreview: [
      { code: 'F0', title: 'Fundações — M0', tone: 'completed', text: 'Bootstrap, testes e auditoria de ambiente concluídos.' },
      { code: 'F1', title: 'Linguagem — M1, M2', tone: 'blocked', text: 'Data Engine bloqueado pelos gates; tokenizer a seguir.' },
      { code: 'F2', title: 'Modelo — M3 a M6', tone: 'planned', text: 'Transformer, treino, primeiro pré-treino local e cloud.' },
      { code: 'F3', title: 'Inferência — M7, M8', tone: 'planned', text: 'Motor de inferência e avaliação honesta.' },
      { code: 'F4 · F5', title: 'Alinhamento e produto — M9 a M13', tone: 'planned', text: 'SFT, alinhamento, API, optimização e release 1.0.' },
    ],
    collabTitle: 'Colaborar',
    collabText: 'Há matemática, código e documentação a construir. Áreas de interesse e disciplina de integração.',
    donationsTitle: 'Apoiar o projecto',
    donationsText: 'Hardware e infraestrutura são o gargalo real de um treino local. Toda a ajuda será registada em público.',
    contactTitle: 'Contactar',
    contactText: 'Canal institucional em preparação — o estado real é publicado em vez de se simular um formulário.',
  },

  about: {
    heroKicker: 'Sobre o projecto',
    heroTitle: 'Construção de raiz, conhecida passo a passo',
    heroLede:
      'O GPTCLONE é um projecto independente de investigação e desenvolvimento em inteligência artificial: uma LLM desenvolvida e treinada de raiz — com rigor científico, medição obrigatória e progressão controlada.',
    historyKicker: 'História',
    historyTitle: 'Como o projecto chegou aqui',
    history: [
      {
        date: 'Bootstrap',
        title: 'M0 concluído — infraestrutura executável',
        text: 'O primeiro milestone fecha com a base executável do projecto: configuração YAML validada, logging, seeds e determinismo, gestão de device e memória, auditoria de ambiente reprodutível, CLI e 73 testes.',
      },
      {
        date: '2026-11-09',
        title: 'Auditoria da GPU local e revisão local-first',
        text: 'A T600 é caracterizada por medição: FP32 a 1,176 TFLOPS e FP16 a 0,321 TFLOPS na matmul, BF16 emulado, sem ganho de tensor cores medido. O plano passa a ser local-first: o portátil antes da cloud.',
      },
      {
        date: '2026-11-10',
        title: 'A primeira LLM fica especificada',
        text: 'Arquitectura, tokenizer, training engine, inference engine e a matriz de fontes de dados — tudo especificado sem código. No mesmo dia, os princípios fundacionais de construção de raiz são formalizados como regra normativa.',
      },
      {
        date: 'A seguir',
        title: 'M1 — Data Engine (bloqueado pelos gates)',
        text: 'Três gates pendentes: responder às perguntas de aprendizagem, decidir fontes e licenças de dados e dar autorização expressa. O plano não avança sem eles — e este website declara-o tal como é.',
      },
    ],
    mission: {
      title: 'Missão',
      text: 'Desenvolver e treinar uma LLM genuinamente própria — arquitectura, tokenizer, pesos e treino — e fechar o ciclo completo com cada peça compreendida, testada e medida.',
    },
    vision: {
      title: 'Visão',
      text: 'Tornar o projecto open source, com modelo, código e documentação examináveis por qualquer pessoa — a licença de cada camada decidida de forma honesta no fim do programa.',
    },
    independenceKicker: 'Independência tecnológica',
    independenceTitle: 'PyTorch é a calculadora; o modelo é nosso',
    independenceText:
      'Independência não significa reimplementar CUDA, drivers ou o sistema operativo. Significa que as decisões de arquitectura e a matemática são nossas — e que nenhuma biblioteca decide o modelo por nós.',
    usedTitle: 'O que usamos',
    used: [
      'PyTorch para tensores, autograd e aceleração GPU',
      'CUDA, drivers e bibliotecas de baixo nível',
      'NumPy, Git, pytest e ferramentas de sistema',
      'Algoritmos publicados: BPE, RoPE, GQA, SwiGLU, AdamW',
    ],
    notUsedTitle: 'O que não usamos',
    notUsed: [
      'Pesos, checkpoints ou adapters de modelos externos',
      'Um tokenizer pré-treinado como artefacto do projecto',
      'Imports automáticos de arquitecturas completas',
      'Fine-tuning de terceiros como substituto do nosso pré-treino',
    ],
    philosophyKicker: 'Filosofia',
    philosophyTitle: 'Princípios de construção de raiz',
    principles: [
      {
        title: 'Medir antes de afirmar',
        text: 'VRAM, throughput e qualidade são medidos. Nada é declarado rápido, pequeno ou bom sem números registados.',
      },
      {
        title: 'Testar antes de commitar',
        text: 'A suite pytest tem de estar verde. Código que não corre em testes não se declara feito.',
      },
      {
        title: 'Honestidade técnica',
        text: 'Distinguir implementado, não validado, planeado e teoria — nesta página e em todo o website.',
      },
      {
        title: 'Local-first',
        text: 'A T600 é a primeira plataforma de treino; a cloud é a segunda fase, com critérios medidos e orçamento por corrida.',
      },
      {
        title: 'Configuração como dados',
        text: 'YAML validado, rejeitando chaves desconhecidas, em vez de constantes escondidas no código.',
      },
      {
        title: 'Progressão controlada',
        text: 'Milestones fecham com critérios objectivos e autorização expressa. Nenhum gate se salta por conveniência.',
      },
    ],
    nameTitle: 'Porquê “GPTCLONE”?',
    nameText:
      'O nome é directo: a arquitectura de um GPT é reconstruída — clonada — em espírito técnico, do zero. O que se clona é a técnica e o método, nunca os pesos: um modelo só é GPTCLONE se arquitectura, tokenizer, inicialização, pré-treino e checkpoint forem nossos.',
    founderTitle: 'Uma pessoa, um portátil, um plano documentado',
    founderText:
      'O GPTCLONE é conduzido por um estudante independente, com um roadmap completo e revisões documentadas literais. O progresso é deliberadamente lento: rápido demais é o atalho que este projecto decidiu não tomar.',
  },

  technology: {
    heroKicker: 'Tecnologia',
    heroTitle: 'Os componentes, com estados declarados',
    heroLede:
      'Cada componente da LLM tem um estado técnico declarado — implementado, especificado, medido ou planeado. Nada é apresentado como funcionando sem um teste que correu.',
    legendText:
      'Estados: Implementado significa código na suite de testes. Especificado significa contrato detalhado ainda sem código. Medido significa números medidos no hardware real. Planeado significa âmbito aprovado no roadmap.',
    sections: [
      {
        id: 'foundations',
        status: 'implemented',
        milestone: 'M0',
        title: 'Infraestrutura de investigação',
        text: 'A base executável que sustenta tudo o que vem depois — fechada no M0 e coberta por testes.',
        bullets: [
          'Configuração YAML validada, que rejeita chaves desconhecidas',
          'Seeds e determinismo em três geradores (Python, NumPy, PyTorch)',
          'Monitorização de VRAM/RAM e resolução de device',
          'Auditoria de ambiente reprodutível e CLI própria',
        ],
      },
      {
        id: 'tokenizer',
        status: 'specified',
        milestone: 'M2',
        title: 'Tokenizer byte-level BPE',
        text: 'O tokenizer é treinado por nós, no nosso corpus — nunca adoptado de terceiros.',
        bullets: [
          '256 bytes + tokens especiais para a futura conversação',
          'Normalização Unicode e limpeza de caracteres de controlo',
          'Treino determinístico: mesmo corpus e seed = mesmos merges',
          'Benchmark de compressão bytes/token por idioma (PT/EN/ES)',
        ],
      },
      {
        id: 'transformer',
        status: 'specified',
        milestone: 'M3',
        title: 'Arquitectura Transformer',
        text: 'Um decoder-only igual a um LLM moderno, pequeno para 4 GB e sem OOM no portátil.',
        bullets: [
          'RoPE em vez de embeddings posicionais aprendidos',
          'RMSNorm pré-normalização e SwiGLU na feed-forward',
          'Grouped-Query Attention 8/2 para um KV cache compacto',
          'Primeiro preset: 8 719 616 parâmetros (16 384 de vocabulário, d=256, 6 blocos)',
        ],
      },
      {
        id: 'training',
        status: 'specified',
        milestone: 'M4',
        title: 'Training Engine',
        text: 'O ciclo de treino é observável, retomável e seguro em precisão — escrito por nós.',
        bullets: [
          'Cross-entropy autoregressiva sobre logits deslocados',
          'AdamW próprio, com weight decay selectivo por grupo',
          'Warmup + cosine, gradient clipping e acumulação',
          'Checkpoints com escrita atómica, SHA-256 e retoma testada',
        ],
      },
      {
        id: 'gpu-computing',
        status: 'measured',
        milestone: null,
        title: 'GPU Computing',
        text: 'A T600 Laptop (Turing, SM 7.5) é a primeira plataforma de treino — caracterizada por medição, não por datasheet.',
        bullets: [
          '4 GB de VRAM; 3,22 GiB livres medidos na auditoria',
          'FP32 1,176 TFLOPS contra FP16 0,321 TFLOPS na matmul medido',
          'AMP medido 1,72× mais lento que FP32 no passo de treino',
          'Sem BF16 nativo nem TF32 — a política de precisão será decidida no M4 por evidência',
        ],
      },
      {
        id: 'inference',
        status: 'specified',
        milestone: 'M7',
        title: 'Inference Engine',
        text: 'Generação do nosso checkpoint, com paridade CPU/CUDA exigida por teste.',
        bullets: [
          'Greedy e sampling: temperature, top-k, top-p, repetição penalizada',
          'KV cache e gestão da janela de contexto',
          'Streaming UTF-8 por gerador',
          'Limites de latência medidos e documentados',
        ],
      },
      {
        id: 'data-engineering',
        status: 'planned',
        milestone: 'M1',
        title: 'Engenharia de dados',
        text: 'Dados com proveniência: nada entra sem licença, origem e verificação registadas. Nenhuma fonte foi escolhida até agora.',
        bullets: [
          'Proveniência: fonte, licença, data e idioma registados antes do download',
          'Deduplicação exacta (hash) e quase-duplicados (MinHash/LSH)',
          'Quotas de equilíbrio linguístico PT/EN/ES',
          'Splits determinísticos com relatório de leakage = 0',
        ],
      },
      {
        id: 'api-interface',
        status: 'specified',
        milestone: 'M11',
        title: 'API e interface',
        text: 'O produto final serve o nosso modelo com um contrato próprio — e a interface própria do projecto já está construída como demo.',
        bullets: [
          'Serviço HTTP próprio com streaming e sessões',
          'Sessões e histórico persistentes',
          'O protocolo OpenAI não é uma dependência arquitectural',
          'Interface web própria já existente com respostas simuladas, até ao modelo real',
        ],
      },
    ],
    integrityTitle: 'Proibido por princípio',
    integrityText:
      'A regra de dependência é default deny: nada entra por conveniência e a verificação é executada por testes, não por disciplina.',
    integrityBullets: [
      'Nenhum from_pretrained, AutoModel ou checkpoint externo na base do projecto',
      'Testes negativos falham se um artefacto externo for carregado',
      'Manifestos com SHA-256 e cadeia de custódia verificável',
      'Qualquer excepção exige decisão expressa do fundador, registada por escrito',
    ],
  },

  research: {
    heroKicker: 'Investigação',
    heroTitle: 'A metodologia existe; as publicações virão',
    heroLede:
      'O GPTCLONE investiga com um protocolo simples: medir, registar e publicar só o que está verificado. Nenhum artigo foi publicado até hoje — e nenhum resultado surge aqui antes de estar documentado no repositório.',
    linesTitle: 'Linhas de investigação',
    lines: [
      {
        id: 'precision',
        title: 'Precisão numa Turing sem BF16',
        text: 'BF16 e TF32 inexistem na T600 e o FP16 mediu-se mais lento que FP32. Investigação quotidiana: política de precisão decidida por A/B medidos, não por tabelas de marketing.',
      },
      {
        id: 'tokenizer-compression',
        title: 'Compressão multilingue do BPE byte-level',
        text: 'Como se comporta a compressão bytes/token entre português, inglês e espanhol — e que quotas de amostragem minimizam o desequilíbrio entre idiomas.',
      },
      {
        id: 'small-scale',
        title: 'Até onde chega uma pequena escala',
        text: 'O que um modelo de 8–40 M de parâmetros treinado com 4 GB de VRAM consegue — e que metodologia distingue coerência de conversação.',
      },
      {
        id: 'provenance',
        title: 'Proveniência e integridade de artefactos',
        text: 'Manifestos, hashes SHA-256, cadeia de custódia e reconstrução determinística a partir do manifesto: a integridade começa nos dados, não nos pesos.',
      },
      {
        id: 'evaluation',
        title: 'Avaliação honesta de pequenos modelos',
        text: 'Rubricas, sondas de geração, regressões com prompts fixos e relatórios que declaram explicitamente o que não foi medido.',
      },
    ],
    logTitle: 'Diário de experiências',
    logText:
      'Estrutura prevista no roadmap: cada experiência documentada com ID, commit, configuração, dataset, hardware e métricas num índice que não aceita reescritas. Resultados serão publicados aqui depois de medidos e verificados.',
    methodologyTitle: 'Método',
    methodology: [
      {
        title: 'Um facto, um sítio',
        text: 'O roadmap guarda critérios e datas; a arquitectura guarda fronteiras; o manual explica. Quando um facto muda, muda no sítio dele.',
      },
      {
        title: 'Experiências com esquema versionado',
        text: 'ID, commit, configuração, dataset, hardware e métricas num índice append-only, com artefactos verificáveis.',
      },
      {
        title: 'Reprodutibilidade numérica',
        text: 'Seeds em três geradores, flags de determinismo do CUDA/cuDNN e configuração da experiência versionada.',
      },
      {
        title: 'Relatórios que confessam',
        text: 'Cada relatório de avaliação declara o que não foi medido e se houve regressão — sem puxar médias.',
      },
    ],
    releaseNote:
      'Relatórios, dados de experimentos e futuras publicações serão ligados nesta página no momento em que forem medidos e documentados.',
  },

  roadmap: {
    heroKicker: 'Roadmap',
    heroTitle: 'Catorze milestones, zero progresso inventado',
    heroLede:
      'O programa aprovado corre do bootstrap à release 1.0 em cinco fases. Os estados abaixo são os oficiais do repositório principal — incluindo um bloqueio honesto.',
    gatesTitle: 'As regras de progressão',
    gates: [
      'As perguntas de aprendizagem do milestone anterior têm de estar respondidas.',
      'Código, manual e CHANGELOG actualizados na mesma sessão.',
      'Autorização expressa para começar o milestone seguinte.',
    ],
    legendNote: 'Estados: Concluído · Em curso · Planeado · Bloqueado. O M1 é o único bloqueado; todos os seguintes estão planeados.',
    phases: [
      {
        id: 'f0',
        title: 'F0 — Fundações',
        summary: 'Infraestrutura executável, medida e testada.',
        milestones: [
          {
            code: 'M0',
            title: 'Bootstrap',
            status: 'completed',
            summary: 'Config, logging, seeds, device, memória, auditoria de ambiente, CLI e testes.',
            hours: null,
          },
        ],
      },
      {
        id: 'f1',
        title: 'F1 — Linguagem',
        summary: 'Dados com proveniência e o tokenizer treinado por nós.',
        milestones: [
          {
            code: 'M1',
            title: 'Data Engine + Dataset Manager',
            status: 'blocked',
            summary: 'Proveniência, limpeza, dedup, quotas PT/EN/ES, splits e publicação no Hub.',
            hours: '60–90 h',
          },
          {
            code: 'M2',
            title: 'Tokenizer Byte-Level BPE',
            status: 'planned',
            summary: 'Treino BPE no nosso corpus, especiais de conversação e benchmark multilingue.',
            hours: '45–70 h',
          },
        ],
      },
      {
        id: 'f2',
        title: 'F2 — Modelo',
        summary: 'Transformer, treino, primeiro pré-treino local e cloud.',
        milestones: [
          {
            code: 'M3',
            title: 'Arquitectura Transformer',
            status: 'planned',
            summary: 'Embeddings, RMSNorm, RoPE, GQA, SwiGLU e testes de causalidade.',
            hours: '55–80 h',
          },
          {
            code: 'M4',
            title: 'Training Engine',
            status: 'planned',
            summary: 'AdamW, scheduler, AMP, checkpoints atómicos, retoma, tracking e benchmark.',
            hours: '80–110 h',
          },
          {
            code: 'M5',
            title: 'Pré-treino #1 local',
            status: 'planned',
            summary: 'Primeira corrida na T600, com calibração por medição e relatório.',
            hours: '20–35 h',
          },
          {
            code: 'M6',
            title: 'Portabilidade cloud',
            status: 'planned',
            summary: 'Checkpoints portáteis, notebooks Colab/Kaggle e sincronização verificada.',
            hours: '35–55 h',
          },
        ],
      },
      {
        id: 'f3',
        title: 'F3 — Inferência',
        summary: 'Motor de inferência e avaliação.',
        milestones: [
          {
            code: 'M7',
            title: 'Inference Engine',
            status: 'planned',
            summary: 'Sampling, KV cache, contexto e streaming com paridade CPU/CUDA.',
            hours: '35–50 h',
          },
          {
            code: 'M8',
            title: 'Evaluation Engine',
            status: 'planned',
            summary: 'Perplexidade, sondas, regressões e comparação entre checkpoints.',
            hours: '30–45 h',
          },
        ],
      },
      {
        id: 'f4',
        title: 'F4 — Alinhamento',
        summary: 'Instruction tuning e avaliação de alinhamento.',
        milestones: [
          {
            code: 'M9',
            title: 'Instruction tuning (SFT)',
            status: 'planned',
            summary: 'SFT sobre o nosso checkpoint, com loss masking e chat template.',
            hours: '40–60 h',
          },
          {
            code: 'M10',
            title: 'Avaliação de alinhamento',
            status: 'planned',
            summary: 'Rubricas, recusas, sondas de alucinação e regressões contra o modelo base.',
            hours: '25–40 h',
          },
        ],
      },
      {
        id: 'f5',
        title: 'F5 — Produto',
        summary: 'API, interface, optimização e release.',
        milestones: [
          {
            code: 'M11',
            title: 'API + interface',
            status: 'planned',
            summary: 'Serviço HTTP próprio, sessões e interface de conversação.',
            hours: '60–90 h',
          },
          {
            code: 'M12',
            title: 'Optimização',
            status: 'planned',
            summary: 'Profiling, quantização, KV cache e batching com speedup medido.',
            hours: '35–55 h',
          },
          {
            code: 'M13',
            title: 'Release 1.0',
            status: 'planned',
            summary: 'Versionamento, cards, revisão de segurança e publicação no Hub.',
            hours: '25–40 h',
          },
        ],
      },
    ],
    blockNoteTitle: 'Porquê “bloqueado”?',
    blockNoteText:
      'O M1 avança apenas depois de três gates: responder às perguntas de aprendizagem, decidir fontes e licenças de dados e dar autorização expressa. Até lá, nenhum dataset é descarregado — nem para demonstração.',
    totalNote:
      'Esforço estimado: 545–820 h de trabalho efectivo (±40 %), revisto no fim de cada milestone. As horas não são compromissos — são estimativas declaradas.',
  },

  contribute: {
    heroKicker: 'Colaborar',
    heroTitle: 'Dez áreas, um método',
    heroLede:
      'O GPTCLONE é um projecto pequeno com problemas interessantes — de matemática a infra-estrutura. A ambição é ser open source; até essa porta abrir, o essencial é encontrar as pessoas certas e combinar expectativas.',
    audiencesTitle: 'Para quem',
    audiences: ['Programadores', 'Estudantes', 'Investigadores', 'Entusiastas'],
    areasTitle: 'Áreas de interesse',
    areas: [
      { id: 'python', title: 'Python', text: 'O idioma do projecto: pacote, testes, scripts de operação e revisão de código.' },
      { id: 'machine-learning', title: 'Machine Learning', text: 'Ciclo de treino, AdamW, schedulers, avaliação de perda e experiment tracking.' },
      { id: 'deep-learning', title: 'Deep Learning', text: 'Transformer decoder-only implementado de raiz: atenção, RoPE, RMSNorm, GQA e SwiGLU.' },
      { id: 'math', title: 'Matemática e estatística', text: 'Álgebra linear, probabilidade e cálculo aplicados com o rigor das especificações.' },
      { id: 'transformers', title: 'Transformers', text: 'Anatomia dos modelos: atenção, RoPE, normas e a matemática que os sustenta.' },
      { id: 'cuda', title: 'CUDA e GPU computing', text: 'Precisão, VRAM, benchmarks e optimização para uma Turing de 4 GB.' },
      { id: 'infrastructure', title: 'Infraestrutura', text: 'Checkpoints, sincronização, armazenamento e automação de corridas.' },
      { id: 'data-engineering', title: 'Engenharia de dados', text: 'Proveniência, dedup, quotas, splits e manifestos verificáveis.' },
      { id: 'nlp', title: 'Processamento de linguagem natural', text: 'Datasets multilingues PT/EN/ES, avaliação e sondas de geração.' },
      { id: 'evaluation-docs', title: 'Avaliação e documentação', text: 'Rubricas, relatórios honestos e documentação que ensina, não que disfarça.' },
    ],
    processKicker: 'Como funciona',
    processTitle: 'Do interesse à integração',
    steps: [
      {
        title: 'Escolha a área',
        text: 'Identifique o domínio onde quer contribuir — a lista acima é o mapa real do projecto.',
      },
      {
        title: 'Comece a conversa',
        text: 'O canal de contacto está em preparação; a página de contacto indica o estado actual.',
      },
      {
        title: 'Proposta registada',
        text: 'As contribuições entram por proposta descrita — origem, âmbito e impacto — à imagem das regras do repositório.',
      },
      {
        title: 'Decisão e integração',
        text: 'Com contributo aceite, o trabalho integra-se com testes, documentação e changelog.',
      },
    ],
    note: 'Os repositórios continuam privados nesta fase. A abertura pública é um objectivo declarado e será anunciada aqui.',
  },

  donations: {
    heroKicker: 'Donativos',
    heroTitle: 'Apoiar o laboratório local',
    heroLede:
      'Um treino de LLM exige hardware, electricidade, armazenamento e tempo. Esta página existe para tornar aceitável — e registável — qualquer ajuda decidida.',
    noticeTitle: 'Aviso honesto',
    noticeText:
      'Nesta fase não há pagamentos implementados: não existem, nem serão inventados, dados bancários ou carteiras de criptomoedas. Quando existir um mecanismo seguro, será anunciado nesta página e o uso aparecerá na de transparência.',
    financialTitle: 'Apoio financeiro',
    financialText: 'Para onde vai um apoio, se for aceite:',
    financial: [
      { id: 'hardware', title: 'Hardware', text: 'GPUs, memória/equipamento de treino — o gargalo mais directo.' },
      { id: 'infrastructure', title: 'Infraestrutura', text: 'Hosting, rede e a futura plataforma de treino.' },
      { id: 'storage', title: 'Armazenamento', text: 'Datasets, checkpoints e artefactos com verificação de integridade.' },
      { id: 'electricity', title: 'Electricidade', text: 'A T600 treina em casa: cada corrida consome energia real.' },
      { id: 'maintenance', title: 'Manutenção', text: 'Discos, refrigeração, backups e reposição de desgaste.' },
      { id: 'research', title: 'Investigação e desenvolvimento', text: 'Tempo para estudar, medir e implementar — o recurso mais escasso.' },
    ],
    hardwareTitle: 'Doação de hardware usado',
    hardwareText: 'Componentes e equipamento que interessam ao laboratório, em qualquer estado (saudável ou não):',
    hardware: [
      { id: 'gpu', title: 'GPUs', text: 'Para treino local e para as fases seguintes de escala.' },
      { id: 'workstation', title: 'Workstations', text: 'Máquinas com slots de memória e PCI decentes.' },
      { id: 'server', title: 'Servidores', text: 'Rack ou torre, para expandir o ambiente de treino.' },
      { id: 'ram', title: 'RAM', text: 'DDR4/DDR5 com densidade útil para o resto do orçamento.' },
      { id: 'storage', title: 'SSDs e HDDs', text: 'SSDs NVMe e discos de maior capacidade para datasets e checkpoints.' },
      { id: 'cpu', title: 'CPUs', text: 'Cores e threads para a preparação de dados.' },
      { id: 'motherboard', title: 'Motherboards', text: 'Placas compatíveis com sockets e slots disponíveis.' },
      { id: 'psu', title: 'Fontes de alimentação', text: 'Fontes com potência e eficiência reais, com cabos completos.' },
      { id: 'network', title: 'Equipamento de rede', text: 'Switches, NICs e redes de 1 GbE ou mais.' },
      { id: 'cooling', title: 'Refrigeração', text: 'Ventoinhas, coolers e refrigeração líquida para corridas longas.' },
    ],
    processKicker: 'Processo',
    processTitle: 'Do contacto ao registo público',
    steps: [
      { title: 'Contacto', text: 'O canal está em preparação — a página de contacto indica o estado actual.' },
      { title: 'Proposta do equipamento', text: 'Descreva marca, modelo, quantidade e estado dos componentes.' },
      {
        title: 'Avaliação técnica',
        text: 'Todo o equipamento oferecido é avaliado antes de ser aceite. A compatibilidade e o estado real decidem.',
      },
      { title: 'Registo público', text: 'O que for aceite — e o que não for — aparece na página de transparência, com valores quando aplicável.' },
    ],
  },

  transparency: {
    heroKicker: 'Transparência',
    heroTitle: 'Os números, quando existirem',
    heroLede:
      'Um projecto que pede apoio deve mostrar, com números publicados, o que faz com ele. Esta página é a casa desses registos.',
    publishTitle: 'O que será publicada aqui',
    published: [
      { title: 'Donativos recebidos', text: 'Valor, data, forma de apoio e estado do uso — sem estimativas apresentadas como gastos.' },
      { title: 'Hardware recebido', text: 'Componentes, marca e modelo, estado e destino no laboratório.' },
      { title: 'Despesas', text: 'Electricidade, hosting, armazenamento e manutenção, por período.' },
      { title: 'Aquisições', text: 'Resumo de comprovantes e do uso real do equipamento comprado.' },
      { title: 'Relatórios periódicos', text: 'Resumos por intervalo com o que entrou, o que saiu e como se usou.' },
    ],
    currentTitle: 'Estado actual',
    currentText:
      'Ainda não há registos a mostrar: nenhum mecanismo de recolha existe nesta fase e a estrutura de registo está em construção. As tabelas publicarão números reais — ou não serão publicadas.',
    principlesTitle: 'Compromissos',
    principles: [
      { title: 'Sem números inventados', text: 'Nenhum valor aparece aqui que não seja verificado e documentado.' },
      { title: 'Apoiadores por consentimento', text: 'Um apoiante só é identificado publicamente com autorização explícita.' },
      { title: 'Hardware avaliado antes de aceite', text: 'Critérios e resultado da avaliação ficam no registo público.' },
      { title: 'Dados bancários nunca publicados', text: 'Quando existir canal de pagamento, será divulgado nas páginas próprias — nunca por email pessoal.' },
    ],
  },

  contact: {
    heroKicker: 'Contacto',
    heroTitle: 'O canal, declarado com franqueza',
    heroLede:
      'Cinco categorias de contacto preparadas — e um estado de canal honesto: sem email institucional e sem backend nesta fase, nada é enviado por aqui.',
    categoriesTitle: 'O que pode enquadrar-se',
    categories: [
      { id: 'general', title: 'Contactos gerais', text: 'Perguntas sobre o projecto, o estado e a documentação.' },
      { id: 'research-collab', title: 'Colaboração científica', text: 'Ideias de investigação, metodologia, avaliação e revisão técnica.' },
      { id: 'technical', title: 'Contribuições técnicas', text: 'Código, testes, matemática, CUDA e engenharia de dados.' },
      { id: 'donations', title: 'Donativos', text: 'Apoio financeiro e condições de aceitação de equipamento.' },
      { id: 'hardware', title: 'Doação de hardware', text: 'Especificação, estado e logística de máquinas e componentes.' },
    ],
    channelTitle: 'Estado do canal',
    channelText:
      'Ainda não existe email institucional nem backend para receber mensagens — e não vamos fingir o contrário: o formulário não envia mensagens.',
    channelBullets: [
      'O endereço pessoal do fundador não é publicado, por privacidade.',
      'O email institucional será anunciado nesta página quando estiver pronto.',
      'Até lá, esta página documenta o estado real em vez de simular envio.',
    ],
    privacyNote: 'Este website não recolhe dados pessoais e não usa analytics invasivos.',
  },

  notFound: {
    title: 'Página não encontrada',
    text: 'O endereço pode ter mudado ou nunca ter existido. O mapa do projecto começa na página inicial.',
    cta: 'Voltar à página inicial',
  },
}
