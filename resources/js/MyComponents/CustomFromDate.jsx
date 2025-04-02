import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function CustomFromDate({ data, setData }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    setData("fromDate", selectedDate);
  }, [selectedDate, setSelectedDate]);

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
          minDate={new Date()} // Prevent selection of past dates
        />
      </div>
    </div>
  );
}

export default CustomFromDate;
