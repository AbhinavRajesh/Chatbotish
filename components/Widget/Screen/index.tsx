import { useState } from "react";
import { Contact } from "types";
import BottomBar from "../BottomBar";
import TopBar from "../TopBar";

interface Props {
  faq: boolean;
  feedback: boolean;
  bug: boolean;
  feature: boolean;
  contact: boolean;
  text: string;
  faqs: {
    id: number;
    question: string;
    answer: string;
  }[];
  contacts: Contact;
}

const Screen = ({
  bug,
  contact,
  faq,
  feature,
  feedback,
  text,
  faqs,
  contacts,
}: Props) => {
  const [selected, setSelected] = useState<number>(0);

  const options = {
    bug,
    contact,
    faq,
    feature,
    feedback,
  };

  return (
    <div className="chatbotish__screen">
      <TopBar
        options={options}
        text={text}
        selected={selected}
        setSelected={setSelected}
      />
      <BottomBar selected={selected} faqs={faqs} contacts={contacts} />
      <div className="chatbotish__powered">
        Powered by <a href="http://localhost:3000">Chatbotish</a>
      </div>
    </div>
  );
};

export default Screen;
