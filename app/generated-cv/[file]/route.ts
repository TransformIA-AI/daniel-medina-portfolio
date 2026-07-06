type CvLanguage = "es" | "en";

type CvData = {
  language: CvLanguage;
  filename: string;
  summary: string;
  profile: string[];
  roles: Array<{
    company: string;
    role: string;
    dates: string;
    bullets: string[];
  }>;
  portfolioTitle: string;
  portfolio: string[];
};

const files: Record<string, CvData> = {
  "daniel-medina-sanchez-cv-es.pdf": {
    language: "es",
    filename: "daniel-medina-sanchez-cv-es.pdf",
    summary:
      "Ejecutivo hibrido negocio + tecnologia + IA aplicada. 15+ anos liderando operaciones, equipos grandes, SLA, KPI, P&L, cliente y delivery. Base tecnica HarvardX CS50x + CS50AI y nuevo hito CertiProf SMPC(R) - Scrum Master Professional Certification.",
    profile: [
      "AI Project Manager / AI Transformation Consultant / Digital Workplace Consultant.",
      "Operaciones + automatizacion: menos friccion, mejor documentacion, reporting y adopcion.",
      "Sector publico, ITSM, Salesforce context, ticketing N1-N2 y coordinacion de proyectos.",
      "Human-in-the-loop: IA para acelerar, criterio humano para validar y responsabilizarse."
    ],
    roles: [
      {
        company: "Ayesa",
        role: "Consultoria tecnologica, Digital Workplace y proyectos institucionales",
        dates: "2025 - 2026",
        bullets: [
          "Madrid Digital / Comunidad de Madrid, Justicia, UOC e ICEX: documentacion ejecutiva, coordinacion, ITSM, puesto de trabajo digital y project management.",
          "Uso intensivo de IA para analisis, sintesis, propuestas, presentaciones, seguimiento y documentacion profesional siempre revisada.",
          "Agentes y automatizaciones descritos a nivel public-safe: knowledge base, Salesforce context, triaje ITSM y coordinacion de ticketing N1-N2."
        ]
      },
      {
        company: "Konecta",
        role: "Business Manager - operaciones a escala para aseguradora lider",
        dates: "2023 - 2025",
        bullets: [
          "Pool de 8 lineas de servicio: ventas, inbound, outbound, upselling, cross-selling, retenciones, postventa, B2B, cobros, siniestros e impagados.",
          "560+ personas, 4 paises y P&L superior a EUR12M, con interlocucion de alto nivel con cliente estrategico.",
          "Responsabilidad sobre SLA, KPI, calidad, productividad, facturacion, margen, modelos de facturacion y continuidad operativa."
        ]
      },
      {
        company: "Uniglobal / Transcom / Agio",
        role: "Gestion operativa, supervision, coordinacion y relaciones laborales",
        dates: "2008 - 2023",
        bullets: [
          "Evolucion desde base operativa a supervision y responsabilidad de servicio: equipos, objetivos, calidad, productividad y cliente.",
          "Cobro, fraude, atencion, analisis de datos, procedimientos, seleccion, contratacion, nominas y normativa laboral."
        ]
      }
    ],
    portfolioTitle: "Portfolio y prueba de capacidad",
    portfolio: [
      "TransformIA Lab: laboratorio profesional de IA aplicada, portfolio, web, CV, documentacion, prototipos, automatizaciones, metodologia y activos digitales.",
      "CS50x + CS50AI: Python, SQL, algoritmos, estructuras de datos, busqueda, incertidumbre, machine learning, redes neuronales y lenguaje.",
      "Limite publico: sin codigo privado, pantallazos, datos de cliente, documentacion interna ni arquitectura propietaria."
    ]
  },
  "daniel-medina-sanchez-cv-en.pdf": {
    language: "en",
    filename: "daniel-medina-sanchez-cv-en.pdf",
    summary:
      "Hybrid business + technology + applied AI executive. 15+ years leading operations, large teams, SLA, KPI, P&L, client management and delivery. Technical foundation reinforced by HarvardX CS50x + CS50AI and the new CertiProf SMPC(R) - Scrum Master Professional Certification milestone.",
    profile: [
      "AI Project Manager / AI Transformation Consultant / Digital Workplace Consultant.",
      "Operations + automation: less friction, better documentation, reporting and adoption.",
      "Public-sector context, ITSM, Salesforce context, N1-N2 ticketing and project coordination.",
      "Human-in-the-loop: AI accelerates work, human judgment validates and remains accountable."
    ],
    roles: [
      {
        company: "Ayesa",
        role: "Technology consulting, Digital Workplace and institutional projects",
        dates: "2025 - 2026",
        bullets: [
          "Madrid Digital / Community of Madrid, Justice, UOC and ICEX: executive documentation, coordination, ITSM, Digital Workplace and project management.",
          "Intensive use of AI for analysis, synthesis, proposals, presentations, tracking materials and reviewed professional documentation.",
          "Public-safe AI agent and automation patterns: knowledge base, Salesforce context, ITSM triage and N1-N2 ticketing coordination."
        ]
      },
      {
        company: "Konecta",
        role: "Business Manager - scaled operations for a leading insurer",
        dates: "2023 - 2025",
        bullets: [
          "Pool of 8 service lines: sales, inbound, outbound, upselling, cross-selling, retention, after-sales, B2B, collections, claims and unpaid accounts.",
          "560+ people, 4 countries and over EUR12M P&L, with senior relationship with a strategic client.",
          "Ownership of SLA, KPI, quality, productivity, billing, margin, billing models and operational continuity."
        ]
      },
      {
        company: "Uniglobal / Transcom / Agio",
        role: "Operations management, supervision, coordination and labour relations",
        dates: "2008 - 2023",
        bullets: [
          "Progression from operational base to supervision and service ownership: teams, objectives, quality, productivity and client relationship.",
          "Collections, fraud, customer care, data analysis, procedures, recruitment, hiring, payroll and labour regulation support."
        ]
      }
    ],
    portfolioTitle: "Portfolio and proof of work",
    portfolio: [
      "TransformIA Lab: professional applied AI lab, portfolio, website, CV, documentation, prototypes, automations, methodology and digital assets.",
      "CS50x + CS50AI: Python, SQL, algorithms, data structures, search, uncertainty, machine learning, neural networks and language.",
      "Public boundary: no private code, screenshots, client data, internal documentation or proprietary architecture."
    ]
  },
  "daniel-medina-sanchez-cv-en-no-photo.pdf": undefined as unknown as CvData
};

