import React, { useState, useEffect } from "react";
import prodApis from "../api/home";
import RankItem from "./rankItem";

const Rank = () => {
    const [rankComics, setRankComics] = useState([]);
    useEffect(() => {
        getRankComics(9);
    }, []);

    const getRankComics = async (index) => {
        const rankComicsResponse = await prodApis.index();
        setRankComics(rankComicsResponse.data[index].data);
    };

    return (
        <div className="px-[65px] pb-[60px]">
            <div className="text-white flex items-center text-[30px] font-semibold gap-[30px] pb-[30px]">
                <span className=" cursor-pointer hover:underline">Weak</span>
                <span className=" cursor-pointer hover:underline">Month</span>
                <span className=" cursor-pointer hover:underline">Year</span>
            </div>
            <div className="grid grid-rows-5 grid-flow-col gap-4">
                {rankComics.map((item, index) => (
                    <RankItem
                        key={index}
                        rank={index + 1}
                        categories={item?.categories}
                        title={item?.title_manga}
                        poster={item?.image_poster_link_goc}
                    />
                ))}
            </div>
        </div>
    );
};

export default Rank;
