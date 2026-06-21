# Daniel Medina Sánchez — Portfolio Web HITL / AI Transformation Execution Pack v3

**Objetivo:** construir una web profesional bilingüe, estilo Silicon Valley, que convierta visitas de recruiters/hiring managers en entrevistas reales para roles de **AI Transformation, Digital Workplace, AI Project Management, Operations Transformation, AI Enablement y Human-in-the-Loop**.

**Principio rector:** no hacemos una web de “busco trabajo”. Hacemos una **máquina de confianza**: prueba de criterio, prueba de ejecución, prueba de arquitectura, prueba de IA aplicada y prueba de supervisión humana.

---

## 0. Decisión estratégica

### Posicionamiento público principal

**ES:**
> AI Transformation & Digital Workplace Leader  
> Operaciones críticas, sector público, ITSM, IA aplicada y Human-in-the-Loop.

**EN:**
> AI Transformation & Digital Workplace Leader  
> Critical operations, public sector delivery, ITSM, applied AI and Human-in-the-Loop systems.

### Subposicionamientos por recruiter

1. **AI Transformation / AI PM**
   - AI adoption
   - AI governance
   - Human-in-the-Loop
   - Business automation
   - Executive delivery

2. **Digital Workplace / Public Sector / ITSM**
   - Modern Workplace
   - Atlassian / Jira Service Management
   - Public sector digital transformation
   - Executive documentation
   - Stakeholder management

3. **Operations / Service Delivery / Contact Center Transformation**
   - 560 people peak
   - 3 countries
   - P&L >12M€
   - SLA / ANS / KPI
   - Insurance / BPO / CX

4. **AI Enablement / Trainer / Evaluator**
   - AI literacy
   - QA of AI outputs
   - HITL feedback loops
   - Prompt + workflow governance
   - Productivity systems

---

## 1. Arquitectura del ecosistema público

### Repos recomendados

```txt
daniel-medina-portfolio               # PÚBLICO: web profesional Next.js
daniel-hitl-concierge-public-safe      # PÚBLICO: demo recruiter concierge RAG/HITL
daniel-ai-workflow-cockpit-public-safe # PÚBLICO: demo workflow cockpit / approvals
transformia-exocortex-runtime          # PRIVADO: core real
transformia-web-flagship               # PRIVADO/PÚBLICO según estrategia
transformia-eval-harness               # PRIVADO: tests/evals internos
```

### Regla de oro

Todo lo público debe ser **public-safe projection**:

- Datos sintéticos.
- Arquitectura simplificada.
- Sin secretos.
- Sin endpoints reales.
- Sin customer data.
- Sin lógica propietaria crítica.
- Sin soluciones completas de CS50/CS50AI.
- Sin promesas de compliance o ROI garantizado.
- Todo con disclaimers claros.

---

## 2. Stack recomendado

```txt
Frontend: Next.js App Router + TypeScript + Tailwind + shadcn/ui
Contenido: MDX / Markdown
Hosting: Vercel
Repositorio: GitHub
Analytics: Plausible o Fathom
Forms: API Route + n8n webhook
AI demo: API route server-side + stub por defecto
Calendar: propuesta de slots / pending approval, no auto-booking irreversible
CVs: PDFs en /public/cv
SEO: Metadata API + sitemap.ts + robots.txt + OG image
```

### Variables de entorno

```env
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_ANALYTICS_DOMAIN=

N8N_WEBHOOK_URL=
AI_PROVIDER_API_KEY=
CALENDAR_MODE=proposal_only
```

**Regla:** solo lo realmente público lleva `NEXT_PUBLIC_`.

---

## 3. Sitemap web

```txt
/
  Hero
  Proof bar
  About / Positioning
  Experience highlights
  Case studies
  Human-in-the-Loop demo
  AI Lab / TransformIA
  CV Hub
  Contact / Book interview request

/case/[slug]
  Case study detail

/lab
  TransformIA AI Lab / public-safe architecture

/cv
  CVs ES/EN downloadable

/contact
  Contact form + recruiter request

/privacy
  Analytics, AI demo and form privacy notes
```

---

## 4. Home: estructura exacta

