import { useState } from "react";
import MemberModal from "../memberModal";
import {
  BgBookIcon,
  BgCalendarIcon,
  BigCrownIcon,
  CrownIcon,
} from "@/assets/icons";

function ClosedFiles({ setLock }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="close">
        <h2 className="close-title">
          Qo’shimcha funksiyalarni ochish uchun a’zo bo’ling !
        </h2>
        <button className="close-btn" onClick={showModal}>
          A`zo bo`lish
        </button>
        <BgBookIcon className="close-book__icon" />
        <BgCalendarIcon className="close-calendar__icon" />
        <CrownIcon className="close-crown__icon" />
        <BigCrownIcon className="close-big__crown-icon" />
      </div>
      <MemberModal
        setLock={setLock}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
}

export default ClosedFiles;
