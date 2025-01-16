import { useState, useEffect, useMemo, useCallback, useRef } from "react";

const TodoForm = ({ todos, setTodos, initialTodo, isAdd, onCanCel }) => {
  const ref = useRef();
  const [text, setText] = useState(initialTodo ?? "");
  const message = useMemo(() => {
    // return '',null
    if (text.length === 0) {
      return "할일을 입력하세요.";
    }
    const found = todos.find((todo) => {
      if (todo === text) {
        return todo;
      }
    });
    if (found) {
      return "중복된 할일입니다.";
    }
    return null;
  }, [text, todos]);
  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (message) {
        alert(message);
        return setTimeout(() => {
          ref.current?.focus();
        }, 300);
      }

      setTodos((prev) => {
        if (!isAdd) {
          const index = todos.findIndex((item) => {
            if (item === initialTodo) {
              return item;
            }
          });
          if (index >= 0) {
            let copy = [...prev];
            copy[index] = text;
            return copy;
          }

          return [...prev];
        }

        return [...prev, text];
      });
      console.log(text);
    },
    [ref, message, text, isAdd]
  );

  //   const TodoItem = useCallback(({ todo }) => {
  //     return <li>{todo}</li>;
  //   }, []);

  useEffect(() => {
    console.log(text);
  }, [text]);

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        ref={ref}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button>{isAdd ? "추가" : "수정"}</button>
      {onCanCel && (
        <button onClick={onCanCel} type="button">
          취소
        </button>
      )}
    </form>
  );
};

export default TodoForm;
