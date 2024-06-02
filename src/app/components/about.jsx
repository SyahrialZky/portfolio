'use client'
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
const TAB_DATA = [
    {
        title : "Skills",
        id : "skills",
        content : (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>NextJs</li>
                <li>MySQL</li>
                <li>Laravel</li>
                <li>PHP</li>
                <li>JavaScript</li>
            </ul>
        ),
    },
    {
        title : "Experience",
        id : "experience",
        content : (
         <ul className="list-disc pl-2">
            <li>Internship IT Support at Floo Integra Digital</li>
            <li>Developing Website for education with HIMATIFA (UPNVJT)</li>
         </ul>
        ),
    },
    {
        title : "Education",
        id : "education",
        content : (
            <ul className="list-disc pl-2">
                <li>Software Engineering at SMKN 1 Surabaya</li>
                <li>Undergraduate Computer Science at UPN Veteran Jawa Timur</li>
            </ul>
        ),
    },
]


const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() =>{
            setTab(id);
    });
    };
    return(
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src={''} width={500} height={500} alt=""/>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic provident excepturi, dolorem ut modi explicabo architecto eius libero nisi nesciunt deleniti, optio tenetur consectetur beatae odit doloremque temporibus obcaecati a.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab==="skills"}>
                            {" "}
                            Skills {" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")}
                        active={tab==="experience"}
                        >
                            {" "}
                            Experience {" "}
                        </TabButton>
                        <TabButton selectTab={()=> handleTabChange("education")}
                        active={tab==="education"}
                        >
                            {" "}
                            Education {" "}
                        </TabButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection