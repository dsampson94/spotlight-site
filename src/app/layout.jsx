import { Providers } from '@/app/providers';
import { MainLayout } from '@/components/MainLayout';

import '@/styles/tailwind.css'

export const metadata = {
    title: {
        template: '%s',
        default:
            'Tech Notes - Home',
    },
    description:
        'just some public note taking, nothing to see here.\n',
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
