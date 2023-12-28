import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import SubMenu from "../components/SubMenu/SubMenu";
export default function Layout({ home }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isServerHovered, setIsServerHovered] = useState(false);

    //handle search
    const [input, setInput] = useState("")

    const fetchData = (value) => {
        fetch('https://hanico.online/')
            .then((response) => response.json())
            .then(res => {
                console.log(res[1].data)
                // const results = data.filter((data) => {
                //     return data && data.title_manga && data.title_manga.toLowerCase().includes(value)
                // })
                // console.log(results)
            })
    }
    const handleChange = (value) => {
        setInput(value)
        fetchData()
    }
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
        return sessionStorage.getItem('user')
    }

    let isLogin = getSessionData();

    return (
        <>
            <div className="header-top">
                <Link to="/">
                    <div className="title">
                        <img
                            className="img-manga"
                            src="/images/Ellipse 1.svg"
                            alt=""
                        ></img>
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

                    <Link to="/genres"><p>Genres</p></Link>

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
                    <Link to="/contact-us"><p className="contact">Contact us</p></Link>
                </div>
                <div className="avatar_search">
                    <img src="/images/search.svg " alt="search"></img>
                    <input type="text" placeholder="Search..." value={input} onChange={(e) => handleChange(e.target.value)}></input>
                    {
                        !isLogin ?
                            (
                                <div className="flex justify-center align-middle items-center ml-4">
                                    <Link to='/login'>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                            Login
                                        </button>
                                    </Link>
                                </div>
                            )
                            :
                            (
                                // <Link to="/user-profile">
                                //     <div className="avatar">
                                //         <img src="/images/usersquare.svg" alt="usersquare"></img>
                                //     </div>
                                // </Link>
                                <SubMenu />
                            )
                    }
                    {/*  */}
                </div>
            </div>
            <Outlet></Outlet>
        </>
    );
}
