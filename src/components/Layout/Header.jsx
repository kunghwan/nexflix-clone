import { useNavigate, useLocation } from "react-router-dom";
import { HiLanguage } from "react-icons/hi2";
import { RiNetflixFill } from "react-icons/ri";
import OpenColor from "open-color";
import { useEffect } from "react";
import { user } from "../../assets/fakebase";
import { Button } from "../ui/Button";
import styles from "./Header.css";

const Header = () => {
  const navi = useNavigate();

  // 오른편에서 뭔가를 가지고올때 바로 중괄호를 써서 가져올수 있다
  // const location = useLocation()
  // const pathname = location.pathname 이과정을 아래 처럼 할수 있음

  const { pathname } = useLocation();

  const onL = () => {
    navi("/login");
  };
  const onT = () => {
    navi("/");
  };

  // height : auto는 높이를 지정하면 버튼의 크기를 유동적으로 전환?
  // 내용에 맞게 요소의 크기를 자동으로 조정, 콘텐츠에 맞춰 높이가 자동으로 결정됨

  // 1. 확인용
  // 2. 클릭하거나, 동작하지 않을 떄에도 확인하고 싶을 떄
  useEffect(() => {
    console.log(pathname);
  }, [pathname]); // [] dependency 디펜던시 의존성 바꿀때마다 알려줌

  return (
    <header className={styles.header}>
      <button onClick={onT} className={styles.button}>
        <RiNetflixFill />
      </button>
      <ul className={styles.ul}>
        <li>
          <button className={styles.Lbutton}>
            <HiLanguage />
            언어
          </button>
        </li>
        {/* 조건 &&연산자 === 앞의 조건에 부합할떄 실행할 코드를 && 오른편에 적어줍니다. */}
        {/* *조건 ? : 연산자 === 앞의 조건에 부합때 실행할 코드는 ? 오른편에, 앞의 조건에 부합하지 않을 때 실행할 코드는 : 오른편에 */}

        {pathname !== "/login" && (
          <li>
            <button onClick={onL} className={styles.loginButton}>
              로그인
            </button>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
