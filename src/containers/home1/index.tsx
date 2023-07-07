import { FC } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slider from "./components/Slider";
import MainServices from "./components/MainServices";
import AboutUs from "./components/AboutUs";
import ProfessionalTeams from "./components/ProfessionalTeams";
import ContactUs from "./components/ContactUs";
import "./style.scss";

const Home1: FC = () => {
  return (
    <div className="home-1">
      <Header />

      <div className="bg-section-1">
        <div className="container">
          <Slider />
        </div>
      </div>

      <div className="bg-section-2">
        <div className="container">
          <MainServices />
          <AboutUs />
        </div>
      </div>

      <div className="bg-section-3">
        <div className="container">
          <ProfessionalTeams />
          <ContactUs />
        </div>
      </div>

      <div className="bg-section-4">
        <Footer />
      </div>
    </div>
  );
};

export default Home1;
