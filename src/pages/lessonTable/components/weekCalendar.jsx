import { useEffect, useState } from "react";
import { Tooltip } from "antd";
import SmallTitle from "@/components/smallTitle";

const WeekCalendar = () => {
  const date = new Date();
  const now = date.getDay();
  const [feature, setFeature] = useState([]);

  useEffect(() => {
    const randomColors = [
      " background-orange",
      " background-green",
      " background-dark__blue",
    ].sort(() => 0.5 - Math.random());
    setFeature(randomColors);
  }, []);

  const weeks = [
    {
      id: 1,
      week: "Dush",
    },
    {
      id: 2,
      week: "Sesh",
    },
    {
      id: 3,
      week: "Chor",
    },
    {
      id: 4,
      week: "Pay",
    },
    {
      id: 5,
      week: "Jum",
    },
    {
      id: 6,
      week: "Shan",
    },
    {
      id: 7,
      week: "Yak",
    },
  ];

  const ismodal = [
    {
      id: 1,
      title: "SMM",
      time: "9:00",
      week: "friday",
    },
    {
      id: 2,
      title: "Web dasturlash",
      time: "11:00",
      week: "monday",
    },
    {
      id: 3,
      title: "Web va grafik dizayn",
      time: "9:00",
      week: "saturday",
    },
    {
      id: 4,
      title: "Web dizayn",
      time: "14:00",
      week: "sunday",
    },
    {
      id: 5,
      title: "SMM",
      time: "18:00",
      week: "thursday",
    },
    {
      id: 6,
      title: "SMM",
      time: "14:00",
      week: "wednesday",
    },
  ];

  return (
    <div className="week-calendar">
      <SmallTitle text="Bu haftada" />

      <div className="week-calendar__times">
        <p className="week-calendar__times-time">9:00</p>
        <p className="week-calendar__times-time">11:00</p>
        <p className="week-calendar__times-time">14:00</p>
        <p className="week-calendar__times-time">16:00</p>
        <p className="week-calendar__times-time">18:00</p>
      </div>

      <div className="week-calendar__weeks">
        {weeks.map((el) => {
          return (
            <p
              key={el.id}
              className={
                el.id === now
                  ? "week-calendar__week active"
                  : "week-calendar__week"
              }
            >
              {el.week}
            </p>
          );
        })}

        {ismodal.map((modal) => {
          const { id, title, time, week } = modal;
          return (
            <Tooltip key={id} title={`${modal.time}`}>
              <div
                className={`week-calendar__modal ${
                  feature[modal.id % feature.length]
                } ${week.toLowerCase()}-${time.replace(":", "")}`}
              >
                <div className="week-calendar__modal-circle"></div>
                <div className="week-calendar__modal-title">{title}</div>
              </div>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};

export default WeekCalendar;
