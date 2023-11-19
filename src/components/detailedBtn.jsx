import { Link } from "react-router-dom";
import { DarkBlueArrowIcon } from "@/assets/icons";

function DetailedBtn({link}) {
  return (
    <Link to={link}>
      <button className="detailed__btn">
        Batafsil Jadval <DarkBlueArrowIcon />
      </button>
    </Link>
  );
}

export default DetailedBtn;