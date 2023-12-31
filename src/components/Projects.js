// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Internships and Projects 
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-justify-center">
          Throughout my journey in ML and AI, I've delved into various projects spanning Computer Vision, Natural Language Processing, Signal Processing, and Reinforcement Learning. These hands-on experiences have provided me with practical insights into using ML and AI to address real-world problems.
          </p>
        </div>
        <div className="flex flex-wrap -m-20 ">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-full p-4">
              {/* <div className="border-4 border-gray-800 w-full sm:w-[608px]"> */}
              <div className="w-full sm:w-[600px] bg-gray-800 text-white text-center py-2 overflow-hidden">
                <h1 className="sm:text-lg title-font text-lg font-medium text-white underline">
                  {project.title}
                </h1>
              </div>
              <div className="flex relative w-full sm:w-[600px] h-[300px] overflow-hidden bg-gray-800">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center"
                  src={project.image}
                />
                
                <div className="px-8 py-10 relative z-10 w-full bg-gray-800 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm sm:text-base title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  {/* <h1 className="sm:text-lg title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1> */}
                  <p className="sm:text-base text-xs leading-relaxed">{project.description}</p>
                </div>
                </div>
              {/* </div> */}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}