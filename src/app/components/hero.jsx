'use client'


import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section className="min-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white text-4xl lg:text-6xl font-extrabold mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-300"> Hello, I`m {""}</span>
                   <br />
                        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Syahrial Rizky',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Informatic Student',
        1000,
        'Web Developer',
        1000,
          ]}
      wrapper="span"
      speed={40}
     
      repeat={Infinity}
    />    
                    </h1>
                    <p className="font-light text-[#ADB7BE] text-lg mb-6 lg:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi maiores architecto, porro corrupti nostrum fugiat asperiores ea vel cum officiis.
                    </p>
                    <div className="py-12 sm:py-0">
                        <button className="btn px-6 py-3 w-full sm:w-fit text-white rounded-full mr-4 bg-gradient-to-br from-indigo-600 to-purple-600  ">Baca blogku</button>
                        <button className="btn px-6 py-3 w-full sm:w-fit btn-outline text-white rounded-full mt-4 hover:bg-gradient-to-br from-indigo-600 to-purple-600  hover:border-none hover:text-white">Hubungi saya</button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image 
                        src="/images/syahrial.webp"
                        alt="Gambar Syahrial"
                        className="absolute transform -translate-x-1 -translate-y-1/2 top-1/2"
                        width={300}
                        height={300}
                        />
                    </div>    
                </div>
            </div>
        </section>
    )
};

export default HeroSection;
