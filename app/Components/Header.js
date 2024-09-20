"use client"
import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from './Context';



const Header = () => {
    const [query, setQuery] = useState('');
    const [signupToggle, setsignupToggle] = useState(false)

    const router = useRouter();
    const { cartQuantity } = useContext(CartContext);
    console.log(cartQuantity)
    
    
    
    const toggleSignUp = () => {
        setsignupToggle(!signupToggle)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if(query.trim()){
            router.push(`/searchproducts/${query}`)
        }
    }

    return (
        <>
        
            <div className='w-full '>
                <div className='items-center pl-4 md:pl-12 py-4 text-lg lg:text-xl xl:text-xl'>


                    {/* <div className='absolute top-0 right-0 flex justify-end px-4 md:px-12 py-4 lg:hidden xl:hidden z-50'>
                        <img className='w-7 cursor-pointer filter invert' src='menu-bar.png' onClick={menu} />
                    </div>

                    {showmenu && (
                        <div className='w-36 md:w-48 h-56 absolute top-0 right-0 flex justify-center text-center my-14 px-4 py-5 z-50 rounded'style={{ backgroundColor: '#06090b' }}>
                            <ul className='flex flex-col gap-4'>
                                <li className='text-black hover:bg-sky-600 hover:text-black'><Link href="/">Home</Link></li>
                                <li className='text-black hover:bg-sky-600 hover:text-black'><Link href='./About'>Categories</Link></li>
                                <li className='text-black hover:bg-sky-600 hover:text-black'><Link href='./About'>Return & Support</Link></li>
                                <li className='text-black hover:bg-sky-600 hover:text-black'><Link href='./Projects'>Login</Link></li>
                                <li className='text-black hover:bg-sky-600 hover:text-black'><Link href='./Contact'>SignUp</Link></li>
                            </ul>
                        </div>
                    )} */}

                    <div className='lg:w-full lg:flex lg:justify-end lg:items-center xl:w-full xl:flex xl:justify-end xl:items-center'>
                        <ul className='flex justify-end items-center text-black gap-1 lg:gap-4 xl:gap-4 text-xs md:text-sm lg:text-lg xl:text-lg'>
                            <li className='hover:bg-black hover:bg-opacity-10 rounded w-10 lg:w-16 xl:w-16 h-7 lg:h-9 xl:h-9 flex items-center justify-center'>
                                <a href='/'>Home</a>
                            </li>
                            <li className='hover:bg-black hover:bg-opacity-10 rounded w-10 lg:w-16 xl:w-16 h-7 lg:h-9 xl:h-9 flex items-center justify-center'>
                            <a href='/SalePage'>Sale</a>
                            </li>

                            <li className='hover:bg-black hover:bg-opacity-10 rounded w-28 lg:w-40 xl:w-40 flex h-7 lg:h-9 xl:h-9 items-center justify-center'>
                                <a href='/ReturnPolicy'>Return & Support</a>
                            </li>

                            <li className='px-4'>
    <Link href="/Cart" passHref>
        <div className='flex'>
        <button><FaShoppingCart /></button>
        <p className='text-xs pt-4 text-red-500'>{cartQuantity}</p>
        </div>
    </Link>
</li>                         
                        </ul>
                    </div>

                    {signupToggle && (
                        <div className='w-44 h-56 md:w-80 md:h-64 absolute bg-black bg-opacity-80 top-0 right-0 flex justify-center text-center my-12 z-50 rounded'>
                        <form className='flex flex-col justify-center items-center'>
                        <input className='bg-black bg-opacity-60 text-white text-xs md:text-sm lg:text-base p-1 w-36 md:w-60 lg:w-72' type='text' placeholder='Full Name' />
                        <input className='bg-black bg-opacity-60 text-white text-xs md:text-sm lg:text-base p-1 w-36 md:w-60 lg:w-72 my-2' type='text' placeholder='Email Address' />
                        <input className='bg-black bg-opacity-60 text-white text-xs md:text-sm lg:text-base p-1 w-36 md:w-60 lg:w-72 my-2' type='password' placeholder='Password' />
                        <input className='bg-black bg-opacity-60 text-white text-xs md:text-sm lg:text-base p-1 w-36 md:w-60 lg:w-72' type='password' placeholder='Confirm Password' />

                        <button className='w-14 md:w-16 lg:w-20 h-7 md:h-9 bg-black text-opacity-60 bg-opacity-60 text-white text-xs md:text-sm lg:text-base mt-4 md:my-4'>Sign Up</button>
                        </form>
                    </div>
                    )}

                    <div className='flex gap-4 lg:gap-24 xl:gap-[2rem] mt-3'>
                        <h1 className='text-base md:text-xl lg:text-2xl xl:text-2xl text-black mt-1 lg:mt-2 xl:mt-2'>
                            <Link href="/">Logo.</Link>
                        </h1>



                    <form onSubmit={handleSearch} className='lg:px-2 xl:px-2'>
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            type='text'
                            placeholder='Search'
                            className='bg-black bg-opacity-10 text-sm lg:text-xl xl:text-xl w-[11rem] sm:w-[25rem] md:w-[30rem] lg:w-[40rem] xl:lg:w-[45rem] p-1 lg:p-2 xl:p-2 rounded lg:rounded-xl xl:rounded'
                        />
                        
                        <button type='submit' className='w-12 h-8 sm:w-20 md:w-24 lg:w-28 lg:h-11 xl:w-28 xl:h-11 text-xs sm:text-sm lg:text-xl xl:text-xl hover:bg-white bg-black bg-opacity-10 rounded-xl mx-1 lg:mx-5 xl:mx-5'>
                            Search
                        </button>

                        
                        

                    </form>

                                          
                    </div>

                    



                </div>
            </div>
        </>
    );
};

export default Header;
