import { Card, Text } from "@geist-ui/react";
import { useEffect, useState } from "react";
import { Feature as FeatureInterface } from "types";

interface Props {
  featureRequests: FeatureInterface[];
}

const Feature = ({ featureRequests }: Props) => {
  const [sortedFeatureRequests, setSortedFeatureRequests] = useState<
    FeatureInterface[]
  >([]);

  useEffect(() => {
    if (featureRequests.length > 0) {
      setSortedFeatureRequests(featureRequests.sort((a, b) => b.date - a.date));
    }
  }, [featureRequests]);

  if (featureRequests?.length === 0)
    return <div>No feature requests. Check again later 🤗</div>;

  return (
    <div className="flex flex-col">
      {sortedFeatureRequests?.map((feature, i) => (
        <Card className="!my-2 flex" key={i}>
          <div className="flex flex-col">
            <Text h5>{feature.feature}</Text>
            <small className="font-semibold text-gray-400">
              Added at:{" "}
              <span className="font-normal">
                {new Date(feature.date).toLocaleString()}
              </span>
            </small>
            {feature?.email?.length > 0 && (
              <small className="font-semibold text-gray-400">
                Requested by:{" "}
                <a
                  href={`mailto:${feature.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-normal"
                >
                  {feature.email}
                </a>
              </small>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Feature;
