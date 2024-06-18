import dynamic from 'next/dynamic';
import { Container } from '@/components/Container';
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons';
import { getAllArticles } from '@/lib/articles';
import { Article, FeaturedProjects, Resume, SocialLink } from '@/components/home';

const ConfettiEffect = dynamic(() => import('@/components/ConfettiEffect'), {
    ssr: false
});

export default async function Home() {

    let articles = (await getAllArticles()).slice(0, 10);

    return (
        <>
            <ConfettiEffect />
            <Container className="mt-9">
                <div className="max-w-1xl mx-auto">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        Software lover and full time javascript builder.
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        Hi there! I’m David, a software developer living between Cape Town and Johannesburg and I&apos;ve been working professionally
                        on business software for the past 3 years. Welcome to my site!
                    </p>
                    <div className="mt-6 flex gap-6">
                        <SocialLink
                            href="https://github.com/dsampson94"
                            aria-label="GitHub"
                            target="_blank"
                            icon={ GitHubIcon }
                        />
                        <SocialLink
                            href="https://www.linkedin.com/in/dsampsondev/"
                            target="_blank"
                            aria-label="LinkedIn"
                            icon={ LinkedInIcon }
                        />
                    </div>
                </div>
            </Container>
            <Container className="mt-20 md:mt-24">
                <FeaturedProjects />
            </Container>
            <Container className="mt-20 md:mt-18">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col gap-16 text-center">
                        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mt-6">
                            🗒️ BLOG 🗒️
                        </h2>
                            { articles.map((article) => (
                                <Article key={ article.slug } article={ article } />
                            )) }
                    </div>
                    <div className="space-y-10 lg:pl-16 xl:pl-24">
                        <Resume />
                    </div>
                </div>
            </Container>
        </>
    );
}
