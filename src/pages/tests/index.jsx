import {
  BigBlueArrowIcon,
  ErrorIcon,
  GradientArrowIcon,
  GreenTickIcon,
} from "@/assets/icons";
import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Tests = () => {
  const activeTabButton = document.querySelector(".lesson-button__active");
  const tabContainer = document.querySelector(".lesson-buttons__wrapper");
  const [selectedOption, setSelectedOption] = useState(null);
  const [activeButton, setActiveButton] = useState(1);
  const [activeTab, setActiveTab] = useState(1);
  const [key, setKey] = useState(0);

  const data = [
    {
      id: 1,
      tab: [
        {
          id: 1,
          question: "Question 1",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 0,
        },
        {
          id: 2,
          question: "Question 2",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 1,
        },
        {
          id: 3,
          question: "Question 3",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 2,
        },
        {
          id: 4,
          question: "Question 4",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 0,
        },
        {
          id: 5,
          question: "Question 5",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 1,
        },
        {
          id: 6,
          question: "Question 6",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 2,
        },
        {
          id: 7,
          question: "Question 7",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 0,
        },
        {
          id: 8,
          question: "Question 8",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 1,
        },
        {
          id: 9,
          question: "Question 9",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 2,
        },
        {
          id: 10,
          question: "Question 10",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 0,
        },
        {
          id: 11,
          question: "Question 11",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 1,
        },
        {
          id: 12,
          question: "Question 12",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 2,
        },
        {
          id: 13,
          question: "Question 13",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 0,
        },
        {
          id: 14,
          question: "Question 14",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 1,
        },
        {
          id: 15,
          question: "Question 15",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 2,
        },
      ],
    },
    {
      id: 2,
      tab: [
        {
          id: 16,
          question: "Question 1",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 1,
        },
        {
          id: 17,
          question: "Question 2",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 2,
        },
      ],
    },
    {
      id: 3,
      tab: [
        {
          id: 16,
          question: "Question 1",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 1,
        },
        {
          id: 17,
          question: "Question 2",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 2,
        },
      ],
    },
    {
      id: 4,
      tab: [
        {
          id: 16,
          question: "Question 1",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 1,
        },
        {
          id: 17,
          question: "Question 2",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 2,
        },
      ],
    },
    {
      id: 5,
      tab: [
        {
          id: 16,
          question: "Question 1",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 1,
        },
        {
          id: 17,
          question: "Question 2",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 2,
        },
      ],
    },
    {
      id: 6,
      tab: [
        {
          id: 16,
          question: "Question 1",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 1,
        },
        {
          id: 17,
          question: "Question 2",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 2,
        },
      ],
    },
    {
      id: 7,
      tab: [
        {
          id: 16,
          question: "Question 1",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 1,
        },
        {
          id: 17,
          question: "Question 2",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 2,
        },
      ],
    },
    {
      id: 8,
      tab: [
        {
          id: 16,
          question: "Question 1",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 1,
        },
        {
          id: 17,
          question: "Question 2",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 2,
        },
      ],
    },
    {
      id: 9,
      tab: [
        {
          id: 16,
          question: "Question 1",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 1,
        },
        {
          id: 18,
          question: "Question 2",
          options: ["Option 1", "Option 2", "Option 3"],
          answer: 2,
        },
      ],
    },
  ];

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
    setTimeout(handleNextTaskTab, 1000);
  };

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    setActiveTab(1);
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleNextTaskTab = () => {
    data.map((el) =>
      el.tab.map((el) => {
        if (activeTab < el.id) {
          setActiveTab(activeTab + 1);
          setSelectedOption(null);
        }
      })
    );
  };

  const handlePrevTaskTab = () => {
    data.map((el) =>
      el.tab.map((el) => {
        if (activeTab > el.id) {
          setActiveTab(activeTab - 1);
        }
      })
    );
  };

  const activeTabDirection = (number) => {
    tabContainer.scrollLeft = activeTabButton.offsetLeft - number;
  };

  const children = ({ remainingTime }) => (
    <p className="timer__second" role="timer" aria-live="assertive">
      {remainingTime}
    </p>
  );

  return (
    <>
      <div className="tab__container">
        <div className="lesson-content__wrapper">
          <button
            className="lesson-navigation__button"
            onClick={() => {
              data.map((el) => {
                if (activeButton > el.id) {
                  setActiveButton(activeButton - 1);
                }
              });
              activeTabDirection(1200);
            }}
            disabled={activeButton === 1}
          >
            <BigBlueArrowIcon />
          </button>
          <div className="lesson-buttons__wrapper">
            {data.map((button) => (
              <button
                key={button.id}
                className={
                  activeButton === button.id && !button.disabled
                    ? "lesson-button__active"
                    : "lesson-button"
                }
                onClick={() => handleButtonClick(button.id)}
                disabled={button.disabled}
              >
                {button.id}-Dars
              </button>
            ))}
          </div>
          <button
            className="lesson-navigation__button"
            onClick={() => {
              data.map((el) => {
                if (activeButton < el.id) {
                  setActiveButton(activeButton + 1);
                }
              });
              activeTabDirection(700);
            }}
            disabled={activeButton === data[data.length - 1].id}
          >
            <BigBlueArrowIcon
              style={{
                transform: "rotateZ(180deg) translateY(-3px) translateX(-2px)",
              }}
            />
          </button>
        </div>

        <div className="tab-content__container">
          {data.map((button) =>
            activeButton === button.id ? (
              <>
                <div key={button.id} className="tab-sub__buttons">
                  {button.tab.map((tab) => (
                    <div
                      key={tab.id}
                      className={`sub-button ${
                        activeTab === tab.id ? "active" : ""
                      }`}
                      onClick={() => handleTabClick(tab.id)}
                    >
                      {tab.id}-Savol
                    </div>
                  ))}
                </div>

                <div className="tab__content">
                  <div className="tab-question__wrapper">
                    <p className="content__question">
                      {button.tab.find((tab) => tab.id === activeTab)?.question}{" "}
                      ?
                    </p>

                    <div className="content__desk"></div>
                  </div>

                  <div className="content-variants__wrapper">
                    {button.tab
                      .find((tab) => tab.id === activeTab)
                      ?.options.map((option, index) => (
                        <button
                          key={index}
                          className="content__variant"
                          onClick={() => handleOptionSelect(index)}
                          style={{
                            backgroundColor:
                              selectedOption === index
                                ? index ===
                                  button.tab.find((tab) => tab.id === activeTab)
                                    ?.answer
                                  ? "#166199"
                                  : "#FC6B57"
                                : "white",
                            color: selectedOption === index ? "#fff" : "#000",
                          }}
                        >
                          {option}
                          {selectedOption === index ? (
                            index ===
                            button.tab.find((tab) => tab.id === activeTab)
                              ?.answer ? (
                              <GreenTickIcon size="20px" color="#fff" />
                            ) : (
                              <ErrorIcon />
                            )
                          ) : (
                            <div className="content-variant__item"></div>
                          )}
                        </button>
                      ))}
                  </div>
                </div>
              </>
            ) : null
          )}
        </div>
      </div>
      <div className="tab-bottom__content">
        <div className="timer__wrapper">
          <CountdownCircleTimer
            size={100}
            key={key}
            isPlaying
            duration={10}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[7, 5, 2, 0]}
            onComplete={() => {
              setKey((prevKey) => prevKey + 1);
              handleNextTaskTab();
            }}
          >
            {children}
          </CountdownCircleTimer>

          <p className="timer__info">Tugash vaqti</p>
        </div>

        <div className="task-navigation__wrapper">
          <button
            className="task-navigation__button"
            onClick={handlePrevTaskTab}
          >
            <GradientArrowIcon style={{ transform: "rotate(180deg)" }} /> Prev
          </button>
          <button
            className="task-navigation__button"
            onClick={handleNextTaskTab}
          >
            Next <GradientArrowIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Tests;
