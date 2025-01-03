import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="text-white flex justify-center items-center flex-col h-[44vh] gap-2">
        <div className="text-3xl font-bold flex justify-center items-center gap-2">
          By me a chai{" "}
          <span>
            <img src="/coffee-lover.gif" alt="" width={30} />
          </span>
        </div>
        <p>
          crowdfunding platform for creators. Get Fund by your fans and
          followers. Start now!
        </p>
        <div>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Here
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read more
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto py-12">
        <h2 className="text-2xl font-bold text-center mb-14">Your fans can buy you a chai</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img src="/men.gif" alt="" width={50} className=" p-2  rounded-full bg-slate-400 text-black "/>
            <p className="font-bold">Fund your self</p>
            <p className="text-center">Your fans are avilabel for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img src="/coin.gif" alt="" width={50} className=" p-2  rounded-full bg-slate-400 text-black "/>
            <p className="font-bold">Fund your self</p>
            <p className="text-center">Your fans are avilabel for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img src="/group.jpg" alt="" width={50} className=" p-2  rounded-full bg-slate-400 text-black "/>
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are avilabel for you to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto py-12">
        <h2 className="text-2xl font-bold text-center mb-14">Learn more about us</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img src="/men.gif" alt="" width={50} className=" p-2  rounded-full bg-slate-400 text-black "/>
            <p className="font-bold">Fund your self</p>
            <p className="text-center">Your fans are avilabel for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img src="/coin.gif" alt="" width={50} className=" p-2  rounded-full bg-slate-400 text-black "/>
            <p className="font-bold">Fund your self</p>
            <p className="text-center">Your fans are avilabel for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img src="/group.jpg" alt="" width={50} className=" p-2  rounded-full bg-slate-400 text-black "/>
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are avilabel for you to help you</p>
          </div>
        </div>
      </div>
    </>
  );
}
