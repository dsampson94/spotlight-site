import { Providers } from '@/app/providers';
import { MainLayout } from '@/components/MainLayout';
import { Analytics } from '@vercel/analytics/react';

import '@/styles/tailwind.css';

export const metadata = {
    title: {
        template: '%s',
        default:
            'David Sampson - Welcome'
    },
    ogImage: '',
    alternates: {
        types: {
            'application/rss+xml': `${ process.env.NEXT_PUBLIC_SITE_URL }/feed.xml`
        }
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="h-full antialiased" suppressHydrationWarning>
        <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
            <div className="flex w-full">
                <MainLayout>{ children }</MainLayout>
            </div>
        </Providers>
        </body>
        <Analytics />
        </html>
    );
}
