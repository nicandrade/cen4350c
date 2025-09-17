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



export default function Page(){
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
            <div className="font-roboto pt-10">
                <h2 className="text-center text-4xl font-black italic">OUR UNIQUE PRODUCTS</h2>
                <h4 className="text-center text-2xl font-extrabold italic">From a different time, and a way to hold onto memories.</h4>
            </div>
            <div className="flex flex-col items-center justify-center pt-10">
                <div className="container mx-auto px-5 py-2 lg:pt-12">
                    <div className="grid md:grid-cols-4 gap-4">
                        {product_images.map((image, index) => (
                            <div key={index} className="aspect-square">
                                <ProductCard src={image.src} title={image.title}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex space-x-4 justify-center items-center pt-5">
                <h4 className="font-roboto font-black text-center text-xl italic">DON'T SEE WHAT YOU ARE LOOKING FOR?</h4>
                <h4 className="text-center text-xl ">Check back later, our inventory changes weekly</h4>
            </div>
        </div>
    );
}