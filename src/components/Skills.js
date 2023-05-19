import React from "react";
import {skills} from "../data/skills"

import atom from "../data/atom.png"
import css from "../data/css-3.png"
import html from "../data/html-5.png"
import bootstrap from "../data/bootstrap.png"
import git from "../data/git.png"
import github from "../data/github.png"
import javascript from "../data/javascript.png"
import mongodb from "../data/mongodb.png"
import nodejs from "../data/nodejs.png"
import wordpress from "../data/wordpress.png"
import express from "../data/express.png"

export default function Skills(){
    return(
        <div>

            <section id="skills" className="bg-inherit dark:bg-black">
      <div className="container px-5 py-10 mx-auto dark:bg-black">
        <div className="text-center mb-20">
          {/* <ChipIcon className="w-10 inline-block mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black dark:text-white text-left mb-2 ">
            Skills &amp; Technologies
          </h1>
          {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-black dark:text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p> */}
          <div className="flex flex-wrap skills-container skills-container1">
            <div className="skill-container">
              <img src={html} alt="skill-logo" className="skill-icons"/>
              <p className=" text-gray-500 dark:text-white font-semibold skill-desc">HTML</p>
            </div>

            <div className="skill-container">
            <img src={css} alt="skill-logo" className="skill-icons"/>
              <p className=" text-gray-500 dark:text-white font-semibold skill-desc">CSS</p>
            </div>

            <div className="skill-container flex flex-col">
            <img src={javascript} alt="skill-logo" className="skill-icons"  />
              <p className=" text-gray-500 dark:text-white font-semibold skill-desc"  >JAVASCRIPT</p>
            </div>

            <div className="skill-container">
            <img src={atom} alt="skill-logo" className="skill-icons"/>
              <p className=" text-gray-500 dark:text-white font-semibold skill-desc">REACT</p>
            </div>

            <div className="skill-container">
            <img src={bootstrap} alt="skill-logo" className="skill-icons"/>
              <p className=" text-gray-500 dark:text-white font-semibold skill-desc">BOOTSTRAP</p>
            </div>

            <div className="skill-container flex flex-col">
            <img src={mongodb} alt="skill-logo" className="skill-icons" />
              <p className=" text-gray-500 dark:text-white font-semibold skill-desc">MONGO DB</p>
            </div>

          </div>

          <div className="flex flex-wrap skills-container">

            <div className="skill-container">
            <img src={nodejs} alt="skill-logo" className="skill-icons"/>
              <p className=" text-gray-500 dark:text-white font-semibold skill-desc">NODE</p>
            </div>

            <div className="skill-container">
            <img src={git} alt="skill-logo" className="skill-icons"/>
              <p className=" text-gray-500 dark:text-white font-semibold skill-desc">GIT</p>
            </div>

            <div className="skill-container" style={{alignSelf: "center"}}>
            <img src={wordpress} alt="skill-logo" className="skill-icons"/>
              <p className=" text-gray-500 dark:text-white font-semibold skill-desc" >WP</p>
            </div>

            {/* <div className="skill-container">
            <img src={github} alt="skill-logo" className="skill-icons"/>
              <p className=" text-gray-500 dark:text-white font-semibold skill-desc">GITHUB</p>
            </div> */}
            {/* <div className="skill-container">
            <img src={express} alt="skill-logo" className="skill-icons"/>
              <p>EXPRESS</p>
            </div> */}


            
          </div>
        </div>
       
      </div>
    </section>
        </div>
    )
};

//  {/* <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
//           {skills.map((skill) => (
//             <div key={skill} className="p-2 sm:w-1/2 w-full ">
//               <div className="bg-gray-300 rounded flex p-4 h-full items-center dark:bg-gray-600">
//                 {/* <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" /> */}
//                 <span className="title-font font-medium text-gray-800 dark:text-white">
//                   {skill}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div> */}