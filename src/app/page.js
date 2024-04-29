import Link from "next/link";

export default function Index() {
  return (
    <main className="min-h-screen py-24 bg-white ">
      <div className="max-w-screen-xl mx-auto ">
      <div id="contentWrapper" className="px-4 md:px-8 flex flex-col">
        <h1 className="text-black text-3xl font-semibold leading-tight">
            BHDS Grid Reference
        </h1>
        <p className="text-gray-700 pt-2">This site is designed to be a handoff utility for BHDS Foundations and Components.</p>
        <div className="pt-8 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-8 h-96">
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
