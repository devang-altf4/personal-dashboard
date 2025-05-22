export type UserData = {
  id: string
  name: string
  title: string
  avatar: string
  bio: string
  location: string
  email: string
  phone: string
  github: string
  linkedin: string
  experience: {
    title: string
    company: string
    location: string
    period: string
    description: string
    technologies: string[]
  }[]
  education: {
    degree: string
    institution: string
    location: string
    period: string
    description: string
    achievements: string[]
  }[]
  skills: {
    category: string
    items: {
      name: string
      level: number
    }[]
  }[]
  goals: {
    shortTerm: string[]
    longTerm: string[]
  }
  hobbies: string[]
}

export const usersData: UserData[] = [
  {
    id: "devang",
    name: "Devang Gupta",
    title: "Full Stack Developer",
    avatar: "/images/devang-profile.png",
    bio: "I'm a passionate full-stack developer with 5 years of experience building web applications. I specialize in React, Node.js, and cloud technologies. I enjoy solving complex problems and creating intuitive user experiences. Currently focused on building scalable applications and exploring new technologies.",
    location: "San Francisco, CA",
    email: "maybedevang29@gmail.com",
    phone: "8369743238",
    github: "https://github.com/devanggupta",
    linkedin: "https://linkedin.com/in/devanggupta",
    experience: [
      {
        title: "Senior Frontend Developer",
        company: "Tech Innovations Inc.",
        location: "San Francisco, CA",
        period: "Jan 2021 - Present",
        description:
          "Lead the frontend development team in building a SaaS platform. Implemented new features, improved performance, and mentored junior developers.",
        technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
      },
      {
        title: "Full Stack Developer",
        company: "Digital Solutions LLC",
        location: "Oakland, CA",
        period: "Mar 2018 - Dec 2020",
        description:
          "Developed and maintained multiple web applications for clients across various industries. Worked on both frontend and backend development.",
        technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
      },
      {
        title: "Junior Web Developer",
        company: "WebCraft Studios",
        location: "San Jose, CA",
        period: "Jun 2016 - Feb 2018",
        description:
          "Started as an intern and was promoted to a full-time position. Worked on frontend development for client websites and internal tools.",
        technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP"],
      },
    ],
    education: [
      {
        degree: "M.S. in Computer Science",
        institution: "Stanford University",
        location: "Stanford, CA",
        period: "2014 - 2016",
        description:
          "Focused on web technologies and software engineering. Participated in research projects related to web performance optimization.",
        achievements: [
          "GPA: 3.8/4.0",
          "Published a paper on web performance optimization",
          "Teaching Assistant for Web Development course",
        ],
      },
      {
        degree: "B.S. in Computer Science",
        institution: "University of California, Berkeley",
        location: "Berkeley, CA",
        period: "2010 - 2014",
        description:
          "Completed coursework in algorithms, data structures, and software development. Participated in hackathons and coding competitions.",
        achievements: ["GPA: 3.7/4.0", "Dean's List for 6 semesters", "Won 2nd place in university hackathon"],
      },
    ],
    skills: [
      {
        category: "Frontend Development",
        items: [
          { name: "React", level: 95 },
          { name: "TypeScript", level: 90 },
          { name: "Next.js", level: 85 },
          { name: "HTML/CSS", level: 95 },
          { name: "Tailwind CSS", level: 90 },
        ],
      },
      {
        category: "Backend Development",
        items: [
          { name: "Node.js", level: 85 },
          { name: "Express", level: 80 },
          { name: "MongoDB", level: 75 },
          { name: "PostgreSQL", level: 70 },
          { name: "GraphQL", level: 80 },
        ],
      },
      {
        category: "Tools & Technologies",
        items: [
          { name: "Git", level: 90 },
          { name: "Docker", level: 75 },
          { name: "AWS", level: 70 },
          { name: "CI/CD", level: 80 },
          { name: "Jest", level: 85 },
        ],
      },
      {
        category: "Soft Skills",
        items: [
          { name: "Team Leadership", level: 85 },
          { name: "Communication", level: 90 },
          { name: "Problem Solving", level: 95 },
          { name: "Time Management", level: 80 },
          { name: "Mentoring", level: 85 },
        ],
      },
    ],
    goals: {
      shortTerm: [
        "Master advanced React patterns and performance optimization",
        "Contribute to open-source projects",
        "Complete AWS certification",
        "Improve knowledge of system design",
      ],
      longTerm: [
        "Lead a development team at a tech company",
        "Start a tech blog to share knowledge",
        "Develop a SaaS product",
        "Speak at tech conferences",
      ],
    },
    hobbies: ["Photography", "Hiking", "Reading tech books", "Playing guitar", "Cooking", "Travel", "Chess", "Running"],
  },
  {
    id: "sarah",
    name: "Sarah Chen",
    title: "UX/UI Designer",
    avatar: "/placeholder.svg?height=300&width=300",
    bio: "I'm a UX/UI designer with 6 years of experience creating user-centered digital experiences. I combine research, design thinking, and visual aesthetics to craft intuitive interfaces. I'm passionate about accessibility and inclusive design, ensuring products work for everyone.",
    location: "New York, NY",
    email: "sarah.chen@example.com",
    phone: "(555) 987-6543",
    github: "https://github.com/sarahchen",
    linkedin: "https://linkedin.com/in/sarahchen",
    experience: [
      {
        title: "Senior UX Designer",
        company: "Creative Digital Agency",
        location: "New York, NY",
        period: "Aug 2020 - Present",
        description:
          "Lead UX design for enterprise clients, conducting user research, creating wireframes, prototypes, and design systems. Collaborate with cross-functional teams to deliver cohesive user experiences.",
        technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "User Research"],
      },
      {
        title: "UI Designer",
        company: "TechStart Inc.",
        location: "Boston, MA",
        period: "May 2018 - Jul 2020",
        description:
          "Designed user interfaces for mobile and web applications. Created visual design systems and collaborated with developers to ensure design fidelity in implementation.",
        technologies: ["Sketch", "Adobe Creative Suite", "Zeplin", "CSS", "Design Systems"],
      },
      {
        title: "Junior Designer",
        company: "Design Works Studio",
        location: "Providence, RI",
        period: "Jan 2016 - Apr 2018",
        description:
          "Assisted senior designers with various projects including web design, branding, and print materials. Gained experience in client communication and project management.",
        technologies: ["Adobe Photoshop", "Illustrator", "InDesign", "HTML/CSS", "WordPress"],
      },
    ],
    education: [
      {
        degree: "M.F.A. in Graphic Design",
        institution: "Rhode Island School of Design",
        location: "Providence, RI",
        period: "2014 - 2016",
        description:
          "Focused on digital design, user experience, and interactive media. Thesis project explored accessible design for educational applications.",
        achievements: [
          "Graduated with honors",
          "Recipient of Design Excellence Award",
          "Featured in RISD annual showcase",
        ],
      },
      {
        degree: "B.F.A. in Visual Communication",
        institution: "Parsons School of Design",
        location: "New York, NY",
        period: "2010 - 2014",
        description:
          "Studied visual design fundamentals, typography, and digital media. Participated in collaborative projects with industry partners.",
        achievements: [
          "Dean's List all semesters",
          "Student Design Award winner",
          "Internship at leading design agency",
        ],
      },
    ],
    skills: [
      {
        category: "Design Tools",
        items: [
          { name: "Figma", level: 98 },
          { name: "Adobe XD", level: 90 },
          { name: "Sketch", level: 95 },
          { name: "Adobe Creative Suite", level: 85 },
          { name: "InVision", level: 80 },
        ],
      },
      {
        category: "Design Skills",
        items: [
          { name: "UI Design", level: 95 },
          { name: "UX Research", level: 90 },
          { name: "Wireframing", level: 95 },
          { name: "Prototyping", level: 90 },
          { name: "Design Systems", level: 85 },
        ],
      },
      {
        category: "Technical Skills",
        items: [
          { name: "HTML/CSS", level: 80 },
          { name: "JavaScript Basics", level: 65 },
          { name: "Responsive Design", level: 90 },
          { name: "Accessibility", level: 95 },
          { name: "Animation", level: 75 },
        ],
      },
      {
        category: "Soft Skills",
        items: [
          { name: "Communication", level: 95 },
          { name: "Collaboration", level: 90 },
          { name: "Presentation", level: 85 },
          { name: "Client Management", level: 80 },
          { name: "Project Management", level: 75 },
        ],
      },
    ],
    goals: {
      shortTerm: [
        "Expand expertise in design systems",
        "Learn more about motion design and micro-interactions",
        "Improve accessibility knowledge",
        "Mentor junior designers",
      ],
      longTerm: [
        "Lead a design team at a major tech company",
        "Speak at design conferences",
        "Publish articles on UX best practices",
        "Create a design course or workshop series",
      ],
    },
    hobbies: [
      "Digital illustration",
      "Photography",
      "Ceramics",
      "Urban sketching",
      "Yoga",
      "Reading",
      "Hiking",
      "Cooking",
    ],
  },
  {
    id: "michael",
    name: "Michael Rodriguez",
    title: "Data Scientist",
    avatar: "/placeholder.svg?height=300&width=300",
    bio: "I'm a data scientist with a background in statistics and machine learning. I specialize in building predictive models and extracting insights from complex datasets. With experience across finance, healthcare, and e-commerce, I enjoy translating data into actionable business strategies.",
    location: "Austin, TX",
    email: "michael.rodriguez@example.com",
    phone: "(555) 234-5678",
    github: "https://github.com/michaelrodriguez",
    linkedin: "https://linkedin.com/in/michaelrodriguez",
    experience: [
      {
        title: "Lead Data Scientist",
        company: "FinTech Solutions",
        location: "Austin, TX",
        period: "Mar 2021 - Present",
        description:
          "Lead a team of data scientists developing machine learning models for fraud detection and risk assessment. Implemented a real-time anomaly detection system that reduced fraud by 37%.",
        technologies: ["Python", "TensorFlow", "PyTorch", "SQL", "AWS", "Spark"],
      },
      {
        title: "Data Scientist",
        company: "Health Analytics Inc.",
        location: "Chicago, IL",
        period: "Jun 2018 - Feb 2021",
        description:
          "Developed predictive models for patient outcomes and healthcare resource allocation. Created dashboards and visualization tools for healthcare providers to monitor key metrics.",
        technologies: ["Python", "R", "Scikit-learn", "Tableau", "SQL", "Statistical Modeling"],
      },
      {
        title: "Data Analyst",
        company: "E-commerce Insights",
        location: "Seattle, WA",
        period: "Aug 2016 - May 2018",
        description:
          "Analyzed customer behavior and purchasing patterns to optimize marketing strategies. Built recommendation systems and A/B testing frameworks to improve conversion rates.",
        technologies: ["SQL", "Python", "R", "Excel", "Google Analytics", "A/B Testing"],
      },
    ],
    education: [
      {
        degree: "M.S. in Data Science",
        institution: "University of Texas at Austin",
        location: "Austin, TX",
        period: "2014 - 2016",
        description:
          "Specialized in machine learning and statistical modeling. Research focused on natural language processing and sentiment analysis for social media data.",
        achievements: [
          "GPA: 3.9/4.0",
          "Published research on NLP techniques",
          "Teaching Assistant for Machine Learning course",
        ],
      },
      {
        degree: "B.S. in Statistics",
        institution: "University of Washington",
        location: "Seattle, WA",
        period: "2010 - 2014",
        description:
          "Studied statistical methods, probability theory, and data analysis. Minor in Computer Science with focus on algorithms and data structures.",
        achievements: ["Summa Cum Laude", "Statistics Department Award", "Undergraduate Research Assistant"],
      },
    ],
    skills: [
      {
        category: "Programming Languages",
        items: [
          { name: "Python", level: 95 },
          { name: "R", level: 90 },
          { name: "SQL", level: 85 },
          { name: "Scala", level: 70 },
          { name: "Julia", level: 60 },
        ],
      },
      {
        category: "Machine Learning",
        items: [
          { name: "Scikit-learn", level: 90 },
          { name: "TensorFlow", level: 85 },
          { name: "PyTorch", level: 80 },
          { name: "Deep Learning", level: 85 },
          { name: "NLP", level: 75 },
        ],
      },
      {
        category: "Data Tools",
        items: [
          { name: "Pandas", level: 95 },
          { name: "Spark", level: 80 },
          { name: "Tableau", level: 85 },
          { name: "Power BI", level: 75 },
          { name: "AWS/Cloud", level: 80 },
        ],
      },
      {
        category: "Soft Skills",
        items: [
          { name: "Problem Solving", level: 95 },
          { name: "Data Storytelling", level: 90 },
          { name: "Team Collaboration", level: 85 },
          { name: "Project Management", level: 80 },
          { name: "Business Acumen", level: 85 },
        ],
      },
    ],
    goals: {
      shortTerm: [
        "Deepen expertise in deep learning and neural networks",
        "Improve cloud-based ML deployment skills",
        "Contribute to open-source data science projects",
        "Learn more about MLOps and model monitoring",
      ],
      longTerm: [
        "Lead data science initiatives at a Fortune 500 company",
        "Publish research papers in machine learning",
        "Develop innovative AI solutions for healthcare",
        "Mentor aspiring data scientists",
      ],
    },
    hobbies: [
      "Chess",
      "Rock climbing",
      "Playing piano",
      "Reading science fiction",
      "Hiking",
      "Home brewing",
      "Cycling",
      "Cooking",
    ],
  },
  {
    id: "priya",
    name: "Priya Patel",
    title: "Product Manager",
    avatar: "/placeholder.svg?height=300&width=300",
    bio: "I'm a product manager with 7 years of experience bridging the gap between business strategy and technical execution. I excel at understanding user needs and translating them into product features. I've led cross-functional teams to deliver successful products in fintech, e-commerce, and SaaS domains.",
    location: "Seattle, WA",
    email: "priya.patel@example.com",
    phone: "(555) 876-5432",
    github: "https://github.com/priyapatel",
    linkedin: "https://linkedin.com/in/priyapatel",
    experience: [
      {
        title: "Senior Product Manager",
        company: "Cloud Solutions Inc.",
        location: "Seattle, WA",
        period: "Feb 2020 - Present",
        description:
          "Lead product strategy and roadmap for enterprise SaaS platform. Collaborate with engineering, design, and marketing teams to deliver features that increased user engagement by 45% and reduced churn by 20%.",
        technologies: ["Product Strategy", "Agile/Scrum", "User Research", "Analytics", "Roadmapping", "A/B Testing"],
      },
      {
        title: "Product Manager",
        company: "E-commerce Platform",
        location: "Portland, OR",
        period: "Jul 2017 - Jan 2020",
        description:
          "Managed the shopping cart and checkout experience for an e-commerce platform serving 2M+ monthly users. Led initiatives that improved conversion rate by 15% and reduced cart abandonment by 22%.",
        technologies: ["User Journey Mapping", "Wireframing", "Data Analysis", "Jira", "Confluence", "User Testing"],
      },
      {
        title: "Associate Product Manager",
        company: "FinTech Startup",
        location: "San Francisco, CA",
        period: "Mar 2015 - Jun 2017",
        description:
          "Helped develop and launch a personal finance management app. Gathered user requirements, created product specifications, and worked closely with developers and designers throughout the product lifecycle.",
        technologies: ["Market Research", "Competitive Analysis", "User Stories", "Product Specs", "MVP Definition"],
      },
    ],
    education: [
      {
        degree: "M.B.A.",
        institution: "University of Washington",
        location: "Seattle, WA",
        period: "2013 - 2015",
        description:
          "Focused on technology management and entrepreneurship. Participated in product management workshops and startup competitions.",
        achievements: [
          "GPA: 3.8/4.0",
          "Winner of annual business plan competition",
          "Product Management Club President",
        ],
      },
      {
        degree: "B.S. in Information Systems",
        institution: "University of California, Davis",
        location: "Davis, CA",
        period: "2009 - 2013",
        description:
          "Studied the intersection of business and technology. Completed coursework in software development, database management, and business analysis.",
        achievements: [
          "Graduated with honors",
          "Technology Student Association leader",
          "Internship at major tech company",
        ],
      },
    ],
    skills: [
      {
        category: "Product Management",
        items: [
          { name: "Product Strategy", level: 95 },
          { name: "Roadmapping", level: 90 },
          { name: "User Stories", level: 95 },
          { name: "Prioritization", level: 90 },
          { name: "Go-to-Market", level: 85 },
        ],
      },
      {
        category: "Research & Analysis",
        items: [
          { name: "User Research", level: 90 },
          { name: "Market Analysis", level: 85 },
          { name: "Data Analysis", level: 80 },
          { name: "Competitive Analysis", level: 90 },
          { name: "A/B Testing", level: 85 },
        ],
      },
      {
        category: "Tools & Methodologies",
        items: [
          { name: "Agile/Scrum", level: 95 },
          { name: "Jira/Confluence", level: 90 },
          { name: "Product Analytics", level: 85 },
          { name: "Figma/Sketch", level: 75 },
          { name: "SQL Basics", level: 70 },
        ],
      },
      {
        category: "Soft Skills",
        items: [
          { name: "Leadership", level: 90 },
          { name: "Communication", level: 95 },
          { name: "Stakeholder Management", level: 90 },
          { name: "Problem Solving", level: 85 },
          { name: "Cross-functional Collaboration", level: 95 },
        ],
      },
    ],
    goals: {
      shortTerm: [
        "Enhance technical knowledge in AI/ML product applications",
        "Improve data analysis skills for product metrics",
        "Lead a major product launch from concept to market",
        "Develop expertise in enterprise product management",
      ],
      longTerm: [
        "Become a VP of Product at a tech company",
        "Mentor aspiring product managers",
        "Launch an innovative product that impacts millions of users",
        "Speak at product management conferences",
      ],
    },
    hobbies: [
      "Yoga",
      "Travel photography",
      "Cooking international cuisines",
      "Reading business books",
      "Hiking",
      "Meditation",
      "Podcasting",
      "Community volunteering",
    ],
  },
]

// Default user for backward compatibility
export const userData = usersData[0]
