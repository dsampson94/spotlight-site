import {Card} from '@/components/Card';
import {formatDate} from '@/lib/formatDate';
import Link from 'next/link';
import {Button} from '@/components/Button';

export function FeaturedProjects() {
    const projects = [
        {
            name: 'ApplicaAi',
            description: 'Job Application Tracker & CV - Job Spec Ai Comparison',
            link: 'https://www.applicaai.com/',
            iframe: 'https://www.applicaai.com/',
            technologies: ['Next.js', 'MongoDB', 'Prisma.js' , 'Zustand' , 'Tailwind CSS']
        },
        {
            name: 'Yacht Chef Pro',
            description: 'Ordering & menu tracker for yacht chefs',
            link: 'https://yacht-chef-pro-web-server.vercel.app/',
            iframe: 'https://yacht-chef-pro-web-server.vercel.app/',
            technologies: ['Next.js', 'PostgresSQL', 'Prisma.js', 'NextAuth.js', 'Tailwind CSS']
        }
    ];

    const colors = [
        'bg-red-600',
        'bg-blue-600',
        'bg-green-600',
        'bg-yellow-600',
        'bg-purple-600',
        'bg-pink-600',
        'bg-indigo-600',
        'bg-teal-600',
    ];

    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-12">
                🚀 ACTIVE PROJECTS 🚀
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="space-y-4 w-full">
                        <div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white-500 hover:underline cursor-pointer"
                            >
                                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                                    {project.name}
                                </h3>
                            </a>
                            <p className="text-md text-zinc-600 dark:text-zinc-400 mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap justify-center gap-2 mb-6">
                                {project.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className={`${getRandomColor()} bg-opacity-50 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <iframe
                            src={project.iframe}
                            title={project.name}
                            className="w-full h-[500px] rounded-md border-0"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export function BriefcaseIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            />
            <path
                d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                className="stroke-zinc-400 dark:stroke-zinc-500"
            />
        </svg>
    );
}

export function ArrowDownIcon(props) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function Article({article}) {
    return (
        <Card as="article">
            <Card.Title href={`/articles/${article.slug}`}>
                {article.title}
            </Card.Title>
            <Card.Eyebrow as="time" dateTime={article.date} decorate>
                {formatDate(article.date)}
            </Card.Eyebrow>
            <Card.Description>{article.description}</Card.Description>
            <Card.Cta>Read article</Card.Cta>
        </Card>
    );
}

export function SocialLink({icon: Icon, ...props}) {
    return (
        <Link className="group -m-1 p-1" {...props}>
            <Icon
                className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"/>
        </Link>
    );
}

export function Role({role}) {
    let startLabel =
        typeof role.start === 'string' ? role.start : role.start.label;
    let startDate =
        typeof role.start === 'string' ? role.start : role.start.dateTime;

    let endLabel = typeof role.end === 'string' ? role.end : role.end.label;
    let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime;

    return (
        <li className="flex gap-4">
            <dl className="flex flex-auto flex-wrap gap-x-2">
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {role.company}
                </dd>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                    {role.title}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                    className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                    aria-label={`${startLabel} until ${endLabel}`}
                >
                    <time dateTime={startDate}>{startLabel}</time>
                    <span aria-hidden="true">—</span>
                    <time dateTime={endDate}>{endLabel}</time>
                </dd>
            </dl>
        </li>
    );
}

export function Resume() {
    let resume = [
        {
            company: 'Software Engineer (Team, Hybrid)',
            title: 'Real Estate Management App',
            start: '2023',
            end: '2024'
        },
        {
            company: 'React Developer (Solo, Remote)',
            title: 'Agritech Management App',
            start: '2022',
            end: '2023'
        },
        {
            company: 'Junior Software Developer (Team, In Office)',
            title: `Healthcare Quality Improvement App & Printing Services Management App`,
            start: '2020',
            end: '2022'
        }
    ];

    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 md:mx-32">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <BriefcaseIcon className="h-6 w-6 flex-none"/>
                <span className="ml-3">Professional Background (As of 04/2024) </span>
            </h2>
            <ol className="mt-6 space-y-4">
                {resume.map((role, roleIndex) => (
                    <Role key={roleIndex} role={role}/>
                ))}
            </ol>
            <Button href={'/cv'} target="_blank" variant="secondary" className="group mt-6 w-full">
                View Web CV
                <ArrowDownIcon
                    className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"/>
            </Button>
            <Button
                href="/David-Sampson-CV.pdf"
                download="David Sampson - CV.pdf"
                variant="secondary"
                className="group mt-6 w-full"
            >
                View CV PDF
                <ArrowDownIcon
                    className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"/>
            </Button>
            {/*<Button href={ '/legacy-cv' } target="_blank" variant="secondary" className="group mt-6 w-full">*/}
            {/*    View Legacy Web CV*/}
            {/*    <ArrowDownIcon*/}
            {/*        className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />*/}
            {/*</Button>*/}
        </div>
    );
}
