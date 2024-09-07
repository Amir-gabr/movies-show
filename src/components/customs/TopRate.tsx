//
//
"use client";
//
import Link from "next/link";
import Image from "next/image";
//
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//
import { topRateMovies } from "@/lib/redux/topRateSlice";
import { detailsData } from "@/lib/redux/detailsSlice";
//
import { TopRateMoviesState } from "@/interfaces/MovieState";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




export default function TopRate() {

    const dispatch = useDispatch<any>();
    const  movies = useSelector(
      (state:TopRateMoviesState) => state?.topRate?.movies
    );
    console.log(movies);

    useEffect(() => {
      dispatch(topRateMovies());
    }, [dispatch]);


    //
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
  return (
    <>
      <div className="w-full h-[90vh]">
        <Slider {...settings}>
          {  
            movies?.map((movie: any) => (
              <div key={movie?.id} className="border rounded-xl h-[300px]">
                <Link
                  href={`/details`} 
                  passHref
                  onClick={() => {
                  dispatch(detailsData(movie?.id)); 
                  console.log(movie?.id);
                }}>
                  <Image className="rounded-xl w-full h-full " src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie.title} width={200} height={200} />
                </Link>
              </div>
            ))
          }
        </Slider>
      </div>
    </>
  )
}
