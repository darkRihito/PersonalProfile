import React from "react";

interface projectCardProps {
  image: string;
  title: string;
  description: string;
}

export default function ProjectCard(props: projectCardProps) {
  return (
    <>
      <div className="w-full bg-slate-50 border border-gray-200 rounded-2xl dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-2xl h-32 object-cover w-full" src={props.image} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
              {props.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.description}
          </p>
        </div>
      </div>
    </>
  );
}
