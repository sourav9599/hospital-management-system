import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="text-[27.8px]">
        <span className="text-primary-blue font-medium">Hospital</span> Logo
      </div>
      <div className="flex flex-row gap-4 text-[18.47px]">
        <div>Home</div>
        <div>Services</div>
        <div>Doctors</div>
        <div>About Us</div>
        <div>Contact Us</div>
      </div>
      <div className="">
        <Button className="bg-primary-blue mx-1">Sign In</Button>
        <Button variant="outline" className="mx-1">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
