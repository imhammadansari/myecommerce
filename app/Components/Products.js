"use client";
import React, { useEffect, useState } from 'react';


const Products = () => {
    const [query, setQuery] = useState('');
    const [container, setContainer] = useState([]);


    const fetchData = async (e) => {

try {
    const response = await fetch(`https://dummyjson.com/products/search?q=phone`);
    const result = await response.json();
    setContainer(result.products);
    console.log(result.products);
} catch (error) {
    console.error(error);
}
    };

    useEffect(() => {
        fetchData();
    });

    return (
        <div className='w-full'>
            <div className='items-center px-4 md:px-12 lg:px-4 xl:px-4 py-4 text-lg lg:text-xl xl:text-xl'>
               
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full bg-cover bg-center mt-6'>
                    {container?.map((item) => {
                        return (
                            <div key={item.id} className='flex flex-col mt-6 items-center'>
                                <img className='w-[15rem] object-contain' src={item.thumbnail} alt={item.title} />
                                <p className='text-sm my-2'>{item.title}</p>                                                     
                                <p className='text-base font-bold my-0 text-red-600'>${item.price}</p>
                                <p className='text-sm my-1'>Rating = {item.rating}</p>
                                <p className='text-sm my-1'>{item.availabilityStatus}</p>
                                <button className='w-24 h-9 bg-black bg-opacity-10 text-sm rounded'>Add to Cart</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Products;
