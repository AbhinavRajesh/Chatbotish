import { Card, Text } from "@geist-ui/react";
import { useEffect, useState } from "react";
import { Bug as BugInterface } from "types";

interface Props {
  bugReports: BugInterface[];
}

const Bug = ({ bugReports }: Props) => {
  const [sortedBugReports, setSortedBugReports] = useState<BugInterface[]>([]);

  useEffect(() => {
    if (bugReports.length > 0) {
      setSortedBugReports(bugReports.sort((a, b) => b.date - a.date));
    }
  }, [bugReports]);

  if (bugReports.length === 0) return <div>No bugs reported 🤗</div>;

  return (
    <div className="flex flex-col">
      {sortedBugReports?.map((bug, i) => (
        <Card className="!my-2 flex" key={i}>
          <div className="flex flex-col">
            <Text h5>{bug.bug}</Text>
            <Text className="!mt-0">{bug.steps}</Text>
            <small className="font-semibold text-gray-400">
              Added at:{" "}
              <span className="font-normal">
                {new Date(bug.date).toLocaleString()}
              </span>
            </small>
            {bug?.email?.length > 0 && (
              <small className="font-semibold text-gray-400">
                Reported by:{" "}
                <a
                  href={`mailto:${bug.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-normal"
                >
                  {bug.email}
                </a>
              </small>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Bug;
