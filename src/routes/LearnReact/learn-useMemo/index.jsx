import { useCallback, useMemo, useRef, useState } from "react";

const LearnUseMemo = () => {
  // const 변수명 = useMemo(
  //     () => {}
  // ) ()안에 콜백함수와 의존성을 넣어줘야한다.

  //   1. 초기값으로 사용하는 경우
  const initialState = useMemo(() => {
    return 0;
  }, []);

  const [state, setState] = useState(initialState);

  const stateMessage = useMemo(() => {
    if (state === 0) {
      return "상품을 담아주세요.";
    }
    if (state > 10) {
      return "10개이상 구매 ㄴㄴ";
    }
    return null;
  }, [state]);

  //   const onSubmit = (e) => {
  //     e.preventDefault();
  //     if (stateMessage) {
  //       return alert(stateMessage);
  //     }
  //     // const message = getMessage(state);
  //     // console.log(state, stateMessage, initialState);
  //   };

  const ref = useRef();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(state);

      setTimeout(() => {
        if (stateMessage) {
          alert(stateMessage);
          setTimeout(() => {
            ref.current.showPicker();
          }, 500);
          return;
        }
      });
    },
    [state, stateMessage, ref]
  );

  return (
    <div>
      <h1>sdfsd</h1>
      <form action="" onSubmit={onSubmit}>
        <select
          name=""
          id=""
          onChange={(e) => setState(Number(e.target.value))}
          ref={ref}
          value={state}
        >
          <option value="">수량선택</option>
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
        <button>주문하기</button>
      </form>
    </div>
  );
};

export default LearnUseMemo;

const getMessage = (state) => {};
