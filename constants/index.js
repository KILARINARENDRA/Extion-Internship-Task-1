import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js",
        icon: starbucks,
        iconBg: "#accbe1",
        
        points: [
          "Components: Understand the concept of components in React. Components are the building blocks of a React application, representing different parts of the user interface. Learn how to create functional and class components, and how to pass data between them using props.",

          "State and Lifecycle: Grasp the concept of state in React and how it enables components to manage and update their own data. Learn about lifecycle methods",
           "such as componentDidMount and componentDidUpdate, to handle side effects and manage the lifecycle of a component.",
        ],
    },
    {
        title: "Java Script",
        
        icon: tesla,
        iconBg: "#fbc3bc",
        
        points: [
           "Variables and Data Types:",

           "Learn how to declare variables using var", "let", "and const.",
           "Understand different data types such as strings, numbers, booleans, arrays, and objects.",
           "Practice variable assignment", "reassignment", "and basic operations.",
           "Control Flow and Functions:",
           
           "Grasp the concepts of conditional statements (if, else if, else) for decision-making.",
           "Understand loops (for, while) for repetitive tasks.",
           "Learn how to define and call functions", "including parameters and return values.",
           "DOM Manipulation:",
           
           "Explore the Document Object Model (DOM) to interact with HTML and CSS.",
           "Understand how to select and manipulate HTML elements using JavaScript.",
           "Practice handling user events (clicks, input changes) and modifying the DOM dynamically.",
        ],
    },
    {
        title: "CSS",
        
        icon: shopify,
        iconBg: "#b7e4c7",
       
        points: [
            "Selectors and Specificity:",

            "Understand how CSS selectors work. Selectors are used to target HTML elements and apply styles to them.",
            "Box Model:",

            "Familiarize yourself with the CSS box model, which describes how elements are structured on a web page.",
            "Flexbox and Grid:",

            "Master the basics of Flexbox and Grid layout. These are powerful layout tools that make it easier to create responsive and complex designs.",
        ],
    },
    {
        title: "Git and GitHub",
        
        icon: meta,
        iconBg: "#a2d2ff",
        
        points: [
           " Git Basics:",

            "Commits: Understand how to make commits to track changes in your project. Commits serve as snapshots of your project's state.",
            "Branching: Learn how to create and manage branches. Branching allows you to work on different features or fixes simultaneously without affecting the main codebase.",
           " GitHub Workflow:",

            "Forking: Fork a repository to create your own copy on GitHub. This is useful for contributing to open-source projects.",
            "Pull Requests: Learn how to create and submit pull requests to propose changes from your forked repository to the original project.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Online-Survey System',
        description: 'The Online Survey System using Java Swing and MySQL is a robust and user-friendly platform that allows users to create and participate in surveys efficiently. This system leverages Java Swing for its graphical user interface, providing a seamless and intuitive experience for both survey creators and respondents. MySQL is employed as the backend database to store survey details, user information, and responses securely.',
        link:'https://github.com/NARENDRA-642/OnlineSurveySystem',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Job_Selection using Python',
        description: 'Job selection using Python typically involves automating the process of applying for jobs scraping job listings from websites and analyzing data to match your skills with job requirements.',
        link: 'https://github.com/NARENDRA-642/Job_Selection',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Rental System',
        description: 'Certainly! A vehicle rental system in C++ is a program that manages the renting and returning of vehicles, such as cars, bikes, or trucks. It typically involves creating a system where users can browse available vehicles, rent a vehicle for a specified duration, and return it when they are done.',
        link: 'https://github.com/NARENDRA-642/Vehicle_rental',
    },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];