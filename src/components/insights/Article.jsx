import React from "react";
import { useNavigate } from "react-router-dom";

const Article = ({ article }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/insights/${article.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="w-[356px] h-[459px] backdrop-blur-[5px] rounded-[20px] bg-[#111E37] p-[20px] cursor-pointer "
    >
      <img className="w-full" src={article.img} alt="article" />
      <p className="mt-[13px] mb-[14px]">{article.date}</p>
      <h1 className="font-bold text-xl leading-[25px] text-white mt-[14px] mb-[12px]">
        {article.title}
      </h1>
      <p className="font-medium text-[17px] leading-[126.7%] text-[rgba(255,255,255,0.4)]">
        {article.body.slice(0, 151)}
      </p>
    </div>
  );
};

export default Article;
