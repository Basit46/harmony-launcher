import React from "react";
import { offerItems } from "../assets/sources/OfferItems";
import OfferBox from "../components/usecases/OfferBox";

const UseCases = () => {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <h1 className="font-Russo text-[64px] leading-[77px] text-white">
        Harmony Launcher's Aim
      </h1>
      <p className="font-normal text-[32px] leading-[38px] text-[#00FFB2] uppercase mt-[10px] mb-[32px] ">
        WHAT WE OFFER?
      </p>

      <div
        style={{ gridGap: "20px" }}
        className="flex justify-center flex-wrap "
      >
        {offerItems.map((item, index) => (
          <OfferBox key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default UseCases;
