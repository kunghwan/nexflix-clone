import { useState, useEffect } from "react";

import { useTextInput } from "../../components/ui/TextInput";
import OpenColor from "open-color";
import styles from "./home.css";
import { anotherReasons } from "../../assets/fakebase";
import AnotherReasonItem from "./AnotherReasonItem";

const Home = () => {
  const [text, setText] = useState("");
  const Text = useTextInput();

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(Text.ref.current.value);
  };

  return (
    <div>
      <h1 className={styles.h1}>Home</h1>

      {
        // 함수를 사용한다 = 호출 call/fire => ()까지 적어줌
        anotherReasons.map((reason) => {
          return <AnotherReasonItem key={reason.title} {...reason} />;
        })
      }
    </div>
  );
};

export default Home;
