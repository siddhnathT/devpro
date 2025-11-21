
import { ExperienceItem, ProjectItem, SkillCategory, EducationItem, CertificationItem } from './types';

export const PERSONAL_INFO = {
  name: "Siddhnath",
  role: "Full-Stack Developer",
  roles: ["Full-Stack Developer", "Blockchain Developer", "AI Engineer"],
  tagline: "Innovative technology professional seeking to leverage expertise in AI, IoT, and full-stack development.",
  email: "siddhnathtiwari7@gmail.com",
  phone: "+49 015510833938",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  location: "Magdeburg, Germany",
  bio: "Innovative technology professional seeking to leverage expertise in AI, IoT, and full-stack development to create cutting-edge smart systems. With hands-on experience in computer vision, blockchain, and cybersecurity, I aim to develop secure, intelligent solutions that bridge hardware and software for real-world impact.\n\nCurrently pursuing my Masters in Medical Systems Engineering in Germany, I combine a strong foundation in Electronics and Communication with advanced software engineering skills.",
  highlights: [
    "Master's Student in Medical Systems",
    "Expertise in AI & Computer Vision",
    "Blockchain & Smart Contract Development",
    "Cybersecurity & Penetration Testing",
    "Full Stack Web Development"
  ]
};

export const STATS = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects", value: "15+" },
  { label: "Technologies", value: "25+" },
  { label: "Certifications", value: "5+" },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    role: "Data Quality Specialist",
    company: "Deep Cognition",
    period: "Aug 2023 – Sep 2024",
    description: [
      "Built OCR models with Tesseract, EasyOCR, and OpenCV for data extraction.",
      "Visualized data using Power BI, Matplotlib, and Seaborn.",
      "Fine-tuned LLMs with Hugging Face, PyTorch, and TensorFlow.",
      "Optimized pipelines using Pandas, NumPy, and SQL.",
      "Merged CV (OpenCV, YOLO) and NLP (SpaCy, NLTK) for document automation."
    ],
    technologies: ["OCR", "LLMs", "Python", "Power BI", "TensorFlow"]
  },
  {
    id: 2,
    role: "Web Application Penetration Testing Intern",
    company: "Indian Server Pvt. Ltd.",
    period: "Mar 2023",
    description: [
      "Conducted vulnerability assessments using Burp Suite, OWASP ZAP, Nmap, Wireshark, and Nessus.",
      "Performed network scanning, traffic analysis, and port enumeration.",
      "Identified injection flaws, authentication issues, and misconfigurations.",
      "Prepared security reports with risk assessments and mitigation strategies."
    ],
    technologies: ["Burp Suite", "OWASP", "Network Security", "Nmap"]
  },
  {
    id: 3,
    role: "Data Analysis Intern",
    company: "Deloitte",
    period: "Jun 2022 – Aug 2022",
    description: [
      "Performed data analysis using Excel, Python, and MATLAB for comprehensive analytics.",
      "Cleaned and transformed data with Python (Pandas, NumPy), SQL, and MATLAB.",
      "Automated tasks using Python scripts, MATLAB automation, and Power Query."
    ],
    technologies: ["Python", "SQL", "MATLAB", "Excel"]
  },
  {
    id: 4,
    role: "Consulting Intern (Strategy & UX Design)",
    company: "Accenture",
    period: "Jan 2022 – Apr 2022",
    description: [
      "Created stakeholder presentations using PowerPoint and Canva.",
      "Developed business strategies using SWOT, PESTLE, and Porter’s Five Forces.",
      "Managed projects with Jira and Trello using agile methodologies."
    ],
    technologies: ["Strategy", "UX Design", "Agile", "Jira"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "AI Malaria Detection",
    description: "Web-based malaria detection using VGG19 transfer learning.",
    metric: "98% Accuracy",
    architectureFlow: ["User", "Web UI", "Flask", "VGG19 Model", "Prediction"],
    tags: ["VGG19", "Transfer Learning", "Flask"],
    link: "#",
  },
  {
    id: 2,
    title: "Handwriting Recognition",
    description: "Machine learning model for recognizing handwritten text.",
    metric: "95% Recognition Rate",
    architectureFlow: ["Input Image", "Preprocessing", "CNN", "Softmax", "Text Output"],
    tags: ["CNN", "Deep Learning", "OCR"],
    link: "#",
  },
  {
    id: 3,
    title: "Hybrid Approach for Liver Tumor Detection",
    description: "Utilized ResNet50 and VGG16 CNN architectures for CT image feature extraction.",
    metric: "97% F1-Score",
    architectureFlow: ["CT Scan", "Preprocessing", "ResNet50/VGG16", "Segmentation", "Tumor Mask"],
    tags: ["CNN", "ResNet50", "VGG16"],
    link: "#",
  },
  {
    id: 4,
    title: "IoT-Based Medical Monitoring System",
    description: "Developed an IoT-enabled real-time patient monitoring system.",
    metric: "Real-time Latency < 200ms",
    architectureFlow: ["Sensors", "Microcontroller", "Wi-Fi", "Cloud Dashboard", "Alert System"],
    tags: ["IoT", "Sensors", "Cloud"],
    link: "#",
  },
  {
    id: 5,
    title: "CratePass: Blockchain Gate Pass Management",
    description: "Developed decentralized application (dApp) on Stellar blockchain.",
    metric: "100% Tamper-Proof",
    architectureFlow: ["User", "Frontend", "Soroban SDK", "Stellar Network", "Smart Contract"],
    tags: ["Blockchain", "Stellar", "Rust"],
    link: "#",
  },
  {
    id: 6,
    title: "Aptos Blockchain To-Do List Application",
    description: "Built full-stack dApp on Aptos blockchain with secure wallet integration.",
    metric: "Secure Wallet Integration",
    architectureFlow: ["User", "Wallet", "Aptos Client", "Move Module", "Blockchain State"],
    tags: ["Aptos", "Blockchain", "Smart Contracts"],
    link: "#",
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "C++", "SQL", "R", "Rust"]
  },
  {
    category: "Artificial Intelligence",
    items: ["TensorFlow", "PyTorch", "OpenCV", "YOLO", "LLMs", "Hugging Face", "Scikit-learn"]
  },
  {
    category: "Web & Cloud",
    items: ["React", "TypeScript", "Tailwind CSS", "Google Cloud", "AWS", "Docker"]
  },
  {
    category: "Data Analytics",
    items: ["Power BI", "Tableau", "Pandas", "NumPy", "Matplotlib", "Excel"]
  },
  {
    category: "Security Tools",
    items: ["Burp Suite", "OWASP ZAP", "Nmap", "Wireshark", "Nessus"]
  },
  {
    category: "Hardware / IoT",
    items: ["Raspberry Pi", "Arduino", "MQTT", "Embedded Systems", "Sensors"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Master of Science in Medical Systems Engineering",
    institution: "Otto-von-Guericke Universität Magdeburg, Germany",
    year: "April 2025 – Present",
    description: "Focusing on Medical Imaging, AI in Medicine, and Healthcare IoT."
  },
  {
    degree: "Bachelor of Engineering in Electronics and Communication",
    institution: "Technocrats Institute of Technology",
    year: "2019 – 2023",
    description: ""
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: "Google Cloud Skill Badges",
    issuer: "Google Cloud",
    date: "2022 - Present",
    link: "https://www.skills.google/public_profiles/d80c0530-2bc9-439a-97dc-9dbf012ae17a"
  },
  {
    name: "Strategy Consulting Virtual Internship",
    issuer: "Accenture Australia",
    date: "Sep 2022",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20Australia/MD2p8dDih7zoQ9KRC_Accenture%20Australia_sPYePqsxtYhAib4Lm_1662718306482_completion_certificate.pdf"
  },
  {
    name: "Elements of AI",
    issuer: "University of Helsinki",
    date: "Aug 2021",
    link: "https://certificates.mooc.fi/validate/ais3wnkgyx8"
  },
  {
    name: "Blockchain Developer",
    issuer: "Various",
    date: "Mar 2022",
    link: "#"
  }
];

export const CAREER_DATA = [
  { year: '2022', roles: 2, projects: 2 },
  { year: '2023', roles: 2, projects: 4 },
  { year: '2024', roles: 1, projects: 6 },
  { year: '2025', roles: 1, projects: 8 },
];
