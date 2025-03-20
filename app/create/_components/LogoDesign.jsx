import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
import LogoDesigns from "@/app/_data/LogoDesigs";
import Image from "next/image";

function LogoDesign() {
  return (
    <div className="my-10">
      <HeadingDescription
        title={Lookup.LogoDesignTitle}
        description={Lookup.LogoDesignDesc}
      />

      <div>
        {LogoDesigns.map((design, index) => (
          <div key={index}>
            <Image
              src={design.image}
              alt={design.title}
              width={300}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoDesign;
