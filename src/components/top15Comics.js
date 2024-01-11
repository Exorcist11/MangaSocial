import React from "react";
import CardManga from "./cardManga";
import useFetch from "../hooks/useFetch";

const Top15Comics = () => {
    const top15Comics = useFetch(0);

    const top15Item = top15Comics.slice(0, 15);
    return (
        <div className="grid grid-cols-5 gap-[20px] px-[60px] pb-[60px]">
            {top15Item.map((item, index) => (
                <CardManga
                    key={index}
                    poster={item?.image_poster_link_goc}
                    title={item?.title_manga}
                    rate={item?.rate}
                    update={item.time_release}
                    path_segment={item?.path_segment_manga}

                />
            ))}
        </div>
    );
};

export default Top15Comics;
