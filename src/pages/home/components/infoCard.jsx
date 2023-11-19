import { infoData } from "@/utils/data";

function InfoCard() {
  return (
    <>
      {infoData.map((el) => {
        return (
          <div className={el.class} key={el.id}>
            <span className="info-card__bg-img">{el.bgImg}</span>
            <div className="info-card__icon">{el.icon}</div>

            <div>
              <p className="info-card__number">{el.number}</p>
              <p className="info-card__text">{el.text}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default InfoCard;
