"use client"
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Link from 'next/link'


const MobileAccess = () => {

    const [category, setcategory] = useState([])

    const getCategory = async () => {
        try {
            const response = await fetch("https://dummyjson.com/products/category/mobile-accessories");
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

                    

                    <div className='items-center px-4 md:px-12 lg:px-4 xl:px-4 py-4 text-lg lg:text-xl xl:text-xl'>
                    <div>
                        <h1 className='text-base md:text-lg'><span className='text-base md:text-lg font-bold'>Category: </span>Mobile Accessories</h1>
                    </div>
               
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full bg-cover bg-center mt-6'>
                    {category?.map((item) => {
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


                </div>

            
        </>


    )
}

export default MobileAccess