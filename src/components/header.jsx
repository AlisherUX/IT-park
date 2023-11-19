import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Dropdown } from "antd";
import BigTitle from "./largeTitle";
import {
  ChatIcon,
  DropdownProfileIcon,
  LogOutIcon,
  NotificationIcon,
  ProfileImage,
  SettingIcon,
} from "@/assets/icons";

const items = [
  {
    key: "1",
    icon: <DropdownProfileIcon />,
    label: (
      <NavLink to="/profile">
        <span className="header__dropdown_label">Profil</span>
      </NavLink>
    ),
  },
  {
    key: "2",
    icon: <LogOutIcon />,
    label: (
      <button
        className="danger-label"
        onClick={() => {
          localStorage.clear();
          location.reload();
        }}
      >
        Chiqish
      </button>
    ),
  },
];

const Header = () => {
  const [headerTitle, setHeaderTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setHeaderTitle("Bosh sahifa");
        break;
      case "/my-courses":
        setHeaderTitle("Mening kurslarim");
        break;
      case "/lesson-table":
        setHeaderTitle("Dars jadvali");
        break;
      case "/instuctors":
        setHeaderTitle("Instruktorlar");
        break;
      case "/profile":
        setHeaderTitle("Profil");
        break;
      case "/my-payments":
        setHeaderTitle("Mening to'lovlarim");
        break;
      case "/modules":
        setHeaderTitle("Testlar");
        break;
      case "/tests":
        setHeaderTitle("Testlar");
        break;
      case "/homework":
        setHeaderTitle("Uyga vazifalar");
        break;
      default:
        break;
    }
  }, [location.pathname]);

  return (
    <div className="wrapper-header">
      <BigTitle text={headerTitle} />
      <div className="wrapper-header_actions">
        <ChatIcon />
        <NotificationIcon />
        <SettingIcon />
        <Dropdown
          menu={{
            items,
          }}
          placement="bottom"
        >
          <ProfileImage />
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
