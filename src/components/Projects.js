import React from "react";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import {projects} from "../data/projects"
// import pic from "../data/desk.jpg"
import {Link} from "react-router-dom";

export default function Project(){

    return(
        <div>
            
            <section id="projects" className="text-gray-400  body-font bg-inherit dark:bg-black">
                <div className="px-5 py-10  text-center ">
                  <Slide left>
                    <div className="flex flex-col w-full mb-10">
                         {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
                        <h1 className="sm:text-4xl text-3xl font-medium title-font  dark:text-white text-gray-900 text-left uppercase">
                            My portfolio
                        </h1>
                        {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            With skills and knowledge gained in several web technologies, from HTML to CSS, Javascript, React, Node.js, Express
                            MongoDB, tailwindcss, Redux, see below projects i have built with this knowledge.
                            
                        </p> */}
                    </div>
                   </Slide>

                   <Fade>
                    <div className="flex flex-wrap -m-4">
                        {projects.map((project) => (
                            <div className="sm:w-1/2 w-100 py-2 project-container">
                            
                                <a  href={project.link} key={project.image} className="sm:w-1/2 w-100 p-4 pt-0 mt-0">
                                    <div className="bg-black dark:bg-white mb-0 pb-0 title-font text-sm font-medium ">{project.title}</div>
                                    <div className="flex relative">
                                        <img   alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={project.image} />
                                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 fade-in-text">
                                            <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                                {project.subTitle}
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-white mb-3">
                                                {project.title}
                                            </h1>
                                            <p className="leading-relaxed text-yellow-200">{project.description}</p>
                                            {console.log(project.link)}
                                            <Link to={project.link}>
                                             more
                                            </Link>
                                        </div>
                                    </div>
                                </a>     
                            
                            </div>
                            
                            
                        ))}
                    </div>  
                  </Fade>     
      
                </div>
            </section>
    
        </div>
      
    )
};