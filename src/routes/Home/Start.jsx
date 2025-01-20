// 1. useState,useCallback 불러오기

import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./Start.css";
import { useState, useCallback } from "react";
import Input from "../../components/ui/Input";

const Start = () => {
  // 2. value란 이름의 state를 useState를 사용해서 선언
  const [value, setValue] = useState("");
  // 3.Input컴포넌트로 value,setValue 전달하고 Input 컴포넌트에서 인자값으로 value,setValue 받기
  // 4. onSubmit 이란 이름으로 useCallback 함수만들고 인자값으로 e받아와서 새로고침 방지하고 value값 출력하기
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(value);
    },
    [value]
  );
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
