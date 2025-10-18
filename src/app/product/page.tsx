import ProductCard from "@/components/product_card";
import React from "react";
import {createClient} from '@/utils/supabase/server';
import Link from 'next/link';
import { unstable_noStore } from 'next/cache';

interface Product {
    id: number;
    product_name: string | null;
    product_image_url: string | null;
    product_price: number | null;
    product_description: string | null;
}

interface ProductListing {
    id: number;
    product_name: string | null;
    product_image_url: string | null;
}

export default async function Page({
                                       searchParams,
                                   }: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    unstable_noStore();

    const supabase = await createClient();

    const productIdParam = searchParams.id;

    if (!productIdParam || Array.isArray(productIdParam)) {
        return (
            <div className="text-center font-roboto pt-10">
                <h2 className="text-4xl font-black italic">D'oh! No product ID provided.</h2>
            </div>
        );
    }

    const productId = parseInt(productIdParam, 10);

    if (isNaN(productId)) {
        return (
            <div className="text-center font-roboto pt-10">
                <h2 className="text-4xl font-black italic">D'oh! Invalid product ID.</h2>
            </div>
        );
    }

    const {data: productData, error: productError} = await supabase
        .from('product')
        .select('id, product_name, product_image_url, product_price, product_description')
        .eq('id', productId)
        .single();

    if (productError || !productData) {
        console.error("Error fetching product:", productError);
        return (
            <div className="text-center font-roboto pt-10">
                <h2 className="text-4xl font-black italic">D'oh! Product not found.</h2>
            </div>
        );
    }

    const product: Product = productData as Product;

    const {data: relatedProducts, error: relatedError} = await supabase
        .from('product')
        .select('id, product_name, product_image_url')
        .neq('id', productId)
        .limit(2);

    const safeRelatedProducts: ProductListing[] = relatedProducts ?? [];

    return (
        <div className="md:col-span-4">
            <div className="flex flex-col w-full items-center justify-center">
                <div className="relative w-full h-[500px] overflow-hidden">
                    <img
                        src={product.product_image_url ?? '/delorean.png'}
                        alt={product.product_name ?? 'Error, missing name'}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                    />
                    <Link
                        href="/products"
                        className="absolute top-15 left-10
                       inline-flex items-center border-3
                       text-amber-400  font-medium
                       bg-blue-950 border-amber-400 bg-opacity-40 hover:bg-opacity-60
                       p-2 rounded-lg transition-colors duration-200
                       z-10"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        BACK
                    </Link>
                </div>
            </div>

            <div className="container mx-auto max-w-6xl pl-10 pr-10">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

                    <div className="md:col-span-3 py-10">
                        <div>
                            <h2 className="text-gray-800 text-4xl font-black">{product.product_name}</h2>
                            <div className="flex items-center space-x-4 pt-3">
                                <h4 className="text-gray-800 text-lg font-black">{product.product_price}</h4>
                                <h3 className="cursor-pointer px-4 py-1 rounded-full bg-amber-400 text-blue-950 hover:bg-blue-950 hover:text-amber-400 border border-amber-400 ease-in-out duration-300">BUY</h3>
                            </div>
                            <p className="pt-7">{product.product_description}</p>
                        </div>
                    </div>


                    <div className="md:col-span-2">
                        <div className="md:col-span-4">
                            <div className="font-roboto pt-10">
                                <h4 className="text-left text-lg italic">Not quite what you are looking for, think about
                                    these</h4>
                                <h2 className="text-left text-4xl font-black italic">SIMILAR ITEMS</h2>
                            </div>
                            <div className="flex flex-col items-center justify-center pt-3">
                                <div className="container mx-auto px-5 py-2">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {safeRelatedProducts.map((relatedProduct) => (
                                            <div key={relatedProduct.id} className="aspect-square">
                                                <ProductCard
                                                    product_name={relatedProduct.product_name}
                                                    product_image_url={relatedProduct.product_image_url}
                                                    product_id={relatedProduct.id}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-4 justify-center items-center pt-2">
                                <a
                                    href="/products"
                                    className="font-roboto font-black text-center text-lg uppercase w-full"
                                >
                                    VIEW MORE PRODUCTS
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}