### Hero

**Título ES:**
> AI Transformation & Digital Workplace Leader

**Subtítulo ES:**
> Combino más de 15 años liderando operaciones críticas, equipos de hasta 560 personas y P&L superior a 12M€ con IA aplicada, ITSM, Digital Workplace y sistemas Human-in-the-Loop.

**Título EN:**
> AI Transformation & Digital Workplace Leader

**Subtítulo EN:**
> I combine 15+ years leading critical operations, teams of up to 560 people and €12M+ P&L with applied AI, ITSM, Digital Workplace and Human-in-the-Loop systems.

### CTAs

- Download CV ES
- Download CV EN
- View case studies
- Ask my AI recruiter concierge
- Contact / request interview

### Proof bar

```txt
15+ years operations
560 people peak
3 countries
€12M+ P&L
CS50x + CS50AI
Public sector delivery
ITSM / Jira Service Management
TransformIA AI Lab
```

---

## 5. Case studies obligatorios

### Case 1: Public Sector Digital Workplace & ITSM

**Título ES:**  
Ayesa: Public Sector Digital Workplace, ITSM & AI-Enabled Delivery

**Objetivo:** reposicionarte como PM/consultor real de transformación, no solo operations.

**Contenido:**
- Madrid Digital / Justicia / UOC / ICEX
- Modern Workplace
- Experiencia de usuario
- ITSM con Atlassian / Jira Service Management
- PM y coordinación
- Documentación ejecutiva
- IA generativa para acelerar análisis, presentaciones y entregables

**Disclaimer:** anonimizar detalles sensibles, no nombres de documentos internos, no cifras no públicas.

---

### Case 2: Critical Operations Transformation

**Título ES:**  
Konecta: Scaling Insurance Operations Across 3 Countries

**Objetivo:** vender management real, P&L y escala.

**Contenido:**
- Hasta 560 personas
- España, Portugal, Colombia
- P&L >12M€
- Servicios: ventas, postventa, cobros, retención, mediadores, siniestros, recuperación, cross-sell, upsell
- Presentaciones ejecutivas semanales
- Scripting y coordinación con equipos técnicos
- KPI / SLA / ANS / productividad / calidad

---

### Case 3: TransformIA AI Lab

**Título ES:**  
TransformIA: From Prompts to Governed Digital Work Systems

**Objetivo:** demostrar visión frontier sin exponer core.

**Contenido:**
- Work Units
- Human Bridge
- Evidence log
- Value receipts
- eWorkers
- Policy gates
- Agentic work public-safe
- Runtime privado y web/showroom público

---

### Case 4: HarvardX CS50x + CS50AI

**Título ES:**  
HarvardX CS50x + CS50AI: Technical Foundation for Applied AI

**Objetivo:** legitimar tu transición técnica.

**Contenido:**
- CS50x: C, Python, SQL, algorithms, data structures, web
- CS50AI: search, knowledge, uncertainty, optimization, ML, neural networks, NLP
- No publicar soluciones completas.
- Publicar aprendizajes, arquitectura, capturas de certificados, reflexiones y demos derivadas.

---

### Case 5: Human-in-the-Loop Career System

**Título ES:**  
Recruiter Concierge: Human-in-the-Loop Career Intelligence

**Objetivo:** convertir la propia búsqueda de empleo en demo de producto.

**Contenido:**
- RAG sobre CVs, case studies y perfil
- Respuestas con evidencia
- Botón “flag answer”
- Contact scoring
- Interview request pending approval
- n8n routing
- No auto-calendar irreversible

---

## 6. Demo 1: Recruiter Concierge RAG/HITL

### Comportamiento

El recruiter pregunta:

- “What roles is Daniel best suited for?”
- “Can Daniel lead AI transformation projects?”
- “What is his technical level?”
- “Has he managed large teams?”
- “Can he work with public sector clients?”
- “Does he have AI credentials?”
- “Can he explain HITL?”
- “Can I book an interview?”

La demo responde con:

- respuesta breve;
- evidence chips;
- link a case study;
- recomendación de CV;
- CTA de contacto;
- botón “answer is wrong / needs human review”.

