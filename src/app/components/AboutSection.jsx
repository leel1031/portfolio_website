"use client";
import React, { useTransition, useState } from 'react'
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className ="list-disc pl-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>PHP</li>
                <li>Java</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className ="list-disc pl-2">
                <li>York University, Toronto (2022-Present)</li>
            </ul>
        ),
    },
    {
        title: "Experience",
        id: "Experience",
        content: (
            <ul className ="list-disc pl-2">
                <li>Front-End Developer Volunteer in Dewi Superfoods (August 2023)
                    <ul className ="pl-2">
                        <li>- Satisfied the designer's specifications by creating and implementing multiple preview images in the preview function for an online shopping website using JavaScript and critical thinking within the stipulated deadline, all while working within the constraints of the website builder's functionalities</li>
                        <br></br>
                        <li><button type = "button" 
                        onClick={() => (window.location.href = 'https://www.dewisuperfoods.com/')}
                        className ="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-pruple-500 to-pink-500 hover:bg-slate-800 text-white mt-3 hover:underline"
                        >
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Click here</span>
                            </button>
                        </li>
                    </ul>
                </li> 

                <br></br> 
                <br></br>               
            
                <li>Sous Chef in Dowon Restaurant (2017 - 2019)</li>
                    <ul className ="pl-2">
                        <li>- Applied strong leadership skills to enhance efficiency by effectively delegating tasks, mastering multitasking, and demonstrating outstanding communication abilities, creating a productive work atmosphere.</li>
                        <br></br>
                        <li><button type = "button" 
                        onClick={() => (window.location.href = 'https://www.instagram.com/explore/locations/699341560/dowon-chinese-and-korean-restaurant/')}
                        className ="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-pruple-500 to-pink-500 hover:bg-slate-800 text-white mt-3 hover:underline"
                        >      
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Click here</span>
                            </button>
                        </li>
                    </ul>
            </ul>
        ),
    },
];


const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

  return (
    <section className ="text-white ">
        <div id = "linkAbout" className ="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src ="/images/boba2.jpeg" width = {500} height = {500}  />
            <div className = "mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className ="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className ="text-base lg:text-lg">I am 4th years Honours Bachelor of Art Information Technology student with a focus in data structure, data algorithm, database, web technologies, user interface, and system administration.
                    I am a quick learner and I am always looking to expand my knowledge and skill set.
                </p>
                <div className ="flex flex-row justify-start mt-8">
                    <TabButton 
                    selectTab = {() => handleTabChange("skills")} 
                    active={tab === "skills"}
                    > 
                    {" "} 
                    Skills{" "} 
                    </TabButton>
                    <TabButton 
                    selectTab = {() => handleTabChange("education")} 
                    active={tab === "education"}
                    > 
                    {" "} 
                    Education{" "} 
                    </TabButton>
                    <TabButton 
                    selectTab = {() => handleTabChange("Experience")} 
                    active={tab === "Experience"}
                    > 
                    {" "} 
                    Experience{" "} 
                    </TabButton>
                </div>
                <div className= "mt-8">{TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
        </section>
  )
}

export default AboutSection