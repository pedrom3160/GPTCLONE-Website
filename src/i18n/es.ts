import type { SiteContent } from './types'

/** Spanish (Castilian) content. Must satisfy the SiteContent contract exactly. */
export const content: SiteContent = {
  meta: {
    tagline: 'Una LLM construida desde cero — investigación independiente',
    pages: {
      home: {
        title: 'Una LLM construida desde cero',
        description:
          'GPTCLONE desarrolla y entrena una LLM propia y promueve investigación, aprendizaje gratuito y participación humana — cuatro misiones, las personas primero.',
      },
      about: {
        title: 'Sobre el proyecto',
        description:
          'La historia, la misión y la filosofía de GPTCLONE: construir una LLM desde cero con medición, pruebas y honestidad técnica.',
      },
      technology: {
        title: 'Tecnología',
        description:
          'Tokenizador byte-level BPE, Transformer decoder-only, Training Engine e Inference Engine — cada uno con su estado técnico declarado: implementado, especificado, medido o planificado.',
      },
      research: {
        title: 'Investigación',
        description:
          'Las líneas de investigación de GPTCLONE: precisión en GPU Turing, compresión multilingüe del tokenizador, escala pequeña y evaluación honesta.',
      },
      roadmap: {
        title: 'Roadmap',
        description:
          'Catorce hitos (M0–M13) en cinco fases, del bootstrap a la versión 1.0 — con estados reales y sin progreso inventado.',
      },
      contribute: {
        title: 'Colaborar',
        description:
          'Programadores, estudiantes, investigadores y entusiastas: cómo colaborar con GPTCLONE en diez áreas de interés.',
      },
      donations: {
        title: 'Donaciones',
        description:
          'Apoyo financiero y donación de hardware usado para el laboratorio local de GPTCLONE — evaluado y registrado públicamente, sin pagos en esta fase.',
      },
      transparency: {
        title: 'Transparencia',
        description:
          'Los compromisos de transparencia de GPTCLONE: donaciones, hardware recibido, gastos e informes con números reales.',
      },
      contact: {
        title: 'Contacto',
        description:
          'Canales de GPTCLONE para contactos generales, colaboración científica, contribuciones técnicas, donaciones y hardware — con el estado del canal declarado.',
      },
    },
    notFound: {
      title: 'Página no encontrada',
      description: 'La dirección del sitio web de GPTCLONE no existe o ha cambiado de lugar.',
    },
  },

  nav: {
    home: 'Inicio',
    about: 'Sobre',
    technology: 'Tecnología',
    research: 'Investigación',
    roadmap: 'Roadmap',
    contribute: 'Colaborar',
    donations: 'Donaciones',
    transparency: 'Transparencia',
    contact: 'Contacto',
    communityMenu: 'Participar',
    openMenu: 'Abrir menú de navegación',
    closeMenu: 'Cerrar menú',
    menuAria: 'Menú de navegación del sitio',
    languageMenu: 'Elegir idioma',
    themeToggle: 'Alternar tema claro/oscuro',
    skipToContent: 'Saltar al contenido principal',
  },

  footer: {
    blurb:
      'Proyecto de investigación independiente: una LLM desarrollada y entrenada desde cero — el tokenizador, la arquitectura, los pesos, el entrenamiento y la inferencia son nuestros.',
    tagline: 'People first. AI for everyone.',
    projectTitle: 'Proyecto',
    communityTitle: 'Participar',
    statusTitle: 'Estado',
    statusLines: ['M0 completado · M1 bloqueado por los gates de datos', 'Sin pesos, datasets ni checkpoints', 'Repositorios privados en esta fase'],
    note: 'GPTCLONE no está asociado a ningún proveedor de IA ni utiliza servicios externos de LLM.',
    builtNote: 'Este sitio web también fue construido desde cero.',
  },

  statusLabels: {
    completed: 'Completado',
    inProgress: 'En curso',
    planned: 'Planificado',
    blocked: 'Bloqueado',
    implemented: 'Implementado',
    specified: 'Especificado',
    measured: 'Medido',
  },

  common: {
    learnMore: 'Ver la tecnología',
    viewRoadmap: 'Ver el roadmap',
    getInTouch: 'Contactar',
  },

  home: {
    heroKicker: 'Proyecto de investigación independiente en IA',
    heroTitlePlain: 'Una LLM construida',
    heroTitleAccent: 'desde cero, del entrenamiento a la inferencia.',
    heroLede:
      'GPTCLONE desarrolla y entrena su propio modelo de lenguaje a gran escala: tokenizador propio, arquitectura Transformer propia, pesos inicializados aleatoriamente por nuestro código, datasets seleccionados por el proyecto y un ciclo de entrenamiento enteramente nuestro. Ningún peso preentrenado de terceros entra en ninguna fase.',
    heroTagline: 'Construir IA independiente. Crear oportunidades. Las personas primero.',
    heroPrimary: 'Conocer el proyecto',
    heroSecondary: 'Ver el roadmap',
    stats: [
      { value: 'M0 completado', label: 'Infraestructura base cerrada con 73 pruebas', tone: 'positive' },
      { value: '8,7 M parámetros', label: 'Primer modelo especificado, todavía no entrenado', tone: 'neutral' },
      { value: 'T600 · 4 GB', label: 'GPU local auditada y medida', tone: 'neutral' },
      { value: 'M1 bloqueado', label: 'Gates de datos por resolver, sin progreso inventado', tone: 'blocked' },
    ],
    pillarsKicker: 'Cuatro misiones',
    pillarsTitle: 'GPTCLONE en cuatro pilares',
    pillarsText:
      'Un único proyecto, cuatro misiones asumidas: la tecnología que construimos, el conocimiento que buscamos, el aprendizaje que queremos compartir y las personas a quienes queremos dar oportunidades. El estado real de cada pilar está declarado — como todo lo demás.',
    pillars: [
      {
        id: 'ai',
        kicker: 'Pilar 1 · Misión tecnológica',
        title: 'GPTCLONE AI',
        text: 'Nuestra misión tecnológica: construir una LLM independiente comprendiendo y desarrollando cada componente — no adoptar un modelo preentrenado y cambiarle el nombre.',
        formula: null,
        bullets: [
          'Arquitectura Transformer y tokenizador propios',
          'Pesos inicializados y entrenados por el proyecto',
          'Training Engine e Inference Engine propios',
          'API de servicio independiente',
          'Investigación y desarrollo continuos',
        ],
        status: 'inProgress',
        page: 'technology',
        linkLabel: 'Ver la tecnología',
      },
      {
        id: 'research',
        kicker: 'Pilar 2 · Misión científica',
        title: 'GPTCLONE Research',
        text: 'Nuestra misión científica: producir conocimiento verificable sobre LLMs, Machine Learning y Deep Learning, arquitecturas Transformer, entrenamiento eficiente, inferencia, seguridad e infraestructura de IA — para compartirlo con la comunidad, dentro de las licencias y las reglas de publicación.',
        formula: null,
        bullets: [
          'Large Language Models, Machine Learning y Deep Learning',
          'Arquitecturas Transformer y entrenamiento eficiente',
          'Inferencia, evaluación y escala pequeña',
          'Seguridad y procedencia de artefactos',
          'Infraestructura de inteligencia artificial',
          'Conocimiento compartido con la comunidad, respetando licencias y límites de publicación',
        ],
        status: 'specified',
        page: 'research',
        linkLabel: 'Ver la investigación',
      },
      {
        id: 'academy',
        kicker: 'Pilar 3 · Misión educativa',
        title: 'GPTCLONE Academy',
        text: 'Una academia de aprendizaje gratuita, en preparación — pensada para personas desempleadas, profesiones transformadas por la automatización, quienes cambian de carrera, jóvenes y principiantes sin conocimientos de programación. El aprendizaje debe ser accesible sin formación académica previa y sostenido por donaciones y alianzas.',
        formula: 'Learn → Practice → Build → Collaborate → Grow',
        bullets: [
          'Informática, hardware, matemáticas y álgebra',
          'Python, programación y desarrollo de software',
          'Inteligencia artificial, Machine Learning y Deep Learning',
          'Redes, sistemas operativos, ciberseguridad y competencias digitales',
        ],
        status: 'planned',
        page: null,
        linkLabel: null,
      },
      {
        id: 'human',
        kicker: 'Pilar 4 · Misión humana y social',
        title: 'GPTCLONE Human Initiative',
        text: 'El compromiso a largo plazo de que el desarrollo de la IA cree oportunidades: acercar a las personas a la tecnología, convertir el miedo en conocimiento y el cambio en aprendizaje y participación. No prometemos empleos, salarios ni programas que todavía no existen — asumimos la misión y la construimos públicamente.',
        formula: null,
        bullets: [
          'Involucrar a las personas en el desarrollo tecnológico',
          'Colaboración, aprendizaje y recalificación',
          'Estudiantes, investigadores y programadores junto al proyecto',
          'Oportunidades profesionales a medida que el proyecto crezca',
          'Colaboración entre personas y sistemas de IA',
        ],
        status: 'planned',
        page: null,
        linkLabel: null,
      },
    ],
    missionKicker: 'Misión',
    missionTitle: 'Cada componente es de primera parte',
    missionText:
      'La misión es desarrollar una LLM genuina, del tokenizador a la inferencia, dando a cada pieza un origen verificable. El conocimiento técnico puede venir de artículos e investigación pública; los pesos deben venir únicamente de nuestro entrenamiento.',
    missionBullets: [
      'Tokenizador byte-level BPE propio',
      'Arquitectura Transformer propia',
      'Pesos inicializados aleatoriamente por nuestro código',
      'Datasets seleccionados y preparados por el proyecto',
      'Training Engine propio',
      'Inference Engine propio',
      'API de servicio independiente',
      'Interfaz propia',
      'Infraestructura propia a largo plazo',
    ],
    philosophyKicker: 'People first',
    philosophyTitle: 'Las personas primero. IA para todos.',
    philosophyQuote:
      'No creemos que el futuro tenga que ser las personas contra las máquinas. Creemos que puede ser gente construyendo el futuro con la ayuda de las máquinas.',
    philosophyText:
      'Creemos que la inteligencia artificial debe fortalecer a las personas, ampliar el acceso al conocimiento y crear oportunidades para todos. Nuestro objetivo no es simplemente construir IA, sino ayudar a la gente a entenderla, aprender de ella y participar en la definición de su futuro.',
    philosophyValues: [
      'Esperanza',
      'Responsabilidad',
      'Inclusión',
      'Conocimiento',
      'Oportunidad',
      'Colaboración',
      'Independencia tecnológica',
    ],
    honestTitle: 'El estado real del desarrollo',
    honestDone: [
      {
        title: 'La infraestructura M0 está implementada.',
        text: 'Configuración validada, logging, seeds y determinismo, device, memoria, auditoría de entorno y CLI — todo cubierto por pruebas.',
      },
      {
        title: 'El primer modelo está especificado.',
        text: 'La arquitectura completa (RoPE, RMSNorm, GQA, SwiGLU), el tokenizador, el entrenamiento y la inferencia documentados como contratos.',
      },
      {
        title: 'El hardware local está medido.',
        text: 'La T600 ha sido auditada: FP32 frente a FP16 comparados con pruebas A/B, sin ganancia medida de tensor cores — la precisión se decidirá con evidencia.',
      },
    ],
    honestPlanned: [
      {
        title: 'Todavía no existe tokenizador, Transformer, entrenamiento ni inferencia.',
        text: 'No se ha entrenado ningún peso ni se ha ejecutado ningún ciclo de entrenamiento.',
      },
      {
        title: 'El M1 está bloqueado.',
        text: 'Las fuentes de datos y licencias siguen por elegir y las preguntas de aprendizaje por responder.',
      },
      {
        title: 'No se ha producido nada.',
        text: 'Sin datasets, sin checkpoints, sin modelo. Este sitio web documenta el plan, no resultados.',
      },
    ],
    areasKicker: 'Áreas de investigación',
    areasTitle: 'Lo que se investiga y se construye',
    areasText: 'Ocho dominios técnicos, del byte al servicio, con estados declarados en la página de Tecnología.',
    areas: [
      {
        id: 'foundations',
        title: 'Infraestructura de investigación',
        text: 'Configuración, logging, reproducibilidad, device y memoria — la base ejecutada y probada que sostiene el resto.',
      },
      {
        id: 'tokenizer',
        title: 'Tokenizador byte-level BPE',
        text: '256 bytes, tokens especiales y normalización Unicode, entrenado en nuestro corpus, con compresión medida por idioma.',
      },
      {
        id: 'transformer',
        title: 'Transformer decoder-only',
        text: 'RoPE, RMSNorm, GQA y SwiGLU — una arquitectura moderna definida y justificada por el proyecto.',
      },
      {
        id: 'training',
        title: 'Training Engine',
        text: 'AdamW propio, warmup + cosine, checkpoints atómicos, reanudación verificada y registro de experimentos.',
      },
      {
        id: 'gpu-computing',
        title: 'GPU Computing',
        text: 'La portátil T600 es la primera plataforma: VRAM, precisión y throughput decididos por medición.',
      },
      {
        id: 'inference',
        title: 'Inference Engine',
        text: 'Sampling, KV cache, contexto y streaming escritos por nosotros, sobre nuestro modelo.',
      },
      {
        id: 'data-engineering',
        title: 'Ingeniería de datos',
        text: 'Procedencia antes de la descarga, deduplicación, cuotas PT/EN/ES y splits deterministas.',
      },
      {
        id: 'api-interface',
        title: 'API e interfaz',
        text: 'Contrato HTTP propio — el protocolo OpenAI no es una dependencia — y la interfaz propia del proyecto.',
      },
    ],
    roadmapKicker: 'Roadmap',
    roadmapTitle: 'Catorce hitos, cinco fases',
    roadmapText:
      'El programa aprobado va del bootstrap (M0, completado) a la versión 1.0 (M13). Cada hito tiene criterios objetivos, estimación de esfuerzo y gates de progresión — ningún hito avanza sin autorización expresa.',
    roadmapPreview: [
      { code: 'F0', title: 'Fundaciones — M0', tone: 'completed', text: 'Bootstrap, pruebas y auditoría de entorno completados.' },
      { code: 'F1', title: 'Lenguaje — M1, M2', tone: 'blocked', text: 'Data Engine bloqueado por los gates; después, el tokenizador.' },
      { code: 'F2', title: 'Modelo — M3 a M6', tone: 'planned', text: 'Transformer, entrenamiento, primer preentrenamiento local y nube.' },
      { code: 'F3', title: 'Inferencia — M7, M8', tone: 'planned', text: 'Motor de inferencia y evaluación honesta.' },
      { code: 'F4 · F5', title: 'Alineamiento y producto — M9 a M13', tone: 'planned', text: 'SFT, alineamiento, API, optimización y versión 1.0.' },
    ],
    collabTitle: 'Colaborar',
    collabText: 'Hay matemáticas, código y documentación que construir. Áreas de interés y disciplina de integración.',
    donationsTitle: 'Apoyar el proyecto',
    donationsText: 'El hardware y la infraestructura son el cuello de botella real de un entrenamiento local. Toda la ayuda se registrará públicamente.',
    contactTitle: 'Contactar',
    contactText: 'Canal institucional en preparación — se publica el estado real en lugar de simular un formulario.',
  },

  about: {
    heroKicker: 'Sobre el proyecto',
    heroTitle: 'Construcción desde cero, entendida paso a paso',
    heroLede:
      'GPTCLONE es un proyecto independiente de investigación y desarrollo en inteligencia artificial: una LLM desarrollada y entrenada desde cero — con rigor científico, medición obligatoria y progresión controlada.',
    historyKicker: 'Historia',
    historyTitle: 'Cómo llegó el proyecto hasta aquí',
    history: [
      {
        date: 'Bootstrap',
        title: 'M0 completado — infraestructura ejecutable',
        text: 'El primer hito se cierra con la base ejecutable del proyecto: configuración YAML validada, logging, seeds y determinismo, gestión de device y memoria, auditoría reproducible del entorno, CLI y 73 pruebas.',
      },
      {
        date: '09-11-2026',
        title: 'Auditoría de la GPU local y revisión local-first',
        text: 'La T600 se caracteriza por medición: FP32 a 1,176 TFLOPS frente a FP16 a 0,321 TFLOPS en matmul, BF16 emulado y sin ganancia medida de tensor cores. El plan pasa a ser local-first: la portátil antes de la nube.',
      },
      {
        date: '10-11-2026',
        title: 'La primera LLM queda especificada',
        text: 'Arquitectura, tokenizador, training engine, inference engine y la matriz de fuentes de datos — todo especificado sin código. El mismo día, los principios fundacionales de construcción desde cero se formalizan como regla normativa.',
      },
      {
        date: 'A continuación',
        title: 'M1 — Data Engine (bloqueado por los gates)',
        text: 'Tres gates pendientes: responder las preguntas de aprendizaje, decidir fuentes y licencias de datos y dar autorización expresa. El plan no avanza sin ellos — y este sitio web lo declara tal como es.',
      },
    ],
    mission: {
      title: 'Misión',
      text: 'Desarrollar y entrenar una LLM genuinamente propia — arquitectura, tokenizador, pesos y entrenamiento — cerrando el ciclo completo con cada pieza comprendida, probada y medida.',
    },
    vision: {
      title: 'Visión',
      text: 'Hacer que el proyecto sea open source, con el modelo, el código y la documentación examinables por cualquiera — la licencia de cada capa decidida con honestidad al final del programa.',
    },
    peopleKicker: 'La dimensión humana',
    peopleTitle: 'Personas e inteligencia artificial',
    peopleIntro:
      'La evolución de la IA transforma profesiones, elimina funciones y puede crear dificultades reales para quienes pierden el empleo. No vamos a ignorar ese problema, minimizarlo ni hacer promesas irreales. Nombrarlo con honestidad — y construir paso a paso una respuesta responsable — es el camino más sólido.',
    people: [
      {
        title: 'El miedo tiene fundamento',
        text: 'La automatización está transformando el trabajo: algunas funciones desaparecen y otras cambian de forma profunda. Para muchas personas eso genera incertidumbre legítima — tratar ese miedo como ignorancia es el punto de partida equivocado.',
      },
      {
        title: 'El conocimiento no es un privilegio',
        text: 'Quien comprende la tecnología está mejor situado para usarla y adaptarse. Democratizar el conocimiento sobre IA — sin barreras académicas — es la forma más directa de ampliar las oportunidades.',
      },
      {
        title: 'Acercar a las personas la tecnología',
        text: 'Queremos que construir, entrenar y usar una LLM deje de parecer un universo lejano: explicaciones claras, ejercicios y proyectos reales acercan a las personas en lugar de intimidarlas.',
      },
      {
        title: 'Colaboración, no sustitución',
        text: 'Defendemos la colaboración entre personas y sistemas de IA: máquinas para ampliar capacidades humanas, personas para preguntar, decidir y dar contexto. El futuro no se deja al azar — ni a las máquinas.',
      },
      {
        title: 'Del cambio a la oportunidad',
        text: 'El cambio tecnológico puede convertirse en aprendizaje: recalificación, nuevas competencias y nuevas formas de participar en el desarrollo. Esa transformación es la que la GPTCLONE Academy y la Human Initiative quieren apoyar — como misión asumida, todavía no operativa.',
      },
    ],
    peopleQuote:
      'No creemos que el futuro tenga que ser las personas contra las máquinas. Creemos que puede ser gente construyendo el futuro con la ayuda de las máquinas.',
    independenceKicker: 'Independencia tecnológica',
    independenceTitle: 'PyTorch es la calculadora; el modelo es nuestro',
    independenceText:
      'Independencia no significa reimplementar CUDA, los drivers ni el sistema operativo. Significa que las decisiones de arquitectura y las matemáticas son nuestras — y que ninguna biblioteca decide el modelo por nosotros.',
    usedTitle: 'Lo que usamos',
    used: [
      'PyTorch para tensores, autograd y aceleración GPU',
      'CUDA, drivers y bibliotecas de bajo nivel',
      'NumPy, Git, pytest y herramientas de sistema',
      'Algoritmos publicados: BPE, RoPE, GQA, SwiGLU, AdamW',
    ],
    notUsedTitle: 'Lo que no usamos',
    notUsed: [
      'Pesos, checkpoints o adapters de modelos externos',
      'Un tokenizador preentrenado como artefacto del proyecto',
      'Importaciones automáticas de arquitecturas completas',
      'Fine-tuning de terceros como sustituto de nuestro preentrenamiento',
    ],
    philosophyKicker: 'Filosofía',
    philosophyTitle: 'Principios de construcción desde cero',
    principles: [
      {
        title: 'Medir antes de afirmar',
        text: 'VRAM, throughput y calidad se miden. Nada se declara rápido, pequeño o bueno sin números registrados.',
      },
      {
        title: 'Probar antes de hacer commit',
        text: 'La suite pytest tiene que estar verde. El código que no corre en pruebas no se declara hecho.',
      },
      {
        title: 'Honestidad técnica',
        text: 'Distinguir implementado, no validado, planificado y teoría — en esta página y en todo el sitio.',
      },
      {
        title: 'Local-first',
        text: 'La T600 es la primera plataforma de entrenamiento; la nube es la segunda fase, con criterios medidos y presupuesto por corrida.',
      },
      {
        title: 'Configuración como datos',
        text: 'YAML validado que rechaza claves desconocidas, en lugar de constantes escondidas en el código.',
      },
      {
        title: 'Progresión controlada',
        text: 'Los hitos se cierran con criterios objetivos y autorización expresa. Ningún gate se salta por conveniencia.',
      },
    ],
    nameTitle: '¿Por qué “GPTCLONE”?',
    nameText:
      'El nombre es directo: la arquitectura de un GPT se reconstruye — se clona — en espíritu técnico, desde cero. Lo que se clona es la técnica y el método, nunca los pesos: un modelo solo es GPTCLONE si la arquitectura, el tokenizador, la inicialización, el preentrenamiento y el checkpoint son nuestros.',
    founderTitle: 'Una persona, una portátil, un plan documentado',
    founderText:
      'GPTCLONE lo conduce un estudiante independiente, con un roadmap completo y revisiones documentadas. El progreso es deliberadamente lento: demasiado rápido es el atajo que este proyecto decidió no tomar.',
  },

  technology: {
    heroKicker: 'Tecnología',
    heroTitle: 'Los componentes, con estados declarados',
    heroLede:
      'Cada componente de la LLM lleva un estado técnico declarado — implementado, especificado, medido o planificado. Nada se presenta como funcionando sin una prueba que haya corrido.',
    legendText:
      'Estados: Implementado significa código bajo la suite de pruebas. Especificado significa contrato detallado todavía sin código. Medido significa números medidos en hardware real. Planificado significa alcance aprobado en el roadmap.',
    sections: [
      {
        id: 'foundations',
        status: 'implemented',
        milestone: 'M0',
        title: 'Infraestructura de investigación',
        text: 'La base ejecutable que sostiene todo lo que viene después — cerrada en el M0 y cubierta por pruebas.',
        bullets: [
          'Configuración YAML validada que rechaza claves desconocidas',
          'Seeds y determinismo en tres generadores (Python, NumPy, PyTorch)',
          'Monitorización de VRAM/RAM y resolución de device',
          'Auditoría reproducible del entorno y CLI propia',
        ],
      },
      {
        id: 'tokenizer',
        status: 'specified',
        milestone: 'M2',
        title: 'Tokenizador byte-level BPE',
        text: 'El tokenizador lo entrenamos nosotros, en nuestro corpus — nunca adoptado de terceros.',
        bullets: [
          '256 bytes + tokens especiales para la futura conversación',
          'Normalización Unicode y limpieza de caracteres de control',
          'Entrenamiento determinista: mismo corpus y seed = mismos merges',
          'Benchmark de compresión bytes/token por idioma (PT/EN/ES)',
        ],
      },
      {
        id: 'transformer',
        status: 'specified',
        milestone: 'M3',
        title: 'Arquitectura Transformer',
        text: 'Un decoder-only igual a una LLM moderna, lo bastante pequeño para 4 GB sin OOM en la portátil.',
        bullets: [
          'RoPE en lugar de embeddings posicionales aprendidos',
          'RMSNorm con prenormalización y SwiGLU en la feed-forward',
          'Grouped-Query Attention 8/2 para un KV cache compacto',
          'Primer preset: 8 719 616 parámetros (16 384 de vocabulario, d=256, 6 bloques)',
        ],
      },
      {
        id: 'training',
        status: 'specified',
        milestone: 'M4',
        title: 'Training Engine',
        text: 'El ciclo de entrenamiento es observable, reanudable y seguro en precisión — escrito por nosotros.',
        bullets: [
          'Cross-entropy autorregresiva sobre logits desplazados',
          'AdamW propio, con weight decay selectivo por grupo',
          'Warmup + cosine, gradient clipping y acumulación',
          'Checkpoints con escritura atómica, SHA-256 y reanudación probada',
        ],
      },
      {
        id: 'gpu-computing',
        status: 'measured',
        milestone: null,
        title: 'GPU Computing',
        text: 'La T600 Laptop (Turing, SM 7.5) es la primera plataforma de entrenamiento — caracterizada por medición, no por folleto.',
        bullets: [
          '4 GB de VRAM; 3,22 GiB libres medidos en la auditoría',
          'FP32 1,176 TFLOPS frente a FP16 0,321 TFLOPS medidos en matmul',
          'AMP medido 1,72× más lento que FP32 en el paso de entrenamiento',
          'Sin BF16 nativo ni TF32 — la política de precisión se decidirá en el M4 con evidencia',
        ],
      },
      {
        id: 'inference',
        status: 'specified',
        milestone: 'M7',
        title: 'Inference Engine',
        text: 'Generación desde nuestro checkpoint, con paridad CPU/CUDA exigida por pruebas.',
        bullets: [
          'Greedy y sampling: temperature, top-k, top-p, penalización de repetición',
          'KV cache y gestión de la ventana de contexto',
          'Streaming UTF-8 por generador',
          'Límites de latencia medidos y documentados',
        ],
      },
      {
        id: 'data-engineering',
        status: 'planned',
        milestone: 'M1',
        title: 'Ingeniería de datos',
        text: 'Datos con procedencia: nada entra sin licencia, origen y verificación registrados. Hasta ahora no se ha elegido ninguna fuente.',
        bullets: [
          'Procedencia: fuente, licencia, fecha e idioma registrados antes de la descarga',
          'Deduplicación exacta (hash) y casi-duplicados (MinHash/LSH)',
          'Cuotas de equilibrio lingüístico PT/EN/ES',
          'Splits deterministas con informe de leakage = 0',
        ],
      },
      {
        id: 'api-interface',
        status: 'specified',
        milestone: 'M11',
        title: 'API e interfaz',
        text: 'El producto final sirve a nuestro modelo con un contrato propio — y la interfaz propia ya está construida como demo.',
        bullets: [
          'Servicio HTTP propio con streaming',
          'Sesiones e historial persistentes',
          'El protocolo OpenAI no es una dependencia arquitectónica',
          'La interfaz web ya existe con respuestas simuladas, hasta el modelo real',
        ],
      },
    ],
    integrityTitle: 'Prohibido por principio',
    integrityText:
      'La regla de dependencias es default deny: nada entra por conveniencia y la verificación la ejecutan pruebas, no la disciplina.',
    integrityBullets: [
      'Ningún from_pretrained, AutoModel ni checkpoint externo en la base del proyecto',
      'Pruebas negativas fallan si se carga un artefacto externo',
      'Manifiestos con SHA-256 y cadena de custodia verificable',
      'Cualquier excepción exige la decisión expresa y escrita del fundador',
    ],
  },

  research: {
    heroKicker: 'Investigación',
    heroTitle: 'La metodología existe; las publicaciones vendrán',
    heroLede:
      'La investigación de GPTCLONE sigue un protocolo simple: medir, registrar y publicar solo lo verificado. Todavía no se ha publicado ningún artículo — y ningún resultado aparece aquí antes de estar documentado en el repositorio.',
    linesTitle: 'Líneas de investigación',
    lines: [
      {
        id: 'precision',
        title: 'Precisión en una Turing sin BF16',
        text: 'BF16 y TF32 no existen en la T600 y el FP16 midió más lento que el FP32. Investigación cotidiana: política de precisión decidida con pruebas A/B medidas, no con tablas de marketing.',
      },
      {
        id: 'tokenizer-compression',
        title: 'Compresión multilingüe del BPE byte-level',
        text: 'Cómo se comporta la compresión bytes/token entre portugués, inglés y español — y qué cuotas de muestreo minimizan el desequilibrio entre idiomas.',
      },
      {
        id: 'small-scale',
        title: 'Hasta dónde llega la escala pequeña',
        text: 'Qué consigue un modelo de 8–40 M de parámetros entrenado con 4 GB de VRAM — y qué metodología distingue coherencia de conversación.',
      },
      {
        id: 'provenance',
        title: 'Procedencia e integridad de artefactos',
        text: 'Manifiestos, hashes SHA-256, cadena de custodia y reconstrucción determinista a partir del manifiesto: la integridad empieza en los datos, no en los pesos.',
      },
      {
        id: 'evaluation',
        title: 'Evaluación honesta de modelos pequeños',
        text: 'Rúbricas, sondas de generación, regresiones con prompts fijos e informes que declaran explícitamente lo que no se midió.',
      },
    ],
    logTitle: 'Diario de experimentos',
    logText:
      'La estructura prevista en el roadmap: cada experimento documentado con ID, commit, configuración, dataset, hardware y métricas en un índice de solo adición. Los resultados se publicarán aquí después de medirse y verificarse.',
    methodologyTitle: 'Método',
    methodology: [
      {
        title: 'Un hecho, un lugar',
        text: 'El roadmap guarda criterios y fechas; la arquitectura guarda fronteras; el manual explica. Cuando un hecho cambia, cambia donde vive.',
      },
      {
        title: 'Experimentos con esquema versionado',
        text: 'ID, commit, configuración, dataset, hardware y métricas en un índice append-only con artefactos verificables.',
      },
      {
        title: 'Reproducibilidad numérica',
        text: 'Seeds en tres generadores, flags de determinismo de CUDA/cuDNN y configuración versionada del experimento.',
      },
      {
        title: 'Informes que confiesan',
        text: 'Cada informe de evaluación declara lo que no se midió y si hubo regresión — sin promedios maquillados.',
      },
    ],
    responsibilityKicker: 'Responsabilidad social',
    responsibilityTitle: 'Investigación que sirve a las personas',
    responsibilityText:
      'La investigación técnica no es neutra: lo que se publica — y lo que se admite — condiciona a quien aprende de ello. Investigar con medición, procedencia y evaluación honesta es también responsabilidad social: producir conocimiento que cualquiera puede examinar, criticar y reutilizar.',
    responsibilityPoints: [
      'Los resultados solo se publican cuando están verificados — nunca antes.',
      'Lo que no se midió se declara: ningún informe esconde sus limitaciones.',
      'El conocimiento producido debería alimentar el aprendizaje gratuito de la futura GPTCLONE Academy.',
      'La seguridad y la procedencia forman parte del alcance, no un apéndice.',
    ],
    releaseNote:
      'Los informes, los datos de experimentos y las futuras publicaciones se enlazarán en esta página en el momento en que estén medidos y documentados.',
  },

  roadmap: {
    heroKicker: 'Roadmap',
    heroTitle: 'Catorce hitos, cero progreso inventado',
    heroLede:
      'El programa aprobado corre del bootstrap a la versión 1.0 en cinco fases. Los estados siguientes son los oficiales del repositorio principal — incluido un bloqueo honesto.',
    gatesTitle: 'Las reglas de progresión',
    gates: [
      'Las preguntas de aprendizaje del hito anterior tienen que estar respondidas.',
      'Código, manual y CHANGELOG actualizados en la misma sesión.',
      'Autorización expresa para empezar el siguiente hito.',
    ],
    legendNote: 'Estados: Completado · En curso · Planificado · Bloqueado. El M1 es el único bloqueado; todos los demás están planificados.',
    phases: [
      {
        id: 'f0',
        title: 'F0 — Fundaciones',
        summary: 'Infraestructura ejecutable, medida y probada.',
        milestones: [
          {
            code: 'M0',
            title: 'Bootstrap',
            status: 'completed',
            summary: 'Config, logging, seeds, device, memoria, auditoría de entorno, CLI y pruebas.',
            hours: null,
          },
        ],
      },
      {
        id: 'f1',
        title: 'F1 — Lenguaje',
        summary: 'Datos con procedencia y el tokenizador entrenado por nosotros.',
        milestones: [
          {
            code: 'M1',
            title: 'Data Engine + Dataset Manager',
            status: 'blocked',
            summary: 'Procedencia, limpieza, dedup, cuotas PT/EN/ES, splits y publicación en el Hub.',
            hours: '60–90 h',
          },
          {
            code: 'M2',
            title: 'Tokenizador Byte-Level BPE',
            status: 'planned',
            summary: 'Entrenamiento BPE en nuestro corpus, especiales de conversación y benchmark multilingüe.',
            hours: '45–70 h',
          },
        ],
      },
      {
        id: 'f2',
        title: 'F2 — Modelo',
        summary: 'Transformer, entrenamiento, primer preentrenamiento local y nube.',
        milestones: [
          {
            code: 'M3',
            title: 'Arquitectura Transformer',
            status: 'planned',
            summary: 'Embeddings, RMSNorm, RoPE, GQA, SwiGLU y pruebas de causalidad.',
            hours: '55–80 h',
          },
          {
            code: 'M4',
            title: 'Training Engine',
            status: 'planned',
            summary: 'AdamW, scheduler, AMP, checkpoints atómicos, reanudación, tracking y benchmark.',
            hours: '80–110 h',
          },
          {
            code: 'M5',
            title: 'Preentrenamiento #1 local',
            status: 'planned',
            summary: 'Primera corrida en la T600, con calibración por medición e informe.',
            hours: '20–35 h',
          },
          {
            code: 'M6',
            title: 'Portabilidad en la nube',
            status: 'planned',
            summary: 'Checkpoints portables, notebooks Colab/Kaggle y sincronización verificada.',
            hours: '35–55 h',
          },
        ],
      },
      {
        id: 'f3',
        title: 'F3 — Inferencia',
        summary: 'Motor de inferencia y evaluación.',
        milestones: [
          {
            code: 'M7',
            title: 'Inference Engine',
            status: 'planned',
            summary: 'Sampling, KV cache, contexto y streaming con paridad CPU/CUDA.',
            hours: '35–50 h',
          },
          {
            code: 'M8',
            title: 'Evaluation Engine',
            status: 'planned',
            summary: 'Perplejidad, sondas, regresiones y comparación entre checkpoints.',
            hours: '30–45 h',
          },
        ],
      },
      {
        id: 'f4',
        title: 'F4 — Alineamiento',
        summary: 'Instruction tuning y evaluación de alineamiento.',
        milestones: [
          {
            code: 'M9',
            title: 'Instruction tuning (SFT)',
            status: 'planned',
            summary: 'SFT sobre nuestro checkpoint, con loss masking y chat template.',
            hours: '40–60 h',
          },
          {
            code: 'M10',
            title: 'Evaluación de alineamiento',
            status: 'planned',
            summary: 'Rúbricas, rechazos, sondas de alucinación y regresiones frente al modelo base.',
            hours: '25–40 h',
          },
        ],
      },
      {
        id: 'f5',
        title: 'F5 — Producto',
        summary: 'API, interfaz, optimización y versión.',
        milestones: [
          {
            code: 'M11',
            title: 'API + interfaz',
            status: 'planned',
            summary: 'Servicio HTTP propio, sesiones e interfaz de conversación.',
            hours: '60–90 h',
          },
          {
            code: 'M12',
            title: 'Optimización',
            status: 'planned',
            summary: 'Profiling, cuantización, KV cache y batching con speedup medido.',
            hours: '35–55 h',
          },
          {
            code: 'M13',
            title: 'Versión 1.0',
            status: 'planned',
            summary: 'Versionamiento, cards, revisión de seguridad y publicación en el Hub.',
            hours: '25–40 h',
          },
        ],
      },
    ],
    blockNoteTitle: '¿Por qué “bloqueado”?',
    blockNoteText:
      'El M1 avanza solo después de tres gates: responder las preguntas de aprendizaje, decidir fuentes y licencias de datos y dar autorización expresa. Hasta entonces no se descarga ningún dataset — ni siquiera para una demo.',
    totalNote:
      'Esfuerzo estimado: 545–820 h de trabajo efectivo (±40 %), revisado al final de cada hito. Las horas no son compromisos — son estimaciones declaradas.',
  },

  contribute: {
    heroKicker: 'Colaborar',
    heroTitle: 'Diez áreas, un método',
    heroLede:
      'GPTCLONE es un proyecto pequeño con problemas interesantes — de las matemáticas a la infraestructura. La ambición es ser open source; hasta que esa puerta se abra, lo esencial es encontrar a las personas adecuadas y fijar expectativas.',
    audiencesTitle: 'Para quiénes',
    audiences: ['Programadores', 'Estudiantes', 'Investigadores', 'Técnicos de informática', 'Especialistas de hardware', 'Personas que quieren aprender', 'Quienes comparten la misión humana'],
    audiencesNote:
      'No hace falta ser especialista para participar: hay trabajo para distintos niveles de experiencia. Lo esencial son las ganas de aprender, la honestidad y el rigor — las pruebas, la revisión y la documentación se encargan del resto.',
    areasTitle: 'Áreas de interés',
    areas: [
      { id: 'python', title: 'Python', text: 'El idioma del proyecto: paquete, pruebas, scripts de operación y revisión de código.' },
      { id: 'machine-learning', title: 'Machine Learning', text: 'Ciclo de entrenamiento, AdamW, schedulers, evaluación de la pérdida y experiment tracking.' },
      { id: 'deep-learning', title: 'Deep Learning', text: 'Transformer decoder-only implementado desde cero: atención, RoPE, RMSNorm, GQA y SwiGLU.' },
      { id: 'math', title: 'Matemáticas y estadística', text: 'Álgebra lineal, probabilidad y cálculo aplicados con el rigor de las especificaciones.' },
      { id: 'transformers', title: 'Transformers', text: 'Anatomía de los modelos: atención, RoPE, normalizaciones y las matemáticas que los sostienen.' },
      { id: 'cuda', title: 'CUDA y GPU computing', text: 'Precisión, VRAM, benchmarks y optimización para una Turing de 4 GB.' },
      { id: 'infrastructure', title: 'Infraestructura', text: 'Checkpoints, sincronización, almacenamiento y automatización de corridas.' },
      { id: 'data-engineering', title: 'Ingeniería de datos', text: 'Procedencia, dedup, cuotas, splits y manifests verificables.' },
      { id: 'nlp', title: 'Procesamiento del lenguaje natural', text: 'Datasets multilingües PT/EN/ES, evaluación y sondas de generación.' },
      { id: 'evaluation-docs', title: 'Evaluación y documentación', text: 'Rúbricas, informes honestos y documentación que enseña, no que disimula.' },
    ],
    humanKicker: 'La misión humana',
    humanTitle: 'Participar también es aprender',
    humanText:
      'La GPTCLONE Academy y la Human Initiative están en fase planificada: todavía no existen cursos, profesores, certificaciones ni programas de apoyo. En esta etapa, la participación se centra en aprender junto al proyecto, colaborar en las áreas reales y ayudar a diseñar, con honestidad, las iniciativas humanas.',
    humanPoints: [
      'Aprender con el proyecto: las técnicas que especifica y mide podrán convertirse en material educativo en el futuro.',
      'Ayudar a planificar la futura GPTCLONE Academy con propuestas concretas.',
      'Reunir a estudiantes, investigadores y profesionales en torno al aprendizaje y la recalificación.',
      'Buscar la colaboración entre personas e IA — probar, usar y comentar las herramientas cuando existan.',
    ],
    processKicker: 'Cómo funciona',
    processTitle: 'Del interés a la integración',
    steps: [
      {
        title: 'Elige el área',
        text: 'Identifica el dominio donde quieres contribuir — la lista anterior es el mapa real del proyecto.',
      },
      {
        title: 'Empieza la conversación',
        text: 'El canal de contacto está en preparación; la página de contacto indica el estado actual.',
      },
      {
        title: 'Propuesta registrada',
        text: 'Las contribuciones entran por una propuesta descrita — origen, alcance e impacto — como las reglas del repositorio.',
      },
      {
        title: 'Decisión e integración',
        text: 'Con la contribución aceptada, el trabajo se integra con pruebas, documentación y changelog.',
      },
    ],
    note: 'Los repositorios siguen privados en esta fase. La apertura pública es un objetivo declarado y se anunciará aquí.',
  },

  donations: {
    heroKicker: 'Donaciones',
    heroTitle: 'Apoyar el laboratorio local',
    heroLede:
      'Entrenar una LLM exige hardware, electricidad, almacenamiento y tiempo. Esta página existe para que el apoyo decidido sea aceptable — y registrable.',
    noticeTitle: 'Aviso honesto',
    noticeText:
      'En esta fase no hay pagos implementados: no existen, ni se inventarán, datos bancarios ni carteras de criptomonedas. Cuando exista un mecanismo seguro, se anunciará en esta página y su uso aparecerá en la de transparencia.',
    impactKicker: 'Alcance',
    impactTitle: 'Lo que el apoyo podría sostener',
    impactText:
      'Si el necesario mecanismo de recolección llegara a existir, este es el alcance a que un apoyo podría destinarse — siempre con evaluación previa y registro público.',
    impact: [
      { title: 'Desarrollo de la LLM', text: 'El corazón del proyecto: ingeniería de datos, arquitectura, entrenamiento, inferencia y evaluación del modelo propio.' },
      { title: 'Infraestructura', text: 'El laboratorio local — hardware, red, almacenamiento y electricidad que sostienen las corridas.' },
      { title: 'Investigación', text: 'Las líneas actuales y futuras: medición, evaluaciones honestas y publicación de lo verificable.' },
      { title: 'Recursos educativos', text: 'Materiales explicativos, ejercicios y proyectos que alimenten el aprendizaje gratuito.' },
      { title: 'Futura GPTCLONE Academy', text: 'La operación gratuita de la iniciativa educativa — una escuela sostenida por donaciones y alianzas, en planificación.' },
    ],
    financialTitle: 'Apoyo financiero',
    financialText: 'Dónde iría un apoyo, si se aceptara:',
    financial: [
      { id: 'hardware', title: 'Hardware', text: 'GPUs, memoria y equipo de entrenamiento — el cuello de botella más directo.' },
      { id: 'infrastructure', title: 'Infraestructura', text: 'Hosting, red y la futura plataforma de entrenamiento.' },
      { id: 'storage', title: 'Almacenamiento', text: 'Datasets, checkpoints y artefactos con verificación de integridad.' },
      { id: 'electricity', title: 'Electricidad', text: 'La T600 entrena en casa: cada corrida consume energía real.' },
      { id: 'maintenance', title: 'Mantenimiento', text: 'Discos, refrigeración, backups y reposición del desgaste.' },
      { id: 'research', title: 'Investigación y desarrollo', text: 'Tiempo para estudiar, medir e implementar — el recurso más escaso.' },
    ],
    hardwareTitle: 'Donación de hardware usado',
    hardwareText: 'Componentes y equipo que interesan al laboratorio, en cualquier estado (sano o no):',
    hardware: [
      { id: 'gpu', title: 'GPUs', text: 'Para el entrenamiento local y las fases siguientes de escala.' },
      { id: 'workstation', title: 'Workstations', text: 'Máquinas con slots de memoria y PCI decentes.' },
      { id: 'server', title: 'Servidores', text: 'Rack o torre, para ampliar el entorno de entrenamiento.' },
      { id: 'ram', title: 'RAM', text: 'DDR4/DDR5 con densidad útil para el resto del presupuesto.' },
      { id: 'storage', title: 'SSDs y HDDs', text: 'SSDs NVMe y discos mayores para datasets y checkpoints.' },
      { id: 'cpu', title: 'CPUs', text: 'Núcleos e hilos para la preparación de datos.' },
      { id: 'motherboard', title: 'Placas base', text: 'Placas compatibles con los sockets y slots disponibles.' },
      { id: 'psu', title: 'Fuentes de alimentación', text: 'Fuentes con potencia y eficiencia reales, con cables completos.' },
      { id: 'network', title: 'Equipo de red', text: 'Switches, NICs y redes de 1 GbE o más.' },
      { id: 'cooling', title: 'Refrigeración', text: 'Ventiladores, coolers y refrigeración líquida para corridas largas.' },
    ],
    processKicker: 'Proceso',
    processTitle: 'Del contacto al registro público',
    steps: [
      { title: 'Contacto', text: 'El canal está en preparación — la página de contacto indica el estado actual.' },
      { title: 'Propuesta del equipo', text: 'Describe marca, modelo, cantidad y estado de los componentes.' },
      {
        title: 'Evaluación técnica',
        text: 'Todo el equipo ofrecido se evalúa antes de ser aceptado. La compatibilidad y el estado real deciden.',
      },
      { title: 'Registro público', text: 'Lo que se acepte — y lo que no — aparece en la página de transparencia, con valores cuando aplique.' },
    ],
  },

  transparency: {
    heroKicker: 'Transparencia',
    heroTitle: 'Los números, cuando existan',
    heroLede:
      'Un proyecto que pide apoyo debe mostrar, con números publicados, lo que hace con él. Esta página es la casa de esos registros.',
    publishTitle: 'Lo que se publicará aquí',
    published: [
      { title: 'Donaciones recibidas', text: 'Importe, fecha, forma de apoyo y estado del uso — nunca estimaciones presentadas como gastos.' },
      { title: 'Hardware recibido', text: 'Componentes, marca y modelo, estado y destino en el laboratorio.' },
      { title: 'Gastos', text: 'Electricidad, hosting, almacenamiento y mantenimiento, por periodo.' },
      { title: 'Adquisiciones', text: 'Resumen de comprobantes y del uso real del equipo comprado.' },
      { title: 'Informes periódicos', text: 'Resúmenes por intervalo con lo que entró, lo que salió y cómo se usó.' },
      { title: 'Desarrollo', text: 'Los estados técnicos declarados — implementado, especificado, medido, planificado — en las páginas de Tecnología y Roadmap.' },
      { title: 'Investigación', text: 'Resultados y diarios de experimentos, publicados cuando estén medidos y verificados — y nada antes de eso.' },
      { title: 'Academy y misiones humanas', text: 'El estado real de las iniciativas educativas y sociales, desde la primera actividad hasta cualquier informe.' },
    ],
    currentTitle: 'Estado actual',
    currentText:
      'Todavía no hay registros: no existe ningún mecanismo de recolección en esta fase y la estructura de registro se está construyendo. Las tablas publicarán números reales — o no se publicarán.',
    principlesTitle: 'Compromisos',
    principles: [
      { title: 'Sin números inventados', text: 'Ningún valor aparece aquí que no sea verificado y documentado.' },
      { title: 'Aportantes por consentimiento', text: 'Un aportante solo se identifica públicamente con autorización explícita.' },
      { title: 'Hardware evaluado antes de aceptarse', text: 'Los criterios y el resultado de la evaluación quedan en el registro público.' },
      { title: 'Datos bancarios nunca publicados', text: 'Cuando exista un canal de pago, se anunciará en las páginas propias — nunca por correo personal.' },
    ],
  },

  contact: {
    heroKicker: 'Contacto',
    heroTitle: 'El canal, declarado con franqueza',
    heroLede:
      'Cinco categorías de contacto preparadas — y un estado de canal honesto: sin correo institucional y sin backend en esta fase, nada se envía desde aquí.',
    categoriesTitle: 'Qué puede encuadrarse',
    categories: [
      { id: 'general', title: 'Contactos generales', text: 'Preguntas sobre el proyecto, su estado y su documentación.' },
      { id: 'research-collab', title: 'Colaboración científica', text: 'Ideas de investigación, metodología, evaluación y revisión técnica.' },
      { id: 'technical', title: 'Contribuciones técnicas', text: 'Código, pruebas, matemáticas, CUDA e ingeniería de datos.' },
      { id: 'donations', title: 'Donaciones', text: 'Apoyo financiero y condiciones de aceptación de equipo.' },
      { id: 'hardware', title: 'Donación de hardware', text: 'Especificación, estado y logística de máquinas y componentes.' },
    ],
    channelTitle: 'Estado del canal',
    channelText:
      'Todavía no existe correo institucional ni backend para recibir mensajes — y no vamos a fingir lo contrario: el formulario no envía mensajes.',
    channelBullets: [
      'La dirección personal del fundador no se publica, por privacidad.',
      'El correo institucional se anunciará en esta página cuando esté listo.',
      'Hasta entonces, esta página documenta el estado real en lugar de simular el envío.',
    ],
    privacyNote: 'Este sitio web no recoge datos personales y no usa analytics invasivos.',
  },

  notFound: {
    title: 'Página no encontrada',
    text: 'La dirección puede haber cambiado o no haber existido nunca. El mapa del proyecto empieza en la página de inicio.',
    cta: 'Volver a la página de inicio',
  },
}
