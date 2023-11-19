import { ZipIcon } from "@/assets/icons";

function Homework() {
  return (
    <>
      <div className="homework">
        <p className="homework-text">
          1.Dribbble.com saytida dizaynlarni kuzatish, yaxshi dizayn va yomon
          dizayn farqlarini o’rganish dizaynlar orasidan o’zingizda yoqqan 3ta
          dizaynni tanlash va izohlab berish.
        </p>

        <div className="homework-install">
          <div className="homework-install__left">
            <ZipIcon />
            <p className="homework-install__left-text">
              uyga vazifa uchun materiallar
            </p>
          </div>
            <button className="homework-install__btn">Yuklab olish</button>
        </div>
      </div>
    </>
  );
}

export default Homework;
