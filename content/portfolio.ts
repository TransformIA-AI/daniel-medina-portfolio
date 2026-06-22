import { cvRoutes } from "@/lib/constants";

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

type SectionBody = string | readonly string[];

export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  role: string;
  sector: string;
  summary: string;
  proof: readonly string[];
  tags: readonly string[];
  publicSafeNote: string;
  sections: readonly {
    title: string;
    body: SectionBody;
  }[];
};

const sharedCredentials = [
  "Transcom",
  "Uniglobal",
  "Konecta",
  "Ayesa",
  "HarvardX CS50",
  "TransformIA Lab",
  "ENEB MBA"
] as const;

export const portfolioContent = {
  es: {
    metadata: {
      title: "Daniel Medina Sánchez | Transformación con IA y operaciones",
      description:
        "Portfolio profesional de Daniel Medina Sánchez: operaciones, Digital Workplace, consultoría tecnológica y transición sólida hacia IA aplicada.",
      openGraphLocale: "es_ES"
    },
    nav: {
      identityName: "Daniel Medina",
      identityRole: "Operaciones + IA aplicada",
      homeAria: "Inicio de Daniel Medina Sánchez",
      links: [
        { href: "/#work", label: "Trabajo" },
        { href: "/#experience", label: "Experiencia" },
        { href: "/#lab", label: "Laboratorio IA" },
        { href: "/#cv", label: "CV" },
        { href: "/#contact", label: "Contacto" }
      ],
      bookInterview: "Solicitar entrevista",
      cv: "CV"
    },
    footer: {
      body:
        "Portfolio profesional de Daniel Medina Sánchez: operaciones, Digital Workplace, sector público y transición sólida hacia IA aplicada. Casos redactados sin datos confidenciales ni documentos internos.",
      links: {
        privacy: "Privacidad",
        assets: "Activos",
        designSystem: "Sistema visual",
        github: "GitHub"
      }
    },
    hero: {
      badge: "Disponible · Remoto · Híbrido en Madrid",
      name: "Daniel Medina Sánchez",
      headline: "Dirección operativa, Digital Workplace e IA aplicada",
      body:
        "Vengo de operaciones reales: equipos grandes, cliente, servicio, margen, SLA, facturación y presión diaria. Empecé a asumir responsabilidad muy joven y he crecido en entornos donde el trabajo no podía quedarse en una presentación: tenía que salir, medirse, facturarse y funcionar.\n\nHoy aplico esa experiencia a transformación con IA, Digital Workplace y mejora operativa. Mi foco es ordenar procesos, reducir fricción, mejorar la documentación de trabajo y usar IA allí donde aporta valor real: menos carga repetitiva, más velocidad de análisis y mejores decisiones.",
      downloadCv: "Descargar CV",
      viewCases: "Ver experiencia",
      bookInterview: "Solicitar entrevista",
      credentialsLabel: "EXPERIENCIA Y BASE TÉCNICA",
      credentials: sharedCredentials,
      primaryCvHref: cvRoutes.es,
      profile: {
        label: "Perfil",
        name: "Daniel Medina",
        role: "Dirección operativa, Digital Workplace e IA aplicada",
        chips: ["Operaciones", "Digital Workplace", "IA aplicada"],
        credential: "HarvardX CS50x + CS50AI"
      },
      stats: [
        { value: "15+", label: "años de experiencia" },
        { value: "560+", label: "personas lideradas" },
        { value: "4", label: "países coordinados" },
        { value: "€12M+", label: "P&L gestionado" },
        { value: "CS50x + CS50AI", label: "HarvardX" }
      ]
    },
    valueAreas: {
      eyebrow: "POSICIONAMIENTO PROFESIONAL",
      title: "IA aplicada sobre una base real de operaciones",
      body:
        "Mi perfil no empieza en la IA. Empieza mucho antes: en servicios con presión, equipos, indicadores, cliente, calidad, productividad, facturación y margen. Esa base cambia completamente la forma de mirar cualquier proyecto de transformación.\n\nCuando hablo de IA aplicada no hablo de una demo ni de una moda. Hablo de usar tecnología para resolver problemas concretos de trabajo: tareas que se repiten, información que se pierde, procesos que nadie documenta, decisiones que se toman tarde y conocimiento que se queda encerrado en personas clave.",
      items: [
        {
          title: "Dirección operativa",
          body:
            "He trabajado en servicios donde había que responder cada día: personas, turnos, cliente, objetivos, SLA, calidad, productividad, facturación y margen. Esa experiencia permite distinguir rápido entre una mejora real y una solución que no aguantaría el contacto con una operación exigente.",
          tags: ["Operaciones", "SLA/KPI", "P&L", "Facturación", "Equipos"]
        },
        {
          title: "Gestión y cliente",
          body:
            "Mi carrera se ha construido gestionando equipos, mandos, servicios y relación con cliente. Eso implica negociar, medir, explicar desviaciones, defender decisiones, controlar márgenes y entender que una operación no se dirige solo desde Excel: se dirige con datos, oficio y criterio.",
          tags: ["Cliente", "Servicio", "Negociación", "Reporting", "Estructura de mando"]
        },
        {
          title: "IA aplicada con revisión humana",
          body:
            "Uso IA para acelerar análisis, documentación, propuestas, reporting, prototipos y automatizaciones. Pero no delego el criterio. La herramienta puede producir más rápido; la dirección, la revisión y la responsabilidad siguen siendo humanas.",
          tags: ["IA aplicada", "Automatización", "Revisión humana", "Productividad", "Criterio"]
        }
      ]
    },
    proof: {
      eyebrow: "TRAYECTORIA PROFESIONAL",
      title: "Una carrera construida desde la operación",
      body:
        "Mi trayectoria no empezó en puestos cómodos ni en teoría de transformación. Empezó en la base de la operación: cobro, fraude, atención, equipos, objetivos y presión diaria. Desde ahí fui creciendo a coordinación, supervisión, responsabilidad de servicio, dirección de operaciones y consultoría tecnológica.\n\nEsa progresión importa. Explica por qué no miro la IA como una capa decorativa, sino como una herramienta que tiene que sobrevivir al contacto con procesos, personas, clientes, márgenes y entregables reales.",
      professionalCards: [
        {
          slug: "transcom-cobro-fraude-coordinacion",
          category: "BASE OPERATIVA / COORDINACIÓN",
          title: "Transcom: responsabilidad temprana en cobro, fraude y operación",
          body:
            "En Transcom empecé a asumir responsabilidad muy joven. Trabajé durante años en gestión de cobro y fraude, coordinando equipos orientados a KPI, eficiencia y calidad. Fue una escuela dura y muy útil: volumen, presión, seguimiento diario, lectura de datos, gestión de personas y foco en resultado.",
          tags: ["Cobro", "Fraude", "Coordinación", "KPI", "Equipos"],
          footer: "Primera etapa de liderazgo operativo y gestión de equipos",
          cta: "Ver etapa completa"
        },
        {
          slug: "uniglobal-supervision-responsable-servicio",
          category: "SUPERVISIÓN / RESPONSABILIDAD DE SERVICIO",
          title: "Uniglobal: de supervisor a responsable de servicio",
          body:
            "En Uniglobal consolidé mi perfil de gestión. Pasé por supervisión y responsabilidad de servicio, con equipos comerciales, objetivos, productividad, calidad, planificación, relación con cliente y continuidad operativa. Fue la etapa donde dejé de pensar solo en equipos y empecé a pensar en servicios completos.",
          tags: ["Supervisión", "Servicio", "Productividad", "Calidad", "Cliente"],
          footer: "Gestión integral de servicios, equipos y objetivos",
          cta: "Ver etapa completa"
        },
        {
          slug: "konecta-operaciones-escala-seguros",
          category: "DIRECCIÓN DE OPERACIONES / SERVICE DELIVERY",
          title: "Konecta: dirección de una operación compleja para una aseguradora líder",
          body:
            "En Konecta gestioné una pool de 8 líneas de servicio para una aseguradora líder: ventas, inbound, outbound, upselling, cross-selling, retenciones, postventa, B2B, cobros, siniestros, recuperaciones e impagados. La responsabilidad incluía equipos, SLA, calidad, productividad, facturación, margen, interlocución de alto nivel, modelos de facturación diferentes y máximo liderazgo operativo de mi ámbito.",
          tags: ["Operaciones", "P&L", "SLA/KPI", "Seguros", "Service Delivery"],
          footer: "560+ personas · 4 países · P&L superior a 12M€",
          cta: "Ver etapa completa"
        },
        {
          slug: "ayesa-digital-workplace-sector-publico-icex",
          category: "CONSULTORÍA TECNOLÓGICA / SECTOR PÚBLICO",
          title: "Ayesa: consultoría tecnológica, Digital Workplace y proyectos institucionales",
          body:
            "En Ayesa di un salto hacia consultoría tecnológica y proyectos de transformación. Trabajé en entornos vinculados a Madrid Digital / Comunidad de Madrid, Justicia, UOC e ICEX, con foco en documentación ejecutiva, coordinación, puesto de trabajo digital, ITSM, Project Management y uso intensivo de IA para producir mejor y más rápido.",
          tags: ["Digital Workplace", "ITSM", "Sector público", "Documentación", "Project Management"],
          footer: "Madrid Digital / Justicia · UOC · ICEX · coordinación de equipos y delivery",
          cta: "Ver etapa completa"
        }
      ]
    },
    featuredCases: [
      {
        slug: "konecta-operaciones-escala-seguros",
        eyebrow: "CASO DESTACADO / OPERACIONES A ESCALA",
        title: "Konecta: ocho servicios, cuatro países y responsabilidad de cuenta",
        body: [
          "Mi etapa en Konecta merece un peso propio porque concentra buena parte de mi experiencia ejecutiva. No se trataba de llevar un equipo aislado. Era una operación con distintos servicios, diferentes modelos de facturación, centros distribuidos y una exigencia constante de cliente, SLA, margen y calidad.",
          "Gestioné servicios de ventas, inbound, outbound, upselling, cross-selling, retenciones, postventa, B2B, cobros, siniestros, recuperaciones e impagados. Cada línea tenía su lógica: unas por precio/hora, otras por hora logada, otras por venta, otras por contacto útil y otras mediante modelos mixtos acordados con cliente. Mi papel consistía en entender esos modelos, negociarlos, revisarlos, explicarlos y asegurar que la operación podía sostenerlos.",
          "Ese tipo de experiencia es la que ahora me permite mirar la IA con sentido práctico. En una operación así, la tecnología solo vale si ayuda a trabajar mejor: reducir carga administrativa, mejorar reporting, ordenar conocimiento, apoyar a mandos, acelerar documentación o detectar ineficiencias."
        ],
        highlights: [
          "Pool de 8 servicios",
          "Ventas, inbound, outbound, upselling y cross-selling",
          "Retenciones, postventa, B2B, cobros y siniestros",
          "Recuperaciones e impagados",
          "Modelos de facturación por hora, hora logada, venta y contacto útil",
          "Modelos mixtos de facturación",
          "Centros en España, Portugal, Colombia y Marruecos",
          "Interlocución de alto nivel con cliente estratégico",
          "Máximo responsable operativo de mi ámbito"
        ],
        cta: "Ver caso Konecta"
      },
      {
        slug: "ayesa-digital-workplace-sector-publico-icex",
        eyebrow: "CASO DESTACADO / CONSULTORÍA TECNOLÓGICA",
        title: "Ayesa: el salto a transformación, sector público y delivery tecnológico",
        body: [
          "Ayesa fue una etapa especialmente intensa porque cambió el tipo de presión. Venía de operaciones masivas, donde el reto es mantener vivo el servicio cada día. En Ayesa entré en una capa distinta: proyectos de modernización, documentación ejecutiva, Digital Workplace, ITSM, sector público y coordinación de equipos.",
          "Trabajé en proyectos vinculados a Madrid Digital / Comunidad de Madrid, incluyendo ámbito de Justicia; después participé en un proyecto privado de la UOC; y posteriormente en ICEX, donde mi función se acercó mucho más a Project Management, coordinando a más de 30 personas y ayudando a ordenar trabajo, entregables y seguimiento.",
          "En esta etapa la IA fue una ventaja real de productividad y calidad. La utilicé como multiplicador de análisis, síntesis, documentación ejecutiva, presentaciones, propuestas y materiales de seguimiento. No como sustituto del criterio, sino como una capa de trabajo asistido siempre revisada y dirigida por mí."
        ],
        highlights: [
          "Madrid Digital / Comunidad de Madrid",
          "Ámbito Justicia",
          "UOC / Universitat Oberta de Catalunya",
          "ICEX",
          "Coordinación de más de 30 personas en entorno de proyecto",
          "Digital Workplace, ITSM y documentación ejecutiva",
          "Uso intensivo de IA para entregables profesionales"
        ],
        cta: "Ver caso Ayesa"
      }
    ],
    lab: {
      eyebrow: "LABORATORIO IA",
      title: "TransformIA: probar conmigo antes de ofrecerlo fuera",
      body:
        "TransformIA es mi laboratorio profesional. Lo uso para probar conmigo lo que después podría convertirse en metodología, servicio o producto: web, CV, portfolio, documentación, automatizaciones, prototipos, análisis y activos digitales.\n\nLa lógica es sencilla: si una forma de trabajar con IA no me ayuda a producir mejor, ordenar mejor o ahorrar tiempo en mi propio caso, no tiene sentido venderla a una empresa. Por eso TransformIA no es un adorno en mi perfil; es mi caso cero.",
      methodTitle: "Cómo trabajo con IA en la práctica",
      method: [
        {
          title: "Defino el objetivo",
          body: "Qué problema quiero resolver, para quién, con qué límites y qué resultado final tiene que salir."
        },
        {
          title: "Genero una primera versión",
          body: "Uso IA para acelerar análisis, estructura, documentación, copy, prototipo o propuesta."
        },
        {
          title: "Reviso con criterio",
          body: "Compruebo tono, exactitud, utilidad, riesgos, coherencia y encaje con el objetivo."
        },
        {
          title: "Corrijo y concreto",
          body: "Elimino lo genérico, bajo el contenido a realidad operativa y añado contexto propio."
        },
        {
          title: "Convierto en entregable",
          body: "Lo convierto en documento, web, propuesta, flujo, presentación o material listo para usar."
        },
        {
          title: "Aprendo del proceso",
          body: "Lo que funciona se convierte en método; lo que no aporta se descarta."
        }
      ],
      cta: "Ver laboratorio",
      slug: "transformia-lab-ia-aplicada"
    },
    conciergeSection: {
      eyebrow: "ASISTENTE DE ENCAJE",
      title: "Preguntas frecuentes para recruiters y hiring managers",
      body:
        "Guía interactiva basada exclusivamente en información pública del portfolio. Resume encaje profesional, escala operativa, base técnica y experiencia en transformación sin enviar correos, crear eventos ni ejecutar acciones automáticas.",
      badge: "Información pública · revisión humana"
    },
    credentialsSection: {
      eyebrow: "BASE TÉCNICA",
      title: "Base técnica para dirigir IA con criterio",
      body:
        "La tecnología no aparece ahora en mi perfil. Llevo muchos años cerca de la informática, la programación y las herramientas digitales. Por circunstancias de vida no estudié informática como carrera principal, aunque probablemente era un camino natural para mí. Aun así, siempre he vuelto a la tecnología: programación, automatización, análisis, sistemas, web y ahora IA.\n\nMi base técnica no pretende competir con la de un desarrollador senior especializado. Su valor es otro: entender lo suficiente para prototipar, evaluar, coordinar, preguntar mejor, hablar con equipos técnicos y traducir necesidades de negocio a soluciones realistas.\n\nHe trabajado y aprendido con distintas capas tecnológicas: fundamentos de programación, web, automatización, herramientas enterprise, Digital Workplace y fundamentos de IA, con distintos niveles de profundidad según etapa y contexto.",
      cardTitle: "HarvardX CS50x + CS50AI",
      cardBody:
        "CS50x y CS50AI refuerzan esa base con fundamentos formales: Python, SQL, algoritmos, estructuras de datos, búsqueda, representación del conocimiento, incertidumbre, optimización, machine learning, redes neuronales y lenguaje.",
      items: [
        "Traducir negocio a tecnología",
        "Evaluar soluciones de IA",
        "Automatización y procesos",
        "Criterio técnico aplicado"
      ]
    },
    operations: {
      eyebrow: "EMPRESA, TECNOLOGÍA Y ADOPCIÓN",
      title: "El valor está en conectar piezas",
      body:
        "Hay empresas con herramientas que nadie adopta, operaciones donde el conocimiento se queda en personas clave y proyectos de IA que no llegan al trabajo real. Mi perfil encaja justo ahí: ordenar procesos, traducir entre áreas y llevar la tecnología a un uso práctico, medible y comprensible.",
      items: [
        {
          title: "Operaciones",
          body: "Servicio, SLA, KPI, equipos, productividad, calidad, facturación y margen."
        },
        {
          title: "Sector público y consultoría",
          body: "Documentación, coordinación, adopción, stakeholders y gobierno del puesto de trabajo."
        },
        {
          title: "IA aplicada",
          body: "Automatización útil, análisis, prototipos, documentación y revisión humana."
        }
      ]
    },
    cvHub: {
      eyebrow: "CV",
      title: "CV ejecutivo en español e inglés",
      body:
        "El CV está pensado para decidir rápido. Esta web amplía lo que no cabe en dos páginas: trayectoria, contexto, criterio, casos y transición hacia IA aplicada.",
      downloadPdf: "Descargar PDF",
      files: [
        {
          id: "es",
          href: cvRoutes.es,
          label: "Descargar CV ES",
          shortLabel: "CV ES",
          language: "Español",
          audience: "Versión orientada a España/UE: transformación con IA, Digital Workplace, operaciones y consultoría."
        },
        {
          id: "en",
          href: cvRoutes.en,
          label: "Descargar CV EN",
          shortLabel: "CV EN",
          language: "Inglés",
          audience: "Versión internacional para roles de AI Transformation, Digital Workplace y Operations."
        },
        {
          id: "enNoPhoto",
          href: cvRoutes.enNoPhoto,
          label: "Descargar CV EN sin foto",
          shortLabel: "CV EN sin foto",
          language: "Inglés",
          audience: "Versión ATS-friendly para procesos donde conviene evitar fotografía."
        }
      ]
    },
    contact: {
      eyebrow: "CONTACTO PROFESIONAL",
      title: "Disponible para roles senior de transformación, Digital Workplace y operaciones",
      body:
        "Busco una posición remota o híbrida en Madrid donde pueda aportar gestión, criterio operativo, consultoría tecnológica y adopción práctica de IA. Encaje natural: AI Project Manager, AI Transformation Consultant, Digital Workplace / ITSM Consultant, Operations Transformation Lead o AI Enablement.",
      requestInterview: "Solicitar entrevista",
      linkedin: "LinkedIn",
      cvHub: "CV"
    },
    casePage: {
      back: "Volver a experiencia",
      role: "Rol",
      sector: "Ámbito",
      boundary: "Alcance",
      evidence: "Claves",
      nextStep: "Siguiente paso",
      nextStepBody:
        "Descarga la variante de CV más relevante o vuelve a la home para revisar la trayectoria completa."
    },
    pages: {
      cv: {
        title: "CV Hub",
        description: "Descarga las variantes de CV de Daniel Medina Sánchez en español e inglés."
      },
      lab: {
        title: "TransformIA Lab",
        description: "Laboratorio profesional de IA aplicada, documentación, automatización y activos digitales."
      },
      contact: {
        title: "Contacto",
        description: "Contacto profesional para roles senior de transformación, Digital Workplace y operaciones."
      },
      assets: {
        title: "Activos públicos",
        description: "Activos públicos del portfolio y rutas de descarga de CV.",
        eyebrow: "Activos",
        heading: "Registro de activos públicos",
        body:
          "La web expone únicamente los CV en PDF y recursos públicos del portfolio. Documentos de trabajo, ZIPs fuente y packs estratégicos son material de construcción del repositorio, no contenido visible de la interfaz pública.",
        boundaryTitle: "Límite",
        boundaryBody:
          "La web no debe exponer código privado de TransformIA, datos de clientes, secretos, material legal, comunicaciones privadas ni documentación interna."
      },
      designSystem: {
        title: "Sistema visual",
        description: "Tokens visuales adaptados desde el prototipo Tier-S del portfolio.",
        eyebrow: "Sistema visual",
        heading: "Dirección visual Tier-S",
        body:
          "Sistema ejecutivo sobrio adaptado del prototipo Figma Tier-S: alto contraste, tarjetas compactas, señales de confianza en teal y densidad informativa orientada a lectura profesional."
      },
      privacy: {
        title: "Privacidad",
        description: "Notas de privacidad para el portfolio profesional.",
        heading: "Privacidad y límites de contenido",
        paragraphs: [
          "Este portfolio es una web profesional pública. Expone descargas de CV, información profesional de alto nivel, casos de trayectoria e interacciones demo deterministas.",
          "La guía interactiva no llama a proveedores externos de IA, no crea eventos de calendario, no envía emails y no ejecuta acciones de selección automáticamente.",
          "La web no debe publicar código privado de TransformIA, datos de clientes, secretos, material legal, comunicaciones privadas, documentación interna, soluciones completas de CS50 ni afirmaciones de ROI o cumplimiento no soportadas."
        ]
      }
    },
    recruiter: {
      headerTitle: "Guía de perfil",
      headerSubtitle: "Información pública · revisión humana",
      statusChip: "Revisión humana",
      boundaryLabel: "Límite:",
      boundaryText: "no se crea calendario, email ni acción de selección automáticamente.",
      initialMessage:
        "Pregunta sobre Daniel Medina Sánchez usando información pública del portfolio. Las acciones de entrevista, calendario o seguimiento quedan siempre pendientes de aprobación por Daniel.",
      suggestedQuestions: [
        "¿Para qué roles encaja mejor Daniel?",
        "¿Puede liderar proyectos de transformación con IA?",
        "¿Ha gestionado equipos grandes?",
        "¿Puede trabajar con clientes de sector público?",
        "¿Cuál es su base técnica en IA?",
        "¿Cómo aplica revisión humana?"
      ],
      inputPlaceholder: "Pregunta por encaje, escala, CS50AI, sector público o revisión humana...",
      sendLabel: "Enviar pregunta",
      roleFit: "Encaje con el rol",
      fitScoreSuffix: "/ 100 encaje",
      confidence: "Confianza",
      pending: "pendiente",
      recommendedCv: "CV recomendado",
      askFirst: "Escribe una pregunta",
      download: "Descargar",
      approvalStatus: "Estado de aprobación",
      requestInterview: "Solicitar entrevista",
      pendingApproval:
        "Estado: pendiente de aprobación por Daniel. No se ha creado ninguna acción de calendario.",
      approvalDefault:
        "Las solicitudes de entrevista son solo propuestas hasta que Daniel las aprueba explícitamente.",
      answers: {
        ai: {
          content:
            "Daniel encaja especialmente en roles de transformación con IA, AI Project Management y AI Enablement donde la ambigüedad de negocio debe convertirse en trabajo claro, documentado y útil.",
          confidence: "high",
          fitScore: 88,
          cvHref: cvRoutes.es,
          cvLabel: "CV ES",
          evidence: ["TransformIA Lab", "CS50x + CS50AI", "Digital Workplace"]
        },
        operations: {
          content:
            "Daniel ha trabajado a escala relevante: equipos de hasta 560 personas, coordinación de 4 países y responsabilidad P&L superior a €12M. Esto soporta roles de transformación operativa, service delivery y liderazgo CX.",
          confidence: "high",
          fitScore: 91,
          cvHref: cvRoutes.es,
          cvLabel: "CV ES",
          evidence: ["560 personas", "4 países", "€12M+ P&L"]
        },
        publicSector: {
          content:
            "Daniel tiene contexto de Digital Workplace, ITSM y sector público por su etapa en Ayesa, con trabajo vinculado a Madrid Digital, Justicia, UOC e ICEX.",
          confidence: "medium",
          fitScore: 82,
          cvHref: cvRoutes.es,
          cvLabel: "CV ES",
          evidence: ["Ayesa", "ITSM", "Sector público"]
        },
        technical: {
          content:
            "La base técnica de Daniel es aplicada a negocio: CS50x y CS50AI refuerzan fundamentos de Python, SQL, algoritmos, búsqueda, incertidumbre, machine learning, redes neuronales y lenguaje.",
          confidence: "high",
          fitScore: 79,
          cvHref: cvRoutes.enNoPhoto,
          cvLabel: "CV EN sin foto",
          evidence: ["HarvardX CS50x", "HarvardX CS50AI", "Python"]
        },
        hitl: {
          content:
            "Daniel usa IA con revisión humana real: define objetivo, genera una primera versión, revisa, corrige, concreta y convierte el resultado en entregable.",
          confidence: "high",
          fitScore: 87,
          cvHref: cvRoutes.es,
          cvLabel: "CV ES",
          evidence: ["Revisión humana", "Entregables", "TransformIA Lab"]
        },
        fallback: {
          content:
            "No tengo suficiente información para responder con precisión. Puedo responder sobre transformación con IA, Digital Workplace, escala operativa, sector público, CS50x + CS50AI o revisión humana.",
          confidence: "low",
          fitScore: 55,
          cvHref: cvRoutes.es,
          cvLabel: "CV ES",
          evidence: ["Información pública", "Sin afirmaciones inventadas"]
        }
      }
    },
    cases: [
      {
        slug: "transcom-cobro-fraude-coordinacion",
        title: "Transcom: la escuela operativa donde empecé a liderar",
        eyebrow: "Base operativa / Coordinación",
        role: "Coordinación en cobro, fraude y operación",
        sector: "Cobro, fraude, atención y operaciones para Orange",
        summary:
          "Cobro, fraude, coordinación, presión diaria y aprendizaje temprano de gestión.",
        proof: [
          "Gestión de cobro",
          "Fraude",
          "Orange",
          "Coordinación",
          "KPI",
          "Calidad",
          "Eficiencia",
          "Responsabilidad temprana"
        ],
        tags: ["Cobro", "Fraude", "Orange", "Coordinación", "KPI"],
        publicSafeNote:
          "Contenido público de trayectoria profesional. No incluye datos de clientes, documentación interna ni información sensible.",
        sections: [
          {
            title: "Historia",
            body: [
              "Mi trayectoria profesional empezó muy pronto en entornos donde el resultado se medía cada día. En Transcom trabajé durante años en gestión de cobro y fraude para Orange, coordinando equipos orientados a KPI, eficiencia y calidad.",
              "Fue una etapa clave porque aprendí desde abajo cómo funciona una operación de verdad: volumen, presión, seguimiento, datos, personas y cliente. Asumir responsabilidad joven me obligó a madurar rápido profesionalmente. Era un entorno poco abstracto y muy orientado a resultado: objetivos, equipos, incidencias, productividad y necesidad de tomar decisiones prácticas.",
              "El entorno combinaba presión operativa, objetivos claros y necesidad de control diario. En servicios de cobro y fraude, el detalle importa: seguimiento de actividad, calidad de gestión, cumplimiento de procedimientos, lectura de datos y coordinación con equipos.",
              "Aprendí a gestionar personas en situaciones de presión, a mirar indicadores sin perder de vista el trabajo real y a entender que una operación solo funciona si los procesos son claros, los mandos están alineados y la información llega a tiempo.",
              "Cuando hoy hablo de automatización o IA aplicada, no lo hago desde una visión abstracta. Pienso en ese tipo de entornos: tareas repetitivas, seguimiento, reporting, documentación, pérdida de información y decisiones que podrían mejorar si el sistema estuviera mejor diseñado.",
              "Transcom fue mi primera escuela seria de operación. Me dio oficio, tolerancia a la presión y una comprensión muy directa de cómo se gestionan equipos y servicios desde la realidad diaria."
            ]
          }
        ]
      },
      {
        slug: "uniglobal-supervision-responsable-servicio",
        title: "Uniglobal: de supervisor a responsable de servicio",
        eyebrow: "Supervisión / Responsabilidad de servicio",
        role: "Supervisor y responsable de servicio",
        sector: "Equipos comerciales, cliente, productividad y continuidad operativa",
        summary:
          "Gestión de equipos, cliente, objetivos, productividad y continuidad operativa.",
        proof: [
          "Supervisión",
          "Responsabilidad de servicio",
          "Equipos comerciales",
          "Cliente",
          "Productividad",
          "Calidad",
          "Planificación",
          "Continuidad operativa"
        ],
        tags: ["Supervisión", "Servicio", "Productividad", "Calidad", "Cliente"],
        publicSafeNote:
          "Contenido público de trayectoria profesional. No incluye datos de clientes, documentación interna ni información sensible.",
        sections: [
          {
            title: "Historia",
            body: [
              "En Uniglobal consolidé mi perfil de gestión. Pasé por funciones de supervisión y responsabilidad de servicio, liderando equipos comerciales y operaciones orientadas a objetivos, calidad y satisfacción del cliente.",
              "Fue una etapa de crecimiento real: más responsabilidad, más interlocución, más planificación y más visión de cuenta. Aquí empecé a trabajar con una mirada más completa: no solo qué ocurre en el equipo, sino cómo impacta en cliente, rentabilidad, continuidad del servicio y capacidad de respuesta.",
              "La responsabilidad de servicio exige combinar varias capas: personas, objetivos, planificación, cliente, calidad y eficiencia. No basta con empujar actividad; hay que entender capacidad, picos de demanda, rendimiento, clima y continuidad.",
              "Pasar de supervisor a responsable de servicio me permitió desarrollar una visión más amplia de la operación. Empecé a trabajar no solo sobre el equipo directo, sino sobre la estructura que permite que un servicio funcione de forma estable.",
              "Esta etapa explica parte de mi encaje actual en roles de transformación. Entiendo cómo se organizan servicios, dónde aparecen cuellos de botella y por qué cualquier solución tecnológica necesita aterrizar en procesos, personas y seguimiento.",
              "Uniglobal fue la etapa donde pasé de gestionar equipos a pensar en servicios. Esa diferencia es importante: un equipo cumple tareas; un servicio tiene que sostener valor para cliente, cuenta y operación."
            ]
          }
        ]
      },
      {
        slug: "konecta-operaciones-escala-seguros",
        title: "Konecta: dirección de operaciones a escala para una aseguradora líder",
        eyebrow: "Dirección de operaciones / Service Delivery",
        role: "Business Manager",
        sector: "Seguros, contact center, operaciones multicentro y cuenta de resultados",
        summary:
          "Ocho servicios, cuatro países, modelos de facturación diferentes, cliente estratégico y responsabilidad de cuenta.",
        proof: [
          "Pool de 8 servicios",
          "Ventas, inbound, outbound, upselling y cross-selling",
          "Retenciones, postventa, B2B, cobros y siniestros",
          "Recuperaciones e impagados",
          "Modelos de facturación por hora, hora logada, venta y contacto útil",
          "Madrid / Alcobendas",
          "Talavera de la Reina",
          "Almendralejo",
          "Lisboa",
          "Medellín",
          "Bogotá",
          "Tánger",
          "4 países coordinados",
          "560+ personas lideradas",
          "P&L superior a 12M€",
          "Interlocución de alto nivel con cliente estratégico"
        ],
        tags: ["Operaciones", "P&L", "SLA/KPI", "Seguros", "Service Delivery"],
        publicSafeNote:
          "Contenido público de trayectoria profesional. No incluye datos de clientes, documentación interna ni información sensible.",
        sections: [
          {
            title: "Historia",
            body: [
              "Konecta fue mi etapa de mayor escala operativa. Como Business Manager asumí la gestión de una operación compleja para una aseguradora líder, con una pool de ocho servicios, equipos distribuidos y una responsabilidad directa sobre cliente, SLA, productividad, calidad, facturación, margen y continuidad del servicio.",
              "No era una operación pequeña ni un equipo aislado. La cuenta incluía servicios de ventas, inbound, outbound, upselling, cross-selling, retenciones, postventa, B2B, cobros, siniestros, recuperaciones e impagados. Cada servicio tenía su propia lógica operativa, sus indicadores, sus objetivos, sus tensiones y su forma de medir rentabilidad.",
              "Una parte especialmente relevante de mi función era entender y gestionar los modelos de facturación. No todos los servicios se facturaban igual. Había modelos por precio/hora, por hora logada, por venta, por contacto útil y por combinaciones acordadas con el cliente. Mi papel implicaba negociar, revisar, explicar y sostener esos modelos desde la operación, asegurando que lo pactado era viable y que el servicio podía cumplirlo.",
              "La operación estaba distribuida en distintos centros y países: Madrid / Alcobendas, Talavera de la Reina, Almendralejo, Lisboa, Medellín, Bogotá y Tánger. Esto exigía coordinación, método, seguimiento y capacidad de alinear realidades operativas diferentes bajo una misma cuenta.",
              "Mi función no era solo coordinar actividad. Era actuar como máximo responsable operativo de mi ámbito: seguimiento de KPI, revisión de capacidad, coordinación de responsables, análisis de desviaciones, interlocución de alto nivel con cliente estratégico, defensa de decisiones, mejora continua y control de cuenta de resultados.",
              "El reto no era simplemente cumplir indicadores. Era hacerlo de forma sostenible. Había que proteger el servicio, cuidar el margen, mantener interlocución con cliente, alinear equipos y detectar dónde se escapaba eficiencia sin romper la operación.",
              "Esta experiencia demuestra algo importante para cualquier proyecto de transformación: sé lo que ocurre cuando una decisión entra en operación real. No miro los procesos desde fuera. Entiendo la presión, las resistencias, los tiempos, la necesidad de control y el impacto que tiene cada cambio sobre personas, cliente, facturación y resultado.",
              "Desde una operación así, la IA se entiende de otra manera. No como una moda, sino como una herramienta para reducir fricción: análisis más rápido, documentación más clara, reporting mejor estructurado, soporte a mandos, automatización de tareas repetitivas y captura de conocimiento operativo.",
              "Konecta es mi caso más fuerte de ejecución operativa a escala. Es la base que me permite hablar de IA y transformación con los pies en el suelo: primero entender cómo funciona el negocio; después decidir qué tecnología puede mejorarlo."
            ]
          }
        ]
      },
      {
        slug: "ayesa-digital-workplace-sector-publico-icex",
        title: "Ayesa: consultoría tecnológica, Digital Workplace y proyectos institucionales",
        eyebrow: "Consultoría tecnológica / Sector público",
        role: "Consultoría, Project Management y coordinación de delivery",
        sector: "Madrid Digital, Justicia, UOC, ICEX, Digital Workplace e ITSM",
        summary:
          "Madrid Digital, Justicia, UOC, ICEX, coordinación de equipos y uso intensivo de IA para entregables de alto nivel.",
        proof: [
          "Madrid Digital / Comunidad de Madrid",
          "Ámbito Justicia",
          "UOC / Universitat Oberta de Catalunya",
          "ICEX",
          "Project Management",
          "Coordinación de más de 30 personas",
          "Digital Workplace",
          "ITSM",
          "Documentación ejecutiva",
          "Materiales ejecutivos y de gestión",
          "Uso intensivo de IA",
          "Consultoría tecnológica",
          "Sector público"
        ],
        tags: ["Digital Workplace", "ITSM", "Sector público", "Documentación", "Project Management"],
        publicSafeNote:
          "Contenido público de trayectoria profesional. No incluye datos de clientes, documentación interna ni información sensible.",
        sections: [
          {
            title: "Historia",
            body: [
              "Ayesa fue una etapa de alto valor profesional porque cambió el tipo de presión. Venía de operaciones a escala, donde el reto es mantener servicios vivos todos los días. En Ayesa entré en otra capa: consultoría tecnológica, modernización, sector público, Digital Workplace, documentación ejecutiva, coordinación de proyectos y delivery.",
              "Trabajé en proyectos vinculados a Madrid Digital / Comunidad de Madrid, incluyendo ámbito de Justicia. Ese contexto exige precisión, orden, documentación, capacidad de síntesis y una forma de trabajar muy distinta a la operación diaria. No basta con moverse rápido; hay que entender bien el entorno, cuidar la trazabilidad y producir materiales que ayuden a avanzar.",
              "También participé en un proyecto privado de la UOC / Universitat Oberta de Catalunya, dentro de un entorno universitario y digital donde la comprensión del usuario, los procesos y la coordinación son claves. Esta experiencia amplió mi mirada sobre cómo se articulan proyectos tecnológicos fuera del entorno puramente operativo.",
              "Posteriormente trabajé en ICEX, donde mi función encajaba mucho más con Project Management y coordinación de proyecto. En ese contexto llegué a coordinar a más de 30 personas, ordenando trabajo, seguimiento, entregables y comunicación. Fue una etapa exigente, de alto nivel, donde la capacidad de estructurar información y mantener foco era fundamental.",
              "El cambio respecto a Konecta fue claro. En operaciones, la presión viene del volumen, la productividad, el cliente y el margen. En consultoría tecnológica, la presión viene de la ambigüedad, la documentación, los stakeholders, los plazos, las dependencias y la necesidad de convertir información dispersa en entregables claros.",
              "Durante esta etapa utilicé IA de forma intensiva para aumentar productividad y calidad: análisis, estructuración de información, preparación de presentaciones, propuestas, documentación, materiales ejecutivos y revisión de contenidos. No como sustituto del criterio, sino como amplificador de capacidad. La IA me permitió producir en horas materiales que antes habrían requerido mucho más tiempo, siempre con revisión y dirección humana.",
              "Ayesa demuestra mi capacidad para moverme entre negocio, tecnología, administración, documentación y delivery. También explica por qué mi transición hacia IA aplicada no es teórica: la he utilizado ya como ventaja real para producir mejor en contextos profesionales exigentes.",
              "Si Konecta demuestra mi base de ejecución operativa, Ayesa demuestra mi salto a consultoría tecnológica y transformación. La combinación de ambas etapas es precisamente lo que hace diferencial mi perfil: entiendo la operación, pero también sé traducirla a documentación, proyecto, adopción y tecnología."
            ]
          }
        ]
      },
      {
        slug: "transformia-lab-ia-aplicada",
        title: "TransformIA Lab: mi caso cero de IA aplicada",
        eyebrow: "Laboratorio IA",
        role: "Laboratorio propio de IA aplicada",
        sector: "Web, CV, portfolio, documentación, automatización y metodología",
        summary:
          "Probar conmigo antes de vender o recomendar a otros.",
        proof: [
          "Web profesional",
          "CV y portfolio",
          "Documentación",
          "Automatización",
          "Metodología",
          "Activos digitales",
          "IA aplicada a trabajo real",
          "Human-in-the-loop entendido como revisión humana real"
        ],
        tags: ["IA aplicada", "Portfolio", "Automatización", "Metodología", "Activos digitales"],
        publicSafeNote:
          "Contenido público de trabajo propio. No incluye secretos, credenciales ni documentación privada.",
        sections: [
          {
            title: "Historia",
            body: [
              "TransformIA Lab es mi forma de convertir la transición hacia IA en algo demostrable. No quería limitarme a decir que sé usar IA. Quería construir con ella: web, CV, portfolio, documentación, prompts, automatizaciones, propuestas, metodología y activos digitales.",
              "La lógica es sencilla: antes de recomendar IA aplicada a una empresa, la pruebo en mi propio trabajo. Si una metodología no me ayuda a producir mejor, ordenar mejor o ahorrar tiempo en mi caso, difícilmente merece venderse a terceros.",
              "Estoy probando cómo usar IA para acelerar trabajo profesional real: estructurar información, crear borradores, comparar opciones, preparar documentación, construir activos, diseñar procesos y convertir ideas en entregables. La clave no es generar mucho contenido; la clave es convertirlo en algo útil.",
              "El proceso siempre mantiene dirección humana. Defino objetivo, genero una primera versión, reviso, corrijo, bajo a realidad de negocio y convierto el resultado en un activo reutilizable. La IA acelera, pero el criterio final sigue siendo mío.",
              "TransformIA Lab demuestra una capacidad muy concreta: transformar conocimiento, experiencia y criterio en sistemas de trabajo. Eso es exactamente lo que muchas empresas necesitan ahora: no solo comprar herramientas, sino rediseñar cómo se trabaja con ellas.",
              "TransformIA no es un adorno en mi perfil. Es mi laboratorio profesional. Es la forma en la que pruebo, documento y convierto IA aplicada en algo que pueda enseñarse, venderse o implantarse con sentido."
            ]
          }
        ]
      },
      {
        slug: "harvardx-cs50-cs50ai-base-tecnica",
        title: "HarvardX CS50x + CS50AI: base técnica para dirigir IA con criterio",
        eyebrow: "Base técnica",
        role: "Perfil de negocio y operaciones con base técnica formal",
        sector: "Informática, programación, automatización e inteligencia artificial",
        summary:
          "Fundamentos de informática e inteligencia artificial aplicados a un perfil de negocio y operaciones.",
        proof: [
          "Fundamentos: C, Python, SQL, algoritmos y estructuras de datos",
          "Web/prototipado: HTML, CSS, JavaScript, React, Vite, Tailwind y Vercel",
          "Automatización: Make, Zapier y Power Automate",
          "Enterprise/Digital Workplace: Azure, Amazon WorkSpaces, Jira y Atlassian JSM",
          "Exploración técnica: C++, Java, TensorFlow, Kubernetes y Machine Learning",
          "CS50x",
          "CS50AI"
        ],
        tags: ["CS50x", "CS50AI", "Python", "SQL", "IA"],
        publicSafeNote:
          "Contenido público de formación y aprendizaje. No incluye soluciones completas de cursos ni material privado.",
        sections: [
          {
            title: "Historia",
            body: [
              "La tecnología no aparece ahora en mi perfil. Llevo muchos años cerca de la informática, la programación y las herramientas digitales. De niño empecé a programar muy joven y, aunque por circunstancias vitales no estudié informática como carrera principal, siempre he vuelto a la tecnología: programación, automatización, análisis, sistemas, web y ahora IA.",
              "Con los años he trabajado y aprendido con distintos lenguajes, herramientas y entornos: C, C++, Java, Python, JavaScript, HTML, CSS, SQL, React, Vite, Tailwind, TensorFlow, machine learning, automatización, Vercel, Azure, Amazon WorkSpaces, Kubernetes, Jira, Atlassian JSM, Make, Zapier y Power Automate. No todo con el mismo nivel ni con la misma profundidad, pero sí con una constante: entender cómo convertir tecnología en utilidad práctica.",
              "Elegí CS50x y CS50AI porque no quería quedarme en la superficie de la IA generativa. Usar herramientas no era suficiente. Necesitaba reforzar fundamentos: cómo se formulan los problemas, cómo se construyen soluciones, dónde están los límites técnicos y qué preguntas debe hacer alguien que dirige o coordina proyectos de IA.",
              "No me convierte en ingeniero senior, y no lo presento así. Pero sí cambia mi conversación con equipos técnicos y mi capacidad para traducir necesidades de negocio a soluciones realistas.",
              "CS50x aporta fundamentos de informática: pensamiento computacional, programación, algoritmos, estructuras de datos, Python, SQL, web y resolución de problemas. Para un perfil de negocio, esa base mejora la forma de hablar con tecnología y reduce el riesgo de plantear soluciones imposibles.",
              "CS50AI añade fundamentos específicos de inteligencia artificial: búsqueda, representación del conocimiento, incertidumbre, optimización, aprendizaje, redes neuronales y lenguaje. Esa base ayuda a entender mejor qué puede hacer la IA, qué no puede hacer y qué riesgos conviene tener presentes.",
              "Mi valor no está en competir con un desarrollador senior. Está en unir experiencia ejecutiva, operaciones, consultoría y suficiente criterio técnico para dirigir mejor, preguntar mejor, revisar mejor y evitar soluciones de escaparate.",
              "CS50x y CS50AI son parte de mi transición seria hacia IA aplicada. No sustituyen mi trayectoria profesional; la refuerzan con una base técnica que me permite trabajar mejor entre negocio y tecnología."
            ]
          }
        ]
      }
    ]
  },
  en: {
    metadata: {
      title: "Daniel Medina Sánchez | Operations, Digital Workplace and Applied AI",
      description:
        "Professional portfolio for Daniel Medina Sánchez: operations leadership, Digital Workplace, technology consulting and applied AI adoption.",
      openGraphLocale: "en_US"
    },
    nav: {
      identityName: "Daniel Medina",
      identityRole: "Operations + Applied AI",
      homeAria: "Daniel Medina Sánchez home",
      links: [
        { href: "/#work", label: "Work" },
        { href: "/#experience", label: "Experience" },
        { href: "/#lab", label: "AI Lab" },
        { href: "/#cv", label: "CV" },
        { href: "/#contact", label: "Contact" }
      ],
      bookInterview: "Book interview",
      cv: "CV"
    },
    footer: {
      body:
        "Professional portfolio for Daniel Medina Sánchez: operations leadership, Digital Workplace, public-sector delivery and applied AI adoption. Cases are written without confidential data or internal documents.",
      links: {
        privacy: "Privacy",
        assets: "Assets",
        designSystem: "Design system",
        github: "GitHub"
      }
    },
    hero: {
      badge: "Available · Remote · Hybrid · Madrid",
      name: "Daniel Medina Sánchez",
      headline: "Operations Leadership, Digital Workplace, and Applied AI",
      body:
        "Daniel comes from real operations: large teams, demanding clients, service delivery, margin, SLA, billing and day-to-day pressure. His background was built in environments where work could not remain a slide deck: it had to be delivered, measured, billed and kept running.\n\nHe now applies that operating experience to AI transformation, Digital Workplace and operations improvement. The focus is practical: structure processes, reduce friction, improve work documentation and use AI where it cuts repetitive workload, accelerates analysis and supports better decisions.",
      downloadCv: "Download CV",
      viewCases: "View experience",
      bookInterview: "Book interview",
      credentialsLabel: "EXPERIENCE AND TECHNICAL FOUNDATION",
      credentials: sharedCredentials,
      primaryCvHref: cvRoutes.en,
      profile: {
        label: "Profile",
        name: "Daniel Medina",
        role: "Operations Leadership, Digital Workplace, and Applied AI",
        chips: ["Operations", "Digital Workplace", "Applied AI"],
        credential: "HarvardX CS50x + CS50AI"
      },
      stats: [
        { value: "15+", label: "years of experience" },
        { value: "560+", label: "people led" },
        { value: "4", label: "countries coordinated" },
        { value: "€12M+", label: "P&L managed" },
        { value: "CS50x + CS50AI", label: "HarvardX" }
      ]
    },
    valueAreas: {
      eyebrow: "PROFESSIONAL POSITIONING",
      title: "Applied AI built on real operations experience",
      body:
        "Daniel's profile does not start with AI. It starts much earlier: services under pressure, teams, metrics, clients, quality, productivity, billing and margin. That background changes how any transformation initiative is evaluated.\n\nApplied AI here does not mean a demo or a trend. It means using technology to solve concrete work problems: repeated tasks, lost information, undocumented processes, late decisions and knowledge trapped in key people.",
      items: [
        {
          title: "Operations leadership",
          body:
            "Daniel has worked in services that had to respond every day: people, shifts, clients, objectives, SLA, quality, productivity, billing and margin. That experience helps separate real improvement from attractive solutions that would not survive serious operations.",
          tags: ["Operations", "SLA/KPI", "P&L", "Billing", "Teams"]
        },
        {
          title: "Management and client relationships",
          body:
            "His career has been built managing teams, middle managers, services and client relationships. That means negotiating, measuring, explaining deviations, defending decisions, controlling margins and understanding that operations are led with data, rigor and judgment.",
          tags: ["Client", "Service", "Negotiation", "Reporting", "Middle management"]
        },
        {
          title: "Applied AI with human review",
          body:
            "He uses AI to accelerate analysis, documentation, proposals, reporting, prototypes and automation. The judgment is not outsourced: direction, review and accountability remain human.",
          tags: ["Applied AI", "Automation", "Human review", "Productivity", "Judgment"]
        }
      ]
    },
    proof: {
      eyebrow: "PROFESSIONAL TRACK RECORD",
      title: "A career built from operations",
      body:
        "Daniel's career did not start in comfortable roles or transformation theory. It started at the base of operations: collections, fraud, customer care, teams, objectives and daily pressure. From there he grew into coordination, supervision, service ownership, operations leadership and technology consulting.\n\nThat progression matters. It explains why applied AI is not treated as a decorative layer, but as a tool that must survive contact with processes, people, clients, margins and real deliverables.",
      professionalCards: [
        {
          slug: "transcom-cobro-fraude-coordinacion",
          category: "OPERATIONS BASE / COORDINATION",
          title: "Transcom: early responsibility in collections, fraud and operations",
          body:
            "At Transcom, Daniel started taking responsibility early. He worked for years in collections and fraud management, coordinating teams around KPI, efficiency and quality. It was a demanding operational school: volume, pressure, daily follow-up, data reading, people management and outcome focus.",
          tags: ["Collections", "Fraud", "Coordination", "KPI", "Teams"],
          footer: "First stage of operational leadership and team management",
          cta: "Read more"
        },
        {
          slug: "uniglobal-supervision-responsable-servicio",
          category: "SUPERVISION / SERVICE RESPONSIBILITY",
          title: "Uniglobal: from supervisor to service lead",
          body:
            "At Uniglobal, he consolidated his management profile through supervision and service ownership, with commercial teams, objectives, productivity, quality, planning, client relationship and operational continuity. It was the stage where he moved from thinking only about teams to thinking about complete services.",
          tags: ["Supervision", "Service", "Productivity", "Quality", "Client"],
          footer: "End-to-end service, team and objective management",
          cta: "Read more"
        },
        {
          slug: "konecta-operaciones-escala-seguros",
          category: "OPERATIONS LEADERSHIP / SERVICE DELIVERY",
          title: "Konecta: complex operations leadership for a leading insurer",
          body:
            "At Konecta, Daniel managed a pool of 8 service lines for a leading insurer: sales, inbound, outbound, upselling, cross-selling, retention, after-sales, B2B, collections, claims, recoveries and overdue/unpaid accounts. The scope included teams, SLA, quality, productivity, billing, margin, senior client relationship, different billing models and maximum operational ownership within his scope.",
          tags: ["Operations", "P&L", "SLA/KPI", "Insurance", "Service Delivery"],
          footer: "560+ people · 4 countries · over €12M P&L",
          cta: "Read more"
        },
        {
          slug: "ayesa-digital-workplace-sector-publico-icex",
          category: "TECHNOLOGY CONSULTING / PUBLIC SECTOR",
          title: "Ayesa: technology consulting, Digital Workplace and institutional projects",
          body:
            "At Ayesa, Daniel moved into technology consulting and transformation projects linked to Madrid Digital / Community of Madrid, the Justice domain, UOC and ICEX, with executive documentation, coordination, Digital Workplace, ITSM, project management and AI-assisted production of stronger executive materials with greater speed and consistency.",
          tags: ["Digital Workplace", "ITSM", "Public sector", "Documentation", "Project Management"],
          footer: "Madrid Digital / Justice · UOC · ICEX · team coordination and delivery",
          cta: "Read more"
        }
      ]
    },
    featuredCases: [
      {
        slug: "konecta-operaciones-escala-seguros",
        eyebrow: "FEATURED CASE / OPERATIONS AT SCALE",
        title: "Konecta: eight services, four countries and account responsibility",
        body: [
          "Daniel's Konecta stage deserves its own weight because it concentrates a large part of his executive operations experience. It was not an isolated team. It was an operation with multiple service lines, different billing models, distributed centers and constant pressure from client, SLA, margin and quality.",
          "He managed sales, inbound, outbound, upselling, cross-selling, retention, after-sales, B2B, collections, claims, recoveries and overdue/unpaid accounts. Each line had its own operating logic: price per hour, logged hour, sale-based, qualified contact and mixed models agreed with the client.",
          "That experience is what makes his AI positioning practical. In an operation like that, technology only matters if it helps people work better: less administrative load, better reporting, clearer documentation, stronger management support and faster detection of inefficiencies."
        ],
        highlights: [
          "Pool of 8 service lines",
          "Sales, inbound, outbound, upselling and cross-selling",
          "Retention, after-sales, B2B, collections and claims",
          "Recoveries and overdue/unpaid accounts",
          "Billing models: price per hour, logged hour, sale-based and qualified contact",
          "Mixed billing models",
          "Centers in Spain, Portugal, Colombia and Morocco",
          "Senior client relationship with a strategic client",
          "Maximum operational ownership within his scope"
        ],
        cta: "View Konecta case"
      },
      {
        slug: "ayesa-digital-workplace-sector-publico-icex",
        eyebrow: "FEATURED CASE / TECHNOLOGY CONSULTING",
        title: "Ayesa: transformation, public sector and technology delivery",
        body: [
          "Ayesa was a high-value stage because the type of pressure changed. Daniel came from large-scale operations and moved into technology consulting, modernization, executive documentation, Digital Workplace, ITSM, public-sector context and project coordination.",
          "He worked on projects linked to Madrid Digital / Community of Madrid, including the Justice domain; then UOC / Universitat Oberta de Catalunya; and later ICEX, where his role moved closer to Project Management, coordinating more than 30 people and helping structure work, deliverables and follow-up.",
          "AI became a real productivity and quality multiplier in this stage: analysis, synthesis, executive documentation, presentations, proposals and tracking materials produced faster through human-directed, human-reviewed work."
        ],
        highlights: [
          "Madrid Digital / Community of Madrid",
          "Justice domain",
          "UOC / Universitat Oberta de Catalunya",
          "ICEX",
          "Coordination of more than 30 people in project context",
          "Digital Workplace, ITSM and executive documentation",
          "AI as a productivity and quality multiplier"
        ],
        cta: "View Ayesa case"
      }
    ],
    lab: {
      eyebrow: "AI LAB",
      title: "TransformIA: testing on real work before applying it elsewhere",
      body:
        "TransformIA is Daniel's professional applied AI lab. It is where he tests on his own work what could later become methodology, service or product: website, CV, portfolio, documentation, automation, prototypes, analysis and digital assets.\n\nThe logic is simple: if an AI-enabled workflow does not help him produce better work, structure information more clearly, or save time in his own work, it is not worth recommending to a company. TransformIA is not decoration; it is his case zero.",
      methodTitle: "How I work with AI in practice",
      method: [
        {
          title: "Define the objective",
          body: "What problem must be solved, for whom, within which limits and what final result must be produced."
        },
        {
          title: "Generate a first version",
          body: "Use AI to accelerate analysis, structure, documentation, copy, prototype or proposal work."
        },
        {
          title: "Review with judgment",
          body: "Check tone, accuracy, usefulness, risk, coherence and fit with the objective."
        },
        {
          title: "Correct and make it concrete",
          body: "Remove generic output, bring the work down to operational reality and add specific context."
        },
        {
          title: "Turn it into a deliverable",
          body: "Convert the result into a document, website, proposal, flow, presentation or ready-to-use material."
        },
        {
          title: "Learn from the process",
          body: "What works becomes method; what does not help is discarded."
        }
      ],
      cta: "View lab",
      slug: "transformia-lab-ia-aplicada"
    },
    conciergeSection: {
      eyebrow: "PROFILE GUIDE",
      title: "Frequently asked questions about professional fit",
      body:
        "A deterministic demo that answers questions about the public trajectory shown in the portfolio. Interview requests always remain pending Daniel approval.",
      badge: "Local rules · no external AI call"
    },
    credentialsSection: {
      eyebrow: "TECHNICAL FOUNDATION",
      title: "Technical foundation to lead AI with judgment",
      body:
        "Technology is not a recent addition to Daniel's profile. His technical foundation is built through formal training, self-directed practice and hands-on projects across programming, automation, enterprise tools, Digital Workplace and applied AI.\n\nHe does not position himself as a senior software engineer. The value is different: enough technical grounding to prototype, evaluate, coordinate, ask better questions, speak with technical teams and translate business needs into realistic technology solutions.",
      cardTitle: "HarvardX CS50x + CS50AI",
      cardBody:
        "CS50x and CS50AI reinforce that base with formal fundamentals: Python, SQL, algorithms, data structures, search, knowledge representation, uncertainty, optimization, machine learning, neural networks and language.",
      items: [
        "Translate business needs into technology",
        "Evaluate AI solutions with technical judgment",
        "Automate practical work processes",
        "Lead adoption without technical hype"
      ]
    },
    operations: {
      eyebrow: "BUSINESS, TECHNOLOGY AND ADOPTION",
      title: "The value is in connecting the pieces",
      body:
        "Many organizations have tools that nobody adopts, operations where knowledge stays inside key people and AI projects that never reach real work. Daniel's profile fits that gap: structuring processes, translating between areas and bringing technology into practical, measurable and understandable use.",
      items: [
        {
          title: "Operations",
          body: "Service, SLA, KPI, teams, productivity, quality, billing and margin."
        },
        {
          title: "Public sector and consulting",
          body: "Documentation, coordination, adoption, stakeholders and workplace governance."
        },
        {
          title: "Applied AI",
          body: "Useful automation, analysis, prototypes, documentation and human review."
        }
      ]
    },
    cvHub: {
      eyebrow: "CV",
      title: "Executive CV in Spanish and English",
      body:
        "The CV is designed for quick review. This website expands what does not fit into two pages: trajectory, context, judgment, cases and the transition into applied AI.",
      downloadPdf: "Download PDF",
      files: [
        {
          id: "es",
          href: cvRoutes.es,
          label: "Download CV ES",
          shortLabel: "CV ES",
          language: "Spanish",
          audience: "Version focused on Spain/EU: AI transformation, Digital Workplace, operations and consulting."
        },
        {
          id: "en",
          href: cvRoutes.en,
          label: "Download CV EN",
          shortLabel: "CV EN",
          language: "English",
          audience: "International version for Applied AI, Digital Workplace and Operations roles."
        },
        {
          id: "enNoPhoto",
          href: cvRoutes.enNoPhoto,
          label: "Download CV EN no photo",
          shortLabel: "CV EN no photo",
          language: "English",
          audience: "ATS-friendly version for processes where avoiding a photograph is preferable."
        }
      ]
    },
    contact: {
      eyebrow: "PROFESSIONAL CONTACT",
      title: "Available for senior roles in transformation, Digital Workplace and operations",
      body:
        "Daniel is looking for a remote or Madrid-based hybrid role where he can bring management, operational judgment, technology consulting and practical AI adoption. Natural fit: AI Project Manager, AI Transformation Consultant, Digital Workplace / ITSM Consultant, Operations Transformation Lead or AI Enablement.",
      requestInterview: "Book interview",
      linkedin: "LinkedIn",
      cvHub: "CV"
    },
    casePage: {
      back: "Back to experience",
      role: "Role",
      sector: "Scope",
      boundary: "Content scope",
      evidence: "Highlights",
      nextStep: "Next step",
      nextStepBody:
        "Download the most relevant CV variant or return to the home page to review the full trajectory."
    },
    pages: {
      cv: {
        title: "CV Hub",
        description: "Download Daniel Medina Sánchez CV variants in Spanish and English."
      },
      lab: {
        title: "TransformIA Lab",
        description: "Professional laboratory for applied AI, documentation, automation and digital assets."
      },
      contact: {
        title: "Contact",
        description: "Professional contact for senior transformation, Digital Workplace and operations roles."
      },
      assets: {
        title: "Public Assets",
        description: "Public portfolio assets and CV download routes.",
        eyebrow: "Assets",
        heading: "Public asset registry",
        body:
          "The website exposes only public CV PDFs and portfolio resources. Working documents, source ZIPs and strategic packs remain repository build material, not visible interface content.",
        boundaryTitle: "Limit",
        boundaryBody:
          "The website must not expose private TransformIA code, customer data, secrets, legal material, private communications or internal documentation."
      },
      designSystem: {
        title: "Design System",
        description: "Visual tokens adapted from the Tier-S portfolio prototype.",
        eyebrow: "Design system",
        heading: "Tier-S visual direction",
        body:
          "A restrained executive system adapted from the Figma Tier-S prototype: high contrast, compact cards, teal trust cues and information density for professional reading."
      },
      privacy: {
        title: "Privacy",
        description: "Privacy notes for the professional portfolio.",
        heading: "Privacy and content limits",
        paragraphs: [
          "This portfolio is a public professional website. It exposes CV downloads, high-level career information, trajectory cases and deterministic demo interactions.",
          "The interactive profile guide does not call external AI providers, does not create calendar events, does not send emails and does not execute recruitment actions automatically.",
          "The website must not publish private TransformIA code, customer data, secrets, legal material, private communications, internal documentation, full CS50 solutions or unsupported ROI/compliance claims."
        ]
      }
    },
    recruiter: {
      headerTitle: "Profile guide",
      headerSubtitle: "Public information · human review",
      statusChip: "Human review",
      boundaryLabel: "Limit:",
      boundaryText: "no calendar, email or recruitment action is created automatically.",
      initialMessage:
        "Ask about Daniel Medina Sánchez using public portfolio information. Interview, calendar and follow-up actions always remain pending Daniel approval.",
      suggestedQuestions: [
        "Which roles fit Daniel best?",
        "Can he lead AI transformation projects?",
        "Has he managed large teams?",
        "Can he work with public-sector clients?",
        "What is his technical foundation in AI?",
        "How does he apply human review?"
      ],
      inputPlaceholder: "Ask about fit, scale, CS50AI, public sector or human review...",
      sendLabel: "Send question",
      roleFit: "Role fit",
      fitScoreSuffix: "/ 100 match",
      confidence: "Confidence",
      pending: "pending",
      recommendedCv: "Recommended CV",
      askFirst: "Write a question",
      download: "Download",
      approvalStatus: "Approval status",
      requestInterview: "Request interview",
      pendingApproval:
        "Status: pending Daniel approval. No calendar action has been created.",
      approvalDefault:
        "Interview requests are proposals until Daniel explicitly approves them.",
      answers: {
        ai: {
          content:
            "Daniel fits AI transformation, AI Project Management and AI Enablement roles where business ambiguity must become clear, documented and useful work. His value is not hype: it is connecting operations, Digital Workplace, technical foundation, hands-on prototyping and human review.",
          confidence: "high",
          fitScore: 88,
          cvHref: cvRoutes.en,
          cvLabel: "CV EN",
          evidence: ["TransformIA Lab", "CS50x + CS50AI", "Digital Workplace", "Human review"]
        },
        operations: {
          content:
            "Daniel has worked at relevant scale: 560+ people led, coordination across 4 countries and over €12M P&L. At Konecta, he managed a pool of 8 service lines with different billing models, senior client relationship and maximum operational ownership within his scope.",
          confidence: "high",
          fitScore: 91,
          cvHref: cvRoutes.en,
          cvLabel: "CV EN",
          evidence: ["560+ people", "4 countries", "€12M+ P&L", "Pool of 8 service lines"]
        },
        publicSector: {
          content:
            "Daniel has Digital Workplace, ITSM and public-sector context from his Ayesa stage, including Madrid Digital / Community of Madrid, the Justice domain, UOC and ICEX. The work included executive documentation, stakeholder management, project coordination and delivery.",
          confidence: "medium",
          fitScore: 82,
          cvHref: cvRoutes.en,
          cvLabel: "CV EN",
          evidence: ["Ayesa", "ITSM", "Public sector", "ICEX"]
        },
        technical: {
          content:
            "Daniel's technical foundation is business-applied. HarvardX CS50x and CS50AI reinforce Python, SQL, algorithms, data structures, search, uncertainty, machine learning, neural networks and language, supporting better conversations with technical teams.",
          confidence: "high",
          fitScore: 79,
          cvHref: cvRoutes.enNoPhoto,
          cvLabel: "CV EN no photo",
          evidence: ["HarvardX CS50x", "HarvardX CS50AI", "Python", "SQL"]
        },
        hitl: {
          content:
            "Daniel uses AI with real human review: define the objective, generate a first version, review, correct, make concrete and turn the result into a deliverable. AI accelerates the work; direction and accountability remain human.",
          confidence: "high",
          fitScore: 87,
          cvHref: cvRoutes.en,
          cvLabel: "CV EN",
          evidence: ["Human review", "Deliverables", "TransformIA Lab"]
        },
        fallback: {
          content:
            "I do not have enough information to answer precisely. I can answer about AI transformation, Digital Workplace, operational scale, public sector, CS50x + CS50AI or human review.",
          confidence: "low",
          fitScore: 55,
          cvHref: cvRoutes.en,
          cvLabel: "CV EN",
          evidence: ["Public information", "No invented claims"]
        }
      }
    },
    cases: [
      {
        slug: "transcom-cobro-fraude-coordinacion",
        title: "Transcom: the operations school where I started leading",
        eyebrow: "Operations base / Coordination",
        role: "Coordination in collections, fraud and operations",
        sector: "Collections, fraud, customer care and operations for Orange",
        summary:
          "Collections, fraud, coordination, daily pressure and early operational management.",
        proof: ["Collections", "Fraud", "Orange", "Coordination", "KPI", "Quality", "Efficiency", "Early responsibility"],
        tags: ["Collections", "Fraud", "Orange", "Coordination", "KPI"],
        publicSafeNote:
          "Public career-level content. It does not include customer data, internal documentation or sensitive information.",
        sections: [
          {
            title: "Story",
            body: [
              "Daniel's professional track record started in environments where results were measured every day. At Transcom, he worked for years in collections and fraud management for Orange, coordinating teams around KPI, efficiency and quality.",
              "It was a key stage because he learned from the base how real operations work: volume, pressure, follow-up, data, people and client. The environment was concrete and outcome-driven: objectives, teams, incidents, productivity and practical decisions.",
              "Collections and fraud services require daily control. Detail matters: activity tracking, management quality, procedure discipline, data reading and coordination with teams.",
              "That stage built operational craft, tolerance for pressure and a direct understanding of how teams and services are managed from the day-to-day reality.",
              "When Daniel now talks about automation or applied AI, he is thinking about environments like this: repeated tasks, follow-up, reporting, documentation, information loss and decisions that improve when the system is better designed."
            ]
          }
        ]
      },
      {
        slug: "uniglobal-supervision-responsable-servicio",
        title: "Uniglobal: from supervisor to service lead",
        eyebrow: "Supervision / Service responsibility",
        role: "Supervisor and service lead",
        sector: "Commercial teams, client, productivity and operational continuity",
        summary:
          "Team management, client relationship, objectives, productivity and operational continuity.",
        proof: ["Supervision", "Service responsibility", "Commercial teams", "Client", "Productivity", "Quality", "Planning", "Operational continuity"],
        tags: ["Supervision", "Service", "Productivity", "Quality", "Client"],
        publicSafeNote:
          "Public career-level content. It does not include customer data, internal documentation or sensitive information.",
        sections: [
          {
            title: "Story",
            body: [
              "At Uniglobal, Daniel consolidated his management profile. He moved through supervision and service ownership, leading commercial teams and operations focused on objectives, quality and customer satisfaction.",
              "It was a real growth stage: more responsibility, more client interaction, more planning and a broader account perspective. The work was no longer only about what happened inside a team, but how that work affected the client, profitability, service continuity and response capacity.",
              "Service ownership requires combining several layers: people, objectives, planning, client relationship, quality and efficiency. It is not enough to push activity; capacity, demand peaks, performance, climate and continuity all matter.",
              "Moving from supervisor to service lead helped Daniel build a broader operating view. He was no longer working only on direct team management, but on the structure that allows a service to run in a stable way.",
              "This stage explains part of his current fit in transformation roles: he understands how services are organized, where bottlenecks appear and why any technology solution must land in processes, people and follow-up.",
              "Uniglobal was the point where he moved from managing teams to thinking in services. That difference matters: a team performs tasks; a service must sustain value for the client, the account and the operation."
            ]
          }
        ]
      },
      {
        slug: "konecta-operaciones-escala-seguros",
        title: "Konecta: operations leadership at scale for a leading insurer",
        eyebrow: "Operations leadership / Service Delivery",
        role: "Business Manager",
        sector: "Insurance, contact center, multicenter operations and P&L",
        summary:
          "Eight services, four countries, different billing models, strategic client and account responsibility.",
        proof: [
          "Pool of 8 service lines",
          "Sales, inbound, outbound, upselling and cross-selling",
          "Retention, after-sales, B2B, collections and claims",
          "Recoveries and overdue/unpaid accounts",
          "Billing models: price per hour, logged hour, sale-based and qualified contact",
          "Mixed billing models",
          "Madrid / Alcobendas",
          "Talavera de la Reina",
          "Almendralejo",
          "Lisbon",
          "Medellín",
          "Bogotá",
          "Tangier",
          "4 countries coordinated",
          "560+ people led",
          "Over €12M P&L",
          "Senior client relationship with a strategic client",
          "Maximum operational ownership within my scope"
        ],
        tags: ["Operations", "P&L", "SLA/KPI", "Insurance", "Service Delivery"],
        publicSafeNote:
          "Public career-level content. It does not include customer data, internal documentation or sensitive information.",
        sections: [
          {
            title: "Story",
            body: [
              "Konecta was Daniel's largest operational scale stage. As Business Manager, he managed a complex operation for a leading insurer, with a pool of 8 service lines, distributed teams and direct responsibility over client relationship, SLA, productivity, quality, billing, margin and service continuity.",
              "This was not a small operation or an isolated team. The account included sales, inbound, outbound, upselling, cross-selling, retention, after-sales, B2B, collections, claims, recoveries and overdue/unpaid accounts. Each service line had its own operating logic, metrics, objectives, tensions and profitability model.",
              "A particularly relevant part of the role was understanding and managing billing models. Not every service was billed the same way. There were models based on price per hour, logged hour, sale-based performance, qualified contact and mixed combinations agreed with the client.",
              "Daniel's role required negotiating, reviewing, explaining and sustaining those models from the operation, making sure what had been agreed was viable and that the service could actually deliver it.",
              "The operation was distributed across several countries and locations: Spain, Portugal, Colombia and Morocco; Madrid / Alcobendas, Talavera de la Reina, Almendralejo, Lisbon, Medellín, Bogotá and Tangier. That required coordination, method, follow-up and the ability to align different operational realities under the same account.",
              "The role was not just activity coordination. It meant maximum operational ownership within his scope: KPI follow-up, capacity review, coordination of service leads, deviation analysis, senior client relationship with a strategic client, decision defense, continuous improvement and P&L control.",
              "The challenge was not simply hitting metrics. It was doing so sustainably: protecting service delivery, preserving margin, maintaining client trust, aligning teams and identifying where efficiency was leaking without breaking the operation.",
              "This experience proves something important for transformation work: Daniel knows what happens when a decision enters real operations. He does not look at processes from the outside. He understands pressure, resistance, timing, control needs and the impact each change has on people, clients, billing and results.",
              "From that kind of operation, AI is understood differently. Not as a trend, but as a tool to reduce friction: faster analysis, clearer documentation, better-structured reporting, support for middle managers, automation of repeated tasks and capture of operational knowledge.",
              "Konecta is Daniel's strongest case of operational execution at scale. It is the foundation that lets him talk about AI and transformation with practical judgment: first understand how the business works; then decide which technology can improve it."
            ]
          }
        ]
      },
      {
        slug: "ayesa-digital-workplace-sector-publico-icex",
        title: "Ayesa: technology consulting, Digital Workplace and institutional projects",
        eyebrow: "Technology consulting / Public sector",
        role: "Consulting, Project Management and delivery coordination",
        sector: "Madrid Digital, Justice, UOC, ICEX, Digital Workplace and ITSM",
        summary:
          "Madrid Digital, Justice, UOC, ICEX, team coordination and AI-enabled productivity for high-value deliverables.",
        proof: [
          "Madrid Digital / Community of Madrid",
          "Justice domain",
          "UOC / Universitat Oberta de Catalunya",
          "ICEX",
          "Project Management",
          "Coordination of more than 30 people",
          "Digital Workplace",
          "ITSM",
          "Executive documentation",
          "Executive and management materials",
          "AI as a productivity and quality multiplier",
          "Technology consulting",
          "Public sector"
        ],
        tags: ["Digital Workplace", "ITSM", "Public sector", "Documentation", "Project Management"],
        publicSafeNote:
          "Public career-level content. It does not include customer data, internal documentation or sensitive information.",
        sections: [
          {
            title: "Story",
            body: [
              "Ayesa was a high-value professional stage because the type of pressure changed. Daniel came from operations at scale, where the challenge is keeping services alive every day. At Ayesa, he moved into a different layer: technology consulting, modernization, public-sector context, Digital Workplace, executive documentation, project coordination and delivery.",
              "He worked on projects linked to Madrid Digital / Community of Madrid, including the Justice domain. That context requires precision, order, documentation, synthesis and a different working rhythm from day-to-day operations. It is not enough to move fast; the environment requires traceability and materials that help decisions move forward.",
              "He also participated in a private project for UOC / Universitat Oberta de Catalunya, within a university and digital context where user understanding, process reading and coordination are key. That experience expanded his view of how technology projects operate outside purely operational environments.",
              "Later, at ICEX, his function moved much closer to Project Management and project coordination. In that context, he coordinated more than 30 people, structuring work, follow-up, deliverables and communication. It was a demanding, high-level stage where the ability to organize information and maintain focus was critical.",
              "The change from Konecta was clear. In operations, pressure comes from volume, productivity, client expectations and margin. In technology consulting, pressure comes from ambiguity, documentation, stakeholders, deadlines, dependencies and the need to turn scattered information into clear deliverables.",
              "During this stage, Daniel used AI intensively as a productivity and quality multiplier: analysis, synthesis, information structuring, presentation preparation, proposals, executive documentation, tracking materials and content review. It was not a substitute for judgment; it was human-directed, human-reviewed work.",
              "Ayesa demonstrates his ability to move between business, technology, administration, documentation and delivery. It also explains why his transition into applied AI is not theoretical: he has already used it as a real advantage to produce better work in demanding professional contexts.",
              "If Konecta proves his operational execution base, Ayesa proves the move into technology consulting and transformation. The combination is precisely what makes the profile distinctive: he understands operations, but he can also translate them into documentation, project structure, adoption and technology."
            ]
          }
        ]
      },
      {
        slug: "transformia-lab-ia-aplicada",
        title: "TransformIA Lab: my zero case for applied AI",
        eyebrow: "AI Lab",
        role: "Own applied AI laboratory",
        sector: "Website, CV, portfolio, documentation, automation and methodology",
        summary:
          "Testing on myself before selling or recommending to others.",
        proof: ["Professional website", "CV and portfolio", "Documentation", "Automation", "Methodology", "Digital assets", "AI applied to real work", "Human-in-the-loop understood as real human review"],
        tags: ["Applied AI", "Portfolio", "Automation", "Methodology", "Digital assets"],
        publicSafeNote:
          "Public own-work content. It does not include secrets, credentials or private documentation.",
        sections: [
          {
            title: "Story",
            body: [
              "TransformIA Lab is Daniel's way of making the transition into AI demonstrable. The goal is not to say that he uses AI, but to build with it: website, CV, portfolio, documentation, prompts, automations, proposals, methodology and digital assets.",
              "The logic is simple: before recommending applied AI to a company, he tests it on his own work. If a methodology does not help him produce better, structure better or save time in his own case, it is not worth selling to a third party.",
              "The lab explores how AI can accelerate real professional work: structuring information, creating drafts, comparing options, preparing documentation, building assets, designing processes and turning ideas into deliverables. The key is not generating more content; the key is turning work into something useful.",
              "The process always keeps human direction. Daniel defines the objective, generates a first version, reviews, corrects, brings the result down to business reality and turns it into a reusable asset. AI accelerates the work, but the final judgment remains human.",
              "TransformIA Lab demonstrates a concrete capability: turning knowledge, experience and judgment into work systems. That is exactly what many organizations need now: not only buying tools, but redesigning how work gets done with them.",
              "TransformIA is not decoration in the profile. It is a professional lab and proof of work: a way to test, document and convert applied AI into something that can be shown, explained or implemented with practical sense."
            ]
          }
        ]
      },
      {
        slug: "harvardx-cs50-cs50ai-base-tecnica",
        title: "HarvardX CS50x + CS50AI: technical foundation to lead AI with judgment",
        eyebrow: "Technical foundation",
        role: "Business and operations profile with formal technical grounding",
        sector: "Computer science, programming, automation and artificial intelligence",
        summary:
          "Computer science and AI fundamentals applied to a business and operations profile.",
        proof: [
          "Foundations: C, Python, SQL, algorithms and data structures",
          "Web/prototyping: HTML, CSS, JavaScript, React, Vite, Tailwind and Vercel",
          "Automation: Make, Zapier and Power Automate",
          "Enterprise/Digital Workplace: Azure, Amazon WorkSpaces, Jira and Atlassian JSM",
          "Technical exploration: C++, Java, TensorFlow, Kubernetes and Machine Learning",
          "CS50x",
          "CS50AI"
        ],
        tags: ["CS50x", "CS50AI", "Python", "SQL", "AI"],
        publicSafeNote:
          "Public training and learning content. It does not include full course solutions or private material.",
        sections: [
          {
            title: "Story",
            body: [
              "Technology is not new in Daniel's profile. He has worked and learned across programming, automation, analysis, systems, web and now AI. The positioning is not a senior software engineering profile; it is a business and operations profile with enough technical grounding to work better between business and technology.",
              "His technical base includes different layers with different levels of depth: programming foundations, web and prototyping, automation tools, enterprise environments, Digital Workplace and AI fundamentals. The point is not to present every technology as equal senior expertise, but to understand how technology becomes practical utility.",
              "CS50x and CS50AI were chosen to avoid staying on the surface of generative AI. Using tools was not enough. Daniel wanted to reinforce fundamentals: how problems are formulated, how solutions are built, where technical limits appear and what questions someone leading or coordinating AI projects should ask.",
              "CS50x provides computer science fundamentals: computational thinking, programming, algorithms, data structures, Python, SQL, web and problem solving. For a business profile, that base improves the conversation with technology teams and reduces the risk of proposing unrealistic solutions.",
              "CS50AI adds specific artificial intelligence foundations: search, knowledge representation, uncertainty, optimization, learning, neural networks and language. That base helps identify what AI can do, what it cannot do and what risks should be considered.",
              "The value is not competing with a senior developer. The value is combining executive experience, operations, consulting and enough technical judgment to lead better, ask better questions, review better and avoid showcase solutions.",
              "CS50x and CS50AI are part of Daniel's serious transition into applied AI. They do not replace his professional track record; they strengthen it with a technical foundation that helps him operate between business and technology."
            ]
          }
        ]
      }
    ]
  }
} as const;

export type PortfolioDictionary = (typeof portfolioContent)[Locale];
export type LocalizedCaseStudy = PortfolioDictionary["cases"][number];

export function getPortfolioContent(locale: Locale): PortfolioDictionary {
  return portfolioContent[locale];
}

export const caseStudies = portfolioContent.en.cases;
