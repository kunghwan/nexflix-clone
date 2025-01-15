import { useEffect, useState } from "react";

const LearnUseEffect = () => {
  const [time, setTime] = useState(0); // second 초
  const [count, setCount] = useState(0);

  const [start, setStart] = useState(false);

  const onStart = () => {
    setStart(true);
  };

  const onReset = () => {
    setTime(0);
  };

  const onStop = () => {
    setStart(false);
  };

  useEffect(() => {
    if (start) {
      const counting = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      counting;

      return () => {
        clearInterval(counting);
      };
    }
  }, [start]);
  // []의존성을 추가한 뒤에 useEffect를 사용하면 해당 컴포넌트가 render 부분에서 딱 한번 실행한다.

  // []안에는 의존성을 넣어주는데 해당 변수가 업데이트 될 때마다 실행한다.

  return (
    <div>
      <h1>dsfsdf</h1>
      <div>
        <p>{time} 초</p>
        <button onClick={onReset}>초기화</button>
        <button onClick={onStart}>시작</button>
        <button onClick={onStop}>stop</button>
      </div>
    </div>
  );
};

export default LearnUseEffect;
