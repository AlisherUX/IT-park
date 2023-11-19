import { Link } from "react-router-dom";
import { GreenPentulIcon } from "@/assets/icons";

function HomeworkCard() {
  return (
    <div className="homework__card">
      <GreenPentulIcon color="#166199" />

      <div className="homework__inner">
        <div className="homework__info">
          <span className="homework__title">Web va Grafik dizayn</span>
          <p className="homework__subtitle">O`qituvchi: Humoyun madrahimov</p>
        </div>

        <Link to="/" className="homework__btn">
          Darsni ko`rish
        </Link>
      </div>
    </div>
  );
}

export default HomeworkCard;
