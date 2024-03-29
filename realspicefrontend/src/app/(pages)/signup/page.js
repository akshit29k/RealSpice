import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col mt-4">
        <div className="container max-w-xl mx-auto mt-10 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="fullname"  placeholder="Full Name" />

            <input  type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="email" placeholder="Email"/>

            <input type="password"  className="block border border-grey-light w-full p-3 rounded mb-4"name="password" placeholder="Password" />
            <input  type="password"  className="block border border-grey-light w-full p-3 rounded mb-4" name="confirm_password" placeholder="Confirm Password" />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green bg-red-500 text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>

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
