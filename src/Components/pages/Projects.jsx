import iticket from "../assets/iticket.png";
import gymsite from "../assets/gymsite.png";
import betapi from "../assets/betapi.png";
import boompari from "../assets/boompari.png";
import rysebet from "../assets/rysebet.png";
import azerqaz from "../assets/azerqaz.png";
import compsoteaz from "../assets/compstoreaz.png";
import todoapp from "../assets/todoapp.png";
import threads from "../assets/threads.png";
import coffeeme from "../assets/coffeeme.png";
import { useTypewriter } from "react-simple-typewriter";
import citroen from "../assets/citroen.png";

const cardData = [
  {
    title:
      "Developing and maintaining the landing page, admin panel and partner application for CoffeeMe using React, Redux Toolkit and Redux Toolkit Query.",
    image: coffeeme,
    demoLink: "https://coffeeme.app",
    githubLink: "https://github.com/muradbalayev/CoffeeMe---LandPage",
  },
  // {
  //   title: 'FullStack ThreadsClone w/React + Vite + ChakraUI + MongoDB + Socket.io',
  //   image: threads,
  //   demoLink: 'https://threadscloneproduction.onrender.com',
  //   githubLink: 'https://github.com/muradbalayev/ThreadsClone'
  // },
  // {
  //   title: 'iTicket.AZ w/React + Vite + Tailwind',
  //   image: iticket,
  //   demoLink: 'https://iticketclonebymourad.vercel.app',
  //   githubLink: 'https://github.com/muradbalayev/iticketclone'
  // },
  {
    title:
      "This React website incorporates login authentication, a dashboard featuring CRUD operations for managing users, posts, products, and more. Additionally, it includes a To-Do App integrated with an API. Username: emilys, Password:emilyspass",
    image: azerqaz,
    demoLink: "https://azerqaz.netlify.app",
    githubLink: "https://github.com/muradbalayev/Azerqaz",
  },
  // {
  //   title: 'FullStack ToDo App w/Next.JS + MongoDB',
  //   image: todoapp,
  //   demoLink: 'https://todo-app-mongo.vercel.app',
  //   githubLink: 'https://github.com/muradbalayev/TodoApp-Next.js-Mongo'
  // },
  // {
  //   title: 'Responsive Multi-Page Gym Website with HTML, CSS, and JS',
  //   image: gymsite,
  //   demoLink: 'https://muradsgymsite.netlify.app',
  //   githubLink: 'https://github.com/muradbalayev/GymSite'
  // },
  {
    title:
      "An innovative sports betting platform offering users access to live betting lines and real-time sports updates. The project emphasizes a sleek, responsive interface for seamless user interaction across devices.",
    image: boompari,
    demoLink: "https://boompari5.com/line",
    // githubLink: 'https://github.com/muradbalayev/WeatherApp-Vite-Tailwind'
  },
  {
    title:
      "A comprehensive betting platform API designed to streamline online betting operations with robust backend functionality. This project focuses on delivering real-time data for betting markets, including odds, live events, and results. ",
    image: betapi,
    demoLink: "https://betapi.bet",
    // githubLink: 'https://github.com/muradbalayev/AnabolicShop'
  },
  {
    title:
      "A dynamic online betting platform designed to provide users with a seamless and engaging experience. The platform features user-friendly navigation, secure account management, and real-time updates on betting opportunities.",
    image: rysebet,
    demoLink: "https://rysebet1.com/home",
    // githubLink: 'https://github.com/muradbalayev/Restaurant'
  },
  {
    title:
      "CompStore.az offers a dynamic and user-centric experience for purchasing electronics and tech products. Designed with seamless navigation and secure account management, the platform provides real-time updates on the latest gadgets, deals, and professional technical support. Our commitment is to ensure a smooth and engaging experience for all tech enthusiasts.",
    image: compsoteaz,
    demoLink: "https://compstore.az/",
    // githubLink: 'https://github.com/muradbalayev/Restaurant'
  },
  {
    title:
      "I worked on Citroën Turkey’s website to ensure a seamless and engaging user experience for visitors exploring car models and services. My responsibilities included implementing and optimizing various features using modern web development technologies and tools.",
    image: citroen,
    demoLink: "https://www.citroen.com.tr/",
    // githubLink: 'https://github.com/muradbalayev/Restaurant'
  },
];

const Projects = () => {
  const [text] = useTypewriter({
    words: ["..."],
    loop: {},
    typeSpeed: 300,
    deleteSpeed: 200,
    delaySpeed: 2000,
  });

  return (
    <section
      id="projects"
      className="projects-section w-full mx-auto flex flex-col items-center py-12 "
    >
      <h1 className={`text-center m-3 mb-3 text-4xl font-bold `}>Projects</h1>
      <div className="projects p-4 mt-10 mx-auto flex flex-col flex-wrap justify-center items-center gap-4">
        <div className="cards p-2 w-full flex lg:flex-row flex-col justify-center flex-wrap gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="card rounded-xl border border-slate-300 bg-[#f5f5f5] max-w-md p-4 flex flex-col justify-between items-center"
            >
              <div className="flex flex-col">
                <div className="card-img rounded-md max-w-92 h-56 border border-gray-400 shadow-md">
                  <img src={card.image} alt="site" />
                </div>
                <p className="card-title poppins font-medium text-center mt-5">
                  {card.title}
                </p>
              </div>
              <div className="card-text mt-2 w-full p-3 flex flex-col justify-between items-center gap-3">
                <div className="buttons flex gap-3">
                  <a target="_blank" rel="noreferrer" href={card.demoLink}>
                    <button className="poppins py-2 px-5 border hover:text-white hover:scale-105 hover:bg-blue-600 rounded-lg transition-all duration-300 ease-linear bg-white font-semibold">
                      Live
                    </button>
                  </a>
                  {card.githubLink && (
                    <a target="_blank" rel="noreferrer" href={card.githubLink}>
                      <button className="poppins py-2 px-5 group border hover:text-white hover:scale-105 hover:bg-black rounded-lg transition-all duration-300 ease-linear bg-white font-semibold">
                        Github
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <h1 className="text-2xl text-center font-bold mt-6">
          New projects coming soon{text}{" "}
        </h1>
      </div>
    </section>
  );
};

export default Projects;
