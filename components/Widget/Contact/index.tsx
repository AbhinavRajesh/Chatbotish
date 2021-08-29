import { Contact as ContactInterface } from "types";

interface Props {
  contacts: ContactInterface;
}

const Contact = ({ contacts }: Props) => {
  return (
    <div className="flex flex-col">
      {contacts !== null ? (
        <>
          {contacts.email.length > 0 && (
            <div className="chatbotish__FAQ">
              <span className="chatbotish__FAQQuestion">
                <span>Email:</span>
              </span>
              <span className="chatbotish__FAQAnswer">
                <span style={{ fontWeight: 400 }}>{contacts.email}</span>
              </span>
            </div>
          )}
          {contacts.phone.length > 0 && (
            <div className="chatbotish__FAQ">
              <span className="chatbotish__FAQQuestion">
                <span>Phone:</span>
              </span>
              <span className="chatbotish__FAQAnswer">
                <span style={{ fontWeight: 400 }}>{contacts.phone}</span>
              </span>
            </div>
          )}
          {contacts.address.length > 0 && (
            <div className="chatbotish__FAQ">
              <span className="chatbotish__FAQQuestion">
                <span>Address:</span>
              </span>
              <span className="chatbotish__FAQAnswer">
                <span style={{ fontWeight: 400 }}>{contacts.address}</span>
              </span>
            </div>
          )}
        </>
      ) : (
        <div>Add Contact Details and click save to preview them</div>
      )}
    </div>
  );
};

export default Contact;
