import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { profilePart } from "@/utils/data";
import {
  CupIcon,
  PlanetaIcon,
  PuzzleIcon,
  ReadingIcon,
  SkillIcon,
} from "@/assets/icons";

const ProfilePart = () => {
  return (
    <>
      {profilePart.map((el) => {
        return (
          <div className="profile" key={el.id}>
            <>
              <Avatar
                className="profile__avatar"
                shape="square"
                size={120}
                icon={<UserOutlined />}
              />
              <h2 className="profile__title">{el.name}</h2>
              <p className="profile__text">{el.direction}</p>
              <div className="profile__box">
                <div className="profile__box-card">
                  <p className="profile__box-icoins">{el.icoins}</p>
                  <h2 className="profile__box-num">{el.icoinsNum}</h2>
                </div>
                <div className="profile__box-card">
                  <p className="profile__box-icoins">{el.certificates}</p>
                  <h2 className="profile__box-num">{el.certificatesNum}</h2>
                </div>
              </div>
              <h2 className="profile__achievements">Achievements</h2>
              <div className="profile__icon">
                <CupIcon />
                <PuzzleIcon />
                <PlanetaIcon />
                <SkillIcon />
                <ReadingIcon />
              </div>
              <h2 className="profile__bio">Bio</h2>
              <div className="profile__bottom">
                <p className="profile__bottom-text">{el.bio}</p>
              </div>
            </>
          </div>
        );
      })}
    </>
  );
};

export default ProfilePart;
