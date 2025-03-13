"use client";

import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
import { useParams, useSearchParams } from "next/navigation";

function LogoTitle() {
  const searchParam = useSearchParams();
  const title = searchParam?.get("title");

  return (
    <div className="my-10">
      <HeadingDescription
        title={Lookup.LogoTitle}
        description={Lookup.LogoTitleDesc}
      />

      <input
        type="text"
        placeholder={Lookup.InputTitlePlaceholder}
        className="p-4 border rounded-lg mt-5 w-full"
        defaultValue={title}
      />
    </div>
  );
}

export default LogoTitle;
