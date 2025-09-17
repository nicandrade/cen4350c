'use client'
import {useState, useEffect} from 'react';

interface ProductCardProps {
    src: string;
    title: string;
}

const ProductCard = ({src, title}: ProductCardProps) => {
    return (
        <div className="relative w-full h-full group">
            <img
                alt={title}
                className="block h-full w-full rounded-2xl object-cover object-center"
                src={src}
            />
            <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-4
                          bg-gradient-to-t from-white via-white/85 to-transparent
                          rounded-b-2xl h-1/2">
                <div className="flex justify-between items-center w-full">
                    <h2 className="text-blue-950 text-sm font-bold pr-1">{title}</h2>
                    <button
                        className="bg-amber-400 text-blue-950 hover:bg-blue-950 hover:text-amber-400 border
                        border-amber-400 font-bold py-1 px-3 rounded-full transition-colors duration-300">
                        View
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;