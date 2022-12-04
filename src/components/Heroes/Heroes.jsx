import React, { useEffect, useState } from "react";
import { Api } from "../../Api";
import "./heroes.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const Heroes = ({ setActive }) => {
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const poster = "https://cdn.cloudflare.steamstatic.com";
  const api = () => {
    Api.get("/heroStats")
      .then((res) => setHeroes(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setActive(false);
    api();
    Aos.init({ duration: 1000 });
    setTimeout(() => {
      Aos.refresh();
    }, 2000);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <div className="hero-background flex flex-col justify-center items-center min-h-screen p-20 ">
        <div className="hero-title">
          <h1 className="text-center text-4xl font-bold uppercase">
            Choose your hero
          </h1>
          <p className="text-center">
            From magical tacticians to fierce brutes and cunning rogues, Dota
            2's hero pool is massive and limitlessly diverse. Unleash incredible
            abilities and devastating ultimates on your way to victory.
          </p>
        </div>

        <div className="strength select-none" data-aos="fade-up">
          <h1 className="text-3xl text-center font-bold my-10">Strength</h1>
          <div className="hero-container flex flex-wrap justify-between">
            {isLoading ? (
              <ClipLoader className="mx-auto" color="#ccc" />
            ) : (
              heroes
                ?.filter((hero) => hero.primary_attr === "str")
                .map((hero) => (
                  <div
                    key={hero.id}
                    onClick={() => {
                      navigate("herodetail", {
                        state: { hero: hero },
                      });
                    }}
                    className="image-container w-40 mb-5 rounded-md overflow-hidden cursor-pointer hover:scale-150 transition-all duration-200"
                  >
                    <img
                      className="w-full rounded-md"
                      src={poster + hero?.img}
                      alt="Hero Poster"
                    />
                    
                  </div>
                ))
            )}
          </div>
        </div>
        <div className="agility select-none" data-aos="fade-up">
          <h1 className="text-3xl text-center font-bold my-10">Agility</h1>
          <div className="hero-container flex flex-wrap justify-between">
            {isLoading ? (
              <ClipLoader className="mx-auto" color="#ccc" />
            ) : (
              heroes
                ?.filter((hero) => hero.primary_attr === "agi")
                .map((hero) => (
                  <div
                    key={hero.id}
                    onClick={() => {
                      navigate("herodetail", {
                        state: { hero: hero },
                      });
                    }}
                    className="image-container w-40 mb-5 rounded-md overflow-hidden cursor-pointer hover:scale-150 transition-all duration-200"
                  >
                    {" "}
                    <img
                      className="w-full h-full"
                      src={poster + hero?.img}
                      alt="Hero Poster"
                    />{" "}
                  </div>
                ))
            )}
          </div>
        </div>
        <div className="intelligence select-none" data-aos="fade-up">
          <h1 className="text-3xl text-center font-bold my-10">Intelligence</h1>
          <div className="hero-container flex flex-wrap justify-between">
            {isLoading ? (
              <ClipLoader className="mx-auto" color="#ccc" />
            ) : (
              heroes
                ?.filter((hero) => hero.primary_attr === "int")
                .map((hero) => (
                  <div
                    key={hero.id}
                    onClick={() => {
                      navigate("herodetail", {
                        state: { hero: hero },
                      });
                    }}
                    className="image-container w-40 mb-5 rounded-md overflow-hidden cursor-pointer hover:scale-150 transition-all duration-200"
                  >
                    {" "}
                    <img
                      className="w-full h-full"
                      src={poster + hero?.img}
                      alt="Hero Poster"
                    />{" "}
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroes;
