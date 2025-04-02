import WebsiteLayout from "@/Layouts/WebsiteLayout";
import { Head, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import HeroImage from "../../images/beyond-KV.jpg";
import TravelForm from "@/MyComponents/TravelForm";
import DatePicker from "react-datepicker";
import axios from "axios";

const Proposal = ({ formData }) => {
    const initialFormData = () => ({
        isDomestic: formData.isDomestic,
        location: formData.location,
        fromDate: formData.fromDate,
        toDate: formData.toDate,
        travellerType: formData.travellerType,
        adults: formData.adults,
        children: formData.children,
        mobileNumber: formData.mobile_number,
        name: "",
        nrcOrPassport: "nrc",
        nrc: "",
        passport: "",
        birthDate: "",
        policyHolderMobileNumber: "",
        email: "",
        beneficiaryName: "",
        beneficiaryContact: "",
        spouseName: "",
        spouseNrcOrPassport: "nrc",
        spouseNrc: "",
        spousePassport: "",
        spouseBirthDate: "",
        childrenInfo: [],
        adultsInfo: [],
        acceptTnC: false
    });

    const [isSubmitting, setisSubmitting] = useState(false);
    const { data, setData, get, post, errors, processing, recentlySuccessful } =
        useForm(initialFormData);

    const formatDate = (date) => {
        let newDate = new Date(date);

        return newDate.toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        }); // Remove comma to match format
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('post-proposal'));
        setisSubmitting(true);
        // axios.post(route('post-trip')).then(res => console.log(res));
    }

    // useEffect(() => {
    //     console.log(data);
    // }, [data, setData]);

    useEffect(() => {
        if (data.travellerType == "Individual/Group") {
            for (let index = 0; index < data.adults; index++) {
                let updatedAdultsInfo = [...data.adultsInfo];

                updatedAdultsInfo[index] = {
                    ...updatedAdultsInfo[index],
                    nrcOrPassport: "nrc",
                };
                setData("adultsInfo", updatedAdultsInfo);
            }
        }

        console.log(!data.acceptTnC && isSubmitting);
        
    }, []);

    return (
        <>
            <Head title="Proposal" />
            <WebsiteLayout>
                <div
                    className="aspect-[2/1] w-full pt-[150px] px-20"
                    // style={{
                    //     backgroundImage: `url(${HeroImage})`,
                    //     backgroundSize: "cover",
                    // }}
                >
                    <form className="grid grid-cols-1 lg:grid-cols-3 gap-4" onSubmit={handleSubmit}>
                        <div className=" col-span-1 lg:col-span-2">
                            <p>
                                Traveller Detail for{" "}
                                <span className="bg-red-600 text-white px-2 py-1 rounded">
                                    {data.travellerType == "Individual/Group"
                                        ? data.adults
                                        : data.adults + data.children}{" "}
                                    Traveller
                                </span>
                            </p>

                            <p className="my-4">Please enter your details</p>


                            {data.travellerType == "Individual/Group" ? (
                                <>
                                    {Array.from(
                                        { length: data.adults },
                                        (_, index) => (
                                            <div
                                                className="shadow border"
                                                key={index}
                                            >
                                                <div className="bg-gray-100 px-4 py-2">
                                                    <p className="text-red-700 font-bold">
                                                        ({index + 1}) Policy
                                                        Holder
                                                    </p>
                                                </div>
                                                <div className="flex flex-col gap-4 p-4">
                                                    <div className="grid grid-cols-3 gap-4 items-center">
                                                        <p className="text-right">
                                                            Full Name
                                                        </p>

                                                        <div className="col-span-2">
                                                            <input
                                                                type="text"
                                                                className="w-full"
                                                                placeholder="Full Name"
                                                                required
                                                                onKeyUp={(
                                                                    e
                                                                ) => {
                                                                    const updatedAdultsInfo =
                                                                        [
                                                                            ...data.adultsInfo,
                                                                        ];
                                                                    updatedAdultsInfo[
                                                                        index
                                                                    ] = {
                                                                        ...updatedAdultsInfo[
                                                                            index
                                                                        ],
                                                                        name: e
                                                                            .target
                                                                            .value,
                                                                    };
                                                                    setData(
                                                                        "adultsInfo",
                                                                        updatedAdultsInfo
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-3 gap-4 items-center">
                                                        <p className="text-right">
                                                            NRC/Passport
                                                        </p>

                                                        <div className="col-span-2 flex gap-8">
                                                            <div className="flex gap-2 items-center">
                                                                <input
                                                                    type="radio"
                                                                    name={"nrc/passport" + "-" + index}
                                                                    id={
                                                                        "adNrc" +
                                                                        index
                                                                    }
                                                                    required
                                                                    checked={
                                                                        data
                                                                            .adultsInfo[
                                                                            index
                                                                        ]
                                                                            ?.nrcOrPassport ==
                                                                        "nrc"
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        const updatedAdultsInfo =
                                                                            [
                                                                                ...data.adultsInfo,
                                                                            ];
                                                                        updatedAdultsInfo[
                                                                            index
                                                                        ] = {
                                                                            ...updatedAdultsInfo[
                                                                                index
                                                                            ],
                                                                            nrcOrPassport:
                                                                                "nrc",
                                                                        };
                                                                        setData(
                                                                            "adultsInfo",
                                                                            updatedAdultsInfo
                                                                        );
                                                                    }}
                                                                />
                                                                <label
                                                                    htmlFor={
                                                                        "adNrc" +
                                                                        index
                                                                    }
                                                                >
                                                                    NRC
                                                                </label>
                                                            </div>

                                                            <div className="flex gap-2 items-center">
                                                                <input
                                                                    type="radio"
                                                                    name={"nrc/passport" + "-" + index}
                                                                    id={
                                                                        "adPassport" +
                                                                        index
                                                                    }
                                                                    required
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        const updatedAdultsInfo =
                                                                            [
                                                                                ...data.adultsInfo,
                                                                            ];
                                                                        updatedAdultsInfo[
                                                                            index
                                                                        ] = {
                                                                            ...updatedAdultsInfo[
                                                                                index
                                                                            ],
                                                                            nrcOrPassport:
                                                                                "passport",
                                                                        };
                                                                        setData(
                                                                            "adultsInfo",
                                                                            updatedAdultsInfo
                                                                        );
                                                                    }}
                                                                />
                                                                <label
                                                                    htmlFor={
                                                                        "adPassport" +
                                                                        index
                                                                    }
                                                                >
                                                                    Passport
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {data.adultsInfo[index]
                                                        ?.nrcOrPassport !=
                                                    "passport" ? (
                                                        <div className="grid grid-cols-3 gap-4 items-center">
                                                            <p className="text-right">
                                                                NRC
                                                            </p>

                                                            <div className="col-span-2">
                                                                <input
                                                                    type="text"
                                                                    className="w-full"
                                                                    placeholder="NRC"
                                                                    required
                                                                    onKeyUp={(
                                                                        e
                                                                    ) => {
                                                                        const updatedAdultsInfo =
                                                                            [
                                                                                ...data.adultsInfo,
                                                                            ];
                                                                        updatedAdultsInfo[
                                                                            index
                                                                        ] = {
                                                                            ...updatedAdultsInfo[
                                                                                index
                                                                            ],
                                                                            nrc: e
                                                                                .target
                                                                                .value,
                                                                        };
                                                                        setData(
                                                                            "adultsInfo",
                                                                            updatedAdultsInfo
                                                                        );
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="grid grid-cols-3 gap-4 items-center">
                                                            <p className="text-right">
                                                                Passport
                                                            </p>

                                                            <div className="col-span-2">
                                                                <input
                                                                    type="text"
                                                                    className="w-full"
                                                                    placeholder="Passport"
                                                                    required
                                                                    onKeyUp={(
                                                                        e
                                                                    ) => {
                                                                        const updatedAdultsInfo =
                                                                            [
                                                                                ...data.adultsInfo,
                                                                            ];
                                                                        updatedAdultsInfo[
                                                                            index
                                                                        ] = {
                                                                            ...updatedAdultsInfo[
                                                                                index
                                                                            ],
                                                                            passport:
                                                                                e
                                                                                    .target
                                                                                    .value,
                                                                        };
                                                                        setData(
                                                                            "adultsInfo",
                                                                            updatedAdultsInfo
                                                                        );
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    )}

                                                    <div className="grid grid-cols-3 gap-4 items-center">
                                                        <p className="text-right">
                                                            Birth Date
                                                        </p>

                                                        <div className="col-span-2">
                                                            <input
                                                                type="date"
                                                                className="w-full"
                                                                required
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    const updatedAdultsInfo =
                                                                        [
                                                                            ...data.adultsInfo,
                                                                        ];
                                                                    updatedAdultsInfo[
                                                                        index
                                                                    ] = {
                                                                        ...updatedAdultsInfo[
                                                                            index
                                                                        ],
                                                                        birthDate:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    };
                                                                    setData(
                                                                        "adultsInfo",
                                                                        updatedAdultsInfo
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-3 gap-4 items-center">
                                                        <p className="text-right">
                                                            Mobile Number
                                                        </p>

                                                        <div className="flex items-center col-span-2 border border-gray-500 overflow-hidden bg-white cursor-pointer w-full">
                                                            <div className="bg-gray-100 px-4 py-2 flex items-center">
                                                                09
                                                            </div>
                                                            <input
                                                                type="number"
                                                                className="w-full p-2 border-none outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                                                required
                                                                onKeyUp={(
                                                                    e
                                                                ) => {
                                                                    const updatedAdultsInfo =
                                                                        [
                                                                            ...data.adultsInfo,
                                                                        ];
                                                                    updatedAdultsInfo[
                                                                        index
                                                                    ] = {
                                                                        ...updatedAdultsInfo[
                                                                            index
                                                                        ],
                                                                        policyHolderMobileNumber:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    };
                                                                    setData(
                                                                        "adultsInfo",
                                                                        updatedAdultsInfo
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-3 gap-4 items-center">
                                                        <p className="text-right">
                                                            Email Address
                                                        </p>

                                                        <div className="col-span-2">
                                                            <input
                                                                type="text"
                                                                className="w-full"
                                                                placeholder="Email Address"
                                                                required
                                                                onKeyUp={(
                                                                    e
                                                                ) => {
                                                                    const updatedAdultsInfo =
                                                                        [
                                                                            ...data.adultsInfo,
                                                                        ];
                                                                    updatedAdultsInfo[
                                                                        index
                                                                    ] = {
                                                                        ...updatedAdultsInfo[
                                                                            index
                                                                        ],
                                                                        email: e
                                                                            .target
                                                                            .value,
                                                                    };
                                                                    setData(
                                                                        "adultsInfo",
                                                                        updatedAdultsInfo
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-3 gap-4 items-center">
                                                        <p className="text-right">
                                                            Beneficiary Name
                                                        </p>

                                                        <div className="col-span-2">
                                                            <input
                                                                type="text"
                                                                className="w-full"
                                                                placeholder="Beneficiary Name"
                                                                required
                                                                onKeyUp={(
                                                                    e
                                                                ) => {
                                                                    const updatedAdultsInfo =
                                                                        [
                                                                            ...data.adultsInfo,
                                                                        ];
                                                                    updatedAdultsInfo[
                                                                        index
                                                                    ] = {
                                                                        ...updatedAdultsInfo[
                                                                            index
                                                                        ],
                                                                        beneficiaryName:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    };
                                                                    setData(
                                                                        "adultsInfo",
                                                                        updatedAdultsInfo
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-3 gap-4 items-center">
                                                        <p className="text-right">
                                                            Beneficiary Contact
                                                        </p>

                                                        <div className="flex items-center col-span-2 border border-gray-500 overflow-hidden bg-white cursor-pointer w-full">
                                                            <div className="bg-gray-100 px-4 py-2 flex items-center">
                                                                09
                                                            </div>
                                                            <input
                                                                type="number"
                                                                className="w-full p-2 border-none outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                                                required
                                                                onKeyUp={(
                                                                    e
                                                                ) => {
                                                                    const updatedAdultsInfo =
                                                                        [
                                                                            ...data.adultsInfo,
                                                                        ];
                                                                    updatedAdultsInfo[
                                                                        index
                                                                    ] = {
                                                                        ...updatedAdultsInfo[
                                                                            index
                                                                        ],
                                                                        beneficiaryContact:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    };
                                                                    setData(
                                                                        "adultsInfo",
                                                                        updatedAdultsInfo
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </>
                            ) : (
                                <>
                                    {/* policy holder info */}
                                    <div className="shadow border">
                                        <div className="bg-gray-100 px-4 py-2">
                                            <p className="text-red-700 font-bold">
                                                (1) Policy Holder
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-4 p-4">
                                            <div className="grid grid-cols-3 gap-4 items-center">
                                                <p className="text-right">
                                                    Full Name
                                                </p>

                                                <div className="col-span-2">
                                                    <input
                                                        type="text"
                                                        className="w-full"
                                                        placeholder="Full Name"
                                                        required
                                                        onKeyUp={(e) =>
                                                            setData(
                                                                "name",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-3 gap-4 items-center">
                                                <p className="text-right">
                                                    NRC/Passport
                                                </p>

                                                <div className="col-span-2 flex gap-8">
                                                    <div className="flex gap-2 items-center">
                                                        <input
                                                            type="radio"
                                                            name="nrc/passport"
                                                            id="nrc"
                                                            required
                                                            onChange={() =>
                                                                setData(
                                                                    "nrcOrPassport",
                                                                    "nrc"
                                                                )
                                                            }
                                                        />
                                                        <label htmlFor="nrc">
                                                            NRC
                                                        </label>
                                                    </div>

                                                    <div className="flex gap-2 items-center">
                                                        <input
                                                            type="radio"
                                                            name="nrc/passport"
                                                            id="passport"
                                                            required
                                                            onChange={() =>
                                                                setData(
                                                                    "nrcOrPassport",
                                                                    "passport"
                                                                )
                                                            }
                                                        />
                                                        <label htmlFor="passport">
                                                            Passport
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            {data.nrcOrPassport == "nrc" ? (
                                                <div className="grid grid-cols-3 gap-4 items-center">
                                                    <p className="text-right">
                                                        NRC
                                                    </p>

                                                    <div className="col-span-2">
                                                        <input
                                                            type="text"
                                                            className="w-full"
                                                            placeholder="NRC"
                                                            required
                                                            onKeyUp={(e) =>
                                                                setData(
                                                                    "nrc",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="grid grid-cols-3 gap-4 items-center">
                                                    <p className="text-right">
                                                        Passport
                                                    </p>

                                                    <div className="col-span-2">
                                                        <input
                                                            type="text"
                                                            className="w-full"
                                                            placeholder="Passport"
                                                            required
                                                            onKeyUp={(e) =>
                                                                setData(
                                                                    "passport",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            <div className="grid grid-cols-3 gap-4 items-center">
                                                <p className="text-right">
                                                    Birth Date
                                                </p>

                                                <div className="col-span-2">
                                                    <input
                                                        type="date"
                                                        className="w-full"
                                                        required
                                                        onChange={(e) =>
                                                            setData(
                                                                "birthDate",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-3 gap-4 items-center">
                                                <p className="text-right">
                                                    Mobile Number
                                                </p>

                                                <div className="flex items-center col-span-2 border border-gray-500 overflow-hidden bg-white cursor-pointer w-full">
                                                    <div className="bg-gray-100 px-4 py-2 flex items-center">
                                                        09
                                                    </div>
                                                    <input
                                                        type="number"
                                                        className="w-full p-2 border-none outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                                        required
                                                        onKeyUp={(e) =>
                                                            setData(
                                                                "policyHolderMobileNumber",
                                                                "09" +
                                                                    e.target
                                                                        .value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-3 gap-4 items-center">
                                                <p className="text-right">
                                                    Email Address
                                                </p>

                                                <div className="col-span-2">
                                                    <input
                                                        type="text"
                                                        className="w-full"
                                                        placeholder="Email Address"
                                                        required
                                                        onKeyUp={(e) =>
                                                            setData(
                                                                "email",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-3 gap-4 items-center">
                                                <p className="text-right">
                                                    Beneficiary Name
                                                </p>

                                                <div className="col-span-2">
                                                    <input
                                                        type="text"
                                                        className="w-full"
                                                        placeholder="Beneficiary Name"
                                                        required
                                                        onKeyUp={(e) =>
                                                            setData(
                                                                "beneficiaryName",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-3 gap-4 items-center">
                                                <p className="text-right">
                                                    Beneficiary Contact
                                                </p>

                                                <div className="flex items-center col-span-2 border border-gray-500 overflow-hidden bg-white cursor-pointer w-full">
                                                    <div className="bg-gray-100 px-4 py-2 flex items-center">
                                                        09
                                                    </div>
                                                    <input
                                                        type="number"
                                                        className="w-full p-2 border-none outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                                        required
                                                        onKeyUp={(e) =>
                                                            setData(
                                                                "beneficiaryContact",
                                                                "09" +
                                                                    e.target
                                                                        .value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* spouse info */}
                                    <div className="shadow border mt-4">
                                        <div className="bg-gray-100 px-4 py-2">
                                            <p className="text-red-700 font-bold">
                                                (2) Spouse Info
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-4 p-4">
                                            <div className="grid grid-cols-3 gap-4 items-center">
                                                <p className="text-right">
                                                    Full Name
                                                </p>

                                                <div className="col-span-2">
                                                    <input
                                                        type="text"
                                                        className="w-full"
                                                        placeholder="Full Name"
                                                        required
                                                        onKeyUp={(e) =>
                                                            setData(
                                                                "spouseName",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-3 gap-4 items-center">
                                                <p className="text-right">
                                                    NRC/Passport
                                                </p>

                                                <div className="col-span-2 flex gap-8">
                                                    <div className="flex gap-2 items-center">
                                                        <input
                                                            type="radio"
                                                            name="nrc/passport"
                                                            id="spouseNrc"
                                                            required
                                                            checked={
                                                                data.spouseNrcOrPassport ==
                                                                "nrc"
                                                            }
                                                            onChange={() =>
                                                                setData(
                                                                    "spouseNrcOrPassport",
                                                                    "nrc"
                                                                )
                                                            }
                                                        />
                                                        <label htmlFor="spouseNrc">
                                                            NRC
                                                        </label>
                                                    </div>

                                                    <div className="flex gap-2 items-center">
                                                        <input
                                                            type="radio"
                                                            name="nrc/passport"
                                                            id="spousePassport"
                                                            required
                                                            onChange={() =>
                                                                setData(
                                                                    "spouseNrcOrPassport",
                                                                    "passport"
                                                                )
                                                            }
                                                        />
                                                        <label htmlFor="spousePassport">
                                                            Passport
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            {data.spouseNrcOrPassport ==
                                            "nrc" ? (
                                                <div className="grid grid-cols-3 gap-4 items-center">
                                                    <p className="text-right">
                                                        NRC
                                                    </p>

                                                    <div className="col-span-2">
                                                        <input
                                                            type="text"
                                                            className="w-full"
                                                            placeholder="NRC"
                                                            required
                                                            onKeyUp={(e) =>
                                                                setData(
                                                                    "spouseNrc",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="grid grid-cols-3 gap-4 items-center">
                                                    <p className="text-right">
                                                        Passport
                                                    </p>

                                                    <div className="col-span-2">
                                                        <input
                                                            type="text"
                                                            className="w-full"
                                                            placeholder="Passport"
                                                            required
                                                            onKeyUp={(e) =>
                                                                setData(
                                                                    "spousePassport",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            <div className="grid grid-cols-3 gap-4 items-center">
                                                <p className="text-right">
                                                    Birth Date
                                                </p>

                                                <div className="col-span-2">
                                                    <input
                                                        type="date"
                                                        className="w-full"
                                                        required
                                                        onChange={(e) =>
                                                            setData(
                                                                "spouseBirthDate",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* children info */}
                                    {Array.from(
                                        { length: data.children },
                                        (_, index) => (
                                            <div
                                                className="shadow border mt-4"
                                                key={index}
                                            >
                                                <div className="bg-gray-100 px-4 py-2">
                                                    <p className="text-red-700 font-bold">
                                                        ({index + 1}) Child
                                                    </p>
                                                </div>
                                                <div className="flex flex-col gap-4 p-4">
                                                    <div className="grid grid-cols-3 gap-4 items-center">
                                                        <p className="text-right">
                                                            Full Name
                                                        </p>

                                                        <div className="col-span-2">
                                                            <input
                                                                type="text"
                                                                className="w-full"
                                                                placeholder="Full Name"
                                                                required
                                                                onKeyUp={(
                                                                    e
                                                                ) => {
                                                                    const updatedChildrenInfo =
                                                                        [
                                                                            ...data.childrenInfo,
                                                                        ];
                                                                    updatedChildrenInfo[
                                                                        index
                                                                    ] = {
                                                                        ...updatedChildrenInfo[
                                                                            index
                                                                        ],
                                                                        name: e
                                                                            .target
                                                                            .value,
                                                                    };
                                                                    setData(
                                                                        "childrenInfo",
                                                                        updatedChildrenInfo
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-3 gap-4 items-center">
                                                        <p className="text-right">
                                                            NRC/Passport
                                                        </p>

                                                        <div className="col-span-2">
                                                            <input
                                                                type="text"
                                                                className="w-full"
                                                                placeholder="If children don't have NRC number yet, pls fill the respective guardian's NRC."
                                                                required
                                                                onKeyUp={(
                                                                    e
                                                                ) => {
                                                                    const updatedChildrenInfo =
                                                                        [
                                                                            ...data.childrenInfo,
                                                                        ];
                                                                    updatedChildrenInfo[
                                                                        index
                                                                    ] = {
                                                                        ...updatedChildrenInfo[
                                                                            index
                                                                        ],
                                                                        nrc:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    };
                                                                    setData(
                                                                        "childrenInfo",
                                                                        updatedChildrenInfo
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-3 gap-4 items-center">
                                                        <p className="text-right">
                                                            Birth Date
                                                        </p>

                                                        <div className="col-span-2">
                                                            <input
                                                                type="date"
                                                                className="w-full"
                                                                required
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    const updatedChildrenInfo =
                                                                        [
                                                                            ...data.childrenInfo,
                                                                        ];
                                                                    updatedChildrenInfo[
                                                                        index
                                                                    ] = {
                                                                        ...updatedChildrenInfo[
                                                                            index
                                                                        ],
                                                                        birthDate:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    };
                                                                    setData(
                                                                        "childrenInfo",
                                                                        updatedChildrenInfo
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-3 gap-4 items-center">
                                                        <div className="text-right">
                                                            Employment Status
                                                        </div>

                                                        <div className="col-span-2">
                                                            <select
                                                                name=""
                                                                id=""
                                                                className="w-full"
                                                                required
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    const updatedChildrenInfo =
                                                                        [
                                                                            ...data.childrenInfo,
                                                                        ];
                                                                    updatedChildrenInfo[
                                                                        index
                                                                    ] = {
                                                                        ...updatedChildrenInfo[
                                                                            index
                                                                        ],
                                                                        isEmployed:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    };
                                                                    setData(
                                                                        "childrenInfo",
                                                                        updatedChildrenInfo
                                                                    );
                                                                }}
                                                            >
                                                                <option value="" selected disabled>Choose option</option>
                                                                <option
                                                                    value={
                                                                        false
                                                                    }
                                                                >
                                                                    Unemployed
                                                                </option>
                                                                <option
                                                                    value={true}
                                                                >
                                                                    Employed
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-3 gap-4 items-center">
                                                        <div className="text-right">
                                                            Relationship (with
                                                            policy holder)
                                                        </div>

                                                        <div className="col-span-2">
                                                            <select
                                                                name=""
                                                                id=""
                                                                className="w-full"
                                                                required
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    const updatedChildrenInfo =
                                                                        [
                                                                            ...data.childrenInfo,
                                                                        ];
                                                                    updatedChildrenInfo[
                                                                        index
                                                                    ] = {
                                                                        ...updatedChildrenInfo[
                                                                            index
                                                                        ],
                                                                        relationship:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    };
                                                                    setData(
                                                                        "childrenInfo",
                                                                        updatedChildrenInfo
                                                                    );
                                                                }}
                                                            >
                                                                <option value="" selected disabled>Choose option</option>
                                                                <option
                                                                    value="son"
                                                                >
                                                                    Son
                                                                </option>
                                                                <option value="daughter">
                                                                    Daughter
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </>
                            )}
                        </div>
                        <div>
                            <div className="bg-white shadow border">
                                <div className="bg-red-700 px-8 py-4 text-white">
                                    <p className="text-2xl">
                                        Insurance Plan Details
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 divide-y-2">
                                    <div className="grid grid-cols-2 px-4 py-2">
                                        <p>Destination(s)</p>
                                        <p>{data.isDomestic ? "Within Myanmar" : data.location}</p>
                                    </div>
                                    <div className="grid grid-cols-2 px-4 py-2">
                                        <p>Type of Insurance</p>
                                        <p>
                                            {data.isDomestic
                                                ? "AYA Go"
                                                : "AYA Joy"}
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-2 px-4 py-2">
                                        <p>Departure Date</p>
                                        <p>{formatDate(data.fromDate)}</p>
                                    </div>
                                    <div className="grid grid-cols-2 px-4 py-2">
                                        <p>Return Date</p>
                                        <p>{formatDate(data.toDate)}</p>
                                    </div>
                                </div>
                                <div className="bg-red-700 px-8 py-4 text-white flex justify-between items-center">
                                    <p>Total Premium (MMK)</p>
                                    <p>{data.isDomestic ? '2,430' : '32,750'}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2 items-center my-4">
                            <input type="checkbox" id="t&c" onClick={(e) => setData('acceptTnC', e.target.checked)} />
                            <label htmlFor="t&c" className="select-none">
                                I accept Terms & Conditions.
                            </label>
                        </div>

                        <div className="flex justify-end items-center my-10">
                            <button className={`bg-red-700 py-2 px-4 text-white ${(data.acceptTnC && !isSubmitting) ? "" : "cursor-not-allowed opacity-50"}`} disabled={(!data.acceptTnC && isSubmitting)}>
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </WebsiteLayout>
        </>
    );
};

export default Proposal;
