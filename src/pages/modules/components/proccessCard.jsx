import { Progress } from "antd";
import GreenBtn from "@/components/greenBtn";
import { GrayTickIcon } from "@/assets/icons";

function ProccessCard() {
  let num = 20;

  return (
    <div className="proccess_card">
      <div className="proccess_top">
        <span className="proccess_info">
          {num >= 100 ? "10" : num / 10}
          <GrayTickIcon className="proccess_icon" />
        </span>

        <div className="proccess_title">
          Lorem Ipsum
          <Progress percent={num} size={[154, 10]} showInfo={false} />
        </div>

        <p className="proccess_data">{`${num >= 100 ? "10" : num / 10}/10`}</p>
      </div>
      <div className="proccess_bottom">
        <GreenBtn link="/" padding="13px 30px" text="Davom ettirish" />
      </div>
    </div>
  );
}

export default ProccessCard;
