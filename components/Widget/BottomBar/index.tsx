import Contact from "../Contact";
import FAQ from "../FAQ";
import FeatureRequest from "../FeatureRequest";
import Feedback from "../Feedback";
import ReportBugs from "../ReportBugs";

interface Props {
  selected: number;
  faqs: {
    id: number;
    question: string;
    answer: string;
  }[];
}

const BottomBar = ({ selected, faqs }: Props) => {
  return (
    <div className="chatbotish__bottomBar">
      {selected === 0 && <Feedback />}
      {selected === 1 && <ReportBugs />}
      {selected === 2 && <FeatureRequest />}
      {selected === 3 && <FAQ data={faqs} />}
      {selected === 4 && <Contact />}
    </div>
  );
};

export default BottomBar;
