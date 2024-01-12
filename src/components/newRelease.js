import React from "react";
import CardManga from "./cardManga";
import useFetch from "../hooks/useFetch";

const NewRelease = () => {
    const newRelease = useFetch(0);
    const firstFiveItem = newRelease.slice(0, 6);

    return (
        <div className="grid grid-cols-6  px-[60px] pb-[60px]">
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

export default NewRelease;
