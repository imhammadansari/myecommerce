import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Link from 'next/link';
import Footer from './Footer';

const DiscountedProducts = () => {
  const [container, setContainer] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products?sortBy=title&order=asc');
      const result = await response.json();
      setContainer(result.products.slice(0, 10));
      console.log(result.products);
    } catch (error) {
      console.log('Error');
    }
  };

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

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="w-full">
        <div className="px-4 lg:px-12 py-4 md:py-12">
          <h1 className='text-center text-lg md:text-xl lg:text-3xl font-bold my-4 md:my-8'>Discounted Products</h1>

          <Swiper
            slidesPerView={2} // Default slides for small screens
            spaceBetween={30}
            modules={[Pagination]} 
            className="mySwiper"
            breakpoints={{
              768: { // From 768px (md screens)
                slidesPerView: 3,
              },
              1024: { // From 1024px (lg screens)
                slidesPerView: 4,
              },
            }}
          >
            {container?.map((item) => (
              <SwiperSlide key={item.id}>
                <Link href={`/products/${item.id}`}>
                  <div className="flex flex-col md:mt-6 items-center cursor-pointer">
                    <img
                      className="w-[8rem] md:w-[15rem] object-contain border border-1 border-black border-opacity-10"
                      src={item.thumbnail}
                      alt={item.title}
                    />
                    <div className='flex flex-col items-start'>
                    <p className="text-xs md:text-base my-2">{item.title}</p>
                    <p className="text-xs md:text-base font-bold my-0 text-red-600">${item.price}</p>

                    <div className='flex gap-2'>
                    <p className="text-xs md:text-sm mt-4">{item.rating}</p>
                    <img className='w-[3.05rem] md:w-[3.3rem]' src={getRatingImage(item.rating)} />
                      </div>
                    </div>

                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DiscountedProducts;
