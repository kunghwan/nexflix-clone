import { useEffect, useState } from "react";

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
  const [first, setFirst] = useState(obj.first);
  const [last, setLast] = useState(obj.last);

  const onLast = () => {
    // 1.성을 입력하지 않는다면 입력해라
    if (last.length === 0) {
      return alert("입력해라,쫌");
    }
    // 2.이전 이름과 같다면 변경사항이 없다.
    if (last === obj.last) {
      return alert("달라진게 없다.");
    }
    console.log(last);
    setObj((prev) => {
      return { ...prev, last };
    });
    alert("성을 개명하였습니다");
  };

  const onFirst = () => {
    if (first.length === 0) {
      return alert("입력하삼 이름");
    }
    if (first === obj.first) {
      return alert("똑같아");
    }
    console.log(first);
    // 바꾸는 함수 setObj로 직접 바꿔줌 초기값은 무조건 있어야함
    setObj((prev) => {
      return { ...prev, first };
      // 위에코드 뒤를 바꿔치기 하면 shift효과발생
    });

    alert("이름을 개명하였습니다");
  };

  const onSubmitObj = () => {
    const newFirstName = "빈";
    const newLastName = "원";

    // 1. 이름만 개명
    // setObj((prev) => {
    //   return { ...prev, first: newFirstName };
    //   // 순서중요
    // });
    // 2. 성만 개명
    // setObj((prev) => {
    //   return { ...prev, last: newLastName };
    // });
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
  const [array, setArray] = useState(["a", "b", "c", "d"]);

  const onAddArray = () => {
    console.log(string.length);
    // 만약에 string 이라는 변수가 길이가 0일떄가 아무것도 입력하지 않을때인데 이떄에는 안됨
    if (string.length === 0) {
      return alert("적어라 좀");
    }

    const found = array.find((item) => item === string);
    if (found) {
      return alert("중복된 값");
    }

    setArray((prev) => {
      console.log(prev);
      let copy = [...prev, string];

      console.log(copy);

      return [...prev, string];
    });
  };

  const [objArray, setObjArray] = useState([
    { l: "김", f: "영화" },
    { l: "이", f: "형진" },
    { l: "강", f: "찬희" },
  ]);

  const onObjArray = () => {
    const kyh = objArray[0];
    const lhj = objArray[1];

    const newPerson = { l: last, f: first };

    const found = objArray.find((person) => {
      const isSame = isSamePerson(newPerson, person);

      if (isSame) {
        return person;
      }
    });

    // console.log(isSamePerson(kyh, kyh));

    // const found = objArray.find((person) => person === { l: last, f: first });
    if (found) {
      return alert("동일한 인물이 존재합니다");
    }
    alert("새로운 인물입니다");
    setObjArray((prev) => {
      console.log(prev);
      let copy = [...prev, newPerson];
      console.log(copy);
      return copy;
      // return [newPerson, ...prev];
    });
  };

  // useEffect(() => {
  //   console.log({
  //     objArray,
  //     array,
  //   });
  // }, [objArray, array]);

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
      </div>

      <div>
        <input
          type="text"
          value={last}
          onChange={(e) => setLast(e.target.value)}
          placeholder="새로운 성을 입력하세요"
        />
        <button onClick={onLast}>성 개명</button>
      </div>

      <div>
        <input
          type="text"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          placeholder="새로운 이름을 입력하세요"
        />
        <button onClick={onFirst}>이름 개명</button>
      </div>

      <div>
        <input
          type="text"
          value={string}
          onChange={(e) => setString(e.target.value)}
        />
        <button onClick={onAddArray}>Add to Array</button>
      </div>

      <button onClick={onObjArray}>Check Obj Array</button>
    </div>
  );
};

export default UseState;

const isSamePerson = (p1, p2) => {
  const name1 = `${p1.l} ${p1.f}`;
  const name2 = `${p2.l} ${p2.f}`;

  if (name1 === name2) {
    return true;
  }

  return false;
};

// 문자열과 문자열 비교 간단합니다 === // !== 같은지 다른지
//  숫자 비교는 ===, !==,<,>,<=,>=
// 객체 비교
// 객체의 모든값을 하나하나 일일이 비교해줘야 한다.
// ysw03031@naver.com
const email = " ysw03031@naver.com";
const xxEmail = {
  first: "ysw03031",
  last: {
    domain: "naver",
    surfix: "co,kr",
  },
};
