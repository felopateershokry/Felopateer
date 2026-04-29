import me from "./me.jpg";
import homeproject1 from "./NFC project/home.png";
import home2project1 from "./NFC project/home2.png";
import nfcproject1 from "./NFC project/nfc.png";
import singleproject1 from "./NFC project/single.png";
import listproject1 from "./NFC project/list.png";
import tableproject1 from "./NFC project/table.png";
import finder1 from "./finder/f1.png";
import finder2 from "./finder/f2.png";
import finder3 from "./finder/f3.png";
import hotel1 from "./Hotel by c/h1.png";
import hotel2 from "./Hotel by c/h2.png";
import hotel3 from "./Hotel by c/h2.png";
import skillfrog1 from "./Skillfrog/sf1.png";
import skillfrog2 from "./Skillfrog/sf2.png";
import skillfrog3 from "./Skillfrog/sf3.png";
import skillfrog4 from "./Skillfrog/sf4.png";
import skillfrog5 from "./Skillfrog/sf5.png";
import skillfrog6 from "./Skillfrog/sf6.png";
import skillfrog7 from "./Skillfrog/sf7.png";
import skillfrog8 from "./Skillfrog/sf8.png";
import skillfrog9 from "./Skillfrog/sf9.png";
import skillfrog10 from "./Skillfrog/sf10.png";
import skillfrog11 from "./Skillfrog/sf11.png";
import thanawy1 from "./Thanawy/thanawy1.png";
import thanawy2 from "./Thanawy/thanawy2.png";
import thanawy3 from "./Thanawy/thanawy3.png";
import thanawy4 from "./Thanawy/thanawy4.png";
import thanawy5 from "./Thanawy/thanawy5.png";
import thanawy6 from "./Thanawy/thanawy6.png";
import thanawy7 from "./Thanawy/thanawy7.png";

export const assets = {
  me,
  homeproject1,
  home2project1,
  nfcproject1,
  singleproject1,
  listproject1,
  tableproject1,
  finder1,
  finder2,
  finder3,
  hotel1,
  hotel2,
  hotel3,
  skillfrog1,
  skillfrog2,
  skillfrog3,
  skillfrog4,
  skillfrog5,
  skillfrog6,
  skillfrog7,
  skillfrog8,
  skillfrog9,
  skillfrog10,
  skillfrog11,
  thanawy1,
  thanawy2,
  thanawy3,
  thanawy4,
  thanawy5,
  thanawy6,
  thanawy7,
};

