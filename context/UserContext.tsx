import { useUser } from "@auth0/nextjs-auth0";
import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { User } from "types";
import firebase, { db } from "../utils/firebase";

interface ContextProps {
  user: User | null;
  getUser?: () => void;
  setUser?: Dispatch<SetStateAction<User | null>>;
}

export const UserContext = createContext<ContextProps>({
  user: null,
});

const UserProvider = (props: any) => {
  const [user, setUser] = useState<User | null>(null);

  const { user: auth0User, isLoading, error } = useUser();

  const getUser = async () => {
    const email: string = auth0User?.email;
    // const customToken = await auth0User.getToken();
    // await firebase.auth().signInWithCustomToken(customToken as any);

    if (email) {
      db.collection("users")
        .doc(email)
        .get()
        .then((snapshot) => {
          if (!snapshot.exists) {
            db.collection("users").doc(email).set({
              email: email,
              domains: [],
              domainSnapshot: [],
            });
            setUser({
              email: email,
              domains: [],
              domainSnapshot: [],
            });
          } else {
            setUser(snapshot.data() as User);
          }
        });
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    if (user === null) {
      getUser!();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth0User]);

  return (
    <UserContext.Provider value={{ user, getUser, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
