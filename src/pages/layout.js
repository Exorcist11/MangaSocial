import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import SubMenu from "../components/SubMenu/SubMenu";
import platform from "platform";
import ios from "../pages/img/ios.png";
import adroi from "../pages/img/adroi.png";
import { CiSearch } from "react-icons/ci";
import { useEffect } from "react";
import axios from "axios";
export default function Layout({ home }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isServerHovered, setIsServerHovered] = useState(false);
  const [link, setLink] = useState("");

  //handle search
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInput((preState) => ({
      ...preState,
      [name]: value,
    }));
  };
  console.log(input);
  const fetchData = (value) => {
    fetch("https://hanico.online/")
      .then((response) => response.json())
      .then((res) => {
        console.log(res[1].data);
        // const results = data.filter((data) => {
        //     return data && data.title_manga && data.title_manga.toLowerCase().includes(value)
        // })
        // console.log(results)
      });
  };

  const handleSearch = async () => {
    try {
      const response = await axios.post(
        "https://hanico.online/search-manga",
        input
      );
      console.log("Response: ", response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleServerMouseEnter = () => {
    setIsServerHovered(true);
  };

  const handleServerMouseLeave = () => {
    setIsServerHovered(false);
  };

  let getSessionData = () => {
    return sessionStorage.getItem("user");
  };

  let isLogin = getSessionData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  useEffect(() => {
    const os = platform.os.family;

    if (os === "iOS") {
      setModalContent(ios);
      setIsModalOpen(true);
      setLink(
        "https://apps.apple.com/us/app/manga-reader-mangakomi-online/id6446646720"
      );
    } else if (os === "Android") {
      console.log("androi");
      setModalContent(adroi);
      setIsModalOpen(true);
      setLink(
        "https://play.google.com/store/apps/details?id=com.thinkdiffai.futurelove"
      );
    } else {
      console.log("Đây là laptop");
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="header-top overflow-y-auto overflow-x-hidden">
        <Link to="/">
          <div className="title">
            <img className="img-manga" src="/images/Ellipse 1.svg" alt=""></img>
            <h3>MangaSocial</h3>
          </div>
        </Link>
        <div className="menu-header">
          <Link to="/">
            <div
              className="comic"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p>Comic</p>
              <img
                className="arrow-img"
                src={
                  isHovered
                    ? "/images/Polygon cam.svg"
                    : "/images/Polygon 1.svg"
                }
                alt="Arrow"
              />
            </div>
          </Link>

          <Link to="/genres">
            <p>Genres</p>
          </Link>

          <p>Popular</p>

          <div
            className="server"
            onMouseEnter={handleServerMouseEnter}
            onMouseLeave={handleServerMouseLeave}
          >
            <p>Server</p>
            <img
              className="arrow-img"
              src={
                isServerHovered
                  ? "/images/Polygon cam.svg"
                  : "/images/Polygon 1.svg"
              }
              alt="Arrow"
            />
          </div>
          <Link to="/contact-us">
            <p className="contact">Contact us</p>
          </Link>
          <Link to="/policy">
            <p className="policy">Policy</p>
          </Link>
          <Link
            to={`https://apps.apple.com/us/app/manga-reader-mangakomi-online/id6446646720`}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
              alt=""
              className="w-5 h-5 lg:w-12 lg:h-12 hover:scale-105 transition-all cursor-pointer"
            />
          </Link>
        </div>
        <div className="avatar_search">
          <CiSearch
            color="red"
            size={32}
            onClick={handleSearch}
            className="mr-2"
          />
          <input
            className="w-full border-none outline-none bg-transparent opacity-100"
            placeholder="Enter your email"
            name="content"
            onChange={handleOnChange}
          />
          {!isLogin ? (
            <div className="flex justify-center align-middle items-center ml-4">
              <Link to="/login">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Login
                </button>
              </Link>
            </div>
          ) : (
            // <Link to="/user-profile">
            //     <div className="avatar">
            //         <img src="/images/usersquare.svg" alt="usersquare"></img>
            //     </div>
            // </Link>
            <SubMenu />
          )}
          {/*  */}
        </div>
      </div>
      <Outlet></Outlet>

      {isModalOpen && (
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="z-10 p-8 text-center bg-white rounded-md">
            <h2 className="mb-4 text-2xl font-bold">Dowload App</h2>
            <Link to={link}>
              <img src={modalContent} alt="ios" style={{ width: "200px" }} />
            </Link>
            <button
              onClick={closeModal}
              className="px-4 py-2 mt-4 text-white bg-red-500 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
