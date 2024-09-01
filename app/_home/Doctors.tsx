import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type doctorType = {
  name: string;
  designation: string;
  ratings: number;
  ratingsCount: number;
};

const doctorsData: doctorType[] = [
  {
    name: "Dr. Robert Henry",
    designation: "Cardiologist",
    ratings: 4,
    ratingsCount: 102,
  },
  {
    name: "Dr. Robert Henry",
    designation: "Cardiologist",
    ratings: 4,
    ratingsCount: 102,
  },
];

const Doctors = () => {
  return (
    <div className="mt-16">
      <div className="mt-24 flex flex-col items-center justify-center leading-[50px]">
        <h1 className="text-4xl font-medium text-primary-grey">
          Meet our Doctors
        </h1>
        <div className="text-secondary-grey">
          Well qualified doctors are ready to serve you
        </div>
      </div>
      <div className="mt-16 flex justify-center">
        <div className="grid w-1/2 grid-cols-2 items-center justify-center gap-8">
          {doctorsData.map((val) => (
            <Card
              className="flex flex-col items-center justify-center gap-2 py-8 shadow-2xl"
              key={val.name}
            >
              <div className="h-40 w-40 rounded-xl bg-primary-blue"></div>
              <div className="text-[23.28px] font-medium text-primary-grey">
                {val.name}
              </div>
              <div className="text-[17.37px] font-medium text-secondary-grey">
                {val.designation}
              </div>
              <div>({val.ratingsCount})</div>
              <Button
                variant={"outline"}
                className="border-primary-blue text-primary-blue hover:text-primary-blue/70"
              >
                Book an Appointment
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
