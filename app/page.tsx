import React from "react";
import Alert from "./alert";

export default function page() {
  return (
    <>
      <div className="px-4 lg:px-0 mt-4 flex flex-col gap-8">
        <div className="flex flex-col">
          <div className="text-3xl font-medium mb-6">About Me</div>
          <div className="text-lg italic mb-4">
            Front-End Developer, Fullstack Developer, UI/UX Designer
          </div>
          <div className="text-lg text-justify mb-6">
            I am a highly motivated web developer experienced in both front-end
            and full-stack development. Proficient in HTML, CSS, JavaScript,
            React, Node.js, various databases, and cloud environment. I have a
            track record of successful project delivery and adapt quickly to new
            technologies. Dedicated to creating visually appealing and
            user-friendly websites. Eager to contribute my skills and dedication
            to a dynamic team. In addition, I also possess skills in data
            management and processing.
          </div>
          <div>
            <iframe
              className="w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
              src="https://www.youtube.com/embed/kzdJkT4kp-A"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row lg:gap-8">
          <div className="xl:w-3/5">
            <div className="mb-8">
              <div className="text-2xl font-medium mb-6">Education</div>
              <div className=""></div>
              <div className="w-full overflow-scroll container-snap">
                <ol className="items-center sm:flex">
                  <li className="w-full relative mb-6 sm:mb-0 min-w-[16rem]">
                    <div className="flex items-center">
                      <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <svg
                          className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                      </div>
                      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-3 sm:pr-8 flex items-start space-x-4">
                      <img
                        className="w-10 h-10 rounded-full mt-4"
                        src="/Assets/upi-logo.png"
                        alt=""
                      />
                      <div className="">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Universitas Pendidikan Indonesia
                        </h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                          2020 - 2024 · Bachelor Degree · Computer Science
                        </time>
                        <div className="text-sm text-gray-500 dark:text-gray-400 font-medium ">
                          IPK: 3.85 of 4
                        </div>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Active Project Collaboration; Gemastik 2022
                          Competition; Assistant Lecturer & Voluntary;
                          Programming Organization OSTRIC; Dinamik UPI Comitee;
                        </p>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            <div className="">
              <div className="text-2xl font-medium mb-6">Experience</div>
              <ol className="relative border-l border-gray-200 dark:border-gray-700 lg:ms-6 ms-2">
                <li className="mb-10 ml-6 ">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <div className="flex flex-row">
                    <img
                      className="w-12 h-12 rounded-lg me-4"
                      src="/Assets/bangkit-logo.png"
                      alt=""
                    />
                    <div className="">
                      <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Bangkit Academy led by Google, Gojek, Tokopedia, &
                        Traveloka.
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                          Latest
                        </span>
                        <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 ml-3">
                          Online
                        </span>
                      </h3>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        Feb 2023 - Jul 2023 · Jakarta, Indonesia · Jarak jauh
                      </time>
                    </div>
                  </div>

                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Over the past six months, I've diligently pursued mastery in
                    Google Cloud Technology and Backend Development through
                    comprehensive online courses on platforms like Coursera and
                    Dicoding, along with expert-led sessions. I've also honed my
                    soft skills and English proficiency to bolster my
                    professionalism. Hands-on experience came from dedicated
                    practice in Google Cloud through the CloudSkillBoost lab. A
                    testament to my knowledge and teamwork, I successfully
                    completed a Capstone Project within a month, where our
                    collaborative effort resulted in the creation of a machine
                    learning integrated mobile application. This innovative app
                    enables users to monitor their daily nutrition intake
                    effectively using TensorFlow and cloud technology.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    <svg
                      className="w-3.5 h-3.5 mr-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                      <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                    </svg>{" "}
                    Download ZIP
                  </a>
                </li>
                <li className="mb-10 ml-6">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Threat Intelligence. Direktorat Sistem dan Teknologi
                    Informasi (DikSTI UPI)
                    <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 ml-3">
                      Remote
                    </span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 ml-3">
                      Intern
                    </span>
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Apr 2023 - Mei 2023 · Bandung, Jawa Barat, Indonesia · Jarak
                    jauh
                  </time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    All of the pages and components are first designed in Figma
                    and we keep a parity between the two versions even as we
                    update the project.
                  </p>
                </li>
                <li className="mb-10 ml-6">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Computer Networking, Assistant Lecturer
                    <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 ml-3">
                      Offline
                    </span>
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Feb 2022 - Mei 2022 · Bandung, Jawa Barat, Indonesia · Di
                    lokasi
                  </time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    I served as a Computer Networking Assistant Lecturer,
                    responsible for creating engaging lesson plans, conducting
                    practical sessions, supervising high school-level
                    programming and networking competitions, and designing
                    comprehensive exams. This experience enhanced my curriculum
                    design, teaching, and assessment skills.
                  </p>
                </li>
                <li className="mb-10 ml-6">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Software Development, Assistant Lecturer
                    <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 ml-3">
                      Offline
                    </span>
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Feb 2022 - Mei 2022 · Bandung, Jawa Barat, Indonesia · Di
                    lokasi
                  </time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    In the same period, I also worked as a Software Development
                    Assistant Lecturer, delivering tutorials on SDLC, UML, and
                    DFD. I maintained the computer laboratory and ensured
                    optimal learning conditions. This role honed my
                    instructional, laboratory management, and problem-solving
                    abilities.
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div className="xl:w-2/5">
            <div className="text-2xl font-medium mb-6">Skills</div>
            <div className="lang-and-fw flex flex-col flex-wrap">
              {/* LANGUAGES */}
              <div className="languages mb-4">
                <p className="text-xl mb-2">Languages</p>
                {/* PROFICIENT ROW */}
                <div className="proficient-row flex flex-wrap mb-1">
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">JavaScript</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Typescript</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Flutter Dart</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">PHP</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Java</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Python</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">C</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">C++</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">HTML5</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">CSS3</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">SASS</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">R</p>
                  </div>
                </div>

                {/* INTERMEDIATE ROW */}
                <div className="intermediate-row flex flex-wrap mb-1"></div>
              </div>

              {/* FRAMEWORKS/LIBRARIES */}
              <div className="frameworks mb-4">
                <p className="text-xl mb-2">Frameworks/Libraries</p>
                {/* PROFICIENT ROW */}
                <div className="proficient-row flex flex-wrap mb-1">
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">React</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Next.js</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Express.js</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Flask</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Node</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Tailwind</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Laravel</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Bootsrap</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">MUI</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Flutter</p>
                  </div>
                </div>

                {/* INTERMEDIATE ROW */}
                <div className="intermediate-row flex flex-wrap mb-1"></div>

                {/* BEGINNER ROW */}
                <div className="beginner-row flex flex-wrap"></div>
              </div>

              {/* Tools */}
              <div className="tools mb-4">
                <p className="text-xl mb-2">Tools</p>
                {/* PROFICIENT ROW */}
                <div className="proficient-row flex flex-wrap mb-1">
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Visual Studio Code</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Github</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Vercel</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Google Cloud Platform</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Amazon Web Service</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Canva</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">MongoDB</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Figma</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">MySQL</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">MongoDB</p>
                  </div>
                  <div className="p-1 border rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Firebase</p>
                  </div>
                </div>

                {/* INTERMEDIATE ROW */}
                <div className="intermediate-row flex flex-wrap mb-1"></div>

                {/* BEGINNER ROW */}
                <div className="beginner-row flex flex-wrap"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
