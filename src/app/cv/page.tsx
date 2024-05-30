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
                                    <img src="/headshot.jpg"
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
                                <li>29 years old.</li>
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

                            {/* Work Experience */}
                            <div className="w-full p-2">
                                <h3 className="text-lg text-center font-bold mb-3">Relevant Experience (3 Years)</h3>
                                <ul className="list-disc text-sm text-gray-300 ml-4">
                                    {/* Software Engineer, Open Vantage */}
                                    <li>
                                        <a href="https://www.openvantage.co.za" target="_blank"
                                           rel="noopener noreferrer"
                                           style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                                            <strong style={{ textDecoration: 'underline' }}>Software Engineer - Open
                                                Vantage</strong>
                                        </a>
                                        <div>- July 2023 - April 2024 (Full-time, Hybrid, South Africa)</div>
                                        <br />
                                        <div>Projects:<br />- Asset Manager/Tracker Web App (Property)
                                        </div>
                                        <br />
                                        <div>Tech Used:<br />- React/TS, Prisma, tRPC, Antd, Styled Components, AWS,
                                           Github, Git, IntelliJ and more
                                        </div>
                                        <br />
                                        <div>Duties:
                                            <ul>
                                                <li>- Web frontend inception and creation with React.js,
                                                    TypeScript and much more.
                                                </li>
                                                <li>- Web frontend setup on AWS using S3, weekly deployment duties and
                                                    assistance.
                                                </li>
                                                <li>- Daily standup attendance, client meetings, internal meetings, and
                                                    daily project development.
                                                </li>
                                                <li>- Daily Agile implementation for project management with
                                                    GitHub CI/CD for efficient deployments.
                                                </li>
                                                <li>- Worked extensively with git for version control and collaborated
                                                    across teams to enhance code quality.
                                                </li>
                                                <li>- Delivered ongoing technical guidance to the designer and project
                                                    manager.
                                                </li>
                                                <li>- Daily API integration and frontend architecture implementation.
                                                </li>
                                                <li>- Contributed to code reviews and reinforced understanding of best
                                                    practices in software development.
                                                </li>
                                                <li>- Supporting role assisting backend development with GraphQL, tRPC, Postgres and
                                                    Prisma.
                                                </li>
                                                <li>- Time tracking and ticket management using ClickUp.</li>
                                                <li>- Benefited from regular upskilling and mentorship.</li>
                                            </ul>
                                        </div>
                                        <br />
                                        <div>Outcome:<br />- Resigned due to project viability and
                                            management
                                            concerns.
                                        </div>
                                        <br />
                                    </li>
                                    {/* Lead React Developer, IrriCheck */}
                                    <li>
                                        <a href="https://www.irricheck.co.za/" target="_blank" rel="noopener noreferrer"
                                           style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                                            <strong style={{ textDecoration: 'underline' }}>Lead React Developer -
                                                IrriCheck</strong>
                                        </a>
                                        <div>- April 2022 - July 2023 (Full-time, Remote, South Africa)</div>
                                        <br />
                                        <div>Projects:<br />- Productivity Manager/Tracker Web Front End
                                            (Agritech)
                                        </div>
                                        <br />
                                        <div>Tech Used:<br />-  React/JS, Redux Sagas, SCSS & Tailwind, D3.js, Git, IntelliJ and more.
                                        </div>
                                        <br />
                                        <div>Duties:
                                            <ul>
                                                <li>- Web frontend inception and creation using React.js, Redux Saga,
                                                    and
                                                    d3.js.
                                                </li>
                                                <li>- Daily API integration and frontend architecture implementation.
                                                </li>
                                                <li>- Daily project development and irregular meeting attendance.</li>
                                                <li>- Employed d3.js to develop extensive moisture tracking data
                                                    visualization screens.
                                                </li>
                                                <li>- Total ownership of the solution.</li>
                                            </ul>
                                        </div>
                                        <br />
                                        <div>Outcome:<br />- Handover to new dev was successful.
                                            <br />- Resigned to
                                            take a role with more teamwork and collaboration.
                                        </div>
                                        <br />
                                    </li>
                                    {/* Junior Software Developer, VZAP | Van Zyl & Pritchard */}
                                    <li>
                                        <a href="http://sfy.co.za/" target="_blank" rel="noopener noreferrer"
                                           style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                                            <strong style={{ textDecoration: 'underline' }}>Junior Software Developer -
                                                VZAP | Van Zyl & Pritchard (Software For You)</strong>
                                        </a>
                                        <div>- April 2021 - April 2022 (Full-time, On-site, Johannesburg,
                                            Gauteng, South Africa)
                                        </div>
                                        <br />
                                        <div>Projects:
                                            <ul>
                                                <li>- Customer Relations Manager Web Front End (Printing)
                                                </li>
                                                <li>- Quality Improvement Tracker Web App (Healthcare)
                                                </li>
                                                <li>- Quality Improvement Tracker Mobile App (Healthcare)
                                                </li>
                                                <li>- Online Shop & Inventory Management Web App (Training)
                                                </li>
                                            </ul>
                                        </div>
                                        <br />
                                        <div>Tech Used:<br />- React/JS, React Native, CSS, Redux Sagas, SCSS,
                                            RTL & Jest, Java, Spring, Azure, SQL, HTTP Servlet, JSP, HTML,
                                            GitLab, Git, IntelliJ, Eclipse and more.
                                        </div>
                                        <br />
                                        <div>Duties:
                                            <ul>
                                                <li>- Web frontend inception and creation using React.js and more.</li>
                                                <li>- Daily mobile development with React Native.</li>
                                                <li>- Daily API integration and frontend architecture implementation.
                                                </li>
                                                <li>- Worked extensively with git (GitLab) for version control.</li>
                                                <li>- Daily standup attendance, client meetings, internal meetings, and
                                                    daily project development.
                                                </li>
                                                <li>- Contributed to code reviews and learned best practices in software
                                                    development.
                                                </li>
                                                <li>- Java backend development support.</li>
                                                <li>- Time tracking and ticket management using Azure.</li>
                                                <li>- Benefited from regular upskilling and mentorship.</li>
                                            </ul>
                                        </div>
                                        <br />
                                        <div>Outcome:<br />- QIT Projects reached production and are
                                            still in
                                            use today.<br />- Resigned to take a role focusing on React.js and
                                            become a
                                            front end specialist.
                                        </div>
                                        <br />
                                    </li>
                                </ul>
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
                                    <li>Flexible hours / WL balance.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
