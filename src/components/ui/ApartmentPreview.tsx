import React from "react";

import apartment from "../../assets/imperial.png";
import imperialPreview from "../../assets/imperialPreview.png";

import { IoBed } from "react-icons/io5";
import { TbRulerMeasure } from "react-icons/tb";
import { FaEuroSign } from "react-icons/fa";

const ApartmentPreview = () => {
  return (
    <div className="flex justify-center pt-32 cursor-default">
      <div>
      <div className="w-[1400px] flex justify-between">
        <div className="w-[30%]">
          <div className="pt-16 flex flex-col gap-2">
            <h3 className="text-3xl text-accent uppercase font-semibold">
              Lodha
            </h3>
            <h4 className="font-bold text-grayish text-5xl">
              Imperial Heights
            </h4>
            <p className="text-gray-500 text-xl">
              67, Nerul, Navi Mumbai, Maharashtra
            </p>
          </div>
          <div className="pt-[100px] flex flex-col gap-4">
            <div className="flex items-center gap-6">
              <span className="text-3xl pt-1 text-accent">
                <IoBed />
              </span>
              <h5 className="text-3xl font-bold text-grayish">3 BHK</h5>
              <button className="px-2 py-[2px] bg-accent text-white font-semibold rounded-full text-md cursor-default">
                Compact
              </button>
            </div>
            <div className="flex items-center gap-5">
              <span className="text-3xl pt-1 text-accent">
                <TbRulerMeasure />
              </span>
              <p className="text-grayish text-3xl">1200 Sq. Ft.</p>
            </div>
            <div className="flex items-center gap-5">
            <span className="text-3xl pt-1 text-accent">
                <FaEuroSign />
              </span>
              <p className="text-grayish text-3xl">800,000</p>
            </div>
          </div>
        </div>
        <div className="w-[50%] h-[600px] relative">
          <img
            src={apartment}
            alt="Imperial Heights"
            className="h-full w-full rounded-xl"
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-32 text-3xl pt-16 font-thin">
        <div className="flex flex-col items-center gap-1">
          <span className="text-accent text-5xl font-bold">4</span>
          <p>Bedrooms</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-accent text-5xl font-bold">2</span>
          <p>Bathrooms</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-accent text-5xl font-bold">4</span>
          <p>Balcony</p>
        </div>
      </div>
       <div className="h-[900px] bg-grayish mt-16 flex items-center justify-center rounded-2xl">
          <img src={imperialPreview} alt="Apartment Preview" className="w-[95%] h-[95%]"/>
        </div>
      </div>
    </div>
  );
};

export default ApartmentPreview;
