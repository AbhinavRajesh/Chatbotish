import { Button, Input, Text, useToasts } from "@geist-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Contact as ContactInterface } from "types";

interface Props {
  contacts: ContactInterface;
  setContacts: Dispatch<SetStateAction<ContactInterface>>;
  setShowContact: Dispatch<SetStateAction<boolean>>;
}

const Contact = ({ contacts, setContacts, setShowContact }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const [toasts, setToast] = useToasts();

  useEffect(() => {
    if (contacts !== null) {
      setEmail(contacts.email);
      setPhone(contacts.phone);
      setAddress(contacts.address);
    }
  }, [contacts]);

  const addContact = () => {
    setLoading(true);
    if (
      email.trim().length === 0 &&
      phone.trim().length === 0 &&
      address.trim().length === 0
    )
      setToast({
        text: "Email, Phone or Address cannot be empty!",
        type: "error",
      });
    else {
      setContacts({
        email,
        phone,
        address,
      });
      setEmail("");
      setPhone("");
      setAddress("");
    }
    setShowContact(true);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-start px-4">
      <div className="mb-2 flex flex-col items-start">
        <Input
          clearable
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        >
          <Text h5>Email</Text>
        </Input>
        <Input
          clearable
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        >
          <Text h5 className="!mt-3">
            Phone
          </Text>
        </Input>
        <Input
          clearable
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        >
          <Text h5 className="!mt-3">
            Address
          </Text>
        </Input>
        <Button
          type="success-light"
          htmlType="button"
          className="mt-3"
          loading={loading}
          onClick={addContact}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default Contact;
