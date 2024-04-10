"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


const Masale = () => {
  const [productArr,setProductArr] = useState([]);
  useEffect(()=>{
    const getData = async ()=>{
      const products = await fetch("http://localhost:8080/api/product/getproductsbycategory/Masala");
      const productJson = await products.json();
      setProductArr(productJson);
    };
    getData();
  },[])
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto">
    <div className="flex flex-wrap md:mx-8 xl:mx-28 justify-center">
    {productArr.map((pro)=>{return <div key={pro.productId} className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md my-3 lg:mx-3 max-sm:w-[75%]">
        
        <Link href={`product/${pro.slug}`}><img alt="ecommerce" className="m-auto h-[200px] block" src={pro.image}/></Link>
       
      <div className="mt-4 text-center lg:text-left ">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{pro.category}</h3>
        <Link href={`product/${pro.slug}`}><h2 className="text-gray-900 title-font text-lg font-medium">{pro.title}</h2></Link>
        <p className="mt-1">₹{pro.price}</p>
      </div>
    </div>})}
      
    </div>
  </div>
</section>
    </div>
  )
}



export default Masale
