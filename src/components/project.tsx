import Image from "next/image";
import Link from "next/link";
import React from "react";
import portfolioPic from "../../Images/portfolio-pic.jpeg";
import Resume from "../../Images/resume.webp";


const Project = () => {
    return (
        <div id="project">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20 h-[5rem]">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            My Projects
                        </h1>
                    </div>
                    <div className="flex flex-wrap -m-5 -mt-[5rem]">
                        {/* Project */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer hover:shadow-lg    ">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={Resume}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        Dynamic
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Resume Builder
                                    </h1>
                                    <p className="leading-relaxed line-clamp-2">
                                    This project is a Resume Builder application, designed to help users create professional, customized resumes easily. Built with a focus on clean design and intuitive user experience, it allows users to input their information and choose from various layout options to generate a polished resume. This project showcases my frontend development skills, including form handling, responsive design, and user-centric functionality. Through this tool, I aim to simplify the resume creation process, making it accessible and efficient for users.
                                    </p>
                                    <Link
                                        target="_blank"
                                        href={"https://dynamic-resume-rabia.vercel.app/"}
                                    >
                                        <p className="leading-relaxed text-blue-500 hover:underline">
                                            View Project..
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Project */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={portfolioPic}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        Custom
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Portfolio
                                    </h1>
                                    <p className="leading-relaxed line-clamp-2">
                                        This project is my personal portfolio, created to showcase my skills, experience, and projects as a frontend developer. Built with modern web technologies, it demonstrates my ability to design visually appealing layouts, ensure responsive design, and incorporate smooth user interactions. Through this portfolio, I aim to provide potential clients and collaborators with a clear view of my work and expertise. The site reflects my dedication to creating clean, effective, and user-friendly web experiences.


                                    </p>
                                    <Link
                                        target="_blank"
                                        href={"https://quiz-web-project.vercel.app/"}
                                    >
                                        <p className="leading-relaxed text-blue-500 hover:underline">
                                            View Project..
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Project */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={portfolioPic}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        Tailwand
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Porfolio
                                    </h1>
                                    <p className="leading-relaxed line-clamp-2">
                                        This project is my personal portfolio, created to showcase my skills, experience, and projects as a frontend developer. Built with modern web technologies, it demonstrates my ability to design visually appealing layouts, ensure responsive design, and incorporate smooth user interactions. Through this portfolio, I aim to provide potential clients and collaborators with a clear view of my work and expertise. The site reflects my dedication to creating clean, effective, and user-friendly web experiences.


                                    </p>
                                    <Link
                                        target="_blank"
                                        href={"#"}
                                    >
                                        <p className="leading-relaxed text-blue-500 hover:underline">
                                            View Project..
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Project;