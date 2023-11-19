import { useEffect, useState } from "react";
import { GrayArrowIcon } from "@/assets/icons";

const Calendar = () => {
  const [feature, setFeature] = useState([]);

  useEffect(() => {
    const randomColors = [
      "big-modal border-yellow",
      "big-modal border-green",
      "big-modal border-dark__blue",
    ].sort(() => 0.5 - Math.random());
    setFeature(randomColors);
  }, []);

  const monthNames = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ];
  const weekNames = [
    "Yakshanba",
    "Dushanba",
    "Seshanba",
    "Chorshanba",
    "Payshanba",
    "Juma",
    "Shanba",
  ];
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [ismodal] = useState([
    {
      date: "Fri Sep 01 2023",
      title: "Web-design",
      time: "10 : 00",
      task: "test",
    },
    {
      date: "Sat Sep 02 2023",
      title: "Web va Grafik dizayn",
      time: "10 : 00",
      task: "test",
    },
    {
      date: "Sun Sep 03 2023",
      title: "Web-design",
      time: "10 : 00",
      task: "test",
    },
    {
      date: "Mon Sep 04 2023",
      title: "Web va Grafik dizayn",
      time: "10 : 00",
      task: "test",
    },
    {
      date: "Tue Sep 05 2023",
      title: "Web va Grafik dizayn",
      time: "10 : 00",
      task: "test",
    },
    {
      date: "Wed Sep 06 2023",
      title: "Web va Grafik dizayn",
      time: "10 : 00",
      task: "test",
    },
    {
      date: "Wed Sep 13 2023",
      title: "Web va Grafik dizayn",
      time: "10 : 00",
      task: "test",
    },
    {
      date: "Mon Sep 25 2023",
      title: "Web va Grafik dizayn",
      time: "10 : 00",
      task: "test",
    },
    {
      date: "Fri Sep 29 2023",
      title: "Web va Grafik dizayn",
      time: "10 : 00",
      task: "test",
    },
  ]);

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarArray = (month, year) => {
    const totalDays = getDaysInMonth(month, year);
    const firstDay = getFirstDayOfMonth(month, year);
    const calendarArray = Array(42).fill(null);

    for (let i = firstDay - 1; i >= 0; i--) {
      const day = totalDays - i;
      const date = new Date(year, month - 1, day);
      calendarArray[i] = { day, date, isExtra: true };
    }

    for (let i = 0; i < totalDays; i++) {
      const day = i + 1;
      const date = new Date(year, month, day);
      calendarArray[firstDay + i] = { day, date };
    }

    for (let i = firstDay + totalDays; i < calendarArray.length; i++) {
      const day = i - (firstDay + totalDays) + 1;
      const date = new Date(year, month + 1, day);
      calendarArray[i] = { day, date, isExtra: true };
    }

    return calendarArray;
  };

  const calendarArray = generateCalendarArray(
    currentMonth.getMonth(),
    currentMonth.getFullYear()
  );

  return (
    <div className="big-calendar">
      <div className="big-calendar__header">
        <button
          className="big-calendar__title-arrow"
          onClick={() =>
            setCurrentMonth(
              new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
            )
          }
        >
          <GrayArrowIcon />
        </button>
        <h1 className="big-calendar__title">
          {monthNames[currentMonth.getMonth()]}, {currentMonth.getFullYear()}
        </h1>
        <button
          className="big-calendar__title-arrow"
          onClick={() =>
            setCurrentMonth(
              new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
            )
          }
        >
          <GrayArrowIcon />
        </button>
      </div>
      <div className="big-calendar__weeks">
        {weekNames.map((name) => (
          <div className="big-calendar__week" key={name}>
            {name}
          </div>
        ))}
      </div>
      <div className="big-calendar__days">
        {calendarArray.map((day, index) => (
          <div
            key={index}
            className={`big-calendar__day${day.isExtra ? " extra" : ""}${
              day.date.toDateString() === new Date().toDateString()
                ? " today"
                : ""
            }`}
          >
            <p className="big-calendar__day-num">{day.day}</p>
            {ismodal.map((data, index) => {
              if (data.date === day.date.toDateString()) {
                return (
                  <div key={index} className={feature[index % feature.length]}>
                    <p className="big-modal__item"> {data.title}</p>
                    <p className="big-modal__time"> {data.time}</p>
                    <p className="big-modal__item"> {data.task}</p>
                  </div>
                );
              }
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
