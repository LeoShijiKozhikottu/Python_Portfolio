export interface ChapterMeta {
  id: number;
  number: string;
  code: string;
  title: string;
  subtitle: string;
  readingTime: string;
  summary: string;
  keywords: string[];
}

export const STUDENT_INFO = {
  websiteTitle: "ADVANCED PYTHON PROGRAMMING PORTFOLIO",
  courseName: "ADVANCED PYTHON PROGRAMMING",
  courseNameTitleCase: "Advanced Python Programming",
  courseCode: "CS13007",
  courseSubtitle: "Course portfolio and project writeup",
  studentName: "Leo Shiji",
  registrationNumber: "23MIC0082",
  programme: "Integrated M.Tech in Computer Science and Engineering",
  institution: "Vellore Institute of Technology (VIT), Vellore",
  institutionShort: "Vellore Institute of Technology, Vellore",
  faculty: "Dr. Sharmila Banu K",
  facultyRole: "Faculty Mentor & Course Instructor",
  semester: "Fall Semester 2026–27",
  featuredProject: "CalTracker – Calorie Tracking Web app with Gemini Vision",
  profileImage: "/images/profile.jpg",
  quickLinks: {
    website: {
      title: "CalTracker - Gym & Diet Tracker",
      url: "https://caltracker-fit.vercel.app/",
      notes: "Live deployment on Vercel; multimodal calorie & macro tracker",
      tag: "Live Deployment",
    },
    ppt: {
      title: "CalTracker_Workflow_with_Files.pptx",
      url: "https://docs.google.com/presentation/d/1tWngwweqTkoXZwwsFks4ewspE9Y7OK58/edit?rtpof=true&sd=true",
      notes: "Project presentation and complete architectural workflow",
      tag: "Google Slides PPT",
    },
    video: {
      title: "CalTracker Demo Video Walkthrough",
      fileName: "Screen Recording 2026-11-02 110715.mp4",
      url: "https://drive.google.com/file/d/1ZDnQPVN33vRMqsUcZFXFxaTkgFgbg99G/view",
      notes: "Full functional screen recording walkthrough of the web application",
      tag: "Demo Video (.mp4)",
    },
    audio: {
      title: "Python Audio Recording [Business Thesis]",
      fileName: "New recording 12.mp3",
      url: "https://drive.google.com/file/d/1qrQ_rvdgNQQB2ehmpCnlmdywI27ewF6U/view",
      notes: "Official audio recording submission on business thesis & AI product model",
      tag: "Audio Submission (.mp3)",
    },
    medium: {
      title: "My First Encounter with Python",
      url: "https://medium.com/@leoshiji/my-first-encounter-with-python-022495d85126",
      notes: "Blog post on Medium: 4-year journey from syntax to AI engineering",
      tag: "Medium Editorial",
    },
  },
};

