import Head from 'next/head';

import { Providers } from '@/app/providers';
import { MainLayout } from '@/components/MainLayout';

import '@/styles/tailwind.css';

export const metadata = {
    title: {
        template: '%s',
        default:
            'Tech Notes - Home'
    },
    description: '%s',
    alternates: {
        types: {
            'application/rss+xml': `${ process.env.NEXT_PUBLIC_SITE_URL }/feed.xml`
        }
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="h-full antialiased" suppressHydrationWarning>
        <Head>
            <meta property="og:image" content={ 'https://technotes.site/public/headshot.jpg' } />
            <meta property="og:type" content="website" />
        </Head>
        <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
            <div className="flex w-full">
                <MainLayout>{ children }</MainLayout>
            </div>
        </Providers>
        </body>
        </html>
    );
}
