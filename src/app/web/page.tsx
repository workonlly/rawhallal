"use client";
import React from 'react'
import { useState } from 'react';
import Link from "next/link";
import Home from './pag';
import Fresh from './fresh';
import Contactus from './contactus';
import Bhiryani from './bhiryani';

function page() {
const [activePage, setActivePage] = useState("home");

  return (
    <div className='animated-bg h-screen w-screen relative p-1 relative'>
        {/* black background screen here */}
             <div className='bg-black  h-full w-full rounded-md relative flex flex-row  items-center p-1'>
              {/* 2 column working start */}
                  {/* 1st div */}
                 
                    <div className=" w-[15%] h-full border-2 border-[#14213d] backdrop-blur-md rounded-md mr-1 "> {/*main div */} 
                           <div className="w-[100%] h-full rounded-sm p-[5px] flex flex-col gap-3 backdrop-blur-md "> {/*alining div */}

                                  <div className="animated-bg h-[10vh] flex flex-col justify-center items-center font-bold rounded-xl text-white  ">Raw  Chicken </div>

                                          <div className="flex flex-col gap-2">

                                                    <div className="hover:bg-[#fb5607] text-white h-[10vh] flex flex-col justify-center  pl-5 rounded-r-xl  font-semibold hover:shadow-xl" onClick={() => setActivePage("home")}>Home</div>
                                                    <div className="hover:bg-[#fb5607] text-white h-[10vh] flex flex-col justify-center pl-5 rounded-r-xl font-semibold hover:shadow-xl" onClick={() => setActivePage("fresh")}>Fresh zone</div>
                                                    <Link href="#chick " className="  "><div className="hover:bg-[#00b4d8] text-white h-[10vh] bg-white/10 backdrop-blur-md shadow-xl  flex flex-col justify-center  font-semibold ml-5 " onClick={() => setActivePage("fresh")}> →Chicken</div></Link>
                                                    <Link href="#fish " className="  "><div className="hover:bg-[#00b4d8] text-white h-[10vh] bg-white/10 backdrop-blur-md shadow-xl  flex flex-col justify-center font-semibold ml-5 " onClick={() => setActivePage("fresh")}> →Raw fresh fish</div></Link>
                                                    <Link href="#mutton" className="  "><div className="hover:bg-[#00b4d8] text-white h-[10vh] bg-white/10 backdrop-blur-md shadow-xl  flex flex-col justify-center font-semibold text-[15px] ml-5 " onClick={() => setActivePage("fresh")}> →Raw fresh mutton</div></Link>
                                                    <div className="hover:bg-[#fb5607] text-white h-[10vh] flex flex-col justify-center pl-5 rounded-r-xl font-semibold hover:backdrop-blur-xl" onClick={() => setActivePage("contact")}>Franchise options</div>
                                                    <div className="hover:bg-[#fb5607] text-white h-[10vh] flex flex-col justify-center pl-5 rounded-r-xl font-semibold hover:backdrop-blur-xl"  onClick={() => setActivePage("bhiryani")} >Bhiryani</div>
                                                        

                                          </div>
                          </div>
                    </div> 
                      
                  
                   {/* 1st div end */}

                   {/* 2nd div  */}
                     <div className=" w-[90%] h-full  pb-1 backdrop-blur-md rounded-sm relative ">  
                          {/* main logo area */}
                          <div className="flex flex-row justify-center items-center ">
                                            <img src="./fdrd-removebg-preview-modified.png" alt="" className=" absolute w-[50px] h-[50px] rounded-tl-lg rounded-br-lg bg-white left-2 top-2  box" />

                                     <p className='text-white text-2xl font-bold '>impot data fghbdgnghdndghhere</p>
                          </div>
                          {/* main logo area end */}
                  
                          <div className="h-[2px]  animated-bg absolute w-[93%] mt-10 right-0"></div>
              
                          {/* end of brek line */}
                      {/* main working area */}
                    
                     {activePage === "home" && <Home />}
                        {activePage === "fresh" && <Fresh />}
                        {activePage === "contact" && <Contactus />}
                        {activePage === "bhiryani" && <Bhiryani/>}
                      


                        {/* main working area end */}
                  
                     </div>
                  {/* 2nd div end */}
                  {/* 2 cloumn working here end */}

               
             </div>
          {/* black screen end here */}
    </div>
  )
}

export default page
