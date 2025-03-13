import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 flex justify-between items-center shadow-sm">
      <Link href={"/"}>
        <Image src={"/logo.svg"} alt="logo" width={180} height={100} />
      </Link>
      <Button className="p-6 py-3 px-4 bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 text-white text-sm font-medium rounded-md focus:outline-none cursor-pointer">
        Get Started
      </Button>
    </div>
  );
};
export default Navbar;
