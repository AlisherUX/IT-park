import { Link, NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import { menuData } from "@/constants/menuSide";
import { Logo } from "@/assets/icons";

const Menu = () => {
  const location = useLocation();
  return (
    <div className="wrapper-menu">
      <Link to="/">
        <Logo />
      </Link>
      <div className="wrapper-menu_list">
        {menuData.map((item) => (
          <NavLink key={item.id} to={item.path}>
            <div
              className={clsx(
                "wrapper-menu_list__link",
                location.pathname == item.path && "active",
                item.visible && "hidden"
              )}
            >
              {item.icon}
              {item.label}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Menu;
