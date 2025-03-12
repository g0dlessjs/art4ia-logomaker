import React from "react";
import LogoTitle from "./_components/LogoTitle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

function CreateLogo() {
  return (
    <div className="mt-28 p-10 border rounded-xl 2xl:mx-72">
      <LogoTitle />

      <div>
        <Button variant="outline" className="cursor-pointer mx-2">
          <ArrowLeft /> Previous
        </Button>
        <Button className="cursor-pointer">
          <ArrowRight /> Continue
        </Button>
      </div>
    </div>
  );
}

export default CreateLogo;
