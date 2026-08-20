export const profile = {
  name: "Kiningu Stephen",
  initials: "KS",
  title: "Software Engineer & SaaS Architect",
  subtitle: "Founder, HippoTech Edge · Creator, KIKO PMS",
  headline:
    "Building AI-powered software and scalable cloud-native platforms that drive digital transformation across Africa.",
  bio: `A Software Engineer, SaaS Architect, and technology entrepreneur specialising in the design and delivery of AI-powered business applications, scalable cloud-native platforms, and enterprise software solutions.

As the Founder of HippoTech Edge, I help organisations drive digital transformation through intelligent automation, artificial intelligence, and data-driven systems. I am also the creator of KIKO PMS — an AI-Powered Property Management platform Built for Africa, designed to transform how property managers, landlords, and real estate professionals operate through intelligent automation, predictive analytics, and seamless integrations.

Known for combining technical excellence with strategic business insight, I partner with organisations to transform complex challenges into scalable, high-impact digital solutions that deliver measurable growth and long-term value.`,
  vision:
    "To build world-class AI-powered technology that empowers property managers, landlords, and businesses across Africa — making intelligent automation and cloud innovation accessible to every property professional on the continent.",
  personalStatement:
    "I believe technology should solve real business problems, not create complexity. My work focuses on developing scalable, intelligent, and user-friendly solutions that help organisations operate more efficiently and make better decisions.",
  email: "support@kiko-pms.com",
  emailAlt: "kiningumbuvi@gmail.com",
  phone: "+254 769 580 728",
  github: "https://github.com/kinin01",
  linkedin: "https://www.linkedin.com/in/kiningu-stephen-/",
  website: "https://www.hippotechedge.com",
  location: "Nairobi / Eldoret, Kenya",
};

export const stats = [
  { value: "2", label: "Companies Founded / Led" },
  { value: "MSc", label: "Information Technology, London" },
  { value: "10+", label: "Enterprise Solutions Delivered" },
  { value: "7+", label: "Years Engineering Experience" },
];

export const expertise = [
  "Enterprise Software Development",
  "Software Architecture & Systems Design",
  "SaaS Engineering & Multi-Tenancy Architecture",
  "AI Systems Engineering",
  "Artificial Intelligence Integration",
  "Cloud-Native Application Development",
  "Digital Transformation Strategy",
  "Workflow Automation & Orchestration",
  "Payment Systems Integration",
  "API Design & Systems Integration",
  "PropTech Infrastructure & Platform Engineering",
  "Real Estate Technology Platforms",
  "CRM Systems",
  "DevOps & Cloud Infrastructure",
  "Data Analytics & Business Intelligence",
  "Product Leadership & Innovation",
];

export const skills = [
  {
    category: "Backend Engineering",
    items: [
      "Python",
      "Django",
      "FastAPI",
      "Django REST Framework",
      "Pydantic",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Apache Airflow",
      "M-Pesa API",
      "Stripe",
      "Flutterwave",
      "Java",
    ],
  },
  {
    category: "Frontend Engineering",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "Docker",
      "Google Cloud Platform",
      "AWS",
      "Kubernetes",
      "Terraform",
      "CI/CD Pipeline Design",
      "GitHub Actions",
      "GitLab CI/CD",
      "Linux Server Administration",
    ],
  },
  {
    category: "Emerging Technologies",
    items: [
      "AI Systems Architecture",
      "Large Language Model Integration",
      "LLM Orchestration & RAG",
      "Multi-Agent AI Systems",
      "Intelligent Automation",
      "Workflow Automation",
      "Predictive Analytics",
    ],
  },
];

