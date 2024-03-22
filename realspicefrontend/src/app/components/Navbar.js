'use client';
import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import Image from 'next/image';
import logoImg from "../../../public/images/logoB.jpg";
import Link from 'next/link';
import { useRef } from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";

import {useAppContext}  from '@/app/context/CartContext';


const Navbar = () => {
  const{cart,addToCart,removeItem,clearCart,addItem} = useAppContext();
  const toggleCart=()=>{
    if(ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.add('translate-x-0');
    }else if(ref.current.classList.contains('translate-x-0')){
      ref.current.classList.remove('translate-x-0');
      ref.current.classList.add('translate-x-full');
    }
  }
  const ref = useRef();
  return (
    <>
    <nav>
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center shadow-md">
    <Link href={"/"} className="flex title-font font-medium items-center cursor-pointer text-gray-900 mb-4 md:mb-0">
      <Image className='mx-4' src={logoImg} width={100} height={40} alt="logoimage"/>
    </Link>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link href={"/masale"} className="mr-5 hover:text-gray-900 font-bold cursor-pointer">Spices</Link>
      <Link href={"/pickle"} className="mr-5 hover:text-gray-900 font-bold cursor-pointer">Pickle</Link>
      <Link href={"/khakhra"} className="mr-5 hover:text-gray-900 font-bold cursor-pointer">Snacks</Link>
      <Link href={"/product/feeltheflavours"} className="mr-5 hover:text-gray-900 font-bold cursor-pointer">Products</Link>
    </nav>
    <div onClick={toggleCart} className="inline-flex items-center py-1 px-3 text-2xl focus:outline-none hover:bg-gray-200 rounded  mt-4 md:mt-0"><FaCartShopping />
    </div>
  </div>
</header>
    </nav>


    
    <div ref={ref} className='sideBar absolute right-0 top-0 bg-green-300 h-full xl:w-1/4  md:w-2/4 sm:w-2/4 w-full transform transition-transform translate-x-full'>
    <div onClick={toggleCart} className='absolute right-3 top-6 text-2xl text-red-500'><IoIosCloseCircle /></div>
      <div onClick={toggleCart} className='font-bold text-xl text-center p-5 mt-5'>Shopping Cart</div>
      <div><ol className='list-decimal ml-10 font-semibold space-y-5'>
        {Object.keys(cart).length==0 && <div>Cart is empty!!</div>}
       {Object.keys(cart).map((k)=>{return <div key={k}><li >
          <div className='flex'>
          <div className='w-2/4'>{cart[k].name}</div>
          <div className='w-1/4 flex items-center justify-center font-extrabold'><IoIosRemoveCircle onClick={()=>{removeItem(k)}} className='text-xl mr-2 text-red-500'/>{cart[k].qty}<IoIosAddCircle onClick={()=>{addItem(k)}} className='text-xl ml-2 text-red-500'/></div>
          <div className='w-1/4 flex justify-center items-center font-extrabold '>{cart[k].price}</div>
          </div>
          </li> </div>})
}
      </ol>
      <div className='flex'>
        <button className="flex mx-auto mt-8 ml-8 mr-0 text-white bg-red-500 border-1 py-2 px-3 focus:outline-none hover:bg-red-600 rounded text-sm">Checkout<IoBagCheckOutline className='m-auto ml-1'/></button>
        <button onClick={()=>{clearCart()}} className="flex mx-auto mt-8 ml-2 text-white bg-red-500 border-1 py-2 px-3 focus:outline-none hover:bg-red-600 rounded text-sm">Clear Cart</button>
      </div>
      </div>
      </div>
    
    </>
  )
}

export default Navbar
