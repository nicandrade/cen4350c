import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import NavBar from "../components/nav_bar";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <html lang="en" className={roboto.className}>
      <body>
            <NavBar brandName="DBEC" imageSrcPath="/delorean.png"/>
            {children}
      </body>
    </html>
  );
}
