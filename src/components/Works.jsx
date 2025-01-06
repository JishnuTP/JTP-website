import React, { useState, useEffect } from "react";
import { FaGithub, FaLink, FaEye, FaArrowRight } from 'react-icons/fa'; // Importing icons from React Icons

const worksData = [
  { 
    title: "GENAI", 
    description: "Educational platform to take test, course, Learn and grow", 
    image: "./works/genai-company.png",
    githubLink: "https://github.com/genai",
    liveLink: "https://genai.com",
    detailsLink: "https://genai.com/details"
  },
  { 
    title: "Design", 
    description: "Creative architecture", 
    image: "./works/workers-online.png",
    githubLink: "https://github.com/design",
    liveLink: "https://design.com",
    detailsLink: "https://design.com/details"
  },
  { 
    title: "Inspire", 
    description: "Innovative structures", 
    image: "./works/jtpfootwares.png",
    githubLink: "https://github.com/inspire",
    liveLink: "https://inspire.com",
    detailsLink: "https://inspire.com/details"
  },
  { 
    title: "Create", 
    description: "Modern designs", 
    image: "./works/bookme.png",
    githubLink: "https://github.com/create",
    liveLink: "https://create.com",
    detailsLink: "https://create.com/details"
  },
  { 
    title: "Develop", 
    description: "Engineering excellence", 
    image: "./works/todo.png",
    githubLink: "https://github.com/develop",
    liveLink: "https://develop.com",
    detailsLink: "https://develop.com/details"
  },
  { 
    title: "Shape", 
    description: "Futuristic buildings", 
    image:"./works/netflix.png",
    githubLink: "https://github.com/shape",
    liveLink: "https://shape.com",
    detailsLink: "https://shape.com/details"
  },
  // More items...
];

const Works = () => {
  const [show, setShow] = useState(false);
  const [visibleWorks, setVisibleWorks] = useState(3); // Show only 3 works initially
  const [currentIndex, setCurrentIndex] = useState(0); // Track current work index

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShow(true); // Trigger re-render or animation when it enters the view
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the component is visible
      }
    );

    const section = document.getElementById("work");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
    // Auto scroll to next work every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % worksData.length); // Loop through works
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleShowMore = () => {
    setVisibleWorks((prev) => Math.min(prev + 3, worksData.length)); // Show 3 more works each time
    document.getElementById("work").scrollIntoView({ behavior: "smooth" }); // Scroll to the section automatically
  };

  return (
    <section id="work" className="min-h-screen py-8">
      {show && (
        <div className="max-w-screen-lg mx-auto px-4">
          <h2 className="text-center text-lg font-Audiowide mb-6 text-gray-800">
            My Works
          </h2>
          <div className="overflow-x-auto no-scrollbar">
            <div className="flex space-x-8" style={{ scrollBehavior: "smooth" }}>
              {worksData.slice(currentIndex, currentIndex + visibleWorks).map((work, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animationFillMode: "both",
                    flex: "0 0 auto", // Ensure the cards don't wrap
                    width: "30%", // Show 3 works at a time in desktop mode
                  }}
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                    <h3 className="text-xl font-bold">{work.title}</h3>
                    <p className="mt-2 text-sm">{work.description}</p>
                    <div className="flex justify-center gap-4 mt-4">
                      {/* GitHub Link Button */}
                      <a
                        href={work.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-800 rounded-md text-white flex items-center hover:bg-gray-900 transition duration-300 hidden sm:flex"
                      >
                        <FaGithub className="mr-2" /> GitHub
                      </a>
                      {/* Live Link Button */}
                      <a
                        href={work.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 rounded-md text-white flex items-center hover:bg-blue-700 transition duration-300 hidden sm:flex"
                      >
                        <FaLink className="mr-2" /> Live Link
                      </a>
                      {/* View Details Button */}
                      <a
                        href={work.detailsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-green-600 rounded-md text-white flex items-center hover:bg-green-700 transition duration-300 hidden sm:flex"
                      >
                        <FaEye className="mr-2" /> View Details
                      </a>
                      {/* Small Screen Icons (Only Icons) */}
                      <div className="flex sm:hidden gap-4">
                        <a
                          href={work.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-800 rounded-full text-white hover:bg-gray-900 transition duration-300"
                        >
                          <FaGithub />
                        </a>
                        <a
                          href={work.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition duration-300"
                        >
                          <FaLink />
                        </a>
                        <a
                          href={work.detailsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-green-600 rounded-full text-white hover:bg-green-700 transition duration-300"
                        >
                          <FaEye />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Show More Section */}
         
          </div>
    
      )}
    </section>
  );
};

export default Works;
