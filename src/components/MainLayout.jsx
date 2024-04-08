'use client'

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export function MainLayout({ children }) {
    const pathname = usePathname();
    const initialShowCV = !pathname.includes('cv');
    const [showCVComponents, setShowCVComponents] = useState(initialShowCV);

    useEffect(() => {
        setShowCVComponents(initialShowCV);
    }, [pathname, initialShowCV]);

    return (
        <>
            <div className="fixed inset-0 flex justify-center sm:px-8">
                <div className="flex w-full max-w-7xl lg:px-8">
                    <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
                </div>
            </div>
            <div className="relative flex w-full flex-col">
                {showCVComponents && <Header />}
                <main className="flex-auto">{children}</main>
                {showCVComponents && <Footer />}
            </div>
        </>
    );
}
