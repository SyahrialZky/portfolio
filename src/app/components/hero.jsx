import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">
                    <h1 className="text-white text-6xl font-extrabold mb-4">Howwie, My name is Syahrial Rizky </h1>
                    <p className="font-light text-[#ADB7BE] text-lg mb-6 lg:text-xl">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, veniam ut! Rerum dignissimos eius aliquid quisquam asperiores accusamus, iste itaque repellat temporibus repellendus laudantium architecto incidunt ut cupiditate explicabo esse.
                    </p>
                    <div className="">
                        <button>Pencet aku</button>
                        <button>Kyaaa dame damee!</button>
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
