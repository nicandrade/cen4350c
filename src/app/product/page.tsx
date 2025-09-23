import ProductCard from "@/components/product_card";
import React from "react";
import imageProduct1 from "@/app/assets/clock_tower_gear.webp";
import imageProduct2 from "@/app/assets/mr_fusion.webp";
import imageProduct3 from "@/app/assets/grays_sports_almanac.webp";
import imageProduct4 from "@/app/assets/hoverboard_battery.jpg";
import imageProduct5 from "@/app/assets/window_television.jpg";
import imageProduct6 from "@/app/assets/reelect_mayor_wilson.jpg";
import imageProduct7 from "@/app/assets/hill_valley_telegraph.webp";
import imageProduct8 from "@/app/assets/save_clock_tower_button.jpg";
import imageProduct9 from "@/app/assets/a_match_made_in_space.webp";
import imageProduct10 from "@/app/assets/enchantment_under_the_seas_dance.jpg";
import imageProduct11 from "@/app/assets/cowboy_shirt.jpg";
import imageProduct12 from "@/app/assets/cow_manure.webp";


export default function Page() {
    const product_images = [
        {src: imageProduct1.src, title: "Clock Tower Fragment"},
        {src: imageProduct2.src, title: "Mr. Fusion Energy Source"},
        {src: imageProduct3.src, title: "Grays Sports Almanac"},
        {src: imageProduct4.src, title: "Hoverboard Replacement Battery"},
        {src: imageProduct5.src, title: "Window Television Set"},
        {src: imageProduct6.src, title: "Re-Elect Mayor Goldie Wilson Poster"},
        {src: imageProduct7.src, title: "Hill Valley Telegraph Newspaper"},
        {src: imageProduct8.src, title: "Save The Clock Tower Button"},
        {src: imageProduct9.src, title: "A Match Made in Space Book"},
        {src: imageProduct10.src, title: "Enchantment Under The Sea Dance Poster"},
        {src: imageProduct11.src, title: "1950's Cowboy Shirt"},
        {src: imageProduct12.src, title: "Organic 1890's Manure"},

    ];

    return (
        <div className="md:col-span-4">
            <div className="flex flex-col w-full items-center justify-center">
                <div className="relative w-full h-[500px] overflow-hidden">
                    <img
                        src={imageProduct3.src}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                    />
                </div>
            </div>
            {/*PRODUCT DETAIL SECTION*/}
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/*LEFT SECTION*/}
                    <div className="md:col-span-3 py-10">
                        <div>
                            <h2 className="text-gray-800 text-4xl font-black">Grays Sports Almanac</h2>
                            <div className="flex items-center space-x-4 pt-3">
                                <h4 className="text-gray-800 text-lg font-black">$149.99</h4>
                                <h3 className="cursor-pointer px-4 py-1 rounded-full bg-amber-400 text-blue-950 hover:bg-blue-950 hover:text-amber-400 border border-amber-400 ease-in-out duration-300">BUY</h3>
                            </div>
                            <p className="pt-7"> Are you a sports fanatic that enjoys knowing all of the statistics to major sporting
                                events from 1950 to 2000? If so, don’t look any further. This unique book contains
                                results from major sporting events such as baseball, football, hockey, and horse
                                racing. </p>
                        </div>
                    </div>

                    {/*RIGHT SECTION*/}
                    <div className="md:col-span-2">
                        <div className="md:col-span-4">
                            <div className="font-roboto pt-10">
                                <h4 className="text-left text-lg italic">Not quite what you are looking for, think about
                                    these</h4>
                                <h2 className="text-left text-4xl font-black italic">SIMILAR ITEMS</h2>
                            </div>
                            <div className="flex flex-col items-center justify-center pt-10">
                                <div className="container mx-auto px-5 py-2">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {product_images.map((image, index) => {
                                            if (index < 2) {
                                                return (
                                                    <div key={index} className="aspect-square">
                                                        <ProductCard src={image.src} title={image.title}/>
                                                    </div>
                                                );
                                            }
                                            return null;
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-4 justify-center items-center pt-5">
                                <h4 className="font-roboto font-black text-center text-xl italic">VIEW MORE</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}