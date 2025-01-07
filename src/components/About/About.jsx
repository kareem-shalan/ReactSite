import React from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function About() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div className="mx-auto  mybg h-screen flex flex-col items-center p-4 sm:p-6 md:p-10 justify-center">
      <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
        About Component
      </h1>
      <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 mt">
        <div
          data-aos="fade-down-right"
          className="h-[4px] w-20  bg-emerald-300"
        ></div>
         <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <i className="fa-solid fa-star text-emerald-300"></i>
        </div>
        <div  data-aos="fade-down-left" className="h-[4px] w-20  bg-emerald-300"></div>
      </div>
    <div
    data-aos="fade-up"
    data-aos-anchor-placement="center-bottom"
    
    className="mt-4 sm:mt-6 md:mt-10" >
    <p className="text-center text-justify px-4 sm:px-6 md:px-10 max-w-4xl">
        Freelancer is a free bootstrap theme created by Route. The download
        includes the complete source files including HTML, CSS, and JavaScript
        as well as optional SASS stylesheets for easy customization. Freelancer
        is a free bootstrap theme created by Route. The download includes the
        complete source files including HTML, CSS, and JavaScript as well as
        optional SASS stylesheets for easy customization.
      </p>
    </div>
    </div>
  );
}