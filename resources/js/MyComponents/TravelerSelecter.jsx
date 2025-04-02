import { useEffect, useState } from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CloseIcon from "@mui/icons-material/Close";

function TravelerSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState("Individual/Group");
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(1);

    useEffect(() => {
        if(type == "Family") {
            setAdults(2);
        }
    }, [type, setType]);

    return (
        <div className="relative">
            {/* Select Box */}
            <div
                className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bg-gray-100 px-4 py-2 flex items-center">
                    <PersonAddIcon className="text-red-600 text-lg" />
                </div>
                {
                    type == "Individual/Group" ? (
                        <div className="w-full p-2">{adults} Adult</div>
                    ) : (
                        <div className="w-full p-2">{adults} Adult {children} Child</div>
                    )
                }
            </div>

            {/* Dropdown Panel */}
            {isOpen && (
                <div className="absolute top-full left-0 w-auto mt-2 bg-white shadow-lg border rounded-lg z-10">
                    <div className="text-end bg-gray-100 p-8">
                        {/* Close Button */}
                        <button
                            className="absolute top-2 right-2 px-1 rounded bg-red-500 text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            <CloseIcon fontSize="sm" />
                        </button>
                    </div>

                    {/* Traveler Type Selection */}
                    <div className="flex items-center space-x-4 mb-4 px-8 py-2">
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="travelType"
                                className="hidden"
                                checked={type === "Individual/Group"}
                                onChange={() => setType("Individual/Group")}
                            />
                            <div
                                className={`w-5 h-5 rounded-full flex items-center justify-center border-2 ${
                                    type === "Individual/Group"
                                        ? "border-red-600 bg-red-600 text-white"
                                        : "border-gray-400"
                                }`}
                            >
                                {type === "Individual/Group" && "✔"}
                            </div>
                            <span className="ml-2">Individual/Group</span>
                        </label>

                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="travelType"
                                className="hidden"
                                checked={type === "Family"}
                                onChange={() => setType("Family")}
                            />
                            <div
                                className={`w-5 h-5 rounded-full flex items-center justify-center border-2 ${
                                    type === "Family"
                                        ? "border-red-600 bg-red-600 text-white"
                                        : "border-gray-400"
                                }`}
                            >
                                {type === "Family" && "✔"}
                            </div>
                            <span className="ml-2">Family</span>
                        </label>
                    </div>

                    {/* Counter for Adults */}
                    <div className="flex items-center justify-between px-8 py-2">
                        <span className="text-gray-700">Adult</span>
                        <div className="flex items-center border rounded-lg overflow-hidden">
                            <button
                                className={`px-3 py-2 bg-gray-100 hover:bg-gray-200 ${(adults == 1 || type == "Family") ? 'cursor-not-allowed' : ''}`}
                                disabled={adults == 1 || type == "Family"}
                                onClick={() =>
                                    setAdults((prev) => Math.max(1, prev - 1))
                                }
                            >
                                –
                            </button>
                            <div className="px-4 py-2">{adults}</div>
                            <button
                                className={`px-3 py-2 bg-gray-100 hover:bg-gray-200 ${(adults == 9 || type == "Family") ? 'cursor-not-allowed' : ''}`}
                                disabled={adults == 9 || type == "Family"}
                                onClick={() => setAdults((prev) => prev + 1)}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Counter for Children (Only for Family Type) */}
                    {type === "Family" && (
                        <div className="flex items-center justify-between px-8 py-2">
                            <span className="text-gray-700">Child</span>
                            <div className="flex items-center border rounded-lg overflow-hidden">
                                <button
                                    className={`px-3 py-2 bg-gray-100 hover:bg-gray-200 ${children == 1 ? 'cursor-not-allowed' : ''}`}
                                    disabled={children == 1}
                                    onClick={() =>
                                        setChildren((prev) =>
                                            Math.max(0, prev - 1)
                                        )
                                    }
                                >
                                    –
                                </button>
                                <div className="px-4 py-2">{children}</div>
                                <button
                                    className={`px-3 py-2 bg-gray-100 hover:bg-gray-200 ${children == 9 ? 'cursor-not-allowed' : ''}`}
                                    disabled={children == 9}
                                    onClick={() =>
                                        setChildren((prev) => prev + 1)
                                    }
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default TravelerSelector;
