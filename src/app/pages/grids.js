import Link from "next/link";

export default function Grids() {
  return (
    <main className="min-h-screen p-24 bg-white ">
      <div className="max-w-screen-xl mx-auto">
      <div id="contentWrapper" className="max-w-screen-xl ">
        <h1 className="text-black text-3xl font-semibold leading-tight">
        Test        </h1>
        <p className="text-gray-700 pt-2">This site is designed to be a handoff utility for BHDS Foundations and Components.</p>
        <h2 className="pt-8">Foundations</h2>
        <ul>
          <li>
            <Link href="/pages/grids"><a>Grids and Spacing</a></Link>
          </li>
        </ul>
      </div>
      </div>
    </main>
  );
}