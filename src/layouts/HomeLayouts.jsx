import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useLocation, useNavigate } from "react-router";
import MyContainer from "../components/container/MyContainer";
import HeroSlider from "../pages/HeroSlider";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "../pages/Loading";
import ScrollTop from "../components/scrollToTopButton/ScrollTop";

const HomeLayouts = () => {
  const location = useLocation();
  const showHeroSlider = location.pathname === "/";

  const { state } = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 2000, 
      easing: "ease-in-out", 
      once: false, 
      mirror: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location]);

  return (
    <div className="bg-[#ecf2ff]">
      <header>
        <Navbar></Navbar>
      </header>
      {showHeroSlider && (
        <section>
          <HeroSlider />
        </section>
      )}
      <main>
        {state == "loading" ? <Loading /> : <Outlet></Outlet>}

        {/* Scroll to Top Button */}
        <ScrollTop />
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayouts;
