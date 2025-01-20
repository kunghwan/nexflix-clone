// 1. useState,useCallback 불러오기

import { IoIosArrowForward } from "react-icons/io";
import styles from "./Start.css";
import { useState, useCallback, useMemo, useEffect } from "react";
import Input from "../../components/ui/Input";
import { users } from "../../assets/fakebase";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../../contextApi/ContextProvider";

const Start = () => {
  const navi = useNavigate();
  const { onChangeEmail } = useMyContext();
  // 2. value란 이름의 state를 useState를 사용해서 선언
  const [value, setValue] = useState("");
  const message = useMemo(() => {
    if (value.length === 0) {
      return "이메일을 입력해주세요.";
    }

    if (!value.includes("@")) {
      return "@를 포함해주세요.";
    }
    //   포함하지않으면
    const split = value.split("@");
    // 기준

    // split[0] = 이메일 앞주소
    // split[1] = @뒤으 주소
    if (!split[1].includes(".")) {
      return "이메일 주소를 확인해주세요.";
    }

    const split2 = split[1].split(".");

    if (!split2[1].length === 0) {
      return "이메일 주소의 마지막 자리를 확인해주세요.";
    }
    return null;
  }, [value]);

  // 3.Input컴포넌트로 value,setValue 전달하고 Input 컴포넌트에서 인자값으로 value,setValue 받기
  // 4. onSubmit 이란 이름으로 useCallback 함수만들고 인자값으로 e받아와서 새로고침 방지하고 value값 출력하기
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // 1. value길이가 0, 아무것도 입력되지 않으면 경고
      if (value.length === 0) {
        return alert("이메일을 입력해주세요");
      }
      //2. '@'가 입력되지 않으면 경고
      if (message) {
        return alert(message);
      }

      const found = users.find((user) => {
        if (user.email === value) {
          return user;
        }
      });

      onChangeEmail(value);

      if (!found) {
        return navi("/signup");
      }
      navi("/login");

      // 3. '@' 뒤의 글자에 '.' 없으면 경고

      // 4. 이메일과 credential 의이메일과 다르면 경고
    },
    [value, message, navi, onChangeEmail]
  );
  useEffect(() => {
    const str = "tester@test.com";

    const split = str.split("@");

    console.log(split);
  }, []);

  //   5.form과 연결하기 onSubmit 속성에 위의 함수 넣기
  return (
    <div className={styles.comtainer}>
      <div className={styles.div}>
        <h1 className={styles.h1}>영화, 시리즈 등을 무제한으로</h1>
        <p className={styles.p}>
          5,500원으로 시작하세요. 멤버십은 언제든지 해지 가능합니다.
        </p>
        <p className={styles.p}>
          시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
          입력하세요.
        </p>
      </div>
      <form className={styles.form} onSubmit={onSubmit}>
        {/* <Input className={styles.input} /> */}
        <Input
          id={"email"}
          placeholder={"이메일 주소"}
          value={value}
          setValue={setValue}
        />
        <div className={styles.buttonWrap}>
          <button className={styles.button}>
            시작하기
            <span className={styles.icon}>
              <IoIosArrowForward />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Start;
