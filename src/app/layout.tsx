import "./globals.css";
import { Roboto } from 'next/font/google';
import NavBar from "../components/nav_bar";
import imagePath from '@/app/assets/delorean.png';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700', "800", "900"],
    style: ['normal', 'italic'],
    display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
            <NavBar brandName="DBEC" imageSrcPath={imagePath}/>
            {children}
      </body>
    </html>
  );
}
