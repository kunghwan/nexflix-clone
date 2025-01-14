import { useNavigate } from "react-router-dom";
import { HiLanguage } from "react-icons/hi2";
import { RiNetflixFill } from "react-icons/ri";
import OpenColor from "open-color";

const Header = () => {
  const navi = useNavigate();

  const onT = () => {
    navi("/login");
  };

  return (
    <header
      className="flex justify-between items-center fixed top-0 left-0 w-full text-gray-100 z-50 bg-gray-900"
      style={{
        borderBottom: `1px solid ${OpenColor.gray[7]}`,
        borderColor: OpenColor.gray[7],
        height: "auto",
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
      </ul>
    </header>
  );
};

export default Header;
