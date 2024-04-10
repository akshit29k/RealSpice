"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  


const Signup = () => {
  const router = useRouter();
  const [userData,setUserData] = useState({fullname:"",mobile:"",email:"",password:"",cpassword:""});
  const handleChange = (e)=>{
    setUserData({...userData,[e.target.name]:e.target.value})
  }

  const checkVal = ()=>{
    let cpass = document.getElementById("cpassword")
    let phone = document.getElementById("mobile")
    if(userData.cpassword !== userData.password){
      cpass.setCustomValidity("Password Should Match");
    }else{
      cpass.setCustomValidity("");
    }
    if(userData.mobile.length>10 || userData.mobile.length<10){
      phone.setCustomValidity("Invalid Number");
    }else{
      phone.setCustomValidity("");
    }
  }
  const handleSignup= (e)=>{
    e.preventDefault();
    const saveData = async ()=>{
    if(userData.cpassword === userData.password && userData.mobile.length === 10){
      const response = await fetch("http://localhost:8080/api/appuser/signup", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({name:userData.fullname,email:userData.email,mobile:userData.mobile,password:userData.password})     
      });
      
      const json = await response.json();
      if(json.error.includes("Email")){
        toast.error('Email already exist', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          });
      }else if(json.error.includes("Mobile")){
        toast.error('Mobile already exist', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          });
      }else{
        setTimeout(()=>{
          router.push("/login")
        },1000)
        toast.success('Registered Successfully', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          });
       
      }
    }else{
      checkVal();
    }
  }
  saveData();
  }
  return (
    <div>
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
      <div className="bg-grey-lighter min-h-screen flex flex-col mt-4">
        <div className="container max-w-xl mx-auto mt-10 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <form onSubmit={handleSignup}>
            <input value={userData.fullname} onChange={handleChange} type="text" className="mb-4 block w-full h-10 rounded-md p-2 border-0 py-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-400 sm:text-sm sm:leading-6" name="fullname"  placeholder="Full Name" minLength={3} required/>
            <input value={userData.mobile} onChange={handleChange} onKeyUp={checkVal} type="number" id="mobile" className="mb-4 block w-full h-10 rounded-md p-2 border-0 py-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-400 sm:text-sm sm:leading-6" name="mobile"  placeholder="Mobile" required/>

            <input value={userData.email} onChange={handleChange} type="text" className="mb-4 block w-full h-10 rounded-md p-2 border-0 py-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-400 sm:text-sm sm:leading-6" name="email" placeholder="Email" required/>

            <input value={userData.password} onChange={handleChange} type="password"  className="mb-4 block w-full h-10 rounded-md p-2 border-0 py-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-400 sm:text-sm sm:leading-6"name="password" minLength={6} placeholder="Password" required/>
            <input value={userData.cpassword} onChange={handleChange} type="password" id="cpassword" onKeyUp={checkVal}  className="mb-4 block w-full h-10 rounded-md p-2 border-0 py-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-400 sm:text-sm sm:leading-6" minLength={6} name="cpassword" placeholder="Confirm Password" required/>

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green bg-red-500 text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>
            </form>
            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <Link className="no-underline border-b border-red-500 text-red-500"   href={"/login"} > Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
