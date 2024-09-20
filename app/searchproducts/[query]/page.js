"use client";
import Footer from '@/app/Components/Footer';
import Header from '@/app/Components/Header';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function SearchProduct() {
    const [container, setContainer] = useState([]);

    const { query } = useParams();


    const fetchData = async (query) => {

try {
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const result = await response.json();
    setContainer(result.products);
    console.log(result.products);
} catch (error) {
    console.error(error);
}
    };

    useEffect(() => {

        if(query) {
        fetchData(query);
        }
    }, [query]);

    const getRatingImage = (rating) => {
        if (rating === 0) {
            return '/rating0.png';
        } else if (rating > 0 && rating <= 0.9) {
            return '/rating1.png';
        } else if (rating > 1 && rating <= 1.9) {
            return '/rating2.png';
        } else if (rating > 2 && rating <= 3.9) {
            return '/rating3.png';
        } else if (rating > 3 && rating <= 4.9) {
            return '/rating4.png';
        } else {
            return '/rating5.png';
        }
    }

    return (

        
        <div className='w-full'>

            <Header />

            <div className='items-center px-4 md:px-12 lg:px-4 xl:px-4 py-4 text-lg lg:text-xl xl:text-xl'>
               
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full bg-cover bg-center mt-6'>
                    {container?.map((item) => {
                        return (
                            <>
                            <Link href={`/products/${item.id}`} >
                            <div key={item.id} className='hidden md:flex flex-col mt-6 items-center py-4'>
                                <img className='w-[15rem] object-contain border border-1 border-black border-opacity-10' src={item.thumbnail} alt={item.title} />
                                <p className='text-sm my-2'>{item.title}</p>                                                     
                                <p className='text-base font-bold my-0 text-red-600'>${item.price}</p>
                                <div className='flex gap-2'>
                                                <p className="text-xs md:text-sm mt-4">{item.rating}</p>
                                                <img className='w-[3.05rem] md:w-[3.3rem]' src={getRatingImage(item.rating)} />
                                            </div>
                                <p className='text-sm my-1'>{item.availabilityStatus}</p>
                            </div>

                            <div key={item.id} className='flex mt-4 items-center py-2 md:hidden'>
                                <img className='w-[10rem] object-contain border border-1 border-black border-opacity-10' src={item.thumbnail} alt={item.title} />
                                
                                <div className='flex flex-col px-4'>
                                <p className='text-sm '>{item.title}</p>                                                     
                                <p className='text-sm font-bold text-red-600'>${item.price}</p>
                                <p className='text-sm text-green-950'>{item.rating}</p>
                                <p className='text-sm'>{item.availabilityStatus}</p>
                                </div>
                            </div>
                            </Link>
                            </>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}