import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="text-[27.8px]">
        <span className="text-primary-blue font-medium">Hospital</span> Logo
      </div>
      <div className="flex flex-row gap-4">
        <div>Home</div>
        <div>Services</div>
        <div>Doctors</div>
        <div>About Us</div>
        <div>Contact Us</div>
      </div>
      <div className="">
        <Button className="bg-primary-blue mx-1 h-[46.04px] w-[158.96px] rounded-3xl">
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
