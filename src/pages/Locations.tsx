import TopNavbar from "../components/TopNavbar";
import AnimatedPage from "../components/ui/animations/AnimatedPage";
import locations from "../assets/locations.png";
import Carousel from "../components/ui/Carousel";

const Locations = () => {
  return (
    <AnimatedPage>
      <TopNavbar />
      <div className=" flex justify-center pt-4">
        <div className=" flex justify-center">
          <Carousel />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Locations;
