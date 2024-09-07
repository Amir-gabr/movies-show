//
//
//

import Link from "next/link";
import { SiCodesignal } from "react-icons/si";



export default  function Header() {
  return (
    <header className="bg-black bg-opacity-60 py-4 backdrop-blur-sm shadow-xl border-b fixed w-full top-0 left-0 z-50">
      <div className="container flex justify-center items-center ">
        <h5 className="flex items-center gap-3">
          <SiCodesignal className="w-8 h-8 text-pink-600" />
          <Link
            className="text-2xl font-bold text-white"
            href="/"
          >
            Movies
          </Link>
        </h5>
      </div>
    </header>
  );
}
