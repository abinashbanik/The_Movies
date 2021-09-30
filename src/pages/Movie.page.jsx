import React, { useContext, useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from "react-router";
import { FaCcVisa } from "react-icons/fa";
import { GrPaypal } from "react-icons/gr";
import Slider from "react-slick";

//Components
import Cast from '../components/Cast/cast.component.jsx';
import MovieHero from '../components/MovieHero/MovieHero.component';
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//Config
import TempPosters from "../config/TempPosters.config";
//context
import { MovieContext } from "../context/movie.context";

const MoviePage = () => {
  const { id } = useParams();
  const {movie} = useContext(MovieContext);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies ] = useState([]);
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
      const getcast = await axios.get(`/movie/${id}/credits`)
      setCast(getcast.data.cast);
    };
    requestCast(); 
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
        const getsimilarMovies = await axios.get(`/movie/${id}/similar`);
        setSimilarMovies(getsimilarMovies.data.results);
    };
    requestSimilarMovies();
  }, [id]);

useEffect(() => {
  const requestRecommended = async () => {
      const getrecommended = await axios.get(`/movie/${id}/recommendations`);
      setRecommended(getrecommended.data.results);
  };
  requestRecommended();
  }, [id]);

  const settingsM = {
    infinite: false,
    slidesToShow: 4,
    speed:500,
    slidesToScroll: 4,
    InitialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                InitialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
               
            },
        },

],

};
  const settingsCast = {
  infinite: false,
  slidesToShow: 6,
  speed:500,
  slidesToScroll: 4,
  InitialSlide: 0,
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
              infinite: true,
          },
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              InitialSlide: 2,
          },
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
             
          },
      },

],

};



  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg:w-2/3 lg:ml-20">
        <div className="flex flex-col  items-start gap-3">
          <h2 className="text-black-800 font-bold text-2xl">About the movie</h2>
          <p>{movie.overview}</p>
        </div>
        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h1 className="text-black-800 font-bold text-2xl">Applicable offers</h1>
        </div>

        <div className="flex flex-col  gap-3 lg:flex-row">
          <div className="flex items-start gap-2 bg-yellow-100 py-3 border-2 border-yellow-200 border-dashed rounded-lg">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>

              <div className="flex flex-col items-start ">
                <h3 className="text-gray-700 text-xl font-bold">Visa Stream Offer</h3>
                <p className="text-gray-600">Get 50% off upto INR 150 on all RuPay cards* on BookMyShow Stream
                </p>
              </div>

          </div>

          <div className="flex items-start gap-2 bg-yellow-100 py-3 border-2 border-yellow-200 border-dashed rounded-lg">
              <div className="w-8 h-8">
                <GrPaypal className="w-full h-full" />
              </div>

              <div className="flex flex-col items-start ">
                <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                <p className="text-gray-600">Get Rs.75* off on 3 movies you buy/rent on Stream. 
                                              Buy Filmy Pass @Rs.99
                </p>
              </div>

          </div>

        </div>
        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-black-800 font-bold text-2xl mb-4">Cast & Crew</h2>
          
            <Slider {...settingsCast}>
            {cast.map((castdata) => 
                  (<Cast 
                    image={`https://image.tmdb.org/t/p/original/${castdata.profile_path}`} 
                    castName={castdata.original_name} 
                    role={castdata.character} 
                  />
                  ))}
            </Slider>
            
            {/* <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/vaani-kapoor-36695-18-12-2019-01-53-28.jpg" castName="Vani Kapoor" role="Actress1" />
            <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/huma-qureshi-30360-24-03-2017-13-58-06.jpg" castName="Huma Qureshi " role="Actress2" />
            <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/jackky-bhagnani-10549-24-03-2017-14-04-58.jpg" castName="Jackky Bhagnani" role="Producer" /> */}
         
        </div>

        <div className="my-8">
          <PosterSlider config={settingsM} images={similarMovies} title="You might also like" isDark={false} />
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <PosterSlider config={settingsM} images={recommended} title="BMS Xclusive" isDark={false} />
        </div>

      </div>


    </>
  );
};

export default MoviePage;
