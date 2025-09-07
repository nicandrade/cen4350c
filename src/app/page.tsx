'use client'

import Image from "next/image";
import React from 'react';
import AutoImageFader from "@/components/homepage_gallery";
import ProductCard from "@/components/product_card"
import {useState, useEffect} from 'react';

import imageProduct1 from '@/app/assets/clock_tower_gear.webp';
import imageProduct2 from '@/app/assets/mr_fusion.webp';
import imageProduct3 from '@/app/assets/grays_sports_almanac.webp';
import imageOutOfTime from '@/app/assets/out_of_time_license_plate.webp';
import imageIconAuthentic from '@/app/assets/authentic.png';
import imageIconUnique from '@/app/assets/unique.jpg';
import imageIconFreeShipping from '@/app/assets/free_shipping.png';


export default function Home() {
    //Placeholder Product Images - To Delete once backend is setup
    const product_images = [
        {src: imageProduct1.src, title: "Clock Tower Fragment"},
        {src: imageProduct2.src, title: "Mr. Fusion Energy Source"},
        {src: imageProduct3.src, title: "Grays Sports Almanac"},
    ];


    return (
    <div>
            {/*Top Image Gallery*/}
            <div>
                <AutoImageFader/>
            </div>
            {/*Our Differences Section*/}
            <div className="pt-10">
                <h2 className="text-center text-4xl font-extrabold italic">OUR DIFFERENCE</h2>
            </div>
            <div className="container mx-auto max-w-6xl pt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-[10%]">
                    <div
                        className="bg-white transform transition-transform duration-300 hover:scale-105">
                        <div className="flex justify-center">
                            <img className="w-auto h-32 object-cover"
                             src={imageIconAuthentic.src}
                             alt="Authentic icon"/>
                        </div>
                        <div className="p-6 text-center">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">AUTHENTIC</h2>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                Our items at Doc Brown's Eclectic Collections are 100% authentic and are never
                                reproductions.
                            </p>
                        </div>
                    </div>

                    <div
                        className="bg-white transform transition-transform duration-300 hover:scale-105">
                        <div className="flex justify-center">
                            <img className="w-auto h-32 object-cover"
                             src={imageIconUnique.src}
                             alt="Unique inventory icon"/>
                        </div>
                        <div className="p-6 text-center">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">UNIQUE INVENTORY</h2>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                Our products available changes weekly. You never know what you might find during your
                                next visit.
                            </p>
                        </div>
                    </div>
                    <div
                        className="bg-white overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        <div className="flex justify-center">
                           <img className="w-auto h-32 object-cover"
                             src={imageIconFreeShipping.src}
                             alt="Free shipping icon"/>
                       </div>
                        <div className="p-6 text-center">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">FREE SHIPPING</h2>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                Spend over $100, and get free ground shipping.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/*Amost Out of Time Section*/}
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/*LEFT SECTION*/}
                    <div className="md:col-span-2">
                        <div className="h-full flex items-center justify-center">
                            <img className="w-full object-cover"
                                 src={imageOutOfTime.src}
                                 alt="Placeholder image for the first section."/>
                        </div>
                        <div>
                            <h4 className="text-gray-800 text-xl font-bold">Check out these perfect gifts</h4>
                        </div>
                    </div>

                    {/*RIGHT SECTION*/}
                    <div className="md:col-span-3">
                        <div className="flex flex-col items-center justify-center pt-10">
                            <script src="https://cdn.tailwindcss.com"></script>
                            <div className="container mx-auto px-5 py-2 lg:pt-12">
                                <div className="-m-1 flex flex-wrap">
                                    {product_images.map((image, index) => (
                                        <ProductCard key={index} src={image.src} title={image.title}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )}
