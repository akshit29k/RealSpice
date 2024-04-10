'use client'
import { useAppContext } from '@/app/context/CartContext';
import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";


const Checkout = () => {
  const{cart,removeItem,addItem,removeItemFromCart,subTotal} = useAppContext();
  return (
    <>
    <div className='flex justify-center items-center '>
      <form  className="w-full max-w-6xl m-5 border-[1px] border-opacity-10 border-r-2 rounded-md p-5">
        <div className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-5">Delivery Details</div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name1">
        First Name
      </label>
      <input className="appearance-none block w-full bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name1" type="text" placeholder="Jane"/>
      
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name1">
        Last Name
      </label>
      <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name1" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        Email
      </label>
      <input className="appearance-none block w-full bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="Jane"/>
      
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Mobile
      </label>
      <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="Doe"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Address
      </label>
      <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Your Address"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
        City
      </label>
      <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Mumbai"/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        State
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-100 border border-gray-100 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Maharashtra</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
        Zip
      </label>
      <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
    </div>
  </div>
</form>
</div>
<div className='flex justify-center items-center '>
<form  className="w-full max-w-6xl border-[1px] m-5 mb-8 border-opacity-10 border-r-2 rounded-md p-5">
        <div className="block uppercase tracking-wide mb-2 text-gray-700 text-lg font-bold">Review Your Cart</div>
<div className="font-[sans-serif] lg:flex">
      <div style={{scrollbarWidth:"none"}} className="lg:overflow-hidden lg:overflow-y-scroll lg:h-[600px] grid lg:w-2/3 p-6">
      {Object.keys(cart).length==0 && <div>Cart is empty!!</div>}
       {Object.keys(cart).map((k)=>{return <div key={k} className="grid md:grid-cols-4  items-center gap-8 py-2">
            <div className=" md:col-span-2 flex items-center gap-6">
              <div className="max-[360px]:hidden w-32 h-22 shrink-0 shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)]">
                <img  src={cart[k].image} className="w-full  h-full object-contain rounded-md" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-[#333]">{cart[k].name}</h3>
                <h6 className="text-md text-gray-500 mt-2">PackOf: <strong className="ml-2">{cart[k].packOf}</strong></h6>
              </div>
            </div>
            <div className="flex">
              <button onClick={()=>{removeItem(k)}} type="button" className="bg-transparent py-2 font-semibold text-[#333]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 124 124">
                  <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                </svg>
              </button>
              <button  type="button" className="bg-transparent mx-4 px-4 py-2 font-semibold text-[#333] text-md shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)]">
                {cart[k].qty}
              </button>
              <button onClick={()=>{addItem(k)}} type="button" className="bg-transparent py-2 font-semibold text-[#333]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 42 42">
                  <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center">
              <h4 className="text-lg font-bold text-[#333]">₹{cart[k].price}</h4>
                <button onClick={()=>{removeItemFromCart(k)}} className="w-3 cursor-pointer shrink-0 fill-[#333] hover:fill-red-500 ml-auto"><IoCloseSharp className='text-xl'/></button>
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-3 cursor-pointer shrink-0 fill-[#333] hover:fill-red-500 ml-auto" viewBox="0 0 320.591 320.591"> */}
                {/* <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000"></path>
                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000"></path> */}
              {/* </svg> */}
            </div>
          </div>
        })}
      </div>
        <div className="bg-gray-100 rounded p-6 lg:w-1/3">
          <h3 className="text-xl font-extrabold text-[#333] border-b pb-4">Order Summary</h3>
          <ul className="text-[#333] divide-y mt-6">
            <li className="flex flex-wrap gap-4 text-md py-4">Subtotal <span className="ml-auto font-bold">₹{subTotal}</span></li>
            <li className="flex flex-wrap gap-4 text-md py-4">Shipping <span className="ml-auto font-bold">0.00</span></li>
            <li className="flex flex-wrap gap-4 text-md py-4">Tax <span className="ml-auto font-bold">0.00</span></li>
            <li className="flex flex-wrap gap-4 text-md py-4 font-bold">Total <span className="ml-auto">₹{subTotal}</span></li>
          </ul>
          <button type="button" className=" flex justify-center items-center mt-6 text-md px-6 py-2.5 w-full bg-red-600 hover:bg-red-700 text-white rounded">Pay<MdOutlinePayment className='ml-1 text-xl'/></button>

          <div className="mt-10">
            <h3 className="text-xl font-extrabold text-[#333] mb-6">Apply promo code</h3>
            <div className="flex border border-red-600 overflow-hidden max-w-md rounded">
              <input type="email" placeholder="Promo code"
                className="w-full outline-none bg-white text-gray-600 text-md px-4 py-2.5" />
              <button type='button' className="flex items-center justify-center bg-red-600 hover:bg-red-700 px-6 text-md text-white">
                Apply
              </button>
            </div>
          </div>
        </div>
    </div>
    </form>
    </div>
    </>
  )
}

export default Checkout
