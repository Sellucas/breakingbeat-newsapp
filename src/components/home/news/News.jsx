import React from "react";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import Economy from "../economy/Economy";
import Weather from "../weather/Weather";
import "../../../index.css"

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
    <div className="lg:flex w-fit">
      <div className="flex justify-center flex-wrap max-w-[1000px]">
        {news.map((post) => {
          return (
            <div key={post.publishedAt} className="w-72 h-80 mr-[35px]">
              <img
                className="w-full h-[157px] object-cover rounded-lg"
                src={post.urlToImage}
                alt={post.title}
              />
              <p className="author-news text-red-600 mt-2">{post.author}</p>
              <h1 className="title-news text-base font-bold">{post.title}</h1>
            </div>
          );
        })}
      </div>
      <div className="c-hidden w-parent relative">
        <div className="w-inherit fixed">
          <Weather />
          <Economy />
        </div>
      </div>
    </div>
  );
};

export default News;