### Estados visibles

```txt
AI draft
Human review available
Confidence: high / medium / low
Evidence: CV / Case Study / Certification / GitHub / LinkedIn
Next action: request interview
Status: pending Daniel approval
```

### Frontera

- No inventar datos.
- Si no sabe, responde “I do not have enough public evidence”.
- No crea eventos automáticamente.
- No envía emails sin approval.
- No expone PII.

---

## 7. Demo 2: HITL Workflow Cockpit

Simulación public-safe de un flujo de trabajo:

```txt
1. Business intent captured
2. AI proposes classification
3. Policy gate checks risk
4. Human reviews
5. Approval / correction / reject
6. Evidence receipt
7. Value estimate
8. Next step
```

Casos mock:

- Lead triage
- Ticket prioritization
- AI adoption request
- Public sector ITSM request
- Operations improvement request

---

## 8. Prompt maestro para Codex — PR0 Foundation

```txt
Actúa como staff engineer y product designer senior.

Crea el repositorio base de un portfolio profesional para Daniel Medina Sánchez usando Next.js App Router, TypeScript, Tailwind y shadcn/ui.

Objetivo del producto:
Construir una web portfolio bilingüe ES/EN para roles de AI Transformation, Digital Workplace, AI Project Management, Operations Transformation y Human-in-the-Loop.

Stack:
- Next.js App Router
- TypeScript
- Tailwind
- shadcn/ui
- MDX para case studies
- Vercel-ready
- Public-safe by design

Secciones de la home:
1. Hero con CTAs a CV ES, CV EN, case studies y recruiter concierge.
2. Proof bar: 15+ years, 560 people, 3 countries, €12M+ P&L, CS50x + CS50AI, ITSM, Public Sector.
3. About / positioning.
4. Experience highlights.
5. Case studies grid.
6. Human-in-the-Loop demo teaser.
7. TransformIA AI Lab public-safe section.
8. CV Hub.
9. Contact form.

Rutas:
- /
- /case/[slug]
- /lab
- /cv
- /contact
- /privacy

Requisitos:
- No usar datos reales de terceros.
- No exponer secretos.
- No generar claims de ROI garantizado.
- No publicar código privado de TransformIA.
- Añadir disclaimers public-safe donde proceda.
- Dejar preparado para Vercel.
- Añadir README profesional.

Entrega:
1. Estructura de carpetas.
2. Código inicial.
3. Scripts de package.json.
4. README.
5. Primer commit sugerido.
```

---

## 9. Prompt para Codex — PR1 Content System + MDX

```txt
Implementa el sistema de contenidos MDX para case studies.

Crea:
- content/cases/*.mdx
- lib/cases.ts
- app/case/[slug]/page.tsx
- components/case-card.tsx
- components/case-layout.tsx

Case studies iniciales:
1. public-sector-digital-workplace-itsm
2. critical-operations-transformation
3. transformia-ai-lab-public-safe
4. harvardx-cs50-ai-foundations
5. recruiter-concierge-hitl

Cada MDX debe tener frontmatter:
- title
- subtitle
- date
- role
- sector
- tags
- summary
- publicSafeNote

Cada case study debe usar esta estructura:
- Context and role
- Problem
- Approach and architecture
- Human-in-the-Loop and governance
- Implementation high-level
- Results / value signals
- Lessons learned
- Public-safe boundary

No incluir código propietario, datos reales ni soluciones completas de CS50.
```

---

## 10. Prompt para Codex — PR2 CV Hub

```txt
Crea una sección CV Hub en /cv y en la home.

Requisitos:
- Botones para descargar CV ES y CV EN desde /public/cv.
- Permitir múltiples variantes:
  - AI Transformation / AI PM
  - Operations / Business Manager
  - Digital Workplace / Public Sector
  - AI Enablement / HITL
  - Master Hybrid Executive
- Crear componentes:
  - CVDownloadCard
  - CVHub
  - RoleFitMatrix

Añade copy explicando:
Daniel tiene varias versiones de CV según el tipo de rol para facilitar lectura ATS y encaje con recruiter.

No hardcodear rutas inexistentes: usar un array cvFiles con filename, label, language, targetRoles y availability.
```

