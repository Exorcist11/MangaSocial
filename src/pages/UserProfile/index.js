import { Link } from "react-router-dom";
import ComicRecent from "../../components/comicRecent";

function UserProfile() {
    return (
        <div className="bg-[#000000] h-full">
            <div className="mx-5">
                <div className="flex flex-col items-center text-[#fff] relative">
                    <img src="images\UserProfile\Rectangle 457.png" alt="" className="w-full h-[500px] bg-[#ffff] bg-cover rounded-b-[150px]" />
                    <div className="h-60 w-full relative">
                        <div className="flex absolute bottom-0">
                            <img src="images\Genres\img1.png" alt="" className="w-[312px] h-[312px]
                            rounded-full object-cover border-solid border-8" />
                            <div className="flex flex-col font-normal text-[28px] items-center justify-center ml-6">
                                <h2 className="text-[#fff] text-[45px] font-semibold">User Name</h2>
                                <p className="self-start">12/10/2023</p>
                                <p className="self-start">278 Friends</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[526px] max-h-[352px] bg-[#676767] mt-[52px] text-[#fff] mb-24">
                    <div>
                        <h2 className="text-[36px] text-[#fff]">Introduce</h2>
                        <p className="text-[24px]">Lorem ipsum dolor sit amet consectetu ...</p>
                    </div>
                    <div className="flex mb-[30px]">
                        <img src="images\UserProfile\material-symbols_work-sharp.png" alt="" className="w-[32px] h-[32px]" />
                        <p className="text-[22px] pl-2">Officer</p>
                    </div>
                    <div className="flex mb-[30px]">
                        <img src="images\UserProfile\ph_gender-intersex-bold.png" alt="" className="w-[32px] h-[32px]" />
                        <p className="text-[22px] pl-2">Female</p>
                    </div>
                    <div className="flex mb-[30px]">
                        <img src="images\UserProfile\Frame 48097208.png" alt="" className="w-[32px] h-[32px]" />
                        <p className="text-[22px] pl-2">Manga-Action-Mystery</p>
                    </div>
                    <div className="flex mb-[30px]">
                        <img src="images\UserProfile\jam_birthday-cake-f.png" alt="" className="w-[32px] h-[32px]" />
                        <p className="text-[22px] pl-2">12/10/1998</p>
                    </div>
                </div>
                <div>
                    <div className="text-6xl text-white mb-10"><Link to="" >Recent Read Comics</Link></div>
                    <div className=""><ComicRecent /></div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;