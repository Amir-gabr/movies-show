
"use client"

import Image from "next/image";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailsData } from "@/lib/redux/detailsSlice";
import { AppDispatch } from "@/lib/redux/store";
import { DetailsState } from "../../interfaces/MovieState";
import Loader from "../../components/customs/Loader";
import { FaStar } from "react-icons/fa6";

export default function MovieDetails() {
  const dispatch = useDispatch<AppDispatch>(); 
  const details:any = useSelector(
    (state: { details: { details: DetailsState | null } }) => state?.details
  );
  console.log(details);



  useEffect(() => {
    if (details?.details?.id) {
      dispatch(detailsData(`${details?.details?.id}`));
    }
  }, [dispatch, details?.details?.id]);

  return (
    <>
      <section className="container min-h-screen py-20 relative">
        {details ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full px-6 md:px-0">
            <div className="text-white">
              <Image
                className="rounded-xl w-full h-full object-cover"
                src={`https://image.tmdb.org/t/p/w500${details?.details?.backdrop_path}`}
                alt={details?.details?.title}
                width={500}
                height={500}
              />
            </div>
            <div className="text-white">
              <div className="flex justify-between gap-4 border-b py-2">
                <div className="min-w-44 min-h-60">
                  <Image
                    className="rounded-xl w-full h-full object-cover"
                    src={`https://image.tmdb.org/t/p/w500${details?.details?.poster_path}`}
                    alt={details?.details?.title}
                    width={200}
                    height={300}
                  />
                </div>
                <div className="">
                  <p className="">
                    <span className="text-lg font-semibold text-pink-600">
                      {details?.details?.title}
                    </span>{" "}
                    {" : "}
                    {details?.details?.overview}
                  </p>
                  <p className="text-white mx-auto flex items-center gap-2 mt-10">
                    Rating: {details?.details?.vote_average?.toFixed(1)}
                    <FaStar className="text-lg text-amber-600" />
                  </p>
                </div>
              </div>

              {/* Genres */}
              <div className="flex items-center flex-wrap gap-4 mt-4 border-b py-2">
                {Array.isArray(details?.details?.genres) &&
                  details?.details?.genres.map(
                    (name: { id: number; name: string }) => (
                      <p
                        key={name?.id}
                        className="text-sm border-[1px] rounded-lg px-3"
                      >
                        {name?.name}
                      </p>
                    )
                  )}
              </div>

              {/* Languages */}
              <div className="flex items-center flex-wrap gap-4 mt-4 border-b py-2">
                languages:{" "}
                {Array.isArray(details?.details?.spoken_languages) &&
                  details?.details?.spoken_languages.map(
                    (lang: { iso_639_1: string; name: string }) => (
                      <p key={lang?.iso_639_1} className="">
                        <span className="text-lg font-semibold text-pink-600">
                          {lang?.name}
                        </span>
                      </p>
                    )
                  )}
              </div>

              {/* Countries */}
              <div className="flex items-center flex-wrap gap-4 mt-4 border-b py-2">
                country:{" "}
                {Array.isArray(details?.details?.production_countries) &&
                  details?.details?.production_countries.map(
                    (country: { iso_3166_1: string; name: string }) => (
                      <p key={country?.iso_3166_1} className="">
                        <span className="text-lg font-semibold text-pink-600">
                          {country?.name}
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
  );
}
