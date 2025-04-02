import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DocSearch from "../../images/ayasompo_myayasompo.png";
import EPayment from "../../images/ayasompo_epayment.png";
import PCalculator from "../../images/ayasompo_premium_calculator.png"
import Appointment from "../../images/ayasompo_appointment.png"
import Location from "../../images/ayasompo_locationmap.png"
import Claim from "../../images/ayasompo_claim.png"
import Logo from "../../images/logo_retina.png";
import CloseIcon from '@mui/icons-material/Close';

const SidebarTwo = ({ isSidebarTwoOn, setisSidebarTwoOn }) => {
    return (
        <div
            className={`w-screen h-screen bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 duration-300 z-30 ${
                isSidebarTwoOn ? "translate-x-0" : "-translate-x-full delay-500"
            }`}
        >
            <div
                className={`w-[350px] h-screen bg-white fixed top-0 left-0 duration-300 ${
                    isSidebarTwoOn ? "translate-x-0 delay-500" : "-translate-x-full"
                }`}
            >
                <div
                    className={`duration-500 p-4 ${
                        isSidebarTwoOn
                            ? "translate-y-0 opacity-100 delay-[900ms]"
                            : "translate-y-5 opacity-0"
                    }`}
                >
                    <div className="flex justify-between items-center">
                        <img src={Logo} alt="logo" className="max-w-[180px]" />
                        <button
                            className="p-1 text-gray-700 rounded-full border border-gray-700"
                            onClick={() => setisSidebarTwoOn(false)}
                        >
                            <CloseIcon />
                        </button>
                    </div>
                    
                    <div className="flex flex-col gap-4 mt-8">
                        <a href="" className="hover:text-red-700 duration-300">INSURANCE PRODUCTS</a>
                        <a href="" className="hover:text-red-700 duration-300">CLAIMS</a>
                        <a href="" className="hover:text-red-700 duration-300">MY AYASOMPO</a>
                        <a href="" className="hover:text-red-700 duration-300">OUR PARTNERS</a>
                        <a href="" className="hover:text-red-700 duration-300">OUR PEOPLE</a>
                        <a href="" className="hover:text-red-700 duration-300">ABOUT US</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarTwo;
