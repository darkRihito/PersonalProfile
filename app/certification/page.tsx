import React from "react";
import "./style.scss";

interface CertificateProps {
  image: string;
  title: string;
  description: string;
}

const Certification = () => {
  const certificates1: CertificateProps[] = [
    {
      image: "./Assets/Certificates/c0.png",
      title: "Google IT Support Professional",
      description:
        "If you care for your time, I hands down would go with this.",
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

  return (
    <>
      <div className="text-3xl font-semibold mb-6">
        Professional Certificate
      </div>
      <div className="grid mb-8 shadow-sm0 md:mb-12 grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 borderThin">
        {certificates1.map((certificate, index) => (
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
      <div className="text-3xl font-semibold mb-6">Google Certification by Coursera</div>
      <div className="grid mb-8 shadow-sm0 md:mb-12 grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 borderThin">
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
      <div className="grid mb-8 shadow-sm0 md:mb-12 grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 borderThin">
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
    </>
  );
};

export default Certification;
