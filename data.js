/* ==========================================================================
   PORTFOLIO CONTENT — edit this file to add new projects, skills,
   certifications, fellowships, or timeline entries. The page renders
   everything below automatically; no HTML/CSS changes required.
   ========================================================================== */

const STATS = [
  { value: 1, suffix: "", label: "Research Project" },
  { value: 5, suffix: "+", label: "AI / ML Projects" },
  { value: 4, suffix: "+", label: "APIs Developed" },
  { value: 2, suffix: "+", label: "Certifications" },
];

const SKILLS = [
  {
    category: "Programming",
    icon: "code",
    items: [
      { name: "Python", level: 92 },
      { name: "SQL", level: 82 },
      { name: "HTML", level: 78 },
      { name: "CSS", level: 75 },
    ],
  },
  {
    category: "Backend Development",
    icon: "server",
    items: [
      { name: "Django", level: 85 },
      { name: "Django REST Framework", level: 85 },
      { name: "REST APIs", level: 88 },
      { name: "Authentication", level: 80 },
      { name: "MySQL", level: 82 },
    ],
  },
  {
    category: "Data Science",
    icon: "chart",
    items: [
      { name: "Pandas", level: 88 },
      { name: "NumPy", level: 85 },
      { name: "Scikit-learn", level: 86 },
      { name: "Matplotlib", level: 80 },
      { name: "Plotly", level: 75 },
      { name: "Data Cleaning", level: 85 },
      { name: "Exploratory Data Analysis", level: 85 },
      { name: "Machine Learning", level: 86 },
    ],
  },
  {
    category: "Quantum Computing",
    icon: "atom",
    items: [
      { name: "Qiskit", level: 78 },
      { name: "Quantum Machine Learning", level: 75 },
      { name: "Quantum Autoencoders", level: 72 },
    ],
  },
  {
    category: "Tools",
    icon: "tool",
    items: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Jupyter Notebook", level: 88 },
      { name: "MySQL Workbench", level: 78 },
      { name: "Postman", level: 80 },
    ],
  },
];

const PROJECTS = [
  {
    title: "Diagnosify",
    subtitle: "AI-powered heart disease risk assessment",
    description:
      "A web-based application that analyses patient health parameters — age, blood pressure, cholesterol, and related indicators — through a trained XGBoost model to estimate heart disease risk, presented through a clinical-style dashboard designed for non-technical users.",
    tags: ["Python", "Artificial Intelligence", "Machine Learning", "XGBoost", "Flask"],
    links: [],
    featured: true,
  },
  {
    title: "Loan & Savings Management System",
    subtitle: "Backend platform for cooperative finance",
    description:
      "A Django REST Framework backend handling user authentication, savings management, loan applications, interest calculations, and an admin dashboard — built as a set of composable REST APIs.",
    tags: ["Django", "Django REST Framework", "MySQL", "REST APIs", "Authentication"],
    links: [],
  },
  {
    title: "Cooperative Management Portal",
    subtitle: "Member, savings & loan administration",
    description:
      "A Python application for managing cooperative societies end-to-end: member registration, savings tracking, loan disbursement, repayments, and administrative oversight.",
    tags: ["Python", "MySQL", "Backend"],
    links: [],
  },
  {
    title: "Hospital Payment Portal",
    subtitle: "Payment processing for healthcare billing",
    description:
      "A Python-based payment processing system integrated with a relational database, built to handle hospital billing transactions reliably.",
    tags: ["Python", "MySQL", "Payments"],
    links: [],
  },
  {
    title: "University Timetable Allocation System",
    subtitle: "SWEP capstone — automated scheduling",
    description:
      "A Student Work Experience Programme (SWEP) project that automates university timetable allocation, resolving room, staff, and course-time conflicts programmatically.",
    tags: ["Python", "Scheduling", "Automation"],
    links: [],
  },
];

const RESEARCH_INTERESTS = [
  { name: "Artificial Intelligence", icon: "brain" },
  { name: "Machine Learning", icon: "chart" },
  { name: "Quantum Machine Learning", icon: "atom" },
  { name: "Quantum Computing", icon: "circuit" },
  { name: "Data Science", icon: "data" },
  { name: "Backend Engineering", icon: "server" },
  { name: "High Performance Computing", icon: "cpu" },
  { name: "Intelligent Systems", icon: "spark" },
];

const TIMELINE = [
  {
    date: "2022 — 2026",
title: "Computer Science Graduate",
org: "Ladoke Akintola University of Technology (LAUTECH)",
description: "Coursework spanning algorithms, databases, and software engineering, alongside independent specialisation in data science and quantum computing.",
  },
  {
    date: "2024 — Present",
    title: "Data Science Study & Practice",
    org: "Independent / Applied Projects",
    description:
      "Hands-on machine learning work across healthcare and backend-integrated systems — from data cleaning and exploratory analysis to model deployment.",
  },
  {
    date: "Aug 2025 — Nov 2025",
    title: "Quantum Computing Fellowship",
    org: "HeGUTTS Fellowship · The Assembly by Ennovate Lab × AQC",
    description:
      "Four-month intensive fellowship in quantum computing fundamentals, quantum machine learning, and Qiskit, culminating in a capstone project.",
  },
  {
    date: "Feb 2026",
    title: "African International Conference on Quantum Computing & Simulation",
    org: "KNUST, Ghana",
    description:
      "Two-week conference engagement covering quantum simulation and computational physics applications across the African quantum research community.",
  },
  {
    date: "2026",
    title: "Research: Quantum Autoencoders for Anomaly Detection",
    org: "African Quantum Consortium",
    description:
      "Designing a hybrid quantum-classical autoencoder framework for anomaly detection, to be presented as a research poster at ICTP-SAIFR.",
  },
  {
    date: "Ongoing",
    title: "Backend & Applied ML Projects",
    org: "Independent",
    description:
      "Building and shipping backend platforms and machine-learning-driven applications, from cooperative finance systems to healthcare diagnostics.",
  },
];

const FELLOWSHIPS = [
  {
    title: "HeGUTTS Quantum Computing Fellowship",
    org: "The Assembly by Ennovate Lab, in partnership with the African Quantum Consortium (AQC)",
    date: "Aug 2025 — Nov 2025",
    description:
      "A four-month, intensive fellowship providing foundational and practical exposure to quantum computing — covering quantum circuits, quantum machine learning, and Qiskit — culminating in a research-driven capstone project.",
    logos: ["assets/ennovate-logo.png", "assets/aqc-logo.png"],
    certImage: "assets/hegutts-certificate.jpg",
    certFile: "assets/hegutts-certificate.pdf",
  },
];

const CERTIFICATIONS = [
  {
    title: "African International Conference on Quantum Computing and Simulation (AoQC)",
    org: "Kwame Nkrumah University of Science and Technology (KNUST), Ghana",
    date: "February 2026",
    description:
      "Two-week participation in the African International Conference on Quantum Computing and Simulation, hosted by the Department of Physics at KNUST.",
    logo: "assets/aqc-logo.png",
    certImage: "assets/aoqc-certificate.jpg",
  },
];
