import { Link } from "react-router-dom";
import HeroCard from "./components/heroCard";
import InfoCard from "./components/infoCard";
import LargeTitle from "@/components/largeTitle";
import CourseCard from "@/components/courseCard";
import PractiseCard from "./components/practiseCard";
import SmallTitle from "@/components/smallTitle";
import PlanCard from "../../components/planCard";
import Calendar from "./components/Calendar";
import DetailedBtn from "@/components/detailedBtn";
import NewCourseCard from "./components/newCourseCard";

const HomePage = () => {
  return (
    <div className="page-wrapper">
      <div>
        <HeroCard />

        <div className="info-card__wrapper">
          <InfoCard />
        </div>

        <div className="calendar-header">
          <LargeTitle text="Jarayondaki kurslar ro’yxati" />

          <Link to="/my-courses" className="course-card__link">
            Barcha Kurslar
          </Link>
        </div>

        <div className="course-card__wrapper">
          <CourseCard />
        </div>

        <div className="new-course__title">
          <LargeTitle text="Yangi ochiladigan kurslarga ro'yxatdan o'tish" />
        </div>

        <div className="course-card__wrapper">
          <NewCourseCard />
        </div>
      </div>

      <div>
        <Calendar />
        <PractiseCard />

        <SmallTitle text="Barcha kurslarni ro'yhati" />

        <div className="plan-card__wrapper">
          <PlanCard />
        </div>

        <DetailedBtn link="/my-courses" />
      </div>
    </div>
  );
};

export default HomePage;
