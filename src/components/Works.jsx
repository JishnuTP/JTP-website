import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaGithub, FaLink, FaEye } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import "swiper/css";
import { worksData } from "../contants/WorkData";


const Works = () => {
  const [visibleWorks, setVisibleWorks] = useState(5); // Show 3 works initially

  const showMoreWorks = () => {
    setVisibleWorks((prev) => prev + 3); // Load 3 more works
  };

  return (
    <section className="w-full py-16  px-6 lg:px-40" id="work">
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
                    <p
  className="text-xs text-gray-600 md:font-Audiowide mb-4 line-clamp-3 overflow-hidden"
  style={{
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    overflow: 'hidden',
  }}
>
  {work.description}
</p>

                    {/* Tags */}
                    <div className="flex justify-center flex-wrap mb-4">
                      {work.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-purple-100 text-purple-600 text-xs font-medium px-2 py-0.5 rounded-full mr-2 mb-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Technology Stack */}
                    <div className="flex justify-center flex-wrap mb-4 ">
                      {work.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-0.5 rounded-full mr-2 mb-"
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
                        <FaGithub size={18} />
                      </a>
                      <a
                        href={work.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-purple-600 transform transition-colors"
                        title="Visit Live"
                      >
                        <FaLink size={18} />
                      </a>
                      <a
                        href={work.detailsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-purple-600 transform transition-colors"
                        title="Details"
                      >
                        <FaEye size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid for Larger Screens */}
        <div className="hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
  {worksData.slice(0, visibleWorks).map((work, index) => (
    <div
      key={index}
      className={`${
        index === 0
          ? "md:col-span-2 lg:col-span-3 xl:col-span-2"
          : "md:col-span-1 lg:col-span-1 xl:col-span-1"
      } group relative overflow-hidden rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg`}
    >
      {/* Image */}
      <div
        className="h-48 w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${work.image})`,
          objectFit: "cover",
        }}
      ></div>

      {/* Text Section */}
      <div className="p-4 bg-white">
        <h4 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-purple-600 transition-colors">
          {work.title}
        </h4>
        <p
  className="text-xs text-gray-600  mb-4 line-clamp-3 overflow-hidden"
  style={{
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 5,
    overflow: 'hidden',
  }}
>
  {work.description}
</p>
        {/* Tags */}
        <div className="flex justify-center flex-wrap gap-2 mb-3 ">
          {work.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-purple-100 text-purple-600 text-xs font-medium px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="flex justify-center flex-wrap gap-2 mb-3">
          {work.techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-0.5 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Date */}
        <p className="text-xs text-center text-gray-500 mb-3">
          {work.projectDate}
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
          <a
            href={work.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-purple-600 transition-colors"
            title="View GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={work.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-purple-600 transition-colors"
            title="Visit Live"
          >
            <FaLink size={20} />
          </a>
          <a
            href={work.detailsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-purple-600 transition-colors"
            title="Details"
          >
            <FaEye size={20} />
          </a>
        </div>
      </div>
    </div>
  ))}
</div>

        {/* Show More Button */}
        <div className="text-center mt-10 md:mt-10">
  {visibleWorks < worksData.length && (
    <button
      className="text-white bg-black hover:bg-purple-700 transition-colors py-1.5 px-3 rounded-full text-xs flex items-center justify-center mx-auto"
      onClick={showMoreWorks}
    >
      Show More <MdArrowForward size={14} className="ml-1" />
    </button>
  )}
</div>

      </div>
    </section>
  );
};

export default Works;
