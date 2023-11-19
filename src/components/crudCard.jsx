import { Link } from "react-router-dom";
import { Progress, Avatar } from "antd";
import { CircleCheckIcon, ClockIcon, WhiteCalendarIcon } from "@/assets/icons";
import { crudInfo } from "@/utils/data";

function CrudCard() {
  return (
    <>
      {crudInfo.map((el) => {
        return (
          <Link to="/lessons" key={el.id}>
            <div className="course-card background-dark__blue">
              <span className="course-card__bg-img">{el.bgSvg}</span>

              <div className="course-card__main-entry">
                <p>{el.title}</p>
              </div>

              <div className="course-card__info">
                <div className="course-card__info-date">
                  <WhiteCalendarIcon />
                  <p>{el.date}</p>
                </div>

                <div className="course-card__info-date">
                  <ClockIcon />
                  <p>{el.time}</p>
                </div>
              </div>

              <Progress
                percent={el.progress}
                size={[432, 18]}
                showInfo={false}
              />

              <div className="course-card__informant">
                <div className="course-card__informant-inner">
                  <CircleCheckIcon />
                  <p>Tugallangan</p>
                </div>

                <p>{}</p>
              </div>

              <div className="course-card__info-teacher">
                <Avatar shape="square" size={35} src={el.teacherImg} />
                <p>{el.teacher}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default CrudCard;
