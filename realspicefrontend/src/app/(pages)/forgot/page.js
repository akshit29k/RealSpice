import React from 'react'
import Link from 'next/link'
import { IoIosArrowRoundForward } from "react-icons/io";


const page = () => {
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col mt-12">
    <div className="container max-w-xl mx-auto mt-10 flex flex-col items-center justify-center px-2">
    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 className="mt-5 mb-4 text-3xl text-center">Enter Your Email</h2>
  </div>

  <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <div className="mt-2">
          <input id="email" placeholder='abc@gmail.com' name="email" type="email" autocomplete="email" required className="p-2 block w-full rounded-md border-0 py-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Continue<IoIosArrowRoundForward className="text-2xl"/></button>
      </div>
    </form>

    
  </div>
</div>
    </div>
    <p className="mt-6 text-center text-sm text-gray-500">
      Or?
      <Link href={"/login"} className="font-semibold leading-6 text-red-600 hover:text-red-500">Sign in</Link>
    </p>
    </div>
    </div>
  )
}

export default page
