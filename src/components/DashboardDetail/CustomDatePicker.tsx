import { useState, useEffect } from "react";

const CustomDatePicker = ({
  onDateRangeChange,
  defaultStartDate,
  defaultEndDate,
}: any) => {
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);

  useEffect(() => {
    onDateRangeChange(startDate, endDate);
  }, [startDate, endDate]);

  const handleStartDateChange = (event: { target: { value: any } }) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event: { target: { value: any } }) => {
    setEndDate(event.target.value);
  };

  return (
    <>
      <h2 className="text-center font-semibold pt-2 py-2">
        {" "}
        Date Range Picker
      </h2>
      <div className="w-[100%] py-2 pb-2 sm:w-[80%] lg:w-[50%] m-auto flex sm:px-4 flex-col sm:flex-row mt-6 items-center gap-2 space-x-2 sm:space-x-4">
        <div className="flex items-center space-x-2">
          <label
            htmlFor="startDate"
            className="text-sm sm:text-md text-gray-600"
          >
            Start Date :
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={handleStartDateChange}
            className="border text-gray-600 border-gray-300 rounded-md px-2 py-1"
          />
        </div>
        <div className="flex items-center space-x-2">
          <label
            htmlFor="endDate"
            className="text-sm  sm:text-md text-gray-600"
          >
            End Date :
          </label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={handleEndDateChange}
            className="border text-gray-600  border-gray-300 rounded-md px-2 py-1"
          />
        </div>
      </div>
    </>
  );
};

export default CustomDatePicker;
