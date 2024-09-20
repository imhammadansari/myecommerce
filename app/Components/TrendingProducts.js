"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const TrendingProducts = () => {
    const [trendingProducts, setTrendingProducts] = useState([])
    const router = useRouter()

    const getTrendingProducts = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products/search?q=phone')
            const result = await response.json()
            console.log(result)
            setTrendingProducts(result.products.slice(0, 8)) // Limit to 8 products
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getTrendingProducts();
    }, [])

    const handleProductClick = (id) => {
        router.push(`/products/${id}`) // Navigate to product detail page
        console.log(id);
    }

    const getRatingImage = (rating) => {
        if(rating === 0){
          return '/rating0.png';
        } else if (rating > 0 && rating <=0.9){
          return '/rating1.png';
        } else if (rating > 1 && rating <=1.9){
          return '/rating2.png';
        } else if (rating > 2 && rating <=3.9){
          return '/rating3.png';
        } else if (rating > 3 && rating <=4.9){
          return '/rating4.png';
        } else{
          return '/rating5.png';
        }
      }

    return (
        <>
            <div className='w-full'>
                <div className='items-center px-4 md:px-12 py-4 md:py-12'>
                    <div>
                        <h1 className='text-center text-lg md:text-xl lg:text-3xl font-bold'>Best Selling Products</h1>
                    </div>

                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full bg-cover bg-center mt-6'>
                        {trendingProducts.map((item) => {
                            return (
                                <Link href={`/products/${item.id}`} >
                                <div 
                                    className='flex flex-col md:mt-6 items-center cursor-pointer'>
                                    <img className='w-[8rem] md:w-[15rem] object-contain border border-1 border-black border-opacity-10' src={item.thumbnail} alt={item.title} />
                                    <p className='text-xs md:text-base my-2'>{item.title}</p>                                                     
                                    <p className='text-xs md:text-base font-bold my-0 text-red-600'>${item.price}</p>
                                    <div className='flex gap-2'>
                    <p className="text-xs md:text-sm mt-4">{item.rating}</p>
                    <img className='w-[3.05rem] md:w-[3.3rem]' src={getRatingImage(item.rating)} />
                      </div>
                                    <p className='text-xs md:text-sm my-1'>{item.availabilityStatus}</p>
                            </div>
                                </Link>
                            );
                        })}


                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingProducts
