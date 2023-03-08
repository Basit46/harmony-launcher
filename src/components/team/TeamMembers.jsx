import React from "react";
import img1 from "../../assets/member1.svg";
import img2 from "../../assets/member2.png";
import img3 from "../../assets/member3.png";

const TeamMembers = () => {
  return (
    <div>
      <h1 className="text-[64px] leading-[77px] text-white font-Russo mb-[48px]">
        Our Advisors
      </h1>
      <div className="flex flex-wrap gap-x-[30px] gap-y-[60px]">
        <div className="offerBox relative w-[262px] h-[228px] backdrop-blur-[15px] rounded-[20px] flex flex-col justify-center items-center">
          <img
            className="absolute w-[141px] h-[141px] top-[-50%] translate-y-[50%] left-[50%] translate-x-[-50%]"
            src={img1}
            alt="advisor"
          />
          <p className="absolute top-[10px] right-[10px] text-[blue]">In</p>

          <h1 className="font-semibold text-[25px] leading-[31px] text-center text-[#00FFB2] mt-[80px]">
            Harshad
          </h1>
          <p className="font-medium text-base leading-[19px] text-center text-white mt-[43.33px]">
            CEO
          </p>
        </div>

        <div className="offerBox relative w-[262px] h-[228px] backdrop-blur-[15px] rounded-[20px] flex flex-col justify-center items-center">
          <img
            className="absolute w-[141px] h-[141px] top-[-50%] translate-y-[50%] left-[50%] translate-x-[-50%]"
            src={img2}
            alt="advisor"
          />
          <p className="absolute top-[10px] right-[10px] text-[blue]">In</p>

          <h1 className="font-semibold text-[25px] leading-[31px] text-center text-[#00FFB2] mt-[80px]">
            Ankit
          </h1>
          <p className="font-medium text-base leading-[19px] text-center text-white mt-[43.33px]">
            Co-Founder
          </p>
        </div>

        <div className="offerBox relative w-[262px] h-[228px] backdrop-blur-[15px] rounded-[20px] flex flex-col justify-center items-center">
          <img
            className="absolute w-[141px] h-[141px] top-[-50%] translate-y-[50%] left-[50%] translate-x-[-50%]"
            src={img3}
            alt="advisor"
          />
          <p className="absolute top-[10px] right-[10px] text-[blue]">In</p>

          <h1 className="font-semibold text-[25px] leading-[31px] text-center text-[#00FFB2] mt-[80px]">
            Prashant
          </h1>
          <p className="font-medium text-base leading-[19px] text-center text-white mt-[43.33px]">
            CMO
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
