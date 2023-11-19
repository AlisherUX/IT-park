import Chart from "./components/chart";
import CoursesCompleted from "./components/coursesCompleted";
import CurrentCourses from "./components/currentCourses";
import ProfilePart from "./components/profilePart";

function Profile() {
  return (
    <>
      <div className="profile__page">
        <ProfilePart />
        <div className="profile__content">
          <CoursesCompleted />
          <CurrentCourses />
          <Chart />
        </div>
      </div>
    </>
  );
}

export default Profile;
