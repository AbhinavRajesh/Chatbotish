import { Card, Text } from "@geist-ui/react";
import { useEffect, useState } from "react";
import { Feedback as FeedbackInterface } from "types";

interface Props {
  feedback: FeedbackInterface[];
}

const Feedback = ({ feedback }: Props) => {
  const [sortedFeedback, setSortedFeedback] = useState<FeedbackInterface[]>([]);

  useEffect(() => {
    if (feedback.length > 0) {
      setSortedFeedback(feedback.sort((a, b) => b.date - a.date));
    }
  }, [feedback]);

  if (feedback.length === 0)
    return <div>No feedbacks. Check again later 🤗</div>;

  return (
    <div className="flex flex-col">
      {sortedFeedback?.map((feedback, i) => (
        <Card className="!my-2 flex" key={i}>
          <div className="flex flex-col">
            <Text h5>{feedback.feedback}</Text>
            <small className="font-semibold text-gray-400">
              Added at:{" "}
              <span className="font-normal">
                {new Date(feedback.date).toLocaleString()}
              </span>
            </small>
            {feedback?.email?.length > 0 && (
              <small className="font-semibold text-gray-400">
                Feedback from:{" "}
                <a
                  href={`mailto:${feedback.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-normal"
                >
                  {feedback.email}
                </a>
              </small>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Feedback;
