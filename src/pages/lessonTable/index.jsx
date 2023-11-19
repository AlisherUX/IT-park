import BigCalendar from "./components/bigCalendar";
import SmallTitle from "@/components/smallTitle";
import PlanCard from "@/components/planCard";
import CourseCard from "@/components/courseCard";
import DetailedBtn from "@/components/detailedBtn";
import CrudCard from "@/components/crudCard";
import WeekCalendar from "./components/weekCalendar";

const LessonTable = () => {
  return (
    <div className="page-wrapper">
      <div>
        <BigCalendar />

        <SmallTitle text="Jarayonda" />

        <div className="course-card__wrapper">
          <CourseCard />
        </div>

        <SmallTitle text="Tugallangan" />
        <div className="course-card__wrapper">
          <CrudCard />
        </div>
      </div>

      <div className="week-calendar__wrapper">
        <WeekCalendar />

        <SmallTitle text="Barcha kurslarni ro'yhati" />

        <div className="plan-card__wrapper">
          <PlanCard />
        </div>

        <DetailedBtn link="/my-courses" />
      </div>
    </div>
  );
};

export default LessonTable;
