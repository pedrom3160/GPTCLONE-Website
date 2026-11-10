import type { SiteContent } from './types'

/** English content. Must satisfy the SiteContent contract exactly. */
export const content: SiteContent = {
  meta: {
    tagline: 'An LLM built from scratch — independent research',
    pages: {
      home: {
        title: 'An LLM built from scratch',
        description:
          'GPTCLONE is an independent research project: we develop and train our own LLM — tokenizer, Transformer, data, training and inference — with no third-party pretrained weights.',
      },
      about: {
        title: 'About the project',
        description:
          'The history, mission and philosophy of GPTCLONE: building an LLM from scratch with measurement, tests and technical honesty.',
      },
      technology: {
        title: 'Technology',
        description:
          'Byte-level BPE tokenizer, decoder-only Transformer, Training Engine and Inference Engine — each with a declared technical state: implemented, specified, measured, planned.',
      },
      research: {
        title: 'Research',
        description:
          'GPTCLONE research lines: precision on Turing GPUs, multilingual tokenizer compression, small-scale training and honest evaluation.',
      },
      roadmap: {
        title: 'Roadmap',
        description:
          'Fourteen milestones (M0–M13) across five phases, from bootstrap to release 1.0 — with real states and no invented progress.',
      },
      contribute: {
        title: 'Contribute',
        description:
          'Developers, students, researchers and enthusiasts: how to collaborate with GPTCLONE across ten areas of interest.',
      },
      donations: {
        title: 'Donations',
        description:
          'Financial support and used hardware donations for the GPTCLONE local lab — evaluated and publicly logged, with no payments in this phase.',
      },
      transparency: {
        title: 'Transparency',
        description:
          'GPTCLONE transparency commitments: donations, received hardware, expenses and reports with real numbers.',
      },
      contact: {
        title: 'Contact',
        description:
          'GPTCLONE channels for general inquiries, scientific collaboration, technical contributions, donations and hardware — with the channel status declared.',
      },
    },
    notFound: {
      title: 'Page not found',
      description: 'The address on the GPTCLONE website does not exist or has moved.',
    },
  },

  nav: {
    home: 'Home',
    about: 'About',
    technology: 'Technology',
    research: 'Research',
    roadmap: 'Roadmap',
    contribute: 'Contribute',
    donations: 'Donations',
    transparency: 'Transparency',
    contact: 'Contact',
    communityMenu: 'Get involved',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close menu',
    menuAria: 'Site navigation menu',
    languageMenu: 'Choose language',
    themeToggle: 'Toggle light/dark theme',
    skipToContent: 'Skip to main content',
  },

  footer: {
    blurb:
      'Independent research project: an LLM developed and trained from scratch — the tokenizer, architecture, weights, training and inference are all ours.',
    projectTitle: 'Project',
    communityTitle: 'Get involved',
    statusTitle: 'Status',
    statusLines: ['M0 complete · M1 blocked by data gates', 'No weights, datasets or checkpoints', 'Repositories private in this phase'],
    note: 'GPTCLONE is not affiliated with any AI provider and uses no external LLM services.',
    builtNote: 'This website was also built from scratch.',
  },

  statusLabels: {
    completed: 'Completed',
    inProgress: 'In progress',
    planned: 'Planned',
    blocked: 'Blocked',
    implemented: 'Implemented',
    specified: 'Specified',
    measured: 'Measured',
  },

  common: {
    learnMore: 'Learn more',
    viewRoadmap: 'View the roadmap',
    getInTouch: 'Get in touch',
  },

  home: {
    heroKicker: 'Independent AI research project',
    heroTitlePlain: 'An LLM built',
    heroTitleAccent: 'from scratch, training to inference.',
    heroLede:
      'GPTCLONE develops and trains its own large language model: our own tokenizer, our own Transformer architecture, weights randomly initialised by our code, datasets selected by the project and a training loop that is entirely ours. No third-party pretrained weights enter any phase.',
    heroPrimary: 'Meet the project',
    heroSecondary: 'View the roadmap',
    stats: [
      { value: 'M0 complete', label: 'Base infrastructure closed with 73 passing tests', tone: 'positive' },
      { value: '8.7 M parameters', label: 'First model specified, not yet trained', tone: 'neutral' },
      { value: 'T600 · 4 GB', label: 'Local GPU audited and measured', tone: 'neutral' },
      { value: 'M1 blocked', label: 'Data gates unresolved, no invented progress', tone: 'blocked' },
    ],
    missionKicker: 'Mission',
    missionTitle: 'Every component is first-party',
    missionText:
      'The mission is to develop a genuine LLM, from the tokenizer to inference, giving each piece a verifiable origin. Technical knowledge may come from papers and public research; the weights must come from our training alone.',
    missionBullets: [
      'Our own byte-level BPE tokenizer',
      'Our own Transformer architecture',
      'Weights randomly initialised by our code',
      'Datasets selected and prepared by the project',
      'Our own Training Engine',
      'Our own Inference Engine',
      'An independent serving API',
      'Our own interface',
      'Our own infrastructure in the long run',
    ],
    honestTitle: 'The real state of development',
    honestDone: [
      {
        title: 'The M0 infrastructure is implemented.',
        text: 'Validated configuration, logging, seeds and determinism, device, memory, environment audit and CLI — all under tests.',
      },
      {
        title: 'The first model is specified.',
        text: 'The full architecture (RoPE, RMSNorm, GQA, SwiGLU), tokenizer, training and inference are documented as contracts.',
      },
      {
        title: 'The local hardware is measured.',
        text: 'The T600 has been audited: FP32 vs FP16 compared in A/B tests, with no measured tensor-core gain — precision will be decided by evidence.',
      },
    ],
    honestPlanned: [
      {
        title: 'There is no tokenizer, Transformer, training or inference yet.',
        text: 'No weights have been trained and no training loop has run.',
      },
      {
        title: 'M1 is blocked.',
        text: 'Data sources and licences remain to be chosen, and the learning questions remain unanswered.',
      },
      {
        title: 'Nothing has been produced.',
        text: 'No datasets, no checkpoints, no model. This website documents the plan, not results.',
      },
    ],
    areasKicker: 'Research areas',
    areasTitle: 'What is investigated and built',
    areasText: 'Eight technical domains, from the byte to the service, with declared states on the Technology page.',
    areas: [
      {
        id: 'foundations',
        title: 'Research infrastructure',
        text: 'Configuration, logging, reproducibility, device and memory — the executed, tested base that supports the rest.',
      },
      {
        id: 'tokenizer',
        title: 'Byte-level BPE tokenizer',
        text: '256 bytes, conversation specials and Unicode normalisation, trained on our corpus, with compression measured per language.',
      },
      {
        id: 'transformer',
        title: 'Decoder-only Transformer',
        text: 'RoPE, RMSNorm, GQA and SwiGLU — a modern architecture defined and justified by the project.',
      },
      {
        id: 'training',
        title: 'Training Engine',
        text: 'Our own AdamW, warmup + cosine, atomic checkpoints, verified resume and experiment tracking.',
      },
      {
        id: 'gpu-computing',
        title: 'GPU Computing',
        text: 'The T600 laptop is the first platform: VRAM, precision and throughput decided by measurement.',
      },
      {
        id: 'inference',
        title: 'Inference Engine',
        text: 'Sampling, KV cache, context and streaming written by us, on top of our model.',
      },
      {
        id: 'data-engineering',
        title: 'Data engineering',
        text: 'Provenance before download, deduplication, PT/EN/ES quotas and deterministic splits.',
      },
      {
        id: 'api-interface',
        title: 'API and interface',
        text: 'Our own HTTP contract — the OpenAI protocol is not a dependency — and the project’s own interface.',
      },
    ],
    roadmapKicker: 'Roadmap',
    roadmapTitle: 'Fourteen milestones, five phases',
    roadmapText:
      'The approved programme runs from bootstrap (M0, complete) to release 1.0 (M13). Every milestone has objective criteria, an effort estimate and progression gates — no milestone starts without express authorisation.',
    roadmapPreview: [
      { code: 'F0', title: 'Foundations — M0', tone: 'completed', text: 'Bootstrap, tests and environment audit complete.' },
      { code: 'F1', title: 'Language — M1, M2', tone: 'blocked', text: 'Data Engine blocked by gates; tokenizer next after it.' },
      { code: 'F2', title: 'Model — M3 to M6', tone: 'planned', text: 'Transformer, training, first local pre-training and cloud.' },
      { code: 'F3', title: 'Inference — M7, M8', tone: 'planned', text: 'Inference engine and honest evaluation.' },
      { code: 'F4 · F5', title: 'Alignment and product — M9 to M13', tone: 'planned', text: 'SFT, alignment, API, optimisation and release 1.0.' },
    ],
    collabTitle: 'Contribute',
    collabText: 'There is mathematics, code and documentation to build. Areas of interest and integration discipline.',
    donationsTitle: 'Support the project',
    donationsText: 'Hardware and infrastructure are the real bottleneck of local training. All support will be logged publicly.',
    contactTitle: 'Get in touch',
    contactText: 'The institutional channel is in preparation — the real status is published instead of a simulated form.',
  },

  about: {
    heroKicker: 'About the project',
    heroTitle: 'Built from scratch, understood step by step',
    heroLede:
      'GPTCLONE is an independent research and development project in artificial intelligence: an LLM developed and trained from scratch — with scientific rigour, mandatory measurement and controlled progression.',
    historyKicker: 'History',
    historyTitle: 'How the project got here',
    history: [
      {
        date: 'Bootstrap',
        title: 'M0 complete — executable infrastructure',
        text: 'The first milestone closes with the project’s executable base: validated YAML configuration, logging, seeds and determinism, device and memory handling, a reproducible environment audit, a CLI and 73 passing tests.',
      },
      {
        date: '2026-11-09',
        title: 'Local GPU audit and the local-first revision',
        text: 'The T600 is characterised by measurement: FP32 at 1.176 TFLOPS against FP16 at 0.321 TFLOPS on matmul, emulated BF16, no measured tensor-core gain. The plan became local-first: the laptop before the cloud.',
      },
      {
        date: '2026-11-10',
        title: 'The first LLM is specified',
        text: 'Architecture, tokenizer, training engine, inference engine and the data source matrix — all specified without code. On the same day, the foundational from-scratch principles were formalised as the normative rule.',
      },
      {
        date: 'Next',
        title: 'M1 — Data Engine (blocked by gates)',
        text: 'Three gates pending: answer the learning questions, decide data sources and licences, and give express authorisation. The plan does not move without them — and this website says so exactly.',
      },
    ],
    mission: {
      title: 'Mission',
      text: 'Develop and train a genuinely our-own LLM — architecture, tokenizer, weights and training — closing the full cycle with every piece understood, tested and measured.',
    },
    vision: {
      title: 'Vision',
      text: 'Make the project open source, with model, code and documentation examinable by anyone — the licence of each layer decided honestly at the end of the programme.',
    },
    independenceKicker: 'Technological independence',
    independenceTitle: 'PyTorch is the calculator; the model is ours',
    independenceText:
      'Independence does not mean reimplementing CUDA, drivers or the operating system. It means the architecture decisions and the mathematics are ours — and that no library decides the model for us.',
    usedTitle: 'What we use',
    used: [
      'PyTorch for tensors, autograd and GPU acceleration',
      'CUDA, drivers and low-level libraries',
      'NumPy, Git, pytest and system tooling',
      'Published algorithms: BPE, RoPE, GQA, SwiGLU, AdamW',
    ],
    notUsedTitle: 'What we do not use',
    notUsed: [
      'External weights, checkpoints or adapters',
      'A pretrained tokenizer as the project’s artefact',
      'Automatic imports of complete architectures',
      'Third-party fine-tuning as a substitute for our pre-training',
    ],
    philosophyKicker: 'Philosophy',
    philosophyTitle: 'Principles of building from scratch',
    principles: [
      {
        title: 'Measure before claiming',
        text: 'VRAM, throughput and quality are measured. Nothing is declared fast, small or good without recorded numbers.',
      },
      {
        title: 'Test before committing',
        text: 'The pytest suite has to be green. Code that does not run under tests is not declared done.',
      },
      {
        title: 'Technical honesty',
        text: 'Distinguishing implemented, not validated, planned and theory — on this page and across the website.',
      },
      {
        title: 'Local-first',
        text: 'The T600 is the first training platform; the cloud is the second phase, with measured criteria and a budget per run.',
      },
      {
        title: 'Configuration as data',
        text: 'Validated YAML that rejects unknown keys, instead of constants hidden in code.',
      },
      {
        title: 'Controlled progression',
        text: 'Milestones close with objective criteria and express authorisation. No gate is skipped for convenience.',
      },
    ],
    nameTitle: 'Why “GPTCLONE”?',
    nameText:
      'The name is direct: a GPT-style architecture is rebuilt — cloned — in technical spirit, from zero. What is cloned is the technique and the method, never the weights: a model is only GPTCLONE if the architecture, tokenizer, initialisation, pre-training and checkpoint are ours.',
    founderTitle: 'One person, one laptop, a documented plan',
    founderText:
      'GPTCLONE is led by an independent student, with a complete roadmap and documented reviews. Progress is deliberately slow: too fast is the shortcut this project chose not to take.',
  },

  technology: {
    heroKicker: 'Technology',
    heroTitle: 'The components, with declared states',
    heroLede:
      'Every component of the LLM carries a declared technical state — implemented, specified, measured or planned. Nothing is presented as working without a test that ran.',
    legendText:
      'States: Implemented means code under the test suite. Specified means a detailed contract with no code yet. Measured means numbers measured on real hardware. Planned means scope approved in the roadmap.',
    sections: [
      {
        id: 'foundations',
        status: 'implemented',
        milestone: 'M0',
        title: 'Research infrastructure',
        text: 'The executable base that supports everything after it — closed in M0 and covered by tests.',
        bullets: [
          'Validated YAML configuration that rejects unknown keys',
          'Seeds and determinism across three generators (Python, NumPy, PyTorch)',
          'VRAM/RAM monitoring and device resolution',
          'Reproducible environment audit and our own CLI',
        ],
      },
      {
        id: 'tokenizer',
        status: 'specified',
        milestone: 'M2',
        title: 'Byte-level BPE tokenizer',
        text: 'The tokenizer is trained by us, on our corpus — never adopted from third parties.',
        bullets: [
          '256 bytes + special tokens for future conversation',
          'Unicode normalisation and control-character cleaning',
          'Deterministic training: same corpus and seed = same merges',
          'Per-language bytes/token compression benchmark (PT/EN/ES)',
        ],
      },
      {
        id: 'transformer',
        status: 'specified',
        milestone: 'M3',
        title: 'Transformer architecture',
        text: 'A decoder-only equal to a modern LLM, small enough for 4 GB without OOM on the laptop.',
        bullets: [
          'RoPE instead of learned positional embeddings',
          'Pre-normalisation RMSNorm and SwiGLU in the feed-forward block',
          '8/2 Grouped-Query Attention for a compact KV cache',
          'First preset: 8,719,616 parameters (16,384 vocabulary, d=256, 6 blocks)',
        ],
      },
      {
        id: 'training',
        status: 'specified',
        milestone: 'M4',
        title: 'Training Engine',
        text: 'The training loop is observable, resumable and precision-safe — written by us.',
        bullets: [
          'Autoregressive cross-entropy over shifted logits',
          'Our own AdamW with selective per-group weight decay',
          'Warmup + cosine, gradient clipping and accumulation',
          'Checkpoints with atomic writes, SHA-256 and tested resume',
        ],
      },
      {
        id: 'gpu-computing',
        status: 'measured',
        milestone: null,
        title: 'GPU Computing',
        text: 'The T600 Laptop (Turing, SM 7.5) is the first training platform — characterised by measurement, not by datasheet.',
        bullets: [
          '4 GB of VRAM; 3.22 GiB free measured in the audit',
          'FP32 1.176 TFLOPS vs FP16 0.321 TFLOPS measured on matmul',
          'AMP measured 1.72× slower than FP32 on the training step',
          'No native BF16 and no TF32 — precision policy decided in M4 by evidence',
        ],
      },
      {
        id: 'inference',
        status: 'specified',
        milestone: 'M7',
        title: 'Inference Engine',
        text: 'Generation from our checkpoint, with required CPU/CUDA parity under test.',
        bullets: [
          'Greedy and sampling: temperature, top-k, top-p, repetition penalty',
          'KV cache and context window management',
          'UTF-8 streaming from a generator',
          'Latency limits measured and documented',
        ],
      },
      {
        id: 'data-engineering',
        status: 'planned',
        milestone: 'M1',
        title: 'Data engineering',
        text: 'Data with provenance: nothing enters without licence, origin and verification recorded. No source has been chosen yet.',
        bullets: [
          'Provenance: source, licence, date and language recorded before download',
          'Exact deduplication (hash) and near-duplicates (MinHash/LSH)',
          'PT/EN/ES language balance quotas',
          'Deterministic splits with a leakage report of 0',
        ],
      },
      {
        id: 'api-interface',
        status: 'specified',
        milestone: 'M11',
        title: 'API and interface',
        text: 'The end product serves our model with our own contract — and the project’s own interface is already built as a demo.',
        bullets: [
          'Our own HTTP service with streaming',
          'Persistent sessions and chat history',
          'The OpenAI protocol is not an architectural dependency',
          'The web interface already exists with simulated responses, until the real model',
        ],
      },
    ],
    integrityTitle: 'Forbidden by principle',
    integrityText:
      'The dependency rule is default deny: nothing enters for convenience and verification is executed by tests, not by discipline.',
    integrityBullets: [
      'No from_pretrained, AutoModel or external checkpoint in the project’s base',
      'Negative tests fail if an external artefact is loaded',
      'Manifests with SHA-256 and a verifiable custody chain',
      'Any exception requires the founder’s express, written decision',
    ],
  },

  research: {
    heroKicker: 'Research',
    heroTitle: 'The method exists; publications will come',
    heroLede:
      'GPTCLONE research follows a simple protocol: measure, record and publish only what is verified. No paper has been published today — and no result appears here before it is documented in the repository.',
    linesTitle: 'Research lines',
    lines: [
      {
        id: 'precision',
        title: 'Precision on a Turing GPU without BF16',
        text: 'BF16 and TF32 do not exist on the T600 and FP16 measured slower than FP32. Everyday investigation: a precision policy decided by measured A/B tests, not by marketing tables.',
      },
      {
        id: 'tokenizer-compression',
        title: 'Multilingual compression of byte-level BPE',
        text: 'How bytes/token compression behaves across Portuguese, English and Spanish — and which sampling quotas minimise the imbalance between languages.',
      },
      {
        id: 'small-scale',
        title: 'How far small scale goes',
        text: 'What an 8–40 M parameter model trained with 4 GB of VRAM can do — and which methodology distinguishes coherence from conversation.',
      },
      {
        id: 'provenance',
        title: 'Artefact provenance and integrity',
        text: 'Manifests, SHA-256 hashes, custody chains and deterministic reconstruction from the manifest: integrity starts in the data, not in the weights.',
      },
      {
        id: 'evaluation',
        title: 'Honest evaluation of small models',
        text: 'Rubrics, generation probes, regressions with fixed prompts and reports that explicitly declare what was not measured.',
      },
    ],
    logTitle: 'Experiment log',
    logText:
      'The structure planned in the roadmap: every experiment documented with ID, commit, configuration, dataset, hardware and metrics in an append-only index. Results will be published here once measured and verified.',
    methodologyTitle: 'Method',
    methodology: [
      {
        title: 'One fact, one place',
        text: 'The roadmap keeps criteria and dates; the architecture keeps boundaries; the manual explains. When a fact changes, it changes where it lives.',
      },
      {
        title: 'Experiments with a versioned schema',
        text: 'ID, commit, configuration, dataset, hardware and metrics in an append-only index with verifiable artefacts.',
      },
      {
        title: 'Numerical reproducibility',
        text: 'Seeds in three generators, CUDA/cuDNN determinism flags and versioned experiment configuration.',
      },
      {
        title: 'Reports that confess',
        text: 'Every evaluation report declares what was not measured and whether a regression occurred — no smoothed averages.',
      },
    ],
    releaseNote:
      'Reports, experiment data and future publications will be linked from this page at the moment they are measured and documented.',
  },

  roadmap: {
    heroKicker: 'Roadmap',
    heroTitle: 'Fourteen milestones, zero invented progress',
    heroLede:
      'The approved programme runs from bootstrap to release 1.0 across five phases. The states below are the official ones from the main repository — including one honest blockage.',
    gatesTitle: 'The progression rules',
    gates: [
      'The previous milestone’s learning questions must be answered.',
      'Code, manual and CHANGELOG updated in the same session.',
      'Express authorisation to start the next milestone.',
    ],
    legendNote: 'States: Completed · In progress · Planned · Blocked. M1 is the only blocked milestone; all others are planned.',
    phases: [
      {
        id: 'f0',
        title: 'F0 — Foundations',
        summary: 'Executable infrastructure, measured and tested.',
        milestones: [
          {
            code: 'M0',
            title: 'Bootstrap',
            status: 'completed',
            summary: 'Config, logging, seeds, device, memory, environment audit, CLI and tests.',
            hours: null,
          },
        ],
      },
      {
        id: 'f1',
        title: 'F1 — Language',
        summary: 'Data with provenance and the tokenizer trained by us.',
        milestones: [
          {
            code: 'M1',
            title: 'Data Engine + Dataset Manager',
            status: 'blocked',
            summary: 'Provenance, cleaning, dedup, PT/EN/ES quotas, splits and Hub publishing.',
            hours: '60–90 h',
          },
          {
            code: 'M2',
            title: 'Byte-Level BPE Tokenizer',
            status: 'planned',
            summary: 'BPE training on our corpus, conversation specials and the multilingual benchmark.',
            hours: '45–70 h',
          },
        ],
      },
      {
        id: 'f2',
        title: 'F2 — Model',
        summary: 'Transformer, training, first local pre-training and cloud.',
        milestones: [
          {
            code: 'M3',
            title: 'Transformer architecture',
            status: 'planned',
            summary: 'Embeddings, RMSNorm, RoPE, GQA, SwiGLU and causality tests.',
            hours: '55–80 h',
          },
          {
            code: 'M4',
            title: 'Training Engine',
            status: 'planned',
            summary: 'AdamW, scheduler, AMP, atomic checkpoints, resume, tracking and benchmark.',
            hours: '80–110 h',
          },
          {
            code: 'M5',
            title: 'Local pre-training #1',
            status: 'planned',
            summary: 'First run on the T600, calibrated by measurement, with a full report.',
            hours: '20–35 h',
          },
          {
            code: 'M6',
            title: 'Cloud portability',
            status: 'planned',
            summary: 'Portable checkpoints, Colab/Kaggle notebooks and verified synchronisation.',
            hours: '35–55 h',
          },
        ],
      },
      {
        id: 'f3',
        title: 'F3 — Inference',
        summary: 'Inference engine and evaluation.',
        milestones: [
          {
            code: 'M7',
            title: 'Inference Engine',
            status: 'planned',
            summary: 'Sampling, KV cache, context and streaming with CPU/CUDA parity.',
            hours: '35–50 h',
          },
          {
            code: 'M8',
            title: 'Evaluation Engine',
            status: 'planned',
            summary: 'Perplexity, probes, regressions and comparison across checkpoints.',
            hours: '30–45 h',
          },
        ],
      },
      {
        id: 'f4',
        title: 'F4 — Alignment',
        summary: 'Instruction tuning and alignment evaluation.',
        milestones: [
          {
            code: 'M9',
            title: 'Instruction tuning (SFT)',
            status: 'planned',
            summary: 'SFT on our own checkpoint, with loss masking and the chat template.',
            hours: '40–60 h',
          },
          {
            code: 'M10',
            title: 'Alignment evaluation',
            status: 'planned',
            summary: 'Rubrics, refusals, hallucination probes and regressions against the base model.',
            hours: '25–40 h',
          },
        ],
      },
      {
        id: 'f5',
        title: 'F5 — Product',
        summary: 'API, interface, optimisation and release.',
        milestones: [
          {
            code: 'M11',
            title: 'API + interface',
            status: 'planned',
            summary: 'Our own HTTP service, sessions and a conversational interface.',
            hours: '60–90 h',
          },
          {
            code: 'M12',
            title: 'Optimisation',
            status: 'planned',
            summary: 'Profiling, quantisation, KV cache and batching with measured speedup.',
            hours: '35–55 h',
          },
          {
            code: 'M13',
            title: 'Release 1.0',
            status: 'planned',
            summary: 'Versioning, cards, security review and Hub publishing.',
            hours: '25–40 h',
          },
        ],
      },
    ],
    blockNoteTitle: 'Why “blocked”?',
    blockNoteText:
      'M1 moves forward only after three gates: answering the learning questions, deciding data sources and licences, and giving express authorisation. Until then no dataset is downloaded — not even for a demo.',
    totalNote:
      'Estimated effort: 545–820 h of effective work (±40 %), revised at the end of every milestone. The hours are not commitments — they are declared estimates.',
  },

  contribute: {
    heroKicker: 'Contribute',
    heroTitle: 'Ten areas, one method',
    heroLede:
      'GPTCLONE is a small project with interesting problems — from mathematics to infrastructure. The ambition is to become open source; until that door opens, the essential part is finding the right people and setting expectations.',
    audiencesTitle: 'For whom',
    audiences: ['Developers', 'Students', 'Researchers', 'Enthusiasts'],
    areasTitle: 'Areas of interest',
    areas: [
      { id: 'python', title: 'Python', text: 'The project’s language: package, tests, operation scripts and code review.' },
      { id: 'machine-learning', title: 'Machine Learning', text: 'The training loop, AdamW, schedulers, loss evaluation and experiment tracking.' },
      { id: 'deep-learning', title: 'Deep Learning', text: 'A decoder-only Transformer implemented from scratch: attention, RoPE, RMSNorm, GQA and SwiGLU.' },
      { id: 'math', title: 'Mathematics and statistics', text: 'Linear algebra, probability and calculus applied with the rigour of the specifications.' },
      { id: 'transformers', title: 'Transformers', text: 'Model anatomy: attention, RoPE, norms and the mathematics that sustains them.' },
      { id: 'cuda', title: 'CUDA and GPU computing', text: 'Precision, VRAM, benchmarks and optimisation for a 4 GB Turing GPU.' },
      { id: 'infrastructure', title: 'Infrastructure', text: 'Checkpoints, synchronisation, storage and run automation.' },
      { id: 'data-engineering', title: 'Data engineering', text: 'Provenance, dedup, quotas, splits and verifiable manifests.' },
      { id: 'nlp', title: 'Natural language processing', text: 'Multilingual PT/EN/ES datasets, evaluation and generation probes.' },
      { id: 'evaluation-docs', title: 'Evaluation and documentation', text: 'Rubrics, honest reports and documentation that teaches instead of hiding.' },
    ],
    processKicker: 'How it works',
    processTitle: 'From interest to integration',
    steps: [
      {
        title: 'Choose an area',
        text: 'Identify the domain where you want to contribute — the list above is the project’s real map.',
      },
      {
        title: 'Start the conversation',
        text: 'The contact channel is in preparation; the contact page states the current status.',
      },
      {
        title: 'Registered proposal',
        text: 'Contributions enter as a described proposal — origin, scope and impact — following the repository rules.',
      },
      {
        title: 'Decision and integration',
        text: 'With a contribution accepted, the work is integrated with tests, documentation and changelog.',
      },
    ],
    note: 'The repositories are still private in this phase. The public opening is a declared goal and will be announced here.',
  },

  donations: {
    heroKicker: 'Donations',
    heroTitle: 'Support the local lab',
    heroLede:
      'Training an LLM demands hardware, electricity, storage and time. This page exists to make decided support acceptable — and recordable.',
    noticeTitle: 'An honest notice',
    noticeText:
      'There are no payments implemented in this phase: no bank details or cryptocurrency wallets exist, and none will be invented. When a safe mechanism exists, it will be announced on this page and its use will appear on the transparency page.',
    financialTitle: 'Financial support',
    financialText: 'Where a contribution would go, if accepted:',
    financial: [
      { id: 'hardware', title: 'Hardware', text: 'GPUs, memory and training equipment — the most direct bottleneck.' },
      { id: 'infrastructure', title: 'Infrastructure', text: 'Hosting, networking and the future training platform.' },
      { id: 'storage', title: 'Storage', text: 'Datasets, checkpoints and artefacts with integrity verification.' },
      { id: 'electricity', title: 'Electricity', text: 'The T600 trains at home: every run consumes real energy.' },
      { id: 'maintenance', title: 'Maintenance', text: 'Disks, cooling, backups and replacing worn-out equipment.' },
      { id: 'research', title: 'Research and development', text: 'Time to study, measure and implement — the scarcest resource.' },
    ],
    hardwareTitle: 'Used hardware donation',
    hardwareText: 'Components and equipment that interest the lab, in any state (healthy or not):',
    hardware: [
      { id: 'gpu', title: 'GPUs', text: 'For local training and the next scaling phases.' },
      { id: 'workstation', title: 'Workstations', text: 'Machines with decent memory slots and PCI lanes.' },
      { id: 'server', title: 'Servers', text: 'Rack or tower, to expand the training environment.' },
      { id: 'ram', title: 'RAM', text: 'DDR4/DDR5 with useful density for the rest of the budget.' },
      { id: 'storage', title: 'SSDs and HDDs', text: 'NVMe SSDs and larger disks for datasets and checkpoints.' },
      { id: 'cpu', title: 'CPUs', text: 'Cores and threads for data preparation.' },
      { id: 'motherboard', title: 'Motherboards', text: 'Boards compatible with available sockets and slots.' },
      { id: 'psu', title: 'Power supplies', text: 'Power supplies with real wattage and efficiency, complete with cables.' },
      { id: 'network', title: 'Network equipment', text: 'Switches, NICs and 1 GbE+ networks.' },
      { id: 'cooling', title: 'Cooling', text: 'Fans, coolers and liquid cooling for long runs.' },
    ],
    processKicker: 'Process',
    processTitle: 'From contact to the public log',
    steps: [
      { title: 'Contact', text: 'The channel is in preparation — the contact page states the current status.' },
      { title: 'Equipment proposal', text: 'Describe brand, model, quantity and condition of the components.' },
      {
        title: 'Technical evaluation',
        text: 'All offered equipment is evaluated before being accepted. Compatibility and real condition decide.',
      },
      { title: 'Public log', text: 'What is accepted — and what is not — appears on the transparency page, with values when applicable.' },
    ],
  },

  transparency: {
    heroKicker: 'Transparency',
    heroTitle: 'The numbers, when they exist',
    heroLede:
      'A project that asks for support must show, with published numbers, what it does with it. This page is the home of those records.',
    publishTitle: 'What will be published here',
    published: [
      { title: 'Donations received', text: 'Amount, date, form of support and state of use — never estimates presented as spending.' },
      { title: 'Hardware received', text: 'Components, brand and model, condition and destination in the lab.' },
      { title: 'Expenses', text: 'Electricity, hosting, storage and maintenance, per period.' },
      { title: 'Acquisitions', text: 'Summary of receipts and the actual use of bought equipment.' },
      { title: 'Periodic reports', text: 'Summaries per interval with what came in, what went out and how it was used.' },
    ],
    currentTitle: 'Current status',
    currentText:
      'There are no records to show yet: no collection mechanism exists in this phase and the log structure is being built. The tables will publish real numbers — or they will not be published.',
    principlesTitle: 'Commitments',
    principles: [
      { title: 'No invented numbers', text: 'No value appears here that is not verified and documented.' },
      { title: 'Supporters by consent', text: 'A supporter is only identified publicly with explicit authorisation.' },
      { title: 'Hardware evaluated before acceptance', text: 'Criteria and evaluation results live in the public log.' },
      { title: 'Bank details never published', text: 'When a payment channel exists, it will be announced on the proper pages — never via a personal email.' },
    ],
  },

  contact: {
    heroKicker: 'Contact',
    heroTitle: 'The channel, stated frankly',
    heroLede:
      'Five contact categories are prepared — and an honest channel status: with no institutional email and no backend in this phase, nothing is sent from here.',
    categoriesTitle: 'What can fit where',
    categories: [
      { id: 'general', title: 'General inquiries', text: 'Questions about the project, its status and its documentation.' },
      { id: 'research-collab', title: 'Scientific collaboration', text: 'Research ideas, methodology, evaluation and technical review.' },
      { id: 'technical', title: 'Technical contributions', text: 'Code, tests, mathematics, CUDA and data engineering.' },
      { id: 'donations', title: 'Donations', text: 'Financial support and equipment acceptance conditions.' },
      { id: 'hardware', title: 'Hardware donation', text: 'Specification, condition and logistics of machines and components.' },
    ],
    channelTitle: 'Channel status',
    channelText:
      'There is no institutional email or backend to receive messages yet — and we will not pretend otherwise: the form does not send messages.',
    channelBullets: [
      'The founder’s personal address is not published, for privacy.',
      'The institutional email will be announced on this page when it is ready.',
      'Until then, this page documents the real status instead of simulating submission.',
    ],
    privacyNote: 'This website collects no personal data and uses no invasive analytics.',
  },

  notFound: {
    title: 'Page not found',
    text: 'The address may have moved or never existed. The project’s map starts on the home page.',
    cta: 'Back to the home page',
  },
}
