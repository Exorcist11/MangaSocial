import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadChapter = () => {
  const [imageChapters, setImageChapters] = useState([]);

  const params = useParams();

  const { slug, id } = params;

  const fetchChapter = async () => {
    try {
      const response = await axios.get(
        `https://hanico.online/manga/${slug}/${id}`
      );
      console.log("response", response);
      setImageChapters(response.data.ImageChapter);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchChapter();
  }, [slug, id]);

  return (
    <div className="flex flex-col items-center justify-center  ">
      {imageChapters?.map((imageChapter, index) => (
        <div key={index}>
          <img
            src={imageChapter}
            alt=""
            className="h-[100%] w-[100%] bg-cover object-cover mt-2 "
          />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ReadChapter;
