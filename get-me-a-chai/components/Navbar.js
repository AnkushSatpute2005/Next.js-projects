"use client";
import React from "react";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  const [showDropdown, setshowDropdown] = useState(false);
  // if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }

  return (
    <nav className="bg-blue-950 text-white flex justify-between items-center px-4 h-16">
        <Link href={"/"} className="logo flex justify-center items-center gap-2">
        <span>
          <img src="/coffee-lover.gif" width={30} alt="" />
        </span>
        <span className="font-bold">Get me a chai</span></Link>
      
      {/* <ul className='flex justify-around gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign up</li>
            <li>Login</li>
        </ul> */}

      <div className="relative">
        {session && (
          <>
            <button
              id="dropdownDefaultButton"
              onClick={() => {
                setshowDropdown(!showDropdown);
              }}
              onBlur={()=>{setTimeout(() => {
                setshowDropdown(false)
              }, 100);}}
              data-dropdown-toggle="dropdown"
              className="mx-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              {session.user.email}{" "}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {/* <!-- Dropdown menu --> */}
          <div id="dropdown" className={`z-10 ${showDropdown?"":"hidden"} left-[96px] m-2 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
    <ul className="py-2  text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <Link className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/dashboard" >
        <div>Dashboard</div></Link>
      </li>
      <li>
        <Link href="" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
      </li>
      <li>
        <Link href="" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
      </li>
      <li>
        <Link href="" onClick={()=>{signOut()}} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
      </li>
    </ul>
</div>
          </>
        )}
        

        {session && (
          <button
            className='className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"'
            onClick={() => {
              signOut();
            }}
          >
            LogOut
          </button>
        )}

        {!session && (
          <Link href={"/login"}>
            <button
             className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
