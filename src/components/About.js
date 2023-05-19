import React from "react";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import me from "../data/me1.jpeg"
import { Link } from "react-router-dom";


export default function About(){
    return(
        <div className="">
           
        
        <section id="about" className="bg-inherit dark:bg-black " >
      <div className="container mx-auto flex px-10 pb-20 pt-28 md:flex-row flex-col items-center mr-26">
        <Slide top>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="about-title text-6xl mb-4 font-bold text-black dark:text-white">
            
            <br className="hidden lg:inline-block " />I bring ideas to life.
          </h1>
          <div >
           <p className="mb-4 leading-relaxed dark:text-white"> I am an ex-accountant who loves to bring ideas to reality through code.
            I first started coding in 2020. I was talking to my cousin who was into programming at the time, i was fascinated by the discussion we had and decided i was going to do some research.</p>
            <p className="mb-4 leading-relaxed dark:text-white"> While researching, <Link to="/aboutMe"> <span className="text-blue-600 "> read more... </span></Link></p>

           {/* <p className="mb-4 leading-relaxed dark:text-white"> I signed up for online courses, both free and paid and i put all that i had into these. i was coding at every chance i got. i was nothing short of awed by the power
            that was available to me through coding. I worked as an intern for months with a tech company that helps its clients build and maintain websites, webapps and mobile apps
            where I was able to learn even more about web development and all there is to builing a website from start to launch.</p>

            <p className="mb-4 leading-relaxed dark:text-white">With consistency, great tutors, sleepless nights, frustrating periods etc, I have come to grow as a developer.

            I am now seeking for a full-time role where i can contribute my skills and knowledge both in coding and business to help achieve organizational goals.</p>*/}
          </div> 
          <div className="flex justify-center">
         <button>
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-sm">
              Work With Me
            </a>
            </button>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-sm">
              See My Past Work
            </a>
          </div>
        </div>
        </Slide>
        <Zoom>
        <div className="lg:max-w-sm lg:w-1/2 md:w-1/2 profile-div">
          <img
            className="object-contain object-center rounded profile-img"
            alt="hero"
            src={me}
          />
        </div>
        </Zoom>
      </div>
    </section>
    </div>
    )
};