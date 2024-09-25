'use client';

import dynamic from 'next/dynamic';
import {Container} from '@/components/Container';
import {FaFileAlt, FaGithub, FaLink, FaLinkedin} from 'react-icons/fa'; // Importing icons from react-icons
import {FeaturedProjects} from '@/components/home';

const ConfettiEffect = dynamic(() => import('@/components/ConfettiEffect'), {
    ssr: false
});

export default function Home() {
    return (
        <>
            <ConfettiEffect/>
            <Container className="mt-9">
                <div className="max-w-1xl mx-auto relative">
                    {/* Main heading */}
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        Software lover and full-time JavaScript builder.
                    </h1>

                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        Hi there! I’m David and welcome to my site. I&apos;m based in
                        Johannesburg, South Africa and
                        have been working professionally on business software for the past 4 years. As a technical
                        partner, I bring a wealth of experience and am always working on various projects.
                        Hit me up for enquiries or just to roast my site.
                    </p>

                    {/* GitHub commit map positioned top-right */}
                    <img
                        src="https://ghchart.rshah.org/dsampson94"
                        alt="GitHub commit chart"
                        className="w-full sm:w-6/12 md:w-3/12 mt-3 -ml-2 filter dark:invert-[85%] dark:contrast-[80%]"
                    />

                    <div className="mt-6 flex gap-6">
                        {/* GitHub, LinkedIn, CV icons */}
                        <div className="relative group">
                            <a
                                href="/David-Sampson-CV.pdf"
                                download="David Sampson - CV.pdf"
                                aria-label="Download CV PDF"
                                className="group"
                            >
                                <FaFileAlt
                                    className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"/>
                            </a>
                            <span
                                className="absolute top-full ml-10 sm:ml-0 left-1/2 mb-2 w-max -translate-x-1/2 translate-y-2 bg-gray-900 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Download CV PDF</span>
                        </div>
                        <div className="relative group">
                            <a
                                href="https://github.com/dsampson94"
                                aria-label="GitHub"
                                target="_blank"
                                className="group"
                            >
                                <FaGithub
                                    className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"/>
                            </a>
                            <span
                                className="absolute top-full left-1/2 mb-2 w-max -translate-x-1/2 translate-y-2 bg-gray-900 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">GitHub</span>
                        </div>
                        <div className="relative group">
                            <a
                                href="https://www.linkedin.com/in/dsampsondev/"
                                target="_blank"
                                aria-label="LinkedIn"
                                className="group"
                            >
                                <FaLinkedin
                                    className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"/>
                            </a>
                            <span
                                className="absolute top-full left-1/2 mb-2 w-max -translate-x-1/2 translate-y-2 bg-gray-900 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">LinkedIn</span>
                        </div>
                        <div className="relative group">
                            <a
                                href="/cv"
                                target="_blank"
                                aria-label="View Legacy CV"
                                className="group"
                            >
                                <FaLink
                                    className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"/>
                            </a>
                            <span
                                className="absolute top-full left-1/2 mb-2 w-max -translate-x-1/2 translate-y-2 bg-gray-900 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Legacy CV Site</span>
                        </div>
                        <div className="relative group">
                            <a
                                href="/legacy-cv"
                                target="_blank"
                                aria-label="View Legacy Legacy CV"
                                className="group"
                            >
                                <FaLink
                                    className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"/>
                            </a>
                            <span
                                className="absolute top-full left-1/2 mb-2 w-max -translate-x-1/2 translate-y-2 bg-gray-900 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Legacy Legacy CV Site</span>
                        </div>
                    </div>
                </div>
            </Container>

            <Container className="mt-20 md:mt-24">
                <FeaturedProjects/>
            </Container>
        </>
    );
}
