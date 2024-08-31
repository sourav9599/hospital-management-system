import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import EllipseBlue from "../../public/landing/hero/Ellipse-blue.svg";
import EllipseGrey from "../../public/landing/hero/Ellipse-grey.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-row gap-3 pt-28">
      <div className="flex w-1/2 flex-col gap-4">
        <h1 className="text-[48.45px] font-semibold leading-[50px]">
          <span className="text-primary-blue">We care </span> <br />
          <span className="text-primary-grey">about your health</span>
        </h1>
        <div className="text-secondary-grey">
          Good health is the state of mental, physical and social well being and
          it does not just mean absence of diseases.
        </div>
        <Button className="bg-primary-blue mx-1 mt-16 self-start rounded-2xl p-8 text-[18px]">
          Book an appointment <MoveRight className="ml-4" />
        </Button>
      </div>

      <div className="relative flex w-1/2 items-center justify-center">
        <Image
          className="absolute p-4"
          src={EllipseBlue}
          alt=""
          layout="fill"
        />
        <Image
          className="absolute p-4"
          src={EllipseGrey}
          alt=""
          layout="fill"
        />
      </div>
    </div>
  );
};

export default Hero;
