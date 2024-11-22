import htmlpng from "../assets/html.png"
import csspng from "../assets/css.png"
import jspng from "../assets/js.png"
import reactpng from "../assets/react.svg"
import bootstrappng from "../assets/bootstrap.png"
import gitpng from "../assets/git.png"
import githubpng from "../assets/github.png"
import netlifypng from "../assets/netlify.png"
import postmanpng from "../assets/postman.png"
import reduxpng from "../assets/redux.svg"
import vite from "../assets/vite.png"
import tailwindpng from "../assets/tailwind.png"
import typescriptpng from "../assets/typescript.svg"
import next from "../assets/next.png"
import mongo from "../assets/mongo.png"
import node from "../assets/node.png"
import express from "../assets/express.png"
import chakra from "../assets/chakra.jpg"
import material from "../assets/material.png"


const Skills = () => {
    const skills = [
        { img: htmlpng, name: 'HTML' },
        { img: csspng, name: 'CSS' },
        { img: jspng, name: 'JS' },
        { img: typescriptpng, name: 'TypeScript' },
        { img: tailwindpng, name: 'Tailwind' },
        { img: bootstrappng, name: 'Bootstrap' },
        { img: reactpng, name: 'React' },
        { img: next, name: 'Next.js' },
        { img: vite, name: 'Vite' },
        { img: githubpng, name: 'GitHub' },
        { img: gitpng, name: 'Git' },
        { img: reduxpng, name: 'Redux' },
        { img: postmanpng, name: 'Postman' },
        { img: netlifypng, name: 'Netlify' },
        { img: mongo, name: 'MongoDB' },
        { img: node, name: 'Node.js' },
        { img: express, name: 'Express.js' },
        { img: chakra, name: 'ChakraUI' },
        { img: material, name: 'MaterialUI' }
    ];
    return (
        <section id="skills" className='skills-section w-full mx-auto flex flex-col items-center py-10'>
            <h1 className={`text-center m-3 mb-10 text-4xl font-bold `}>Skills</h1>
            <p className='p-2 text-center'>Here are some of my skills on which I have been working on for the past 1 years.</p>
            <div className='skills w-4/5 p-4 mt-10 mx-auto flex flex-wrap justify-center items-center border rounded-3xl border-slate-400 gap-4 shadow-md'>
            {skills.map((skill, index) => (
                    <div key={index} className='skills-container py-2 px-5 border border-slate-400 rounded-2xl md:min-w-32 w-36 h-16 flex justify-center items-center gap-2'>
                        <img src={skill.img} alt={skill.name} width={35} />
                        <p className='font-semibold'>{skill.name}</p>
                    </div>
                ))}
              
              
            </div>

        </section>
    )
}

export default Skills
