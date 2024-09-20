"use client";
import React, { useContext } from "react";
import Header from "./Components/Header";
import { CartContext } from "./Components/Context";
import Swal from "sweetalert2";
import Footer from "./Components/Footer";

const CheckOut = () => {
  const { totalPayment, getTotalQuantity } = useContext(CartContext);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4c73f208-2637-41ca-a50b-d98d8925405d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Order Placed Successfully!",
          icon: "success",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="w-full">
        <div className="px-4 md:px-8 lg:px-12 py-4 flex flex-col md:flex-row">
          {/* Form starts here */}
          <form className="w-full flex flex-col sm:flex-row md:flex-row" onSubmit={onSubmit}>
            {/* Left side: Billing Details */}
            <div className="w-full sm:w-[35rem] lg:w-[50rem] ">
              <h1 className="font-bold text-xl">Billing Details</h1>
              <div className="py-4 flex flex-col gap-2">
                <div className="flex gap-2">
                  <input
                    className="bg-white border border-1 border-solid border-black border-opacity-30 p-1 text-sm md:text-base w-[11rem] sm:w-[12rem] md:w-[13.5rem] lg:w-[21rem]"
                    required
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                  />
                  <input
                    className="bg-white border border-1 border-solid border-black border-opacity-30 p-1 text-sm md:text-base w-[11rem] sm:w-[12rem] md:w-[13.5rem] lg:w-[21rem]"
                    required
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                  />
                </div>
                <div className="flex gap-2">
                  <input
                    className="bg-white border border-1 border-solid border-black border-opacity-30 p-1 text-sm md:text-base w-[11rem] sm:w-[12rem] md:w-[13.5rem] lg:w-[21rem]"
                    required
                    type="text"
                    placeholder="Email Address"
                    name="email"
                  />
                  <input
                    className="bg-white border border-1 border-solid border-black border-opacity-30 p-1 text-sm md:text-base w-[11rem] sm:w-[12rem] md:w-[13.5rem] lg:w-[21rem]"
                    required
                    type="number"
                    placeholder="Phone Number"
                    name="phone"
                  />
                </div>
                <input
                  className="bg-white border border-1 border-solid border-black border-opacity-30 p-1 text-sm md:text-base w-[22.35rem] sm:w-[24.35rem] md:w-[27.5rem] lg:w-[42.5rem]"
                  required
                  type="text"
                  placeholder="Street Address"
                  name="address"
                />

                <div className="flex gap-2">
                  <input
                    className="bg-white border border-1 border-solid border-black border-opacity-30 p-1 text-sm md:text-base w-[11rem] sm:w-[12rem] md:w-[13.5rem] lg:w-[21rem]"
                    required
                    type="text"
                    placeholder="City"
                    name="city"
                  />
                  <input
                    className="bg-white border border-1 border-solid border-black border-opacity-30 p-1 text-sm md:text-base w-[11rem] sm:w-[12rem] md:w-[13.5rem] lg:w-[21rem]"
                    required
                    type="number"
                    placeholder="Zip Code"
                    name="zipCode"
                  />
                </div>

                <input
                  className="bg-white border border-1 border-solid border-black border-opacity-30 p-1 text-sm md:text-base w-[22.35rem] sm:w-[24.35rem] md:w-[27.5rem] lg:w-[42.5rem] mt-4"
                  required
                  type="number"
                  placeholder="Card Number"
                  name="cardNumber"
                />

                <div className="flex gap-2">
                  <input
                    className="bg-white border border-1 border-solid border-black border-opacity-30 p-1 text-sm md:text-base w-[11rem] sm:w-[12rem] md:w-[13.5rem] lg:w-[21rem]"
                    required
                    type="text"
                    placeholder="Expiration (MM/YYYY)"
                    name="expiration"
                  />
                  <input
                    className="bg-white border border-1 border-solid border-black border-opacity-30 p-1 text-sm md:text-base w-[11rem] sm:w-[12rem] md:w-[13.5rem] lg:w-[21rem]"
                    required
                    type="number"
                    placeholder="Security Code"
                    name="securityCode"
                  />
                </div>
              </div>
            </div>

            {/* Right side: Total Payment and Button */}
            <div className="w-full sm:w-[20rem] md:2/6 lg:w-[30rem] flex flex-col md:border-l border-black">

              <h1 className="font-bold text-xl mt-4 md:mt-0 md:px-4">Total Payment</h1>

              <div className="flex flex-col px-8 py-8 gap-2">
                <div className="flex justify-between">
                  <h1>Sub Total</h1>
                  <p>$ {totalPayment}</p>
                </div>

                <div className="flex justify-between">
                  <h1>Total Quantity</h1>
                  <p>{getTotalQuantity()}</p>
                </div>
              </div>

              {/* Place Order button */}
              <div className="flex items-center px-8 py-10">
                <button
                  type="submit"
                  className="w-full h-9 bg-black text-white"
                >
                  Place Order
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckOut;
