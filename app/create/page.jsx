"use client";

import { useState, useEffect } from "react";
import LogoTitle from "./_components/LogoTitle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import LogoDesc from "./_components/LogoDesc";
import LogoPallete from "./_components/LogoPalette";
import LogoDesign from "./_components/LogoDesign";
import LogoIdea from "./_components/LogoIdea";

function CreateLogo() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]); // Esto se ejecuta cada vez que formData cambia

  return (
    <div className="mt-28 p-10 border rounded-xl 2xl:mx-72">
      {step == 1 ? (
        <LogoTitle
          onHandleInputChange={(v) => onHandleInputChange("title", v)}
          formData={formData}
        />
      ) : step == 2 ? (
        <LogoDesc
          onHandleInputChange={(v) => onHandleInputChange("desc", v)}
          formData={formData}
        />
      ) : step === 3 ? (
        <LogoPallete
          onHandleInputChange={(v) => onHandleInputChange("palette", v)}
          formData={formData}
        />
      ) : step === 4 ? (
        <LogoDesign
          onHandleInputChange={(v) => onHandleInputChange("design", v)}
          formData={formData}
        />
      ) : step === 5 ? (
        <LogoIdea
          onHandleInputChange={(v) => onHandleInputChange("idea", v)}
          formData={formData}
        />
      ) : null}

      <div className="flex items-center justify-between mt-10">
        {step != 1 && (
          <Button
            onClick={() => setStep(step - 1)}
            variant="outline"
            className="cursor-pointer"
          >
            <ArrowLeft /> Previous
          </Button>
        )}
        <Button onClick={() => setStep(step + 1)} className="cursor-pointer">
          <ArrowRight /> Continue
        </Button>
      </div>
    </div>
  );
}

export default CreateLogo;
