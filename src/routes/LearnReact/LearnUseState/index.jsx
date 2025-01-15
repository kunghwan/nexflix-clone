import { useState } from "react";

const UseState = () => {
  const [string, setString] = useState("");

  // 함수 이름은 버튼의 이름을 따서 앞에 on만 붙어서 적을 수도 있다.
  const onChangeString = () => {
    //  1.직접 입력하기
    // 초기값과 동일한 타입의 값을 입력한다.
    // setString("유경환");
    // 2. 이전값을 가져와서 가공처리하기
    setString((prev) => {
      return `${prev}  경환`;
    });
  };

  const [number, setNumber] = useState(0);

  const onMinus = () => {
    setNumber((prev) => {
      return prev - 1; //숫자
    });
  };

  const onReset = () => {
    // 1.값을 직접넣는다 초기값과 같은 타입
    setNumber(0);
  };

  const onPlus = () => {
    setNumber((prev) => {
      return prev + 1;
    });
  };

  const [boolean, setBoolean] = useState(false);
  const [boolean2, setBoolean2] = useState(false);
  const [boolean3, setBoolean3] = useState(false);

  const onSwitch1 = () => {
    setBoolean(true);
  };
  const onSwitch2 = () => {
    setBoolean2((prev) => {
      // boolean 타입은 모아니면도 참/거짓
      // !boolean => boolean의 반대값
      return !prev;
    });
  };

  const onSwitch3 = () => {
    setBoolean3((prev) => !prev);
  };

  const onMasetrSwitch = () => {
    if (!boolean && !boolean2 && boolean3) {
      setBoolean(true);
      setBoolean2(true);
      setBoolean3(true);
      return;
    }
    setBoolean(false);
    setBoolean2(false);
    setBoolean3(false);
  };

  const [obj, setObj] = useState({ last: "유", first: "경환" });
  const onSubmitObj = () => {
    const newFirstName = "빈";
    const newLastName = "원";

    // 1. 이름만 개명
    // setObj((prev) => {
    //   return { ...prev, first: newFirstName };
    //   // 순서중요
    // });
    // 2. 성만 개명
    setObj((prev) => {
      return { ...prev, last: newLastName };
    });
    // 3 성, 이름 모두 개명
    // const newName = {
    //   last: newLastName,
    //   first: newFirstName,
    // };
    // // setObj({
    // //   last: newLastName,
    // //   first: newFirstName,
    // // });
    // setObj(newName); //바로 새운 값을 입력
  };

  return (
    <div>
      <h1>Learn useState</h1>
      <input
        type="text"
        value={string}
        onChange={(e) => setString(e.target.value)}
      />
      <p
        style={{
          fontSize: 100,
          color: "tomato",
        }}
      >
        {string}
      </p>
      <button onClick={onChangeString}>Change String</button>

      <div>
        <button onClick={onMinus}>-</button>
        <button onClick={onReset}>{number}</button>
        <button onClick={onPlus}>+</button>
      </div>

      <div>
        <p>Switch is {boolean ? "On" : "Off"}</p>
        <button onClick={onSwitch1}>Switch</button>
      </div>
      <div>
        <p>Switch is {boolean2 ? "On" : "Off"}</p>
        <button onClick={onSwitch2}>Switch</button>
      </div>
      <div>
        <p>Switch is {boolean3 ? "On" : "Off"}</p>
        <button onClick={onSwitch3}>Switch</button>
      </div>

      <button onClick={onMasetrSwitch}>Master Switch</button>

      <div>
        <p>
          {obj.last}
          {obj.first}
        </p>
        <input
          type="text"
          value={string}
          onChange={(e) => setString(e.target.value)}
        />
        <button onClick={onSubmitObj}>접수</button>
      </div>
    </div>
  );
};

export default UseState;
