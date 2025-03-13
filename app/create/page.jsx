"use client";

import { useState } from "react";
import LogoTitle from "./_components/LogoTitle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

function CreateLogo() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="mt-28 p-10 border rounded-xl 2xl:mx-72">
      {step == 1 ? (
        <LogoTitle onHandleInputChange={(v) => onHandleInputChange} />
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
