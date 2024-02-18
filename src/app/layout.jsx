import { Providers } from '@/app/providers';
import { MainLayout } from '@/components/MainLayout';

import '@/styles/tailwind.css'

export const metadata = {
    title: {
        template: '%s - David Sampson',
        default:
            'Home - David Sampson, Professional Software Programmer, JavaScript Junkie, Web Design Enthusiast.',
    },
    description:
        '  I’m David, a software engineer and enthusiast based in South Africa. I specialize in building web apps,\n' +
        '  attending standups, and pushing to Git. I’m currently working in a full-stack\n' +
        '  capacity on a tRPC monorepo, which utilizes, among other tools, Node.js, Nx, React.js, and, controversially, TypeScript.\n',
    alternates: {
        types: {
            'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
        },
    },
}

export default function RootLayout({children}) {
    return (
        <html lang="en" className="h-full antialiased" suppressHydrationWarning>
        <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
            <div className="flex w-full">
                <MainLayout>{children}</MainLayout>
            </div>
        </Providers>
        </body>
        </html>
    )
}