export const projects = [
  {
    id: 1,
    num: "01",
    title: "NFC Attendance Management System",
    subtitle: "Enterprise Personnel Tracking Platform",
    descriptionCard:
      "A smart attendance and employee management system using NFC cards, with real-time tracking and analytics dashboards.",
    description:
      "A full-scale enterprise personnel management and attendance platform powered by NFC technology for fast, contactless check-in. The system delivers real-time attendance tracking, automated daily and monthly analytics, and performance insights through interactive dashboards. Each employee is assigned a dedicated profile featuring personal records, complete visit history, and detailed activity timelines. Built with a scalable full-stack architecture, the platform includes advanced search, reporting tools, role-based administration, and centralized workforce monitoring to streamline organizational operations and decision-making.",
    tech: [
      "React",
      "Firebase",
      "Cloud Firestore",
      "Firebase Auth",
      "NFC Technology",
    ],
    category: "fullstack",
    year: "2026",
    images: [
      homeproject1,
      home2project1,
      nfcproject1,
      singleproject1,
      listproject1,
      tableproject1,
    ],
    links: ["https://shabab-lake.vercel.app/", "https://primary-1.vercel.app/"],
    github: "#",
  },
  {
    id: 2,
    num: "02",
    title: "Finder | Contractors - Homepage",
    subtitle: "Front-End Search Platform",
    descriptionCard:
      "Interactive front-end platform for discovering and exploring local services with a smooth, user-friendly experience.",
    description:
      "Finder is a fully front-end web application built with HTML, CSS, and JavaScript that allows users to discover and browse local services through a clean, modern interface. It features advanced search filters, categorized service listings, dynamic project cards, and an expert recommendations section. The UI also includes theme switching and multiple call-to-action elements to enhance user engagement. The project focuses on simulating a real-world service marketplace experience using only client-side technologies.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    year: "2025",
    images: [finder1, finder2, finder3],
    links: ["https://felopateershokry.github.io/html-css-js-finder/"],
    github: "#",
  },
  {
    id: 3,
    num: "03",
    title: "Hotel Management System",
    subtitle: "Console-Based System (C Language)",
    descriptionCard:
      "Console-based hotel management system for handling bookings, customers, and billing efficiently.",
    description:
      "The Hotel Management System is a console-based application developed in C that manages core hotel operations such as room booking, check-in/check-out, customer records, and billing. It uses file handling for data storage and supports role-based access (admin & receptionist). The system provides a structured workflow to improve hotel operation efficiency through a simple yet powerful command-line interface.",
    tech: ["C Language"],
    category: "backend",
    year: "2024",
    images: [hotel1, hotel2, hotel3],
    links: ["https://github.com/Assr05/Hotel-Management-System"],
    github: "https://github.com/Assr05/Hotel-Management-System",
  },
  {
    id: 4,
    num: "04",
    title: "SkillFrog LMS",
    subtitle: "Full-Stack Learning Management System (Java)",
    descriptionCard:
      "Scalable full-stack LMS platform enabling role-based course management, learning workflows, and automated certification.",

    description:
      "SkillFrog LMS is a robust full-stack learning management system built with Java, designed to simulate a real-world educational platform with strict role-based architecture. It supports three distinct user roles: Admin, Instructor, and Student, each with tailored permissions and workflows. Instructors can create and manage courses, structure lessons, and integrate quizzes at lesson level while monitoring student engagement and course performance through insights and enrollment data. Admins oversee the platform by reviewing, approving, or rejecting submitted courses to maintain content quality and consistency. Students have access only to approved courses, where they can enroll, track progress, complete assessments, and receive automatically generated certificates upon successful completion. The system emphasizes scalability, modular design, and real-world LMS behavior, reflecting production-level backend and platform logic.",
    tech: [
      "Java (Core)",
      "Java Swing / AWT",
      "Object-Oriented Programming",
      "File Handling",
      "GUI Design",
    ],
    category: "fullstack",
    year: "2025",

    images: [
      skillfrog1,
      skillfrog2,
      skillfrog3,
      skillfrog4,
      skillfrog5,
      skillfrog6,
      skillfrog7,
      skillfrog8,
      skillfrog9,
      skillfrog10,
      skillfrog11,
    ],

    links: ["https://github.com/felopateershokry/Lab-8"],

    github: "https://github.com/felopateershokry/Lab-8",
  },
  {
    id: 5,
    num: "05",
    title: "Church Service Management System",
    subtitle: "Multi-Role Data Management Platform",

    descriptionCard:
      "Large-scale role-based management system for organizing church service data across multiple groups, users, and departments.",

    description:
      "This is a comprehensive data management platform built to organize the full service structure of St. Abanob Church (Al Mandara), covering both boys’ and girls’ ministries. The system manages a complex hierarchy of 9 roles, including Admin, Boys Administrator, Girls Administrator, and educational stages for both genders across First Secondary, Second Secondary, and Third Secondary levels. It centralizes data for servants, service groups, and members, enabling structured tracking of attendance, service distribution, and organizational hierarchy. The platform is designed to handle large-scale ministry data with role-based access control, structured dashboards, and efficient data visualization to support decision-making and service coordination.",

    tech: [
      "React",
      "Firebase",
      "Cloud Firestore",
      "Firebase Auth",
      "Role-Based Access Control",
    ],

    category: "fullstack",
    year: "2025",

    images: [
      thanawy1,
      thanawy2,
      thanawy3,
      thanawy4,
      thanawy5,
      thanawy6,
      thanawy7,
    ],

    links: ["https://church-xi-seven.vercel.app/"],

    github: "#",
  },
  {
    id: 6,
    num: "06",
    title: "Blog API System",
    subtitle: "Content Management Backend",
    descriptionCard:
      "Backend system for blogs with authentication, CRUD posts, and admin control.",
    description:
      "Backend system for blogs with authentication, CRUD posts, and admin control.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    category: "backend",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
    link: "#",
    github: "#",
  },
  {
    id: 7,
    num: "07",
    title: "Task Manager App",
    subtitle: "Productivity Tool",
    descriptionCard:
      "Task management app with drag & drop, deadlines, and team collaboration.",
    description:
      "Task management app with drag & drop, deadlines, and team collaboration.",
    tech: ["React", "Redux", "Node.js"],
    category: "fullstack",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    link: "#",
    github: "#",
  },
  {
    id: 8,
    num: "08",
    title: "Weather App",
    subtitle: "Live Weather Forecast",
    descriptionCard: "Weather app with geolocation and real-time API data.",
    description:
      "Weather app with geolocation and real-time API data for forecasts.",
    tech: ["React", "API", "CSS3"],
    category: "frontend",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?w=800&h=600&fit=crop",
    link: "#",
    github: "#",
  },
  {
    id: 9,
    num: "09",
    title: "DevFlow SaaS Platform",
    subtitle: "Multi-Feature Developer Ecosystem",
    descriptionCard:
      "Comprehensive SaaS platform for developers with real-time collaboration, analytics, and CI/CD simulation.",
    description:
      "DevFlow is a full-scale SaaS platform built for developers to manage projects, collaborate in real-time, track tasks, and deploy applications. It includes authentication, workspace management, team roles, real-time notifications, analytics dashboard, and CI/CD pipeline simulation. The system is designed with scalability in mind using a microservices-inspired backend architecture and a highly responsive frontendvksjlavbklajvbjkdv dkjv kadj bvkdfb vfmd vm,vjkfdsb ekbjl erbl UI.",

    longDescription: [
      "Built as a production-grade SaaS platform targeting developer teams and startups.",
      "Includes real-time collaboration using WebSockets for live updates.",
      "Advanced role-based access control (Admin / Member / Viewer).",
      "Integrated analytics dashboard showing project performance and activity logs.",
      "CI/CD simulation panel for deployment tracking and build history.",
    ],

    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Redis", "Docker"],

    category: "fullstack",
    year: "2025",

    // 👇 MULTIPLE IMAGES
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1200",
    ],

    link: "#",
    github: "#",
  },
];

export const skills = {
  languages: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"],

  frontend: [
    "React",
    "Next.js",
    "Redux",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Responsive Design",
  ],

  backend: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],

  databases: ["MongoDB", "MySQL", "Database Design"],

  computerScience: [
    "OOP",
    "Data Structures",
    "Algorithms",
    "Problem Solving",
    "System Design",
  ],

  tools: ["Git", "GitHub", "Postman", "VS Code"],
};