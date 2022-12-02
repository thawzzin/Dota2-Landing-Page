import Aos from "aos";
import React, { useEffect } from "react";
import vd from "../../assets/Dota2.mp4";
import "./home.scss";
import "aos/dist/aos.css";

const Home = ({ setActive }) => {
  useEffect(() => {
    setActive(false);
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="w-full h-full absolute left-0 top-0 ">
      <video
        autoPlay
        loop
        muted
        className="absolute left-0 top-0 w-full h-full object-cover"
        src={vd}
      />
      <div className="relative w-full h-full  bg-black/50">
        <div
          className="home-container absolute w-2/3  left-20 bottom-20"
          data-aos="fade-right"
        >
          <h1 className="title text-7xl">Let's Play Some Dota</h1>
          <p className="text-xl my-5">
            Every day, millions of players worldwide enter the battle as one of
            over a hundred Dota Heroes in a 5v5 team clash. Dota is the deepest
            multi-player action RTS game ever made and there's always a new
            strategy or tactic to discover. It's completely free to play and
            always will be - start defending your ancient now.
          </p>
          <a
            className="flex items-center justify-center text-center uppercase w-60 h-14 border-2 border-white hover:border-[#ff6046] hover:-translate-y-0.5 transition-all duration-200 rounded-md"
            href="https://store.steampowered.com/app/570/Dota_2/"
          >
            <div className="steamLogo" />
            <div className="select-none">Free To Play</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
