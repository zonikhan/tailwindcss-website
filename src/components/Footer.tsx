
import Link from "next/link";
import React from "react";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-blue-50">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">Rabia arif</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © Copyright 2023 Rabia Arif
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href={"https://www.youtube.com/@TechHub2008"}
              className="text-gray-500"
            >
              <span className="text-3xl hover:text-[#ff0000]">
              <BsYoutube />
              </span>
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;