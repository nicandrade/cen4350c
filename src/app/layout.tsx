import './globals.css';
import type {Metadata} from 'next';
import {Roboto} from 'next/font/google';
import {createClient} from '@/utils/supabase/server'
import NavBar from '@/components/nav_bar'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
    style: ['normal', 'italic'],
    display: 'swap',
    variable: '--font-roboto',
});

export const metadata: Metadata = {
    title: 'DBEC',
    description: 'CEN4350C Project',
};

export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode
}) {
    const supabase = createClient()

    const {
        data: {user},
    } = await (await supabase).auth.getUser()

    const displayName = user?.user_metadata.display_name || user?.email || 'User'

    const navBarUser = user ? {displayName: displayName, id: user.id} : null

    return (
        <html lang="en" className={roboto.className}>
        <body>
        <NavBar
            imageSrcPath="/delorean.png"
            user={navBarUser}
        />
        {children}
        </body>
        </html>
    );
}