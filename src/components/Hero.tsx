"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";
import porfolioPic from "../../Images/portfolio-pic.jpeg";

const Hero = () => {
    return (
        <section className="text-gray-600 body-font bg-gray-100">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        I am a
                        <br className="hidden lg:inline-block" />
                        <Typewriter
                            options={{
                                strings: [
                                    "Web Developer",
                                    "Frontend Developer",
                                    "Backend Developer",
                                    "UI/UX Designer",
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <div className="w-[100px] h-[2px] bg-blue-700"></div>
                    <p className="mb-8 leading-relaxed">
                    I am a passionate and skilled front-end developer with expertise in building responsive, user-friendly web applications. With experience in HTML, CSS, JavaScript, React, and Next.js, I bring a strong understanding of UI/UX principles and design aesthetics to every project. My focus is on creating seamless and engaging user experiences while ensuring functionality and performance.
                    </p>
                    <div className="flex justify-center">
                        <Link href={"https://www.linkedin.com/in/rabia-arif-9072182b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
                            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                                Linkedin
                            </button>
                        </Link>
                    </div>
                    <div className="flex justify-center mt-4">
                        <Link href={"https://github.com/zonikhan"}>
                            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                                GitHub
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image
                        className="object-cover object-center rounded mx-auto w-[15rem]"
                        alt="hero"
                        width={500}
                        height={500}
                        src={porfolioPic}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;