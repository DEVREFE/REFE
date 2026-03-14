import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: any;
}

const translations = {
    es: {
        nav: {
            home: 'Inicio',
            services: 'Servicios',
            work: 'Proyectos',
            process: 'Proceso',
            cta: 'Hablemos'
        },
        hero: {
            status: 'Buenos Aires — Remoto',
            title_line1: 'Hacemos marcas',
            title_line2: 'que importan.',
            desc: 'Somos una agencia de **branding**, **desarrollo web** y **go-to-market** con base en Buenos Aires. Hacemos que las marcas existan de verdad en el mundo digital.',
            desc_short: 'Branding, desarrollo web y go-to-market para marcas que quieren existir de verdad.',
            cta_primary: 'Ver proyectos',
            cta_secondary: 'Hablemos',
        },
        philosophy: {
            eyebrow: 'Nuestra forma de operar',
            title_main: 'No somos un proveedor.',
            title_sub: 'Somos un socio.',
            system_config: 'MANIFIESTO:',
            config_desc: 'Trabajamos con estructura horizontal. Cada decisión es tomada con ownership total.',
            cards: {
                1: { title: "Mentalidad de Dueños", desc: "No hay 'empleados' acá. Cada persona en REFE opera como si el proyecto fuera suyo, porque en algún punto, lo es." },
                2: { title: "Estándar Global", desc: "Nuestros entregables son la vara con la que se mide a la competencia." },
                3: { title: "Elección Obvia", desc: "Productos y marcas tan bien hechos que nadie quiera usar otra cosa." },
                4: { title: "Verdad Radical", desc: "Cultura de transparencia total. Si algo no funciona, lo decimos." },
                5: { title: "Impacto > Output", desc: "No entregamos archivos. Entregamos resultados de negocio medibles." }
            }
        },
        services: {
            eyebrow: 'Lo que hacemos',
            title_main: 'Tres disciplinas,',
            title_sub: 'un equipo.',
            status: 'Activo',
            hover: 'Hover para pausar. Click para navegar.',
            target_outcome: 'Resultado clave:',
            items: [
                {
                    title: 'IDENTIDAD',
                    subtitle: 'Branding & Estrategia de Marca',
                    description: "Una marca no es un logo. Es el conjunto de decisiones que hacen que alguien elija tu producto sobre el de al lado. Construimos identidades que justifican existir.",
                    outcome: "Marca clara, diferenciada y escalable",
                    caps: [
                        { title: "Estrategia de Marca", desc: "Posicionamiento, propósito, arquitectura y tono de comunicación." },
                        { title: "Identidad Visual", desc: "Logotipo, paleta, tipografía, sistema gráfico completo." },
                        { title: "Diseño de Aplicaciones", desc: "Brand book, templates, piezas digitales y físicas." },
                        { title: "UX & Diseño de Producto", desc: "Interfaces que reflejan la identidad en cada interacción." }
                    ]
                },
                {
                    title: 'PRODUCTO',
                    subtitle: 'Desarrollo Web & Digital',
                    description: "Construimos activos digitales de alto rendimiento, no pasivos técnicos. Código limpio, arquitectura escalable y experiencias que convierten.",
                    outcome: "Un activo digital que trabaja solo",
                    caps: [
                        { title: "Sitios & Landing Pages", desc: "Next.js, React, animaciones de alto nivel. Rápido, SEO-ready." },
                        { title: "Aplicaciones Web", desc: "Plataformas SaaS, portales, dashboards e integraciones complejas." },
                        { title: "E-commerce", desc: "Tiendas Shopify Plus, WooCommerce o headless con UX de primera." },
                        { title: "Integración & Automatización", desc: "APIs, CRMs, IA aplicada y automatización de procesos." }
                    ]
                },
                {
                    title: 'MERCADO',
                    subtitle: 'Go To Market & Performance',
                    description: "Un producto bien hecho en silencio no sirve. Diseñamos el motor de tracción que conecta tu propuesta de valor con el cliente correcto, al menor costo.",
                    outcome: "Tracción real y crecimiento sostenible",
                    caps: [
                        { title: "Performance Marketing", desc: "Meta Ads, Google Ads, optimización de ROAS y presupuesto." },
                        { title: "Estrategia GTM", desc: "Canales, mensajes, secuencia de lanzamiento y métricas de éxito." },
                        { title: "SEO Técnico & Contenido", desc: "Autoridad orgánica, posicionamiento y arquitectura de contenidos." },
                        { title: "Optimización de Conversión", desc: "A/B Testing, analítica avanzada y mejora continua de embudos." }
                    ]
                }
            ]
        },
        work: {
            eyebrow: 'Proyectos',
            title_main: 'Trabajo',
            title_sub: 'selecto.',
            desc: 'Algunos de los proyectos que estamos desarrollando.',
            view_case: 'Ver proyecto',
            view_all: 'Ver todos los proyectos',
            archive: 'Archivo 2023–24',
            scroll_hint: 'Seguí scrolleando para ver más',
            stealth: {
                title: 'Proyectos bajo NDA',
                desc: 'Actualmente trabajando en proyectos de banca digital y retail bajo acuerdos de confidencialidad.',
                badge: 'Próximamente'
            },
            projects: [
                { title: "Nebula Finance", category: "Fintech / Dashboard", desc: "Rediseño de arquitectura de datos para plataforma de trading institucional. Latencia reducida 40%." },
                { title: "Cognitive Chat", category: "Inteligencia Artificial", desc: "Interfaz conversacional RAG para búsqueda semántica en documentos legales corporativos." },
                { title: "Velvet Store", category: "E-commerce", desc: "Migración a Shopify Plus + Hydrogen. Experiencia de compra instantánea con animaciones fluidas." }
            ]
        },
        problem: {
            eyebrow: 'Tu contexto',
            title_main: 'Elegí tu situación.',
            title_sub: 'Mirá cómo lo resolvemos.',
            diag_label: 'Diagnóstico: Crítico',
            sol_label: 'Solución REFE',
            protocol: 'Protocolo ejecutado con éxito',
            scenarios: {
                startup: {
                    label: 'Startup / Scale-up',
                    pain: { title: 'Caos y deuda técnica', desc: 'Velocidad sin estructura genera deuda técnica impagable. El MVP no escala y el equipo fundador apaga incendios todo el día.', points: ['Código imposible de mantener', 'Deploys manuales y frágiles', 'Sin documentación ni onboarding'] },
                    solution: { title: 'Velocidad con estructura', desc: 'Arquitectura de clase mundial desde el día 1. No solo construimos el producto, construimos la fábrica de producto.', points: ['Infraestructura como código', 'Pipelines CI/CD automatizados', 'Design Systems escalables'] }
                },
                enterprise: {
                    label: 'Empresa / Consolidada',
                    pain: { title: 'Estancamiento y legacy', desc: 'Sistemas monolíticos y burocracia que matan la innovación. Lanzar una feature tarda meses en lugar de días.', points: ['Tecnología legacy que frena el negocio', 'Silos de información', 'Desconexión con el usuario final'] },
                    solution: { title: 'Modernización ágil', desc: 'Inyectamos células de innovación que operan con velocidad de startup dentro de la estructura corporativa.', points: ['Estrategia API-First y microservicios', 'Modernización progresiva', 'Cultura de iteración basada en datos'] }
                }
            }
        },
        methodology: {
            eyebrow: 'Modelo de trabajo',
            title_main: 'Squads,',
            title_sub: 'no freelancers.',
            toggle: { execute: 'EJECUTAR', evolve: 'EVOLUCIONAR' },
            execute: {
                title: 'El reloj suizo.',
                desc: 'Trabajo de cliente enfocado en excelencia y entrega impecable. No se improvisa: se ejecuta con precisión y estándares globales.'
            },
            evolve: {
                title: 'Afilando el hacha.',
                desc: 'Nuestro laboratorio de R&D. Experimentamos con IA, no-code y nuevos paradigmas. Lo que aprendemos hoy en Evolve, es el estándar de mañana.'
            },
            status: 'Estado: Protocolo activo',
            squad_card: { title: 'Contratas un ecosistema.', desc: 'Detrás de cada desarrollador hay un diseñador y un estratega. Inteligencia colectiva aplicada a tu proyecto.' },
            resource: { title: 'Asignación de recursos', client: 'Trabajo con clientes', innovation: 'Innovación interna' }
        },
        process: {
            eyebrow: 'Cómo trabajamos',
            title_main: 'Del concepto',
            title_sub: 'al resultado.',
            steps: [
                { title: 'Auditoría & Discovery', subtitle: 'Entendemos el problema', desc: 'No escribimos una línea de código sin entender el negocio. Analizamos datos, entrevistamos stakeholders y definimos KPIs claros.', deliverables: ['Auditoría técnica', 'Roadmap de producto', 'User personas'] },
                { title: 'Arquitectura & Diseño', subtitle: 'Construimos los planos', desc: 'Diseñamos sistemas escalables y experiencias sin fricción. Definimos el stack tecnológico y la arquitectura de información.', deliverables: ['UI High-Fidelity', 'Arquitectura del sistema', 'Design system'] },
                { title: 'Desarrollo & Entrega', subtitle: 'Ejecución sprint a sprint', desc: 'Desarrollo ágil en ciclos de 2 semanas. Código limpio, testing automatizado y deploys continuos para ver progreso real.', deliverables: ['MVP funcional', 'Pipelines CI/CD', 'Documentación'] },
                { title: 'Lanzamiento & Escala', subtitle: 'Iteración basada en datos', desc: 'El lanzamiento es el inicio. Medimos el uso real, optimizamos la conversión y escalamos la infraestructura según la demanda.', deliverables: ['A/B Testing', 'Optimización de performance', 'Expansión de funcionalidades'] }
            ]
        },
        performance: {
            label: 'Resultados reales',
            title_main: 'Impulsados por',
            title_sub: 'resultados.',
            desc: 'No nos enamoramos del proceso, nos enamoramos del impacto. Si vos crecés, cumplimos.',
            points: [
                'Un diseño hermoso que no convierte es arte, no negocio.',
                'Un código limpio que nadie usa no vale nada.'
            ],
            chart: { label: 'Métricas de crecimiento', sub: 'REPORTE ANUAL' },
            metrics: {
                conversion: 'Tasa de Conversión',
                time: 'Time to Market',
                retention: 'Retención',
                debt: 'Deuda Técnica'
            }
        },
        footer: {
            slots: 'Disponibles para Q2 2025',
            title: 'TRABAJEMOS',
            title_highlight: 'JUNTOS.',
            copy: 'Copiar email',
            sitemap: 'Páginas',
            socials: 'Redes',
            legal: 'Legales',
            office: 'Dónde estamos',
            office_loc: 'Buenos Aires, Argentina\nRemoto a todo el mundo',
            rights: 'Todos los sistemas operativos.',
            credits: 'Diseñado y desarrollado por REFE.',
            marquee_text: 'Trabajemos juntos'
        }
    },
    en: {
        nav: {
            home: 'Home',
            services: 'Services',
            work: 'Work',
            process: 'Process',
            cta: "Let's talk"
        },
        hero: {
            status: 'Buenos Aires — Remote',
            title_line1: 'We make brands',
            title_line2: 'that matter.',
            desc: 'We are a **branding**, **web development** and **go-to-market** agency based in Buenos Aires. We make brands truly exist in the digital world.',
            desc_short: 'Branding, web development and go-to-market for brands that want to truly exist.',
            cta_primary: 'See projects',
            cta_secondary: "Let's talk",
        },
        philosophy: {
            eyebrow: 'How we operate',
            title_main: "We're not a vendor.",
            title_sub: "We're a partner.",
            system_config: 'MANIFESTO:',
            config_desc: 'Horizontal structure. Every decision made with total ownership.',
            cards: {
                1: { title: "Owner Mentality", desc: "No 'employees' here. Everyone at REFE operates as if the project is theirs—because in some way, it is." },
                2: { title: "Global Standard", desc: "Our deliverables are the benchmark competitors are measured against." },
                3: { title: "The Obvious Choice", desc: "Products and brands so well-made that no one wants to use anything else." },
                4: { title: "Radical Truth", desc: "Total transparency culture. If something isn't working, we say it." },
                5: { title: "Impact > Output", desc: "We don't deliver files. We deliver measurable business results." }
            }
        },
        services: {
            eyebrow: 'What we do',
            title_main: 'Three disciplines,',
            title_sub: 'one team.',
            status: 'Active',
            hover: 'Hover to pause. Click to navigate.',
            target_outcome: 'Key outcome:',
            items: [
                {
                    title: 'IDENTITY',
                    subtitle: 'Branding & Brand Strategy',
                    description: "A brand is not a logo. It's the set of decisions that make someone choose your product over the one next to it. We build identities that justify existing.",
                    outcome: "Clear, differentiated, scalable brand",
                    caps: [
                        { title: "Brand Strategy", desc: "Positioning, purpose, architecture and communication tone." },
                        { title: "Visual Identity", desc: "Logo, palette, typography, complete graphic system." },
                        { title: "Brand Applications", desc: "Brand book, templates, digital and physical assets." },
                        { title: "UX & Product Design", desc: "Interfaces that reflect the identity in every interaction." }
                    ]
                },
                {
                    title: 'PRODUCT',
                    subtitle: 'Web & Digital Development',
                    description: "We build high-performance digital assets, not technical liabilities. Clean code, scalable architecture, and experiences that convert.",
                    outcome: "A digital asset that works on its own",
                    caps: [
                        { title: "Sites & Landing Pages", desc: "Next.js, React, high-level animations. Fast, SEO-ready." },
                        { title: "Web Applications", desc: "SaaS platforms, portals, dashboards and complex integrations." },
                        { title: "E-commerce", desc: "Shopify Plus, WooCommerce or headless stores with world-class UX." },
                        { title: "Integration & Automation", desc: "APIs, CRMs, applied AI and process automation." }
                    ]
                },
                {
                    title: 'MARKET',
                    subtitle: 'Go To Market & Performance',
                    description: "A well-made product in silence is useless. We design the traction engine that connects your value proposition to the right customer, at the lowest cost.",
                    outcome: "Real traction and sustainable growth",
                    caps: [
                        { title: "Performance Marketing", desc: "Meta Ads, Google Ads, ROAS and budget optimization." },
                        { title: "GTM Strategy", desc: "Channels, messages, launch sequence and success metrics." },
                        { title: "Technical SEO & Content", desc: "Organic authority, positioning and content architecture." },
                        { title: "Conversion Optimization", desc: "A/B Testing, advanced analytics and funnel improvement." }
                    ]
                }
            ]
        },
        work: {
            eyebrow: 'Projects',
            title_main: 'Selected',
            title_sub: 'work.',
            desc: 'Some of the projects we are developing.',
            view_case: 'View project',
            view_all: 'View all projects',
            archive: 'Archive 2023–24',
            scroll_hint: 'Keep scrolling to see more',
            stealth: {
                title: 'Projects under NDA',
                desc: 'Currently working on digital banking and retail projects under confidentiality agreements.',
                badge: 'Coming soon'
            },
            projects: [
                { title: "Nebula Finance", category: "Fintech / Dashboard", desc: "Data architecture redesign for an institutional trading platform. Latency reduced by 40%." },
                { title: "Cognitive Chat", category: "Artificial Intelligence", desc: "RAG conversational interface for semantic search in corporate legal documents." },
                { title: "Velvet Store", category: "E-commerce", desc: "Migration to Shopify Plus + Hydrogen. Instant shopping experience with fluid animations." }
            ]
        },
        problem: {
            eyebrow: 'Your context',
            title_main: 'Pick your situation.',
            title_sub: 'See how we solve it.',
            diag_label: 'Diagnosis: Critical',
            sol_label: 'REFE Solution',
            protocol: 'Protocol executed successfully',
            scenarios: {
                startup: {
                    label: 'Startup / Scale-up',
                    pain: { title: 'Chaos & Technical Debt', desc: 'Speed without structure generates unpayable technical debt. The MVP doesn\'t scale and the founding team spends all day putting out fires.', points: ['Unmaintainable code', 'Manual and fragile deploys', 'No documentation or onboarding'] },
                    solution: { title: 'Velocity with Structure', desc: 'World-class architecture from day 1. We don\'t just build the product, we build the product factory.', points: ['Infrastructure as Code', 'Automated CI/CD pipelines', 'Scalable Design Systems'] }
                },
                enterprise: {
                    label: 'Enterprise / Established',
                    pain: { title: 'Stagnation & Legacy', desc: 'Monolithic systems and bureaucracy that kill innovation. Launching a feature takes months instead of days.', points: ['Legacy tech slowing the business', 'Information silos', 'Disconnection from the end user'] },
                    solution: { title: 'Agile Modernization', desc: 'We inject innovation cells that operate at startup speed within the corporate structure.', points: ['API-First & microservices strategy', 'Progressive modernization', 'Data-driven iteration culture'] }
                }
            }
        },
        methodology: {
            eyebrow: 'Work model',
            title_main: 'Squads,',
            title_sub: 'not freelancers.',
            toggle: { execute: 'EXECUTE', evolve: 'EVOLVE' },
            execute: {
                title: 'The Swiss Watch.',
                desc: 'Client work focused on excellence and flawless delivery. No improvising: execution with precision and global standards.'
            },
            evolve: {
                title: 'Sharpening the Axe.',
                desc: 'Our R&D lab. We experiment with AI, no-code and new paradigms. What we learn today in Evolve becomes the standard of tomorrow.'
            },
            status: 'Status: Active protocol',
            squad_card: { title: "You're hiring an ecosystem.", desc: 'Behind every developer there is a designer and a strategist. Collective intelligence applied to your project.' },
            resource: { title: 'Resource allocation', client: 'Client work', innovation: 'Internal innovation' }
        },
        process: {
            eyebrow: 'How we work',
            title_main: 'From concept',
            title_sub: 'to result.',
            steps: [
                { title: 'Audit & Discovery', subtitle: 'We understand the problem', desc: "We don't write a line of code without understanding the business. We analyze data, interview stakeholders and define clear KPIs.", deliverables: ['Technical audit', 'Product roadmap', 'User personas'] },
                { title: 'Architecture & Design', subtitle: 'We build the blueprints', desc: 'We design scalable systems and frictionless experiences. We define the technology stack and information architecture.', deliverables: ['High-Fidelity UI', 'System architecture', 'Design system'] },
                { title: 'Development & Delivery', subtitle: 'Sprint by sprint execution', desc: 'Agile development in 2-week cycles. Clean code, automated testing and continuous deploys to see real progress.', deliverables: ['Functional MVP', 'CI/CD pipelines', 'Documentation'] },
                { title: 'Launch & Scale', subtitle: 'Data-driven iteration', desc: 'Launch is just the beginning. We measure real usage, optimize conversion and scale infrastructure based on demand.', deliverables: ['A/B Testing', 'Performance optimization', 'Feature expansion'] }
            ]
        },
        performance: {
            label: 'Real results',
            title_main: 'Driven by',
            title_sub: 'results.',
            desc: "We don't fall in love with the process, we fall in love with the impact. If you grow, we deliver.",
            points: [
                'Beautiful design that doesn\'t convert is art, not business.',
                'Clean code that no one uses is worthless.'
            ],
            chart: { label: 'Growth metrics', sub: 'ANNUAL REPORT' },
            metrics: {
                conversion: 'Conversion Rate',
                time: 'Time to Market',
                retention: 'Retention',
                debt: 'Technical Debt'
            }
        },
        footer: {
            slots: 'Available for Q2 2025',
            title: "LET'S",
            title_highlight: 'WORK.',
            copy: 'Copy email',
            sitemap: 'Pages',
            socials: 'Social',
            legal: 'Legal',
            office: 'Where we are',
            office_loc: 'Buenos Aires, Argentina\nRemote worldwide',
            rights: 'All systems operational.',
            credits: 'Designed and developed by REFE.',
            marquee_text: "Let's work together"
        }
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('es'); // Default: Spanish

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
    return context;
};