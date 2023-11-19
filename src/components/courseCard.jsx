import { Link } from "react-router-dom";
import { Progress, Avatar } from "antd";
import { courseInfo } from "@/utils/data";
import { ClockIcon, RetryIcon, WhiteCalendarIcon } from "@/assets/icons";

function CourseCard() {
  return (
    <>
      {courseInfo.map((el) => {
        return (
          <Link to="/lessons" key={el.id}>
            <div className="course-card">
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
                  <RetryIcon />
                  <p>Jarayonda</p>
                </div>

                <p>{`${el.progress >= 100 ? "10" : el.progress / 10}/10`}</p>
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

export default CourseCard;