export const CHAPTERS: ChapterMeta[] = [
  {
    id: 1,
    number: "01",
    code: "CHAPTER 01",
    title: "About Me & Python Dossier",
    subtitle: "Academic Identity, Computing Philosophy & Advanced Python Competencies",
    readingTime: "3 min read",
    summary:
      "Academic profile of Leo Shiji (23MIC0082), an Integrated M.Tech student in Computer Science and Engineering at VIT Vellore, documenting coursework, full-stack Python engineering, and multimodal AI development.",
    keywords: [
      "Advanced Python",
      "CS13007",
      "Full-Stack Python",
      "Gemini Multimodal AI",
      "Data Science",
      "IoT Sensor Telemetry",
      "Algorithmic Problem Solving",
    ],
  },
  {
    id: 2,
    number: "02",
    code: "CHAPTER 02",
    title: "Featured Project: CalTracker AI",
    subtitle: "Calorie Tracking Web App Powered by Google Gemini Vision (10-Point Technical Writeup)",
    readingTime: "12 min read",
    summary:
      "Comprehensive 10-point technical writeup for CalTracker: motivation, existing gap/USP, 4-tier architecture, complete tech stack, runtime Gemini Vision prompt engineering, API integration, and user I/O matrix.",
    keywords: [
      "CalTracker",
      "Gemini Vision API",
      "Vercel Deployment",
      "Multimodal Food Recognition",
      "Automated Macro Estimation",
      "System Architecture",
      "RESTful API Integration",
    ],
  },
  {
    id: 3,
    number: "03",
    code: "CHAPTER 03",
    title: "Pandas Analysis: Green View Index",
    subtitle: "Ranking of 30 Global Cities by Green View Index (GVI) Dataset Exercise",
    readingTime: "4 min read",
    summary:
      "Data analysis exercise utilizing pandas to construct, manipulate, and rank 30 international cities by their Green View Index (GVI), complete with interactive filtering, sorting, and statistical metrics.",
    keywords: [
      "pandas",
      "Green View Index (GVI)",
      "DataFrame Manipulation",
      "Urban Analytics",
      "Data Wrangling",
      "Tabular Exploration",
    ],
  },
  {
    id: 4,
    number: "04",
    code: "CHAPTER 04",
    title: "IoT Impairment Assessment",
    subtitle: "Wrist-Worn MPU Motion Tracking & ESP32 Microcontroller for Eating Disorder Detection",
    readingTime: "5 min read",
    summary:
      "Hardware-software edge application detecting hand-to-mouth eating motion patterns using an MPU sensor and ESP32 microcontroller, featuring side-by-side system architecture and original handwritten laboratory sketches.",
    keywords: [
      "IoT Impairment Assessment",
      "ESP32 Microcontroller",
      "MPU-6050 Accelerometer/Gyro",
      "Motion Classification",
      "Eating Disorder Tracking",
      "Cloud Telemetry",
    ],
  },
  {
    id: 5,
    number: "05",
    code: "CHAPTER 05",
    title: "Classroom Activities & Laboratory Sessions",
    subtitle: "Tutorial Collaboration, In-Class Quiz & Computer Lab Audio Thesis",
    readingTime: "4 min read",
    summary:
      "Documented academic milestones including group algorithmic discussions during the Python tutorial, the in-class Python assessment quiz, and the computer lab audio recording session for the CalTracker business thesis.",
    keywords: [
      "Python Tutorial Discussion",
      "Class Quiz Session",
      "Audio Recording Session",
      "Business Thesis",
      "Collaborative Computing",
      "Lab Artifacts",
    ],
  },
  {
    id: 6,
    number: "06",
    code: "CHAPTER 06",
    title: "LeetCode Matrix & Padlet Submission",
    subtitle: "Algorithmic Problem Solving across Easy, Medium & Hard Tiers",
    readingTime: "8 min read",
    summary:
      "Official Padlet submission (Padlet_Python_23MIC0082) covering 6 solved LeetCode problems spanning Bit Manipulation, Dynamic Programming, and Matrix Search, with complete Python implementations and complexity proofs.",
    keywords: [
      "LeetCode 136 (Single Number)",
      "LeetCode 66 (Plus One)",
      "LeetCode 61 (Rotate List)",
      "LeetCode 74 (Search 2D Matrix)",
      "LeetCode 115 (Distinct Subsequences)",
      "LeetCode 546 (Remove Boxes)",
      "Padlet Submission",
    ],
  },
  {
    id: 7,
    number: "07",
    code: "CHAPTER 07",
    title: "Medium Publication",
    subtitle: "My First Encounter with Python: 4-Year Journey From Syntax to Multimodal AI",
    readingTime: "5 min read",
    summary:
      "Editorial reflection published on Medium chronicling four years of programming evolution, bridging foundational Python syntax to computer vision, web engineering, and autonomous health technologies.",
    keywords: [
      "Medium Editorial",
      "Python Evolution",
      "Self-Taught Engineering",
      "Developer Philosophy",
      "Multimodal AI",
    ],
  },
  {
    id: 8,
    number: "08",
    code: "CHAPTER 08",
    title: "Project Media Vault & Deliverables",
    subtitle: "Deployment Portal, Presentation Deck, Video Walkthrough & Audio Submission",
    readingTime: "3 min read",
    summary:
      "Comprehensive deliverables hub aggregating the live Vercel deployment link, Google Slides presentation deck, video walkthrough demonstration, and business thesis audio recording.",
    keywords: [
      "Live Vercel Link",
      "Google Slides Presentation",
      "Video Walkthrough",
      "Audio Recording Submission",
      "Project Deliverables",
    ],
  },
];
