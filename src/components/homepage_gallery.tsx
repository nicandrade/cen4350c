'use client'
import React, {useState, useEffect} from 'react';
import imageGallery1 from '@/app/assets/gallery_1.webp';
import imageGallery2 from '@/app/assets/gallery_2.webp';
import imageGallery3 from '@/app/assets/gallery_3.webp';

const images = [
    {src: imageGallery1.src},
    {src: imageGallery2.src},
    {src: imageGallery3.src},
];

const AutoImageFader: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col w-full items-center justify-center">
            <div className="relative w-full h-[500px] overflow-hidden">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                            currentIndex === index ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default AutoImageFader;