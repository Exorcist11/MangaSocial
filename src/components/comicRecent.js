import React from "react";
import CardManga from "./cardManga";
import useFetch from "../hooks/useFetch";

const ComicRecent = () => {
    const comicRecent = useFetch(4);
    const firstFiveItem = comicRecent.slice(0, 5);
    return (
        <div className="grid grid-cols-5 gap-[20px] px-[60px] pb-[60px]">
            {firstFiveItem.map((item, index) => (
                <CardManga
                    key={index}
                    poster={item?.image_poster_link_goc}
                    title={item?.title_manga}
                    rate={item?.rate}
                    update={item.time_release}
                />
            ))}
        </div>
    );
};

export default ComicRecent;