---

## 11. Prompt para Codex — PR3 Recruiter Concierge

```txt
Implementa una demo public-safe llamada Recruiter Concierge.

Objetivo:
Un recruiter puede preguntar por el perfil de Daniel y la demo responde usando solo una base de conocimiento local y pública.

Requisitos:
- Ruta /concierge o sección en home.
- Componente RecruiterConcierge.
- Input de pregunta.
- Respuesta simulada determinista por defecto.
- Evidence chips con enlaces a case studies, CV o certificaciones.
- Confidence: high / medium / low.
- Botón “Flag for human review”.
- Botón “Request interview”.
- Estado visible: Pending Daniel approval.

Arquitectura:
- app/api/ai-agent/route.ts
- lib/recruiterKnowledgeBase.ts
- lib/recruiterAnswerEngine.ts
- lib/guardrails.ts

Modo por defecto:
- No llamar a proveedor externo.
- Responder con reglas y base local.
- Preparar stub callLLM solo server-side para futura integración.

Guardrails:
- No inventar experiencia.
- Si no hay evidencia, responder que no hay suficiente evidencia pública.
- No crear eventos de calendario.
- No enviar emails.
- No exponer PII.
```

---

## 12. Prompt para Codex — PR4 HITL Workflow Cockpit

```txt
Implementa una demo public-safe llamada HITL Workflow Cockpit.

Objetivo:
Mostrar cómo Daniel diseña flujos Human-in-the-Loop: la IA propone, la política evalúa, el humano revisa y el sistema registra evidencia.

Componentes:
- HITLWorkflowCockpit
- WorkUnitCard
- PolicyGate
- HumanReviewPanel
- EvidenceReceipt
- ValueSignalCard

Datos:
Usar fixtures sintéticos:
- lead_triage
- ticket_prioritization
- ai_adoption_request
- itsm_service_request
- operations_improvement

Estados:
- captured
- ai_draft
- policy_checked
- waiting_human_review
- approved
- corrected
- rejected
- evidence_logged

No debe ejecutar acciones reales ni conectarse a sistemas externos.
```

---

## 13. Prompt para Codex — PR5 Contact + n8n Webhook

```txt
Implementa el formulario de contacto con integración opcional n8n.

Ruta:
- app/api/contact/route.ts

Componentes:
- ContactForm
- InterviewRequestPanel

Campos:
- name
- email
- company
- role
- message
- preferredLanguage
- targetRole
- consent

Validación:
- email válido
- mensaje mínimo 20 caracteres
- consent requerido
- rate limiting simple in-memory o stub preparado

Si N8N_WEBHOOK_URL existe:
- POST server-side al webhook
- no exponer webhook al cliente
- manejar errores sin romper UX

Si no existe:
- guardar solo respuesta mock y mostrar mensaje “request prepared”.

No enviar datos sensibles innecesarios.
```

---

## 14. Prompt para n8n — Workflow Recruiter Intake

```txt
Crea un workflow n8n para recibir solicitudes de recruiters desde el portfolio web.

Trigger:
- Webhook POST /daniel-recruiter-intake

Payload esperado:
- name
- email
- company
- role
- message
- targetRole
- preferredLanguage
- source
- consent

Pasos:
1. Validar campos obligatorios.
2. Normalizar targetRole.
3. Calcular score:
   - AI Transformation / AI PM: +30
   - Digital Workplace / Public Sector: +25
   - Operations / Service Delivery: +25
   - Remote/hybrid: +20
   - Salary / seniority explicit: +10
4. Clasificar:
   - A: alta prioridad
   - B: prioridad media
   - C: revisar después
5. Crear registro en Google Sheet / Airtable / Notion.
6. Enviar email interno a Daniel.
7. Crear borrador de respuesta, no enviar automático.
8. Si targetRole es A, proponer slots de entrevista pero dejar estado “pending Daniel approval”.

Reglas:
- No enviar respuestas automáticas sin aprobación.
- No crear eventos en calendario sin aprobación.
- No almacenar datos innecesarios.
- Añadir campo source = portfolio.
```

