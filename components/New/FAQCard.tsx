import { Button, Card, Text } from "@geist-ui/react";

interface Props {
  id: number;
  question: string;
  answer: string;
  removeFAQ: (id: number) => void;
}

const FAQCard = ({ question, answer, id, removeFAQ }: Props) => {
  return (
    <Card className="!my-2 relative">
      <Text h5>{question}</Text>
      <Text p>{answer}</Text>
      <Button
        type="error-light"
        className="!text-xs !font-bold md:!text-base md:!font-normal"
        onClick={() => removeFAQ(id)}
      >
        Remove
      </Button>
    </Card>
  );
};

export default FAQCard;