files["daniel-medina-sanchez-cv-en-no-photo.pdf"] = {
  ...files["daniel-medina-sanchez-cv-en.pdf"],
  filename: "daniel-medina-sanchez-cv-en-no-photo.pdf"
};

function pdfEscape(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function wrapText(value: string, maxChars = 100) {
  const words = value.split(/\s+/);
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxChars) {
      if (current) lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }

  if (current) lines.push(current);
  return lines;
}

function drawText(text: string, x: number, y: number, size: number, font = "F1") {
  return `BT /${font} ${size} Tf ${x} ${y} Td (${pdfEscape(text)}) Tj ET\n`;
}

function addWrapped(lines: string[], text: string, x: number, y: number, size: number, maxChars: number, leading: number, font = "F1") {
  let cursor = y;
  for (const line of wrapText(text, maxChars)) {
    lines.push(drawText(line, x, cursor, size, font));
    cursor -= leading;
  }
  return cursor;
}

function buildPage(data: CvData, page: 1 | 2) {
  const es = data.language === "es";
  const lines: string[] = [];
  let y = 795;

  if (page === 1) {
    lines.push(drawText("Daniel Medina Sanchez", 50, y, 25, "F2"));
    y -= 22;
    lines.push(drawText("AI Transformation | Digital Workplace | Operations & Agile Delivery", 50, y, 12, "F2"));
    y -= 17;
    lines.push(drawText("Madrid, Spain | daniel.transform-ia.com/es | linkedin.com/in/danielmedina-ai | Danielmedinasanchez86@gmail.com", 50, y, 8));
    y -= 28;
    lines.push(drawText(es ? "Nuevo hito certificado" : "New certified milestone", 50, y, 9, "F2"));
    lines.push(drawText("CertiProf SMPC(R) - Scrum Master Professional Certification | 2026", 205, y, 9, "F2"));
    y -= 24;
    y = addWrapped(lines, data.summary, 50, y, 9, 108, 12);
    y -= 12;
    lines.push(drawText(es ? "Perfil objetivo" : "Target profile", 50, y, 13, "F2"));
    y -= 17;
    for (const item of data.profile) y = addWrapped(lines, `- ${item}`, 62, y, 9, 104, 12);
    y -= 8;
    lines.push(drawText(es ? "Skills clave" : "Key skills", 50, y, 13, "F2"));
    y -= 17;
    const skills = ["AI Transformation", "Digital Workplace", "ITSM / Jira / Atlassian", "Salesforce context", "Scrum / Agile", "SLA / KPI / P&L", "Operations Management", "Process Automation", "Executive Reporting", "Human Review"];
    for (let i = 0; i < skills.length; i += 2) {
      lines.push(drawText(`- ${skills[i]}`, 62, y, 9));
      if (skills[i + 1]) lines.push(drawText(`- ${skills[i + 1]}`, 305, y, 9));
      y -= 12;
    }
    y -= 8;
    lines.push(drawText(es ? "Formacion y certificaciones" : "Education and certifications", 50, y, 13, "F2"));
    y -= 17;
    const certs = [
      "CertiProf SMPC(R) - Scrum Master Professional Certification | 2026",
      "HarvardX CS50x - Introduction to Computer Science",
      "HarvardX CS50AI - Introduction to Artificial Intelligence with Python",
      "MBA + Master in Digital Business - ENEB",
      es ? "Grado en Relaciones Laborales y RRHH - Universidad Rey Juan Carlos" : "Degree in Labour Relations and HR - Universidad Rey Juan Carlos",
      es ? "Machine Learning e Inteligencia Artificial - SmartMind" : "Machine Learning and Artificial Intelligence - SmartMind",
      es ? "Agile Management, Jira y Scrum Master - SmartMind Academy" : "Agile Management, Jira and Scrum Master - SmartMind Academy"
    ];
    for (const cert of certs) y = addWrapped(lines, `- ${cert}`, 62, y, 8.5, 105, 11);
  } else {
    y = 795;
    lines.push(drawText(data.experienceTitle ?? (es ? "Experiencia profesional" : "Professional experience"), 50, y, 13, "F2"));
    y -= 18;
    for (const role of data.roles) {
      lines.push(drawText(`${role.company} - ${role.role}`, 50, y, 10.5, "F2"));
      y -= 13;
      lines.push(drawText(role.dates, 50, y, 8.5));
      y -= 12;
      for (const bullet of role.bullets) y = addWrapped(lines, `- ${bullet}`, 62, y, 8.6, 105, 11.5);
      y -= 8;
    }
    lines.push(drawText(data.portfolioTitle, 50, y, 13, "F2"));
    y -= 18;
    for (const item of data.portfolio) y = addWrapped(lines, `- ${item}`, 62, y, 8.6, 105, 11.5);
  }

  return lines.join("");
}

function buildPdf(data: CvData) {
  const page1 = buildPage(data, 1);
  const page2 = buildPage(data, 2);
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [6 0 R 8 0 R] /Count 2 >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
    `<< /Length ${page1.length} >>\nstream\n${page1}endstream`,
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents 5 0 R >>",
    `<< /Length ${page2.length} >>\nstream\n${page2}endstream`,
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents 7 0 R >>"
  ];
  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });
  const xref = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i < offsets.length; i += 1) {
    pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  return pdf;
}

export async function GET(_request: Request, context: { params: Promise<{ file: string }> }) {
  const { file } = await context.params;
  const data = files[file];

  if (!data) {
    return new Response("CV not found", { status: 404 });
  }

  return new Response(buildPdf(data), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${data.filename}"`,
      "Cache-Control": "public, max-age=3600"
    }
  });
}
