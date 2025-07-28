// src/data/projectData.js
import chatbot from "../../img/chat-bot.png";
import iot from "../../img/iotweather.png";
import portfolio from "../../img/portfolio.png";
import health from "../../img/health.png";
import snake from "../../img/snakeGame.png";

export const projectData = [
  {
    title: "BBIT Chatbot",
    description: "Built using Botpress, React, MongoDB, and Python. The chatbot helps answer college-related queries in real-time.",
    img: chatbot,
    tech: ["React", "Botpress", "MongoDB", "Python"],
    github: "https://github.com/vyomsagar/College-Website-Chatbot",
    live: "https://college-website-chatbot.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description: "Responsive React-based personal portfolio using Tailwind CSS and React Bootstrap.",
    img: portfolio,
    tech: ["React", "Tailwind", "Bootstrap"],
    github: "https://github.com/vyomsagar/Portfolio",
    live: "/",
  },
   {
    title: "Snake Game",
    description: "Classic snake game built using HTML, CSS, and JavaScript. Fully playable in-browser. Use Keybord to play",
    img: snake,
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/vyomsagar/SnakeGame",
    live: "https://snake-game-six-dun.vercel.app/",
  },
  {
    title: "Health News Website",
    description: "News web app fetching live health-related data from an API. Includes filters and bookmarking.",
    img: health,
    tech: ["React", "HTML", "JavaScript", "CSS"],
    github: "https://github.com/vyomsagar/health-news",
  },
 
   {
    title: "IoT Weather System",
    description: "Monitors weather using DHT11, rain sensor, and NodeMCU with real-time cloud dashboard and predictions.",
    img: iot,
    tech: ["IoT", "C++", "NodeMCU", "XAMPP"],
    github: "https://github.com/vyomsagar/College-Website-Chatbot",
  },
];
