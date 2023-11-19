import { useState } from "react";
import SmallTitle from "@/components/smallTitle";
import { WhiteArrowIcon } from "@/assets/icons";

const Accordion = ({ content,title }) => {
  const [icon, setIcon] = useState(true);

  const handleClick = () => {
    setIcon(!icon);
  };

  return (
    <details className="accordion-cources" onClick={handleClick}>
      <summary className="accordion-cources__title">
        <SmallTitle text={title} />
        <div className="accordion-cources__title-left">
          <p className="accordion-cources__data">10/110</p>

          <span className="accordion-cources__title-icon">
            {icon == true ? (
              <WhiteArrowIcon style={{ transform: "rotateZ(180deg)" }} />
            ) : (
              <WhiteArrowIcon />
            )}
          </span>
        </div>
      </summary>
      <div className="accordion-cources__content">{content}</div>
    </details>
  );
};

export default Accordion;
