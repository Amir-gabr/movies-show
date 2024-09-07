//
//
"use client";
//


import TopRate from "./TopRate"
import Loader from "./Loader"
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "@/lib/redux/moviesSlice";

export default function Hero() {

    const dispatch = useDispatch<any>(); 
    const { movies ,isLoading} = useSelector(
      (state: any) => state.movies
    ); 
    useEffect(() => {
      dispatch(fetchMovies());
    }, [dispatch]);

  return (
    <>
      <section className="hero-bg relative w-full h-[100vh] pt-[4rem]">
        <div className="hero-bg-overlay w-full h-full bg-black bg-opacity-30 absolute top-0 right-0"></div>
        <div className="container grid grid-cols-12 w-full">
          <div className="col-span-6 md:col-span-7 lg:col-span-8 xl:col-span-9"></div>
          <div className="group col-span-5 md:col-span-4 lg:col-span-3 xl:col-span-2 relative transition duration-300">
            {movies && movies?.length > 0 ? (
              <>
                <TopRate />
                <div className="group-hover:hidden transition duration-300 bg-black flex justify-center items-center rounded-xl bg-opacity-50 absolute top-0 right-0 w-full h-full">
                  <h4 className="text-3xl font-semibold text-white">
                    Top Rates
                  </h4>
                </div>
              </>
            ) : (
              <div className="flex justify-center items-center w-full h-[90vh] ">
                <Loader/>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
