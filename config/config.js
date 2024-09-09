import profile from './profile.png';
import { faJava, faGit, faGithub, faReact, faNodeJs, faPython, faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faNetworkWired, faProjectDiagram, faLeaf, faCogs } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Khushi Saxena",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Work Experience",
      link: "#work",
    },
    {
      title: "Technical Skills",
      link: "#skills"
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Achievements",
      link: "#achievements"
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
  ],
}
export const intro = {
  title: "Hey, I'm Khushi",
  description: "SDE Intern @Walmart'24  ||  QAE Intern @Amazon'23  ||  Harvard WECode Scholar'23  ||  Ericsson Empowering Girl Scholar  ||  Mentee at Women In Technology  ||  FFE Amazon Scholar'21  ||  CSE Junior at IIIT Vadodara 🚀",
  image: profile.src,
  buttons: [
    {
      title: "📞 Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "👩‍💻 My Resume",
      link: "https://drive.google.com/file/d/1wERlK2gcdMf4hX8t1x_MkK3DWfLzF3ZN/view?usp=sharing",
      isPrimary: true,
    },
  ],
}

export const about = {
  title: "About Me",
  description: [
    "I am pursuing B.Tech in Computer Science Engineering from Indian Institute of Information Technology, Vadodara. I am a passionate learner and a tech enthusiast. I love to explore new technologies and work on projects that can make a difference in the world.",
    "I recently completed my internship as a Software Developer Intern at Walmart Global Tech where I worked on a project based on Frontend Development and Backend Integration. I have also worked as a Quality Assurance Intern at Amazon where I worked on UI Automation Testing.",
    "Apart from this, I love to dance and play badminton. I am also a part of the Dance Club of my college and have performed in various events.",
  ],
}

export const work = {
  title: "Work Experience",
  cards: [
    {
      title: "Software Developer Intern - WALMART GLOBAL TECH",
      description: [ 
        "Designed the performance meter to provide a quantifiable measure of user satisfaction based on MCQ responses, enhancing user feedback analysis.",
        "Developed a standardized MCQ feedback component, ensuring consistent and detailed user reviews, and successfully integrated it with the backend.",
        "Optimized the user interface for desktop and mobile devices, ensuring a seamless user experience across various platforms, and conducted comprehensive unit and integration testing for functionality and reliability.",
        "Tools and Technology: HTML, CSS, JavaScript, React.js, Rest, GraphQL",
      ],
      icons: null,
    },
    {
      title: "Quality Assurance Intern - AMAZON",
      description: [
        "Developed and executed automated test cases for Amazon BackOffice V2 using Java and Selenium.",
        "Enhanced data handling and performed manual testing to identify and troubleshoot defects.",
        "Collaborated with cross-functional teams and utilized Agile methodologies to deliver high-quality software solutions."
      ],  
      icons: null,
    }
  ],
}

export const skills = {
  title: "Technical Skills",
  items: [
    { name: "Java", icon: faJava },
    { name: "Python", icon: faPython },
    { name: "C", icon: faCogs },
    { name: "React", icon: faReact },
    { name: "HTML", icon: faHtml5 },
    { name: "CSS", icon: faCss3Alt },
    { name: "JavaScript", icon: faJs },
    { name: "NodeJS", icon: faNodeJs },
    { name: "GraphQL", icon: faProjectDiagram },
    { name: "Git", icon: faGit },
    { name: "GitHub", icon: faGithub },
    { name: "MySQL", icon: faDatabase },
    { name: "Selenium", icon: faLeaf },
    { name: "REST API", icon: faNetworkWired },
  ],
};


export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Heart Failure Prediction",
      description: [
        "Enhanced heart failure prediction models by optimizing hyperparameters and performing feature selection using Python, Scikit-learn, and LightGBM.",
        "Achieved 87.83% accuracy with Random Forest (all features) and KNN (top 5 features) among 8 supervised learning algorithms including Logistic Regression, Naive Bayes, SVM, Decision Tree, and XGBoost.",
      ],
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/khushiisaxena/Heart-Failure-Prediction",
        },
      ]
    },
    {
      title: "Crime Data Analysis and Visualisation",
      description: [
        "Imported, cleaned and analyzed crime data in India (2001-2012) using Python, Pandas, and NumPy to preprocess data and extract meaningful insights.",
        "Visualized crime trends with Matplotlib and Seaborn, creating plots for comprehensive analysis and insights.",
      ],
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/khushiisaxena/Crime-Data-Analysis-and-Visualization",
        },
      ]
    },
    {
      title: "IntelliFace - A Face Recognition-based Attendance System",
      description: [
        "Implemented a trained CNN for accurate facial feature recognition, utilizing Dlib for landmark detection and NumPy for efficient data manipulation.",
        "Managed attendance records with CSV files for seamless data management.",
      ],
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/khushiisaxena/Intelliface",
        },
      ]
    },
  ],
}

export const achievements = {
  title: "Achievements",
  items: [
    {
      title: "Harvard WECode Scholar '23",
      description: "Selected as a scholar for the Women Engineers Code Conference, showcasing exceptional leadership and technical skills.",
    },
    {
      title: "Ericsson Empowering Girl Scholar",
      description: "Awarded the scholarship for academic excellence and contribution to the community.",
    },
    {
      title: "FFE Amazon Scholar",
      description: "Recognized as an Amazon scholar by Foundation For Excellence for outstanding academic performance.",
    },
    // Add more achievements and certificates here
  ],
};

export const contact = {
  title: "Get in touch ☎",
  description: "Please don't hesitate to reach out if you have any questions or would like to connect.",
  buttons: [
    {
      title: "Personal Email",
      link: "mailto:khushi24saxena@gmail.com",
      isPrimary: true,
    },
    {
      title: "Institute Email",
      link: "mailto:202151078@iiitvadodara.ac.in",
      isPrimary: true,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Khushi Saxena | Final Year Student | IIIT Vadodara",
}

export const links = {
  image: profile.src,
  title: "Khushi Saxena",
  description: "SDE Intern @Walmart'24  ||  QAE Intern @Amazon'23  ||  Harvard WECode Scholar'23  ||  Ericsson Empowering Girl Scholar  ||  Mentee at Women In Technology  ||  FFE Amazon Scholar'21  ||  CSE Junior at IIIT Vadodara 🚀",
  cards: [
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/khushi-saxena-a965ba22a/",
    },
    {
      title: "GitHub",
      link: "https://github.com/khushiisaxena",
    },
    {
      title: "Leetcode",
      link: "https://leetcode.com/heyykhushi/",
    },
  ]
}