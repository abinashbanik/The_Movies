//MovieNavbarcomponent
import React, { useContext } from "react";
import { BiChevronRight, BiSearch, BiMenu, BiChevronDown, BiShareAlt, } from "react-icons/bi";


//Context
//import { MovieContext } from "../../context/movie.context";
import { MovieContext } from "../../context/movie.context";


const NavSm = () => {
    const { movie } = useContext(MovieContext);
    return (
        <>
            <div className="text-white flex items-center justify-between ">
                <div>
                    <h3 className="text-xl font-bold">{movie.original_title}</h3>
                   
                </div>
                <div className="w-8 h-8">
                    <BiShareAlt className="w-full h-full"/>
                </div>
            </div>
        </>
    );
};

const NavLg = () => {
    return (
        <>
            <div className="container mx-auto px-4  flex items-center justify-between">
                <div className="flex item-center w-3/5 gap-3">
                    <div className="w-12 h-12">
                        <img className="w-full h-full" src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo"/>
                    </div>

                    <div className="w-full flex items-center gap-3 bg-white py-2 px-3 rounded-md"> <BiSearch />
                        <input type="search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search for movies, plays, sports and Activities" />
                    </div>

                </div>

                <div className="flex items-center gap-3">
                    <span className="text-gray-300 text-xs flex items-center cursor-pointer hover:text-white">Agartala <BiChevronDown /> </span>
                    <button className="bg-red-500 text-white px-2 py-1 text-sm rounded">Sign in</button>
                    <div className="w-8 h-8 text-white"><BiMenu className="w-full h-full"/></div>
                </div>
            </div>

        </>
    );
};


const MovieNavbar = () => {
    return (
        <>
            <nav className="absolute inset-x-0 z-30  bg-opacity-40 backdrop-filter bg-black backdrop-blur-lg lg:relative lg:bg-bms-700 p-4" >
                <div className="md:hidden ">{/*Small Devices*/}<NavSm /> </div>
                <div className="hidden md:block lg:hidden">{/*Medium Devices */}<NavSm /></div>
                <div className="hidden w-full lg:flex">{/* Large Screen*/}<NavLg /></div>
            </nav>
        </>
    );
};

export default MovieNavbar;



  