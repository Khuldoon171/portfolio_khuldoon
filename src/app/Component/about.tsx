"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";


const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
              alt="hero"
              // eslint-disable-next-line @typescript-eslint/no-require-imports
              src={require("../../../public/my stuff/picture/KHULDOON AHMED.jpeg")}
              width={500}
              height={300}
              />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-5 leading-relaxed">
             Phone Number: 03212608859
             Email:kzclever41@gmail.com</p>
            <p className="mb-5 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              officiis laboriosam tempora, iusto sint omnis laudantium autem,
              animi veritatis illum quas minus perspiciatis nesciunt quaerat
              recusandae quos reprehenderit? Harum, ducimus.
            </p>
            <div className="flex justify-center">
                <Link href="/my stuff/my cv/Shareable Resume Builder.pdf" target="alt">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                View CV
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
