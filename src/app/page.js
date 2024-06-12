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
      
      </div>
    </main>
  );
}
