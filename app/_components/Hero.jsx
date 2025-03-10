import React from "react";
import Lookup from "../_data/Lookup";
import { Button } from "@/components/ui/button";
import { HeroHeading, HeroSubheading, HeroDesc } from "../_data/Lookup";

function Hero() {
  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-1 before:transform before:-translate-x-1/2">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 text-center">
        <div className="mt-5 max-w-2xl mx-auto">
          <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
            {Lookup.HeroHeading}{" "}
            <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
              AI
            </span>
          </h1>
          <h2 className="text-4xl text-center text-gray-800 font-bold mt-5">
            {Lookup.HeroSubheading}
          </h2>
        </div>

        <div className="mt-5 max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-neutral-400">
            {Lookup.HeroDesc}
          </p>
        </div>

        <div className="flex justify-center items-center gap-3 max-w-md mx-auto mt-15">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full py-3 px-4 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
          />
          <button className="w-50 p-6 py-3 px-4 bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 text-white text-sm font-medium rounded-md focus:outline-none cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

/*
    <div className="flex items-center mt-32 flex-col gap-5">
      <h2 className="text-primary text-5xl text-center font-bold ">
        {Lookup.HeroHeading}
      </h2>
      <h2 className="text-5xl text-center font-bold ">
        {Lookup.HeroSubheading}
      </h2>
      <p className="text-xl text-gray-500 text-center">{Lookup.HeroDesc}</p>
      <div className="flex flex-col gap-4 w-full max-w-md mx-auto mt-10">
        <input
          placeholder={Lookup.InputTitlePlaceholder}
          className="p-4 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <Button className="p-4 cursor-pointer bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 transition-colors duration-200">
          Get Started
        </Button>
      </div>
    </div>

*/
