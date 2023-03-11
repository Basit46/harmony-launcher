import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { articleItems } from "../../assets/sources/articleItems";

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

      <div className="mt-[50px] h-[500px] w-[400px] bg-[red]"></div>
    </div>
  );
};

export default ArticleDetails;
