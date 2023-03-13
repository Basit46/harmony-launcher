import React from "react";

const Section = ({ item }) => {
  return (
    <div className="mt-[40px]">
      <h1 className="text-[35px] leading-[159.69%] font-Russo">
        {item?.title}
      </h1>
      <p className="font-medium text-[19px] leading-[159.69%] mt-[28px]">
        {item?.body1}
      </p>
      <p className="mt-[20px] font-medium text-[19px] leading-[159.69%]">
        {item?.body2}
      </p>
      <p className="mt-[20px] font-medium text-[19px] leading-[159.69%]">
        {item?.body3}
      </p>
    </div>
  );
};

export default Section;
