import { useRef, useEffect, useState, useCallback, useMemo } from "react";

const LearnUseRef = () => {
  // 코드가 길어질 지언정 속도개선에 효과적임
  // 상수는 2번 실행하지만 애는 한번만 실행하기 때문임
  const initialState = useMemo(() => {
    return 0 + user;
  }, []);

  //useState에 초기값을 넣을 떄 많이씀
  // 예시

  const [state, setState] = useState(0);
  const counting = () => {
    setState((prev) => prev + 1);
  };
  //  ref = reference js =document.querySelector()
  const pRef = useRef();

  const checkP = () => {
    if (pRef.current) {
      console.log(pRef.current.innerText);
      //   pRef.current.innerText = "ASDFDF";
    }
  };

  const inputRef = useRef();
  const checkInput = () => {
    console.log(inputRef.current.value);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    console.log(state, pRef.current?.innerText);
  });

  return (
    <div>
      <h1>useRef</h1>
      <p ref={pRef}>{state}</p>
      <button onClick={counting}>++</button>
      <button onClick={checkP}>Check P Tag</button>

      <input type="text" ref={inputRef} />
      <button onClick={checkInput}>Check Input</button>
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default LearnUseRef;
