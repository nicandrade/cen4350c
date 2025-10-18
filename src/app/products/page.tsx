// 'use client'

import ProductCard from "@/components/product_card";
import React from "react";
import { createClient } from '@/utils/supabase/server';

interface Product {
    id: number;
    product_name: string | null;
    product_image_url: string | null;
}

export default async function Page() {
    const supabase = await createClient();

    const { data: products, error } = await supabase
        .from('product')
        .select('id, product_name, product_image_url');

    const safeProducts: Product[] = products ?? [];

    if (safeProducts.length === 0) {
        return (
            <div className="text-center font-roboto pt-10">
                <h2 className="text-4xl font-black italic">D'oh no products found.</h2>
            </div>
        );
    }

    return (
        <div className="md:col-span-4">
            <div className="font-roboto pt-10">
                <h2 className="text-center text-4xl font-black italic">OUR UNIQUE PRODUCTS</h2>
                <h4 className="text-center text-2xl font-extrabold italic">From a different time, and a way to hold onto memories.</h4>
            </div>
            <div className="flex flex-col items-center justify-center pt-10">
                <div className="container mx-auto px-5 py-2 lg:pt-12">
                    <div className="grid md:grid-cols-4 gap-4">
                        {safeProducts.map((product) => (
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
            <div className="flex space-x-4 justify-center items-center pt-5">
                <h4 className="font-roboto font-black text-center text-xl italic">DON'T SEE WHAT YOU ARE LOOKING FOR?</h4>
                <h4 className="text-center text-xl ">Check back later, our inventory changes weekly</h4>
            </div>
        </div>
    );
}