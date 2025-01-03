import React from "react";
import { FaUserAlt } from "react-icons/fa";

const Username = ({ params }) => {
  return (
    <>
      <div className="cover w-full  relative">
        <img
          className="object-cover w-full h-[300px]"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/17.gif?token-time=1738627200&token-hash=9ELNdGxKi3Cy06RYQQPuTwrVfYJgf_TBjThU5A7wrSM%3D"
          alt=""
        />
        <div className="absolute -bottom-10 right-[46%] ">
          <img
            className="rounded-full border-2"
            width={100}
            height={100}
            src="cat.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center my-12 flex-col gap-2 text-center">
        <div className="font-bold text-2xl">@{params.username}</div>
        <div className="text-slate-400">Creating Animated art for VTT's</div>
        <div className="text-slate-400">
          15,598 members . 94 Posts . $15,860/release
        </div>
      </div>

      <div className="payment flex gap-2 w-[80%] mx-auto mt-11">
        <div className="supporters w-1/2 bg-slate-900 rounded-lg p-4">
          <h2 className="text-2xl font-bold my-5">Supporters</h2>
          <ul className="mx-4">
            <li className="my-2 flex">
              {" "}
              <FaUserAlt className='className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800; rounded-full w-6 h-4 p-1 m-2' />{" "}
              <span>
                Subham donated <span className="font-bold">$30</span> with a
                massege "I support you bro with lots of love"
              </span>
            </li>
            <li className="my-2 flex">
              {" "}
              <FaUserAlt className='className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800; rounded-full w-6 h-4 p-1 m-2' />{" "}
              <span>
                Subham donated <span className="font-bold">$30</span> with a
                massege "I support you bro with lots of love"
              </span>
            </li>
            <li className="my-2 flex">
              {" "}
              <FaUserAlt className='className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800; rounded-full w-6 h-4 p-1 m-2' />{" "}
              <span>
                Subham donated <span className="font-bold">$30</span> with a
                massege "I support you bro with lots of love"
              </span>
            </li>
            <li className="my-2 flex">
              {" "}
              <FaUserAlt className='className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800; rounded-full w-6 h-4 p-1 m-2' />{" "}
              <span>
                Subham donated <span className="font-bold">$30</span> with a
                massege "I support you bro with lots of love"
              </span>
            </li>
            <li className="my-2 flex">
              {" "}
              <FaUserAlt className='className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800; rounded-full w-6 h-4 p-1 m-2' />{" "}
              <span>
                Subham donated <span className="font-bold">$30</span> with a
                massege "I support you bro with lots of love"
              </span>
            </li>
          </ul>
        </div>
        <div className="support w-1/2 bg-slate-900 rounded-lg p-4">
          <h2 className="text-2xl font-bold my-5">Make payment</h2>
          <div className="flex gap-2 flex-col">
            <input
              type="text"
              className=" w-full bg-slate-800 p-3 rounded-lg "
              placeholder="Enter Name"
              name=""
              id=""
            />
            <input
              type="text"
              className=" w-full bg-slate-800 p-3 rounded-lg "
              placeholder="Enter Massege"
              name=""
              id=""
            />
            <input
              type="text"
              className=" w-full bg-slate-800 p-3 rounded-lg "
              placeholder="Enter Amount"
              name=""
              id=""
            />
            <button class='className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"'>
              Pay
            </button>
          </div>

          <div className="flex gap-2 my-2">
            <button className="  rounded-lg p-3 bg-slate-800">Pay $10</button>
            <button className="  rounded-lg p-3 bg-slate-800">Pay $20</button>
            <button className="  rounded-lg p-3 bg-slate-800">Pay $30</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Username;
