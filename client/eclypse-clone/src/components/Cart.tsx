import React from "react";
import Navigation from "./Navigation";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="bg-white flex flex-col w-min-screen h-[200vh]">
      <Navigation />
      <div className="flex flex-col md:flex-row justify-between w-[90vw] p-[3vw] mt-[5vh] font-Helvetica Neue">
        {/* Adress view large screen */}
        <div className="flex flex-col items-start w-[90vw] md:w-[60vw] ">
          <div className="flex w-[50vw] md:w-[20vw] items-center gap-2 ">
            <Link to="/">
              <FaChevronLeft className="text-[#000000] text-[17px] " />
            </Link>
            <h1 className="font-Neue Montreal font-[500] text-[17.08px] text-[#000000] mt-[5vh] mb-[5vh]">
              Shipping Address
            </h1>
          </div>
          <form className="flex flex-col items-start w-[90vw] md:w-[40vw] border-[1px] border-[#000000] rounded-[5px] p-3 md:p-[2vw] h-[46vh]">
            <div className="flex flex-col">
              <div className="flex items-center gap-[2vw] ">
                <input
                  type="radio"
                  name="shipping"
                  id="same-address"
                  className=" w-[20px] h-[20px] cursor-pointer"
                />
                <label
                  htmlFor="same-address"
                  className="text-[#000000] text-[12px] font-Neue Montreal font-[400] "
                >
                  Add New Address
                </label>
              </div>
              <div className="flex gap-[2vw] mt-3">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="first-name"
                    className="text-[#000000] text-[12px] font-Neue Montreal font-[400] "
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="w-[40vw] md:w-[15vw] h-[5vh] md:h-[2.5vh] rounded-[5px] border-[1px] border-[#000000] p-[1vw] "
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="last-name"
                    className="text-[#000000] text-[12px] font-Neue Montreal font-[400] "
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    className="w-[40vw] md:w-[15vw] h-[5vh] md:h-[2.5vh]rounded-[5px] border-[1px] border-[#000000] p-[1vw] "
                  />
                </div>
              </div>
              {/* Street */}
              <div className="flex flex-col gap-1 mt-3">
                <label
                  htmlFor="street"
                  className="text-[#000000] text-[12px] font-Neue Montreal font-[400] "
                >
                  Street Address
                </label>
                <input
                  type="text"
                  name="street"
                  id="street"
                  className="w-[82vw] md:w-[32vw] h-[5vh] md:h-[2.5vh] rounded-[5px] border-[1px] border-[#000000] p-[1vw] "
                />
              </div>
              {/* Age State Zip */}
              <div className="flex gap-[1vw] mt-3 ">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="aptno"
                    className="text-[#000000] text-[12px] font-Neue Montreal font-[400] "
                  >
                    Apt Number
                  </label>
                  <input
                    type="text"
                    name="aptno"
                    id="aptno"
                    className="w-[25vw] md:w-[10vw] h-[5vh] md:h-[2.5vh] rounded-[5px] border-[1px] border-[#000000] p-[1vw] "
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="state"
                    className="text-[#000000] text-[12px] font-Neue Montreal font-[400] "
                  >
                    State
                  </label>
                  <input
                    type="state"
                    name="state"
                    id="aptno"
                    className="w-[25vw] md:w-[10vw] h-[5vh] md:h-[2.5vh] rounded-[5px] border-[1px] border-[#000000] p-[1vw] "
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="zip"
                    className="text-[#000000] text-[12px] font-Neue Montreal font-[400] "
                  >
                    Zip
                  </label>
                  <input
                    type="text"
                    name="zip"
                    id="zip"
                    className="w-[30vw] md:w-[10vw] h-[5vh] md:h-[2.5vh] rounded-[5px] border-[1px] border-[#000000] p-[1vw] "
                  />
                </div>
              </div>
              <div className="flex gap-[2vw] mt-5">
                <button
                  type="button"
                  className="w-[30vw] md:w-[10vw] h-[5vh] cursor-pointer flex justify-center items-center rounded-[5px] border-[1px] border-[#000000] md:p-2 "
                >
                  cancel
                </button>
                <button
                  type="button"
                  className="w-[50vw] md:w-[20vw] h-[5vh] cursor-pointer flex justify-center items-center p-2 rounded-[5px] bg-[#000000]  text-[#ffffff] "
                >
                  Save This Address
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Billing view large screen */}
        <div className="flex flex-col item-start w-[90vw] md:w-[40vw] bg-[#F0F0F0] p-3 rounded-md mt-5 md:mt-[12vh]">
          <p className="text-[#000000] font-Neue Montreal  text-[17.08px] text-[#000000] mt-[5vh] mb-[5vh]">
            By placing your order, you agree to our company Privacy policy and
            Conditions of use.
          </p>
          <hr className="border-gray-500 border opacity-[30%] w-[95%] ml-[10px] mr-[10px] mt-[5px]" />
          <div className="flex flex-col">
            <h1 className="text-[#000000] font-Neue Montreal font-[400] text-[24px] text-[#000000] mt-[5vh] mb-[5vh]">
              Order Summary
            </h1>
            <ul className="flex flex-col list-none gap-2">
              <li className="flex justify-between items-center">
                <p className="text-[#575757] text-[18px] font-[400] font-Helvetica Neue">
                  Items - Silhouette No. 1 – Vermilion
                </p>
                <p className="text-[#575757] text-[18px] font-[400] font-Helvetica Neue">
                  7,999
                </p>
              </li>
              <li className="flex justify-between items-center">
                <p className="text-[#575757] text-[18px] font-[400] font-Helvetica Neue">
                  Shipping and handling:
                </p>
                <p className="text-[#575757] text-[18px] font-[400] font-Helvetica Neue">
                  200
                </p>
              </li>
              <li className="flex justify-between items-center">
                <p className="text-[#575757] text-[18px] font-[400] font-Helvetica Neue">
                  Before tax:
                </p>
                <p className="text-[#575757] text-[18px] font-[400] font-Helvetica Neue">
                  6,599
                </p>
              </li>
              <li className="flex justify-between items-center">
                <p className="text-[#575757] text-[18px] font-[400] font-Helvetica Neue">
                  Tax Collected:
                </p>
                <p className="text-[#575757] text-[18px] font-[400] font-Helvetica Neue">
                  1,400
                </p>
              </li>
            </ul>
            <hr className="border-gray-500 border  ml-[10px] mr-[10px] mt-[5vh] opacity-[30%]" />
            <div className="flex justify-between mt-[3vh]">
              <p className="text-[#000000] text-[18px] font-[400] font-Helvetica Neue">
                Order Total:
              </p>
              <p className="text-[#000000] text-[18px] font-[400] font-Helvetica Neue">
                8,199
              </p>
            </div>
            <div className="flex w-[90vw] md:w-[38vw] items-center justify-center mb-[3vh]">
              {" "}
              <button
                type="button"
                className="flex items-center justify-center p-3 bg-[#000000] rounded-md text-[#ffffff] mt-[4vh] w-[60vw] md:w-[30vw] cursor-pointer"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
