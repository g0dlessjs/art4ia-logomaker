import { Button } from "@/components/ui/button";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 flex justify-between items-center shadow-sm">
      <Image src={"/logo.svg"} alt="logo" width={180} height={100} />
      <Button className="bg-purple-900 cursor-pointer hover:bg-purple-950">
        Get Started
      </Button>
    </div>
  );
};
export default Navbar;
