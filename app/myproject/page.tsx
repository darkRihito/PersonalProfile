'use client';
import React, { useState } from "react";
import ProjectCard from "./../../components/projectcard/projectcard";

interface Project {
  title: string;
  description: string;
  image: string;
}

export default function Page() {
  const projects: Project[] = [
    {
      title: "Mobile & Web App: Nutiast Health Monitoring",
      description: "Lorem ipsum, dolor sit amet...",
      image: "src/",
    },
    {
      title: "Shiroplane Artworks Gallery",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis architecto sequi fugit et! Optio, provident.",
      image: "src/",
    },
    {
      title: "Utami Bakery Store",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis architecto sequi fugit et! Optio, provident.",
      image: "src/",
    },
    {
      title: "Twitter Clone",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis architecto sequi fugit et! Optio, provident.",
      image: "src/",
    },
    {
      title: "E-Commerce: Metime Store",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis architecto sequi fugit et! Optio, provident.",
      image: "src/",
    },
    {
      title: "OPEN AI API ChatBot",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis architecto sequi fugit et! Optio, provident.",
      image: "src/",
    },
    // {
    //   title: "Survey Form to Excel",
    //   description:
    //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis architecto sequi fugit et! Optio, provident.",
    //   image: "src/",
    // },
    // {
    //   title: "Newsletter Web",
    //   description:
    //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis architecto sequi fugit et! Optio, provident.",
    //   image: "src/",
    // },
    // {
    //   title: "Company Profile",
    //   description:
    //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis architecto sequi fugit et! Optio, provident.",
    //   image: "src/",
    // },
    // {
    //   title: "Login Authentication Page",
    //   description:
    //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis architecto sequi fugit et! Optio, provident.",
    //   image: "src/",
    // },
    // {
    //   title: "Company Information System",
    //   description:
    //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis architecto sequi fugit et! Optio, provident.",
    //   image: "src/",
    // },
    // {
    //   title: "Company Inventory Management",
    //   description:
    //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis architecto sequi fugit et! Optio, provident.",
    //   image: "src/",
    // },
    // {
    //   title: "E-Learning Gamification App",
    //   description:
    //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis architecto sequi fugit et! Optio, provident.",
    //   image: "src/",
    // },
    // ... other project objects
  ];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}
