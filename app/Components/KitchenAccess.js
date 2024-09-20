"use client"
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Link from 'next/link'


const KitchenAccess = () => {

    const [category, setcategory] = useState([])

    const getCategory = async () => {
        try {
            const response = await fetch("https://dummyjson.com/products/category/kitchen-accessories");
            const result = await response.json()
            console.log(result.products);
            setcategory(result.products)
        } catch (error) {

        }
    }

    useEffect(() => {
        getCategory()
    }, [])

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
        <>
            <Header />
            <div className='w-full'>

                <div className='items-center px-4 md:px-12 py-4 md:py-12'>

                    <div>
                        <h1 className='text-lg'><span className='text-lg font-bold'>Category: </span>Kitchen Accessories</h1>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full bg-cover bg-center mt-6'>
                        {category.map((categories) => {
                            return (
                                <Link href={`products/${categories.id}`} >
                                    <div className='flex flex-col items-center cursor-pointer'>

                                        <img className='w-[15rem] object-contain' src={categories.thumbnail} alt={categories.title} />
                                        <p className='text-base font-bold my-2'>{categories.title}</p>
                                        <p className='text-base font-bold my-0 text-red-600'>${categories.price}</p>
                                        <div className='flex gap-2'>
                                                <p className="text-xs md:text-sm mt-4">{categories.rating}</p>
                                                <img className='w-[3.05rem] md:w-[3.3rem]' src={getRatingImage(categories.rating)} />
                                            </div>
                                        <p className='text-sm my-1'>{categories.availabilityStatus}</p>
                                        <button className='w-24 h-9 bg-black bg-opacity-10 text-sm rounded'>Add to Cart</button>
                                    </div>

                                </Link>
                            )
                        })}
                    </div>


                </div>

            </div>
        </>


    )
}

export default KitchenAccess