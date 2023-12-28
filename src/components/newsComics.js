import React from "react";
import useFetch from "../hooks/useFetch";
import NewsComicCard from "./newsComicCard";

const NewsComics = () => {
    const newsComicsData = useFetch(6);
    const dataSlice = newsComicsData.slice(0, 7);
    return (
        <div>
            {dataSlice.map((item, index) => (
                <NewsComicCard
                    key={index}
                    index={index}
                    poster={item.images_poster}
                    time={item.time_news}
                    title={item.title_news}
                />
            ))}
        </div>
    );
};

export default NewsComics;
