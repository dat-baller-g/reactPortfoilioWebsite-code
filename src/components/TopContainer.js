import React from "react"
// import me from "../data/me1.jpeg"
// import { Link } from "react-router-dom";

export default function TopPage(){
    return(
        <div >
           
        
        <section id="topPage" className = "bg-[url('./data/img2.jpg')] dark:bg-[url('./data/desk1.jpg')] bg-center bg-150% dark:sm:bg-120% dark:bg-cover  dark:bg-top min-h-screen" >
      <div className="mx-auto flex px-10 pb-20 pt-28 md:flex-row flex-col items-center min-h-screen">
        <div className="titleContainer place-content-end ">
          <h5 className="title-txt font-bold text-gray-500 dark:text-white text-right mr-96 text-4xl dark:text-base"  id="title-txt">
            MOBOLAJI
            {/* <br className="hidden sm:inline-block" /> */}
          </h5>
         <div className="flex top-divider-container"><hr className="w-16 pb-0 dark:mb-12 dark:sm:mb-24 pt-0 dark:pt-15 mt-3 bg-gray-500 h-0.5 dark:h-0  dark:mt-10 top-divider"/></div> 
          <h5 className="title-txt  mb-4 font-bold text-gray-500 dark:text-white text-right pb-20 italic dark:font-normal">a software developer</h5> 
          {/* <button className="uppercase font-sans Raleway top-button dark:hidden">Scroll down</button> */}
          
        </div>
        {/* <div className="lg:max-w-sm lg:w-1/2 md:w-1/2 w-5/6 profile-div">
          <img
            className="object-contain object-center rounded profile-img"
            alt="hero"
            src={me}
          />
        </div> */}
      </div>
    </section>
    </div>
    )
};