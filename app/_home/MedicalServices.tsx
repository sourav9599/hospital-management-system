import { Card } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import lab from "../../public/landing/medical/lab.svg";
import ambulance from "../../public/landing/medical/ambulance.svg";
import callcenter from "../../public/landing/medical/callcenter.svg";
import onlineAppointment from "../../public/landing/medical/online_appointment.svg";

type serviceType = {
  name: string;
  icon: any;
  bgColorClass: string;
  textColorClass: string;
};

const services: serviceType[] = [
  {
    name: "Well equipped lab",
    icon: lab,
    bgColorClass: "bg-primary-blue",
    textColorClass: "text-[#FFFFFF]",
  },
  {
    name: "Emergency Ambulance",
    icon: ambulance,
    bgColorClass: "",
    textColorClass: "text-primary-grey",
  },
  {
    name: "Online Appointment",
    icon: onlineAppointment,
    bgColorClass: "bg-primary-blue",
    textColorClass: "text-[#FFFFFF]",
  },
  {
    name: "Call Center",
    icon: callcenter,
    bgColorClass: "",
    textColorClass: "text-primary-grey",
  },
];
const MedicalServices = () => {
  return (
    <div className="mt-24 flex flex-col items-center justify-center leading-[50px]">
      <span className="text-4xl font-medium text-primary-grey">
        Our Medical Services
      </span>
      <div className="text-secondary-grey">
        We are dedicated to serve you best medical services
      </div>
      <div className="mt-16 grid grid-cols-4 gap-16">
        {services.map((val) => (
          <Card
            className={cn(
              "flex flex-col items-center justify-center gap-2 rounded-2xl p-8 shadow-2xl",
              val.bgColorClass,
            )}
            key={val.name}
          >
            <Image src={val.icon} alt={val.name} />
            <div className={cn("font-medium", val.textColorClass)}>
              {val.name}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MedicalServices;
