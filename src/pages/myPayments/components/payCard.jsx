import { useEffect, useState } from "react";
import { BookMediaIcon, GreenPentulIcon } from "@/assets/icons";

function PayCard() {
  const [rotate, setRotate] = useState(45);
  const [trans, setTrans] = useState(8);
  const colors = ["#374557", "#fec64f", "#166199"];
  const [scale, setScale] = useState("none");
  const [color, setColor] = useState("");

  useEffect(() => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  }, []);

  const reRotate = () => {
    if (rotate == 45 && trans == 8 && scale == "none") {
      setRotate(225);
      setTrans(-6);
      setScale("flex");
    } else {
      setRotate(45);
      setTrans(8);
      setScale("none");
    }
  };

  return (
    <div className="pay-card">
      <div className="pay-card__top">
        <GreenPentulIcon color={color} />

        <div
          className="pay-card__top-title"
          style={{ backgroundColor: `${color}` }}
        >
          Web va Grafik dizayn
        </div>
      </div>

      <div
        className="pay-card__middle"
        style={{ display: `${scale}`, flexDirection: "column" }}
      >
        <div className="item">
          <div className="item-inner">
            <BookMediaIcon color={color} />

            <p className="item-inner__title" style={{ color: `${color}` }}>
              1-oy uchun to`lov
            </p>
          </div>

          <button
            className="item-btn"
            style={{ color: `${color}`, border: `1px solid ${color}` }}
          >
            To`langan
          </button>
        </div>

        <div className="line" style={{ backgroundColor: `${color}` }}></div>

        <div className="item">
          <div className="item-inner">
            <BookMediaIcon color={color} />

            <p className="item-inner__title" style={{ color: `${color}` }}>
              1-oy uchun to`lov
            </p>
          </div>

          <button
            className="item-btn"
            style={{ color: `${color}`, border: `1px solid ${color}` }}
          >
            To`langan
          </button>
        </div>

        <div className="line" style={{ backgroundColor: `${color}` }}></div>

        <div className="item">
          <div className="item-inner">
            <BookMediaIcon color={color} />

            <p className="item-inner__title" style={{ color: `${color}` }}>
              1-oy uchun to`lov
            </p>
          </div>

          <button
            className="item-btn"
            style={{ color: `${color}`, border: `1px solid ${color}` }}
          >
            To`langan
          </button>
        </div>
      </div>

      <div className="pay-card__bottom">
        <button className="pay-card__bottom-btn" onClick={reRotate}>
          <div
            className="arrow-right"
            style={{
              borderTop: `3.5px solid ${color}`,
              borderLeft: `3.5px solid ${color}`,
              transform: `translateY(${trans}px) rotate(${rotate}deg)`,
            }}
          ></div>
        </button>

        <div className="pay-card__inner">
          <p className="pay-card__inner-price" style={{ color: `${color}` }}>
            400 000 so’m /oy
          </p>
          <button
            className="pay-card__inner-btn"
            style={{ backgroundColor: color }}
          >
            Tolash
          </button>
        </div>
      </div>
    </div>
  );
}

export default PayCard;
