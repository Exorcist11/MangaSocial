import React from "react";
import CardManga from "./cardManga";
import useFetch from "../hooks/useFetch";

const ComicRecent = () => {
    const comicRecent = useFetch(1);
    const firstFiveItem = comicRecent.slice(0, 6);
    return (
        <div className="grid grid-cols-6 gap-[20px] px-[60px] pb-[60px]">
            {firstFiveItem.map((item, index) => (
                <CardManga
                    key={index}
                    poster={item?.image_poster_link_goc}
                    title={item?.title_manga}
                    rate={item?.rate}
                    update={item.time_release}
                    chapter={item?.chapter_new}
                    path_segment={item?.path_segment_manga}

                />
            ))}
        </div>
    );
};

export default ComicRecent;
