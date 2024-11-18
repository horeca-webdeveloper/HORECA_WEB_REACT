import React, { useEffect, useState } from "react";
// import { footerMenu } from "../data/footer"
import { Link } from "react-router-dom";
import { Wrapper } from "../shared/Wrapper"
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
import axios from "axios";
import { apiClient } from "../utils/apiWrapper";

export const Footer = () => {
    const [footerMenu, setFooterMenu] = useState([])



    const fetchMenu = async () => {
        try {
            const response = await apiClient.get('/menus');
            setFooterMenu(response.data)

        } catch (error) {
            console.error('Error:', error);
        } finally {
            // setLoader(false);
        }
    };
    useEffect(() => {
        fetchMenu();
    }, [])

    return (
        <div className="bg-gray-500">
            {/* News Letter  */}
            <Wrapper classes="flex flex-row items-center justify-center py-5">
                <img src={process.env.PUBLIC_URL + "/images/footer/newsletter.png"} alt="newsletter" />
                <div className="mx-10">
                    <h4 className="text-black-100 text-[1.375rem] font-semibold">Learn first about discounts</h4>
                    <p className="text-[0.937rem] text-gray-700 ">As well as news, special offers and promotions</p>
                </div>
                <form className="relative w-1/3">
                    <input className="w-full py-[16px] pr-44 pl-5 text-[0.95rem] text-gray-800 bg-white rounded-md border border-gray-300 outline-none" type="email" placeholder="Enter your email address" />
                    <button type="submit" className="right-2 absolute top-[8px] text-base font-semibold bg-secondary rounded-sm px-7 py-2">Subscribe</button>
                </form>
            </Wrapper>
            <hr />
            <Wrapper classes="pt-7 pb-10">
                <div className="flex  ">
                    {footerMenu.map((footer, index) => {
                        return (
                            <div key={footer.name} className="basis-1/5 mt-3 text-black-100">
                                <h4 className=" text-[1.375rem] font-semibold">{footer.name}</h4>
                                <ul>
                                    {footer.menu_nodes.map((menu, index) => {
                                        return (
                                            <li key={index} className="text-[0.937rem] mt-4">
                                                <Link to={menu.url}>{menu.title}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                    <div className="basis-1/5 mt-3">
                        <h4 className=" text-[1.375rem] font-semibold">Download</h4>
                        <p className="text-gray-700 text-base mt-5">You can download our mobile application from app stores</p>
                        <div className=" text-gray-700 flex flex-row items-center mt-5 ">
                            <img className="rounded-md" src={process.env.PUBLIC_URL + "/icons/apple.jpg"} alt="App Store Horeca" />
                            <div className="ml-3">
                                <span className="text-sm">Download App</span>
                                <br />
                                <span className="text-sm">Get -10% Discount</span>
                            </div>
                        </div>
                        <div className=" text-gray-700 flex flex-row items-center mt-3 ">
                            <img className="rounded-md" src={process.env.PUBLIC_URL + "/icons/google.jpg"} alt="Google Store Horeca" />
                            <div className="ml-3">
                                <span className="text-sm">Download App</span>
                                <br />
                                <span className="text-sm">Get -10% Discount</span>
                            </div>
                        </div>
                        <h4 className=" text-[1.375rem] font-semibold mt-5">Secured Payment Gateways</h4>
                        <div className="flex flex-row ">
                            <img className="mr-3 w-14 mt-5 rounded-md" src={process.env.PUBLIC_URL + "/icons/visa.jpg"} alt="visa" />
                            <img className="mr-3 w-14 mt-5 rounded-md" src={process.env.PUBLIC_URL + "/icons/mastero.jpg"} alt="mastero" />
                            <img className="mr-3 w-14 mt-5 rounded-md" src={process.env.PUBLIC_URL + "/icons/mastercard.jpg"} alt="mastercard" />
                        </div>
                    </div>
                </div>
            </Wrapper>
            <hr />

            {/* Bottom Navigation  */}

            <Wrapper classes="flex items-center justify-between py-8">
                <div className="text-sm text-gray-700 ">© 2024, <Link to="#" className="font-bold text-primary"> Horeca Store AE </Link> All rights reserved</div>
                <div>
                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center mx-5">
                            <img src={process.env.PUBLIC_URL + "/icons/phone.png"} alt="Horeca Store" />
                            <div className="ml-3">
                                <p className="text-primary text-[1.625rem] font-bold leading-6">1900 - 6666</p>
                                <span className="text-xs text-gray-700 font-semibold">Working 8:00 - 22:00</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center mx-5">
                            <img src={process.env.PUBLIC_URL + "/icons/phone.png"} alt="Horeca Store" />
                            <div className="ml-3">
                                <p className="text-primary text-[1.625rem] font-bold leading-6">1900 - 8888</p>
                                <span className="text-xs text-gray-700 font-semibold">24/7 Support Center</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center ">
                    <div className="flex flex-row items-center ">
                        <h4 className="mr-5 text-black-100 text-base font-semibold">Follow Us</h4>
                        <div className="flex items-center justify-between">
                            <Link to="#" className="border border-gray-300 size-[35px] p-1 flex items-center justify-center ml-2 rounded-full">
                                <FaFacebookF color="#186737" />
                            </Link>
                            <Link to="#" className="border border-gray-300 size-[35px] p-1 flex items-center justify-center ml-2 rounded-full">
                                <FaTwitter color="#186737" />
                            </Link>
                            <Link to="#" className="border border-gray-300 size-[35px] p-1 flex items-center justify-center ml-2 rounded-full">
                                <FaInstagram color="#186737" />
                            </Link>
                            <Link to="#" className="border border-gray-300 size-[35px] p-1 flex items-center justify-center ml-2 rounded-full">
                                <FaPinterestP color="#186737" />
                            </Link>
                            <Link to="#" className="border border-gray-300 size-[35px] p-1 flex items-center justify-center ml-2 rounded-full">
                                <FaYoutube color="#186737" />
                            </Link>
                        </div>
                    </div>
                    <span className="text-sm text-black-100 mt-2">Up to 15% discount on your first subscribe</span>
                </div>
            </Wrapper>


        </div>
    )
}