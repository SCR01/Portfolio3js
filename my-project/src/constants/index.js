/* eslint-disable no-undef */
import { gssoc, hacktoberfest } from "../assets/images";
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
    typescript,
    python // Added Python icon import
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
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
        imageUrl: python, // Added Python to skills
        name: "Python",
        type: "Backend",
    }
];

export const experiences = [
 
    {
        title: "React.js Developer",
        company_name: "Hacktoberfest 2024",
        icon: hacktoberfest,
        iconBg: "#4CAF50", // Green color for Hacktoberfest
        date: "October 2024",
        points: [
            "Contributed as a React.js developer, enhancing the UI in an EdTech application with animations and added sections.",
            "Developed a simple e-commerce platform in the Master-web-dev project, performing code reviews and optimizing performance.",
            "Implemented backend caching and RESTful APIs for scalable performance across projects."
        ],
    },
    {
        title: "MERN Developer",
        company_name: "GirlScript Summer of Code",
        icon: gssoc,
        iconBg: "#FFB84D", // Lighter shade of orange
        date: "March 2024 - May 2024 & Extd.",
        points: [
            "Served as a MERN developer, contributing to projects including a Fitness application with sections for buying/selling products and location-based gym filtering.",
            "Enhanced UI in GitFinder, improving usability, and set up Firebase with backend security for a Gaming application.",
            "Collaborated with teams, resolving issues across repositories and optimizing backend functionality."
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: 'mailto:sharadreddy11@gmail.com',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/SCR01',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sharad-chandra-reddy-b0737a231/',
    }
];

export const projects = [
    {
        iconUrl: snapgram,  // Add appropriate icon URL here
        theme: 'btn-back-blue', // Set your preferred theme
        name: 'Flood Guard:Yi-IDS4',
        description: 'Developed a Flood Guard system to give alert from the flood in various areas all over the country.',
        link: 'https://github.com/SCR01/TeamPrithvi_Yi-IDS4-main',
    },
    {
        iconUrl: summiz,  // Add appropriate icon URL here
        theme: 'btn-back-red', // Set your preferred theme
        name: 'Flipkart Grid',
        description: 'GRID 6.0 is a project that detects fruits and vegetables in images and analyzes their freshness. Additionally, it processes non-fruit/vegetable images using OCR to extract details such as product name, brand, pack size, manufacturing date, expiry date, and MRP. The project utilizes a Flask backend, a MobileNet-based object detection model, a fine-tuned freshness detection model, and AWS OCR for text extraction.',
        link: 'https://github.com/SCR01/FLIPKART-GRID-main',
    },
    {
        iconUrl: car,  // Add appropriate icon URL here
        theme: 'btn-back-orange', // Set your preferred theme
        name: 'Car Marketplace',
        description: 'Built a car marketplace application for users to buy and sell vehicles, streamlining the car-buying process.',
        link: 'https://github.com/SCR01/CarMarketPlace',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-green',
        name: 'Amazon Clone',
        description: 'This is a simple Amazon clone project built using HTML, CSS, and JavaScript. The project simulates an Amazon-like user interface with various pages for product browsing, user login/signup, and a shopping cart. This is a front-end-only project and serves as a practice for creating static web pages with HTML, CSS, and JavaScript',
        link: 'https://github.com/SCR01/Amazon_Clone',
    }
 
];
