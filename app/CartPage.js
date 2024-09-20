"use client"
import React, { useContext } from 'react';
import { CartContext } from '@/app/Components/Context'; // Make sure the path is correct
import Header from '@/app/Components/Header';
import Link from 'next/link';
import CheckOut from './CheckOut';
import { MdDelete } from "react-icons/md";
import Footer from './Components/Footer';


const CartPage = () => {
  const { cartProducts, setCartProducts, updateCartProductQuantity, updateProductPrice, getTotalPayment, getTotalQuantity, totalPayment } = useContext(CartContext); // Accessing the cart products
  console.log(cartProducts)

  const shipping = 9.99;

  

  const incrementQuantity = (index) => {
    const updatedQuantity = cartProducts[index].quantity + 1;
    updateCartProductQuantity(index, updatedQuantity)
  }

  const increasePrice = (index) => {
    const updatedPrice = Math.floor(cartProducts[index].unitPrice * cartProducts[index].quantity);  // Rounds to the nearest whole number
    updateProductPrice(index, updatedPrice);

  }

  const decrementQuantity = (index) => {
    const currentQuanity = cartProducts[index].quantity;
    if(currentQuanity > 1){
      const updatedQuantity = currentQuanity - 1;
      updateCartProductQuantity(index, updatedQuantity)
    }
  }

  const decreasePrice = (index) => {
    const updatedPrice = Math.floor(cartProducts[index].unitPrice * cartProducts[index].quantity);  // Rounds to the nearest whole number
    updateProductPrice(index, updatedPrice);
};

const deleteProduct = (index) => {
  const updatedCart = [...cartProducts]
  updatedCart.splice(index, 1);
  setCartProducts(updatedCart);
  
}

// const getTotalPrice = () => {
//   return cartProducts.reduce((total, product) => {
//     return total + product.price;
//   }, 0);
// }

// const getTotalQuantity = () => {
//   return cartProducts.reduce((total, product) => {
//     return total + product.quantity;
//   }, 0);
// }

// const totalPayment =  getTotalPrice() + shipping;
//   console.log(totalPayment)

  const totalQuantity =  getTotalQuantity();
  console.log(totalQuantity)

  // const getTotalPayment = () => {
  //   const cartTotalPayment = {
  //     totalCartPayment: totalPayment,
  //     totalCartQuantity: totalQuantity,
  //   }
  // }


  return (
    <>
      <Header />

      <div className='w-full'>
        <h1 className='px-4 md:px-12 py-4 text-base md:text-xl font-bold'>Your Cart</h1>
        <div className='flex flex-col md:flex-row'>
          <div className='w-full md:w-2/3'>
          {cartProducts.length === 0 ? (
          <p className='px-4 md:px-12'>Your Cart is Empty</p>
        ) : (
          <div className='px-4 md:px-8 flex flex-col gap-4'>
            {cartProducts.map((item, index) => (
              <div key={index} className='flex items-center justify-between gap-4'>

                <div className='flex flex-col items-center text-center'>
                <img src={item.thumbnail} alt={item.title} className='w-[6rem] border border-1 border-black border-solid border-opacity-10 sm:w-[8rem] md:w-34 md:h-34 object-cover' />
                <p className='text-xs pt-1 md:text-base font-bold'>{item.title}</p>
                </div>

                  
                  <div className='flex gap-4'>
                <button onClick={() => {incrementQuantity(index), increasePrice(index)}} className='bg-black bg-opacity-15 w-5 h-5 flex justify-center items-center md:w-6 md:h-6 rounded text:xs md:text-base'>+</button>
                <p className='text-sm md:text-base'>{item.quantity}</p>
                <button onClick={() => {decrementQuantity(index), decreasePrice(index)}} className='bg-black bg-opacity-15 w-5 h-5 flex justify-center items-center md:w-6 md:h-6 rounded text:xs md:text-base'>-</button>
                </div>
                  <p className='text-sm md:text-base'>${item.price}</p>
                  <button onClick={deleteProduct}><MdDelete /></button>

                  
                                  
              </div>
            ))}
          </div>
        )}
          </div>
        

        <div className='w-ful md:w-1/3 p-2 mt-9 md:mt-0 mr-2 md:mr-4 border-black'>
          <h1 className='font-bold'>Cart Totals</h1>

          <div className='flex justify-between my-4'>
            <h1 className='text-xs md:text-base'>Sub Totals</h1>
            <p className='text-xs md:text-base'>${getTotalPayment()}</p>
          </div>
          
          <div className='flex justify-between my-4'>
            <h1 className='text-xs md:text-base'>Shipping Cost</h1>
            <p className='text-xs md:text-base'>${shipping}</p>
          </div>

          <div className='flex justify-between my-4'>
            <h1 className='text-xs md:text-base'>Total Quantity</h1>
            <p className='text-xs md:text-base'>{getTotalQuantity()}</p>
          </div>

          <div className='flex flex-col border-t border-black'>
        {/* This makes sure the total payment section is at the bottom */}
        <div className='flex-grow'></div>
        <div className='flex justify-between font-bold my-4 md:p-4'>
          <h1 className='text-xs md:text-base'>Total Payment</h1>
          <p className='text-xs md:text-base'>${totalPayment.toFixed(2)}</p>
        </div>
      </div>

      <div className='flex justify-center'>
      <button className='bg-black text-white w-20 h-7 md:w-28 md:h-10 text-xs md:text-base'><Link href='/CheckOut' passHref >Check Out</Link></button>
      
      
      </div>

        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
