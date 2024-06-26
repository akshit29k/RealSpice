"use client"
import React, { useState} from 'react'
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';


const Login = () => {
  
  const router = useRouter();
  const [credentials,setCredentials] = useState({email:"",password:""})
  const handleOnChange = (e)=>{
      setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  const handleLogin= async(e)=>{
    e.preventDefault();
    console.log(credentials)
      const response = await fetch("http://localhost:8080/api/appuser/signin", {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({email:credentials.email,password:credentials.password})     
        });

        const json = await response.json();
        if(json.message === "User does not exists"){
          toast.error('Invalid Credentials', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            });
        }else if(json.message === "Enter a correct password"){
          toast.error('Invalid Credentials', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            });
        }else{
          localStorage.setItem("token",json.token);
          toast.success("You're Signed in", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            });
            setTimeout(()=>{
              router.push("http://localhost:3000")
            },1000)
        }
      }
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col mt-4">
      <ToastContainer
      position="top-center"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"/>
    <div className="container max-w-xl mx-auto mt-10 flex flex-col items-center justify-center px-2">
    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
  {/* <Image className='mx-auto' src={logoImg} width={100} height={40} alt="logoimage"/> */}
    {/* <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=red&shade=600" alt="Your Company"/> */}
    <h2 className="mt-5 mb-8 text-3xl text-center">Sign in</h2>
  </div>

  <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={handleLogin}>
      <div>
        <label htmlFor="email" className="max-[360px]:hidden block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" onChange={handleOnChange} value={credentials.email} placeholder='abc@gmail.com' name="email" type="email"  required className="p-2 block w-full rounded-md border-0 py-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="max-[360px]:hidden block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
            <Link href={"/forgot"} className="font-semibold text-red-600 hover:text-red-500">Forgot password?</Link>
          </div>
        </div>
        <div className="mt-2">
          <input onChange={handleOnChange} minLength={6} value={credentials.password} id="password" placeholder="xxxxxxxxx" name="password" type="password"  required className="block w-full rounded-md p-2 border-0 py-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Sign in</button>
      </div>
    </form>

    
  </div>
</div>
    </div>
    <p className="mt-6 text-center text-sm text-gray-500">
      New Here?
      <Link href={"/signup"} className="font-semibold leading-6 text-red-600 hover:text-red-500">Create new account</Link>
    </p>
    </div>
    </div>
  )
}

export default Login
