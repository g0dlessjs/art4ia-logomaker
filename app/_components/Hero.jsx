"use client";

import { useState } from "react";
import Lookup from "../_data/Lookup";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Hero() {
  const [logoTitle, setLogoTitle] = useState("");

  return (
    <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 pt-24 pb-10">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-neutral-200">
          {Lookup.HeroHeading}{" "}
          <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
            AI
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-gray-800 mt-5 dark:text-neutral-200">
          {Lookup.HeroSubheading}
        </h2>
      </div>

      <p className="text-lg text-gray-600 dark:text-neutral-400 max-w-3xl mt-5">
        {Lookup.HeroDesc}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mt-8">
        <input
          type="text"
          placeholder={Lookup.InputTitlePlaceholder}
          className="w-full py-3 px-4 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
          onChange={(e) => setLogoTitle(e.target.value)}
        />
        <Link href={"/create?title=" + logoTitle} className="w-full sm:w-auto">
          <Button className="size-12 w-full sm:w-auto px-6 py-3 bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 text-white text-sm font-medium rounded-md cursor-pointer">
            {Lookup.GetStarted}
          </Button>
        </Link>
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
