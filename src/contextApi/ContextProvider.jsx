import {
  useState,
  useContext,
  useEffect,
  createContext,
  Children,
} from "react";
import { user } from "../assets/fakebase";

const initialState = {
  email: "ysw03031@naver.com",
  onChangeEmail: () => {},
  user: {
    email: "",
    uid: "",
  },
  onUserLogin: () => {},
  onUserLogout: () => {},
};

const Context = createContext(initialState);

const ConTextProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "ysw03031@naver.com",
    uid: "tester1",
  });
  const onUserLogin = (email, uid) => {
    setUser({ email, uid });
  };
  const onUserLogout = () => {
    setUser(null);
  };
  const [email, setEmail] = useState(initialState.email);
  const onChangeEmail = (newEmail) => {
    setEmail(newEmail);
  };

  useEffect(() => {
    console.log({ user });
  }, [user]);

  return (
    <Context.Provider
      value={{
        email,
        onChangeEmail,
        user,
        onUserLogin,
        onUserLogout,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// 리액트 훅과 비슷한 작명법
// use시작하는 새로운 훅을 커스텀훅이라고 부름
const useMyContext = () => {
  return useContext(Context);
};

export { Context, ConTextProvider, useMyContext };
