import React, {useState, useEffect } from "react";

import HeroSlider from "react-slick";
import axios from "axios";

// Components
import { NextArrow, PrevArrow } from "./Arrows.component";



const HeroCarousal = () => {

    const [images,setImages] = useState([]);


    useEffect(() => {
        // async
        const requestNowPlayingMovies = async () => {
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results);
        };
        requestNowPlayingMovies();
    }, []);

    const settingsLG = {
        arrows:true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const settings = {
        arrows:true,
        autoplay: true,
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };

    //   const images = [
    //                     "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    //                     "https://media.istockphoto.com/photos/quality-control-certification-checked-guarantee-of-standard-picture-id1282804749?b=1&k=20&m=1282804749&s=170667a&w=0&h=pxajgIoOB8XGjTPHwWAsnVS3PCoUZWxBwCYBdpqCVk8=",
    //                     "https://media.istockphoto.com/photos/young-woman-global-communications-picture-id1299152059?s=612x612",
    //                     "https://images.unsplash.com/photo-1598986646512-9330bcc4c0dc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    //                     "https://images.unsplash.com/photo-1507764923504-cd90bf7da772?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXB1dGVyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    //                     "https://media.istockphoto.com/photos/young-african-american-businesswoman-at-home-office-working-late-picture-id1281862639?b=1&k=20&m=1281862639&s=170667a&w=0&h=ZsIkwQhDEX-z3QbXiptYtyLk-vgZo3Yq-psJry7CW1c="
                                        
    // ];
    return (
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {images.map((image) => (
                        <div className="w-full h-44 md:h-80 py-3"> 
                            <img 
                                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} 
                                alt="testing" 
                                className="w-full h-full rounded-md" />
                        </div>
                    )
                    )}
                </HeroSlider>
            </div>

            <div className="hidden lg:block">  
            <HeroSlider {...settingsLG}>
                {images.map((image) => (
                    <div className="w-full h-96 px-2 py-3"> 
                        <img 
                            src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} 
                            alt="testing" 
                            className="w-full h-full rounded-md" />
                    </div>
                )
                )}
            </HeroSlider>
            </div>
        </>
    );
};

export default HeroCarousal;