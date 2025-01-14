import { useNavigate, useLocation } from "react-router-dom";
import { HiLanguage } from "react-icons/hi2";
import { RiNetflixFill } from "react-icons/ri";
import OpenColor from "open-color";
import { useEffect } from "react";
import { user } from "../../assets/fakebase";

const Header = () => {
  const navi = useNavigate();

  // 오른편에서 뭔가를 가지고올때 바로 중괄호를 써서 가져올수 있다
  // const location = useLocation()
  // const pathname = location.pathname 이과정을 아래 처럼 할수 있음

  const { pathname } = useLocation();

  const onT = () => {
    navi("/login");
  };

  // height : auto는 높이를 지정하면 버튼의 크기를 유동적으로 전환?
  // 내용에 맞게 요소의 크기를 자동으로 조정, 콘텐츠에 맞춰 높이가 자동으로 결정됨

  // 1. 확인용
  // 2. 클릭하거나, 동작하지 않을 떄에도 확인하고 싶을 떄
  useEffect(() => {
    console.log(pathname);
  }, [pathname]); // [] dependency 디펜던시 의존성 바꿀때마다 알려줌

  return (
    <header
      className="flex justify-between items-center fixed top-0 left-0 w-full text-gray-100 z-50 bg-gray-900"
      style={{
        borderBottom: `1px solid ${OpenColor.gray[7]}`,
        borderColor: OpenColor.gray[7],
        paddingRight: 10,
      }}
    >
      <button
        className="h-10  px-2.5 text-xl text-red-600"
        style={{
          fontSize: 20,
          color: OpenColor.red[8],
          padding: "20px 10px",
          height: "auto",
        }}
      >
        <RiNetflixFill />
      </button>
      <ul
        className="flex gap-x-2.5"
        style={{
          display: "flex",
          columnGap: 10,
          alignItems: "center",
        }}
      >
        <li>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              padding: "5px 10px",
              border: "1px solid",
              borderRadius: 4,
              fontSize: ".75rem",
            }}
          >
            <HiLanguage />
            언어
          </button>
        </li>
        {/* 조건 &&연산자 === 앞의 조건에 부합할떄 실행할 코드를 && 오른편에 적어줍니다. */}
        {/* *조건 ? : 연산자 === 앞의 조건에 부합때 실행할 코드는 ? 오른편에, 앞의 조건에 부합하지 않을 때 실행할 코드는 : 오른편에 */}

        {(pathname !== "/login" || (!user && pathname !== "/login")) && (
          <li>
            <button
              style={{
                padding: "5px 10px",
                background: OpenColor.red[7],
                fontSize: ".75rem",
                borderRadius: 4,
              }}
              onClick={onT}
            >
              로그인
            </button>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
