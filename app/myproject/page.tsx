"use client";
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
    {
      title: "Company Profile",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis architecto sequi fugit et! Optio, provident.",
      image: "src/",
    },
    {
      title: "Company Information System",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis architecto sequi fugit et! Optio, provident.",
      image: "src/",
    },
    {
      title: "Company Inventory Management",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis architecto sequi fugit et! Optio, provident.",
      image: "src/",
    },
    {
      title: "E-Learning Gamification App",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis architecto sequi fugit et! Optio, provident.",
      image: "src/",
    },
    // ... other project objects
  ];

  const [visibleProjects, setVisibleProjects] = useState<number>(4); // Initial number of visible projects

  const loadMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 4); // Increase the number of visible projects
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-8">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
      {visibleProjects < projects.length && (
        <div className="text-center mt-4">
          <button
            onClick={loadMore}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
