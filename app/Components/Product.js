// "use client"
// import React, { useEffect, useState } from 'react';
// import Header from './Header';
// import { useRouter } from 'next/navigation';

// const Product = () => {
//   const [singleProduct, setSingleProduct] = useState(null); // Set to null initially
//   const router = useRouter();
//   const { productId } = router.query; // Assuming productId comes from URL query parameters

//   const getProducts = async () => {
//     try {
//       const response = await fetch(`https://dummyjson.com/products/${productId}`);
//       const result = await response.json();
//       setSingleProduct(result); // Set the product directly from the response
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     if (productId) {
//       getProducts();
//     }
//   }, [productId]); // Depend on productId to re-fetch if it changes

//   return (
//     <>
//       <div className='w-full'>
//         <div className='grid grid-cols-2'>
//           <div className='px-4 flex items-center justify-center'>
//             {singleProduct && (
//               <img src={singleProduct.images[0]} alt={singleProduct.title} className='object-contain w-full' />
//             )}
//           </div>

//           <div className='px-4 flex flex-col py-10'>
//             {singleProduct && (
//               <>
//                 <p className='text-2xl font-bold'>{singleProduct.title}</p>
//                 <p className='text-lg'>{singleProduct.brand}</p>
//                 <p className='text-red-600 text-xl'>${singleProduct.price}</p>

//                 <div className='flex items-center'>
//                   <p className='mr-2'>{singleProduct.rating}</p>
//                   <p>{singleProduct.stock} in stock</p>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Product;
