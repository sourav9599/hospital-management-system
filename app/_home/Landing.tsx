import Hero from "./Hero";
import MedicalServices from "./MedicalServices";
import Navbar from "./Navbar";

const Landing = () => {
  return (
    <div className="h-full w-full px-16 py-8">
      <Navbar />
      <Hero />
      <MedicalServices />
    </div>
  );
};

export default Landing;
