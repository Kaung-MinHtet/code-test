import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function CustomToDate() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="relative">
      {/* Input Field */}
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white cursor-pointer">
        <div className="bg-gray-100 px-4 py-2 flex items-center">
          <CalendarMonthIcon className="text-red-700 text-lg" />
        </div>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="MMM/dd/yyyy"
          className="w-full p-2 border-none outline-none"
        />
      </div>
    </div>
  );
}

export default CustomToDate;
