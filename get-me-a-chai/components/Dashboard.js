"use client";
import React, { useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();
  const [form, setform] = useState([])
  if (!session) {
    const router = useRouter();
    router.push("/login");
  }

  const handelChange=() => {
    
  }
  
  

  return (
    <div className="flex flex-col justify-center items-center ">
      <span className="font-bold text-2xl mt-20 mb-5">
        Welcome to Dashboard
      </span>
      <form className="mx-auto">
        <div className="m-3">
          <label
            htmlFor="name"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>

          <input
            type="text"
            id="name"
            value={form.name?form.name:""}
            onChange={handelChange}
            className="block w-[50vh] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="m-3">
          <label
            htmlFor="email"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            value={form.email?form.email:""}
            onChange={handelChange}
            className="block w-[50vh] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="m-3">
          <label
            htmlFor="userName"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            type="text"
            id="userName"
            value={form.username?form.usreName:""}
            onChange={handelChange}
            className="block w-[50vh] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="m-3">
          <label
            htmlFor="profilePicture"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Profile Picture
          </label>
          <input
            type="text"
            id="profilePicture"
            value={form.profilePicture?form.profilePicture:""}
            onChange={handelChange}
            className="block w-[50vh] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="m-3">
          <label
            htmlFor="coverPicture"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            NamCover Picture
          </label>
          <input
            type="text"
            id="coverPicture"
            value={form.coverPicture?form.coverPicture:""}
            onChange={handelChange}
            className="block w-[50vh] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="m-3">
          <label
            htmlFor="razorPayId"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            RazorPay Id
          </label>
          <input
            type="text"
            id="razorPayId"
            value={form.razorPayId?form.razorPayId:""}
            onChange={handelChange}
            className="block w-[50vh] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="m-3">
          <label
            htmlFor="razorPaySecret"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            RazorPay Secret
          </label>
          <input
            type="text"
            id="razorPaySecret"
            value={form.razorPaySecret?form.razorPaySecret:""}
            onChange={handelChange}
            className="block w-[50vh] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="m-3">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[50vh]"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
