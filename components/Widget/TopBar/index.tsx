import { Dispatch, SetStateAction, useEffect } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

interface Props {
  options: Options;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
  text: string;
}

interface Options {
  bug: boolean;
  feedback: boolean;
  faq: boolean;
  contact: boolean;
  feature: boolean;
}

const TopBar = ({ options, selected, setSelected, text }: Props) => {
  const navItems = {
    0: "Feedback",
    1: "Report Bugs",
    2: "Feature Requests",
    3: "FAQ",
    4: "Contact Us",
  };

  const optionNavMap = {
    "Report Bugs": options.bug,
    Feedback: options.feedback,
    "Contact Us": options.contact,
    "Feature Requests": options.feature,
    FAQ: options.faq,
  };

  useEffect(() => {
    const valid = [];
    Object.entries(optionNavMap).map(([key, value]) => {
      if (value) {
        valid.push(
          parseInt(
            Object.keys(navItems).find((navIndex) => navItems[navIndex] === key)
          )
        );
      }
    });
    if (!valid.includes(selected)) setSelected(valid[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  return (
    <div className="chatbotish__topBar">
      <h4>{text}</h4>
      <ScrollContainer className="chatbotish__nav">
        {Object.entries(navItems).map(([key, val], i) =>
          optionNavMap[val] ? (
            <span
              className={`chatbotish__navItem ${
                selected === parseInt(key) && "chatbotish__activeTab"
              }`}
              onClick={() => setSelected(parseInt(key))}
              key={i}
            >
              {val}
            </span>
          ) : null
        )}
      </ScrollContainer>
    </div>
  );
};

export default TopBar;
