import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Pala Tej Deep.
          </h1>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          I'm passionate about creating AI and ML applications.
          </h1>
          <p className="mb-8 leading-relaxed text-justify">
          I'm Pala Tej Deep, a Final Year Undergraduate at SUTD, majoring in Computer Science and Design. My unwavering passion for Artificial Intelligence and Machine Learning drives my journey. Proficient in Java and Python, I specialize in machine learning, data analytics, and visualization, while also excelling in Android and Web app development. With a strong mathematical foundation and deep knowledge of AI and ML algorithms, I confidently tackle complex challenges.
          </p>
          <p className="mb-8 leading-relaxed text-justify">
          My meticulous nature extends to communication and teamwork, making me an asset in collaborative environments. I value excellence and continuous improvement in all my professional pursuits. Let's connect and explore opportunities to leverage AI and ML for innovative solutions together.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="./profile_pic.jpg"
          />
        </div>
      </div>
    </section>
  );
}