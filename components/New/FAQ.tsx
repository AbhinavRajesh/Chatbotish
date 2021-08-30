import { Button, Input, Text, useToasts } from "@geist-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import FAQCard from "./FAQCard";

interface Props {
  faqs: Faq[];
  setFaqs: Dispatch<SetStateAction<Faq[]>>;
}

interface Faq {
  id: number;
  question: string;
  answer: string;
}

const FAQ = ({ faqs, setFaqs }: Props) => {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const [toasts, setToast] = useToasts();

  const addFAQ = () => {
    setLoading(true);
    if (question.trim().length === 0 || answer.trim().length === 0)
      setToast({ text: "Question and Answer cannot be empty!", type: "error" });
    else {
      const id = faqs.length !== 0 ? faqs[faqs.length - 1].id + 1 : 0;
      setFaqs([
        ...faqs,
        {
          id: id,
          question,
          answer,
        },
      ]);
      setQuestion("");
      setAnswer("");
    }
    setLoading(false);
  };

  const removeFAQ = (id: number) => {
    setFaqs(faqs.filter((faq) => faq.id !== id));
  };

  return (
    <div className="flex flex-col items-start">
      <div className="mb-2 flex flex-col items-start">
        <Input
          clearable
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        >
          <Text h5>Question</Text>
        </Input>
        <Input
          clearable
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        >
          <Text h5 className="!mt-3">
            Answer
          </Text>
        </Input>
        <Button
          type="success-light"
          htmlType="button"
          className="mt-3"
          loading={loading}
          onClick={addFAQ}
        >
          Add FAQ
        </Button>
      </div>
      {faqs?.map((faq, i) => (
        <FAQCard
          key={i}
          question={faq.question}
          answer={faq.answer}
          id={faq.id}
          removeFAQ={removeFAQ}
        />
      ))}
    </div>
  );
};

export default FAQ;
