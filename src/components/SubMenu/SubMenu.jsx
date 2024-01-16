import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { GoPerson } from "react-icons/go";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const SubMenu = () => {
  const navigate = useNavigate();
  // Set value hidden
  const [onHidden, setHidden] = useState(false);

  const submenuRef = useRef(null);

  const handleButtonClick = () => {
    setHidden(!onHidden);
  };

  const handleClickOutside = (event) => {
    if (submenuRef.current && !submenuRef.current.contains(event.target)) {
      setHidden(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handelAccount = () => {
    navigate("/user-profile");
    setHidden(false);
  };

  const handelLogout = async () => {
    try {
      await axios.get("https://hanico.online/logout");
      sessionStorage.clear();
      navigate("/");
      console.log(sessionStorage.getItem("user"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative inline-block overflow-x-hidden overflow-y-auto" ref={submenuRef}>
      <button
        className="relative w-12 h-12 rounded-full inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-red-500 border border-gray-300 shadow-sm  hover:opacity-90"
        onClick={handleButtonClick}
      >
        D
      </button>

      <div
        className={`${
          onHidden
            ? "block origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white divide-y-2"
            : "hidden"
        }`}
      >
        <div
          className="w-full flex gap-3 items-center h-11 px-5 cursor-pointer hover:opacity-80 text-xl"
          onClick={handelAccount}
        >
          <GoPerson />
          Account
        </div>

        <div
          className="w-full flex gap-3 items-center h-11 px-5 cursor-pointer hover:opacity-80 text-xl"
          onClick={handelLogout}
        >
          <RiLogoutBoxRLine />
          Logout
        </div>
      </div>
    </div>
  );
};

export default SubMenu;
