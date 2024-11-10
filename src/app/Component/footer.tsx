import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsYoutube } from "react-icons/bs";


const Footer = () => {
  return (
    <div className="bg-indigo-200">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <a className="h-[200px] block mb-5 w-[200px]"
            aria-label="link-wrap-image">
          </a>
          <Image
              // eslint-disable-next-line @typescript-eslint/no-require-imports
              src={require("../../../public/my stuff/picture/Khuldoon.jpg")}
              alt="my logo"
              width={70}
              height={70}
              className="w[50px]"
            />
            <span className="ml-3 text-xl">KHULDOON AHMED</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 KHULDOON AHMED
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
            target="_blank"
            href={"http://www.youtube.com/@khuldoonzulfiqar606"} className="text-gray-500">
            <BsYoutube className="text-3xl hover:text-[#ff0000]"/>
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
