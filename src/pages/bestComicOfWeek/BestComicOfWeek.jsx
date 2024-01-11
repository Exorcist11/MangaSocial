import React from 'react'
import CardManga from "../../components/cardManga";
import useFetch from "../../hooks/useFetch";

export default function BestComicOfWeek() {
    const comedy = useFetch(4);
    return (
        <div className="bg-black px-[60px] pb-[60px]">
            <div className="grid grid-cols-6 gap-[20px]">
                {comedy.slice(0, 6).map((item, index) => (
                    <CardManga
                        key={index}
                        poster={item?.poster}
                        title={item?.title}
                        rate={item?.rate}
                        update={item.time_release}
                        path_segment={item?.path_segment_manga}
                    />
                ))}
            </div>
        </div>
    );
}
