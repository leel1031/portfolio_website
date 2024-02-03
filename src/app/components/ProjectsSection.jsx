"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';

const projectsData = [
    {
        id: 1,
        title: "FastFix Project",
        description: "How to replace Audi A4 Windshield Blades",
        image: "/images/projects/fastFixProject.jpg",
        tag: ["All", "School"],
        gitUrl: "/downloads/fastFixProject.pdf",
        previewUrl: "/images/projects/fastFixProject.jpg"
    },
    {
        id: 2,
        title: "Accident Report",
        description: "The Accident Report about GTA VI Leaks",
        image: "/images/projects/accidentReport.png",
        tag: ["All", "School"],
        gitUrl: "/downloads/accidentReport.pdf",
        previewUrl: "/images/projects/accidentReport.jpg"
    },
    {
        id: 3,
        title: "Multiple preview images",
        description: "The preview function for an online shopping website using JavaScript",
        image: "/images/projects/dewi.png",
        tag: ["All", "Personal"],
        gitUrl: "https://www.dewisuperfoods.com/product/pomegranate-powder",
        previewUrl: "/images/projects/dewi.png"
    },
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
  
    const handleTagChange = (newTag) => {
        setTag(newTag);
  }

const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  );

  return (
    <>
        <h2 id = "linkProject" className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Projects
        </h2>
        <div className = "text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag 
                onClick = {handleTagChange} 
                name = "All" 
                isSelected = {tag === "All"}
            />
            <ProjectTag 
                onClick = {handleTagChange} 
                name = "Personal" 
                isSelected = {tag === "Personal"}
            />
            <ProjectTag 
                onClick = {handleTagChange} 
                name = "School" 
                isSelected = {tag === "School"}
            />
        </div>

        <div className ="grid md:grid-cols-3 gap-8 md:gap-12"> 
            {filteredProjects.map((project) => (
                <ProjectCard 
                    key = {project.id} 
                    title = {project.title} 
                    description = {project.description} 
                    imgUrl = {project.image} 
                    gitUrl = {project.gitUrl}
                    previewUrl = {project.previewUrl}

                />
            ))}
        </div>
    
    </>
  )
}

export default ProjectsSection