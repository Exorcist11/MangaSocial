import React from "react";

const NewsComicCard = ({ poster, time, title, index }) => {
    return (
        <div className={``}>
            <div>
                <img src={poster} alt="" />
            </div>
            <div>
                <p>News, {time}</p>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default NewsComicCard;
