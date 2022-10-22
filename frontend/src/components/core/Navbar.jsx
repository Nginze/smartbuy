import React from "react";
import { Link } from "react-router-dom";
import StylishAvatar  from "../utils/StylishAvatar";
import { FiShoppingCart } from "react-icons/fi";
import { IoColorWandSharp } from "react-icons/io5"
import { Badge } from "@mui/material";

const StylishNav = () => {
  return (
    <section className="flex justify-between items-center w-screen border-b-2 border-gray-100">
        <div className="p-5 py-5 flex items-center gap-2">
          <h1 className="text-2xl font-semibold text-red-400 font-inter cursor-pointer">
                <Link to="/">SmartBuy</Link>
          </h1>
        </div>  
        <div className="p-5 py-5">
            
            <form>
                <div className="flex w-[580px]">
                    <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only">Your search</label>
                    <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 font-inter inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100" type="button">
                        All categories <svg aria-hidden="true" className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"></path></svg>
                    </button>
             
                    <div className="relative w-full">
                        <input type="search" id="search-dropdown" className="font-inter block p-2.5 w-full z-20 text-sm text-gray-900 outline-none bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300" placeholder="Search Stores, Brands, and Items..." required="" />
                        <button type="submit" className="absolute px-7 top-0 right-0 p-2.5 text-sm font-medium text-white bg-red-400 rounded-r-md border border-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 focus:bg-red-200">
                            <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>

        </div>
        <div className="">
            <ul className='flex gap-7 justify-between items-center font-inter mr-5'>
              <li className='font-lg flex justify-between items-center gap-1'>
                  <Link className="text-gray-700" to="/stores">Student Stores</Link>
                  <IoColorWandSharp className="text-2xl text-gray-500" />
              </li>
              <li className='font-lg'>
                    <a href="/studio">Studio</a>
                </li>
              <li className='font-lg flex justify-between items-center gap-1'>
                  <Link className="text-gray-700" to="/cart">Cart</Link>
                  <Badge badgeContent={2} color="primary">
                    <FiShoppingCart className="text-[1.25rem] text-gray-500" />
                </Badge>
              </li>
           
              
              <li className=''>
                    <StylishAvatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />
              </li>
            </ul>
        </div>
    </section>
  );
}

export default StylishNav;
