import { cvRoutes } from "@/lib/constants";

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  role: string;
  sector: string;
  summary: string;
  proof: string[];
  tags: string[];
  publicSafeNote: string;
  sections: {
    title: string;
    body: string;
  }[];
};

const sharedCredentials = ["Ayesa", "Konecta", "HarvardX CS50", "TransformIA AI Lab", "ENEB MBA"];

export const portfolioContent = {
  es: {
    metadata: {
      title: "Daniel Medina Sánchez | Transformación IA y Operaciones Digitales",
      description:
        "Portfolio profesional de Daniel Medina Sánchez: transformación IA, Digital Workplace, operaciones, sector público y Human-in-the-Loop proof-of-work.",
      openGraphLocale: "es_ES"
    },
    nav: {
      identityName: "Daniel Medina",
      identityRole: "AI Transformation Leader",
      homeAria: "Inicio de Daniel Medina Sánchez",
      links: [
        { href: "/#work", label: "Trabajo" },
        { href: "/#credentials", label: "Credenciales" },
        { href: "/#lab", label: "Laboratorio IA" },
        { href: "/#concierge", label: "Concierge" },
        { href: "/#contact", label: "Contacto" },
        { href: "/assets", label: "Activos" }
      ],
      bookInterview: "Agendar entrevista",
      cv: "CV"
    },
    footer: {
      body:
        "Portfolio profesional público para transformación IA, Digital Workplace, transformación de operaciones y proof-of-work Human-in-the-Loop. El contenido demo está diseñado bajo frontera public-safe.",
      links: {
        privacy: "Privacidad",
        assets: "Activos",
        designSystem: "Sistema visual",
        github: "GitHub"
      }
    },
    hero: {
      badge: "Disponible · Remoto · Híbrido · Madrid",
      name: "Daniel Medina Sánchez",
      headline: "Líder en Transformación IA y Operaciones Digitales",
      body:
        "Ayudo a organizaciones a convertir complejidad operativa en sistemas de trabajo medibles, gobernados y potenciados por IA. Perfil híbrido ejecutivo con más de 15 años de experiencia en Digital Workplace, sector público, ITSM y operaciones a gran escala.",
      downloadCv: "Descargar CV",
      viewCases: "Ver casos",
      bookInterview: "Agendar entrevista",
      credentialsLabel: "Experiencia y credenciales",
      credentials: sharedCredentials,
      primaryCvHref: cvRoutes.es,
      profile: {
        label: "Perfil",
        name: "Daniel Medina",
        role: "Líder en Transformación IA y Operaciones Digitales",
        chips: ["AI Transformation", "ITSM", "HITL"],
        credential: "HarvardX CS50x + CS50AI"
      },
      stats: [
        { value: "15+", label: "años de experiencia" },
        { value: "560+", label: "personas lideradas" },
        { value: "3", label: "países" },
        { value: "€12M+", label: "P&L gestionado" },
        { value: "CS50x+AI", label: "HarvardX" }
      ]
    },
    valueAreas: {
      eyebrow: "Posicionamiento ejecutivo",
      title: "Transformación IA con disciplina operativa",
      body:
        "El portfolio se construye alrededor de evidencia: escala de liderazgo, delivery en sector público, alfabetización técnica en IA y proof-of-work public-safe.",
      items: [
        {
          title: "Transformación IA",
          body:
            "Convertir ambigüedad empresarial en trabajo gobernado con IA, con adopción, documentación ejecutiva y rutinas operativas medibles.",
          tags: ["adopción IA", "HITL", "automatización", "AI literacy"]
        },
        {
          title: "Digital Workplace / ITSM",
          body:
            "Modern Workplace, flujos de servicio y delivery con stakeholders para grandes organizaciones y entornos de sector público.",
          tags: ["ITSM", "Atlassian JSM", "sector público", "delivery"]
        },
        {
          title: "Transformación de operaciones",
          body:
            "Service delivery a escala, gobierno SLA/KPI, rediseño de procesos y reporting ejecutivo en operaciones multicountry.",
          tags: ["P&L", "SLA/KPI", "CX", "service delivery"]
        },
        {
          title: "Sistemas Human-in-the-Loop",
          body:
            "Workflows de IA con aprobación humana, evidence receipts, demos public-safe y límites explícitos para acciones sensibles.",
          tags: ["gobernanza", "evidencia", "approval gates", "responsible AI"]
        }
      ]
    },
    proof: {
      eyebrow: "Proof-of-work",
      title: "Evidencia public-safe de ejecución",
      body:
        "Los casos están escritos a alto nivel de forma intencionada: muestran alcance, modelo operativo y criterio sin exponer datos privados de clientes, runtime privado de TransformIA ni documentación sensible.",
      assetsCta: "Activos públicos"
    },
    lab: {
      eyebrow: "TransformIA Lab / ejecución HITL",
      title: "De prompts a sistemas de trabajo digital gobernados",
      body:
        "TransformIA Lab es la capa pública de proof-of-work: Work Units, policy gates, evidence logs, value receipts y aprobación humana antes de acciones sensibles. Demuestra cómo Daniel convierte interés en IA en ejecución operativa controlada.",
      boundaries: [
        "Sin código privado del runtime",
        "Sin datos de clientes",
        "Sin acciones autónomas de calendario",
        "Sin claims de ROI no soportados"
      ],
      cockpitEyebrow: "HITL workflow cockpit",
      cockpitTitle: "Modelo operativo sintético",
      demoOnly: "Solo demo",
      flowBody: "Trazable, reversible y basado en aprobación. Esta demo pública no llama a sistemas externos.",
      flow: [
        "Intención de negocio capturada",
        "La IA propone un borrador",
        "Policy gate revisa el riesgo",
        "Una persona revisa y corrige",
        "Se registra evidence receipt",
        "La siguiente acción sigue sujeta a aprobación"
      ]
    },
    conciergeSection: {
      eyebrow: "Recruiter Concierge",
      title: "Pregunta al portfolio, con límites de aprobación humana",
      body:
        "Demo determinista public-safe que responde preguntas de recruiters desde evidencia local del portfolio. Las acciones de entrevista quedan pendientes de aprobación por Daniel.",
      badge: "Reglas locales · sin llamada externa a IA"
    },
    credentialsSection: {
      eyebrow: "CS50x + CS50AI",
      title: "Base técnica para transformación IA aplicada",
      body:
        "La base técnica mejora el criterio en proyectos de IA: suficiente computer science y alfabetización IA para razonar con equipos técnicos, evaluar restricciones y evitar transformación superficial.",
      cardTitle: "HarvardX CS50x + CS50AI",
      cardBody:
        "C, Python, SQL, algoritmos, estructuras de datos, search, knowledge representation, uncertainty, optimization, machine learning, neural networks y NLP.",
      items: [
        "Traducción business-to-engineering",
        "Evaluación IA y prompt workflow literacy",
        "Conceptos de automatización y arquitectura workflow",
        "Demos public-safe sin publicar soluciones CS50"
      ]
    },
    operations: {
      eyebrow: "Operaciones / transformación / sector público",
      title: "Ejecución enterprise, no solo narrativa IA",
      body:
        "El posicionamiento es deliberadamente híbrido: Daniel combina escala operativa, delivery en sector público y aprendizaje técnico en IA para hacer la transformación creíble.",
      items: [
        {
          title: "Operaciones",
          body: "Gobierno SLA/KPI, P&L, productividad, calidad y cadencia ejecutiva recurrente."
        },
        {
          title: "Sector público",
          body: "Alineamiento con stakeholders, disciplina documental y contexto ITSM/Digital Workplace."
        },
        {
          title: "AI enablement",
          body: "Sistemas prácticos de adopción, supervisión HITL y patrones de automatización evidence-first."
        }
      ]
    },
    cvHub: {
      eyebrow: "CV hub",
      title: "Versiones de CV preparadas para recruiters",
      body: "Tres variantes PDF públicas están disponibles directamente desde la carpeta pública de Next.js.",
      downloadPdf: "Descargar PDF",
      files: [
        {
          id: "es",
          href: cvRoutes.es,
          label: "Descargar CV ES",
          shortLabel: "CV ES",
          language: "Español",
          audience: "Roles de Transformación IA, Digital Workplace y Operaciones en España/UE."
        },
        {
          id: "en",
          href: cvRoutes.en,
          label: "Descargar CV EN",
          shortLabel: "CV EN",
          language: "Inglés",
          audience: "Roles internacionales de AI Transformation, Digital Workplace y Operations."
        },
        {
          id: "enNoPhoto",
          href: cvRoutes.enNoPhoto,
          label: "Descargar CV EN sin foto",
          shortLabel: "CV EN sin foto",
          language: "Inglés",
          audience: "Procesos ATS-friendly o sin fotografía."
        }
      ]
    },
    contact: {
      eyebrow: "Contacto profesional",
      title: "Disponible para roles senior en Transformación IA, Digital Workplace y Operaciones",
      body:
        "Mejor encaje: AI Project Manager, AI Transformation Lead, consultor Digital Workplace / ITSM, Operations Transformation Lead, AI Enablement y delivery en sector público.",
      requestInterview: "Agendar entrevista",
      linkedin: "LinkedIn",
      cvHub: "CV hub"
    },
    casePage: {
      back: "Volver a proof-of-work",
      role: "Rol",
      sector: "Sector",
      boundary: "Frontera public-safe",
      evidence: "Señales de evidencia",
      nextStep: "Siguiente paso",
      nextStepBody:
        "Descarga la variante de CV más relevante o vuelve al Recruiter Concierge para una respuesta determinista de encaje basada en evidencia pública del portfolio."
    },
    pages: {
      cv: {
        title: "CV Hub",
        description: "Descarga las variantes de CV de Daniel Medina Sánchez en español e inglés."
      },
      lab: {
        title: "TransformIA Lab",
        description: "Proof-of-work public-safe de workflows IA Human-in-the-Loop."
      },
      contact: {
        title: "Contacto",
        description: "Contacto profesional para roles senior en Transformación IA, Digital Workplace y Operaciones."
      },
      assets: {
        title: "Activos Públicos",
        description: "Activos public-safe del portfolio y rutas de descarga de CV.",
        eyebrow: "Activos",
        heading: "Registro de activos public-safe",
        body:
          "Solo los CV públicos en PDF y recursos public-safe del portfolio se exponen en la web. Documentos de handoff, ZIPs fuente y packs estratégicos son material de construcción del repositorio, no contenido visible de la UI pública.",
        boundaryTitle: "Frontera",
        boundaryBody:
          "La web no debe exponer código privado de TransformIA, datos de clientes, secretos, material legal, comunicaciones privadas ni evidencia interna raw."
      },
      designSystem: {
        title: "Sistema Visual",
        description: "Tokens visuales adaptados desde el prototipo Tier-S del portfolio.",
        eyebrow: "Sistema visual",
        heading: "Dirección visual Tier-S",
        body:
          "Sistema ejecutivo sobrio adaptado del prototipo Figma Tier-S: alto contraste, tarjetas compactas, señales de confianza en teal, etiquetas public-safe y densidad informativa orientada a recruiters."
      },
      privacy: {
        title: "Privacidad",
        description: "Notas de privacidad y frontera public-safe del portfolio.",
        heading: "Privacidad y frontera public-safe",
        paragraphs: [
          "Este portfolio es una web profesional pública. Expone descargas de CV, información profesional de alto nivel, casos public-safe e interacciones demo deterministas.",
          "El Recruiter Concierge no llama a proveedores externos de IA, no crea eventos de calendario, no envía emails y no ejecuta acciones de recruitment automáticamente.",
          "La web no debe publicar código privado de TransformIA, datos de clientes, secretos, material legal, comunicaciones privadas, evidencia interna raw, soluciones completas de CS50 ni claims de ROI o compliance no soportados."
        ]
      }
    },
    recruiter: {
      headerTitle: "Recruiter Concierge",
      headerSubtitle: "Determinista · public-safe · sin llamada externa a IA",
      statusChip: "HITL",
      boundaryLabel: "Frontera:",
      boundaryText: "no se crea calendario, email ni acción de recruitment automáticamente.",
      initialMessage:
        "Pregunta sobre Daniel Medina Sánchez usando evidencia pública del portfolio. Las acciones de entrevista, calendario o seguimiento quedan siempre pendientes de aprobación por Daniel.",
      suggestedQuestions: [
        "¿Para qué roles encaja mejor Daniel?",
        "¿Puede liderar proyectos de Transformación IA?",
        "¿Ha gestionado equipos grandes?",
        "¿Puede trabajar con clientes de sector público?",
        "¿Cuál es su base técnica en IA?",
        "¿Cómo aplica Human-in-the-Loop?"
      ],
      inputPlaceholder: "Pregunta por encaje, escala, CS50AI, sector público o HITL...",
      sendLabel: "Enviar pregunta",
      roleFit: "Encaje con el rol",
      fitScoreSuffix: "/ 100 fit score",
      confidence: "Confianza",
      pending: "pendiente",
      recommendedCv: "CV recomendado",
      askFirst: "Haz una pregunta primero",
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
            "Daniel encaja especialmente en roles de Transformación IA, AI Project Management y AI Enablement donde la ambigüedad de negocio debe convertirse en trabajo gobernado. La evidencia incluye TransformIA Lab, diseño Human-in-the-Loop, Digital Workplace y base técnica CS50x + CS50AI.",
          confidence: "high",
          fitScore: 88,
          cvHref: cvRoutes.es,
          cvLabel: "CV ES",
          evidence: ["TransformIA AI Lab", "CS50x + CS50AI", "Digital Workplace"]
        },
        operations: {
          content:
            "Daniel ha trabajado a escala relevante: equipos de hasta 560 personas, coordinación España/Portugal/Colombia y responsabilidad P&L superior a €12M. Esto soporta roles de Operations Transformation, Service Delivery y liderazgo CX.",
          confidence: "high",
          fitScore: 91,
          cvHref: cvRoutes.es,
          cvLabel: "CV ES",
          evidence: ["560 personas", "3 países", "€12M+ P&L"]
        },
        publicSector: {
          content:
            "Daniel tiene contexto de Digital Workplace e ITSM en sector público a través de trabajo relacionado con Ayesa. El portfolio solo muestra alcance high-level y no expone documentación interna ni material sensible.",
          confidence: "medium",
          fitScore: 82,
          cvHref: cvRoutes.es,
          cvLabel: "CV ES",
          evidence: ["Caso Ayesa", "ITSM", "Scope public-safe"]
        },
        technical: {
          content:
            "La base técnica de Daniel es aplicada a negocio, no un posicionamiento de software engineer puro: CS50x y CS50AI cubren C, Python, SQL, algoritmos, search, uncertainty, ML, neural networks y NLP.",
          confidence: "high",
          fitScore: 79,
          cvHref: cvRoutes.enNoPhoto,
          cvLabel: "CV EN sin foto",
          evidence: ["HarvardX CS50x", "HarvardX CS50AI", "Python AI projects"]
        },
        hitl: {
          content:
            "Human-in-the-Loop es central en el modelo operativo IA de Daniel: la IA propone, los policy gates revisan riesgo, la persona aprueba acciones sensibles y los evidence receipts mantienen trazabilidad.",
          confidence: "high",
          fitScore: 87,
          cvHref: cvRoutes.es,
          cvLabel: "CV ES",
          evidence: ["Policy gates", "Human review", "Evidence receipts"]
        },
        fallback: {
          content:
            "No tengo suficiente evidencia pública para responder con precisión. Puedo responder sobre Transformación IA, Digital Workplace, escala operativa, sector público, CS50x + CS50AI o Human-in-the-Loop.",
          confidence: "low",
          fitScore: 55,
          cvHref: cvRoutes.es,
          cvLabel: "CV ES",
          evidence: ["Frontera pública", "Sin claims inventados"]
        }
      }
    },
    cases: [
      {
        slug: "ayesa-digital-workplace",
        title: "Ayesa: Digital Workplace público e ITSM",
        eyebrow: "Digital Workplace / Sector público",
        role: "Project Manager / Consultant",
        sector: "Sector público y grandes organizaciones",
        summary:
          "Transformación digital, Modern Workplace, experiencia de usuario e ITSM para entornos de sector público y organizaciones enterprise.",
        proof: [
          "Contexto de delivery en sector público",
          "Documentación ejecutiva y coordinación",
          "ITSM y Atlassian Jira Service Management"
        ],
        tags: ["Digital Workplace", "ITSM", "Sector público", "Atlassian JSM"],
        publicSafeNote:
          "Este caso usa solo alcance profesional public-safe. No expone documentos internos, datos de clientes, credenciales ni material sensible de delivery.",
        sections: [
          {
            title: "Contexto y rol",
            body:
              "Daniel trabajó en iniciativas de transformación digital, Modern Workplace, experiencia de usuario e ITSM para entornos de sector público y grandes organizaciones."
          },
          {
            title: "Enfoque",
            body:
              "El trabajo combinó coordinación de proyecto, documentación ejecutiva, gestión de stakeholders y productividad apoyada por IA para análisis y entregables."
          },
          {
            title: "Qué demuestra",
            body:
              "Un puente creíble entre transformación de negocio, Digital Workplace, prácticas ITSM y la disciplina necesaria para ejecutar en sector público."
          }
        ]
      },
      {
        slug: "konecta-operations-transformation",
        title: "Konecta: transformación de operaciones a escala",
        eyebrow: "Operaciones / Service Delivery",
        role: "Business Manager / General Service Lead",
        sector: "Seguros, CX y operaciones BPO",
        summary:
          "Operaciones de seguros, CX y contact center a gran escala en España, Portugal y Colombia, con cadencia ejecutiva y gobierno KPI.",
        proof: [
          "560 personas lideradas en pico",
          "Coordinación España, Portugal y Colombia",
          "Responsabilidad P&L superior a €12M"
        ],
        tags: ["Operaciones", "P&L", "SLA/KPI", "Seguros", "CX"],
        publicSafeNote:
          "Este caso usa solo información profesional public-safe: escala, tipos de servicio, alcance de liderazgo y responsabilidades operativas.",
        sections: [
          {
            title: "Contexto y rol",
            body:
              "Daniel lideró operaciones de servicio a gran escala en seguros y CX, coordinando equipos multicountry y reporting ejecutivo recurrente."
          },
          {
            title: "Modelo operativo",
            body:
              "El sistema de gestión se centró en SLA/ANS, disciplina KPI, productividad, calidad, scripting, alineamiento con stakeholders y mejora continua."
          },
          {
            title: "Qué demuestra",
            body:
              "Capacidad para dirigir operaciones complejas con responsabilidad comercial y traducir presión operativa en prioridades estructuradas de transformación."
          }
        ]
      },
      {
        slug: "transformia-hitl-ai-lab",
        title: "TransformIA AI Lab: sistemas Human-in-the-Loop",
        eyebrow: "AI Lab / Proof-of-work",
        role: "Founder / AI Workflow Architect / HITL Operator",
        sector: "IA aplicada y gobernanza workflow",
        summary:
          "Laboratorio IA public-safe que muestra cómo la intención de negocio se convierte en trabajo digital gobernado mediante Work Units, policy gates, evidence receipts y revisión humana.",
        proof: [
          "Modelo operativo Human-in-the-Loop",
          "Arquitectura public-safe de workflows IA",
          "Recruiter Concierge demo y ejecución evidence-first"
        ],
        tags: ["HITL", "AI Workflows", "Gobernanza", "Proof-of-work"],
        publicSafeNote:
          "Este caso no expone código privado de TransformIA, runtime propietario, datos de clientes, secretos ni evidencia interna raw.",
        sections: [
          {
            title: "Contexto y rol",
            body:
              "TransformIA Lab es la capa pública de proof-of-work de Daniel para IA aplicada, automatización, gobernanza workflow y ejecución Human-in-the-Loop."
          },
          {
            title: "Arquitectura",
            body:
              "El modelo público muestra intención de negocio, AI draft, policy gate, revisión humana, aprobación o corrección, evidence receipt y siguiente acción."
          },
          {
            title: "Qué demuestra",
            body:
              "Una forma práctica de explicar transformación IA más allá de prompts: sistemas de trabajo gobernados, trazabilidad, límites de riesgo y responsabilidad humana."
          }
        ]
      },
      {
        slug: "harvardx-cs50-ai-foundation",
        title: "HarvardX CS50x + CS50AI: base técnica",
        eyebrow: "Base técnica IA",
        role: "Applied learner con foco business-to-AI",
        sector: "Computer science e inteligencia artificial",
        summary:
          "CS50x y CS50AI completados como base técnica para computer science, conceptos IA y traducción business-to-engineering.",
        proof: [
          "C, Python, SQL, algoritmos y estructuras de datos",
          "Search, knowledge, uncertainty y optimization",
          "Conceptos de machine learning, neural networks y NLP"
        ],
        tags: ["CS50x", "CS50AI", "Python", "IA", "Computer Science"],
        publicSafeNote:
          "Este caso no incluye soluciones completas de CS50, respuestas de evaluación ni material privado del curso.",
        sections: [
          {
            title: "Contexto y rol",
            body:
              "Daniel utilizó CS50x y CS50AI para reforzar la base técnica necesaria para liderar IA aplicada y transformación con fluidez frente a equipos técnicos."
          },
          {
            title: "Alcance",
            body:
              "El recorrido cubrió C, Python, SQL, algoritmos, estructuras de datos, search, knowledge representation, uncertainty, optimization, machine learning, neural networks y NLP."
          },
          {
            title: "Qué demuestra",
            body:
              "Capacidad para traducir entre necesidades operativas de negocio y restricciones técnicas de IA sin sobredimensionar la propiedad de ingeniería."
          }
        ]
      }
    ]
  },
  en: {
    metadata: {
      title: "Daniel Medina Sánchez | AI Transformation & Digital Operations",
      description:
        "Professional portfolio for Daniel Medina Sánchez: AI transformation, Digital Workplace, operations, public sector delivery and Human-in-the-Loop proof-of-work.",
      openGraphLocale: "en_US"
    },
    nav: {
      identityName: "Daniel Medina",
      identityRole: "AI Transformation Leader",
      homeAria: "Daniel Medina Sánchez home",
      links: [
        { href: "/#work", label: "Work" },
        { href: "/#credentials", label: "Credentials" },
        { href: "/#lab", label: "AI Lab" },
        { href: "/#concierge", label: "Concierge" },
        { href: "/#contact", label: "Contact" },
        { href: "/assets", label: "Assets" }
      ],
      bookInterview: "Book Interview",
      cv: "CV"
    },
    footer: {
      body:
        "Public professional portfolio for AI Transformation, Digital Workplace, operations transformation and Human-in-the-Loop proof-of-work. Demo content is public-safe by design.",
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
      headline: "AI Transformation & Digital Operations Leader",
      body:
        "I help organizations turn operational complexity into AI-enabled, measurable and governed work systems. Hybrid executive with 15+ years across Digital Workplace, Public Sector, ITSM and large-scale operations.",
      downloadCv: "Download CV",
      viewCases: "View Case Studies",
      bookInterview: "Book Interview",
      credentialsLabel: "Experience & Credentials",
      credentials: sharedCredentials,
      primaryCvHref: cvRoutes.en,
      profile: {
        label: "Profile",
        name: "Daniel Medina",
        role: "AI Transformation & Digital Operations Leader",
        chips: ["AI Transformation", "ITSM", "HITL"],
        credential: "HarvardX CS50x + CS50AI"
      },
      stats: [
        { value: "15+", label: "Years Experience" },
        { value: "560+", label: "People Led" },
        { value: "3", label: "Countries" },
        { value: "€12M+", label: "P&L Managed" },
        { value: "CS50x+AI", label: "HarvardX" }
      ]
    },
    valueAreas: {
      eyebrow: "Executive positioning",
      title: "AI transformation with operating discipline",
      body:
        "The portfolio is built around evidence: leadership scale, public-sector delivery, technical AI literacy and public-safe proof-of-work.",
      items: [
        {
          title: "AI Transformation",
          body:
            "Turning business ambiguity into governed AI-enabled work, with adoption paths, executive documentation and measurable operating routines.",
          tags: ["AI adoption", "HITL", "workflow automation", "AI literacy"]
        },
        {
          title: "Digital Workplace / ITSM",
          body:
            "Modern Workplace, service workflows and stakeholder delivery for large organizations and public-sector environments.",
          tags: ["ITSM", "Atlassian JSM", "public sector", "delivery"]
        },
        {
          title: "Operations Transformation",
          body:
            "Large-scale service delivery, SLA/KPI governance, process redesign and executive client reporting across multi-country operations.",
          tags: ["P&L", "SLA/KPI", "CX", "service delivery"]
        },
        {
          title: "Human-in-the-Loop Systems",
          body:
            "AI workflows designed with human approval gates, evidence receipts, public-safe demos and explicit boundaries for sensitive action.",
          tags: ["governance", "evidence", "approval gates", "responsible AI"]
        }
      ]
    },
    proof: {
      eyebrow: "Proof-of-work",
      title: "Public-safe evidence of delivery",
      body:
        "Case studies are intentionally high-level: they show scope, operating model and judgement without exposing private customer data, private TransformIA runtime code or sensitive documents.",
      assetsCta: "Public assets"
    },
    lab: {
      eyebrow: "TransformIA Lab / HITL execution",
      title: "From prompts to governed digital work systems",
      body:
        "TransformIA Lab is the public-safe proof layer: Work Units, policy gates, evidence logs, value receipts and human approval before sensitive action. It demonstrates how Daniel turns AI interest into controlled operational execution.",
      boundaries: [
        "No private runtime code",
        "No customer data",
        "No autonomous calendar action",
        "No unsupported ROI claims"
      ],
      cockpitEyebrow: "HITL workflow cockpit",
      cockpitTitle: "Synthetic operating model",
      demoOnly: "Demo only",
      flowBody: "Traceable, reversible and approval-based. No external system is called from this public demo.",
      flow: [
        "Business intent captured",
        "AI proposes a draft",
        "Policy gate checks risk",
        "Human reviews and corrects",
        "Evidence receipt is logged",
        "Next action remains approval-based"
      ]
    },
    conciergeSection: {
      eyebrow: "Recruiter Concierge",
      title: "Ask the portfolio, with human approval boundaries",
      body:
        "A deterministic public-safe demo that answers recruiter questions from local portfolio evidence. Interview actions remain pending Daniel approval.",
      badge: "Local rules · No external AI call"
    },
    credentialsSection: {
      eyebrow: "CS50x + CS50AI",
      title: "Technical literacy for applied AI transformation",
      body:
        "The technical foundation supports better AI project judgement: enough computer science and AI literacy to reason with engineering teams, evaluate constraints and avoid hand-wavy transformation.",
      cardTitle: "HarvardX CS50x + CS50AI",
      cardBody:
        "C, Python, SQL, algorithms, data structures, search, knowledge representation, uncertainty, optimization, machine learning, neural networks and NLP.",
      items: [
        "Business-to-engineering translation",
        "AI evaluation and prompt workflow literacy",
        "Automation and workflow architecture concepts",
        "Public-safe demos without publishing CS50 solutions"
      ]
    },
    operations: {
      eyebrow: "Operations / transformation / public sector",
      title: "Enterprise execution, not just AI narrative",
      body:
        "The core positioning is deliberately hybrid: Daniel combines operational scale, public-sector delivery and technical AI learning to make transformation credible.",
      items: [
        {
          title: "Operations",
          body: "SLA/KPI governance, P&L, productivity, quality and recurring executive cadence."
        },
        {
          title: "Public sector",
          body: "Stakeholder alignment, documentation discipline and ITSM/Digital Workplace delivery context."
        },
        {
          title: "AI enablement",
          body: "Practical adoption systems, HITL oversight and evidence-first automation patterns."
        }
      ]
    },
    cvHub: {
      eyebrow: "CV hub",
      title: "Recruiter-ready CV variants",
      body: "Three public PDF variants are available directly from the Next.js public assets folder.",
      downloadPdf: "Download PDF",
      files: [
        {
          id: "es",
          href: cvRoutes.es,
          label: "Download CV ES",
          shortLabel: "CV ES",
          language: "Spanish",
          audience: "AI Transformation, Digital Workplace and Operations roles in Spain/EU."
        },
        {
          id: "en",
          href: cvRoutes.en,
          label: "Download CV EN",
          shortLabel: "CV EN",
          language: "English",
          audience: "International AI Transformation, Digital Workplace and Operations roles."
        },
        {
          id: "enNoPhoto",
          href: cvRoutes.enNoPhoto,
          label: "Download CV EN no photo",
          shortLabel: "CV EN no photo",
          language: "English",
          audience: "ATS-friendly and photo-free recruitment processes."
        }
      ]
    },
    contact: {
      eyebrow: "Professional contact",
      title: "Available for senior AI Transformation, Digital Workplace and Operations roles",
      body:
        "Best fit: AI Project Manager, AI Transformation Lead, Digital Workplace / ITSM Consultant, Operations Transformation Lead, AI Enablement and public-sector delivery roles.",
      requestInterview: "Request interview",
      linkedin: "LinkedIn",
      cvHub: "CV hub"
    },
    casePage: {
      back: "Back to proof-of-work",
      role: "Role",
      sector: "Sector",
      boundary: "Public-safe boundary",
      evidence: "Evidence signals",
      nextStep: "Next step",
      nextStepBody:
        "Download the most relevant CV variant or return to the Recruiter Concierge for a deterministic role-fit answer based on public portfolio evidence."
    },
    pages: {
      cv: {
        title: "CV Hub",
        description: "Download Daniel Medina Sánchez CV variants in Spanish and English."
      },
      lab: {
        title: "TransformIA Lab",
        description: "Public-safe Human-in-the-Loop AI workflow proof-of-work."
      },
      contact: {
        title: "Contact",
        description: "Professional contact for senior AI Transformation, Digital Workplace and Operations roles."
      },
      assets: {
        title: "Public Assets",
        description: "Public-safe portfolio assets and CV download routes.",
        eyebrow: "Assets",
        heading: "Public-safe asset registry",
        body:
          "Only public CV PDFs and public-safe portfolio resources are exposed through the website. Handoff documents, source ZIPs and strategic packs remain repository build material, not public UI content.",
        boundaryTitle: "Boundary",
        boundaryBody:
          "The website must not expose private TransformIA source code, customer data, secrets, legal material, private communications or raw internal evidence."
      },
      designSystem: {
        title: "Design System",
        description: "Visual tokens adapted from the Tier-S portfolio prototype.",
        eyebrow: "Design system",
        heading: "Tier-S visual direction",
        body:
          "A restrained executive system adapted from the Figma Tier-S prototype: high contrast, compact cards, teal trust cues, public-safe status labels and recruiter-friendly information density."
      },
      privacy: {
        title: "Privacy",
        description: "Privacy and public-safe notes for the portfolio website.",
        heading: "Privacy and public-safe boundary",
        paragraphs: [
          "This portfolio is a public professional website. It exposes CV downloads, high-level career information, public-safe case studies and deterministic demo interactions.",
          "The Recruiter Concierge does not call an external AI provider, does not create calendar events, does not send emails and does not execute recruitment actions automatically.",
          "The website must not publish private TransformIA code, customer data, secrets, legal material, private communications, raw internal evidence, full CS50 solutions or unsupported ROI/compliance claims."
        ]
      }
    },
    recruiter: {
      headerTitle: "Recruiter Concierge",
      headerSubtitle: "Deterministic · public-safe · no external AI call",
      statusChip: "HITL",
      boundaryLabel: "Boundary:",
      boundaryText: "no calendar event, email or recruiter action is executed automatically.",
      initialMessage:
        "Ask about Daniel Medina Sánchez using public portfolio evidence. Interview, calendar or follow-up actions always remain pending Daniel approval.",
      suggestedQuestions: [
        "What roles is Daniel best suited for?",
        "Can Daniel lead AI transformation projects?",
        "Has Daniel managed large teams?",
        "Can Daniel work with public sector clients?",
        "What is his technical AI foundation?",
        "How does Daniel apply Human-in-the-Loop?"
      ],
      inputPlaceholder: "Ask about fit, scale, CS50AI, public sector or HITL...",
      sendLabel: "Send question",
      roleFit: "Role fit",
      fitScoreSuffix: "/ 100 fit score",
      confidence: "Confidence",
      pending: "pending",
      recommendedCv: "Recommended CV",
      askFirst: "Ask a question first",
      download: "Download",
      approvalStatus: "Approval status",
      requestInterview: "Request interview",
      pendingApproval: "Status: pending Daniel approval. No calendar action has been created.",
      approvalDefault: "Interview requests are only proposals until Daniel explicitly approves them.",
      answers: {
        ai: {
          content:
            "Daniel is a strong fit for AI Transformation, AI Project Management and AI Enablement roles where business ambiguity must become governed work. Evidence includes TransformIA Lab, Human-in-the-Loop workflow design, Digital Workplace delivery and CS50x + CS50AI technical literacy.",
          confidence: "high",
          fitScore: 88,
          cvHref: cvRoutes.en,
          cvLabel: "CV EN",
          evidence: ["TransformIA AI Lab", "CS50x + CS50AI", "Digital Workplace delivery"]
        },
        operations: {
          content:
            "Daniel has operated at substantial scale: teams up to 560 people, Spain/Portugal/Colombia coordination and €12M+ P&L responsibility. This supports Operations Transformation, Service Delivery and CX leadership roles.",
          confidence: "high",
          fitScore: 91,
          cvHref: cvRoutes.en,
          cvLabel: "CV EN",
          evidence: ["560 people peak", "3 countries", "€12M+ P&L"]
        },
        publicSector: {
          content:
            "Daniel has public-sector Digital Workplace and ITSM delivery context through Ayesa-related work. The public portfolio only states high-level scope and does not expose internal client documents or sensitive implementation material.",
          confidence: "medium",
          fitScore: 82,
          cvHref: cvRoutes.en,
          cvLabel: "CV EN",
          evidence: ["Ayesa case study", "ITSM context", "Public-safe delivery scope"]
        },
        technical: {
          content:
            "Daniel's technical foundation is business-applied rather than pure software-engineering positioning: CS50x and CS50AI cover C, Python, SQL, algorithms, search, uncertainty, ML, neural networks and NLP concepts.",
          confidence: "high",
          fitScore: 79,
          cvHref: cvRoutes.enNoPhoto,
          cvLabel: "CV EN no photo",
          evidence: ["HarvardX CS50x", "HarvardX CS50AI", "Python AI projects"]
        },
        hitl: {
          content:
            "Human-in-the-Loop is central to Daniel's AI operating model: AI drafts work, policy gates check risk, humans approve sensitive actions and evidence receipts keep execution traceable. This demo itself is deterministic and approval-based.",
          confidence: "high",
          fitScore: 87,
          cvHref: cvRoutes.en,
          cvLabel: "CV EN",
          evidence: ["Policy gates", "Human review", "Evidence receipts"]
        },
        fallback: {
          content:
            "I do not have enough public evidence to answer that precisely. I can answer about Daniel's AI Transformation, Digital Workplace, operations scale, public-sector delivery, CS50x + CS50AI foundation or Human-in-the-Loop approach.",
          confidence: "low",
          fitScore: 55,
          cvHref: cvRoutes.enNoPhoto,
          cvLabel: "CV EN no photo",
          evidence: ["Public portfolio boundary", "No invented claims"]
        }
      }
    },
    cases: [
      {
        slug: "ayesa-digital-workplace",
        title: "Ayesa: Public Sector Digital Workplace & ITSM",
        eyebrow: "Digital Workplace / Public Sector",
        role: "Project Manager / Consultant",
        sector: "Public sector and large organizations",
        summary:
          "Digital transformation, Modern Workplace, user experience and ITSM work for public-sector and enterprise environments.",
        proof: [
          "Public sector delivery exposure",
          "Executive documentation and coordination",
          "ITSM and Atlassian Jira Service Management context"
        ],
        tags: ["Digital Workplace", "ITSM", "Public Sector", "Atlassian JSM"],
        publicSafeNote:
          "This case references public-safe career-level scope only. It does not expose internal documents, customer data, credentials or sensitive delivery material.",
        sections: [
          {
            title: "Context and role",
            body:
              "Daniel worked on digital transformation, Modern Workplace, user experience and ITSM initiatives for public-sector and large-organization settings."
          },
          {
            title: "Approach",
            body:
              "The work combined project coordination, executive documentation, stakeholder management and practical AI-enabled productivity for analysis and deliverables."
          },
          {
            title: "What it demonstrates",
            body:
              "A credible bridge between business transformation, digital workplace delivery, ITSM practices and the discipline needed for public-sector execution."
          }
        ]
      },
      {
        slug: "konecta-operations-transformation",
        title: "Konecta: Operations Transformation at Scale",
        eyebrow: "Operations / Service Delivery",
        role: "Business Manager / General Service Lead",
        sector: "Insurance, CX and BPO operations",
        summary:
          "Large-scale insurance, CX and contact-center operations across Spain, Portugal and Colombia, with executive operating cadence and KPI governance.",
        proof: [
          "560 people led at peak scale",
          "Spain, Portugal and Colombia coordination",
          "€12M+ P&L responsibility"
        ],
        tags: ["Operations", "P&L", "SLA/KPI", "Insurance", "CX"],
        publicSafeNote:
          "This case uses only public-safe career-level information: scale, service types, leadership scope and operational responsibilities.",
        sections: [
          {
            title: "Context and role",
            body:
              "Daniel led large-scale service operations for insurance and CX environments, coordinating multi-country teams and recurring executive reporting."
          },
          {
            title: "Operating model",
            body:
              "The management system focused on SLA/ANS, KPI discipline, productivity, quality, service scripts, stakeholder alignment and continuous operational improvement."
          },
          {
            title: "What it demonstrates",
            body:
              "The ability to run complex operations with commercial accountability while translating operational pressure into structured transformation priorities."
          }
        ]
      },
      {
        slug: "transformia-hitl-ai-lab",
        title: "TransformIA AI Lab: Human-in-the-Loop Work Systems",
        eyebrow: "AI Lab / Proof-of-Work",
        role: "Founder / AI Workflow Architect / HITL Operator",
        sector: "Applied AI and workflow governance",
        summary:
          "A public-safe AI lab demonstrating how business intent becomes governed digital work through Work Units, policy gates, evidence receipts and human review.",
        proof: [
          "Human-in-the-Loop operating model",
          "Public-safe AI workflow architecture",
          "Recruiter Concierge demo and evidence-first execution"
        ],
        tags: ["HITL", "AI Workflows", "Governance", "Proof-of-work"],
        publicSafeNote:
          "This case does not expose private TransformIA code, proprietary runtime internals, customer data, secrets or raw internal evidence.",
        sections: [
          {
            title: "Context and role",
            body:
              "TransformIA Lab is Daniel's public proof-of-work layer for applied AI, automation, workflow governance and Human-in-the-Loop execution."
          },
          {
            title: "Architecture",
            body:
              "The public model shows business intent, AI draft, policy gate, human review, approval or correction, evidence receipt and next action."
          },
          {
            title: "What it demonstrates",
            body:
              "A practical way to explain AI transformation beyond prompts: governed work systems, traceability, risk boundaries and human accountability."
          }
        ]
      },
      {
        slug: "harvardx-cs50-ai-foundation",
        title: "HarvardX CS50x + CS50AI: Technical Foundation",
        eyebrow: "Technical AI Foundation",
        role: "Applied learner building business-to-AI technical literacy",
        sector: "Computer science and artificial intelligence",
        summary:
          "CS50x and CS50AI completed as a technical foundation for computer science, AI concepts and business-to-engineering translation.",
        proof: [
          "C, Python, SQL, algorithms and data structures",
          "Search, knowledge, uncertainty and optimization",
          "Machine learning, neural networks and NLP concepts"
        ],
        tags: ["CS50x", "CS50AI", "Python", "AI", "Computer Science"],
        publicSafeNote:
          "This case does not include full CS50 solutions, assessment answers or private course material.",
        sections: [
          {
            title: "Context and role",
            body:
              "Daniel used CS50x and CS50AI to reinforce the technical foundation needed to lead applied AI and transformation work with engineering fluency."
          },
          {
            title: "Scope",
            body:
              "The learning path covered C, Python, SQL, algorithms, data structures, search, knowledge representation, uncertainty, optimization, machine learning, neural networks and NLP."
          },
          {
            title: "What it demonstrates",
            body:
              "The ability to translate between business operating needs and technical AI constraints without overstating engineering ownership."
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
