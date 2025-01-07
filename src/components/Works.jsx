import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // No Pagination or Navigation
import { FaGithub, FaLink, FaEye } from "react-icons/fa";
import "swiper/css";

const worksData = [
  {
    title: "GENAI",
    description: "Educational platform to take test, course, Learn and grow",
    image: "./works/genai-company.png",
    githubLink: "https://github.com/genai",
    liveLink: "https://genai.com",
    detailsLink: "https://genai.com/details",
  },
  {
    title: "Design",
    description: "Creative architecture",
    image: "./works/workers-online.png",
    githubLink: "https://github.com/design",
    liveLink: "https://design.com",
    detailsLink: "https://design.com/details",
  },
  {
    title: "Inspire",
    description: "Innovative structures",
    image: "./works/jtpfootwares.png",
    githubLink: "https://github.com/inspire",
    liveLink: "https://inspire.com",
    detailsLink: "https://inspire.com/details",
  },
  {
    title: "Create",
    description: "Modern designs",
    image: "./works/bookme.png",
    githubLink: "https://github.com/create",
    liveLink: "https://create.com",
    detailsLink: "https://create.com/details",
  },
  {
    title: "Develop",
    description: "Engineering excellence",
    image: "./works/todo.png",
    githubLink: "https://github.com/develop",
    liveLink: "https://develop.com",
    detailsLink: "https://develop.com/details",
  },
];

const Works = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h3 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Works
        </h3>

        {/* Swiper for Mobile */}
        <div className="block md:hidden">
          <Swiper
            direction="vertical"
            spaceBetween={20}
            className="h-[80vh]"
          >
            {worksData.map((work, index) => (
              <SwiperSlide key={index}>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  {/* Image */}
                  <div
                    className="h-72 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${work.image})` }}
                  ></div>

                  {/* Text Section */}
                  <div className="p-6 bg-white text-center">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {work.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      {work.description}
                    </p>
                    <div className="flex justify-center space-x-4">
                      <a
                        href={work.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-purple-600"
                      >
                        <FaGithub size={24} />
                      </a>
                      <a
                        href={work.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-purple-600"
                      >
                        <FaLink size={24} />
                      </a>
                      <a
                        href={work.detailsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-purple-600"
                      >
                        <FaEye size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid for Larger Screens */}
        <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {worksData.map((work, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              {/* Image */}
              <div
                className="h-56 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${work.image})` }}
              ></div>

              {/* Text Section */}
              <div className="p-6 bg-white">
                <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  {work.title}
                </h4>
                <p className="text-sm text-gray-600">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
