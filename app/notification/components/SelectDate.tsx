import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import datePick from "public/img/common/datePickIcon.svg";
import Image from "next/image";
import { format } from "date-fns";

export const SelectDate = ({ name, setDate }: any) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const datepickerRef = useRef<any>(null);

  const handleDateSelection = () => {
    datepickerRef.current.setOpen(true);
  };

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    const formattedDate = selectedDate
      ? format(selectedDate, "yyyy.MM.dd")
      : "";
    setDate((prev: any) => ({ ...prev, [name]: formattedDate }));
  }, [selectedDate, name]);
  return (
    <div className="flex items-center">
      <DatePicker
        className="w-[100px] outline-none"
        placeholderText={`${name === "start_date" ? "시작일" : "종료일"}`}
        ref={datepickerRef}
        selected={selectedDate}
        dateFormat="yyyy.MM.dd"
        onChange={handleDateChange}
        popperPlacement="bottom"
        popperModifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 10],
            },
          },
        ]}
      />
      <button
        onClick={handleDateSelection}
        className="text-[14px] text-white w-[86px] h-[30px] bg-[#7988B8] rounded-lg flex items-center justify-center gap-1"
      >
        <Image src={datePick} alt="datePick" />
        날짜선택
      </button>
    </div>
  );
};
