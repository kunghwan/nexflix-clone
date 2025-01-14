// Props Drilling
// 다른 곳에서 아래의 컴포넌트를 불러 쓸 때 전달해 주는 값

// size = 'sm' \ 'lg' \'xl'
// fonstSize
const Button = ({ onClick, type, children, style }) => {
  return (
    <button
      onClick={onClick}
      type={type ?? "button"}
      style={{
        padding: "5px 10px",
        borderRadius: 4,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style, // ...변수명 복사하기 객체를 복사할때는 {}안에 ..., 배열을 복사할 때는 [] 안에 ... 스타일은 항상 맨밑에 왜냐하면 자바스크립트는 위에서 아래로 하기 때문에
      }}
    >
      {/* 조건 ?? 연산자 <==> 조건 && 연산자 */}
      {/* 앞의 조건이 부합하지 않을 때 실행하는 코드를 ?? 오른편에 작성 */}
      {children ?? "Button"}
    </button>
  );
};

// 핸드폰 버튼 => 2,3가지
// 1. 클릭했을 때 투명도 변함
// 2. 클릭시 색깔이 조금 진하게 변함
// 3. 아무 변화 없음
export { Button };
