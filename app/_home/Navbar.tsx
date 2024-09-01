import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="text-[27.8px]">
        <span className="font-medium text-primary-blue">Hospital</span> Logo
      </div>
      <div className="flex flex-row gap-4">
        <div>Home</div>
        <div>Services</div>
        <div>Doctors</div>
        <Link href={"/about"}>About Us</Link>
        <div>Contact Us</div>
      </div>
      <div className="">
        <Button className="mx-1 h-[46.04px] w-[158.96px] rounded-3xl bg-primary-blue">
          Sign In
        </Button>
        <Button
          variant="outline"
          className="mx-1 h-[46.04px] w-[158.96px] rounded-3xl"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
