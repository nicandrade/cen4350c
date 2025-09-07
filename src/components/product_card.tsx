'use client'
import { useState, useEffect } from 'react';

interface ProductCardProps {
    src: string;
    title: string;
}

const ProductCard = ({ src, title }:ProductCardProps) => {
    return (
        <div className="flex w-full sm:w-1/2 md:w-1/3 flex-wrap">
            <div className="relative w-full p-1 md:p-2">
                <img alt="gallery" className="block h-full w-full rounded-2xl object-cover object-center"
                     src={src} />
                <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent rounded-b-lg">
                    <h2 className="text-blue-950 text-sm font-bold">{title}</h2>
                    <button className="mt-2 self-end bg-amber-400 text-blue-950
                    hover:bg-blue-950 hover:text-amber-400 border border-amber-400 font-bold py-1 px-3 rounded-4xl">
                        View
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
