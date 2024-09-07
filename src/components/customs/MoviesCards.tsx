//
//
"use client";
//
import Link from "next/link";
import Image from "next/image";
//
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//
import { fetchMovies } from "@/lib/redux/moviesSlice";
import { detailsData } from "@/lib/redux/detailsSlice";
import { AppDispatch } from "@/lib/redux/store";
//
import Loader from "./Loader";
//
import { LuArrowUpRightSquare } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
//
import { MovieState } from "@/interfaces/MovieState";




export default function MoviesCards() {
  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector((state: { movies: MovieState }) => state?.movies?.movies||[]);
  console.log(movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <>
      <section className="py-6">
        <h3 className="text-white font-semibold text-2xl text-center">
          Movies List
        </h3>
        <div className="container min-h-screen flex justify-center items-center px-6 md:px-0">
          <div className="">
            {movies && movies?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 py-10 ">
                {movies?.map((movie) => (
                  <div key={movie?.id} className="card flex flex-col rounded-xl">
                    <Image
                      className="rounded-t-xl"
                      src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                      alt={movie.title}
                      width={500}
                      height={500}
                    />
                    <div className="p-3">
                      <h2 className="text-white text-center text-xl md:text-base mx-auto border-b w-fit">
                        {movie?.title}
                      </h2>
                      <div className="flex justify-between items-center pt-6">
                        <p className="text-white flex items-center gap-2">
                          {movie?.vote_average.toFixed(1)}
                          <FaStar className="text-lg text-amber-600" />
                        </p>

                        <Link
                          href={`/details`} 
                          passHref
                        >
                          <p
                            className="text-white hover:text-teal-600 duration-300 w-fit flex items-center gap-2"
                            onClick={() => {
                              dispatch(detailsData(`${movie?.id}`)); 
                              console.log(movie?.id);
                            }}
                          >
                            Learn More
                            <LuArrowUpRightSquare className="text-xl" />
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
