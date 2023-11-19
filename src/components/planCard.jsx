import React, { useEffect, useState } from "react";
import { Avatar } from "antd";
import { planData } from "@/utils/data";
import { avatarImg } from "@/assets/images";
import { GrayCalendarIcon, GrayClockIcon } from "@/assets/icons";

const PlanCard = () => {
  const [border, setBorder] = useState([]);

  useEffect(() => {
    const randomColors = [
      "plan-card border-yellow",
      "plan-card border-green",
      "plan-card border-dark__blue",
    ].sort(() => 0.5 - Math.random());
    setBorder(randomColors);
  }, []);

  return (
    <>
      {planData.map((el) => {
        return (
          <div className={border[el.id % border.length]} key={el.id}>
            <h1 className="plan-card__title">{el.title}</h1>

            <div className="plan-card__info">
              <div className="plan-card__info-date">
                <GrayCalendarIcon />
                <p>{el.date}</p>
              </div>

              <span className="plan-card__info-line"></span>

              <div className="plan-card__info-date">
                <GrayClockIcon />
                <p>{el.time}</p>
              </div>
            </div>

            <div className="plan-card__info-date">
              <Avatar shape="square" size={35} src={avatarImg} />
              <p>{el.teacher}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PlanCard;
