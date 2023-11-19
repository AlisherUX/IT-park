import { useState } from "react";
import DetailedBtn from "@/components/detailedBtn";
import { GrayArrowIcon } from "@/assets/icons";

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const monthNames = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Auvgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekambr",
  ];

  const [markedDays] = useState([
    "Tue Aug 01 2023",
    "Thu Aug 03 2023",
    "Sun Aug 06 2023",
    "Mon Aug 07 2023",
    "Sat Aug 12 2023",
    "Wed Aug 30 2023",
    "Mon Sep 25 2023",
    "Fri Sep 29 2023",
    "Fri Sep 15 2023",
    "Tue Sep 12 2023",
  ]);

  const weekNames = [
    {
      id: 0,
      week: "M",
    },
    {
      id: 1,
      week: "T",
    },
    {
      id: 2,
      week: "W",
    },
    {
      id: 3,
      week: "T",
    },
    {
      id: 4,
      week: "F",
    },
    {
      id: 5,
      week: "S",
    },
    {
      id: 6,
      week: "S",
    },
  ];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    const firstDay = new Date(year, month - 1, 0).getDay();
    return firstDay === 0 ? 7 : firstDay;
  };

  const renderDays = () => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const days = [];
    const prevMonthDays = getDaysInMonth(year, month - 1);

    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      days.push(
        <div key={`prev-${i}`} className="calendar-day prev-month">
          {prevMonthDays - i}
        </div>
      );
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(year, month - 1, i);
      const classNames = [
        "calendar-day",
        currentDate.getDay() === 0 ? "sunday" : "",
      ];

      if (currentDate.toDateString() === new Date().toDateString()) {
        classNames.push("today");
      }

      markedDays.forEach((value) => {
        if (currentDate.toDateString() === value) {
          classNames.push("marked");
        }
      });

      days.push(
        <div key={i} className={classNames.join(" ")}>
          {i}
        </div>
      );
    }

    const weeks = Math.ceil((firstDayOfMonth + daysInMonth) / 7);
    const totalDays = weeks * 7;
    for (let i = days.length; i < totalDays; i++) {
      days.push(
        <div key={`next-${i}`} className="calendar-day next-month">
          {i - (firstDayOfMonth + daysInMonth) + 1}
        </div>
      );
    }

    return days;
  };

  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1));
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button
          className="calendar-header__swipe-button"
          onClick={handlePrevMonth}
        >
          <GrayArrowIcon />
        </button>
        <h2 className="calendar-header__month-year">
          {monthNames[date.getMonth()]}, {date.getFullYear()}
        </h2>
        <button
          className="calendar-header__swipe-button"
          onClick={handleNextMonth}
        >
          <GrayArrowIcon className="next-arrow" />
        </button>
      </div>
      <div className="calendar-weekdays">
        {weekNames.map((el) => (
          <div className="calendar-week" key={el.id}>
            {el.week}
          </div>
        ))}
      </div>
      <div className="calendar-days">{renderDays()}</div>

      <DetailedBtn link="/lesson-table" />
    </div>
  );
};

export default Calendar;
