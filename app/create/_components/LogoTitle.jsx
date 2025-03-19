"use client";

import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function LogoTitle({ onHandleInputChange }) {
  const searchParam = useSearchParams();
  const titleFromURL = searchParam?.get("title") || ""; // Si no hay parámetro, inicia vacío
  const [title, setTitle] = useState(titleFromURL);

  // Actualizar el estado si el parámetro de la URL cambia (por ejemplo, si el usuario abre otra URL con otro título)
  useEffect(() => {
    setTitle(titleFromURL);
    onHandleInputChange(titleFromURL); // Opcional: actualizar el form data desde el inicio
  }, [titleFromURL]);

  const handleChange = (e) => {
    setTitle(e.target.value);
    onHandleInputChange(e.target.value);
  };

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
        value={title}
        onChange={handleChange}
      />
    </div>
  );
}

export default LogoTitle;
