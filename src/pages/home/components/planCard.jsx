import { Avatar } from "antd";
import { planData } from "@/utils/data";
import { GrayCalendarIcon, GrayClockIcon } from "@/assets/icons";
import { avatarImg } from "@/assets/images";

const PlanCard = () => {
  return (
    <>
      {planData.map((el) => {
        return (
          <div className="plan-card" key={el.id}>
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
