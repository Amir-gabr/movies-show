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
import { detailsData } from "@/lib/redux/detailsSlice";
import { DetailsState } from "@/interfaces/MovieState";
//
import Loader from "../../components/customs/Loader";
//
import { FaStar } from "react-icons/fa6";


export default function MovieDetails() {
  const dispatch = useDispatch<any>(); 
  const  {details} = useSelector(
    (state:DetailsState) => state
  ); 
  console.log(details?.movie);

  useEffect(() => {
    dispatch(detailsData());
  }, [dispatch]);

  return (
    <>
      <section className="container min-h-screen py-20 relative">
        {details ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full px-6 md:px-0">
            <div className="text-white">
              <Image
                  className="rounded-xl w-full h-full object-cover"
                  src={`https://image.tmdb.org/t/p/w500${details?.movie?.backdrop_path}`}
                  alt={details?.movie?.title}
                  width={500}
                  height={500}
                />
            </div>
            <div className="text-white">
              <div className="flex  justify-between gap-4 border-b py-2">
                <div className="min-w-44 min-h-60">
                  <Image
                    className="rounded-xl w-full h-full object-cover"
                    src={`https://image.tmdb.org/t/p/w500${details?.movie?.poster_path}`}
                    alt={details?.movie?.title}
                    width={200}
                    height={300}
                  />
                </div>
                <div className="">
                  <p className="">            
                    <span className="text-lg font-semibold text-pink-600">
                      {details?.movie?.title}             
                    </span> {" : "}
                    {details?.movie?.overview}
                  </p>
                  <p className="text-white mx-auto  flex items-center gap-2 mt-10">
                  Rateing : {" "}
                  {details?.movie?.vote_average.toFixed(1)}
                  <FaStar className="text-lg text-amber-600" />
                  </p>
                </div>
              </div>
              <div className="flex items-center flex-wrap gap-4 mt-4 border-b py-2">
                {details?.movie?.genres.map((name:string , id:number)=>(
                  <p key={id} className="text-sm border-[1px] rounded-lg px-3">
                    {name?.name}
                  </p>
                )
                )}
              </div>
              <div className="flex items-center flex-wrap gap-4 mt-4 border-b py-2">
                languages : {" "}
                {details?.movie?.spoken_languages.map((name:string , id:number)=>(
                  <p key={id} className="">
                    <span className="text-lg font-semibold text-pink-600">           
                      {name?.name}
                    </span>
                  </p>
                )
                )}
              </div>
              <div className="flex items-center flex-wrap gap-4 mt-4 border-b py-2">
                  country : {" "}
                {details?.movie?.production_countries.map((name:string , id:number)=>(
                  <p key={id} className="">
                    <span className="text-lg font-semibold text-pink-600">           
                      {name?.name}
                    </span>
                  </p>
                )
                )}
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </section>
    </>
  )
}


