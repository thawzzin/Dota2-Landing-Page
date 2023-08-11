import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import agilityIcon from "../../../assets/hero_agility.png";
import strengthIcon from "../../../assets/hero_strength.png";
import intelligenceIcon from "../../../assets/hero_intelligence.png";
import { data } from "../../../Data";
import "./heroDetail.scss";

const HeroDetail = () => {
  const poster = "https://cdn.cloudflare.steamstatic.com";
  const { hero } = useLocation().state;

  let attributeIcon;
  let attributeName;
  if (hero.primary_attr === "agi") {
    attributeIcon = agilityIcon;
    attributeName = "Agility";
  } else if (hero.primary_attr === "str") {
    attributeIcon = strengthIcon;
    attributeName = "Strength";
  } else if (hero.primary_attr === "int") {
    attributeIcon = intelligenceIcon;
    attributeName = "Intelligence";
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="hero-background hero-detail min-h-screen">
      <div className="flex flex-col justify-center items-center md:p-20 ">
        <div className="image-container w-40 mb-5 rounded-md overflow-hidden mt-20">
          <img className="w-full h-full" src={poster + hero.img} alt="Hero" />
        </div>
        <h1 className="text-2xl font-bold"> {hero.localized_name} </h1>
        <div className="mt-3 flex items-center">
          <img className="w-6" src={attributeIcon} alt="Agility" />
          <span className="text-lg ml-2 tracking-wider">{attributeName} </span>
          <span>&nbsp; ● </span>
          <span className="text-lg ml-2 tracking-wider">{hero.roles[0]}</span>
        </div>
        <div className="mt-3">
          {data.map((d) => (
            <div className="uppercase font-bold tracking-wider">
              {d.name === hero.localized_name && (
                <span
                  className={
                    d.faction === "dire" ? "text-[#ff6046]" : "text-green-400"
                  }
                >
                  {d.faction}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="w-full mt-10">
          <h1 className="text-xl md:text-2xl font-semibold md:font-bold mb-5">
            Stats
          </h1>
          <div className="flex flex-col gap-2 md:flex-row justify-between ">
            <div className="flex gap-2 ">
              <div>
                <p>Attack Type </p>
                <p>Attack Range </p>
                <p>Attack Rate </p>
              </div>
              <div>
                <p>: &nbsp; {hero.attack_type}</p>
                <p>: &nbsp; {hero.attack_range}</p>
                <p>: &nbsp; {hero.attack_rate}</p>
              </div>
            </div>
            <div className="w-[1px] bg-white md:opacity-50"></div>
            <div className="flex flex-col justify-center">
              <div className="flex gap-2">
                <div>
                  <p>Base Hp </p>
                  <p>Base Mana </p>
                </div>
                <div>
                  <p>: &nbsp; {hero.base_health}</p>
                  <p>: &nbsp; {hero.base_mana}</p>
                </div>
              </div>
            </div>
            <div className="w-[1px] bg-white opacity-50"></div>
            <div className="flex flex-col justify-center">
              <div className="flex gap-2">
                <div>
                  <p>Base Armor </p>
                  <p>Base Mr </p>
                </div>
                <div>
                  <p>: &nbsp; {hero.base_armor}</p>
                  <p>: &nbsp; {hero.base_mr}</p>
                </div>
              </div>
            </div>
            <div className="w-[1px] bg-white opacity-50"></div>
            <div className="flex flex-col justify-center">
              <div className="flex gap-2">
                <div>
                  <p>Movement Speed </p>
                  <p>Projectile Speed </p>
                </div>
                <div>
                  <p>: &nbsp; {hero.move_speed}</p>
                  <p>: &nbsp; {hero.projectile_speed}</p>
                </div>
              </div>
            </div>
            <div className="w-[1px] bg-white opacity-50"></div>
            <div className="flex gap-2">
              <div>
                <p>Base Strength </p>
                <p>Base Agility </p>
                <p>Base Intelligence </p>
              </div>
              <div>
                <p>: &nbsp; {hero.base_str}</p>
                <p>: &nbsp; {hero.base_agi}</p>
                <p>: &nbsp; {hero.base_int}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-10">
          <h1 className="text-xl md:text-2xl font-semibold md:font-bold mb-5">
            Lore
          </h1>
          {data.map((d) => (
            <div> {d.name === hero.localized_name && <p>{d.lore}</p>} </div>
          ))}
        </div>
        <div className="w-full mt-10">
          <h1 className="text-xl md:text-2xl font-semibold md:font-bold mb-5">
            Quote
          </h1>
          {data.map((d) => (
            <div> {d.name === hero.localized_name && <p>{d.quote}</p>} </div>
          ))}
        </div>
        <div className="w-full mt-10">
          <h1 className="text-xl md:text-2xl font-semibold md:font-bold mb-5">
            Associated Heroes
          </h1>
          {data.map((d) => (
            <div>
              {" "}
              {d.name === hero.localized_name && (
                <p>
                  {d.associated.length
                    ? d.associated.join(" , ")
                    : "No Associated Hero"}
                </p>
              )}{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroDetail;
