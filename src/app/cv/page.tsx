import React from 'react';

export const metadata = {
    title: 'David Sampson - CV',
}

export default function CV() {
    return (
        <div
            className="bg-[#0b0c14] text-white font-montserrat min-h-screen flex items-center justify-center p-10 antialiased">
            <div
                className="max-w-8xl w-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl rounded-3xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    {/* Left Column */}
                    <div className="lg:w-1/3 bg-[#1e1e2f] p-8 flex flex-col justify-between">
                        {/* Profile and Bio */}
                        <div>
                            <div className="flex flex-col items-center">
                                <div className="w-32 h-32 mb-4">
                                    <img src="/headshot.jpg" alt="David Sampson"
                                         className="w-32 h-32 rounded-full object-cover border-4 border-gray-600 mb-4 shadow-xl" />
                                </div>
                                <h1 className="text-4xl font-bold mb-2">David Sampson</h1>
                                <h2 className="text-xl text-gray-200 mb-4">Full Stack JavaScript Engineer</h2>
                            </div>

                            <ul className="text-center text-sm text-gray-300 list-none space-y-2">
                                <li>Strong React.js, CSS & React Native experience.</li>
                                <li>Trained in Java, passionate about JavaScript.</li>
                                <li>Solid experience with git, merge master.</li>
                                <li>Team player, leader, learner, teacher.</li>
                                <li>Appreciates code conventions.</li>
                                <li>Learns daily, works smart.</li>
                                <li>Wants to do more D3.</li>
                                <li>29 years old.</li>
                            </ul>
                        </div>

                        <p className="text-center text-sm font-medium italic">"Make it work, Make it right,
                            Make it
                            fast."</p>

                        {/* Contact Information */}
                        <div className="mt-6 text-center text-gray-300">
                            <h3 className="text-lg font-bold mb-3">Contact</h3>
                            <div className="mb-2">
                                <a href="https://www.linkedin.com/in/dsampsondev/"
                                   className="block hover:text-blue-400 transition-colors duration-300">LinkedIn</a>
                            </div>
                            <div className="mb-2">
                                <a href="tel:+27796949704"
                                   className="block hover:text-blue-400 transition-colors duration-300">+27 79 694
                                    9704</a>
                            </div>
                            <div>
                                <a href="mailto:davesampson15@gmail.com"
                                   className="block hover:text-blue-400 transition-colors duration-300">davesampson15@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:w-2/3 p-8">
                        <div className="flex flex-col lg:flex-row flex-wrap">
                        {/* Top Skills */}
                            <div className="w-full lg:w-1/2 p-2">
                                <h2 className="text-xl text-center font-bold mb-3">Top Skills</h2>
                                <div className="mb-2">
                                    <div
                                        className="text-black text-center font-bold bg-purple-400 px-3 py-1 rounded-md mb-1">
                                        React.js, Next.js & React Native
                                    </div>
                                    <div
                                        className="text-black text-center font-bold bg-indigo-400 px-3 py-1 rounded-md mb-1">
                                        JavaScript / TypeScript ES6 & D3.js
                                    </div>
                                    <div
                                        className="text-black text-center font-bold bg-blue-400 px-3 py-1 rounded-md mb-1">
                                        Redux Saga, Fetch, RTK & Axios
                                    </div>
                                    <div
                                        className="text-black text-center font-bold bg-green-400 px-3 py-1 rounded-md mb-1">
                                        Git, HTML5, JSON, HTTP, REST, tRPC
                                    </div>
                                    <div
                                        className="text-black text-center font-bold bg-yellow-400 px-3 py-1 rounded-md mb-1">
                                        DBMS, Node, Express, Prisma, SQLite
                                    </div>
                                    <div
                                        className="text-black text-center font-bold bg-orange-400 px-3 py-1 rounded-md mb-1">
                                        CSS3, SCs, SCSS, MUI, Antd & Tailwind
                                    </div>
                                    <div
                                        className="text-black text-center font-bold bg-red-400 px-3 py-1 rounded-md">
                                        Postman, RTL & Jest, Jetbrains, GPT-4
                                    </div>
                                </div>
                            </div>


                            {/* Core Competencies */}
                            <div className="w-full lg:w-1/2 p-2">
                                <h2 className="text-xl text-center font-bold mb-3">Core Competencies</h2>
                                <div className="mb-2">
                                    <div
                                        className="text-black text-center font-bold bg-purple-400 px-3 py-1 rounded-md mb-1">Frontend
                                        Design & Development
                                    </div>
                                    <div
                                        className="text-black text-center font-bold bg-indigo-400 px-3 py-1 rounded-md mb-1">
                                        Backend, Database & API Development
                                    </div>
                                    <div
                                        className="text-black text-center font-bold bg-blue-400 px-3 py-1 rounded-md mb-1">
                                        Mobile Development & Android Studio
                                    </div>
                                    <div
                                        className="text-black text-center font-bold bg-green-400 px-3 py-1 rounded-md mb-1">
                                        Cloud Driven Development (AWS, Vercel)
                                    </div>
                                    <div
                                        className="text-black text-center font-bold bg-yellow-400 px-3 py-1 rounded-md mb-1">
                                        Agile Project Management, Github
                                        CI/CD
                                    </div>
                                    <div
                                        className="text-black text-center font-bold bg-orange-400 px-3 py-1 rounded-md mb-1">
                                        Technical Analysis & Leadership
                                    </div>
                                    <div
                                        className="text-black text-center font-bold bg-red-400 px-3 py-1 rounded-md">Comprehensive
                                        System
                                        Delivery
                                    </div>
                                </div>
                            </div>

                            {/* Past Project Highlights */}
                            <div className="w-full lg:w-1/2 p-2">
                                <h3 className="text-lg text-center font-bold mb-3">Past Project Highlights</h3>
                                <ul className="list-disc text-sm text-gray-300 pl-5">
                                    <li>
                                        <strong>Asset Manager/Tracker Web App (Property)</strong>
                                        <div className="ml-1">React/TS, Prisma, tRPC, Antd, Styled Components, AWS</div>
                                    </li>
                                    <li>
                                        <strong>Business Manager/Tracker Web Front End (Insurance)</strong>
                                        <div className="ml-1">React/TS, Redux Sagas, MUI, Azure</div>
                                    </li>
                                    <li>
                                        <strong>Productivity Manager/Tracker Web Front End (Agritech)</strong>
                                        <div className="ml-1">React/JS, Redux Sagas, SCSS & Tailwind, D3.js
                                        </div>
                                    </li>
                                    <li>
                                        <strong>Customer Relations Manager Web Front End (Printing)</strong>
                                        <div className="ml-1">React/JS, Redux & Sagas, SCSS, RTL & Jest</div>
                                    </li>
                                    <li>
                                        <strong>Quality Improvement Tracker Web App (Healthcare)</strong>
                                        <div className="ml-1">React/JS, CSS, Java, Spring, Azure</div>
                                    </li>
                                    <li>
                                        <strong>Quality Improvement Tracker Mobile App (Healthcare)</strong>
                                        <div className="ml-1">React Native/JS, CSS, Java, Spring, Azure</div>
                                    </li>
                                    <li>
                                        <strong>Online Shop & Inventory Management Web App</strong>
                                        <div className="ml-1">Java, JSP, CSS, HTML, HTTP Servlet, SQL</div>
                                    </li>
                                </ul>
                            </div>

                            {/* Work Experience */}
                            <div className="w-full lg:w-1/2 p-2">
                                <h3 className="text-lg text-center font-bold mb-3">Work Experience</h3>
                                <ul className="list-disc text-sm text-gray-300 ml-4">
                                    <li>
                                        <strong>Full Stack Software Engineer</strong>
                                        <div>Jul. 2023- Apr. 2024 (Full-time)</div>
                                    </li>
                                    <li>
                                        <strong>Lead React Developer</strong>
                                        <div>Apr. 2022- Jul. 2023 (Full-time)</div>
                                    </li>
                                    <li>
                                        <strong>Junior Software Developer</strong>
                                        <div>Apr. 2021- Apr. 2022</div>
                                    </li>
                                    <li>
                                        <strong>Creative Partner</strong>
                                        <div>Jan. 2019 - Current (Freelance)</div>
                                    </li>
                                    <li>
                                        <strong>Managing Partner</strong>
                                        <div>Jan. 2018 - Dec.2019 (Full-time)</div>
                                    </li>
                                    <li>
                                        <strong>Computer & English Teacher</strong>
                                        <div>Apr. 2017 - Dec. 2017 (Full-time)</div>
                                    </li>
                                </ul>
                            </div>

                            {/* Education */}
                            <div className="w-full lg:w-1/2 p-4">
                                <h3 className="text-lg text-center font-bold mb-3">Education</h3>
                                <ul className="list-disc text-sm text-gray-300 pl-5">
                                    <li>
                                        <strong>Java Web Programming</strong>
                                        <div className="ml-1">Van Zyl & Pritchard</div>
                                        <div className="ml-1">Sept. 2020 - Mar. 2021</div>
                                    </li>
                                    <li>
                                        <strong>Bachelors Degree (Commerce)</strong>
                                        <div className="ml-1">University of Pretoria</div>
                                        <div className="ml-1">Jan. 2012 - Dec. 2016</div>

                                    </li>
                                    <li>
                                        <strong>Matric Certificate</strong>
                                        <div className="ml-1">Marist Brothers College</div>
                                        <div className="ml-1">Dec 2012</div>
                                    </li>
                                </ul>
                            </div>

                            {/* Professional Interests */}
                            <div className="w-full lg:w-1/2 p-4">
                                <h3 className="text-lg text-center font-bold mb-3">Professional Interests</h3>
                                <ul className="list-disc text-sm text-gray-300">
                                    <li>UI programming & API design.</li>
                                    <li>Browser and mobile technology.</li>
                                    <li>Professional development.</li>
                                    <li>Attaining agile maturity</li>
                                    <li>Data visualisation with D3.js.</li>
                                    <li>Remote work arrangement.</li>
                                    <li>Flexible hours / WL balance</li>
                                    <li>Workplace trust & understanding</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}