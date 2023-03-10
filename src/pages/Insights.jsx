import React from "react";
import { articleItems } from "../assets/sources/articleItems";
import Article from "../components/insights/Article";

const Insights = () => {
  return (
    <div className="min-h-[82vh]">
      <div className="flex flex-wrap gap-[10px] pb-[20px]">
        {articleItems.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Insights;
