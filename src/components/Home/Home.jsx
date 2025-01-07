import React from "react";
import shoppingImage from "../../assets/6364b6fd26e298ba94b93c6b_DrawKit0027_Online_Shopping_Thumbnail-p-500.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="mybg overflow-hidden  flex-col h-full flex  py-20 justify-center items-center">
      <div className="container mx-auto flex justify-center items-center">
        <div
          data-aos="zoom-in-up"
          className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
        >
          <img className="w-full" src={shoppingImage} alt="Online Shopping" />
        </div>
      </div>
      <div >
        <h3 className="uppercase text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
          start Framework
        </h3>
      </div>
      <div className="flex sm: justify-center items-center gap-2 sm:gap-4 md:gap-6">
        <div
          data-aos="fade-down-right"
          className="h-[4px] w-20  bg-emerald-300"
        ></div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <i className="fa-solid fa-star text-emerald-300"></i>
        </div>
        <div
          data-aos="fade-down-left"
          className="h-[4px] w-20  bg-emerald-300"
        ></div>
      </div>
    </div>
  );
}
