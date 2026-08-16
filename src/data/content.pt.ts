import type { ProjectTranslation, SiteContent } from "./content.types";

// Placeholder titles for the Courses list are résumé-derived, not verified
// exact course names from the platform — see src/data/courses.ts.

const projectTranslations: Record<string, ProjectTranslation> = {
  "core-analytics-platform-migration": {
    overview:
      "Uma migração completa da principal ferramenta analítica da empresa, de um arquivo único e não estruturado para um aplicativo de BI governado e multi-domínio.",
    businessProblem:
      "A principal ferramenta analítica da empresa era um único arquivo multi-página, não estruturado, sem governança ou escalabilidade reais.",
    objective:
      "Substituir um arquivo de relatórios não governado e não escalável por um aplicativo estruturado capaz de suportar o crescimento contínuo de usuários e domínios de relatórios.",
    solution:
      "Liderou a migração para um aplicativo Power BI estruturado e multi-domínio, com relatórios organizados, governança contínua de DAX e controle de acesso.",
    businessImpact:
      "Aumentou os usuários ativos mensais em aproximadamente 79% ao longo do período monitorado, alcançando uma base de usuários ampla e sustentada.",
  },
  "payroll-integrity-analytics": {
    overview:
      "Uma iniciativa analítica de ponta a ponta que quantificou, pela primeira vez, quanto de uma medida interna de economia de custos realmente se sustentava.",
    businessProblem:
      'A empresa descontava a folha de pagamento por ausências aprovadas indevidamente, mas boa parte desses descontos era revertida posteriormente — ninguém media quanto dessa "economia" realmente se sustentava.',
    objective:
      "Construir uma forma confiável e repetível de medir o efeito líquido real dos descontos na folha de pagamento, e identificar por que tantos estavam sendo revertidos.",
    solution:
      'Construiu um pipeline consolidado em PySpark unindo múltiplas fontes internas de dados para calcular, pela primeira vez, uma métrica de "Economia Líquida" (Economia Inicial − Reversões). Definiu a metodologia de identificação, um funil de efetividade e uma análise de causa-raiz das reversões.',
    businessImpact:
      "Constatou que aproximadamente três quartos de um desconto de folha de pagamento six-figure identificado estava sendo revertido no mês seguinte, com uma taxa de retenção líquida confirmada de 23.6%. Entregou à liderança uma análise de causa-raiz e um plano de ação de 30/60/90 dias. Uma extensão do estudo constatou que os colaboradores sinalizados apresentavam uma taxa de desligamento significativamente mais elevada, tornando a ferramenta também um sinal de risco precoce, além de uma ferramenta de recuperação de custos.",
  },
  "client-risk-dashboard": {
    overview:
      "Um dashboard recorrente voltado à liderança executiva, combinando sinais de churn e atividade de pipeline comercial em uma visão única de risco de retenção de clientes.",
    businessProblem:
      "A liderança precisava de uma visão recorrente e estruturada do risco de retenção de clientes, combinando sinais de churn e atividade de pipeline comercial.",
    objective:
      "Fornecer à liderança executiva uma visão única e confiável do risco de retenção para embasar as discussões mensais de estratégia.",
    solution:
      "Construiu o dashboard do zero — das tabelas fato/dimensão até o relatório final — incorporando análise de churn e dados de pipeline comercial.",
    businessImpact:
      "Utilizado mensalmente nas discussões da liderança executiva sobre risco de retenção de clientes — uma audiência pequena, sênior e recorrente, o que representa uma evidência de impacto mais forte do que um alto número bruto de usuários.",
  },
  "field-visit-tracking-system": {
    overview:
      "Um sistema de acompanhamento self-service com distribuição automática hierárquica de relatórios para gestores de campo.",
    businessProblem:
      "Gestores de campo não tinham uma forma self-service de acompanhar a agenda de visitas e a taxa de conclusão de suas equipes.",
    objective:
      "Dar aos gestores de campo visibilidade direta sobre a agenda de visitas e a taxa de conclusão de suas equipes, sem relatórios manuais.",
    solution:
      "Construiu o modelo de dados fato/dimensão subjacente e uma visão self-service para os gestores, além de um sistema automatizado que distribui a agenda de visitas por e-mail, escalonado por hierarquia.",
    businessImpact:
      "Elevou o uso ativo mensal do relatório subjacente ao seu ponto mais alto desde o lançamento, diretamente ligado à implementação da distribuição automatizada.",
  },
  "internal-bi-portfolio-analytics-panel": {
    overview:
      "Uma ferramenta interna para o time de dados acompanhar adoção e engajamento em todo o portfólio de BI da própria empresa.",
    businessProblem:
      "O time de dados não tinha uma forma estruturada de acompanhar a adoção e o engajamento do próprio portfólio de dashboards.",
    objective:
      "Dar ao time de dados, para os próprios relatórios, o mesmo rigor de medição que ele aplica ao restante do negócio.",
    solution:
      "Construiu a stack completa — tabelas fato/dimensão a partir da camada bronze, medidas DAX, modelo de dados e design visual final — como uma ferramenta interna para o time de dados.",
    businessImpact:
      "Apoia decisões contínuas sobre quais relatórios descontinuar, manter ou receber mais investimento — evidência de uma mentalidade de data product owner, não apenas de execução.",
  },
  "asset-tracking-dashboard": {
    overview:
      "Um dashboard com visualização em mapa para resolver a perda ou extravio de equipamentos em sites de clientes.",
    businessProblem:
      "Terminais de relógio de ponto instalados em sites de clientes estavam sendo perdidos ou extraviados por falta de rastreabilidade.",
    objective:
      "Dar à operação uma visão clara, baseada em localização, de cada terminal e de quem é responsável por ele.",
    solution:
      "Assumiu e refinou um rascunho inicial de ETL, em seguida construiu um dashboard com visualização em mapa mostrando a última localização conhecida de cada terminal e o gestor responsável, e colocou em produção.",
    businessImpact:
      "Resolveu um problema operacional concreto com uma correção direta, implantada em produção — um projeto de escopo menor, mas um exemplo claro de identificar e fechar uma lacuna real.",
  },
  "data-democratization-governance-contribution": {
    overview:
      "Uma contribuição para uma iniciativa da empresa que concede acesso governado e self-service a dados antes restritos.",
    businessProblem:
      "Analistas fora do time de dados não tinham acesso direto aos dados de BI, criando um gargalo para análises multifuncionais.",
    objective:
      "Tornar dados antes restritos acessíveis, com segurança, a analistas multifuncionais, sem comprometer a governança.",
    solution:
      "Contribuiu para uma iniciativa da empresa que concede acesso governado e self-service a dados antes restritos, atuando na camada de documentação e metadados necessária para tornar esse acesso seguro e utilizável.",
    businessImpact:
      "Apoia uma análise self-service mais ampla entre departamentos sem comprometer a governança — papel de contribuidor, não de liderança.",
  },
};

