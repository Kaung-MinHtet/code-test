import React, { useState } from "react";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import FlightIcon from "@mui/icons-material/Flight";
import CustomSelect from "./CustomSelect";
import TravelerSelector from "./TravelerSelecter";
import CustomFromDate from "./CustomFromDate";
import CustomToDate from "./CustomToDate";
import CustomLocalSelect from "./CustomLocalSelect";
import MPU from "../../images/mpu.png"
import VISA from "../../images/vbm_wht01.png"
import JCB from "../../images/JCB logo 01.png"
import AYAPAY from "../../images/AYA_PAY_White.png"
import KBZPAY from "../../images/KBZPay_white.png"

const TravelForm = () => {
    const [isDomestic, setisDomestic] = useState(true);

    return (
        <div className="w-full px-0 lg:px-20 -translate-y-[50px] md:-translate-y-[150px]">
            <div className="m-8 border shadow bg-white">
                <div className="flex">
                    <div
                        className={`px-8 py-4 cursor-pointer ${
                            isDomestic
                                ? "text-white bg-red-700"
                                : "bg-gray-300 hover:bg-red-700 hover:text-white text-black"
                        }`}
                        onClick={() => setisDomestic(true)}
                    >
                        <p>
                            <DirectionsBusFilledIcon />
                            AYA Go (Domestic)
                        </p>
                    </div>
                    <div
                        className={`px-8 py-4 cursor-pointer ${
                            isDomestic
                                ? "bg-gray-300 hover:bg-red-700 hover:text-white"
                                : "bg-red-700 text-white"
                        }`}
                        onClick={() => setisDomestic(false)}
                    >
                        <p>
                            <FlightIcon />
                            AYA Joy (Overseas)
                        </p>
                    </div>
                </div>
                <div className="border">
                    {isDomestic ? (
                        <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                            <CustomLocalSelect />
                            <CustomFromDate />
                            <CustomToDate />
                            <TravelerSelector />
                            <button className="text-white bg-red-700 py-2 rounded">
                                GET QUOTE
                            </button>
                        </div>
                    ) : (
                        <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                            <CustomSelect />
                            <CustomFromDate />
                            <CustomToDate />
                            <TravelerSelector />
                            <button className="text-white bg-red-700 py-2 rounded">
                                GET QUOTE
                            </button>
                        </div>
                    )}

                    <div className="p-10 flex flex-cols md:flex-rows gap-4 justify-center items-center">
                        <p className="text-gray-500">
                            Do you want to get your travel history data? Please
                            fill your mobile number.
                        </p>
                        {/* Input Box */}
                        <div
                            className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white cursor-pointer"
                        >
                            <div className="bg-gray-100 px-4 py-2 flex items-center">
                                09
                            </div>
                            <input
                                type="number"
                                className="w-full p-2 border-none outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                            />
                        </div>
                    </div>
                </div>

                <div className="px-10 py-5 flex justify-end items-center gap-4 bg-red-700">
                    <img src={MPU} alt="mpu" className="w-[50px]" />
                    <img src={VISA} alt="visa" className="w-[50px]" />
                    <img src={JCB} alt="jcb" className="w-[50px]" />
                    <img src={AYAPAY} alt="ayapay" className="w-[50px]" />
                    <img src={KBZPAY} alt="kbzpay" className="w-[50px]" />
                </div>
            </div>
        </div>
    );
};

export default TravelForm;
