//
//
//

import Link from "next/link";
import {FaHeart} from "react-icons/fa";
import { SiCodesignal } from "react-icons/si";
import { SlSocialYoutube } from "react-icons/sl";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {

  return (
    <footer className="bg-second py-6">
      <div className="container flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="flex justify-between items-center w-full px-6 md:px-0 ">
          <h5 className="flex items-center gap-3">
            <SiCodesignal className="w-8 h-8 text-pink-600" />
            <Link className="text-2xl font-bold text-white" href="/">
              Movies
            </Link>
          </h5>
          <p className="text-white hidden md:flex gap-2 items-center">
            Created by <span className="text-pink-600">Amir</span> With All Love
            <FaHeart className="text-red-500 text-lg" />
          </p>
          <div className="flex items-center justify-between gap-4">
            <p className="bg-gray-200 rounded-lg px-2 py-1 border border-pink-600 hover:scale-110 duration-300">
              <FiGithub className="w-6 h-6 text-gray-900 mx-auto" />
            </p>
            <p className="bg-gray-200 rounded-lg px-2 py-1 border border-pink-600 hover:scale-110 duration-300">
              <FiLinkedin className="w-6 h-6 text-gray-900 mx-auto" />
            </p>
            <p className="bg-gray-200 rounded-lg px-2 py-1 border border-pink-600 hover:scale-110 duration-300">
              <SlSocialYoutube className="w-6 h-6 text-gray-900 mx-auto" />
            </p>
          </div>
        </div>
        <p className="text-white md:hidden flex gap-2 items-center mt-4 md:mt-0">
          Created by <span className="text-pink-600">Amir</span> With All Love
          <FaHeart className="text-red-500 text-lg" />
        </p>
      </div>
    </footer>
  );
}
