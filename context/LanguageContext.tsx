import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any; // The translation dictionary
}

const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      work: 'Work',
      methodology: 'Methodology',
      cta: 'Let\'s Talk'
    },
    hero: {
      status: 'Accepting New Partners',
      title_start: 'WE EXIST',
      title_mid: 'TO',
      title_end: 'EMPOWER.',
      desc: 'We are the missing link between **strategic consulting** and **product engineering**. We build digital ecosystems that define the future of industries.',
      cta_primary: 'Start Transformation',
      cta_secondary: 'View Ecosystem',
      system_overview: 'SYSTEM OVERVIEW',
      live_metrics: 'LIVE METRICS',
      active_caps: 'Active Capabilities',
      caps: {
        soul: 'Strategy & Identity (The Soul)',
        body: 'Engineering & Product (The Body)',
        voice: 'Growth & Scale (The Voice)'
      },
      stats: {
        growth: { label: 'Avg Growth', sub: 'Year over Year' },
        velocity: { label: 'Velocity', sub: 'Deployment Speed' }
      }
    },
    philosophy: {
        eyebrow: 'Core Values Matrix',
        title_main: 'Our Cultural',
        title_sub: 'Source Code.',
        system_config: 'SYSTEM_CONFIG:',
        config_desc: 'We operate as partners, not vendors. Horizontal structure. Radical ownership.',
        cards: {
            1: { title: "Owner Mentality", desc: "There are no 'cogs' here; only people who understand that Refe's success is their own. We don't look for employees who clock in; we look for vision partners obsessed with the outcome." },
            2: { title: "Global Standard", desc: "Our products become the benchmark against which competitors are measured." },
            3: { title: "Default Choice", desc: "Experiences so fluid that users won't want to use anything else." },
            4: { title: "Radical Truth", desc: "Culture of brutal transparency. Problems are tackled head-on." },
            5: { title: "Impact > Output", desc: "We don't deliver code, we deliver measurable business results." }
        }
    },
    services: {
        eyebrow: 'Capabilities System',
        title_main: 'Holistic Digital',
        title_sub: 'Ecosystem.',
        status: 'Running Diagnostics',
        hover: 'Hover to pause. Click to navigate.',
        target_outcome: 'Target Outcome:',
        items: [
            {
                title: 'THE SOUL',
                subtitle: 'Strategy & Identity',
                description: "Code is a commodity; vision is not. Before writing a single line, we decode your market and define a product identity that justifies your existence.",
                outcome: "Market Clarity & Brand DNA",
                caps: [
                    { title: "Product Discovery", desc: "MVP definition, Roadmap & Success KPIs." },
                    { title: "UX Research", desc: "User Personas, Journey Maps & Validation." },
                    { title: "Visual Systems", desc: "Scalable Design Systems (Figma), UI Kits." },
                    { title: "Data Strategy", desc: "Data architecture & metrics definition." }
                ]
            },
            {
                title: 'THE BODY',
                subtitle: 'Engineering & Product',
                description: "We build assets, not technical liabilities. Software engineering obsessed with scalability, performance, and long-term maintainability.",
                outcome: "High-Performance Assets",
                caps: [
                    { title: "Modern Frontend", desc: "Next.js, React, Tailwind, Micro-frontends." },
                    { title: "Cloud Native", desc: "AWS/Vercel, Serverless, Docker, Kubernetes." },
                    { title: "Mobile Experience", desc: "World-class React Native or Native (iOS/Android)." },
                    { title: "AI Integration", desc: "LLMs, RAG Pipelines & Process Automation." }
                ]
            },
            {
                title: 'THE VOICE',
                subtitle: 'Growth & Scale',
                description: "A great product in silence is useless. We design traction engines that connect your value proposition with the right user at the lowest cost.",
                outcome: "Market Traction & Revenue",
                caps: [
                    { title: "Performance Mkt", desc: "Meta/Google Ads, ROAS optimization." },
                    { title: "Growth Loops", desc: "Retention strategies & product virality." },
                    { title: "Technical SEO", desc: "Domain authority & organic positioning." },
                    { title: "Conversion (CRO)", desc: "A/B Testing, Hotjar, funnel optimization." }
                ]
            }
        ]
    },
    work: {
        eyebrow: 'Deployment Log',
        title_main: 'Selected',
        title_sub: 'Deployments.',
        desc: 'We build intellectual property. Here are some of the systems we have recently put into orbit.',
        view_case: 'View Case Study',
        view_all: 'View all cases.',
        archive: 'Archive 2023-24',
        stealth: {
            title: 'Stealth Projects',
            desc: 'Currently working on digital banking and biotechnology solutions under strict non-disclosure agreements (NDA).',
            badge: 'Q4 2024 Release'
        },
        projects: [
            { title: "Nebula Finance", category: "Fintech / Dashboard", desc: "Complete data architecture redesign for an institutional trading platform. Latency reduced by 40%." },
            { title: "Cognitive Chat", category: "Generative AI", desc: "RAG conversational interface for semantic search in corporate legal documents." },
            { title: "Velvet Store", category: "E-commerce Headless", desc: "Migration to Shopify Plus + Hydrogen. Instant shopping experience and fluid animations." }
        ]
    },
    problem: {
        eyebrow: 'System Diagnostic',
        title_main: 'Choose your context.',
        title_sub: 'See how we solve it.',
        diag_label: 'Diagnosis: Critical',
        sol_label: 'REFE Solution',
        protocol: 'Protocol Executed Successfully',
        scenarios: {
            startup: {
                label: 'Early Stage / Scale-up',
                pain: { title: 'Chaos & Debt', desc: 'Speed without structure generates unpayable technical debt. The MVP doesn\'t scale, and the founding team is burnt out putting out fires.', points: ['Unmaintainable "Spaghetti" code', 'Fragile/Manual deploy processes', 'Lack of documentation & onboarding'] },
                solution: { title: 'Structured Velocity', desc: 'We bring world-class architecture from Day 1. We don\'t just build the product; we build the product factory.', points: ['Infrastructure as Code (IaC)', 'Automated CI/CD Pipelines', 'Scalable Design Systems'] }
            },
            enterprise: {
                label: 'Corporate / Consolidated',
                pain: { title: 'Stagnation & Legacy', desc: 'Monolithic systems and bureaucracy kill innovation. Launching a feature takes months instead of days.', points: ['Tecnología Legacy que frena el negocio', 'Silos de información', 'Desconexión con el usuario final'] },
                solution: { title: 'Modernización Ágil', desc: 'Inyectamos células de innovación que operan con velocidad de startup dentro de la estructura corporativa.', points: ['Estrategia de Microservicios & API-First', 'Modernización Progresiva (Strangler Fig)', 'Cultura de experimentación basada en datos'] }
            }
        }
    },
    methodology: {
        eyebrow: 'Operating Model',
        title_main: 'High-Performance',
        title_sub: 'Squads.',
        toggle: { execute: 'EXECUTE', evolve: 'EVOLVE' },
        execute: {
            title: 'The Swiss Watch.',
            desc: 'The foundation of our reputation. Client work focused on excellence, detail, and flawless delivery. Here we don\'t improvise; we execute with military precision and global standards.'
        },
        evolve: {
            title: 'Sharpening the Axe.',
            desc: 'Our R&D laboratory. We experiment with AI, No-Code, and new design paradigms. What we learn today in Evolve becomes the standard for Execute tomorrow.'
        },
        status: 'Status: Active Protocol',
        squad_card: { title: 'Squads, not Freelancers.', desc: 'You hire an ecosystem. Behind every dev is a designer and a strategist. Collective intelligence applied.' },
        resource: { title: 'Resource Allocation', client: 'Client Work', innovation: 'Innovation' }
    },
    process: {
        eyebrow: 'Execution Roadmap',
        title_main: 'From Concept to',
        title_sub: 'Scale.',
        steps: [
            { title: 'Audit & Discovery', subtitle: 'Deconstructing the Problem', desc: 'We don\'t write a line of code without understanding the business. We analyze data, interview stakeholders, and define success KPIs.', deliverables: ['Tech Audit', 'Product Roadmap', 'User Personas'] },
            { title: 'Architecture & UX', subtitle: 'Building Blueprints', desc: 'We design scalable systems and friction-free user experiences. We define the tech stack and data architecture.', deliverables: ['High-Fidelity UI', 'System Architecture', 'Database Schema'] },
            { title: 'High-Velocity Dev', subtitle: 'Sprint by Sprint Execution', desc: 'Agile development in 2-week cycles. Clean code, automated testing, and continuous deployments to see real progress.', deliverables: ['Functional MVP', 'CI/CD Pipelines', 'Clean Code'] },
            { title: 'Scale & Optimize', subtitle: 'Data-Driven Iteration', desc: 'Launch is just the beginning. We measure real usage, optimize conversion, and scale infrastructure based on demand.', deliverables: ['A/B Testing', 'Performance Tuning', 'Feature Expansion'] }
        ]
    },
    performance: {
        label: 'Real Results',
        title_main: 'Performance',
        title_sub: 'Driven.',
        desc: 'We don\'t fall in love with code; we fall in love with impact. If you grow, we deliver.',
        points: [
            'Beautiful design that doesn\'t convert is art, not business.',
            'Clean code that no one uses is irrelevant.'
        ],
        chart: { label: 'Growth Metrics', sub: 'Q3-Q4 REPORT' },
        metrics: {
            conversion: 'Conversion Rate',
            time: 'Time to Market',
            retention: 'User Retention',
            debt: 'Tech Debt'
        }
    },
    footer: {
        slots: 'Slots Available for Q3 2024',
        title: 'READY TO',
        title_highlight: 'INTERFAZAR?',
        copy: 'Copy Email',
        sitemap: 'Sitemap',
        socials: 'Socials',
        legal: 'Legal',
        office: 'Office',
        office_loc: 'Buenos Aires, Argentina\nRemote Worldwide',
        rights: 'All Systems Operational.',
        credits: 'Designed & Engineered by REFE.'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      work: 'Proyectos',
      methodology: 'Metodología',
      cta: 'Hablemos'
    },
    hero: {
      status: 'Aceptando Nuevos Partners',
      title_start: 'EXISTIMOS',
      title_mid: 'PARA',
      title_end: 'POTENCIAR.',
      desc: 'Somos el eslabón perdido entre la **consultoría estratégica** y la **ingeniería de producto**. Construimos ecosistemas digitales que definen el futuro de las industrias.',
      cta_primary: 'Iniciar Transformación',
      cta_secondary: 'Ver Ecosistema',
      system_overview: 'RESUMEN DEL SISTEMA',
      live_metrics: 'MÉTRICAS EN VIVO',
      active_caps: 'Capacidades Activas',
      caps: {
        soul: 'Estrategia & Identidad (El Alma)',
        body: 'Ingeniería & Producto (El Cuerpo)',
        voice: 'Crecimiento & Escala (La Voz)'
      },
      stats: {
        growth: { label: 'Crecimiento', sub: 'Año contra Año' },
        velocity: { label: 'Velocidad', sub: 'Deploy Speed' }
      }
    },
    philosophy: {
        eyebrow: 'Matriz de Valores',
        title_main: 'Nuestro Código',
        title_sub: 'Fuente Cultural.',
        system_config: 'CONFIG_SISTEMA:',
        config_desc: 'Operamos como socios, no proveedores. Estructura horizontal. Ownership radical.',
        cards: {
            1: { title: "Mentalidad de Dueños", desc: "Aquí no hay 'engranajes'; hay personas que entienden que el éxito de Refe es el éxito propio. No buscamos empleados que fichen; buscamos socios de visión obsesionados con el resultado final." },
            2: { title: "Estándar Global", desc: "Que nuestros productos sean la vara con la que se mida a la competencia." },
            3: { title: "Elección por Defecto", desc: "Experiencias tan fluidas que los usuarios no quieran usar otra cosa." },
            4: { title: "Verdad Radical", desc: "Cultura de transparencia brutal. Los problemas se atacan de frente." },
            5: { title: "Impacto > Output", desc: "No entregamos código, entregamos resultados de negocio medibles." }
        }
    },
    services: {
        eyebrow: 'Sistema de Capacidades',
        title_main: 'Ecosistema Digital',
        title_sub: 'Integral.',
        status: 'Corriendo Diagnóstico',
        hover: 'Hover para pausar. Click para navegar.',
        target_outcome: 'Resultado Objetivo:',
        items: [
            {
                title: 'EL ALMA',
                subtitle: 'Identidad & Estrategia',
                description: "El código es un commodity; la visión no. Antes de escribir una línea, decodificamos tu mercado y definimos una identidad de producto que justifique tu existencia.",
                outcome: "Claridad de Mercado & ADN de Marca",
                caps: [
                    { title: "Product Discovery", desc: "Definición de MVP, Roadmap y KPIs de éxito." },
                    { title: "UX Research", desc: "User Personas, Journey Maps y Validación." },
                    { title: "Sistemas Visuales", desc: "Design Systems escalables (Figma), UI Kits." },
                    { title: "Estrategia de Datos", desc: "Arquitectura de datos y definición de métricas." }
                ]
            },
            {
                title: 'EL CUERPO',
                subtitle: 'Ingeniería & Producto',
                description: "Construimos activos, no pasivos técnicos. Ingeniería de software obsesionada con la escalabilidad, la performance y la mantenibilidad a largo plazo.",
                outcome: "Activos de Alto Rendimiento",
                caps: [
                    { title: "Frontend Moderno", desc: "Next.js, React, Tailwind, Micro-frontends." },
                    { title: "Nativo en la Nube", desc: "AWS/Vercel, Serverless, Docker, Kubernetes." },
                    { title: "Experiencia Móvil", desc: "React Native o Nativo (iOS/Android) de clase mundial." },
                    { title: "Integración IA", desc: "LLMs, Pipelines RAG y Automatización de procesos." }
                ]
            },
            {
                title: 'LA VOZ',
                subtitle: 'Alcance & Growth',
                description: "Un gran producto en silencio no sirve. Diseñamos los motores de tracción que conectan tu propuesta de valor con el usuario correcto, al menor costo posible.",
                outcome: "Tracción de Mercado & Ingresos",
                caps: [
                    { title: "Performance Mkt", desc: "Meta/Google Ads, optimización de ROAS." },
                    { title: "Growth Loops", desc: "Estrategias de retención y viralidad de producto." },
                    { title: "SEO Técnico", desc: "Autoridad de dominio y posicionamiento orgánico." },
                    { title: "Conversión (CRO)", desc: "A/B Testing, Hotjar, optimización de embudos." }
                ]
            }
        ]
    },
    work: {
        eyebrow: 'Log de Deploy',
        title_main: 'Implementaciones',
        title_sub: 'Selectas.',
        desc: 'Construimos propiedad intelectual. Estos son algunos de los sistemas que hemos puesto en órbita recientemente.',
        view_case: 'Ver Caso de Estudio',
        view_all: 'Ver todos los casos.',
        archive: 'Archivo 2023-24',
        stealth: {
            title: 'Proyectos Stealth',
            desc: 'Actualmente trabajando en soluciones de banca digital y biotecnología bajo estrictos acuerdos de confidencialidad (NDA).',
            badge: 'Lanzamiento Q4 2024'
        },
        projects: [
            { title: "Nebula Finance", category: "Fintech / Dashboard", desc: "Rediseño completo de la arquitectura de datos para una plataforma de trading institucional. Latencia reducida en un 40%." },
            { title: "Cognitive Chat", category: "Generative AI", desc: "Interfaz conversacional RAG para búsqueda semántica en documentos legales corporativos." },
            { title: "Velvet Store", category: "E-commerce Headless", desc: "Migración a Shopify Plus + Hydrogen. Experiencia de compra instantánea y animaciones fluidas." }
        ]
    },
    problem: {
        eyebrow: 'Diagnóstico de Sistema',
        title_main: 'Elige tu contexto.',
        title_sub: 'Mira cómo lo resolvemos.',
        diag_label: 'Diagnóstico: Crítico',
        sol_label: 'Solución REFE',
        protocol: 'Protocolo Ejecutado Exitosamente',
        scenarios: {
            startup: {
                label: 'Early Stage / Scale-up',
                pain: { title: 'Caos & Deuda', desc: 'La velocidad sin estructura genera deuda técnica impagable. El MVP no escala y el equipo fundador está quemado apagando incendios.', points: ['Código "Spaghetti" inmantentible', 'Procesos de deploy manuales/frágiles', 'Falta de documentación y onboarding'] },
                solution: { title: 'Velocidad Estructurada', desc: 'Aportamos arquitectura world-class desde el día 1. No solo construimos el producto, construimos la fábrica de producto.', points: ['Infraestructura como código (IaC)', 'Pipelines CI/CD Automatizados', 'Design Systems Escalables'] }
            },
            enterprise: {
                label: 'Corporativo / Consolidado',
                pain: { title: 'Estancamiento & Legacy', desc: 'Sistemas monolíticos y burocracia que matan la innovación. Lanzar una feature toma meses en lugar de días.', points: ['Tecnología Legacy que frena el negocio', 'Silos de información', 'Desconexión con el usuario final'] },
                solution: { title: 'Modernización Ágil', desc: 'Inyectamos células de innovación que operan con velocidad de startup dentro de la estructura corporativa.', points: ['Estrategia de Microservicios & API-First', 'Modernización Progresiva (Strangler Fig)', 'Cultura de experimentación basada en datos'] }
            }
        }
    },
    methodology: {
        eyebrow: 'Modelo Operativo',
        title_main: 'Squads de',
        title_sub: 'Alto Rendimiento.',
        toggle: { execute: 'EXECUTE', evolve: 'EVOLVE' },
        execute: {
            title: 'El Reloj Suizo.',
            desc: 'La base de nuestra reputación. Trabajo con cliente enfocado en la excelencia, el detalle y la entrega impecable. Aquí no se improvisa; se ejecuta con precisión militar y estándares globales.'
        },
        evolve: {
            title: 'Afilando el Hacha.',
            desc: 'Nuestro laboratorio de I+D. Experimentamos con IA, No-Code y nuevos paradigmas de diseño. Lo que aprendemos hoy en Evolve, se convierte en el estándar de Execute mañana.'
        },
        status: 'Estado: Protocolo Activo',
        squad_card: { title: 'Squads, no Freelancers.', desc: 'Contratas un ecosistema. Detrás de cada dev hay un diseñador y un estratega. Inteligencia colectiva aplicada.' },
        resource: { title: 'Asignación de Recursos', client: 'Trabajo Cliente', innovation: 'Innovación' }
    },
    process: {
        eyebrow: 'Roadmap de Ejecución',
        title_main: 'Del Concepto al',
        title_sub: 'Escalado.',
        steps: [
            { title: 'Auditoría & Discovery', subtitle: 'Deconstrucción del Problema', desc: 'No escribimos una línea de código sin entender el negocio. Analizamos datos, entrevistamos stakeholders y definimos KPIs de éxito.', deliverables: ['Auditoría Técnica', 'Roadmap de Producto', 'User Personas'] },
            { title: 'Arquitectura & UX', subtitle: 'Planos del Edificio', desc: 'Diseñamos sistemas escalables y experiencias de usuario sin fricción. Definimos el stack tecnológico y la arquitectura de datos.', deliverables: ['UI High-Fidelity', 'Arquitectura de Sistema', 'Esquema de Base de Datos'] },
            { title: 'Desarrollo High-Velocity', subtitle: 'Ejecución Sprint a Sprint', desc: 'Desarrollo ágil en ciclos de 2 semanas. Código limpio, testeo automatizado y despliegues continuos para ver progreso real.', deliverables: ['MVP Funcional', 'Pipelines CI/CD', 'Clean Code'] },
            { title: 'Escalado & Optimización', subtitle: 'Iteración basada en Datos', desc: 'El lanzamiento es solo el comienzo. Medimos el uso real, optimizamos la conversión y escalamos la infraestructura según la demanda.', deliverables: ['A/B Testing', 'Tuning de Performance', 'Expansión de Features'] }
        ]
    },
    performance: {
        label: 'Resultados Reales',
        title_main: 'Impulsados por',
        title_sub: 'Performance.',
        desc: 'No nos enamoramos del código, nos enamoramos del impacto. Si tú creces, nosotros cumplimos.',
        points: [
            'Un diseño hermoso que no convierte, es arte, no negocio.',
            'Un código limpio que nadie usa, es irrelevante.'
        ],
        chart: { label: 'Métricas de Crecimiento', sub: 'REPORTE Q3-Q4' },
        metrics: {
            conversion: 'Tasa de Conversión',
            time: 'Time to Market',
            retention: 'Retención',
            debt: 'Deuda Técnica'
        }
    },
    footer: {
        slots: 'Cupos Disponibles Q3 2024',
        title: 'LISTO PARA',
        title_highlight: 'INTERFAZAR?',
        copy: 'Copiar Email',
        sitemap: 'Mapa del Sitio',
        socials: 'Redes',
        legal: 'Legales',
        office: 'Oficinas',
        office_loc: 'Buenos Aires, Argentina\nRemoto Mundial',
        rights: 'Todos los Sistemas Operativos.',
        credits: 'Diseñado & Desarrollado por REFE.'
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en'); // Default to English

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};