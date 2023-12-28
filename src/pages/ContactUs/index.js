import { useEffect } from "react";
import { useState } from "react";
function ContactUs() {
    const [image, setImage] = useState()
    const [userId, setUserId] = useState('')
    const [join, setJoin] = useState('')

    useEffect(() => {
        //     const apiUrl = `http://127.0.0.1:7979//user/${id_user}`;
        //     fetch(apiUrl)
        //   .then((response) => response.json())
        //   .then((data) => {
        //     console.log(data)
        //   })
        //   .catch((error) => {
        //     console.error('Error fetching data:', error);
        //   });
    }, [])
    return (
        <div className="bg-[#000000] w-full ">
            <div className="flex justify-center pt-10 mx-5">
                <div className="h-[321px] mr-[19px] flex flex-col w-[560px] bg-[#292929] text-[24px] font-semibold text-[#fff]">
                    <div className="flex justify-start items-center h-[109px] bg-[#444444] pl-6">
                        <img src="images\ContactUs\Ellipse 17.png" alt="" className="max-w-[81px] max-h-[81px] " />
                        <div className="flex justify-between ml-[20px] w-[405px] items-center">
                            <div className="max-w-xs">
                                <h3 className="text-[#fff]">User ID: 12345ds234gf</h3>
                                <h3 className="text-[#fff]">Join 23/12/2023</h3>
                            </div>
                            <img src="images\ContactUs\Frame 48096947.png" alt="" className="w-[70px] h-[40px]" />

                        </div>
                    </div>
                    <div className="pl-6">
                        <div className="flex justify-left items-center h-[52px]">
                            <img src="/images/ContactUs/Vector.png" alt="" className="w-[28px] h-[28px] block leading-[52px]" />
                            <p className="block ml-[8px] leading-[52px]">Favorite</p>
                        </div>
                        <div className="flex justify-left items-center h-[52px]">
                            <img src="/images/ContactUs/Vector (1).png" alt="" className="w-[28px] h-[28px]" />
                            <p className="block ml-[8px]">Feedback</p>
                        </div>
                        <div className="flex justify-left items-center h-[52px]">
                            <img src="/images/ContactUs/icon-park-solid_setting-one.png" alt="" className="w-[28px] h-[28px]" />
                            <p className="block ml-[8px]">Setting</p>
                        </div>
                        <div className="flex justify-left items-center h-[52px] text-[#FC1010]">
                            <img src="/images/ContactUs/Vector (2).png" alt="" className="w-[28px] h-[28px]" />
                            <p className="block ml-[8px]">Logout</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 h-[663px] w-[1103px] bg-[#292929] pl-6 text-[#fff]">
                    <div className="font-semibold mt-12">
                        <h2 className="text-[45px] text-[#fff]">About the app</h2>
                        <div className="text-[24px]">
                            <p>Version:</p>
                            <p>https://mangasocial</p>
                            <p>Email: abcasd@gmail.com</p>
                            <p>Copy right</p>
                        </div>
                    </div>
                    <div className="font-semibold mt-8">
                        <h2 className="text-[45px] text-[#fff]">About us</h2>
                        <div className="text-[24px]">
                            <p>Thinkdiff Company</p>
                            <p>Address: </p>
                            <p>Hotline: </p>
                            <p>Business Certificate</p>
                        </div>
                    </div>
                    <h2 className="font-semibold text-[24px] text-[#fff] pt-7">Terms and conditions of use</h2>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;