const skillCategoryLabels: Record<string, string> = {
  "Analytics & BI": "Analytics & BI",
  Programming: "Programação",
  "Data Engineering & Cloud": "Engenharia de Dados & Cloud",
  "Data Governance & Quality": "Governança & Qualidade de Dados",
};

export const content: SiteContent = {
  nav: {
    home: "Início",
    about: "Sobre",
    experience: "Experiência",
    projects: "Projetos",
    skills: "Habilidades",
    courses: "Cursos",
    certifications: "Certificações",
    contact: "Contato",
    downloadResume: "Baixar Currículo",
  },
  hero: {
    title: "Engenheiro de Dados & Analytics",
    titleSub: "— com base sólida de 4+ anos em BI",
    body: "Eu construo a ponte entre dados brutos e decisões de negócio — e me importo mais com a confiabilidade de um número do que com a aparência de um dashboard.",
    ctaPrimary: "Ver Meu Trabalho",
    ctaSecondary: "Baixar Currículo",
  },
  techStack: [
    "Power BI",
    "SQL",
    "Python",
    "PySpark",
    "Databricks",
    "Azure Data Factory",
    "DAX",
    "Modelagem de Dados",
  ],
  impactMetrics: {
    heading: "Métricas de Impacto",
    labels: {
      yearsInData: "Anos em Dados & BI",
      businessImpact:
        "Impacto de negócio identificado (iniciativa de integridade de folha)",
      growth: "Crescimento em usuários ativos mensais da plataforma",
    },
  },
  home: {
    featuredProjects: "Projetos em Destaque",
    viewAllProjects: "Ver todos os projetos →",
  },
  projectCard: {
    viewCaseStudy: "Ver estudo de caso →",
  },
  projectsPage: {
    eyebrow: "Projetos",
    title: "Estudos de Caso",
    intro: "Sete projetos abrangendo BI, Analytics Engineering, Data Engineering e Governança de Dados — generalizados para proteger detalhes internos da empresa.",
  },
  projectDetail: {
    allProjects: "← Todos os projetos",
    overview: "Visão Geral",
    businessProblem: "Problema de Negócio",
    objective: "Objetivo",
    solution: "Solução",
    businessImpact: "Impacto no Negócio",
    technologies: "Tecnologias",
  },
  projectTranslations,
  about: {
    eyebrow: "Sobre",
    name: "Samuel Dias",
    intro: "Sou um profissional de dados que começou do zero — literalmente aprendendo SQL e Python por conta própria — e conquistei espaço em um time de dados construindo algo bom o suficiente para ser notado. Esse instinto não mudou: ainda me importo mais com a confiabilidade de um número do que com a aparência de um dashboard.",
    whatIDo: {
      heading: "O Que Eu Faço",
      body: 'Eu construo a camada entre dados brutos e decisões de negócio — de pipelines em Databricks/PySpark aos dashboards executivos que as pessoas realmente usam para decidir. Meu trabalho mais forte geralmente começa com uma pergunta que ninguém tinha feito ainda: não "qual é o número", mas "podemos confiar nesse número, e por que ele continua mudando".',
    },
    howIWork: {
      heading: "Como Eu Trabalho",
      body: "Prefiro ser dono do processo de ponta a ponta — ingestão, modelagem, governança e o relatório final — em vez de repassar partes ao longo do caminho. Uso um fluxo de Git com revisão por pull request mesmo em trabalho de BI, porque acredito que analytics merece o mesmo rigor que software. E prefiro sinalizar uma métrica em que ainda não confio a entregar um número que parece limpo mas que eu não conseguiria defender.",
    },
    whatImLearning: {
      heading: "O Que Estou Aprendendo",
      body: "No momento: dbt e Airflow, para formalizar a disciplina de orquestração e testes que já aplico informalmente há anos — além de francês, para ampliar onde posso trabalhar. No longo prazo, estou migrando deliberadamente de BI para Analytics Engineering e Data Engineering, sem perder a fluência de negócio que o BI me obrigou a construir primeiro.",
    },
  },
  experiencePage: {
    eyebrow: "Experiência",
  },
  experience: [
    {
      role: "Business Intelligence / Analista de Dados",
      period: "Fevereiro de 2022 — Atual",
      blocks: [
        {
          heading: "Plataforma Analítica Principal",
          bullets: [
            "Liderei a migração da principal ferramenta analítica da empresa, de um único arquivo de relatório para um aplicativo Power BI estruturado e multi-domínio, aumentando os usuários ativos mensais em aproximadamente 79% e alcançando uma base ampla e sustentada de usuários, enquanto sou responsável pela manutenção contínua, governança de DAX e controle de acesso.",
            "Construí uma ferramenta analítica interna para o time de dados acompanhar adoção e engajamento em todo o portfólio de BI da empresa — da modelagem fato/dimensão às medidas DAX e ao design visual final — apoiando decisões sobre quais relatórios descontinuar, manter ou receber mais investimento.",
            "Responsável pela governança completa de acesso de usuários no aplicativo Power BI da empresa, configurando Row-Level Security (RLS), segmentação de público e permissões hierárquicas de visibilidade.",
          ],
        },
        {
          heading: "Projetos Analíticos & Impacto de Negócio",
          bullets: [
            'Projetei e liderei uma iniciativa de análise de integridade de folha de pagamento em PySpark/Databricks, identificando que aproximadamente três quartos de um desconto de seis dígitos era revertido no mês seguinte — revelando uma métrica de "Economia Líquida" antes invisível, com taxa de retenção de 23,6%, e apresentando a análise de causa raiz e um plano de ação de 30/60/90 dias para a liderança. Estendi a análise com um estudo de correlação com desligamentos, constatando que cerca de um terço dos colaboradores identificados foram posteriormente desligados — transformando uma ferramenta de recuperação de custo em um sinal precoce de risco.',
            "Construí um dashboard de Risco de Cliente do zero (das tabelas fato/dimensão ao relatório final), incorporando análise de churn e dados de pipeline comercial; utilizado mensalmente em discussões da liderança executiva sobre risco de retenção de clientes.",
            "Projetei e construí um sistema de acompanhamento de visitas em campo self-service, incluindo distribuição automática hierárquica de relatórios (representante → gestor → diretor → executivo), elevando o uso mensal ativo ao seu ponto mais alto desde o lançamento — resultado direto da automação implementada.",
            "Construí um dashboard de rastreamento de ativos com visualização em mapa para resolver a perda de equipamentos em sites de clientes, evoluindo um rascunho inicial de ETL até a solução em produção.",
          ],
        },
        {
          heading: "Governança & Capacitação",
          bullets: [
            "Contribuí para uma iniciativa de democratização de dados, concedendo a analistas multifuncionais acesso direto e governado a dados de BI antes restritos, incluindo documentação de tabelas e padrões de metadados para apoiar análises self-service.",
            "Em parceria com um colega, documentei medidas DAX e tabelas fato diretamente no Databricks, melhorando a descoberta e reduzindo o tempo de onboarding para novos consumidores de dados.",
            "Criei do zero o curso interno de onboarding da empresa para o novo aplicativo Power BI, pesquisando a documentação oficial e escrevendo todo o conteúdo de treinamento passo a passo usado na plataforma corporativa de aprendizagem.",
            "Consulto e transformo dados de tabelas de origem em escala corporativa (100M+ de registros) usando filtragem por período, atuando após a ingestão para construir modelos fato/dimensão e resultados analíticos.",
          ],
        },
      ],
    },
  ],
  skillsPage: {
    eyebrow: "Habilidades",
    title: "Com o que eu trabalho",
    categories: skillCategoryLabels,
  },
  certifications: {
    eyebrow: "Certificações",
    title: "Em breve",
    body: "Nenhuma certificação formal concluída até o momento. Esta seção será atualizada conforme certificações forem concluídas — volte em breve.",
  },
  courses: {
    eyebrow: "Cursos & Formação",
    title: "Aprendizado Contínuo",
    education: {
      heading: "Formação Acadêmica",
      degree: "Graduação Tecnológica em Ciência de Dados",
      institution: "Universidade Cruzeiro do Sul — São Paulo, Brazil",
      year: "2024",
    },
    coursesHeading: "Cursos",
    coursesIntro: "Cursos contínuos e autodirigidos para apoiar a transição para Analytics Engineering e Data Engineering.",
    courseList: [
      {
        title: "Power BI de Ponta a Ponta",
        description: "DAX, Power Query, modelagem de dados, administração do serviço",
      },
      { title: "Fundamentos do Microsoft Fabric" },
      { title: "Python para Dados", description: "APIs, Pandas" },
      { title: "Storytelling & Design de Dashboards" },
      { title: "Estatística Aplicada para Análise" },
    ],
  },
  contact: {
    eyebrow: "Contato",
    title: "Vamos Conversar",
    email: "E-mail",
    linkedin: "LinkedIn",
    github: "GitHub",
    downloadResume: "Baixar Currículo",
    shorterResumePrefix: "Prefere um currículo mais curto?",
    shorterResumeLink: "Baixe a versão de uma página",
  },
  footer: {
    role: "Engenheiro de Dados & Analytics",
    copyrightSuffix: "Todos os direitos reservados.",
  },
};
