import Counter from "../components/Counter/Counter";
import Enquiry from "../components/Enquiry/Enquiry";
import Gallery from "../components/Gallery/Gallery";
import Hero from "../components/Hero/Hero";
import Service from "../components/Services/Service";
import Testimonial from "../components/Testimonial/Testimonial";


const MainPage = () => {
  return (
    <>
      <Hero />
      <Counter />
      <Gallery />
      <Testimonial />
      <Service />
      <Enquiry title="Make An Enquiry" />
    </>
  );
};

export default MainPage;
