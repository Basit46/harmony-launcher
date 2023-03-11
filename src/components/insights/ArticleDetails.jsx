import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { articleItems } from "../../assets/sources/articleItems";
import { FaSearch } from "react-icons/fa";
import img from "../../assets/Rectangle 110.svg";

const ArticleDetails = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState();

  useEffect(() => {
    setArticle(
      articleItems.find((article) => article.id.toString() === articleId)
    );
  }, [articleId]);

  return (
    <div className="min-h-[82vh] h-fit">
      <div className="bg-[#111E37] w-[1021px] h-fit backdrop-blur-[5px] rounded-[10px]">
        <div className="w-full h-[414px] rounded-[10px]">
          <img
            className="w-full h-full object-cover rounded-[10px]"
            src={article?.img}
            alt="article"
          />
        </div>

        <div className="p-[30px]">
          <p className="mt-[28px] mb-[17px]">{article?.date}</p>
          <h1 className="font-bold text-[27px] leading-[33px]">
            {article?.title}
          </h1>
          <p className="mt-[28px] font-medium text-[17px] leading-[127.2%] text-white opacity-50">
            {article?.body}
          </p>
          <p className="mt-[32px] font-medium text-[17px] leading-[127.2%] text-white opacity-50">
            {article?.body}
          </p>
        </div>
      </div>

      <div className="mt-[50px] h-fit w-[400px]">
        <div className="flex items-center w-full h-[56px] rounded-[10px] p-[10px] backdrop-blur-[10px] bg-[#00000033]">
          <input
            className="bg-transparent p-[4px] w-full placeholder:text-[#868C98]"
            type="text"
            placeholder="Search"
          />
          <FaSearch className="text-[#868C98]" />
        </div>
        <div className="p-[10px]">
          <h1 className="mt-[25px] mb-[28px] font-Russo text-[20px] leading-[24px] ">
            Recent Posts
          </h1>
          <div className="w-full flex items-center mb-[36px]">
            <img className="mr-[16px]" src={img} alt="featured" />
            <p className="font-medium text-[20px] leading-[24px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="w-full flex items-center mb-[36px]">
            <img className="mr-[16px]" src={img} alt="featured" />
            <p className="font-medium text-[20px] leading-[24px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="w-full flex items-center mb-[36px]">
            <img className="mr-[16px]" src={img} alt="featured" />
            <p className="font-medium text-[20px] leading-[24px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
