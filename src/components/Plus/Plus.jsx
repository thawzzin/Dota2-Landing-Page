import Aos from "aos";
import React, { useEffect } from "react";
import "./plus.scss";
import PlusBtn from "./PlusBtn";

const Plus = ({ setActive }) => {
  useEffect(() => {
    setActive(false);
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="plus-background min-h-screen">
      <div className="plus-overlay bg-black/50 min-h-screen p-20">
        <div
          data-aos="fade-up"
          className="flex flex-col justify-center items-center "
        >
          <div className="plus-title">
            <h1 className="text-center text-4xl font-bold uppercase">
              dota plus
            </h1>
            <p className="text-center opacity-80">
              Enhance your daily Dota experience with Dota Plus, a new monthly
              subscription service designed to help you get the most out of
              every match you play.
            </p>
          </div>

          <p className="plus-features text-2xl tracking-[4px] mt-5 uppercase text-[#f0cf95]">
            <p className="inline">Hero Progression</p>
            <span> ● </span>
            <p className="inline">Plus Assistant</p>
            <span> ● </span>
            <p className="inline">Free Weekly Battle Cup</p>
          </p>

          <div className="subscription-container flex justify-between gap-5 mt-14">
            <div data-aos="fade-right" data-aos-delay="500">
              <PlusBtn title="monthly subscription" price="$3.99" discount="" />
            </div>
            <PlusBtn
              title="6 month subscription"
              price="$22.49"
              discount="6% Discount"
            />
            <div data-aos="fade-left" data-aos-delay="500">
              <PlusBtn
                title="annual subscription"
                price="$41.99"
                discount="12% Discount"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plus;
