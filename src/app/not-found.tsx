import Link from "next/link";
import { SiCodesignal } from "react-icons/si";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black bg-opacity-10">
      <SiCodesignal className="w-16 h-16 text-pink-600" />
      <h5 className="text-xl font-bold">Not Found</h5>
      <p>Could not find requested resource</p>
      <Link
        className="mt-8 inline-flex items-center justify-center px-6 py-3 text-base font-medium text-black bg-white rounded-md shadow hover:bg-gray-100 hover:scale-110 duration-300"
        href="/"
      >
        Return Home
      </Link>
    </section>
  );
}
