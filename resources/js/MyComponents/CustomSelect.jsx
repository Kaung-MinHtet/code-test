import { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function SearchableSelect({ data, setData }) {
    const cities = [
        "Bangkok",
        "Singapore",
        "Kuala Lumpur",
        "Tokyo",
        "Seoul",
        "London",
        "Paris",
        "New York",
        "Berlin",
        "Sydney",
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [selected, setSelected] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const filteredCities = cities.filter((city) =>
        city.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        setData("location", selected);
    }, [selected, setSelected]);

    return (
        <div className="relative">
            {/* Input Box */}
            <div
                className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bg-gray-100 px-4 py-2 flex items-center">
                    <LocationOnIcon className="text-red-700 text-lg" />
                </div>
                <input
                    type="text"
                    value={searchTerm}
                    placeholder="Select a city"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 border-none outline-none"
                />
            </div>

            {/* Dropdown List */}
            {isOpen && (
                <div className="absolute w-full bg-white border border-gray-300 mt-1 rounded-lg shadow-lg max-h-60 overflow-auto z-[5]">
                    {filteredCities.length > 0 ? (
                        filteredCities.map((city) => (
                            <div
                                key={city}
                                className="p-2 hover:bg-gray-200 cursor-pointer"
                                onClick={() => {
                                    setSelected(city);
                                    setSearchTerm(city);
                                    setIsOpen(false);
                                }}
                            >
                                {city}
                            </div>
                        ))
                    ) : (
                        <div className="p-2 text-gray-500">
                            No results found
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default SearchableSelect;