---

## 15. Prompt para Comet — GitHub + Vercel

```txt
Actúa como operador web senior.

Objetivo:
Crear y desplegar el portfolio profesional de Daniel Medina en GitHub + Vercel.

Pasos:
1. Crear repositorio GitHub público llamado daniel-medina-portfolio.
2. Añadir descripción:
   “AI Transformation & Digital Workplace portfolio — public-safe case studies, HITL demos and CV hub.”
3. Inicializar repo con README, MIT License y .gitignore Node.
4. Conectar repo a Vercel.
5. Configurar proyecto en Vercel con framework Next.js.
6. Añadir variables de entorno:
   NEXT_PUBLIC_SITE_URL
   NEXT_PUBLIC_ANALYTICS_DOMAIN
   N8N_WEBHOOK_URL
   AI_PROVIDER_API_KEY
7. Confirmar que el dominio temporal de Vercel funciona.
8. No subir secretos reales al repositorio.
9. Crear issue inicial “Launch portfolio v0.1”.

Devuélveme:
- URL del repo
- URL del deployment
- Checklist de pasos completados
- Riesgos o decisiones pendientes
```

---

## 16. Prompt para Antigravity / visual direction

```txt
Diseña una dirección visual premium para el portfolio de Daniel Medina Sánchez.

Estilo:
- Silicon Valley executive
- Sam Altman / OpenAI minimalism
- High-trust, high-signal
- Clean typography
- Dark + light compatible
- Premium but not flashy
- Recruiter-friendly
- Technical founder energy

Paleta:
- Blanco / negro / gris
- Azul profundo o violeta IA como acento
- Verde muy sutil para trust/progress
- Evitar neones excesivos

Componentes:
- Hero con mucho espacio negativo
- Proof bar con métricas
- Case cards sobrias
- Timeline ejecutivo
- HITL cockpit con apariencia de producto SaaS
- CV cards descargables
- Contact card con CTA claro

Objetivo:
Que parezca una mezcla entre portfolio de founder, executive profile, AI lab y product demo.
```

---

## 17. Prompt para Gamma — Deck portfolio 10 slides

```txt
Crea un deck profesional de 10 slides para Daniel Medina Sánchez.

Título:
AI Transformation & Human-in-the-Loop Portfolio

Tono:
Premium, ejecutivo, Silicon Valley, sobrio, directo.

Slides:
1. Cover: Daniel Medina Sánchez — AI Transformation & Digital Workplace Leader
2. Executive profile: operations + AI + public sector + HITL
3. Proof: 15+ years, 560 people, 3 countries, €12M+ P&L, CS50x + CS50AI
4. Case study Ayesa: Public Sector Digital Workplace & ITSM
5. Case study Konecta: Critical operations transformation
6. TransformIA AI Lab: governed digital work systems
7. Human-in-the-Loop: how I work with AI
8. Technical foundation: HarvardX CS50x + CS50AI + automation stack
9. Role fit: AI PM, Digital Workplace, Operations Transformation, AI Enablement
10. CTA: portfolio, CV, LinkedIn, interview request

No inventes métricas no indicadas. Usa placeholders donde falten datos exactos.
```

---

## 18. Prompt para Gemini — Copy bilingüe

```txt
Actúa como copywriter ejecutivo bilingüe ES/EN especializado en perfiles de AI Transformation y Digital Workplace.

Reescribe el copy de mi portfolio para que sea:
- premium;
- directo;
- ATS-friendly;
- creíble;
- sin humo;
- Silicon Valley but European enterprise;
- orientado a conseguir entrevistas.

Incluye:
1. Hero ES/EN.
2. About ES/EN.
3. AI Lab ES/EN.
4. Case study summaries ES/EN.
5. Contact CTA ES/EN.
6. Microcopy para Recruiter Concierge.
7. Disclaimers public-safe.

Mi posicionamiento:
AI Transformation & Digital Workplace Leader with 15+ years in critical operations, teams up to 560 people, €12M+ P&L, public sector digital delivery, ITSM, HarvardX CS50x + CS50AI and Human-in-the-Loop AI systems.
```

