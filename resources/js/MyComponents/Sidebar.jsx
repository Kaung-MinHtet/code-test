import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DocSearch from "../../images/ayasompo_myayasompo.png";
import EPayment from "../../images/ayasompo_epayment.png";
import PCalculator from "../../images/ayasompo_premium_calculator.png"
import Appointment from "../../images/ayasompo_appointment.png"
import Location from "../../images/ayasompo_locationmap.png"
import Claim from "../../images/ayasompo_claim.png"

const Sidebar = ({ isSidebarOn, setisSidebarOn }) => {
    return (
        <div
            className={`w-screen h-screen bg-[rgba(0,0,0,0.9)] fixed top-0 left-0 duration-300 z-30 ${
                isSidebarOn ? "translate-x-0" : "translate-x-full delay-500"
            }`}
        >
            <div
                className={`w-[500px] h-screen bg-white fixed top-0 right-0 duration-300 ${
                    isSidebarOn ? "translate-x-0 delay-500" : "translate-x-full"
                }`}
            >
                <div
                    className={`duration-500 p-4 ${
                        isSidebarOn
                            ? "translate-y-0 opacity-100 delay-[900ms]"
                            : "translate-y-5 opacity-0"
                    }`}
                >
                    <div className="grid place-items-end">
                        <button
                            className="p-1 text-gray-700 rounded-full border border-gray-700"
                            onClick={() => setisSidebarOn(false)}
                        >
                            <ArrowBackIcon />
                        </button>
                    </div>
                    <h3 className="text-4xl font-bold text-red-700 text-center">
                        DIGITAL SERVICES
                    </h3>
                    <p className="text-gray-500 text-center">
                        Easy for you to access your insurance policy via our
                        digital platform
                    </p>
                    <div className="grid grid-cols-2 gap-6 mt-6">
                        <div className="flex flex-col justify-center items-center cursor-pointer hover:text-red-700">
                            <img src={DocSearch} className="w-[70px]" alt="docs_search" />
                            My AYASOMPO
                        </div>
                        <div className="flex flex-col justify-center items-center cursor-pointer hover:text-red-700">
                            <img src={EPayment} className="w-[70px]" alt="docs_search" />
                            E-Payment
                        </div>
                        <div className="flex flex-col justify-center items-center cursor-pointer hover:text-red-700">
                            <img src={PCalculator} className="w-[70px]" alt="docs_search" />
                            Premium Calculator
                        </div>
                        <div className="flex flex-col justify-center items-center cursor-pointer hover:text-red-700">
                            <img src={Appointment} className="w-[70px]" alt="docs_search" />
                            Book An Appointment
                        </div>
                        <div className="flex flex-col justify-center items-center cursor-pointer hover:text-red-700">
                            <img src={Location} className="w-[70px]" alt="docs_search" />
                           Location Map
                        </div>
                        <div className="flex flex-col justify-center items-center cursor-pointer hover:text-red-700">
                            <img src={Claim} className="w-[70px]" alt="docs_search" />
                            Claims
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
