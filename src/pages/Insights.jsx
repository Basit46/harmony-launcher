import React from "react";
import { articleItems } from "../assets/sources/articleItems";
import Article from "../components/insights/Article";
import { motion } from "framer-motion";

const Insights = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        y: "0",
        opacity: 1,
        transition: { duration: 0.5, delay: 0.4 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className="min-h-[82vh]"
    >
      <div className="flex flex-wrap justify-center 2xl:justify-start gap-[10px] pb-[20px]">
        {articleItems.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </motion.div>
  );
};

export default Insights;
