interface Props {
  data: Faq[];
}

interface Faq {
  id: number;
  question: string;
  answer: string;
}

const FAQ = ({ data }: Props) => {
  return (
    <div className="chatbotish__feedbackForm">
      {data.length !== 0 ? (
        data?.map((d, i) => (
          <div className="chatbotish__FAQ" key={i}>
            <span className="chatbotish__FAQQuestion">
              <span>{i + 1}.</span> {d.question}
            </span>
            <span className="chatbotish__FAQAnswer">
              <span>A.</span> {d.answer}
            </span>
          </div>
        ))
      ) : (
        <div>Add FAQs!</div>
      )}
    </div>
  );
};

export default FAQ;
