import { Dispatch, SetStateAction } from "react";

interface Props {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const ChatButton = ({ visible, setVisible }: Props) => {
  return (
    <div
      className="chatbotish__button"
      onClick={() => setVisible((prev) => !prev)}
    >
      {visible ? (
        <p className="chatbotish__close">X</p>
      ) : (
        <img
          src="http://localhost:3000/chatbotish.png"
          alt="C"
          className="chatbotish__buttonImage"
        />
      )}
    </div>
  );
};

export default ChatButton;
