import React from "react"
import { testimonials } from "../data/testimonials"

export default function Testimonials(){
    return(
        <div className="container bg-white dark:bg-black">
           
            <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center bg-white dark:bg-black">
        {/* <UsersIcon className="w-10 inline-block mb-4" /> */}
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Client Testimonials
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-500 bg-opacity-40 p-8 rounded dark:bg-gray-600">
                {/* <TerminalIcon className="block w-8 text-gray-500 mb-4" /> */}
                <p className="leading-relaxed mb-6 text-gray-800 dark:text-white">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-800 dark:text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-sm uppercase text-gray-800 dark:text-white">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>
    )
};