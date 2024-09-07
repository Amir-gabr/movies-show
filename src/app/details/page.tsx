
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
  const dispatch = useDispatch<AppDispatch>(); // Use the typed dispatch
  // const details = useSelector((state: RootState) => state.details.movie);
  const details: DetailsState = useSelector((state: DetailsState) => state);
  console.log(details?.movie);

  useEffect(() => {
    if (details?.movie?.id) {
      dispatch(detailsData(`${details?.movie?.id}`));
    }
  }, [dispatch, details?.movie?.id]);

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
              <div className="flex justify-between gap-4 border-b py-2">
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
                    </span>{" "}
                    {" : "}
                    {details?.movie?.overview}
                  </p>
                  <p className="text-white mx-auto flex items-center gap-2 mt-10">
                    Rating: {details?.movie?.vote_average?.toFixed(1)}
                    <FaStar className="text-lg text-amber-600" />
                  </p>
                </div>
              </div>

              {/* Genres */}
              <div className="flex items-center flex-wrap gap-4 mt-4 border-b py-2">
                {Array.isArray(details?.movie?.genres) &&
                  details?.movie?.genres.map(
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
                {Array.isArray(details?.movie?.spoken_languages) &&
                  details?.movie?.spoken_languages.map(
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
                {Array.isArray(details?.movie?.production_countries) &&
                  details?.movie?.production_countries.map(
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
