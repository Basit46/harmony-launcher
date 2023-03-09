import React from "react";
import polygon from "../../assets/polygon.png";

const Project = () => {
  return (
    <tr>
      <td className="">
        <div className="flex w-fit ml-[10px]">
          <div className="w-[35px] h-[35px] left-[382px] top-[450px] rounded-full bg-[#D9D9D9] mr-[16px]"></div>
          <div className="mr-0">
            <p className="mr-0">$ZODI</p>
            <p className="mr-0">Zodium</p>
          </div>
        </div>
      </td>

      <td className="">
        <p className="token-sec w-fit h-fit text-right font-semibold text-sm leading-[17px] text-[#6E56FC]  rounded-[10px]">
          TOKEN SALE
        </p>
      </td>

      <td>
        <p className="font-medium text-base leading-[19px] text-white">B12</p>
      </td>

      <td>
        <p className="font-medium text-base leading-[19px] text-white">
          $200,000
        </p>
      </td>

      <td>
        <p className="font-medium text-base leading-[19px] text-white">
          $0.005
        </p>
      </td>

      <td>
        <p className="font-bold text-base leading-5 text-[#00FFB2]">+24%</p>
      </td>

      <td>
        <p className="font-medium text-base leading-[19px] text-white">
          August 15th 2022
        </p>
        <p className="font-medium text-sm leading-[17px] text-right text-[rgba(255,255,255,0.54)] mt-[7px]">
          11:18 AM - UTC
        </p>
      </td>

      <td>
        <img src={polygon} alt="polygon" />
      </td>
    </tr>
  );
};

export default Project;
