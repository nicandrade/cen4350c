import React from "react";
import how_it_started from "@/app/assets/how_it_started.jpg";
import growth_and_expansion from "@/app/assets/growth_and_expansion.jpg";
import additional_products from "@/app/assets/enchantment_under_the_seas_dance.jpg";


export default function Page() {
    const product_images = [
        {src: how_it_started.src, title: "How it Started"},
        {src: growth_and_expansion.src, title: "Growth and Expansion"},
        {src: additional_products.src, title: "Additional Products"},
    ];

    return (
        <div className="md:col-span-4">
            <div className="pt-10">
                <h2 className="text-center text-4xl font-black italic">ABOUT US</h2>
                <h4 className="text-center text-2xl font-black">From a different time, and a way to hold onto
                    memories.</h4>
            </div>

            {/* ABOUT SECTIONS */}
            <div className="container w-3/4 mx-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">

                    {/* SECTION 1 */}
                    {/* LEFT */}
                    <div className="md:col-span-3 py-10">
                        <img className="w-auto h-75 object-cover mx-auto"
                             src={how_it_started.src}
                             alt="How it started"/>
                    </div>

                    {/* RIGHT */}
                    <div className="md:col-span-2 py-10">
                        <div>
                            <h2 className="text-gray-800 text-4xl font-black">HOW IT STARTED</h2>
                            <p className="pt-7"> In 1985, the company’s founder, Doctor Emmett Brown successfully
                                demonstrated the concept of time travel at the Twin Pines mall, by sending a Delorean
                                DMC-12 one minute into the future. From that point forward, the ability to travel
                                throughout time to collect unique memorabilia was achieved.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">

                    {/* SECTION 2 */}
                    {/* LEFT*/}
                    <div className="md:col-span-2 py-10 text-right">
                        <div>
                            <h2 className="text-gray-800 text-4xl font-black">GROWTH AND EXPANSION</h2>
                            <p className="pt-7"> Since the initial time travel experiments, our team has grown to
                                include 15 Delorean DMC-12’s to help cover more area throughout the world in collecting
                                unique memorabilia. The team is now looking to expand further to include trains;
                                expanding the global footprint and size of items able to be retrieved.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="md:col-span-3 py-4">
                        <img className="w-auto h-75 object-cover mx-auto"
                             src={growth_and_expansion.src}
                             alt="Growth and Expansion"/>
                    </div>

                </div>
            </div>

            {/* READY TO SEE MORE SECTIONS */}
            <div className="container w-3/4 mx-auto py-4">
                <div className="grid grid-cols-1 md:grid-cols-7 gap-8 items-center">

                    {/* SECTION 1 */}
                    {/* LEFT */}
                    <div className="md:col-span-2">
                        <img className="w-auto h-40 object-cover mx-auto"
                             src={additional_products.src}
                             alt="How it started"/>
                    </div>

                    {/* Center */}
                    <div className="md:col-span-3">
                        <div className="text-left">
                            <h2 className="text-gray-800 text-2xl font-black italic">READY TO SEE OUR COLLECTION?</h2>
                            <h5 className="text-l font-extrabold">Visit our Product section for the latest items.</h5>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="md:col-span-2">
                        <div>
                            <a href="/products">
                                <h3 className="cursor-pointer text-center px-4 py-1 rounded-full bg-amber-400 text-blue-950 hover:bg-blue-950
    hover:text-amber-400 border border-amber-400 ease-in-out duration-300">VIEW PRODUCTS</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}