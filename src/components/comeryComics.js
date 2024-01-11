import React from "react";
import CardManga from "./cardManga";
import useFetch from "../hooks/useFetch";

const ComedyComics = () => {
    const comedyComics = useFetch(5);

    const firstFiveItem = comedyComics.slice(0, 5);
    return (
        <div className="grid grid-cols-5 gap-[20px] px-[60px] pb-[60px]">
            {firstFiveItem.map((item, index) => (
                <CardManga
                    key={index}
                    poster={item?.image_poster}
                    title={item?.title_manga}
                    rate={item?.rate}
                    update={item.time_release}
                    path_segment={item?.path_segment_manga}
                    chapterNew={item?.chapter_new}
                />
            ))}
        </div>
    );
};

export default ComedyComics;
