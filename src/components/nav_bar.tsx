'use client'
import Link from 'next/link';
import React, {useState} from 'react';
import Image from "next/image";
import Reg_Auth_Dialog from "@/components/reg_auth";


const styles = {
    navLinks: 'cursor-pointer ml-10 uppercase text-xl',
}


interface NavBarProps {
    brandName: string;
    imageSrcPath: string;
}

const NavBar: React.FC<NavBarProps> = ({brandName, imageSrcPath}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <nav className='w-full shadow-xl bg-blue-950'>
            {/*Desktop Version*/}
            <div className="flex items-center justify-between h-15 px-5 w-full">
                <div className="flex items-center space-x-5 z-50">
                    <Image src={imageSrcPath}
                           alt={"site logo"}
                           width={225}
                           height={100}/>
                    <div className='hidden sm:flex'>
                        <ul className='flex text-white'>
                            <li className={styles.navLinks}>
                                <Link href="/">HOME</Link>
                            </li>
                            <li className={styles.navLinks}>
                                <Link href="/products">PRODUCTS</Link>
                            </li>
                            <li className={styles.navLinks}>
                                <Link href="/about">ABOUT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='hidden sm:flex items-center space-x-5 z-20'>
                    <h4 className="text-white">WELCOME, {brandName}</h4>
                    <h3 onClick={toggleVisibility} className="cursor-pointer px-4 py-1 rounded-full
                    text-amber-400 hover:bg-amber-400 hover:text-blue-950 border ease-in-out duration-300">REGISTER</h3>
                    <h3 onClick={toggleVisibility} className="cursor-pointer px-4 py-1 rounded-full bg-amber-400 text-blue-950
                    hover:bg-blue-950 hover:text-amber-400 border border-amber-400 ease-in-out duration-300">LOG IN</h3>
                </div>
            </div>

            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out 
                ${isVisible ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0 p-0'}`}
            >
                <div className="bg-white">
                    <div className="w-3/4 ml-auto">
                        <Reg_Auth_Dialog/>
                    </div>

                </div>
            </div>
            {/* End of Sliding Panel */}

            {/*Mobile Version*/}
            {/*//Need to build out mobile version of Naviagion*/}
        </nav>
    )
}

export default NavBar;