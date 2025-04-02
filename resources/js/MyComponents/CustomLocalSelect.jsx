import { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function CustomLocalSelect() {

    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);

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
                    placeholder="Within Myanmar"
                    disabled={true}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 border-none outline-none cursor-not-allowed"
                />
            </div>
        </div>
    );
}

export default CustomLocalSelect;
