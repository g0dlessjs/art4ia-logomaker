import { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
import LogoDesigns from "@/app/_data/LogoDesigs";
import Image from "next/image";

function LogoDesign({ onHandleInputChange }) {
  const [selectedOption, setSelectedOption] = useState();
  return (
    <div className="my-10">
      <HeadingDescription
        title={Lookup.LogoDesignTitle}
        description={Lookup.LogoDesignDesc}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-10">
        {LogoDesigns.map((design, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedOption(design.title);
              onHandleInputChange(design);
            }}
            className={`p-1 cursor-pointer hover:border-2 border-primary rounded-xl ${
              selectedOption == design.title &&
              "border-2 rounded-xl border-primary"
            }`}
          >
            <Image
              src={design.image}
              alt={design.title}
              width={300}
              height={200}
              className="w-full rounded-xl h-[150px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoDesign;
