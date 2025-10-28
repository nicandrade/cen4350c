'use client'
import Link from 'next/link';
import React, {useState} from 'react';
import Image from "next/image";
import Reg_Auth_Dialog from "@/components/reg_auth";
import Reg_auth_mobile from "@/components/reg_auth_mobile";
import {logout} from '@/app/auth/actions';


const styles = {
    navLinks: 'cursor-pointer ml-10 uppercase text-xl',
}

interface User {
    displayName: string;
    id: string;
}

interface NavBarProps {
    imageSrcPath: string;
    user: User | null;
}

const LogoutButton = () => (
    <h3
        onClick={logout}
        className="cursor-pointer px-4 py-1 rounded-full bg-amber-400 text-blue-950
        hover:bg-blue-950 hover:text-amber-400 border border-amber-400 ease-in-out duration-300"
    >
        LOG OUT
    </h3>
);

const NavBar: React.FC<NavBarProps> = ({imageSrcPath, user}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const NAV_HEIGHT_PX = '60px';
    const NAV_HEIGHT_TAILWIND = 'h-[60px]'

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };


    return (
        <nav className='w-full shadow-xl bg-blue-950'>
            {/*/!*Desktop Version*!/*/}
            {/*<div className="flex items-center justify-between h-15 px-5 w-full">*/}
            {/*    <div className="flex items-center space-x-5 z-50">*/}
            {/*        <Image src={imageSrcPath}*/}
            {/*               alt={"site logo"}*/}
            {/*               width={225}*/}
            {/*               height={100}/>*/}
            {/*        <div className='hidden sm:flex'>*/}
            {/*            <ul className='flex text-white'>*/}
            {/*                <li className={styles.navLinks}>*/}
            {/*                    <Link href="/">HOME</Link>*/}
            {/*                </li>*/}
            {/*                <li className={styles.navLinks}>*/}
            {/*                    <Link href="/products">PRODUCTS</Link>*/}
            {/*                </li>*/}
            {/*                <li className={styles.navLinks}>*/}
            {/*                    <Link href="/about">ABOUT</Link>*/}
            {/*                </li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className='hidden sm:flex items-center space-x-5 z-20'>*/}

            {/*        /!* Conditional welcom message based on logged in user*!/*/}
            {/*        {user && (*/}
            {/*            <h4 className="text-white">*/}
            {/*                WELCOME, <span>{user.displayName.toUpperCase()}</span>*/}
            {/*            </h4>*/}
            {/*        )}*/}
            {/*        /!*Hide register and login if user logged in.*!/*/}
            {/*        {!user && (*/}
            {/*            <>*/}
            {/*                <h3 onClick={toggleVisibility} className="cursor-pointer px-4 py-1 rounded-full*/}
            {/*                    text-amber-400 hover:bg-amber-400 hover:text-blue-950 border ease-in-out duration-300">*/}
            {/*                    REGISTER*/}
            {/*                </h3>*/}
            {/*                <h3 onClick={toggleVisibility} className="cursor-pointer px-4 py-1 rounded-full bg-amber-400 text-blue-950*/}
            {/*                    hover:bg-blue-950 hover:text-amber-400 border border-amber-400 ease-in-out duration-300">*/}
            {/*                    LOG IN*/}
            {/*                </h3>*/}
            {/*            </>*/}
            {/*        )}*/}

            {/*        /!*Future add...logout button*!/*/}
            {/*         {user && <LogoutButton />}*/}

            {/*    </div>*/}
            {/*</div>*/}

            {/*<div*/}
            {/*    className={`overflow-hidden transition-all duration-500 ease-in-out */}
            {/*    ${isVisible ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0 p-0'}`}*/}
            {/*>*/}
            {/*    <div className="bg-white">*/}
            {/*        <div className="w-3/4 ml-auto">*/}
            {/*            <Reg_Auth_Dialog/>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*</div>*/}
            {/*/!* End of Sliding Panel *!/*/}

            {/*Navigation Bar*/}
            <div className={`flex items-center justify-between ${NAV_HEIGHT_TAILWIND} px-5 w-full bg-blue-950`}>

                <div className="flex items-center space-x-5 z-50">
                    <Image src={imageSrcPath}
                           alt={"site logo"}
                           width={225}
                           height={100}
                           priority={true}
                    />

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
                    {user && (
                        <h4 className="text-white">
                            WELCOME, <span>{user.displayName.toUpperCase()}</span>
                        </h4>
                    )}
                    {!user && (
                        <>
                            <h3 onClick={toggleVisibility} className="cursor-pointer px-4 py-1 rounded-full
                                text-amber-400 hover:bg-amber-400 hover:text-blue-950 border ease-in-out duration-300">
                                REGISTER
                            </h3>
                            <h3 onClick={toggleVisibility} className="cursor-pointer px-4 py-1 rounded-full bg-amber-400 text-blue-950
                                hover:bg-blue-950 hover:text-amber-400 border border-amber-400 ease-in-out duration-300">
                                LOG IN
                            </h3>
                        </>
                    )}
                    {user && <LogoutButton/>}
                </div>

                {/* MOBILE HAMBURGER */}
                <button
                    onClick={toggleMenu}
                    className="sm:hidden text-white z-50 p-2"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    )}
                </button>
            </div>

            <div className={`
                sm:hidden 
                absolute top-[${NAV_HEIGHT_PX}] right-0 w-full bg-blue-800 text-white shadow-lg z-40 
                transform transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'translate-y-0 opacity-100 max-h-screen' : '-translate-y-full opacity-0 max-h-0 overflow-hidden'}
            `}>
                <ul className='flex flex-col p-4 pt-15 space-y-3'>

                    <li className={`${styles.navLinks} border-b border-blue-700 pb-2`} onClick={toggleMenu}>
                        <Link href="/">HOME</Link>
                    </li>
                    <li className={`${styles.navLinks} border-b border-blue-700 pb-2`} onClick={toggleMenu}>
                        <Link href="/products">PRODUCTS</Link>
                    </li>
                    <li className={`${styles.navLinks} border-b border-blue-700 pb-2`} onClick={toggleMenu}>
                        <Link href="/about">ABOUT</Link>
                    </li>

                    <hr className="my-2 border-blue-700"/>

                    {user && (
                        <div className="flex flex-col space-y-3">
                            <h4 className="text-white font-bold">
                                WELCOME, <span>{user.displayName.toUpperCase()}</span>
                            </h4>
                            <LogoutButton />
                        </div>
                    )}

                    {!user && (
                        <div className="flex flex-col space-y-3 pt-2">
                            <h3 onClick={() => {
                                toggleVisibility();
                                toggleMenu();
                            }}
                                className="cursor-pointer text-center px-4 py-2 rounded-full text-amber-400 border border-amber-400
                                           hover:bg-amber-400 hover:text-blue-950 duration-300">
                                REGISTER
                            </h3>
                            <h3 onClick={() => {
                                toggleVisibility();
                                toggleMenu();
                            }}
                                className="cursor-pointer text-center px-4 py-2 rounded-full bg-amber-400 text-blue-950
                                           hover:bg-blue-950 hover:text-amber-400 border border-amber-400 duration-300">
                                LOG IN
                            </h3>
                        </div>
                    )}

                </ul>
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

            {/*//Need to build out mobile version of Naviagion*/}
        </nav>
    )
}

export default NavBar;