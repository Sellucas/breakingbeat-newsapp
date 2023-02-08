import React from "react";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import Economy from "../economy/Economy";

// URL api'top-headlines?country=pt&apiKey=b50bea4d22e043f7a84c7c1b0af10408'

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await api.get("/top-headlines?country=pt", {
        params: {
          apiKey: "b50bea4d22e043f7a84c7c1b0af10408",
        },
      });

      // console.log(response.data.articles.slice(0, 20));
      setNews(response.data.articles.slice(0, 20));
    }

    loadNews();
  }, []);

  return (
    <div className="flex">
      <div className="flex justify-start flex-wrap w-4/5 bg-blue-500">
        {news.map((post) => {
          return (
            <div
              key={post.publishedAt}
              className="w-72 h-80 mr-[35px]"
            >
              <img
                className="w-full h-[157px] object-cover"
                src={post.urlToImage}
                alt={post.title}
              />
              <strong>{post.author}</strong>
              <h1>{post.title}</h1>
            </div>
          );
        })}
      </div>
      <div className="bg-purple-600 flex justify-start w-1/5">
        <Economy />
      </div>
    </div>
  );
};

export default News;
