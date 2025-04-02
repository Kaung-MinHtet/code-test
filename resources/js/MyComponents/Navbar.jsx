import React, { useEffect, useState } from "react";
import Logo from "../../images/logo_retina.png";
import MyanmarFlag from "../../images/my_MM.png";
import EnglishFlag from "../../images/en_US.png";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { router } from "@inertiajs/react";

const Navbar = ({ isSidebarOn, setisSidebarOn, setisSidebarTwoOn }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 w-full z-10 ${scrolled ? 'bg-white' : 'bg-transparent'} flex justify-between items-center gap-8 py-5 md:py-10 px-20`}>
            <div className="flex justify-around items-center gap-4 text-nowrap xl:gap-10 font-extrabold text-xs xl:text-sm text-gray-700">
                <a href="" className=" hidden lg:block">INSURANCE PRODUCTS</a>
                <a href="" className=" hidden lg:block">CLAIMS</a>
                <a href="" className=" hidden lg:block">MY AYASOMPO</a>
                <img onClick={() => router.get('/')} src={Logo} alt="logo" className="max-w-[180px] cursor-pointer" />
                <a href="" className=" hidden lg:block">OUR PARTNER</a>
                <a href="" className=" hidden lg:block">OUR PEOPLE</a>
                <a href="" className=" hidden lg:block">ABOUT US</a>
            </div>

            <div className="hidden md:flex justify-around items-center gap-4 text-gray-700">
                <div className=" relative select-lang">
                    <a href="" className="flex gap-1">
                        <img
                            src={MyanmarFlag}
                            className="rounded-full object-cover"
                        />
                        MY
                    </a>

                    <div className="absolute bottom-0 left-0 translate-y-[30px] eng-lang">
                        <a href="" className="flex gap-1">
                            <img
                                src={EnglishFlag}
                                className="rounded-full object-cover"
                            />
                            EN
                        </a>
                    </div>
                </div>

                <button>
                    <SearchIcon />
                </button>
                <button onClick={() => setisSidebarOn(true)}>
                    <MenuIcon />
                </button>
            </div>

            <div className="block md:hidden">
                <button className="px-1 py-0 bg-red-600 rounded text-white" onClick={() => setisSidebarTwoOn(true)}>
                    <MenuIcon fontSize="lg" className=" text-[30px]" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
