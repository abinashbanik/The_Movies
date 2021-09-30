import React, { useContext, useState } from 'react'
//Components
import PaymentModal from '../PaymentModal/Payment.component';
//Context
import { MovieContext } from "../../context/movie.context";

const MovieInfo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);
    const {movie} = useContext(MovieContext);
    //Optional chaining
    const genres = movie.genres ?.map(({ name }) => name).join(",");
    const rentMovies = () => {
        setIsOpen(true);
        setPrice(149);
    };
    const buyMovies = () => {
        setIsOpen(true);
        setPrice(500);
    }
    
    return (
        <>
            <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
            <div className="flex flex-col gap-3 lg:gap-8 md:px-3">
                <div className="flex items-center  gap-3" >
                    <div className="w-40 h-8">
                        <img 
                            src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
                            alt="premier" 
                            className="w-full h-full"
                        />
                    </div>
                    <span className="bg-bms-700 p-1 text-white rounded-md text-xs ">Streaming now</span>
                </div>
                <h1 className="hidden lg:block text-white lg:text-5xl font-bold">{movie.original_title}</h1>
                <div className="flex flex-col-reverse gap-3 lg:flex-col lg:gap-5 ">
                    <div className="text-white font-light flex flex-col gap-2">
                        <h4>4K &bull; {movie.original_language}</h4>
                        <h4>{(movie.runtime / 60).toFixed(2)} h &bull;{genres} &bull; 16+</h4>
                    </div>
                    <div className="flex items-center gap-3  md:w-screen lg:w-full">
                        <button onClick={rentMovies} className="bg-red-600 w-full py-3  text-white font-semibold rounded-lg">Rent ₹149</button>
                        <button onClick={buyMovies} className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg">Buy ₹500</button>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default MovieInfo;
