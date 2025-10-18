import Image from "next/image";
import React from 'react';
import AutoImageFader from "@/components/homepage_gallery";
import ProductCard from "@/components/product_card"

import imageOutOfTime from '@/app/assets/almost_out_of_time.webp';
import imageIconAuthentic from '@/app/assets/authentic.png';
import imageIconUnique from '@/app/assets/unique.jpg';
import imageIconFreeShipping from '@/app/assets/free_shipping.png';
import { createClient } from '@/utils/supabase/server';

interface Product {
    id: number;
    product_name: string | null;
    product_image_url: string | null;
}

export default async function Home() {
    const supabase = await createClient();
    const { data: products, error } = await supabase
        .from('product')
        .select('id, product_name, product_image_url, product_price, product_description');

    const safeProducts: Product[] = products ?? [];

    if (safeProducts.length === 0) {
        return (
            <div className="text-center font-roboto pt-10">
                <h2 className="text-4xl font-black italic">D'oh no products found.</h2>
            </div>
        );
    }

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

                        <div className="-mt-10">
                            <h4 className="text-gray-800 text-xl font-bold my-0 text-center">Check out these perfect gifts</h4>
                        </div>
                    </div>

                    {/*RIGHT SECTION*/}
                    <div className="md:col-span-3">
                        <div className="flex flex-col items-center justify-center pt-10">
                            <div className="container mx-auto px-5 py-2 lg:pt-12">
                                <div className="grid grid-cols-3 gap-4">
                                    {safeProducts.slice(0,3).map((product) => (
                                        <div key={product.id} className="aspect-square">
                                            <ProductCard
                                                product_name={product.product_name}
                                                product_image_url={product.product_image_url}
                                                product_id={product.id}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )}
