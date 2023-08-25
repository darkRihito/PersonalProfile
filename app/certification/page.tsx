import React from "react";
import "./style.scss";

interface CertificateProps {
  image: string;
  title: string;
  description: string;
}

// the Google IT Support Professional Certificate have completed five-courses, developed by Google, that include hands- on, practice-based assessments and are designed to prepare us for entry-level roles in IT support which competent in foundational skills, including troubleshooting and customer service, networking, operating systems, system administration, and security. Each has it’s own certificate, so there’s total 6 certificate I’ve owned.
const Certification = () => {
  const certificates1: CertificateProps[] = [
    {
      image: "./Assets/Certificates/bangkitgraduate.png",
      title: "Bangkit Distinction Graduate",
      description:
        "",
    },
    {
      image: "./Assets/Certificates/c0.png",
      title: "Google IT Support Professional",
      description:
        "",
    },
    
  ];

  const certificates2: CertificateProps[] = [
    {
      image: "./Assets/Certificates/c1.png",
      title: "System Administration and Infrastructure",
      description:
        "If you care for your time, I hands down would go with this.",
    },
    {
      image: "./Assets/Certificates/c2.png",
      title: "Operation Systems and You: Becoming a Power User",
      description:
        "If you care for your time, I hands down would go with this.",
    },
    {
      image: "./Assets/Certificates/c3.png",
      title: "The Bits and Bytes Computer Networking",
      description:
        "If you care for your time, I hands down would go with this.",
    },
    {
      image: "./Assets/Certificates/c4.png",
      title: "IT Security: Defense against the digital dark arts",
      description:
        "If you care for your time, I hands down would go with this.",
    },
    {
      image: "./Assets/Certificates/c5.png",
      title: "Technical Support Fundamentals",
      description:
        "If you care for your time, I hands down would go with this.",
    },
  ];

  const certificates3: CertificateProps[] = [
    {
      image: "./Assets/Certificates/c6.png",
      title: "Belajar Dasar Pemrograman Web",
      description:
        "If you care for your time, I hands down would go with this.",
    },
    {
      image: "./Assets/Certificates/c7.png",
      title: "Belajar Dasar Pemrograman Javascript",
      description:
        "If you care for your time, I hands down would go with this.",
    },
    {
      image: "./Assets/Certificates/c8.png",
      title: "Belajar Membuat Aplikasi Backend untuk Pemula",
      description:
        "If you care for your time, I hands down would go with this.",
    },
    {
      image: "./Assets/Certificates/c9.png",
      title: "Menjadi Cloud Engineer",
      description:
        "If you care for your time, I hands down would go with this.",
    },
  ];

  const cloudBadges: CertificateProps[] = [
    {
      image: "./Assets/Certificates/sb0.png",
      title: "",
      description: "",
    },
    {
      image: "./Assets/Certificates/sb1.png",
      title: "",
      description: "",
    },
    {
      image: "./Assets/Certificates/sb2.png",
      title: "",
      description: "",
    },
    {
      image: "./Assets/Certificates/sb3.png",
      title: "",
      description: "",
    },
    {
      image: "./Assets/Certificates/sb4.png",
      title: "",
      description: "",
    },
    {
      image: "./Assets/Certificates/sb5.png",
      title: "",
      description: "",
    },
    {
      image: "./Assets/Certificates/b0.png",
      title: "",
      description: "",
    },
    {
      image: "./Assets/Certificates/b1.png",
      title: "",
      description: "",
    },
    {
      image: "./Assets/Certificates/b2.png",
      title: "",
      description: "",
    },
    {
      image: "./Assets/Certificates/b3.png",
      title: "",
      description: "",
    },
    {
      image: "./Assets/Certificates/b4.png",
      title: "",
      description: "",
    },
    {
      image: "./Assets/Certificates/b5.png",
      title: "",
      description: "",
    },
    {
      image: "./Assets/Certificates/b6.png",
      title: "",
      description: "",
    },
    {
      image: "./Assets/Certificates/b7.png",
      title: "",
      description: "",
    },
    {
      image: "./Assets/Certificates/b8.png",
      title: "",
      description: "",
    },
    {
      image: "./Assets/Certificates/b9.png",
      title: "",
      description: "",
    },
    {
      image: "./Assets/Certificates/b10.png",
      title: "",
      description: "",
    },
    {
      image: "./Assets/Certificates/b11.png",
      title: "",
      description: "",
    },
    {
      image: "./Assets/Certificates/b12.png",
      title: "",
      description: "",
    },
  ];

  return (
    <>
      <div className="text-3xl font-semibold mb-6">
        Professional Certificate
      </div>
      <div className="grid mb-8 shadow-sm0 md:mb-12 grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-2">
        {certificates1.map((certificate, index) => (
          <figure
            key={index}
            className="flex flex-col items-center justify-start p-8 text-center bg-white dark:bg-gray-800 borderThin w-full h-fit"
          >
            <img className="" src={certificate.image} alt="" />
            <blockquote className="mt-6 max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {certificate.title}
              </h3>
              <p className="mt-4">{certificate.description}</p>
            </blockquote>
          </figure>
        ))}
      </div>
      <div className="text-3xl font-semibold mb-6">
        Google Certification by Coursera
      </div>
      <div className="grid mb-8  md:mb-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 borderThin">
        {certificates2.map((certificate, index) => (
          <figure
            key={index}
            className="flex flex-col items-center justify-start p-8 text-center bg-white dark:bg-gray-800 borderThin"
          >
            <img src={certificate.image} alt="" />
            <blockquote className="mt-6 max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {certificate.title}
              </h3>
              <p className="mt-4">{certificate.description}</p>
            </blockquote>
          </figure>
        ))}
      </div>
      <div className="text-3xl font-semibold mb-6">Dicoding</div>
      <div className="grid mb-8  md:mb-12  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 borderThin">
        {certificates3.map((certificate, index) => (
          <figure
            key={index}
            className="flex flex-col items-center justify-start p-8 text-center bg-white dark:bg-gray-800 borderThin"
          >
            <img src={certificate.image} alt="" />
            <blockquote className="mt-6 max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {certificate.title}
              </h3>
              <p className="mt-4">{certificate.description}</p>
            </blockquote>
          </figure>
        ))}
      </div>

      <div className="text-3xl font-semibold mb-6">Google Cloud Badges</div>
      <div className="borderThin gap-x-2 grid md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] grid-cols-[repeat(auto-fill,minmax(170px,2fr))]">
        {cloudBadges.map((badges, index) => (
          <figure
            key={index}
            className="flex flex-col items-center justify-start text-center"
          >
            <img src={badges.image} alt="" className=" w-full mb-4" />
            <blockquote className="flex-grow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {badges.title}
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                {badges.description}
              </p>
            </blockquote>
          </figure>
        ))}
      </div>
    </>
  );
};

export default Certification;
