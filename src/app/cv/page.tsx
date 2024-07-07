// @ts-nocheck
import React from 'react';

export const metadata = {
    title: 'David Sampson - CV',
    description: 'Updated Web CV as of 04/2024'
}

export default function CV() {
    return (
        <div
            className="bg-slate-700 text-white font-montserrat min-h-screen flex items-center justify-center px-1 py-1 antialiased sm:p-4">
            <div
                className="max-w-8xl w-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl rounded-3xl overflow-hidden">
                <div className="flex flex-col lg:flex-row shadow-2xl">
                    {/* Left Column */}
                    <div className="lg:w-1/3 bg-slate-800 p-8 flex flex-col justify-between">
                        {/* Profile and Bio */}
                        <div>
                            <div className="flex flex-col items-center">
                                <div className="w-32 h-32 mb-4">
                                    <img src="/orange-headshot.png"
                                         alt="David Sampson"
                                         className="w-32 h-32 rounded-full object-cover border-4 border-gray-600 mb-4 shadow-xl" />
                                </div>
                                <h1 className="text-2xl font-bold mb-2">David Sampson</h1>
                                <h2 className="text-3xl font-bold text-gray-200 mb-4">Front End Engineer</h2>
                            </div>

                            <ul className="text-center text-xs sm:text-sm text-gray-300 list-none space-y-2">
                                <li>Strong React.js, CSS & React Native experience.</li>
                                <li>Trained in Java, passionate about JavaScript.</li>
                                <li>Solid experience with git, merge master.</li>
                                <li>Team player, leader, learner, teacher.</li>
                                <li>Appreciates code conventions.</li>
                                <li>Learns daily, works smart.</li>
                                <li>Agile PM enthusiast </li>
                            </ul>
                        </div>

                        <p className="pt-6 text-center text-sm font-medium italic sm:pt-0 sm:pb-8">
                            {'"Make it work, make it right, make it fast."'}
                        </p>

                        {/* Contact Information */}
                        <div className="mt-6 text-center text-gray-300">
                            <h3 className="text-lg font-bold mb-3">Contact</h3>
                            <div className="mb-2">
                                <a href="https://github.com/dsampson94" target="_blank"
                                   className="block hover:text-blue-400 transition-colors duration-300">Github</a>
                            </div>
                            <div className="mb-2">
                                <a href="https://www.linkedin.com/in/dsampsondev/" target="_blank"
                                   className="block hover:text-blue-400 transition-colors duration-300">LinkedIn</a>
                            </div>
                            <div className="mb-2">
                                <a href="tel:+27796949704" target="_blank"
                                   className="block hover:text-blue-400 transition-colors duration-300">+27 79 694
                                    9704</a>
                            </div>
                            <div>
                                <a href="mailto:davesampson15@gmail.com" target="_blank"
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
                                        Web Design & Development
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
                                        Technical Analysis, Design & Leadership
                                    </div>
                                    <div
                                        className="text-black text-center font-bold bg-orange-400 px-3 py-1 rounded-md mb-1">
                                        Agile Project Management, Github
                                        CI/CD
                                    </div>
                                    <div
                                        className="text-black text-center font-bold bg-red-400 px-3 py-1 rounded-md">Comprehensive
                                        System
                                        Delivery
                                    </div>
                                </div>
                            </div>

                            {/* Education */}
                            <div className="w-full lg:w-1/2 p-2">
                                <h3 className="text-lg text-center font-bold mb-3">Education</h3>
                                <ul className="list-disc text-sm text-gray-300 ml-4">
                                    <li>
                                        <strong>Java Web Programming</strong><br />
                                        <a href="https://www.vzap.co.za/" target="_blank" rel="noopener noreferrer"
                                           style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                                            Van Zyl & Pritchard - Sept. 2020 - Mar. 2021
                                        </a>
                                    </li>
                                    <li>
                                        <strong>Bachelors Degree (Commerce)</strong>
                                        <div>University of Pretoria - Jan. 2013 - Dec. 2016</div>
                                    </li>
                                    <li>
                                        <strong>Matric Certificate</strong>
                                        <div>Marist Brothers College - Dec 2012</div>
                                    </li>
                                </ul>
                            </div>

                            {/* Professional Interests */}
                            <div className="w-full lg:w-1/2 p-2">
                                <h3 className="text-lg text-center font-bold mb-3">Professional Interests</h3>
                                <ul className="list-disc text-sm text-gray-300 ml-4">
                                    <li>UI programming & API design.</li>
                                    <li>Browser and mobile technology.</li>
                                    <li>Professional development.</li>
                                    <li>Attaining agile maturity.</li>
                                    <li>Data visualisation with D3.js.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