export const experience = [
  {
    id: 1,
    company: "HippoTech Edge",
    website: "https://www.hippotechedge.com",
    role: "Founder & Chief Tech Architect",
    period: "Current",
    type: "Founder",
    location: "Nairobi, Kenya",
    description:
      "Provides strategic technology consulting, software engineering services, and digital transformation solutions to businesses seeking scalable and future-ready systems.",
    achievements: [
      "Leads software architecture, SaaS engineering, and multi-tenant platform design",
      "Oversees development of enterprise-grade SaaS platforms, AI systems, and business applications",
      "Designs and delivers payment systems integrations across M-Pesa, Stripe, and Flutterwave for African markets",
      "Architects workflow automation and intelligent orchestration pipelines that eliminate manual business processes",
      "Partners with startups, SMEs, enterprises, and government institutions on transformative digital solutions",
      "Specialises in AI systems engineering, PropTech infrastructure, and cloud-native platform development",
    ],
    tech: ["Python", "Django", "FastAPI", "React", "GCP", "AWS", "AI/LLM", "Stripe", "M-Pesa API"],
  },
  {
    id: 2,
    company: "KIKO PMS",
    website: null as string | null,
    role: "Creator & Lead Architect",
    period: "Current",
    type: "Product",
    location: "www.kiko-pms.com",
    description:
      "Conceived and developed KIKO PMS — an AI-Powered Property Management platform Built for Africa, enabling property managers, landlords, real estate agencies, and developers to run smarter operations through intelligent automation and real-time analytics.",
    achievements: [
      "End-to-end PropTech infrastructure design — from multi-tenant SaaS architecture to production deployment",
      "AI systems engineering for intelligent rent collection, tenant management, and maintenance workflow automation",
      "Native payment systems integration with M-Pesa, handling real-time transaction processing and reconciliation",
      "Automated workflow orchestration across leasing, onboarding, maintenance, and financial reporting pipelines",
      "Predictive analytics and financial intelligence reporting built for African property markets",
      "Real Estate CRM with AI-assisted decision-support tools purpose-built for Kenya and East Africa",
    ],
    tech: [
      "Next.js",
      "Django",
      "PostgreSQL",
      "Redis",
      "Docker",
      "GCP",
      "M-Pesa API",
      "Celery",
      "Apache Airflow",
    ],
  },
];

export const education = [
  {
    degree: "Master of Science — Information Technology",
    institution: "Birkbeck, University of London",
    period: "2021 – 2022",
    location: "London, UK",
  },
];

export const projects = [
  {
    id: 1,
    title: "KIKO PMS",
    subtitle: "AI-Powered Property Management Built for Africa",
    description:
      "An AI-powered, cloud-based Property Management platform purpose-built for the African market. Automates tenant management, rent collection, maintenance, leasing, and financial reporting — giving property managers and landlords intelligent tools to run smarter operations.",
    longDescription:
      "KIKO PMS transforms the entire property management lifecycle with AI at its core — from intelligently onboarding tenants to automating rent collection, predicting maintenance needs, and generating financial intelligence reports. Built from the ground up for the unique needs of Kenyan and African property professionals, with native M-Pesa integration and Africa-first workflows.",
    tech: [
      "Next.js",
      "Django",
      "PostgreSQL",
      "Redis",
      "Docker",
      "GCP",
      "M-Pesa API",
      "Tailwind CSS",
    ],
    link: "https://www.kiko-pms.com",
    github: null as string | null,
    featured: true,
    category: "SaaS Platform",
    metrics: [
      "AI-Powered",
      "Built for Africa",
      "Live Product",
      "M-Pesa Native",
    ],
  },
  {
    id: 2,
    title: "HippoTech Edge",
    subtitle: "Digital Intelligence. Designed for Your Business.",
    description:
      "Enterprise technology consulting firm delivering AI-Powered Systems, Cloud-Native Platforms, Custom Software Development, Business Process Automation, Systems Integration, and Digital Transformation Consulting across Africa.",
    tech: [
      "Python",
      "Django",
      "FastAPI",
      "React",
      "GCP",
      "AWS",
      "AI/LLM",
      "Kubernetes",
    ],
    link: "https://www.hippotechedge.com",
    github: "https://github.com/kinin01",
    featured: true,
    category: "Enterprise Consulting",
    metrics: [
      "80% Automation",
      "Pan-Africa Reach",
      "6 Service Lines",
      "3+ Products",
    ],
  },
  {
    id: 3,
    title: "AgriAdvisory SMS Platform",
    subtitle: "Agricultural Technology",
    description:
      "An SMS-based advisory system that helps small-scale farmers in East Africa attain quality produce by delivering timely farming advisories — no internet required.",
    tech: ["Python", "Django", "Africa's Talking API", "PostgreSQL"],
    link: null as string | null,
    github:
      "https://github.com/kinin01/Application-to-help-small-scale-farmers-in-East-Africa-attain-quality-farm-produce-",
    featured: false,
    category: "AgriTech",
    metrics: null as string[] | null,
  },
  {
    id: 4,
    title: "Clinic Management System",
    subtitle: "Healthcare Management",
    description:
      "A web-based outpatient management system helping doctors and clinic staff manage patient records, appointments, prescriptions, and billing efficiently.",
    tech: ["Python", "Django", "JavaScript", "PostgreSQL"],
    link: null as string | null,
    github: "https://github.com/kinin01/Clinic-management-system",
    featured: false,
    category: "HealthTech",
    metrics: null as string[] | null,
  },
];
