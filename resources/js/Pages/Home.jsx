import WebsiteLayout from "@/Layouts/WebsiteLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import HeroImage from "../../images/beyond-KV.jpg";
import TravelForm from "@/MyComponents/TravelForm";

const Home = () => {
    return (
        <>
            <Head title="Home" />
            <WebsiteLayout>
                <div
                    className="aspect-[2/1] w-full grid place-items-center"
                    style={{
                        backgroundImage: `url(${HeroImage})`,
                        backgroundSize: "cover",
                    }}
                >
                    <div className=" w-[200px] md:w-auto max-w-[400px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] flex flex-col justify-end items-end fade-slide mt-10 md:mt-0 ">
                        <p className="text-[20px] md:text-[80px] lg:text-[120px] xl:text-[150px] font-black text-gray-black text-right w-full">
                            Beyond
                        </p>
                        <p className="text-[5px] md:text-md lg:text-xl xl:text-2xl text-black text-right max-w-[100px] md:max-w-[200px] lg:max-w-[300px] xl:max-w-[500px]">
                            going beyond to ensure guaranteed protection beyond
                            now, for the future.
                        </p>
                    </div>
                </div>
                <TravelForm />
            </WebsiteLayout>
        </>
    );
};

export default Home;
