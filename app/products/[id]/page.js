"use client";
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Use useParams instead of useRouter
import Header from '@/app/Components/Header';
import { CartContext } from '@/app/Components/Context';
import Link from 'next/link';
import DisountedProducts from '@/app/Components/DisountedProducts';

export default function ProductPage() {
    const [product, setProduct] = useState(null);
    const { id } = useParams(); // Get id from dynamic route
    const { addToCart, cartProducts, setCartProducts } = useContext(CartContext);
    const [cartQuantity, setcartQuantity] = useState(0)

    useEffect(() => {
        const getSingleProduct = async (id) => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                const result = await response.json();
                setProduct(result);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        if (id) {
            getSingleProduct(id);
        }
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const handleCart = () => {
        // Find the product in the cart by its title or id (depending on what you are using)
        const existingProductIndex = cartProducts.findIndex(
          (cartItem) => cartItem.title === product.title
        );
      
        if (existingProductIndex >= 0) {
          // If product exists in the cart, just increase the quantity by 1
          const updatedCartProducts = [...cartProducts];
          updatedCartProducts[existingProductIndex].quantity += 1; // Increment by 1
          setCartProducts(updatedCartProducts);
        } else {
          // If product doesn't exist, add it to the cart with quantity 1
          const cartProduct = {
            thumbnail: product.thumbnail,
            title: product.title,
            quantity: 1, // Set initial quantity to 1
            price: product.price,
          };
          addToCart(cartProduct); // Call the original addToCart function
        }
      
        console.log("Product added to cart:", cartProducts);
       
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
      

    const increaseQuantity = () => {
        setcartQuantity(prevQuantity => {
            const updatedQuantity = prevQuantity + 1;
            return updatedQuantity
        })
    }

    return (

        <div className='w-full'>

            <Header cartQuantity={cartQuantity} />
            
            <div className='px-4 lg:px-12 py-4 md:py-12 grid grid-cols-1 md:grid-cols-2 items-center justify-center'>
                <div className='flex items-center justify-center'>
                    <div className='flex flex-col md:flex-row' key={product.id}>
                        <div className='hidden md:flex w-1/3 flex-col items-center'>
                            {product.images && product.images.length > 0 ? (
                                <div>
                                    <img src={product.images[0]} alt="Product Image 1" />
                                    <img src={product.images[1]} alt="Product Image 2" />
                                </div>
                            ) : (
                                <p>No images available</p> // Fallback message if images are not available
                            )}
                        </div>

                        <div className='hidden w-2/3 md:flex items-center'>
                            <img className='border border-1 border-solid border-black border-opacity-10' src={product.thumbnail} alt="Product Thumbnail" />
                        </div>

                        <div className='w-full flex justify-center md:hidden'>
                            <img className='w-[16rem] border border-1 border-solid border-black border-opacity-10' src={product.thumbnail} alt="Product Thumbnail" />
                        </div>

                        <div className='w-full flex justify-center items-center md:hidden'>
                            {product.images && product.images.length > 0 ? (
                                <div className='flex'>
                                    <img className='w-[8rem]' src={product.images[0]} alt="Product Image 1" />
                                    <img className='w-[8rem]' src={product.images[1]} alt="Product Image 2" />
                                </div>
                            ) : (
                                <p>No images available</p> // Fallback message if images are not available
                            )}
                        </div>

                    </div>
                </div>
                <div>
                    <div className='flex flex-col items-center md:items-start md:ml-28' key={product.id}>
                        <p className='text-lg md:text-2xl font bold'>{product.title}</p>
                        <p className='text-lg md:text-xl text-red-600'>${product.price}</p>
                        <div className='flex gap-2'>
                        <p className='text-sm pt-4'>{product.rating}</p>
                        <img className='w-[3.2rem] md:w-[3.3rem]' src={getRatingImage(product.rating)} />
                      </div>
                        <p className='text-xs'>{product.availabilityStatus}</p>
                        <br />
                        <div className='flex gap-6'>
                            <button className='w-28 h-10 bg-black text-white' onClick={() => {
                                increaseQuantity()
                                handleCart()
                            }}>Add to Cart</button>

                            
                        </div>
                        <br />
                        <p className='text-sm'>{product.shippingInformation}</p>
                    </div>
                </div>
                <div className='py-10 lg:px-12 flex flex-col'>
                    <div key={product.id}>
                        <h1 className='font-bold text-sm sm:text-base md:text-lg md:pb-2'>Product Description:</h1>
                        <p className='text-xs sm:text-sm md:text-base'>{product.description}</p>
                        <h1 className='font-bold text-sm sm:text-base md:text-lg pt-4 md:pt-10 md:pb-2'>Product Information:</h1>
                        <p className='text-xs sm:text-sm md:text-base'>{product.stock} Products Available</p>
                        <p className='text-xs sm:text-sm md:text-base'>{product.weight} KG Weight</p>
                        <p className='text-xs sm:text-sm md:text-base'>{product.dimensions?.width} Width</p>
                        <p className='text-xs sm:text-sm md:text-base'>{product.dimensions?.height} Height</p>
                        <p className='text-xs sm:text-sm md:text-base'>{product.dimensions?.depth} Depth</p>
                    </div>
                </div>
            </div>
            <div className='px-4 lg:px-24'>
                <h1 className='font-bold text-sm md:text-xl md:pb-2'>Reviews</h1>
                {product?.reviews?.map((item, index) => (
                    <div className='mt-4' key={index}>
                        <div className='flex justify-between'>
                            <p className='font-bold text-xs md:text-lg'>{item.reviewerName}</p>
                            <p className='text-xs md:text-base'><span className='font-bold text-xs md:text-base'>{item.rating}</span></p>
                            <p className='text-xs md:text-base'>{item.date}</p>
                        </div>
                        <p className='text-xs md:text-base'>{item.comment}</p>
                    </div>
                ))}
            </div>
            <DisountedProducts />
        </div>
    );
}
