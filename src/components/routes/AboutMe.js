import React from "react";
import me from "../../data/me1.jpeg"


export default function AboutMe(){
    return(
        <div>
           
        
        <section id="about" class = "bg-white dark:bg-black" >
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black dark:text-white">
            Hi, I'm Mobolaji.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <div >
           <p className="mb-4 leading-relaxed dark:text-white"> I am an ex-accountant who loves to bring ideas to reality through code.
            I first started coding in 2020. I was talking to my cousin who was into programming at the time, i was fascinated by the discussion we had and decided i was going to do some research.</p>
            <p className="mb-4 leading-relaxed dark:text-white"> While researching i reconfirmed that i had always had the passion for creating things
            and to discover i could do this through software development and without a CS degree, i knew there and then that I wanted to be a Software Developer.</p>

           <p className="mb-4 leading-relaxed dark:text-white paragraph"> I signed up for online courses, both free and paid and i put all that i had into these. i was coding at every chance i got. i was nothing short of awed by the power
            that was available to me through coding. I worked as an intern for months with a tech company that helps its clients build and maintain websites, webapps and mobile apps
            where I was able to learn even more about the life cycle of web development which includes the processes involved from inception to launch of a website.</p>

            <p className="mb-4 leading-relaxed dark:text-white">With consistency, great tutors, sleepless nights, frustrating periods etc, I have come to grow as a developer.

            I am now seeking for a full-time role where i can contribute my skills and knowledge both in coding and business to help achieve organizational goals.</p>
          </div>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-sm lg:w-1/2 md:w-1/2 w-5/6">
          <img
            className="object-contain object-center rounded profile-img"
            alt="hero"
            src={me}
          />
        </div>
      </div>
    </section>
    </div>
    )
}
