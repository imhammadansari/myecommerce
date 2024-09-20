"use client"

import Link from 'next/link';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Categories = () => {
    return (
        <>
            <div className='w-full'>
                <div className='items-center px-4 py-4 text-lg lg:text-xl xl:text-xl'>
                    <h1 className='text-center mb-10 text-lg md:text-xl lg:text-3xl font-bold'>Best Categories</h1>
                    <div>
                        <Swiper
                            slidesPerView={1} // Default to 1 slide per view
                            spaceBetween={10}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            breakpoints={{
                                // When screen is >= 768px (tablet and up), show 2 slides
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 15,
                                },
                                // When screen is >= 1024px (laptop and up), show 3 slides
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <Link href='./Kitchen'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <img className='w-[10rem] md:w-[20rem] lg:w-[25rem]' src='./kitchen.jpg' />
                                        <h1 className='text-base md:text-lg lg:text-xl py-2'>Kitchen Accessories</h1>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href='./Mobile'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <img className='w-[10rem] md:w-[20rem] lg:w-[25rem]' src='./Mobile.jpg' />
                                        <h1 className='py-2 text-base md:text-lg lg:text-xl'>Mobile Accessories</h1>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href='./Sports'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <img className='w-[10rem] md:w-[20rem] lg:w-[25rem]' src='./sports.jpg' />
                                        <h1 className='py-2 text-base md:text-lg lg:text-xl'>Sports Accessories</h1>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href='./Groocery'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <img className='w-[10rem] md:w-[20rem] lg:w-[25rem]' src='./grocery.jpg' />
                                        <h1 className='py-2 text-base md:text-lg lg:text-xl'>Grocery</h1>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories;
