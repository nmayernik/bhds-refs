import Link from "next/link";

export default function Index() {
  return (
    <main className="min-h-screen py-24 bg-white ">
      <div className="max-w-screen-xl mx-auto ">
      <div id="contentWrapper" className="px-4 md:px-8 flex flex-col">
        <h1 className="text-black text-3xl font-semibold leading-tight">
            BHDS Grid Reference
        </h1>
        <p className="text-gray-700 text-lg pt-2">This site is designed to be a handoff utility for BHDS Foundations and Components.</p>
        <h2 className="pt-20 text-xl font-semibold">Standard grid</h2>
        <p className="text-lg font-regular text-gray-800 pb-8">Below is the default responsive grid used in BH apps.</p>

        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-8 h-96">
          <div className="bg-blue-300 grid-cols-1"></div>
          <div className="bg-blue-300 grid-cols-1"></div>
          <div className="bg-blue-300 grid-cols-1"></div>
          <div className="bg-blue-300 grid-cols-1"></div>
          <div className="bg-blue-300 grid-cols-1 invisible md:visible"></div>
          <div className="bg-blue-300 grid-cols-1 invisible md:visible"></div>
          <div className="bg-blue-300 grid-cols-1 invisible lg:visible"></div>
          <div className="bg-blue-300 grid-cols-1 invisible lg:visible"></div>
          <div className="bg-blue-300 grid-cols-1 invisible lg:visible"></div>
          <div className="bg-blue-300 grid-cols-1 invisible lg:visible"></div>
          <div className="bg-blue-300 grid-cols-1 invisible lg:visible"></div>
          <div className="bg-blue-300 grid-cols-1 invisible lg:visible"></div>
        </div>
      </div>
      <hr className="border-1 bg-gray-500 my-20"/>
      <div className="px-4 md:px-8">
        <h2 className="text-xl font-semibold">myBH Bentos</h2>
        <p className="text-lg font-regular text-gray-800 pb-12">Some sections, like the top home page section in myBH, may benefit from implementation using flexbox rather than CSS grid.</p>
        <div className="flex flex-col md:flex-row  gap-6 xl:gap-10">
          <div id="green box" className="h-96 bg-green-800 md:basis-1/3 rounded-3xl p-6">
            <h3 className="text-white font-semibold text-xl">Green box</h3> 
          </div>
          <div id="benefit summary" className="h-96 flex-auto border border-zinc-600 border-1 rounded-3xl p-6 ">
            <h3 className="font-semibold text-xl text-gray-800">Benefit summary</h3>
          </div>
        </div> 
        <div className="pt-6 xl:pt-10 flex flex-col md:flex-row gap-6 xl:gap-10">
          <div id="benefit summary" className="flex-1 h-96 border border-zinc-600 border-1 rounded-3xl p-6 ">
              <h3 className="font-semibold text-xl text-gray-800">Upcoming</h3>
            </div>
          
          <div id="benefit summary" className="flex-1 h-96 border border-zinc-600 border-1 rounded-3xl p-6 ">
              <h3 className="font-semibold text-xl text-gray-800">My Family</h3>
          </div>
          </div>
      </div>
      </div>
    </main>
  );
}
