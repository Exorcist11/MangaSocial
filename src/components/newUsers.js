import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import prodApis from "../api/home";
const NewUsers = () => {
    const [newUser, setNewUser] = useState([]);
    useEffect(() => {
        getNewUser();
    }, []);
    const getNewUser = async () => {
        // (async () => {
        //     const newsResponse = await prodApis.index();

        //     setNewUser(newsResponse.data.User_New_Register);
        // })();
        const newsResponse = await prodApis.index();
        setNewUser(newsResponse.data[12].data);
    };

    return (
        <>
            <div>
                <div className="news-right">
                    <div className="wrap-right-note">
                        <div className="lab">
                            <label>NEW USER</label>{" "}
                        </div>
                        {newUser &&
                            newUser.map((newUser, index) => {
                                return (
                                    <>
                                        {" "}
                                        <div className="username" key={index}>
                                            <img
                                                className="avatar"
                                                src="/images/usersquare.svg"
                                                alt="avatar"
                                            />
                                            <span className="text-avatar">
                                                {newUser.name_user}
                                            </span>
                                            <span className="date-text">
                                                {newUser.participation_time}
                                            </span>
                                        </div>
                                    </>
                                );
                            })}

                        <p className="seemore">See more</p>
                    </div>
                </div>
                <div className="news-right">
                    <div className="wrap-right-note">
                        <div className="username">
                            <img
                                className="avatar"
                                src="/images/usersquare.svg"
                                alt="avatar"
                            />
                            <span className="text-avatar">User Name</span>
                            <span className="date-text">Has read</span>
                            <Link>
                                <span
                                    style={{
                                        fontSize: "22px",
                                        color: "rgba(79, 64, 248, 1)",
                                        marginLeft: "9px",
                                        fontWeight: "600",
                                        textDecoration: "underline",
                                    }}
                                >
                                    Death Note
                                </span>{" "}
                            </Link>
                            <span
                                style={{
                                    color: "rgba(73, 110, 241, 1)",
                                    fontSize: "22px",
                                    fontWeight: "600",
                                    marginLeft: "12px",
                                }}
                            >
                                4 min
                            </span>
                        </div>

                        <div className="username">
                            <img
                                className="avatar"
                                src="/images/usersquare.svg"
                                alt="avatar"
                            />
                            <span className="text-avatar">User Name</span>
                            <span className="date-text">Has read</span>
                            <Link>
                                <span
                                    style={{
                                        fontSize: "22px",
                                        color: "rgba(79, 64, 248, 1)",
                                        marginLeft: "9px",
                                        fontWeight: "600",
                                        textDecoration: "underline",
                                    }}
                                >
                                    Death Note
                                </span>{" "}
                            </Link>
                            <span
                                style={{
                                    color: "rgba(73, 110, 241, 1)",
                                    fontSize: "22px",
                                    fontWeight: "600",
                                    marginLeft: "12px",
                                }}
                            >
                                4 min
                            </span>
                        </div>

                        <div className="username">
                            <img
                                className="avatar"
                                src="/images/usersquare.svg"
                                alt="avatar"
                            />
                            <span className="text-avatar">User Name</span>
                            <span className="date-text">Has read</span>
                            <Link>
                                <span
                                    style={{
                                        fontSize: "22px",
                                        color: "rgba(79, 64, 248, 1)",
                                        marginLeft: "9px",
                                        fontWeight: "600",
                                        textDecoration: "underline",
                                    }}
                                >
                                    Death Note
                                </span>{" "}
                            </Link>
                            <span
                                style={{
                                    color: "rgba(73, 110, 241, 1)",
                                    fontSize: "22px",
                                    fontWeight: "600",
                                    marginLeft: "12px",
                                }}
                            >
                                4 min
                            </span>
                        </div>

                        <p className="seemore">See more</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewUsers;
