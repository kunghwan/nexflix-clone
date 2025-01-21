import { useState, useEffect, useCallback, useMemo } from "react";

import OpenColor from "open-color";
import { useMyContext } from "../../contextApi/ContextProvider";
import { user, users } from "../../assets/fakebase";
import Input from "../../components/ui/Input";
import { useNavigate } from "react-router-dom";
import CheckBox from "../../components/ui/CheckBox";
import styles from "./signin.css";

const Signin = () => {
  const navi = useNavigate();

  const { email } = useMyContext();
  const [value, setValue] = useState(email);
  const [pwd, setPwd] = useState("");
  const [checked, setChecked] = useState(false);

  const emailMessage = useMemo(() => {
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

  const pwdMessage = useMemo(() => {
    const length = pwd.length;
    if (length === 0) {
      return "비밀번홀르 입력해주세요";
    }

    if (length <= 4) {
      return "비번이 너무 짧습니다 5~12자리 작성";
    }
    if (length > 12) {
      return "비번이 너무 깁니다 ";
    }

    return null;
  }, [pwd]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (emailMessage) {
        return alert(emailMessage);
      }
      if (pwdMessage) {
        return alert(pwdMessage);
      }

      const foundEmail = users.find((user) => {
        if (user.email === value) {
          return user;
        }
        return;
      });
      if (!foundEmail) {
        return alert("존재하지 않는 유저입니다.");
      }

      const foundPwd = users.find((user) => {
        if (user.password === pwd) {
          return user;
        }
        return;
      });
      if (!foundPwd) {
        return alert("비밀번호가 일치하지 않음");
      }

      console.log("환영합니다");
      navi("/");
    },
    [emailMessage, pwdMessage, value, pwd, navi]
  );

  useEffect(() => {
    // window === document 불러와서 스크롤 조절하는 방법
    // scrollTo함수인지 아닌지
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <form action="" onSubmit={onSubmit} className={styles.form}>
        <Input
          id="email"
          placeholder={"이메일 주소"}
          setValue={setValue}
          value={value}
        />
        <Input
          id="pwd"
          placeholder={"비밀번호"}
          setValue={setPwd}
          value={pwd}
          type="password"
        />

        <button className={styles.login}>로그인</button>
        <button className={styles.forget}>비밀번호를 잊으셨나요?</button>

        <CheckBox
          state={checked}
          label={"로그인 정보를 저장하겠습니다"}
          onClick={() => {
            setChecked((prev) => !prev);
          }}
          id="check"
        />
        <button lassName={styles.new}>
          Netflix 회원이 아닌가요?
          <span className={styles.span}>지금 가입하세요</span>
        </button>
      </form>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        alias similique cupiditate fugit? Quisquam, fugiat accusamus officia
        culpa optio fuga exercitationem voluptatum magni iste quibusdam error
        quasi dolore quia doloribus!
      </p>
      {/* <p
        style={{
          fontSize: 100,
        }}
      >
        {email}
      </p> */}
    </div>
  );
};

export default Signin;
