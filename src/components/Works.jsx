import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaGithub, FaLink, FaEye } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import "swiper/css";

const worksData = [
  {
    title: "GENAI",
    description:
      "An educational platform for tests, courses, and learning. Empowering learners with interactive resources and personalized learning paths.",
    image: "./works/genai-company.png",
    githubLink: "https://github.com/genai",
    liveLink: "https://genai.com",
    detailsLink: "https://genai.com/details",
    tags: ["React", "UI/UX", "Learning"],
    techStack: ["React", "Node.js", "MongoDB"],
    projectDate: "August 2023",
  },
  {
    title: "Design",
    description:
      "A cutting-edge design platform focused on innovation and modern aesthetics, offering top-tier tools for creators and designers.",
    image: "./works/workers-online.png",
    githubLink: "https://github.com/design",
    liveLink: "https://design.com",
    detailsLink: "https://design.com/details",
    tags: ["UI/UX", "Design", "Web"],
    techStack: ["HTML", "CSS", "JavaScript"],
    projectDate: "July 2023",
  },
  {
    title: "Inspire",
    description:
      "An innovative structure platform designed to inspire creativity and problem-solving. Bridging the gap between design and engineering.",
    image: "./works/jtpfootwares.png",
    githubLink: "https://github.com/inspire",
    liveLink: "https://inspire.com",
    detailsLink: "https://inspire.com/details",
    tags: ["Engineering", "Creative", "Innovative"],
    techStack: ["React", "Express", "MySQL"],
    projectDate: "May 2023",
  },
  {
    title: "Create",
    description:
      "A platform to fuel your creative potential, offering tools to help you build, design, and showcase your work in new and exciting ways.",
    image: "./works/bookme.png",
    githubLink: "https://github.com/create",
    liveLink: "https://create.com",
    detailsLink: "https://create.com/details",
    tags: ["Creative", "Tools", "Design"],
    techStack: ["React", "Node.js", "MongoDB"],
    projectDate: "June 2023",
  },
  {
    title: "Develop",
    description:
      "Engineering excellence for scalable and sustainable digital solutions. Focused on building high-performance systems and frameworks.",
    image: "./works/todo.png",
    githubLink: "https://github.com/develop",
    liveLink: "https://develop.com",
    detailsLink: "https://develop.com/details",
    tags: ["Development", "System", "Engineering"],
    techStack: ["React", "JavaScript", "Firebase"],
    projectDate: "March 2023",
  },
];

const Works = () => {
  const [visibleWorks, setVisibleWorks] = useState(5); // Show 3 works initially

  const showMoreWorks = () => {
    setVisibleWorks((prev) => prev + 3); // Load 3 more works
  };

  return (
    <section className="w-full py-16  px-6 lg:px-40">
      <div className="container mx-auto px-4 md:px-6">
        <h3 className="text-lg md:text-lg font-Audiowide text-gray-900 text-center mb-8 md:mb-12">
          My Creative Works
        </h3>

        <p className="text-Audiowide md:px-6 text-xs  md:text-xs text-gray-600 test-xs md:mb-12  mb-12 ">
        My works reflect a blend of creativity, functionality, and cutting-edge technology aimed at solving real-world problems. From educational platforms like GENAI that provide interactive learning resources, to design-focused projects that inspire creativity and innovation, each project represents my commitment to excellence. Whether building scalable solutions with React, Node.js, or MongoDB, or enhancing user experience through meticulous UI/UX design, I always aim to deliver solutions that are not only technically robust but also intuitive and visually appealing. My portfolio showcases a diverse range of projects, each with its unique challenges and achievements, highlighting my versatility and passion for continuous learning and growth in the tech space
        </p>

        {/* Swiper for Mobile */}
        <div className="block md:hidden">
          <Swiper direction="vertical" spaceBetween={15} className="h-[70vh] overflow-hidden">
            {worksData.slice(0, visibleWorks).map((work, index) => (
              <SwiperSlide key={index}>
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition-all">
                  {/* Image */}
                  <div
                    className="h-60 w-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${work.image})`,
                      objectFit: "cover",
                    }}
                  ></div>

                  {/* Text Section */}
                  <div className="p-4 bg-white text-center">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{work.title}</h4>
                    <p className="text-xs text-gray-600 mb-4">{work.description}</p>

                    {/* Tags */}
                    <div className="flex justify-center flex-wrap mb-4">
                      {work.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-purple-100 text-purple-600 text-xs font-medium px-2 py-1 rounded-full mr-2 mb-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Technology Stack */}
                    <div className="flex justify-center flex-wrap mb-4">
                      {work.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded-full mr-2 mb-"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Date */}
                    <p className="text-xs text-gray-500 mb-2">{work.projectDate}</p>

                    {/* Action Links */}
                    <div className="flex justify-center space-x-4">
                      <a
                        href={work.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-purple-600 transform transition-colors"
                        title="View GitHub"
                      >
                        <FaGithub size={20} />
                      </a>
                      <a
                        href={work.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-purple-600 transform transition-colors"
                        title="Visit Live"
                      >
                        <FaLink size={20} />
                      </a>
                      <a
                        href={work.detailsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-purple-600 transform transition-colors"
                        title="Details"
                      >
                        <FaEye size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid for Larger Screens */}
        <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {worksData.slice(0, visibleWorks).map((work, index) => (
            <div
              key={index}
              className={`${
                index === 0
                  ? "md:col-span-2 lg:col-span-3 xl:col-span-2"
                  : "md:col-span-1 lg:col-span-1 xl:col-span-1"
              } group relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl`}
            >
              {/* Image */}
              <div
                className="h-56 w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${work.image})`,
                  objectFit: "cover",
                }}
              ></div>

              {/* Text Section */}
              <div className="p-6 bg-white">
                <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  {work.title}
                </h4>
                <p className="text-sm text-gray-600 mb-4">{work.description}</p>

                {/* Tags */}
                <div className="flex justify-center mb-4">
                  {work.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-600 text-xs font-medium px-3 py-1 rounded-full mr-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Technology Stack */}
                <div className="flex justify-center mb-4">
                  {work.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-full mr-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Date */}
                <p className="text-sm text-center text-gray-500 mb-4">{work.projectDate}</p>

                {/* Action Buttons */}
                <div className="flex justify-center space-x-6 group-hover:opacity-100 opacity-0  mb-4 transition-opacity duration-300">
                  <a
                    href={work.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-purple-600 transform transition-colors"
                    title="View GitHub"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={work.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-purple-600 transform transition-colors"
                    title="Visit Live"
                  >
                    <FaLink size={24} />
                  </a>
                  <a
                    href={work.detailsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-purple-600 transform transition-colors"
                    title="Details"
                  >
                    <FaEye size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-8 md:mt-12">
          {visibleWorks < worksData.length && (
            <button
              className="text-white bg-purple-600 hover:bg-purple-700 transition-colors py-2 px-4 rounded-full text-sm flex items-center justify-center mx-auto"
              onClick={showMoreWorks}
            >
              Show More <MdArrowForward size={16} className="ml-2" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;
