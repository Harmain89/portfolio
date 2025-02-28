import project1 from "../assets/projects/WeDissect/2.png";
import project2 from "../assets/projects/hairSaloon/1.png";
import project3 from "../assets/projects/HairColorSaloon/1.png";
import project4 from "../assets/projects/Portfolio/1.png";
import project5 from "../assets/projects/RestnCode/1.png";
import project6 from "../assets/projects/XtremeFitness/1.png";
import project7 from "../assets/projects/BackgroundRemoval/1.png";
import project8 from "../assets/projects/MernAuth/1.png";

export const HERO_CONTENT = `I'm a Senior Full-Stack Developer who loves building powerful Web Apps, I have experience with both frontend and backend, ensuring seamless user experiences with well-crafted designs. While I work across the stack, my true expertise lies in backend development, specializing in Laravel and the MERN stack to create high-performance, reliable systems that make a real impact.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 3+ years of professional experience, I have worked with a variety of technologies, including Laravel, React, Vue.js, Node.js, MySQL, PostgreSQL, and MongoDB, Deployments (AWS, GCP, Cpanels), etc. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Present",
    role: "Senior FULL-STACK DEVELOPER",
    company: "SOFTOSYNC",
    description: `Developed and maintained scalable and diverse web applications using Laravel and the MERN stack, ensuring high performance and seamless functionality. Focused on optimizing backend performance by enhancing speed, scalability, and API efficiency to improve overall user experience. Collaborated with cross-functional teams in remote environments, aligning development efforts with project goals and business requirements. Managed hosting environments, deployments, and server configurations, ensuring smooth and secure application operations. Led API development, integrating third-party services and implementing payment gateways for streamlined transactions. Troubleshot and resolved complex technical issues, ensuring system reliability and optimal performance.`,
    technologies: ["Laravel", "React", "Vue.js", "MongoDB", "Mysql", "Docker", "more"],
  },
  {
    year: "Jun 2023 - Dec 2023",
    role: "Mid FULL-STACK DEVELOPER",
    company: "Quick4Solutions",
    description: `I’ve worked on advanced Laravel projects and maintained web applications, making sure they run smoothly and perform at their best. I focused on improving backend systems by boosting speed, scalability, and database efficiency to create a better overall user experience. I collaborated with cross-functional teams in hybrid environments, keeping development aligned with project goals and client needs. Regularly communicating with clients, I provided updates, gathered feedback, and ensured the final product was user-centric and polished. I followed best practices for code quality, security, and documentation to build solutions that are easy to maintain and scale. When technical issues came up, I took the lead in troubleshooting and debugging, ensuring everything stayed reliable and performed optimally.`,
    technologies: ["Laravel", "Codeigniter", "Mysql", "Web APIs", "Deployment", "more"],
  },
  {
    year: "Jan 2022 - Jun 2023",
    role: "JUNIOR BACK END DEVELOPER",
    company: "SOFTOLOGICS",
    description: `At Softologics, I embarked on my professional journey by developing and maintaining web applications using Laravel and CodeIgniter. I collaborated with senior developers, assisting in coding, debugging, and testing applications, which honed my problem-solving skills. My role involved optimizing backend performance to ensure seamless functionality and enhancing user experience. Additionally, I participated in team meetings and contributed to project planning and execution, gaining valuable insights and experience in full-stack development.`,
    technologies: ["Laravel", "Codeigniter", "Frontend", "Mysql", "Web APIs", "more"],
  },
];

export const PROJECTS = [
  {
    title: "WeDissect - KYC Saas",
    image: project1,
    description: "WeDissect is an advanced background screening and identity verification platform designed to provide fast, reliable, and data-driven insights. Operating on a pay-as-you-go model, it offers businesses and individuals a seamless way to conduct risk assessments, verify identities, and analyze critical data in real time. With AI-powered fraud detection, comprehensive KYC analysis, and global coverage, WeDissect ensures accuracy and efficiency in every search. The platform features real-time mobile lookups, company risk screening, ID scanning, and forensic document analysis, all integrated into a well-illustrated performance dashboard. Whether it’s verifying individuals, screening businesses, or enhancing due diligence processes, WeDissect delivers a secure and scalable solution for informed decision-making.",
    technologies: ["Laravel", "Mysql", "Nodejs", "Express", "Pupeeter", "Zignsec", "GCP", "more"],
    git: false,
    gitLink: '',
    siteLink: 'https://www.wedissect.com/',
  },
  {
    title: "BG Removal - Remove Image Backgrounds for Free",
    image: project7,
    description: "Easily remove backgrounds from images with high accuracy and quality—all for free! Our AI-powered tool makes background removal effortless, whether for social media, e-commerce, or personal use. Just upload your image, let our system work its magic, and download your new background-free picture in seconds.",
    technologies: ["React", "MongoDB", "Express", "Clerk", "OAuth", "clipdrop-api", "Vercel", "more"],
    git: false,
    gitLink: '',
    siteLink: 'https://background-removal-liart.vercel.app/',
  },
  {
    title: "InTheHairSaloon - Appointment System",
    image: project2,
    description: "This website is for In The Hair DMCC, a premium barber shop located in Jumeirah Lakes Towers (JLT), Dubai. The site showcases the shop’s services, including haircuts, beard trims, facials, head massages, hair treatments, and nail care for men and kids. It emphasizes high-quality grooming, affordability, and a professional team that ensures customers look their best. The website also provides an overview of the salon’s experienced barbers, its long-standing reputation since 2012, and an easy way to book appointments. It serves as an online presence for the business, helping customers explore services, meet the team, and schedule their next visit.",
    technologies: ["Laravel", "Mysql", "Deployment", "Calender Lib.", "more"],
    git: false,
    gitLink: '',
    siteLink: 'https://inthehairsalon.com/saloon/',
  },
  {
    title: "HairColorDrop - Hair Stylist Hairing System",
    image: project3,
    description: "HairColorDrop is an innovative online platform that connects clients with professional hair colorists, offering a convenient and personalized approach to hair dyeing. Founded by Carolina Vengoechea, it bridges the gap between hairstylists and clients by providing virtual consultations, expert recommendations, and customized hair color kits delivered within 24 hours. Designed for those seeking salon-quality results at home or on the go, the platform makes hair coloring effortless, whether for a quick touch-up or a complete transformation. It also empowers hairstylists to earn flexibly without traditional salon constraints, fostering a community-driven space where expertise and creativity come together to redefine the hair coloring experience.",
    technologies: ["Laravel", "Mysql", "Deployment", "Leaftlet", "more"],
    git: false,
    gitLink: '',
    siteLink: 'https://haircolordrop.com/',
  },
  {
    title: "RestNCode - Bridging the Gap",
    image: project5,
    description: "RestNCode is a modern agency dedicated to providing high-quality, scalable, and cost-effective digital solutions. Unlike traditional agencies that come with high costs or freelancers who may lack the necessary resources, we offer a balanced approach—ensuring professionalism, affordability, and long-term business growth. Our expertise spans across custom software development, mobile and web applications, UI/UX design, backend development, API integrations, and much more. We focus on delivering high-performance, conversion-optimized solutions that help businesses scale efficiently while maintaining a seamless user experience.",
    technologies: ["Laravel", "Mysql", "digital ocean", "more"],
    git: false,
    gitLink: "",
    siteLink: "https://restncode.net/",
  },
  {
    title: "XtremeFitness - Elevating Fitness, Empowering Administration",
    image: project6,
    description: "XtremeFitness is designed to revolutionize fitness management by streamlining administrative tasks while enhancing user engagement. Our platform empowers gym owners, trainers, and fitness enthusiasts by providing seamless access to membership management, workout tracking, and business analytics. Whether you're an administrator managing operations or a member tracking progress, XtremeFitness ensures a smooth, user-friendly experience. Built with performance and security in mind, our system simplifies fitness administration so you can focus on what truly matters—health and growth.",
    technologies: ["Laravel", "Mysql", "Excel Integerated", "Deployment", "more"],
    git: false,
    gitLink: "",
    siteLink: "#",
  },
  {
    title: "Portfolio",
    image: project4,
    description: "The project showcases my work and skills using a stack that includes React, Express, Tailwind, Framer Motion, and NodeJs. Additionally, it features an admin panel built with Laravel and Livewire for managing content and settings.",
    technologies: ["React", "Tailwind", "Framer Motion", "Express", "Nodejs"],
    git: true,
    gitLink: 'https://github.com/Harmain89/portfolio',
    siteLink: 'https://portfolio-theta-ten-13.vercel.app/',
  },
  {
    title: "YouTube Like Videos Manager",
    image: "https://opengraph.githubassets.com/1/Harmain89/youtubeManager",
    description: "A Backend feature-rich web application that allows users to manage their favorite YouTube videos efficiently. Users can save, categorize, and search for videos in a personalized collection, making it easy to revisit important content anytime. The app provides a seamless experience with an intuitive UI, smooth video previews, and interactive features.",
    technologies: ["Node.js", "Express", "MongoDB", "YouTube API", "Backend Structure", "more"],
    git: true,
    gitLink: 'https://github.com/Harmain89/youtubeManager',
    siteLink: '',
  },
  {
    title: "MERN Authentication Project 🚀",
    image: project8,
    description: "A full-stack authentication system built with the MERN stack, featuring JWT authentication, password encryption, email verification, OTP-based validation, and Brevo email integration. Designed for secure and scalable user authentication with a modern UI/UX.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Cookies", "Brevo"],
    git: true,
    gitLink: 'https://github.com/Harmain89/MernAuth',
    siteLink: '',
  },
];

export const CONTACT = {
  heading: "Whether you have a project in mind, need help with your app, or just want to say hello, feel free to reach out! I'm always open to discussing new opportunities and collaborations.",
  heading2: "Interested in working together or just want to chat?",
  heading3: "Or check out my socials below:",
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