---

## 19. Prompt para Perplexity Pro — benchmark continuo

```txt
Research current best practices for 2026 AI transformation consultant portfolios, AI PM portfolios, Digital Workplace consultant personal websites and Human-in-the-Loop AI demos.

Focus:
- what recruiters and hiring managers expect;
- best portfolio structures;
- case study formats;
- proof-of-work without exposing IP;
- AI governance / AI literacy / AI Act relevance;
- examples from consultants, PMs and AI product leaders;
- CTA patterns that convert to interviews.

Return:
1. Executive summary.
2. Best practices.
3. Examples worth studying.
4. What to avoid.
5. Concrete recommendations for Daniel Medina’s portfolio.
6. Keywords and content blocks to include.
Cite all sources.
```

---

## 20. GitHub issues para arrancar

```txt
# Issue 1 — Portfolio foundation
Create Next.js + TS + Tailwind + shadcn portfolio scaffold.

# Issue 2 — Content model
Add MDX case study system and initial case studies.

# Issue 3 — CV Hub
Add downloadable CV variants in ES/EN.

# Issue 4 — Recruiter Concierge
Build public-safe RAG/HITL recruiter assistant demo.

# Issue 5 — HITL Workflow Cockpit
Build synthetic workflow cockpit demo.

# Issue 6 — Contact + n8n
Build contact form and n8n webhook integration.

# Issue 7 — SEO + Analytics + Privacy
Add sitemap, robots, metadata, OG and privacy page.

# Issue 8 — Visual polish
Apply Silicon Valley executive visual direction.

# Issue 9 — Launch QA
Run Lighthouse, links, forms, CV downloads, mobile and accessibility checks.
```

---

## 21. Definition of Done

```txt
- Repo público creado.
- Vercel deployment activo.
- Home bilingüe ES/EN.
- 5 case studies MDX publicados.
- CVs descargables ES/EN.
- Recruiter Concierge demo funcional en modo public-safe.
- HITL Workflow Cockpit demo funcional.
- Contact form operativo.
- n8n webhook opcional preparado.
- Privacy page publicada.
- sitemap.xml y robots.txt accesibles.
- Lighthouse >= 90.
- README profesional.
- SECURITY.md.
- LICENSE.
- No secrets.
- No private TransformIA code.
- No real customer data.
- No full CS50 solutions.
```

---

## 22. Plan de ejecución 48h

### Día 1 mañana
- Crear repo.
- Scaffold Next.js.
- Añadir layout, hero, proof bar, CV hub.

### Día 1 tarde
- Añadir MDX.
- Escribir 3 case studies iniciales.
- Subir PDFs CV.
- Deploy inicial Vercel.

### Día 2 mañana
- Recruiter Concierge public-safe.
- Contact form.
- n8n webhook.

### Día 2 tarde
- HITL Workflow Cockpit.
- SEO, privacy, OG.
- README + SECURITY.
- Lighthouse.
- Publicación LinkedIn.

---

## 23. Post de LinkedIn para lanzar

```txt
He publicado mi portfolio profesional como parte de mi transición hacia roles de AI Transformation, Digital Workplace y Human-in-the-Loop AI systems.

Durante más de 15 años he trabajado en operaciones críticas, equipos grandes, P&L, SLA, transformación digital y sector público. En paralelo, he reforzado mi base técnica con HarvardX CS50x y CS50AI, y estoy construyendo TransformIA como laboratorio de IA aplicada para empresa.

La web incluye:
- CVs descargables ES/EN.
- Case studies public-safe.
- Una demo de Recruiter Concierge.
- Un cockpit Human-in-the-Loop.
- Mi enfoque de IA aplicada, governance y delivery.

Busco oportunidades en AI Transformation, AI Project Management, Digital Workplace, ITSM, Operations Transformation y AI Enablement.

[URL]
```

---

## 24. Regla final

Tu ventaja no es decir “uso IA”.  
Tu ventaja es demostrar:

```txt
I can turn business ambiguity into governed AI-enabled work.
```

En español:

```txt
Convierto ambigüedad empresarial en trabajo digital gobernado con IA.
```
