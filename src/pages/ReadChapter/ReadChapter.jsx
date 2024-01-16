import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ButtonIcon from "../../components/buttonIcon";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

const ReadChapter = () => {
  const params = useParams();
  const { slug, id } = params;
  const [chapterDetail, setChapterDetail] = useState([]);
  const [listChapter, setListChapter] = useState([]);
  const [chooseChapter, setChooseChapter] = useState("");

  const navigate = useNavigate();

  const fetchChapter = async () => {
    try {
      const response = await axios.get(
        `https://hanico.online/manga/${slug}/${id}`
      );

      setChapterDetail(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchListChapter = async () => {
    try {
      const response = await axios.get(`https://hanico.online/rmanga/${slug}`);
      setListChapter(response.data.chapters);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListChapter();
    // eslint-disable-next-line
  }, [slug]);

  useEffect(() => {
    fetchChapter();
    // eslint-disable-next-line
  }, [slug, id]);

  const handleChangeChapter = async () => {
    const nextChapter = await chooseChapter.replace(
      `http://hanico.online/manga/${slug}/`,
      ""
    );
    navigate(`/chapter/${slug}/${nextChapter}`);
  };

  const currentChapter = listChapter.indexOf(
    `http://hanico.online/manga/${slug}/${id}`
  );

  const prevChapter = () => {
    if (currentChapter < listChapter.length) {
      const prev = listChapter[currentChapter + 1].replace(
        `http://hanico.online/manga/${slug}/`,
        ""
      );
      navigate(`/chapter/${slug}/${prev}`);
    }
  };

  const nextChap = () => {
    if (currentChapter > 0) {
      const next = listChapter[currentChapter - 1].replace(
        `http://hanico.online/manga/${slug}/`,
        ""
      );
      navigate(`/chapter/${slug}/${next}`);
    }
  };

  return (
    <div className="flex flex-col items-center gap-5 mt-5">
      <div className="flex flex-col container gap-5">
        <div className="">
          <h1 className="uppercase font-bold text-3xl">
            {chapterDetail?.title} - {chapterDetail?.chapter_name}
          </h1>
        </div>

        <div className="flex gap-3 text-lg ">
          <Link to={`/`}>Home</Link> /{" "}
          <Link to={`/chapter/${slug}`}>{chapterDetail?.title}</Link> /{" "}
          <label htmlFor="chapter name" className="font-bold">
            {chapterDetail?.chapter_name}
          </label>
        </div>

        <div className="flex justify-between items-center">
          <div className="">
            <select
              name="cars"
              id="cars"
              className="w-[450px] h-[40px] px-3 rounded-lg"
              onChange={(e) => setChooseChapter(e.target.value)}
              value={chooseChapter}
            >
              {listChapter?.map((item, index) => (
                <option key={index} value={item} onClick={handleChangeChapter}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-2">
            <ButtonIcon
              name={"Prev"}
              iconLeft={<GrLinkPrevious />}
              handleClick={prevChapter}
            />
            <ButtonIcon
              name={"Next"}
              iconRight={<GrLinkNext />}
              handleClick={nextChap}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center  ">
        {chapterDetail.image_chapter?.map((item, index) => (
          <div key={index}>
            <img
              src={item}
              alt=""
              className="h-[100%] w-[100%] bg-cover object-cover mt-2 "
            />
            <hr />
          </div>
        ))}
      </div>

      <div className="flex flex-col container gap-5">
        <div className="flex justify-between items-center">
          <div className="">
            <select
              name="cars"
              id="cars"
              className="w-[450px] h-[40px] px-3 rounded-lg"
              onChange={(e) => setChooseChapter(e.target.value)}
              value={chooseChapter}
            >
              {listChapter?.map((item, index) => (
                <option key={index} value={item} onClick={handleChangeChapter}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-2">
            <ButtonIcon
              name={"Prev"}
              iconLeft={<GrLinkPrevious />}
              handleClick={prevChapter}
            />
            <ButtonIcon
              name={"Next"}
              iconRight={<GrLinkNext />}
              handleClick={nextChap}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadChapter;
